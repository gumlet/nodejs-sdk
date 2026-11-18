// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource liveStreamAnalytics', () => {
  smokeCase(
    'liveStreamAnalytics.usage:single',
    { operation: 'usage', path: '/video/live/analytics' },
    'usage',
    async () => {
      const liveStreamAnalytic = await client.liveStreamAnalytics.usage({
        date_range: {
          start_at: '2024-01-01',
          end_at: '2024-01-01',
        },
        group_by: 'daily',
        metrics: ['bandwidth_consumption'],
      });
    },
  );
});
