// File generated from our OpenAPI spec by Scalar. See README.md for details.

import type { Gumlet } from '../client';
import type { Fetch } from '../internal/builtin-types';
import type { RequestOptions } from '../internal/request-options';
import { toFile } from '../internal/to-file';
import type { Uploadable } from '../internal/uploads';
import { castToError, isAbortError } from '../internal/errors';
import { buildHeaders } from '../internal/headers';
import { CancelReadableStream, getDefaultFetch } from '../internal/shims';
import { TRANSPORT_FIELDS, pickFetchOptions } from '../internal/transport-options';
import { sleep } from '../internal/utils/sleep';
import { MAX_ERROR_BODY_BYTES, readBodyText } from '../internal/utils/body';
import {
  APIConnectionError,
  APIConnectionTimeoutError,
  APIError,
  APIUserAbortError,
  GumletError,
} from './error';

/** How a generated signed-upload method sends its file; fixed when the SDK is generated. */
export type SignedUploadSpec = {
  /** Wire-name path to the upload URL in the initiating response. */
  readonly urlField: readonly string[];
  readonly method: 'PUT' | 'POST';
  /** `binary` sends the raw bytes; `multipart` sends `multipart/form-data` with the file as one part. */
  readonly body: 'binary' | 'multipart';
  /** Form field the file is sent under, for a `multipart` upload. */
  readonly multipartField?: string;
  /** Configured `Content-Type` of a `binary` upload. */
  readonly contentType?: string;
  /** Wire-name path to a string map of headers the upload must carry, in the initiating response. */
  readonly headersField?: readonly string[];
};

/** `Content-Type` of a `binary` upload when neither the SDK nor the file names one. */
const DEFAULT_CONTENT_TYPE = 'application/octet-stream';

/** Largest single retry delay, matching the client's own backoff ceiling. */
const MAX_RETRY_DELAY_MS = 8_000;

/**
 * Errors raised for the upload host itself — its error status, or a failure to reach it — rather
 * than for the API. Held aside rather than marked on the error, so the SDK's error classes and what
 * they serialize to stay the same; a `WeakSet` lets each error be collected as usual.
 */
const uploadHostErrors = new WeakSet<object>();

/** Records `error` as raised for the upload host and returns it, for `throw`. */
const fromUploadHost = <E extends object>(error: E): E => {
  uploadHostErrors.add(error);
  return error;
};

/**
 * Whether `error` was raised for the host a pre-signed URL names rather than for the API: the upload
 * host answered with an error status (a `PermissionDeniedError` for an expired URL, say), or could not
 * be reached.
 *
 * The status errors are the same classes the API's own failures raise, so a 401 or 403 reads like a
 * rejected credential. The client never sends its credentials to the upload host, so a caller that
 * would re-authenticate on one should check this first: the remedy is a fresh pre-signed URL, which
 * calling the method again requests.
 *
 * A redirect from the upload host is not counted: the SDK refuses to follow it rather than the host
 * failing the upload, and its error carries no status. Neither are a refused URL or header, which the
 * SDK raises before anything reaches the host.
 */
export const isSignedUploadHostError = (error: unknown): boolean =>
  typeof error === 'object' && error !== null && uploadHostErrors.has(error);

/**
 * Where the functions declared with {@link signedUploadTransport} are kept: a `WeakSet` on `globalThis`
 * under a registry symbol, so the ESM and CommonJS builds, and another SDK, share one record.
 *
 * Kept by identity rather than as a property on the function: a `Proxy` without a `get` trap, or a
 * function whose prototype is the declared one, would read an own or inherited property as declared
 * and carry a credential its `apply` trap adds. A `WeakSet` answers only for the declared function
 * itself. A runtime that refuses the global keeps the record to this copy of the SDK.
 */
const DECLARED_TRANSPORTS = Symbol.for('scalar-sdk.signed-upload-transport');

