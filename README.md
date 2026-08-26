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
  collection_id: '646df1c9173a4a2fcac180b4',
  input: 'http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8',
  description: 'some description',
  tag: ['ball'],
  profile_id: '646df1c9173a4a2fcac180b7',
  cluster_type: 'prod',
  playlist_id: '6597acd5ed6f26a9c5ca9633',
  metadata: { headermeta: 'metavalue' },
  call_to_actions: [
    {
      start_time: 1,
      end_time: 90,
      text: 'some test',
      url: 'https://some-url.com',
      position_from_top: 11,
      position_from_right: 23,
      border_radius: '11',
      font_color: '#000001',
      background_color: '#ffffff',
    },
  ],
  folder: '697375fbfa2d1037283140e4',
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
| `apiKey` | `string \| provider` | - | Credential for the API_KEY scheme. Defaults to API_KEY. |

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
    collection_id: '646df1c9173a4a2fcac180b4',
    input: 'http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8',
    description: 'some description',
    tag: ['ball'],
    profile_id: '646df1c9173a4a2fcac180b7',
    cluster_type: 'prod',
    playlist_id: '6597acd5ed6f26a9c5ca9633',
    metadata: { headermeta: 'metavalue' },
    call_to_actions: [
      {
        start_time: 1,
        end_time: 90,
        text: 'some test',
        url: 'https://some-url.com',
        position_from_top: 11,
        position_from_right: 23,
        border_radius: '11',
        font_color: '#000001',
        background_color: '#ffffff',
      },
    ],
    folder: '697375fbfa2d1037283140e4',
  });
} catch (err) {
  if (err instanceof APIError) {
    console.log(err.status, err.name, err.headers);
  }
  throw err;
}
```

Documented error statuses: `400`, `401`, `403`, `404`, `4XX`.

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
| `fetch` | `Fetch` | - | Custom fetch implementation. |
| `logLevel` | `"off" \| "error" \| "warn" \| "info" \| "debug" \| null` | `process.env["GUMLET_LOG"]` | Controls request and retry debug logging. |
| `logger` | `Logger \| null` | `console` | Custom logger implementation. |

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

## Helpers

- Use `.withResponse()` on any request to inspect both parsed data and the raw `Response` object.
- Every operation returns an `APIPromise`, so you can `await` it directly or chain `.withResponse()`.

<br />

## Logging

- Set `logLevel: "debug"` to log request URLs, options, response status, response headers, and retry attempts.
- Pass a custom `logger` to route logs into your own observability pipeline.
- Set `logLevel: null` to disable environment-driven logging.

<br />

## Requirements

- Node.js 20+, a modern browser, or any runtime with `fetch` support

Powered by Scalar.
