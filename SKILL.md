---
name: gumlet-typescript-sdk
description: "TypeScript SDK for Gumlet API. Use when writing TypeScript code that calls Gumlet API with the @gumlet/nodejs-sdk package: installing it, constructing and authenticating the client, and calling API operations."
---

# Gumlet TypeScript SDK

Generated TypeScript client for Gumlet API, published as `@gumlet/nodejs-sdk`. Use the generated client instead of hand-writing HTTP requests.

## Install

```sh
npm install @gumlet/nodejs-sdk
```

## Client setup and authentication

```ts
import Gumlet from '@gumlet/nodejs-sdk';

const client = new Gumlet({
  apiKey: process.env['API_KEY'], // defaults to the API_KEY env var
});
```

Provide credentials using the options below. Environment variables are read automatically when the target runtime supports them:

- `apiKey` (env: `API_KEY`) — Credential for the API_KEY scheme.

## Calling operations

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

Method names, parameter shapes, and response types are generated from the API description — do not guess them. Look up the exact call signature in [api.md](./api.md) before writing a call.

## Error handling

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

## Requirements

- Node.js 20+, a modern browser, or any runtime with `fetch` support

## Reference files

- [README.md](./README.md) — full feature tour: client options, request options, retries and timeouts, logging.
- [api.md](./api.md) — complete catalogue of every operation with request and response types.