/** The shared record of declared transports; see {@link DECLARED_TRANSPORTS}. */
const declaredTransports: WeakSet<object> = (() => {
  const registry = globalThis as unknown as Record<symbol, unknown>;
  const existing = registry[DECLARED_TRANSPORTS];
  if (existing instanceof WeakSet) return existing as WeakSet<object>;
  const created = new WeakSet<object>();
  try {
    Object.defineProperty(globalThis, DECLARED_TRANSPORTS, { value: created });
  } catch {
    // A frozen or locked-down global: the declaration still holds for this copy of the SDK.
  }
  return created;
})();

/**
 * Declares that `fetch` sends a request as handed over: no credentials, cookies or headers of its own,
 * and no redirects it follows itself. Pass the result as the client's `fetch` option (or assign it to
 * `client.fetch`) and a file upload to the pre-signed URL an API response names goes through it, for a
 * caller whose proxy or TLS setup lives only in their `fetch`.
 *
 * Off unless declared: a `fetch` that adds a credential to every request, such as a token-refresh
 * wrapper, would put it on a request to a host the API's response named, so an undeclared `fetch`
 * never sees an upload, which goes through the platform's `fetch` with the transport fields of
 * `fetchOptions` instead. The SDK still builds the upload's request itself (the file, its
 * `Content-Type` and the headers the response named; never the client's credentials, default headers
 * or telemetry) and keeps its own URL checks, retries, timeout and redirect refusal. The declaration
 * is the caller's word about that very function, checked against whatever `client.fetch` holds when
 * the upload is sent, so a wrapper around a declared `fetch` (a closure, a bound copy, a `Proxy`) is
 * undeclared until it says so itself. A declared `fetch` that still adds a credential must add it only
 * for the API's own origin.
 *
 * The upload calls it as `fetch(url, init)` with a string URL, whatever the client's compatibility
 * profile hands its own requests, so it must read the method, body, headers and signal from `init`.
 * The upload's timeout and abort end the attempt even if it ignores `init.signal`.
 *
 * Returns `fetch` itself, so the call reads `new Client({ fetch: signedUploadTransport(myFetch) })`.
 */
export const signedUploadTransport = <F extends (...args: never[]) => unknown>(fetch: F): F => {
  declaredTransports.add(fetch);
  return fetch;
};

/**
 * The `fetch` an upload goes through: `clientFetch` when the caller declared it with
 * {@link signedUploadTransport}, else the platform's (which throws when there is none). A
 * compatibility profile's adapter over an `HTTPClient` object is built by the SDK, so it is undeclared
 * unless the caller declares it, which vouches for that object's hooks too.
 */
const uploadTransport = (clientFetch: Fetch): Fetch =>
  declaredTransports.has(clientFetch) ? clientFetch : getDefaultFetch();

/**
 * Reads a value out of a response body by wire-name path, or `undefined` when any step is missing.
 * A body the client handed back as text is parsed as JSON first (see `decodedBody`).
 *
 * Deliberately walks own properties only, so a path segment such as `__proto__` or `constructor` in
 * the generated spec reads nothing rather than something off the prototype chain.
 */
export const readSignedUploadField = (value: unknown, path: readonly string[]): unknown => {
  let current: unknown = decodedBody(value);
  for (const segment of path) {
    if (current === null || typeof current !== 'object') return undefined;
    if (!Object.prototype.hasOwnProperty.call(current, segment)) return undefined;
    current = (current as Record<string, unknown>)[segment];
  }
  return current;
};

/**
 * The initiating response as a value to read fields from: a body the client handed back as text is
 * parsed as JSON first.
 *
 * The client decodes JSON only for a JSON media type, so an API that labels the body it issues upload
 * URLs in with `text/plain`, `application/x-amz-json-1.1` or nothing at all would otherwise leave
 * every field unreadable. Text that is not JSON is returned as is and reads as a missing field.
 */
const decodedBody = (value: unknown): unknown => {
  if (typeof value !== 'string') return value;
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
};

