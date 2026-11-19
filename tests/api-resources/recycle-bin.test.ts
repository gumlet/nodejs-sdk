// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource recycleBin', () => {
  smokeCase(
    'recycleBin.recover:single',
    { operation: 'recover', path: '/video/asset/recover' },
    'recover',
    async () => {
      await client.recycleBin.recover({
        asset_id: '',
      });
    },
  );
  smokeCase(
    'recycleBin.list:single',
    { operation: 'list', path: '/video/asset/recoverable/list' },
    'list',
    async () => {
      const recycleBin = await client.recycleBin.list({
        workspace_id: 'workspaceId',
        page_number: 1,
        page_size: 20,
      });
    },
  );
});
