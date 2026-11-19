// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource imageUsageAnalytics', () => {
  smokeCase(
    'imageUsageAnalytics.retrieve:required',
    { operation: 'retrieve', path: '/image/analytics' },
    'retrieve: only required params',
    async () => {
      const imageUsageAnalytic = await client.imageUsageAnalytics.retrieve({
        metrics: ['bandwidth_consumption'],
        date_range: {
          start_at: '2024-01-01',
          end_at: '2024-01-01',
        },
        group_by: 'daily',
      });
    },
  );
  smokeCase(
    'imageUsageAnalytics.retrieve:all',
    { operation: 'retrieve', path: '/image/analytics' },
    'retrieve: required and optional params',
    async () => {
      const imageUsageAnalytic = await client.imageUsageAnalytics.retrieve({
        metrics: ['bandwidth_consumption'],
        date_range: {
          start_at: '2024-01-01',
          end_at: '2024-01-01',
        },
        group_by: 'daily',
        filters: {},
      });
    },
  );
});