/**
 * Reads a path parameter for the confirm step off the initiating response.
 *
 * Throws rather than filling the path with `undefined`: a confirm request sent to `/files/undefined`
 * would at best 404 and at worst act on a resource nobody named. A `.` or `..` segment is refused too:
 * the URL parser resolves it away, sending the confirm to another endpoint. The path tag refuses one
 * only once the confirm is built, after the file is sent, so the call reads this before the upload.
 */
export const signedUploadPathParam = (value: unknown, path: readonly string[]): string => {
  const found = readSignedUploadField(value, path);
  if (typeof found === 'string' && found.length > 0) {
    const segment = found.split('/').find((part) => part === '.' || part === '..');
    if (segment !== undefined) {
      throw new GumletError(
        `The upload response's \`${path.join('.')}\` contains a "${segment}" segment, so the upload cannot be confirmed.`,
      );
    }
    return found;
  }
  if (typeof found === 'number' && Number.isFinite(found)) return String(found);
  throw new GumletError(
    `Expected the upload response to carry a non-empty \`${path.join('.')}\` to confirm the upload with.`,
  );
};

/** What the confirm step's own endpoint asks of a request, fixed when the SDK is generated. */
export type SignedUploadConfirmDefaults = {
  /** The `Accept` the confirm endpoint's plain method would send, when it overrides the client default. */
  readonly accept?: string;
  /** Whether the confirm response is handed back as raw bytes rather than decoded. */
  readonly binaryResponse?: boolean;
};

/**
 * The request options the confirm request is sent with: the call's options minus what was meant for
 * the initiating request alone — its body, query, path, method and idempotency key — plus the
 * negotiation the confirm endpoint's own method would use.
 *
 * Everything else rides along, whatever the options type holds: the abort signal, deadlines, retry
 * settings, the caller's headers and fetch options, and any base-URL override. A caller's base-URL
 * override routes the confirm just as it routes the initiating request (the confirm operation's own
 * server, when it declares one, is only the default the generated call passes ahead of these), and a
 * confirm sent without the call's deadline could hang. Replaying the idempotency key would have an
 * idempotency-aware API answer the confirm with the initiating response, or reject the key as reused.
 */
export const signedUploadConfirmOptions = (
  options: RequestOptions | undefined,
  defaults: SignedUploadConfirmDefaults = {},
): RequestOptions => {
  const confirm: Record<string, unknown> = { ...options };
  for (const key of ['body', 'query', 'path', 'method', 'idempotencyKey', '__binaryResponse'])
    delete confirm[key];
  if (defaults.accept) confirm['headers'] = buildHeaders([{ Accept: defaults.accept }, options?.headers]);
  if (defaults.binaryResponse) confirm['__binaryResponse'] = true;
  return confirm as RequestOptions;
};

/**
 * Reads the file a signed upload sends into memory, before the initiating request is made.
 *
 * A file that cannot be read then fails the call before the API has created an upload that would
 * never receive it. A bare `Blob` keeps its type only if it is handed on explicitly, since `toFile`
 * re-wraps its bytes; and only a Blob's `type` is a media type — a fetch `Response` has one too, and
 * it says `basic` or `cors`.
 */
export async function readSignedUploadFile(file: Uploadable): Promise<File> {
  const intrinsicType = typeof Blob !== 'undefined' && file instanceof Blob ? file.type : '';
  return toFile(file, undefined, intrinsicType ? { type: intrinsicType } : undefined);
}

