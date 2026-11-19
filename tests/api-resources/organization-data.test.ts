// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource organizationData', () => {
  smokeCase(
    'organizationData.fetchOrg:single',
    { operation: 'fetchOrg', path: '/org/data' },
    'fetchOrg',
    async () => {
      const organizationData = await client.organizationData.fetchOrg();
    },
  );
});
