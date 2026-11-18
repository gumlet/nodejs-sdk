// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource audioUpload', () => {
  smokeCase(
    'audioUpload.upload:required',
    { operation: 'upload', path: '/video/assets/{asset_ID}/audio/upload' },
    'upload: only required params',
    async () => {
      const audioUpload = await client.audioUpload.upload('assetId');
    },
  );
  smokeCase(
    'audioUpload.upload:all',
    { operation: 'upload', path: '/video/assets/{asset_ID}/audio/upload' },
    'upload: required and optional params',
    async () => {
      const audioUpload = await client.audioUpload.upload('assetId', { language_codes: ['en'] });
    },
  );
  smokeCase(
    'audioUpload.complete:required',
    { operation: 'complete', path: '/video/assets/{asset_ID}/audio/upload/event' },
    'complete: only required params',
    async () => {
      const audioUpload = await client.audioUpload.complete('assetId');
    },
  );
  smokeCase(
    'audioUpload.complete:all',
    { operation: 'complete', path: '/video/assets/{asset_ID}/audio/upload/event' },
    'complete: required and optional params',
    async () => {
      const audioUpload = await client.audioUpload.complete('assetId', {
        upload_responses: [{ uploaded: true }],
      });
    },
  );
});
