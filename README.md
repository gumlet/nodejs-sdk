# Gumlet

This library provides convenient access to the Gumlet REST API from TypeScript or JavaScript.

The full API of this library can be found in [api.md](./api.md).

<br />

## Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Reference](./api.md)
- [Authentication](#authentication)
- [Errors](#errors)
- [Client Options](#client-options)
- [Request Options](#request-options)
- [Retries and Timeouts](#retries-and-timeouts)
- [Webhooks](#webhooks)
- [Helpers](#helpers)
- [Logging](#logging)
- [Requirements](#requirements)

<br />

## Installation

```sh
npm install @gumlet/nodejs-sdk
```

<br />

## Usage

```ts
import Gumlet from '@gumlet/nodejs-sdk';

const client = new Gumlet({
  apiKey: process.env['API_KEY'], // defaults to the API_KEY env var
});

const videoAsset = await client.videoAssets.create({
  format: 'ABR',
  workspace_id: '<your workspace id>',
  title: 'Example Title',
  input: 'http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8',
});

console.log(videoAsset);
```

The examples in the following sections assume a `client` configured as shown above.

See the [API reference](./api.md) for every available operation.

<br />

## Authentication

Pass credentials to the generated client constructor. Environment variables are read automatically when supported by the target runtime.

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `apiKey` | `string \| AuthTokenProvider` | - | Credential for the API_KEY scheme. Defaults to API_KEY. |

Declared schemes:

- `API_KEY` bearer token

<br />

## Errors

Non-success responses throw generated API errors. Error objects expose status, headers, response body, and request metadata where the target runtime supports it.

```ts
import { APIError } from '@gumlet/nodejs-sdk';

try {
  const videoAsset = await client.videoAssets.create({
    format: 'ABR',
    workspace_id: '<your workspace id>',
    title: 'Example Title',
    input: 'http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8',
  });
} catch (err) {
  if (err instanceof APIError) {
    console.log(err.status, err.name, err.headers);
  }
  throw err;
}
```

Documented error statuses: `400`, `401`, `402`, `403`, `404`, `413`, `422`, `500`.

<br />

## Client Options

Configure the generated client by setting any of these options when you create it.

```ts
import Gumlet from '@gumlet/nodejs-sdk';

const client = new Gumlet({
  timeout: 60000,
  maxRetries: 2,
  logLevel: 'debug',
});
```

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `apiKey` | `string \| AuthTokenProvider` | `process.env["API_KEY"]` | Credential for the API_KEY scheme. |
| `baseURL` | `string \| null` | `process.env["GUMLET_BASE_URL"]` | Override the default API base URL. Pass `null` when selecting a configured environment. |
| `timeout` | `number` | `60000` | Maximum time in milliseconds to wait for a response before aborting a request. |
| `maxRetries` | `number` | `2` | Number of retries for temporary failures. |
| `defaultHeaders` | `HeadersInit` | - | Headers sent with every request. |
| `defaultQuery` | `Record<string, string \| undefined>` | - | Query parameters sent with every request. |
| `fetchOptions` | `RequestInit` | - | Additional fetch options sent with every request. |
| `fetch` | `Fetch` | - | Custom fetch implementation. A file upload to a pre-signed URL uses it only when wrapped in `signedUploadTransport(fetch)`, which declares that it adds no credentials or headers of its own except for the API's own origin. |
| `logLevel` | `"off" \| "error" \| "warn" \| "info" \| "debug"` | `process.env["GUMLET_LOG"] ?? "warn"` | Controls request and retry debug logging. `"off"` turns logging off. |
| `logger` | `Logger` | `console` | Custom logger implementation. |

<br />

## Request Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `headers` | `HeadersInit` | - | Per-request headers. |
| `query` | `Record<string, unknown>` | - | Per-request query parameters. |
| `body` | `unknown` | - | Override the generated request body. |
| `timeout` | `number` | - | Per-request timeout in milliseconds. |
| `maxRetries` | `number` | - | Per-request retry count. |
| `signal` | `AbortSignal` | - | Abort an in-flight request. |
| `fetchOptions` | `RequestInit` | - | Per-request fetch options. |
| `idempotencyKey` | `string` | - | Idempotency key for retry-safe operations. Applies to this request and its retries. |

<br />

## Retries and Timeouts

Generated clients support request timeouts and retry temporary failures such as network errors, 408, 409, 429, and 5xx responses. Retry delays honor `Retry-After` headers when present. Tune the retry and timeout client options shown above, or override them per request.

<br />

## Webhooks

The webhook helper verifies the signature of each delivery your server receives, then decodes its body into a typed event. Pass it the request body exactly as it arrived, before any JSON parsing, together with the request headers: the signature covers the raw body, so one that was parsed and re-serialized fails verification. A delivery whose signature does not verify is rejected before it is decoded.

```ts
// `body` is the raw request body as a string; `headers` holds the request headers.
const event = client.webhooks.unwrap(body, { headers });
```

The signing secret comes from the client's `webhookSecret` option, which defaults to the `GUMLET_WEBHOOK_SECRET` environment variable. Pass `key` to use a different secret for one call.

A delivery that fails verification throws `WebhookVerificationError`, exported from the package root. Check for it with `isWebhookVerificationError(error)`, exported beside it:

```ts
import { isWebhookVerificationError } from '@gumlet/nodejs-sdk';

try {
  const event = client.webhooks.unwrap(body, { headers });
} catch (error) {
  if (!isWebhookVerificationError(error)) throw error;
  // Not a genuine delivery: reject it, for example with a 400 response.
}
```

The guard needs no setup: it matches the SDK's class and its subclasses, and the `standardwebhooks` class of the same name from any copy of that library, in every runtime. `WebhookVerificationError` extends `Error`, not the SDK's base error class, so a handler that catches the SDK's API errors does not also catch a forged or stale delivery.

A handler that still imports `WebhookVerificationError` from `standardwebhooks` and checks `instanceof` against it matches the SDK's refusals as follows:

| Where the handler runs | `instanceof` against the `standardwebhooks` class |
| --- | --- |
| Node or Bun, loading `standardwebhooks` from the application's `node_modules` (CommonJS or ES modules) | Matches on its own |
| A Jest test with Jest's default CommonJS modules | Matches on its own |
| An application bundled with webpack, esbuild or Vite | Needs `registerWebhookErrorClass` |
| A browser | Needs `registerWebhookErrorClass` |
| An edge runtime | Needs `registerWebhookErrorClass` |
| A Jest test that runs as ES modules | Needs `registerWebhookErrorClass` |

Register the class your application imports once, at startup, and `instanceof` matches everywhere:

```ts
import { WebhookVerificationError } from 'standardwebhooks';
import { registerWebhookErrorClass } from '@gumlet/nodejs-sdk';

registerWebhookErrorClass(WebhookVerificationError);
```

Registering is safe to repeat, and it only adds the SDK's refusals to what the class matches.

The same resource also has:

- `client.webhooks.verifySignature(body, headers)` checks a delivery's signature, and fails when it does not verify.
- `client.webhooks.parseUnsafe(body)` decodes a body into a typed event without checking its signature. Use it only for a body verified elsewhere, or in tests.

<br />

## Helpers

- Use `.withResponse()` on a request to inspect both parsed data and the raw `Response` object.
- Every operation returns an `APIPromise`, so you can `await` it directly or chain `.withResponse()` — except a method that uploads a file to a pre-signed URL (a signed upload), which resolves to a plain `Promise` of its result.

<br />

## Logging

- Set `logLevel: "debug"` to log request URLs, options, response status, response headers, and retry attempts.
- Pass a custom `logger` to route logs into your own observability pipeline.
- Set `logLevel: "off"` to turn logging off, whatever `GUMLET_LOG` says. Without `logLevel`, the client reads that environment variable, then defaults to `"warn"`.

<br />

## Requirements

- Node.js 20+, a modern browser, or any runtime with `fetch` support

