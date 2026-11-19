// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource videoAnalytics', () => {
  smokeCase(
    'videoAnalytics.viewerData:required',
    { operation: 'viewerData', path: '/insights/viewer-analytics' },
    'viewerData: only required params',
    async () => {
      const videoAnalytic = await client.videoAnalytics.viewerData({
        metrics: ['views'],
        date_range: {
          start_at: '2024-01-01',
          end_at: '2024-01-01',
        },
        group_by: 'daily',
      });
    },
  );
  smokeCase(
    'videoAnalytics.viewerData:all',
    { operation: 'viewerData', path: '/insights/viewer-analytics' },
    'viewerData: required and optional params',
    async () => {
      const videoAnalytic = await client.videoAnalytics.viewerData({
        metrics: ['views'],
        workspace_id: '',
        date_range: {
          start_at: '2024-01-01',
          end_at: '2024-01-01',
        },
        filters: [
          {
            name: 'meta_browser',
            value: '',
            operator: 'equals',
          },
        ],
        group_by: 'daily',
        chart_dimension: {},
        download: false,
      });
    },
  );
  smokeCase(
    'videoAnalytics.breakdownData:single',
    { operation: 'breakdownData', path: '/insights/breakdown-data' },
    'breakdownData',
    async () => {
      const videoAnalytic = await client.videoAnalytics.breakdownData({
        date_range: { start_at: '2026-07-20', end_at: '2026-08-20' },
        filters: [],
        breakdowns: [
          { name: 'custom_video_id', metric: 'views', page: 1, page_size: 10 },
          { name: 'custom_video_title', metric: 'completion_percent_by_views', page: 1, page_size: 10 },
        ],
        workspace_id: '6694c405e63913eecf3cf5fb',
      });
    },
  );
  smokeCase(
    'videoAnalytics.aggregatedData:required',
    { operation: 'aggregatedData', path: '/insights/aggregated-data' },
    'aggregatedData: only required params',
    async () => {
      const videoAnalytic = await client.videoAnalytics.aggregatedData({
        aggregate: [
          {
            metric: 'views',
            function: 'sum',
          },
        ],
        workspace_id: '',
        timeframe: {
          start_at: '2024-01-01',
          end_at: '2024-01-01',
        },
      });
    },
  );
  smokeCase(
    'videoAnalytics.aggregatedData:all',
    { operation: 'aggregatedData', path: '/insights/aggregated-data' },
    'aggregatedData: required and optional params',
    async () => {
      const videoAnalytic = await client.videoAnalytics.aggregatedData({
        aggregate: [
          {
            metric: 'views',
            function: 'sum',
          },
        ],
        workspace_id: '',
        timeframe: {
          start_at: '2024-01-01',
          end_at: '2024-01-01',
        },
        filters: [
          {
            name: 'meta_browser',
            value: '',
            operator: 'equals',
          },
        ],
      });
    },
  );
});
