---
name: gumlet-pte-ltd-typescript-sdk
description: "TypeScript SDK for Gumlet Pte. Ltd API. Use when writing TypeScript code that calls Gumlet Pte. Ltd API with the @gumlet/node-sdk package: installing it, constructing and authenticating the client, and calling API operations."
---

# Gumlet Pte. Ltd TypeScript SDK

Generated TypeScript client for Gumlet Pte. Ltd API, published as `@gumlet/node-sdk`. Use the generated client instead of hand-writing HTTP requests.

## Install

```sh
npm install @gumlet/node-sdk
```

## Client setup and authentication

```ts
import GumletPteLtd from '@gumlet/node-sdk';

const client = new GumletPteLtd({
  apiKey: process.env['API_KEY'], // defaults to the API_KEY env var
});
```

Provide credentials using the options below. Environment variables are read automatically when the target runtime supports them:

- `apiKey` (env: `API_KEY`) — Credential for the API_KEY scheme.

## Calling operations

```ts
import GumletPteLtd from '@gumlet/node-sdk';

const client = new GumletPteLtd({
  apiKey: process.env['API_KEY'], // defaults to the API_KEY env var
});

const create = await client.videoAssets.create({
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

console.log(create);
```

Method names, parameter shapes, and response types are generated from the API description — do not guess them. Look up the exact call signature in [api.md](../../../api.md) before writing a call.

## Error handling

Non-success responses throw generated API errors. Error objects expose status, headers, response body, and request metadata where the target runtime supports it.

```ts
import { APIError } from '@gumlet/node-sdk';

try {
  const create = await client.videoAssets.create({
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

- [README.md](../../../README.md) — full feature tour: client options, request options, retries and timeouts, logging.
- [api.md](../../../api.md) — complete catalogue of every operation with request and response types.