/**
 * Sends a file to the pre-signed URL an initiating request returned, resolving once the upload host
 * answers with a success status.
 *
 * The request is built from scratch rather than through the client's request pipeline, because that
 * pipeline would add the client's credentials: its headers carry the API key or bearer token, its
 * query may carry query-string auth, and its default headers and the rest of its `fetchOptions` are
 * the caller's to send to *this API*, not to whatever host the URL names. So the SDK puts exactly
 * three things on the upload: the file, `Content-Type` plus the headers the initiating response itself
 * names, and the caller's abort signal. From the client it reuses the timeout, the retry budget and
 * the transport fields of `fetchOptions` (see {@link TRANSPORT_FIELDS}), so a caller who
 * reaches the internet only through a proxy or a custom CA set there can still upload; those
 * transport objects run as the caller built them. Not its `fetch`: a custom `fetch` option or a
 * compatibility profile's `HTTPClient` may add credentials of its own, so the upload goes through the
 * platform's `fetch`, unless the caller has declared theirs a transport with
 * {@link signedUploadTransport}.
 *
 * The URL must be `https:` (or `http:` to a loopback host) without a user name or password; anything
 * else — a `file:` or `data:` URL, plain `http:` that would send the file and its signature in
 * cleartext, or a `user:password@` credential — is refused before a request is made, since it came
 * from a response rather than from the caller. A redirect from the
 * upload host is not followed either: it would re-send the file and the named headers to a host the
 * API's response did not name. (That holds for the redirects `fetch` follows; a reused dispatcher that
 * follows them itself is the caller's, see {@link TRANSPORT_FIELDS}.)
 *
 * Retries follow the client's policy — connection errors, timeouts, 408, 409, 429 and 5xx, an
 * `x-should-retry` answer either way, and a `Retry-After`/`retry-after-ms` wait up to a minute before
 * falling back to exponential backoff — which is safe because the file is read into memory once and
 * every attempt sends the same bytes. The retry count is the client's `maxRetries` (or the call's); a
 * compatibility profile's `retries: { strategy: 'none' }` turns retrying off, though its backoff
 * intervals and status codes are not applied to the upload.
 */
