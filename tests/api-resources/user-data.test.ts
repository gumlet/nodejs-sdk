// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource userData', () => {
  smokeCase('userData.fetch:single', { operation: 'fetch', path: '/user/data' }, 'fetch', async () => {
    const userData = await client.userData.fetch();
  });
});
