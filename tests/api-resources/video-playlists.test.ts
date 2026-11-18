// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource videoPlaylists', () => {
  smokeCase(
    'videoPlaylists.create:single',
    { operation: 'create', path: '/video/playlist' },
    'create',
    async () => {
      const videoPlaylist = await client.videoPlaylists.create({
        title: 'Playlist-Title',
        description: 'This is description for playlist.',
        collection_id: '{{video-source-id}}',
        workspace_id: '{{video-source-id}}',
      });
    },
  );
  smokeCase(
    'videoPlaylists.listAll:required',
    { operation: 'listAll', path: '/video/playlist' },
    'listAll: only required params',
    async () => {
      const videoPlaylist = await client.videoPlaylists.listAll();
    },
  );
  smokeCase(
    'videoPlaylists.listAll:all',
    { operation: 'listAll', path: '/video/playlist' },
    'listAll: required and optional params',
    async () => {
      const videoPlaylist = await client.videoPlaylists.listAll({
        workspace_id: 'workspaceId',
        collection_id: 'collectionId',
      });
    },
  );
  smokeCase(
    'videoPlaylists.createAsset:single',
    { operation: 'createAsset', path: '/video/playlist/{playlist_id}/asset' },
    'createAsset',
    async () => {
      const videoPlaylist = await client.videoPlaylists.createAsset('playlistId', {
        asset_list: [
          { asset_id: '6508790283e4d60611846790' },
          { position: 1, asset_id: '650878f883e4d6061184677d' },
          { asset_id: '650878de83e4d6061184676a' },
          { position: 2, asset_id: '650878d883e4d60611846757' },
          { position: 3, asset_id: '65578dd87eebc22dcdd549a2' },
        ],
      });
    },
  );
  smokeCase(
    'videoPlaylists.deleteAsset:single',
    { operation: 'deleteAsset', path: '/video/playlist/{playlist_id}/asset' },
    'deleteAsset',
    async () => {
      const videoPlaylist = await client.videoPlaylists.deleteAsset('playlistId', {
        delete_list: ['6508790783e4d606118467a3'],
      });
    },
  );
  smokeCase(
    'videoPlaylists.update:required',
    { operation: 'update', path: '/video/playlist/{playlist_id}' },
    'update: only required params',
    async () => {
      const videoPlaylist = await client.videoPlaylists.update('playlistId');
    },
  );
  smokeCase(
    'videoPlaylists.update:all',
    { operation: 'update', path: '/video/playlist/{playlist_id}' },
    'update: required and optional params',
    async () => {
      const videoPlaylist = await client.videoPlaylists.update('playlistId', {
        title: 'Playlist-Title-Updated',
        position: 6,
        description: 'This is updated description',
        player_config: {
          preload: true,
          autoplay: false,
          disable_seek: true,
          disable_player_controls: false,
          powered_by_gumlet_overlay: false,
          allow_drm_protected_videos: false,
          loop: false,
          player_color: '#6658ea',
          include_seo: true,
          subtitle_enabled: true,
          pixel_tags: {},
          logo_width: 51,
          logo_height: 100,
          dynamic_watermark: false,
          watermark_font_size: 1,
          watermark_font_color: '#ff0000',
          watermark_bg_color: 'transparent',
          watermark_interval: 1000,
        },
      });
    },
  );
  smokeCase(
    'videoPlaylists.delete:single',
    { operation: 'delete', path: '/video/playlist/{playlist_id}' },
    'delete',
    async () => {
      await client.videoPlaylists.delete('playlistId');
    },
  );
  smokeCase(
    'videoPlaylists.listAssets:required',
    { operation: 'listAssets', path: '/video/playlist/{playlist_id}/assets' },
    'listAssets: only required params',
    async () => {
      const videoPlaylist = await client.videoPlaylists.listAssets('playlistId', {
        sort_order: 1,
        page_number: 1,
        page_size: '10',
      });
    },
  );
  smokeCase(
    'videoPlaylists.listAssets:all',
    { operation: 'listAssets', path: '/video/playlist/{playlist_id}/assets' },
    'listAssets: required and optional params',
    async () => {
      const videoPlaylist = await client.videoPlaylists.listAssets('playlistId', {
        sort_by: 'sortBy',
        sort_order: 1,
        page_number: 1,
        page_size: '10',
      });
    },
  );
  smokeCase(
    'videoPlaylists.reorderAsset:single',
    { operation: 'reorderAsset', path: '/video/playlists/{playlist_id}/reorder' },
    'reorderAsset',
    async () => {
      const videoPlaylist = await client.videoPlaylists.reorderAsset('playlistId', {
        asset_id: '6e82bf783e88be000ab45ed2',
        page_number: 1,
        page_size: 10,
        asset_position: 0,
      });
    },
  );
});