export async function uploadToSignedURL(
  client: Gumlet,
  initiated: unknown,
  spec: SignedUploadSpec,
  content: File,
  options?: RequestOptions,
): Promise<void> {
  const url = signedUploadURL(initiated, spec.urlField);
  const headers: Record<string, string> = {};
  if (spec.headersField) {
    const named = readSignedUploadField(initiated, spec.headersField);
    if (named !== null && typeof named === 'object') {
      for (const [name, value] of Object.entries(named)) {
        if (typeof value === 'string') headers[name] = value;
      }
    }
  }

  let body: Blob | FormData;
  if (spec.body === 'multipart') {
    // `fetch` writes the multipart `Content-Type` with its boundary; a named one would break it.
    for (const name of Object.keys(headers)) if (name.toLowerCase() === 'content-type') delete headers[name];
    const form = new FormData();
    form.append(spec.multipartField ?? 'file', content, content.name || 'file');
    body = form;
  } else {
    // A header the initiating response names wins: a pre-signed URL can sign the type it was issued for.
    if (!Object.keys(headers).some((name) => name.toLowerCase() === 'content-type')) {
      headers['Content-Type'] = spec.contentType ?? (content.type || DEFAULT_CONTENT_TYPE);
    }
    body = content;
  }

  // A header value the response named can be one `fetch` rejects (a CR/LF in it, say). That is the
  // same on every attempt, so it is reported once here rather than retried with backoff.
  try {
    new Headers(headers);
  } catch (error) {
    throw new GumletError(
      `The upload headers the response named are not valid HTTP headers: ${castToError(error).message}`,
    );
  }

  // Read, never forwarded: the call's own deadline and abort signal, under either spelling the options
  // type may use (`timeout`/`signal`, or a compatibility profile's `timeoutMs`/`fetchOptions.signal`).
  const callOptions = (options ?? {}) as Record<string, unknown>;
  // A compatibility profile's retry policy (the call's `retries`, else the client's `retryConfig`)
  // replaces the retry count: `{ strategy: 'none' }` must turn the upload's retries off too.
  const retryPolicy = (callOptions['retries'] ??
    (client as unknown as { _options?: { retryConfig?: unknown } })._options?.retryConfig) as
    | { strategy?: unknown }
    | undefined;
  const maxRetries = retryPolicy?.strategy === 'none' ? 0 : (options?.maxRetries ?? client.maxRetries);
  const timeout =
    (typeof callOptions['timeout'] === 'number' ? callOptions['timeout'] : undefined) ??
    // A compatibility profile's `timeoutMs`: `0` means "the client's timeout", a negative value means
    // none, which `fetchUpload` reads from a non-positive deadline.
    (typeof callOptions['timeoutMs'] === 'number' && callOptions['timeoutMs'] !== 0
      ? Math.max(0, callOptions['timeoutMs'])
      : undefined) ??
    client.timeout;
  const fetchSignal = (callOptions['fetchOptions'] as { signal?: AbortSignal | null } | undefined)?.signal;
  const signal = options?.signal ?? fetchSignal ?? undefined;
  // The bags every other request merges into its `fetch` init, in the same order.
  const transport = pickFetchOptions([client.fetchOptions, callOptions['fetchOptions']], TRANSPORT_FIELDS);
  // Resolved once: a missing global `fetch` fails every attempt alike rather than being retried.
  let uploadFetch: Fetch;
  try {
    uploadFetch = uploadTransport(client.fetch);
  } catch {
    throw new GumletError(
      "Uploading a file needs a global `fetch`; the client's `fetch` option carries uploads only once declared with `signedUploadTransport(fetch)`. Polyfill it with `globalThis.fetch = fetch`.",
    );
  }
  for (let attempt = 0; ; attempt += 1) {
    const retriesRemaining = maxRetries - attempt;
    let response: Response;
    try {
      response = await fetchUpload(
        uploadFetch,
        url,
        // A fresh headers object each attempt, so a declared `fetch` that edits `init.headers` in place
        // cannot carry the edit into the retry.
        { ...transport, method: spec.method, headers: { ...headers }, body },
        timeout,
        signal,
      );
    } catch (error) {
      if (signal?.aborted) throw new APIUserAbortError();
      // undici reports a connect timeout as `TypeError: fetch failed` with the timeout on `cause`.
      const cause = (error as { cause?: unknown } | null)?.cause;
      const timedOut = isAbortError(error) || /timed? ?out/i.test(`${String(error)} ${String(cause ?? '')}`);
      if (retriesRemaining > 0) {
        // The backoff wakes on abort too, so a cancelled upload ends now rather than after the delay.
        await sleep(retryDelay(attempt), signal);
        if (signal?.aborted) throw new APIUserAbortError();
        continue;
      }
      if (timedOut) throw fromUploadHost(new APIConnectionTimeoutError());
      throw fromUploadHost(
        new APIConnectionError({ message: reusedTransportHint(transport), cause: castToError(error) }),
      );
    }
    // A declared `fetch` that followed a redirect despite `redirect: 'manual'` has already re-sent the file
    // to a host the API did not name. The answer it hands back is the last hop's, so it is refused with
    // its own message, as the client's own requests refuse one, rather than called a redirect status.
    if (response.redirected) {
      await CancelReadableStream(response.body).catch(() => {});
      throw new GumletError(
        "The upload's `fetch` followed a redirect from the upload host although the upload asked it not to. A `fetch` declared with `signedUploadTransport` must honor `redirect: 'manual'`.",
      );
    }
    if (response.type === 'opaqueredirect' || (response.status >= 300 && response.status < 400)) {
      await CancelReadableStream(response.body).catch(() => {});
      throw new GumletError(
        `The upload host answered with a redirect (${response.status || 'opaque'}), which is not followed.`,
      );
    }
    if (response.ok) {
      // Nothing reads the upload host's answer, so release the connection rather than leave it to GC —
      // through the shim, since a polyfilled `fetch` may hand back a Node stream with no `cancel()`.
      await CancelReadableStream(response.body).catch(() => {});
      return;
    }
    if (retriesRemaining > 0 && shouldRetry(response)) {
      const wait = retryAfterMs(response.headers) ?? retryDelay(attempt);
      // Drain the body so the connection can be reused before the next attempt.
      await CancelReadableStream(response.body).catch(() => {});
      await sleep(wait, signal);
      if (signal?.aborted) throw new APIUserAbortError();
      continue;
    }
    // Read to the same 64 KiB as every other error body: the storage host's answer is no more trusted.
    const text = await readBodyText(response, MAX_ERROR_BODY_BYTES, 'truncate').catch(
      (error: unknown) => castToError(error).message,
    );
    let parsed: Object | undefined;
    try {
      parsed = JSON.parse(text);
    } catch {
      parsed = undefined;
    }
    // An object store answers with a whole XML document; keep the message to its start.
    const detail = text.length > 500 ? `${text.slice(0, 500)}…` : text;
    throw fromUploadHost(
      APIError.generate(
        response.status,
        parsed,
        `Upload failed: ${detail || response.statusText}`,
        response.headers,
      ),
    );
  }
}

