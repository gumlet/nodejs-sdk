// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource videoAssets', () => {
  smokeCase(
    'videoAssets.create:single',
    { operation: 'create', path: '/video/assets' },
    'create',
    async () => {
      const videoAsset = await client.videoAssets.create({
        format: 'ABR',
        workspace_id: '<your workspace id>',
        title: 'Example Title',
        input: 'http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8',
      });
    },
  );
  smokeCase(
    'videoAssets.upload:single',
    { operation: 'upload', path: '/video/assets/upload' },
    'upload',
    async () => {
      const videoAsset = await client.videoAssets.upload({
        format: 'ABR',
        collection_id: '646df1c9173a4a2fcac180b4',
        description: 'some description',
        tag: ['ball'],
        profile_id: '646df1c9173a4a2fcac180b7',
        playlist_id: '6597acd5ed6f26a9c5ca9633',
        metadata: { headermeta: 'metavalue' },
        call_to_actions: [
          {
            start_time: 1,
            end_time: 90,
            text: 'some test',
            url: 'https://some-url.com',
            position_from_top: 11,
            position_from_right: 23,
            font_color: '#000001',
            background_color: '#ffffff',
          },
        ],
        folder: '697375fbfa2d1037283140e4',
        workspace_id: '646df1c9173a4a2fcac180b4',
      });
    },
  );
  smokeCase(
    'videoAssets.retrieveDetails:single',
    { operation: 'retrieveDetails', path: '/video/assets/{asset_id}' },
    'retrieveDetails',
    async () => {
      const videoAsset = await client.videoAssets.retrieveDetails('assetId');
    },
  );
  smokeCase(
    'videoAssets.delete:single',
    { operation: 'delete', path: '/video/assets/{asset_id}' },
    'delete',
    async () => {
      await client.videoAssets.delete('assetId');
    },
  );
  smokeCase(
    'videoAssets.update:single',
    { operation: 'update', path: '/video/assets/update' },
    'update',
    async () => {
      const videoAsset = await client.videoAssets.update({
        asset_id: '<YOUR_ASSET_ID>',
        title: 'Updated Title',
      });
    },
  );
  smokeCase(
    'videoAssets.thumbnailSelect:single',
    { operation: 'thumbnailSelect', path: '/video/assets/{asset_id}/thumbnail-select' },
    'thumbnailSelect',
    async () => {
      const videoAsset = await client.videoAssets.thumbnailSelect('assetId', { frame_at_second: 2 });
    },
  );
  smokeCase(
    'videoAssets.thumbnailUpload:single',
    { operation: 'thumbnailUpload', path: '/video/assets/{asset_ID}/thumbnail' },
    'thumbnailUpload',
    async () => {
      const videoAsset = await client.videoAssets.thumbnailUpload('assetId');
    },
  );
  smokeCase(
    'videoAssets.createUpdateChapter:single',
    { operation: 'createUpdateChapter', path: '/video/assets/{asset_id}/chapters' },
    'createUpdateChapter',
    async () => {
      const videoAsset = await client.videoAssets.createUpdateChapter('assetId', {
        chapters: [
          { label: 'Chapter 1', startTime: 0 },
          { label: 'Chapter 2', startTime: 10 },
        ],
      });
    },
  );
  smokeCase(
    'videoAssets.listWorkspaceFoldersAndDeprecated:required',
    { operation: 'listWorkspaceFoldersAndDeprecated', path: '/video/workspaces/{workspace_id}/list' },
    'listWorkspaceFoldersAndDeprecated: only required params',
    async () => {
      const videoAsset = await client.videoAssets.listWorkspaceFoldersAndDeprecated('workspaceId', {
        type: 'all',
        offset: 0,
        size: 20,
        signed_token: 'false',
      });
    },
  );
  smokeCase(
    'videoAssets.listWorkspaceFoldersAndDeprecated:all',
    { operation: 'listWorkspaceFoldersAndDeprecated', path: '/video/workspaces/{workspace_id}/list' },
    'listWorkspaceFoldersAndDeprecated: required and optional params',
    async () => {
      const videoAsset = await client.videoAssets.listWorkspaceFoldersAndDeprecated('workspaceId', {
        type: 'all',
        parent_id: 'parentId',
        title: 'title',
        status: 'status',
        tag: 'tag',
        playlist_id: 'playlistId',
        start_date: '2024-01-01',
        end_date: '2024-01-01',
        min_duration: 1,
        max_duration: 1,
        sortBy: 'title',
        orderBy: 'asc',
        searchIndex: 'search_index_for_asset_list',
        offset: 0,
        size: 20,
        signed_token: 'false',
      });
    },
  );
  smokeCase(
    'videoAssets.list:required',
    { operation: 'list', path: '/video/assets/list/{workspace_id}' },
    'list: only required params',
    async () => {
      const videoAsset = await client.videoAssets.list('workspaceId', {
        sortBy: 'created_at',
        orderBy: 'desc',
        signed_token: 'false',
        page_number: 1,
        page_size: 20,
      });
    },
  );
  smokeCase(
    'videoAssets.list:all',
    { operation: 'list', path: '/video/assets/list/{workspace_id}' },
    'list: required and optional params',
    async () => {
      const videoAsset = await client.videoAssets.list('workspaceId', {
        status: 'status',
        tag: 'tag',
        title: 'title',
        folder_id: 'folderId',
        playlist_id: 'playlistId',
        start_date: '2024-01-01',
        end_date: '2024-01-01',
        min_duration: 1,
        max_duration: 1,
        sortBy: 'created_at',
        orderBy: 'desc',
        signed_token: 'false',
        page_number: 1,
        page_size: 20,
        next_page_token: 'nextPageToken',
      });
    },
  );
  smokeCase(
    'videoAssets.deleteMany:single',
    { operation: 'deleteMany', path: '/video/assets/bulk/delete' },
    'deleteMany',
    async () => {
      const videoAsset = await client.videoAssets.deleteMany({
        source_id: '60bd2ba353ff754d28179ee6',
        asset_list: ['64249a8858fd3a208b987702', '64784bae843b155b829bbf84'],
        workspace_id: '60bd2ba353ff754d28179ee6',
      });
    },
  );
  smokeCase(
    'videoAssets.tagMany:single',
    { operation: 'tagMany', path: '/video/assets/bulk/tag' },
    'tagMany',
    async () => {
      const videoAsset = await client.videoAssets.tagMany({
        source_id: '60bd2ba353ff754d28179ee6',
        add_tags: ['tag-1'],
        remove_tags: ['playlist-1'],
        asset_list: ['6221db301c8b821b0519fba0', '61e8f2726ec832ab2ac4fa6e'],
        workspace_id: '60bd2ba353ff754d28179ee6',
      });
    },
  );
  smokeCase(
    'videoAssets.analytics:required',
    { operation: 'analytics', path: '/video/assets/{asset_id}/analytics' },
    'analytics: only required params',
    async () => {
      const videoAsset = await client.videoAssets.analytics('assetId', {
        group_by: 'daily',
        date_range: {
          start_at: '2024-01-01',
          end_at: '2024-01-01',
        },
        metrics: ['impressions'],
      });
    },
  );
  smokeCase(
    'videoAssets.analytics:all',
    { operation: 'analytics', path: '/video/assets/{asset_id}/analytics' },
    'analytics: required and optional params',
    async () => {
      const videoAsset = await client.videoAssets.analytics('assetId', {
        group_by: 'daily',
        date_range: {
          start_at: '2024-01-01',
          end_at: '2024-01-01',
        },
        metrics: ['impressions'],
        page_number: 0,
        page_size: 0,
      });
    },
  );
});
