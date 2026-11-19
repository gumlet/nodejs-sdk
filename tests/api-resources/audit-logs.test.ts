// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource auditLogs', () => {
  smokeCase('auditLogs.fetch:single', { operation: 'fetch', path: '/user/audit-log' }, 'fetch', async () => {
    const auditLog = await client.auditLogs.fetch({
      date_range: { start_at: '2026-08-25', end_at: '2026-08-29' },
    });
  });
});