/**
 * The message of a connection error an upload ends on after reusing the client's transport fields,
 * or `undefined` (the error's own default) when it reused none.
 *
 * A dispatcher or agent built for this API's host is the likeliest cause of a failure only the upload
 * sees — one from another undici major than the `fetch` it is sent through, or one bound to the API's
 * origin — and nothing in that `fetch`'s error says the SDK passed it, so the message names the
 * fields and the per-call way to send the upload without them. Only the field names: the values may
 * hold a proxy URL with credentials.
 */
const reusedTransportHint = (transport: Record<string, unknown>): string | undefined => {
  const fields = Object.keys(transport);
  if (fields.length === 0) return undefined;
  const dropped = fields.map((field) => `${field}: undefined`).join(', ');
  return `Connection error. The upload reused the client's \`fetchOptions\` ${fields.map((field) => `\`${field}\``).join(', ')}; if that transport cannot reach the upload host, pass \`{ fetchOptions: { ${dropped} } }\` on the call to send the upload without it.`;
};

/**
 * Sends one upload attempt, aborting it after `timeoutMs` (none when that is not positive) or when the
 * caller's `signal` fires. Redirects come back as responses (`redirect: 'manual'`) for the caller to
 * refuse.
 *
 * `uploadFetch` is the platform's `fetch`, or a client `fetch` the caller declared a transport (see
 * {@link uploadTransport}). `init` carries the file, the headers the response named and the client's
 * transport fields alone, never the rest of its `fetchOptions`.
 */
const fetchUpload = async (
  uploadFetch: Fetch,
  url: string,
  init: RequestInit,
  timeoutMs: number,
  signal: AbortSignal | undefined,
): Promise<Response> => {
  const controller = new AbortController();
  const abort = () => controller.abort();
  if (signal?.aborted) abort();
  else signal?.addEventListener('abort', abort, { once: true });
  const timer = timeoutMs > 0 ? setTimeout(abort, timeoutMs) : undefined;
  // The platform `fetch` honours `signal`, but a declared one is the caller's code and may drop it (an
  // adapter that rebuilds the init from picked fields). Racing the attempt against the signal keeps the
  // timeout and the caller's abort the upload's own whatever the transport does; the rejection is the
  // signal's `AbortError` reason, which the retry loop already reads as a timeout or an abort.
  let onAbort: (() => void) | undefined;
  const aborted = new Promise<never>((_, reject) => {
    // A runtime whose `AbortSignal` has no `reason` still gets an `AbortError`, which the retry loop
    // reads as a timeout or an abort rather than a lost connection.
    onAbort = () =>
      reject(
        controller.signal.reason ??
          Object.assign(new Error('The upload was aborted.'), { name: 'AbortError' }),
      );
    if (controller.signal.aborted) onAbort();
    else controller.signal.addEventListener('abort', onAbort, { once: true });
  });
  // The race's losing side must not surface as an unhandled rejection, whenever the signal fires.
  aborted.catch(() => {});
  // Wrapped so a declared `fetch` that throws synchronously rejects here and the cleanup below runs.
  // An undefined `this`: `fetch` throws when bound to anything else in browsers and edge runtimes.
  const sent = (async () =>
    uploadFetch.call(undefined, url, { ...init, redirect: 'manual', signal: controller.signal }))();
  try {
    return await Promise.race([sent, aborted]);
  } catch (error) {
    // A response that arrives after the attempt was given up on is never read: release its connection.
    sent.then(
      (late) => CancelReadableStream(late?.body).catch(() => {}),
      () => {},
    );
    throw error;
  } finally {
    if (timer !== undefined) clearTimeout(timer);
    signal?.removeEventListener('abort', abort);
    if (onAbort) controller.signal.removeEventListener('abort', onAbort);
  }
};

