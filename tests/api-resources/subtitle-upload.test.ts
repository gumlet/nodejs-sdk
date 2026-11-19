// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource subtitleUpload', () => {
  smokeCase(
    'subtitleUpload.upload:required',
    { operation: 'upload', path: '/video/assets/{asset_ID}/subtitle/upload' },
    'upload: only required params',
    async () => {
      const subtitleUpload = await client.subtitleUpload.upload('assetId');
    },
  );
  smokeCase(
    'subtitleUpload.upload:all',
    { operation: 'upload', path: '/video/assets/{asset_ID}/subtitle/upload' },
    'upload: required and optional params',
    async () => {
      const subtitleUpload = await client.subtitleUpload.upload('assetId', { language_codes: ['en'] });
    },
  );
  smokeCase(
    'subtitleUpload.complete:required',
    { operation: 'complete', path: '/video/assets/{asset_ID}/subtitle/upload/event' },
    'complete: only required params',
    async () => {
      const subtitleUpload = await client.subtitleUpload.complete('assetId');
    },
  );
  smokeCase(
    'subtitleUpload.complete:all',
    { operation: 'complete', path: '/video/assets/{asset_ID}/subtitle/upload/event' },
    'complete: required and optional params',
    async () => {
      const subtitleUpload = await client.subtitleUpload.complete('assetId', {
        upload_responses: [{ language_code: 'en', uploaded: true }],
      });
    },
  );
});
