// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource videoUsageAnalytics', () => {
  smokeCase(
    'videoUsageAnalytics.retrieve:single',
    { operation: 'retrieve', path: '/video/analytics' },
    'retrieve',
    async () => {
      const videoUsageAnalytic = await client.videoUsageAnalytics.retrieve({
        metrics: ['bandwidth_consumption', 'asset_duration', 'storage_unit', 'top_assets', 'drm_requests'],
        date_range: { start_at: '2026-08-01', end_at: '2026-08-20' },
        group_by: 'daily',
      });
    },
  );
  smokeCase(
    'videoUsageAnalytics.topAssets:required',
    { operation: 'topAssets', path: '/video/streaming-duration' },
    'topAssets: only required params',
    async () => {
      const videoUsageAnalytic = await client.videoUsageAnalytics.topAssets({
        start_at: '2026-06-21',
        end_at: '2026-06-30',
        page: '1',
        page_size: '1000',
      });
    },
  );
  smokeCase(
    'videoUsageAnalytics.topAssets:all',
    { operation: 'topAssets', path: '/video/streaming-duration' },
    'topAssets: required and optional params',
    async () => {
      const videoUsageAnalytic = await client.videoUsageAnalytics.topAssets({
        start_at: '2026-06-21',
        end_at: '2026-06-30',
        workspace_id: 'workspaceId',
        collection_id: 'collectionId',
        page: '1',
        page_size: '1000',
      });
    },
  );
});