/**
 * Reads and validates the upload URL, refusing a missing value, one that is not `https:` (see
 * `isLoopback`), and one that carries a user name or password.
 */
const signedUploadURL = (initiated: unknown, path: readonly string[]): string => {
  const value = readSignedUploadField(initiated, path);
  if (typeof value !== 'string' || value.length === 0) {
    throw new GumletError(`Expected the upload response to carry an upload URL in \`${path.join('.')}\`.`);
  }
  let parsed: URL;
  try {
    parsed = new URL(value);
  } catch {
    throw new GumletError(`The upload URL in \`${path.join('.')}\` is not an absolute URL.`);
  }
  if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') {
    throw new GumletError(`Refusing to upload to a ${parsed.protocol} URL; expected https:.`);
  }
  if (parsed.protocol === 'http:' && !isLoopback(parsed.hostname)) {
    throw new GumletError('Refusing to upload over plain http:; expected an https: URL.');
  }
  // `user:password@` is a credential the response put in the URL: Node's and browsers' `fetch` refuse
  // it with a `TypeError` the retry loop would read as a lost connection, and another runtime or a
  // declared `fetch` could send it on. Refused once here instead; the error names origin and
  // path, which never hold either part.
  if (parsed.username !== '' || parsed.password !== '') {
    throw new GumletError(
      `Refusing to upload to ${parsed.origin}${parsed.pathname}: the URL carries a user name or password.`,
    );
  }
  return parsed.toString();
};

/**
 * Whether `hostname` is this machine: exactly `localhost`, `127.0.0.1` or `::1`, the loopback hosts
 * the CLI's OAuth runtime accepts plain `http:` for. A `*.localhost` name is not one: not every
 * resolver sends it to loopback.
 */
const isLoopback = (hostname: string): boolean =>
  ['localhost', '127.0.0.1', '::1'].includes(hostname.toLowerCase().replace(/^\[|\]$/g, ''));

/** Whether the client itself would retry this response: `x-should-retry` first, then its statuses. */
const shouldRetry = (response: Response): boolean => {
  const header = response.headers.get('x-should-retry');
  if (header === 'true') return true;
  if (header === 'false') return false;
  const status = response.status;
  return status === 408 || status === 409 || status === 429 || status >= 500;
};

/** The wait a `retry-after-ms` or `Retry-After` header asks for, when it is a sane one (under a minute). */
const retryAfterMs = (headers: Headers): number | undefined => {
  const millis = Number.parseFloat(headers.get('retry-after-ms') ?? '');
  if (Number.isFinite(millis) && millis > 0 && millis < 60_000) return millis;
  const retryAfter = headers.get('retry-after');
  if (!retryAfter) return undefined;
  const seconds = Number.parseFloat(retryAfter);
  const wait = Number.isFinite(seconds) ? seconds * 1000 : Date.parse(retryAfter) - Date.now();
  return Number.isFinite(wait) && wait > 0 && wait < 60_000 ? wait : undefined;
};

/** Exponential backoff with jitter: 0.5s, 1s, 2s, … capped at the client's ceiling. */
const retryDelay = (attempt: number): number =>
  Math.min(500 * 2 ** attempt, MAX_RETRY_DELAY_MS) * (1 - Math.random() * 0.25);
