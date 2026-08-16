---
name: gumlet-rest-apis-typescript-sdk
description: "TypeScript SDK for gumlet-rest-apis API. Use when writing TypeScript code that calls gumlet-rest-apis API with the @gumlet/gumlet-rest package: installing it, constructing and authenticating the client, and calling API operations."
---

# gumlet-rest-apis TypeScript SDK

Generated TypeScript client for gumlet-rest-apis API, published as `@gumlet/gumlet-rest`. Use the generated client instead of hand-writing HTTP requests.

## Install

```sh
npm install @gumlet/gumlet-rest
```

## Client setup and authentication

```ts
import GumletRestAPIs from '@gumlet/gumlet-rest';

const client = new GumletRestAPIs({
  sec0: process.env['SEC0'], // defaults to the SEC0 env var
});
```

Provide credentials using the options below. Environment variables are read automatically when the target runtime supports them:

- `sec0` (env: `SEC0`) — Credential for the sec0 scheme.

## Calling operations

```ts
import GumletRestAPIs from '@gumlet/gumlet-rest';

const client = new GumletRestAPIs({
  sec0: process.env['SEC0'], // defaults to the SEC0 env var
});

const create = await client.videoAssets.create({
  'Request Example': {
    value: {
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
          start_time: '1',
          end_time: '90',
          text: 'some test',
          url: 'https://some-url.com',
          position_from_top: '11',
          position_from_right: '23',
          border_radius: '11',
          font_color: '#000001',
          background_color: '#ffffff',
        },
      ],
      folder: '697375fbfa2d1037283140e4',
    },
  },
});

console.log(create);
```

Method names, parameter shapes, and response types are generated from the API description — do not guess them. Look up the exact call signature in [api.md](../../../api.md) before writing a call.

## Error handling

Non-success responses throw generated API errors. Error objects expose status, headers, response body, and request metadata where the target runtime supports it.

```ts
import { APIError } from '@gumlet/gumlet-rest';

try {
  const create = await client.videoAssets.create({
    'Request Example': {
      value: {
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
            start_time: '1',
            end_time: '90',
            text: 'some test',
            url: 'https://some-url.com',
            position_from_top: '11',
            position_from_right: '23',
            border_radius: '11',
            font_color: '#000001',
            background_color: '#ffffff',
          },
        ],
        folder: '697375fbfa2d1037283140e4',
      },
    },
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
