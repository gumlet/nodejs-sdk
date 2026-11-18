// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource multipartUpload', () => {
  smokeCase(
    'multipartUpload.retrievePartUrl:single',
    { operation: 'retrievePartUrl', path: '/video/assets/{asset_id}/multipartupload/{part_number}/sign' },
    'retrievePartUrl',
    async () => {
      const multipartUpload = await client.multipartUpload.retrievePartURL('partNumber', {
        asset_id: 'assetId',
      });
    },
  );
  smokeCase(
    'multipartUpload.complete:required',
    { operation: 'complete', path: '/video/assets/{asset_id}/multipartupload/complete' },
    'complete: only required params',
    async () => {
      const multipartUpload = await client.multipartUpload.complete('assetId');
    },
  );
  smokeCase(
    'multipartUpload.complete:all',
    { operation: 'complete', path: '/video/assets/{asset_id}/multipartupload/complete' },
    'complete: required and optional params',
    async () => {
      const multipartUpload = await client.multipartUpload.complete('assetId', {
        parts: [{}],
      });
    },
  );
  smokeCase(
    'multipartUpload.abort:required',
    { operation: 'abort', path: '/video/assets/{asset_id}/multipartupload/abort' },
    'abort: only required params',
    async () => {
      const multipartUpload = await client.multipartUpload.abort('assetId');
    },
  );
  smokeCase(
    'multipartUpload.abort:all',
    { operation: 'abort', path: '/video/assets/{asset_id}/multipartupload/abort' },
    'abort: required and optional params',
    async () => {
      const multipartUpload = await client.multipartUpload.abort('assetId', {});
    },
  );
  smokeCase(
    'multipartUpload.list:required',
    { operation: 'list', path: '/video/assets/{asset_id}/multipartupload/list' },
    'list: only required params',
    async () => {
      const multipartUpload = await client.multipartUpload.list('assetId');
    },
  );
  smokeCase(
    'multipartUpload.list:all',
    { operation: 'list', path: '/video/assets/{asset_id}/multipartupload/list' },
    'list: required and optional params',
    async () => {
      const multipartUpload = await client.multipartUpload.list('assetId', {});
    },
  );
});
