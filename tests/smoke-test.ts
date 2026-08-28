// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke test: calls every generated operation once to confirm the SDK can reach each endpoint.
// Run it from this repo with `bun tests/smoke-test.ts`. Each case below calls one SDK method
// exactly the way the SDK exposes it (positional params, request body, pagination, streaming).
//
// Two environment variables tune a run:
//   - SCALAR_SMOKE_FILTER: comma-separated needles; only operations whose name or path contains
//     one of them run, so you can smoke-test a subset without editing this file.
//   - SCALAR_SMOKE_REPORT: a file path; when set, the run writes a JSON report there instead of
//     printing a table. The generator uses this to collect per-operation results.
import { writeFileSync } from 'node:fs';

// The package exports the client class. The client reads auth and the base URL from the
// environment, so it needs no constructor options to point at a server.
import Gumlet from '@gumlet/nodejs-sdk';

// One shared client runs every case.
const client = new Gumlet();

// The result of running one case, collected for the JSON report or the printed table.
type SmokeResult = {
  operation: string;
  method: string;
  path: string;
  label?: string;
  status: 'passed' | 'failed';
  durationMs: number;
  error?: string;
};

// One or two entries per generated operation: the first passes only the arguments the method
// requires, the second also fills every optional parameter and body property. `label` says which
// is which, and is absent when the operation has no optional argument and so has only one case.
// `run` performs the real SDK call; the other fields are metadata used for filtering and
// reporting. This list is generated, so it stays in sync with the SDK surface.
const cases: {
  operation: string;
  method: string;
  path: string;
  label?: string;
  run: () => Promise<unknown>;
}[] = [
  {
    operation: 'create',
    method: 'POST',
    path: '/video/assets',
    run: async () => {
      const videoAsset = await client.videoAssets.create({
        format: 'ABR',
        collection_id: '646df1c9173a4a2fcac180b4',
        input: 'http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8',
        description: 'some description',
        tag: ['ball'],
        profile_id: '646df1c9173a4a2fcac180b7',
        cluster_type: 'prod',
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
            border_radius: '11',
            font_color: '#000001',
            background_color: '#ffffff',
          },
        ],
        folder: '697375fbfa2d1037283140e4',
      });
    },
  },

  {
    operation: 'upload',
    method: 'POST',
    path: '/video/assets/upload',
    run: async () => {
      const videoAsset = await client.videoAssets.upload({
        format: 'ABR',
        collection_id: '646df1c9173a4a2fcac180b4',
        input: 'http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8',
        description: 'some description',
        tag: ['ball'],
        profile_id: '646df1c9173a4a2fcac180b7',
        cluster_type: 'prod',
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
            border_radius: '11',
            font_color: '#000001',
            background_color: '#ffffff',
          },
        ],
        folder: '697375fbfa2d1037283140e4',
      });
    },
  },

  {
    operation: 'retrieveDetails',
    method: 'GET',
    path: '/video/assets/{asset_id}',
    run: async () => {
      const videoAsset = await client.videoAssets.retrieveDetails('assetId');
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/video/assets/{asset_id}',
    run: async () => {
      await client.videoAssets.delete('assetId');
    },
  },

  {
    operation: 'update',
    method: 'POST',
    path: '/video/assets/update',
    run: async () => {
      const videoAsset = await client.videoAssets.update({
        asset_id: '<YOUR_ASSET_ID>',
        title: 'Updated Title',
      });
    },
  },

  {
    operation: 'thumbnailSelect',
    method: 'POST',
    path: '/video/assets/{asset_id}/thumbnail-select',
    run: async () => {
      const videoAsset = await client.videoAssets.thumbnailSelect('assetId', { frame_at_second: 2 });
    },
  },

  {
    operation: 'thumbnailUpload',
    method: 'POST',
    path: '/video/assets/{asset_ID}/thumbnail',
    run: async () => {
      const videoAsset = await client.videoAssets.thumbnailUpload('assetId');
    },
  },

  {
    operation: 'createUpdateChapter',
    method: 'POST',
    path: '/video/assets/{asset_id}/chapters',
    run: async () => {
      const videoAsset = await client.videoAssets.createUpdateChapter('assetId', {
        chapters: [
          { label: 'Chapter 1', startTime: 0 },
          { label: 'Chapter 2', startTime: 10 },
        ],
      });
    },
  },

  {
    operation: 'recover',
    method: 'POST',
    path: '/video/asset/recover',
    run: async () => {
      await client.videoAssets.recover({
        asset_id: '',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/video/workspaces/{workspace_id}/list',
    label: 'required params',
    run: async () => {
      const videoAsset = await client.videoAssets.list('workspaceId', {
        type: 'all',
        offset: 0,
        size: 20,
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/video/workspaces/{workspace_id}/list',
    label: 'all params',
    run: async () => {
      const videoAsset = await client.videoAssets.list('workspaceId', {
        type: 'all',
        parent_id: 'parentId',
        title: 'title',
        status: 'status',
        tag: 'tag',
        playlist_id: 'playlistId',
        start_date: 'startDate',
        end_date: 'endDate',
        min_duration: 1,
        max_duration: 1,
        sortBy: 'title',
        orderBy: 'asc',
        searchIndex: 'search_index_for_asset_list',
        offset: 0,
        size: 20,
      });
    },
  },

  {
    operation: 'listDeprecated',
    method: 'GET',
    path: '/video/assets/list/{workspace_id}',
    label: 'required params',
    run: async () => {
      const videoAsset = await client.videoAssets.listDeprecated('workspaceId', {
        sortBy: 'created_at',
        orderBy: 'desc',
      });
    },
  },

  {
    operation: 'listDeprecated',
    method: 'GET',
    path: '/video/assets/list/{workspace_id}',
    label: 'all params',
    run: async () => {
      const videoAsset = await client.videoAssets.listDeprecated('workspaceId', {
        status: 'queued',
        tag: 'tag',
        title: 'title',
        folder: 'folder',
        offset: 'offset',
        size: 'size',
        playlist_id: 'playlistId',
        sortBy: 'created_at',
        orderBy: 'desc',
        type: 'type',
      });
    },
  },

  {
    operation: 'upload',
    method: 'POST',
    path: '/video/assets/{asset_ID}/subtitle/upload',
    label: 'required params',
    run: async () => {
      const subtitleUpload = await client.subtitleUpload.upload('assetId');
    },
  },

  {
    operation: 'upload',
    method: 'POST',
    path: '/video/assets/{asset_ID}/subtitle/upload',
    label: 'all params',
    run: async () => {
      const subtitleUpload = await client.subtitleUpload.upload('assetId', { language_codes: ['en'] });
    },
  },

  {
    operation: 'complete',
    method: 'POST',
    path: '/video/assets/{asset_ID}/subtitle/upload/event',
    label: 'required params',
    run: async () => {
      const subtitleUpload = await client.subtitleUpload.complete('assetId');
    },
  },

  {
    operation: 'complete',
    method: 'POST',
    path: '/video/assets/{asset_ID}/subtitle/upload/event',
    label: 'all params',
    run: async () => {
      const subtitleUpload = await client.subtitleUpload.complete('assetId', {
        upload_responses: [{ language_code: 'en', uploaded: true }],
      });
    },
  },

  {
    operation: 'upload',
    method: 'POST',
    path: '/video/assets/{asset_ID}/audio/upload',
    label: 'required params',
    run: async () => {
      const audioUpload = await client.audioUpload.upload('assetId');
    },
  },

  {
    operation: 'upload',
    method: 'POST',
    path: '/video/assets/{asset_ID}/audio/upload',
    label: 'all params',
    run: async () => {
      const audioUpload = await client.audioUpload.upload('assetId', { language_codes: ['en'] });
    },
  },

  {
    operation: 'complete',
    method: 'POST',
    path: '/video/assets/{asset_ID}/audio/upload/event',
    label: 'required params',
    run: async () => {
      const audioUpload = await client.audioUpload.complete('assetId');
    },
  },

  {
    operation: 'complete',
    method: 'POST',
    path: '/video/assets/{asset_ID}/audio/upload/event',
    label: 'all params',
    run: async () => {
      const audioUpload = await client.audioUpload.complete('assetId', {
        upload_responses: [{ language_codes: ['en'], uploaded: true }],
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'POST',
    path: '/video/analytics',
    run: async () => {
      const videoUsageAnalytic = await client.videoUsageAnalytics.retrieve({
        metrics: ['bandwidth_consumption', 'asset_duration', 'storage_unit', 'top_assets', 'drm_requests'],
        date_range: { start_at: '2026-08-01', end_at: '2026-08-20' },
        group_by: 'daily',
      });
    },
  },

  {
    operation: 'topAssets',
    method: 'GET',
    path: '/video/streaming-duration',
    label: 'required params',
    run: async () => {
      const videoUsageAnalytic = await client.videoUsageAnalytics.topAssets({
        start_at: '2026-06-21',
        end_at: '2026-06-30',
        page: '1',
        page_size: '1000',
      });
    },
  },

  {
    operation: 'topAssets',
    method: 'GET',
    path: '/video/streaming-duration',
    label: 'all params',
    run: async () => {
      const videoUsageAnalytic = await client.videoUsageAnalytics.topAssets({
        start_at: '2026-06-21',
        end_at: '2026-06-30',
        collection_id: 'collectionId',
        page: '1',
        page_size: '1000',
      });
    },
  },

  {
    operation: 'retrievePartUrl',
    method: 'GET',
    path: '/video/assets/{asset_id}/multipartupload/{part_number}/sign',
    run: async () => {
      const multipartUpload = await client.multipartUpload.retrievePartURL('partNumber', {
        asset_id: 'assetId',
      });
    },
  },

  {
    operation: 'complete',
    method: 'POST',
    path: '/video/assets/{asset_id}/multipartupload/complete',
    label: 'required params',
    run: async () => {
      const multipartUpload = await client.multipartUpload.complete('assetId');
    },
  },

  {
    operation: 'complete',
    method: 'POST',
    path: '/video/assets/{asset_id}/multipartupload/complete',
    label: 'all params',
    run: async () => {
      const multipartUpload = await client.multipartUpload.complete('assetId', {
        parts: [],
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/video/profiles',
    label: 'required params',
    run: async () => {
      const videoProfile = await client.videoProfiles.create({
        name: 'Gumlet-Profile-1',
        format: 'ABR',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/video/profiles',
    label: 'all params',
    run: async () => {
      const videoProfile = await client.videoProfiles.create({
        name: 'Gumlet-Profile-1',
        format: 'ABR',
        width: '',
        height: '',
        resolution: '',
        crop: {
          width: '',
          height: '',
        },
        pad: {},
        trim: {
          start_offset: 0,
          end_offset: 0,
        },
        image_overlay: {
          url: '',
        },
        text_overlay: {
          text: '',
        },
        animated_gif: {},
        generate_subtitles: {
          transcribe: true,
        },
        mp4_access: false,
        per_title_encoding: false,
        process_low_resolution_input: false,
        audio_only: false,
        enable_drm: false,
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/video/profiles',
    label: 'required params',
    run: async () => {
      const videoProfile = await client.videoProfiles.list();
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/video/profiles',
    label: 'all params',
    run: async () => {
      const videoProfile = await client.videoProfiles.list({
        offset: 1,
        size: 1,
      });
    },
  },

  {
    operation: 'update',
    method: 'POST',
    path: '/video/profiles/{profile_id}',
    label: 'required params',
    run: async () => {
      const videoProfile = await client.videoProfiles.update('profileId', {
        profile_id: '',
        format: 'ABR',
      });
    },
  },

  {
    operation: 'update',
    method: 'POST',
    path: '/video/profiles/{profile_id}',
    label: 'all params',
    run: async () => {
      const videoProfile = await client.videoProfiles.update('profileId', {
        profile_id: '',
        name: '',
        format: 'ABR',
        width: '',
        height: '',
        resolution: '',
        crop: {
          width: '',
          height: '',
        },
        pad: {},
        trim: {
          start_offset: 0,
          end_offset: 0,
        },
        image_overlay: {
          url: '',
        },
        text_overlay: {
          text: '',
        },
        animated_gif: {},
        generate_subtitles: {
          transcribe: true,
        },
        mp4_access: false,
        per_title_encoding: false,
        process_low_resolution_input: false,
        audio_only: false,
        enable_drm: false,
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/video/profiles/{profile_id}',
    run: async () => {
      const videoProfile = await client.videoProfiles.retrieve('profileId');
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/video/profiles/{profile_id}',
    run: async () => {
      const videoProfile = await client.videoProfiles.delete('profileId');
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/video/playlist',
    run: async () => {
      const videoPlaylist = await client.videoPlaylists.create({
        title: 'Playlist-Title',
        description: 'This is description for playlist.',
        collection_id: '{{video-source-id}}',
      });
    },
  },

  {
    operation: 'listAll',
    method: 'GET',
    path: '/video/playlist',
    label: 'required params',
    run: async () => {
      const videoPlaylist = await client.videoPlaylists.listAll();
    },
  },

  {
    operation: 'listAll',
    method: 'GET',
    path: '/video/playlist',
    label: 'all params',
    run: async () => {
      const videoPlaylist = await client.videoPlaylists.listAll({
        collection_id: 'collectionId',
      });
    },
  },

  {
    operation: 'createAsset',
    method: 'POST',
    path: '/video/playlist/{playlist_id}/asset',
    run: async () => {
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
  },

  {
    operation: 'deleteAsset',
    method: 'DELETE',
    path: '/video/playlist/{playlist_id}/asset',
    run: async () => {
      const videoPlaylist = await client.videoPlaylists.deleteAsset('playlistId', {
        delete_list: ['6508790783e4d606118467a3'],
      });
    },
  },

  {
    operation: 'update',
    method: 'POST',
    path: '/video/playlist/{playlist_id}',
    label: 'required params',
    run: async () => {
      const videoPlaylist = await client.videoPlaylists.update('playlistId');
    },
  },

  {
    operation: 'update',
    method: 'POST',
    path: '/video/playlist/{playlist_id}',
    label: 'all params',
    run: async () => {
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
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/video/playlist/{playlist_id}',
    run: async () => {
      await client.videoPlaylists.delete('playlistId');
    },
  },

  {
    operation: 'listAssets',
    method: 'GET',
    path: '/video/playlist/{playlist_id}/assets',
    label: 'required params',
    run: async () => {
      const videoPlaylist = await client.videoPlaylists.listAssets('playlistId', {
        sort_order: 1,
        page_number: 1,
        page_size: '10',
      });
    },
  },

  {
    operation: 'listAssets',
    method: 'GET',
    path: '/video/playlist/{playlist_id}/assets',
    label: 'all params',
    run: async () => {
      const videoPlaylist = await client.videoPlaylists.listAssets('playlistId', {
        sort_by: 'sortBy',
        sort_order: 1,
        page_number: 1,
        page_size: '10',
      });
    },
  },

  {
    operation: 'reorderAsset',
    method: 'POST',
    path: '/video/playlists/{playlist_id}/reorder',
    run: async () => {
      const videoPlaylist = await client.videoPlaylists.reorderAsset('playlistId', {
        asset_id: '6e82bf783e88be000ab45ed2',
        page_number: 1,
        page_size: 10,
        asset_position: 0,
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/org/webhooks',
    run: async () => {
      const webhookAPI = await client.webhookAPIs.create({
        url: '',
        secret_token: '',
        triggers: [],
        sources: [],
      });
    },
  },

  {
    operation: 'update',
    method: 'POST',
    path: '/org/webhooks/{webhook_id}',
    label: 'required params',
    run: async () => {
      const webhookAPI = await client.webhookAPIs.update('webhookId');
    },
  },

  {
    operation: 'update',
    method: 'POST',
    path: '/org/webhooks/{webhook_id}',
    label: 'all params',
    run: async () => {
      const webhookAPI = await client.webhookAPIs.update('webhookId', {
        url: '',
        secret_token: '',
        triggers: '',
        sources: '',
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/org/webhooks/{webhook_id}',
    run: async () => {
      const webhookAPI = await client.webhookAPIs.delete('webhookId');
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/image/sources',
    run: async () => {
      const imageSource = await client.imageSources.create({
        type: 'webfolder',
        webfolder: { base_url: 'https://www.google.com' },
        namespace: 'google-demo',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/image/sources',
    run: async () => {
      const imageSource = await client.imageSources.list({
        offset: 0,
        size: 20,
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/image/sources/{image_source_id}',
    run: async () => {
      const imageSource = await client.imageSources.retrieve('imageSourceId');
    },
  },

  {
    operation: 'update',
    method: 'POST',
    path: '/image/sources/{image_source_id}',
    label: 'required params',
    run: async () => {
      const imageSource = await client.imageSources.update('imageSourceId');
    },
  },

  {
    operation: 'update',
    method: 'POST',
    path: '/image/sources/{image_source_id}',
    label: 'all params',
    run: async () => {
      const imageSource = await client.imageSources.update('imageSourceId', {
        default_profile_id: '646df1c9173a4a2fcac180b7',
        name: 'awsrename',
        type: 'aws',
        aws: {
          bucket_name: 'my-bucket-test',
          bucket_region: 'ap-southeast-1',
          access_key: 'BQUA6QFXVWHAAB6IO2X1',
          secret: 'aws_secret',
        },
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/image/sources/{image_source_id}',
    run: async () => {
      const imageSource = await client.imageSources.delete('imageSourceId');
    },
  },

  {
    operation: 'purgeCache',
    method: 'POST',
    path: '/purge/{subdomain}',
    label: 'required params',
    run: async () => {
      const imageSource = await client.imageSources.purgeCache('subdomain');
    },
  },

  {
    operation: 'purgeCache',
    method: 'POST',
    path: '/purge/{subdomain}',
    label: 'all params',
    run: async () => {
      const imageSource = await client.imageSources.purgeCache('subdomain', {
        paths: ['image.jpeg', 'image2.png'],
      });
    },
  },

  {
    operation: 'purge',
    method: 'POST',
    path: '/image/purge/{source_id}',
    run: async () => {
      const imageSource = await client.imageSources.purge('sourceId', {
        paths: ['image.jpeg', 'image2.png'],
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'POST',
    path: '/image/analytics',
    label: 'required params',
    run: async () => {
      const imageUsageAnalytic = await client.imageUsageAnalytics.retrieve({
        metrics: [],
        date_range: {},
        group_by: 'daily',
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'POST',
    path: '/image/analytics',
    label: 'all params',
    run: async () => {
      const imageUsageAnalytic = await client.imageUsageAnalytics.retrieve({
        metrics: [],
        date_range: {},
        group_by: 'daily',
        filters: {},
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/video/live/assets',
    label: 'required params',
    run: async () => {
      const liveStreamAsset = await client.liveStreamAssets.create({
        live_source_id: '',
        resolution: '',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/video/live/assets',
    label: 'all params',
    run: async () => {
      const liveStreamAsset = await client.liveStreamAssets.create({
        live_source_id: '',
        resolution: '',
        title: '',
        mp4_access: false,
        orientation: 'landscape',
        start_at: '2024-01-01T00:00:00.000Z',
      });
    },
  },

  {
    operation: 'update',
    method: 'POST',
    path: '/video/live/assets/update',
    label: 'required params',
    run: async () => {
      const liveStreamAsset = await client.liveStreamAssets.update({
        live_asset_id: '',
      });
    },
  },

  {
    operation: 'update',
    method: 'POST',
    path: '/video/live/assets/update',
    label: 'all params',
    run: async () => {
      const liveStreamAsset = await client.liveStreamAssets.update({
        live_asset_id: '',
        title: '',
        start_at: '2024-01-01T00:00:00.000Z',
      });
    },
  },

  {
    operation: 'retrieveStatus',
    method: 'GET',
    path: '/video/live/assets/{live_asset_id}',
    run: async () => {
      const liveStreamAsset = await client.liveStreamAssets.retrieveStatus('liveAssetId');
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/video/live/assets/{live_asset_id}',
    run: async () => {
      const liveStreamAsset = await client.liveStreamAssets.delete('liveAssetId');
    },
  },

  {
    operation: 'complete',
    method: 'POST',
    path: '/video/live/assets/{live_asset_id}/complete',
    run: async () => {
      const liveStreamAsset = await client.liveStreamAssets.complete('liveAssetId');
    },
  },

  {
    operation: 'filter',
    method: 'GET',
    path: '/video/live/assets/list/{live_source_id}',
    label: 'required params',
    run: async () => {
      const liveStreamAsset = await client.liveStreamAssets.filter('liveSourceId');
    },
  },

  {
    operation: 'filter',
    method: 'GET',
    path: '/video/live/assets/list/{live_source_id}',
    label: 'all params',
    run: async () => {
      const liveStreamAsset = await client.liveStreamAssets.filter('liveSourceId', {
        status: 'status',
        offset: 1,
        size: 1,
      });
    },
  },

  {
    operation: 'start',
    method: 'POST',
    path: '/video/live/assets/{live_asset_id}/start',
    run: async () => {
      await client.liveStreamAssets.start('liveAssetId');
    },
  },

  {
    operation: 'upload',
    method: 'POST',
    path: '/video/live/assets/thumbnail/upload',
    run: async () => {
      const liveStreamAsset = await client.liveStreamAssets.upload({
        live_asset_id: '68c406b147f9ad0c0d584ce2',
        statuses: ['preparing', 'disconnected'],
      });
    },
  },

  {
    operation: 'statusHistory',
    method: 'GET',
    path: '/video/live/assets/{live_asset_id}/history',
    run: async () => {
      const liveStreamAsset = await client.liveStreamAssets.statusHistory('liveAssetId');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/video/workspaces',
    run: async () => {
      const videoWorkspace = await client.videoWorkspaces.list({
        offset: '0',
        size: '10',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/video/workspaces',
    run: async () => {
      const videoWorkspace = await client.videoWorkspaces.create({
        name: 'zoom-workspace',
        type: 'zoom',
        zoom: { secret: 'yourSecret' },
      });
    },
  },

  {
    operation: 'update',
    method: 'POST',
    path: '/video/workspaces/{workspace_id}',
    label: 'required params',
    run: async () => {
      const videoWorkspace = await client.videoWorkspaces.update('workspaceId');
    },
  },

  {
    operation: 'update',
    method: 'POST',
    path: '/video/workspaces/{workspace_id}',
    label: 'all params',
    run: async () => {
      const videoWorkspace = await client.videoWorkspaces.update('workspaceId', {
        default_profile_id: '646df1c9173a4a2fcac180b7',
        name: 'awsrename',
        type: 'aws',
        aws: {
          bucket_name: 'my-bucket-test',
          bucket_region: 'ap-southeast-1',
          access_key: 'BQUA6QFXVWHAAB6IO2X1',
          secret: 'aws_secret',
        },
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/video/workspaces/{workspace_id}',
    run: async () => {
      const videoWorkspace = await client.videoWorkspaces.retrieve('workspaceId');
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/video/workspaces/{workspace_id}',
    run: async () => {
      const videoWorkspace = await client.videoWorkspaces.delete('workspaceId');
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/video/workspaces/{workspace_id}/folders',
    run: async () => {
      const folder = await client.folders.create('workspaceId', { name: 'Course Assets', parent_id: null });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/video/workspaces/{workspace_id}/folders',
    label: 'required params',
    run: async () => {
      const folder = await client.folders.list('workspaceId');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/video/workspaces/{workspace_id}/folders',
    label: 'all params',
    run: async () => {
      const folder = await client.folders.list('workspaceId', {
        parent_id: 'parentId',
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/video/workspaces/{workspace_id}/folders/{folder_id}',
    run: async () => {
      const folder = await client.folders.retrieve('folderId', {
        workspace_id: 'workspaceId',
      });
    },
  },

  {
    operation: 'update',
    method: 'POST',
    path: '/video/workspaces/{workspace_id}/folders/{folder_id}',
    label: 'required params',
    run: async () => {
      const folder = await client.folders.update('folderId', {
        workspace_id: 'workspaceId',
      });
    },
  },

  {
    operation: 'update',
    method: 'POST',
    path: '/video/workspaces/{workspace_id}/folders/{folder_id}',
    label: 'all params',
    run: async () => {
      const folder = await client.folders.update('folderId', {
        workspace_id: 'workspaceId',
        body: {
          name: '',
          parent_id: '',
          asset_ids: [],
        },
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/video/workspaces/{workspace_id}/folders/{folder_id}',
    run: async () => {
      const folder = await client.folders.delete('folderId', {
        workspace_id: 'workspaceId',
      });
    },
  },

  {
    operation: 'deleteAssets',
    method: 'POST',
    path: '/video/workspaces/{workspace_id}/remove-assets-from-folder',
    run: async () => {
      const folder = await client.folders.deleteAssets('workspaceId', {
        asset_ids: ['67e4f2b4403562dbea654301', '67e4f2bb403562dbea654302'],
      });
    },
  },

  {
    operation: 'invite',
    method: 'POST',
    path: '/channel/{video_workspace_id}/viewers/invite',
    run: async () => {
      const channelViewer = await client.channelViewers.invite('videoWorkspaceId', {
        users: [
          { email: 'test@gumlet.com', name: 'Test User-0' },
          { email: 'test+1@gumlet.com', name: 'Test User-1' },
          { email: 'test+2@gumlet.com', name: 'Test User-2' },
        ],
      });
    },
  },

  {
    operation: 'delete',
    method: 'POST',
    path: '/channel/{video_workspace_id}/viewers/remove',
    run: async () => {
      const channelViewer = await client.channelViewers.delete('videoWorkspaceId', {
        emails: ['test@gumlet.com', 'test+2@gumlet.com'],
      });
    },
  },

  {
    operation: 'inviteCsv',
    method: 'POST',
    path: '/channel/{video_workspace_id}/viewers/invite/csv',
    run: async () => {
      const channelViewer = await client.channelViewers.inviteCsv('videoWorkspaceId', {
        viewers_csv: 'viewers.csv',
      });
    },
  },

  {
    operation: 'insightsChart',
    method: 'POST',
    path: '/insights/viewer-analytics',
    label: 'required params',
    run: async () => {
      const dataAPI = await client.dataAPI.insightsChart({
        metrics: [],
        workspace_id: '',
        date_range: {
          start_at: '2024-01-01',
          end_at: '2024-01-01',
        },
        group_by: 'daily',
      });
    },
  },

  {
    operation: 'insightsChart',
    method: 'POST',
    path: '/insights/viewer-analytics',
    label: 'all params',
    run: async () => {
      const dataAPI = await client.dataAPI.insightsChart({
        metrics: [],
        workspace_id: '',
        date_range: {
          start_at: '2024-01-01',
          end_at: '2024-01-01',
        },
        filters: [],
        group_by: 'daily',
        chart_dimension: {},
      });
    },
  },

  {
    operation: 'insightsAggregated',
    method: 'POST',
    path: '/insights/aggregated-data',
    label: 'required params',
    run: async () => {
      const dataAPI = await client.dataAPI.insightsAggregated({
        aggregate: [],
        workspace_id: '',
        timeframe: {},
      });
    },
  },

  {
    operation: 'insightsAggregated',
    method: 'POST',
    path: '/insights/aggregated-data',
    label: 'all params',
    run: async () => {
      const dataAPI = await client.dataAPI.insightsAggregated({
        aggregate: [],
        workspace_id: '',
        timeframe: {},
        filters: [],
      });
    },
  },

  {
    operation: 'retrieveOrg',
    method: 'GET',
    path: '/org/data',
    run: async () => {
      const organizationData = await client.organizationData.retrieveOrg();
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/user/data',
    run: async () => {
      const userData = await client.userData.retrieve();
    },
  },
];

const main = async (): Promise<void> => {
  // SCALAR_SMOKE_FILTER (comma-separated) keeps only cases whose operation name or path matches
  // one of the needles, so a caller can smoke-test a subset. With no filter, every case runs.
  const filter = process.env['SCALAR_SMOKE_FILTER'];
  const needles = filter
    ? filter
        .split(',')
        .map((needle) => needle.trim())
        .filter(Boolean)
    : [];
  const selected =
    needles.length > 0
      ? cases.filter((testCase) =>
          needles.some((needle) => testCase.operation.includes(needle) || testCase.path.includes(needle)),
        )
      : cases;

  // Run every selected case concurrently. Promise.allSettled means one failing operation never
  // blocks the others, so a single run reports the status of every endpoint.
  const settled = await Promise.allSettled(
    selected.map(async (testCase): Promise<SmokeResult> => {
      const startedAt = Date.now();
      // `label` distinguishes the required-params run from the all-params run of the same
      // operation; it is omitted entirely when the operation contributed only one case.
      const identity = {
        operation: testCase.operation,
        method: testCase.method,
        path: testCase.path,
        ...(testCase.label ? { label: testCase.label } : {}),
      };
      try {
        await testCase.run();
        return { ...identity, status: 'passed', durationMs: Date.now() - startedAt };
      } catch (error) {
        // Prefer the stack so a failure points at the failing SDK call; fall back to the message.
        const message = error instanceof Error ? (error.stack ?? error.message) : String(error);
        return { ...identity, status: 'failed', durationMs: Date.now() - startedAt, error: message };
      }
    }),
  );

  // allSettled never rejects, but defensively map any rejected slot to a failed result.
  const results: SmokeResult[] = settled.map((result) =>
    result.status === 'fulfilled'
      ? result.value
      : {
          operation: 'unknown',
          method: '',
          path: '',
          status: 'failed',
          durationMs: 0,
          error: String(result.reason),
        },
  );
  const failed = results.filter((result) => result.status === 'failed');

  // With SCALAR_SMOKE_REPORT set, write a machine-readable report; otherwise print a table.
  const reportPath = process.env['SCALAR_SMOKE_REPORT'];
  if (reportPath) {
    writeFileSync(reportPath, JSON.stringify({ total: results.length, failed: failed.length, results }));
  } else {
    for (const result of results) {
      const suffix = result.label ? ` [${result.label}]` : '';
      if (result.status === 'passed')
        console.log(
          `\u2714 ${result.operation}${suffix} (${result.method} ${result.path}) ${result.durationMs}ms`,
        );
      else
        console.error(
          `\u2718 ${result.operation}${suffix} (${result.method} ${result.path})\n${result.error ?? ''}`,
        );
    }
    if (results.length === 0) {
      console.error('No code samples ran (empty SDK or a SCALAR_SMOKE_FILTER that matched nothing).');
    } else {
      console.log(`\n${results.length - failed.length}/${results.length} samples passed`);
    }
  }

  // An empty run (no operations, or a filter that matched nothing) is a failure, not a vacuous pass.
  if (failed.length > 0 || results.length === 0) process.exitCode = 1;
};

void main();
