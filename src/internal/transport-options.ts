// File generated from our OpenAPI spec by Scalar. See README.md for details.

/*
 * The `fetchOptions` a request to a host an API response named may reuse: a signed upload
 * (`core/signed-upload.ts`) and the fetch of a requested URL (`core/signed-url.ts`). That host was
 * chosen by a response, not configured by the caller, so it gets how the caller connects and nothing
 * the caller sends to this API.
 */

/**
 * The `fetchOptions` fields a request to a host an API response named reuses: the ones that choose how
 * a connection to that host is made — through which proxy, trusting which certificates — and nothing
 * that is sent on it.
 *
 * - `dispatcher`: Node's built-in `fetch` and undici's, such as a `ProxyAgent` or an `Agent` with TLS
 *   options.
 * - `agent`: `node-fetch`, installed as the global `fetch`: an `http(s).Agent` or a proxy agent, or a
 *   function returning one.
 * - `proxy` and `tls`: Bun's `fetch`, a proxy URL and TLS settings such as a custom CA.
 * - `client`: Deno's `fetch`, a `Deno.HttpClient` built with a proxy or CA certificates.
 *
 * The values are the caller's own objects, used as they are, so settings meant for the API's host
 * apply to the named host too:
 *
 * - a client certificate, offered to that host if it asks, or an interceptor that adds headers;
 * - certificate verification turned off (`rejectUnauthorized: false`), which leaves the request — a
 *   file, the pre-signed URL that authorizes it, or what the URL hands back — open to anyone on the
 *   path who can present a certificate;
 * - a CA list that replaces the default roots (Node's and Bun's `ca` do; Deno's `caCerts` add to
 *   them), so a public storage host fails TLS verification;
 * - a dispatcher bound to one origin (an undici `Client` or `Pool` for the API), which ignores the URL
 *   it is handed and sends the request there;
 * - a `node-fetch` agent for `http:` alone, which is refused for an `https:` URL;
 * - a dispatcher from another undici major than the platform's own `fetch` (one built for a `fetch`
 *   option such as `undici.fetch`), which that `fetch` refuses or whose answers it misreads;
 * - a dispatcher that follows redirects itself (an interceptor that ignores the `maxRedirections: 0`
 *   `fetch` passes, or a custom `dispatch`), which re-sends the request and the response-named headers
 *   to the redirect target below `fetch`, so the SDK's refusal of a 3xx never sees it.
 *
 * Such a caller passes the field as `undefined` on the call (or gives `node-fetch` a function that
 * picks an agent per URL). The SDK cannot see inside a dispatcher or an agent to tell these apart
 * from the settings the request needs, so it reuses them all rather than guess.
 *
 * An allowlist rather than a list of fields to drop, so a field a runtime adds later stays off the
 * request until it is known to be transport: `headers`, `credentials`, `body` or a header-bearing
 * field of some future `fetch` would carry this API's credentials to a host the response chose.
 */
export const TRANSPORT_FIELDS: readonly string[] = ['dispatcher', 'agent', 'proxy', 'tls', 'client'];

/**
 * The `fields` of each of `bags`, in the order the caller gives them, a later bag winning field by
 * field as on every other request, and nothing else from any of them. The caller chooses the bags: a
 * signed upload passes the client's `fetchOptions`, the call's, and under a compatibility profile the
 * call options themselves; a requested URL's fetch passes only the first two.
 *
 * Own enumerable properties only, the ones the spread every other request merges them with copies,
 * so nothing is read off a prototype or a hidden field. A field a later bag sets to `undefined` drops
 * an earlier one's and is left out of the result. That is how a caller keeps a transport object off one
 * request: each is reused whole and the SDK cannot see into it, so a TLS client certificate it holds is
 * offered to the named host, and an interceptor composed onto a dispatcher or an agent that adds a
 * header runs there as on every other request.
 */
export const pickFetchOptions = (
  bags: readonly unknown[],
  fields: readonly string[],
): Record<string, unknown> => {
  const picked: Record<string, unknown> = {};
  for (const bag of bags) {
    if (bag === null || typeof bag !== 'object') continue;
    for (const field of fields) {
      if (!Object.prototype.propertyIsEnumerable.call(bag, field)) continue;
      const value = (bag as Record<string, unknown>)[field];
      if (value === undefined) delete picked[field];
      else picked[field] = value;
    }
  }
  return picked;
};
