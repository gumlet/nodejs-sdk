// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource liveStreamAssets', () => {
  smokeCase(
    'liveStreamAssets.create:required',
    { operation: 'create', path: '/video/live/assets' },
    'create: only required params',
    async () => {
      const liveStreamAsset = await client.liveStreamAssets.create({
        live_source_id: '',
        resolution: '',
      });
    },
  );
  smokeCase(
    'liveStreamAssets.create:all',
    { operation: 'create', path: '/video/live/assets' },
    'create: required and optional params',
    async () => {
      const liveStreamAsset = await client.liveStreamAssets.create({
        live_source_id: '',
        resolution: '',
        title: '',
        mp4_access: false,
        orientation: 'landscape',
        start_at: '2024-01-01T00:00:00.000Z',
      });
    },
  );
  smokeCase(
    'liveStreamAssets.update:required',
    { operation: 'update', path: '/video/live/assets/update' },
    'update: only required params',
    async () => {
      const liveStreamAsset = await client.liveStreamAssets.update({
        live_asset_id: '',
      });
    },
  );
  smokeCase(
    'liveStreamAssets.update:all',
    { operation: 'update', path: '/video/live/assets/update' },
    'update: required and optional params',
    async () => {
      const liveStreamAsset = await client.liveStreamAssets.update({
        live_asset_id: '',
        title: '',
        start_at: '2024-01-01T00:00:00.000Z',
      });
    },
  );
  smokeCase(
    'liveStreamAssets.retrieveStatus:single',
    { operation: 'retrieveStatus', path: '/video/live/assets/{live_asset_id}' },
    'retrieveStatus',
    async () => {
      const liveStreamAsset = await client.liveStreamAssets.retrieveStatus('liveAssetId');
    },
  );
  smokeCase(
    'liveStreamAssets.delete:single',
    { operation: 'delete', path: '/video/live/assets/{live_asset_id}' },
    'delete',
    async () => {
      const liveStreamAsset = await client.liveStreamAssets.delete('liveAssetId');
    },
  );
  smokeCase(
    'liveStreamAssets.complete:single',
    { operation: 'complete', path: '/video/live/assets/{live_asset_id}/complete' },
    'complete',
    async () => {
      const liveStreamAsset = await client.liveStreamAssets.complete('liveAssetId');
    },
  );
  smokeCase(
    'liveStreamAssets.filter:required',
    { operation: 'filter', path: '/video/live/assets/list/{live_source_id}' },
    'filter: only required params',
    async () => {
      const page = await client.liveStreamAssets.filter('liveSourceId');
    },
  );
  smokeCase(
    'liveStreamAssets.filter:all',
    { operation: 'filter', path: '/video/live/assets/list/{live_source_id}' },
    'filter: required and optional params',
    async () => {
      const page = await client.liveStreamAssets.filter('liveSourceId', {
        status: 'status',
        next_page_token: 'nextPageToken',
      });
    },
  );
  smokeCase(
    'liveStreamAssets.start:single',
    { operation: 'start', path: '/video/live/assets/{live_asset_id}/start' },
    'start',
    async () => {
      await client.liveStreamAssets.start('liveAssetId');
    },
  );
  smokeCase(
    'liveStreamAssets.upload:single',
    { operation: 'upload', path: '/video/live/assets/thumbnail/upload' },
    'upload',
    async () => {
      const liveStreamAsset = await client.liveStreamAssets.upload({
        live_asset_id: '68c406b147f9ad0c0d584ce2',
        statuses: ['preparing', 'disconnected'],
      });
    },
  );
  smokeCase(
    'liveStreamAssets.statusHistory:single',
    { operation: 'statusHistory', path: '/video/live/assets/{live_asset_id}/history' },
    'statusHistory',
    async () => {
      const liveStreamAsset = await client.liveStreamAssets.statusHistory('liveAssetId');
    },
  );
});
