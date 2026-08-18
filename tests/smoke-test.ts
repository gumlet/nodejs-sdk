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
import Gumlet from '@gumlet/node-sdk';

// One shared client runs every case.
const client = new Gumlet();

// The result of running one case, collected for the JSON report or the printed table.
type SmokeResult = {
  operation: string;
  method: string;
  path: string;
  status: 'passed' | 'failed';
  durationMs: number;
  error?: string;
};

// One entry per generated operation. `run` performs the real SDK call; the other fields are
// metadata used for filtering and reporting. This list is generated, so it stays in sync with
// the SDK surface.
const cases: { operation: string; method: string; path: string; run: () => Promise<unknown> }[] = [
  {
    operation: 'create',
    method: 'POST',
    path: '/video/assets',
    run: async () => {
      const create = await client.videoAssets.create({
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
      const upload = await client.videoAssets.upload({
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
    operation: 'retrieveStatus',
    method: 'GET',
    path: '/video/assets/{asset_id}',
    run: async () => {
      const retrieveStatus = await client.videoAssets.retrieveStatus('assetId');
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
      const update = await client.videoAssets.update({
        asset_id: '',
      });
    },
  },

  {
    operation: 'selectFrom',
    method: 'POST',
    path: '/video/assets/{asset_id}/thumbnail-select',
    run: async () => {
      const selectFrom = await client.videoAssets.selectFrom('assetId', { frame_at_second: 2 });
    },
  },

  {
    operation: 'selectFromImageFile',
    method: 'POST',
    path: '/video/assets/{asset_ID}/thumbnail',
    run: async () => {
      const selectFromImageFile = await client.videoAssets.selectFromImageFile('assetId');
    },
  },

  {
    operation: 'upload2',
    method: 'POST',
    path: '/video/assets/{asset_ID}/subtitle/upload',
    run: async () => {
      await client.videoAssets.upload2('assetId');
    },
  },

  {
    operation: 'uploadSubtitleCompletion',
    method: 'POST',
    path: '/video/assets/{asset_ID}/subtitle/upload/event',
    run: async () => {
      const uploadSubtitleCompletion = await client.videoAssets.uploadSubtitleCompletion('assetId');
    },
  },

  {
    operation: 'upload3',
    method: 'POST',
    path: '/video/assets/{asset_ID}/audio/upload',
    run: async () => {
      await client.videoAssets.upload3('assetId');
    },
  },

  {
    operation: 'uploadAudioCompletion',
    method: 'POST',
    path: '/video/assets/{asset_ID}/audio/upload/event',
    run: async () => {
      const uploadAudioCompletion = await client.videoAssets.uploadAudioCompletion('assetId');
    },
  },

  {
    operation: 'createUpdateChapter',
    method: 'POST',
    path: '/video/assets/{asset_id}/chapters',
    run: async () => {
      const createUpdateChapter = await client.videoAssets.createUpdateChapter('assetId', {
        chapters: [],
      });
    },
  },

  {
    operation: 'postVideoassetrecover',
    method: 'POST',
    path: '/video/asset/recover',
    run: async () => {
      await client.videoAssets.postVideoassetrecover({
        asset_id: '',
      });
    },
  },

  {
    operation: 'listWorkspaceContent',
    method: 'GET',
    path: '/video/workspaces/{workspace_id}/list',
    run: async () => {
      const listWorkspaceContent = await client.videoAssets.listWorkspaceContent('workspaceId', {
        type: 'all',
        offset: 0,
        size: 20,
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/video/assets/list/{workspace_id}',
    run: async () => {
      const list = await client.videoAssets.list('workspaceId', {
        sortBy: 'created_at',
        orderBy: 'desc',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/video/analytics',
    run: async () => {
      const create = await client.videoUsageAnalytics.create({
        metrics: [],
        date_range: {},
        top_assets_count: '5',
        top_assets_page: '0',
      });
    },
  },

  {
    operation: 'streamingDuration',
    method: 'GET',
    path: '/video/streaming-duration',
    run: async () => {
      const streamingDuration = await client.videoUsageAnalytics.streamingDuration({
        start_at: 'startAt',
        end_at: 'endAt',
        page_size: '1000',
      });
    },
  },

  {
    operation: 'signPart',
    method: 'GET',
    path: '/video/assets/{asset_id}/multipartupload/{part_number}/sign',
    run: async () => {
      const signPart = await client.multipartUpload.signPart('partNumber', {
        asset_id: 'assetId',
      });
    },
  },

  {
    operation: 'complete',
    method: 'POST',
    path: '/video/assets/{asset_id}/multipartupload/complete',
    run: async () => {
      const complete = await client.multipartUpload.complete('assetId');
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/video/profiles',
    run: async () => {
      const create = await client.videoProfiles.create({
        name: 'Gumlet-Profile-1',
        format: 'ABR',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/video/profiles',
    run: async () => {
      const list = await client.videoProfiles.list();
    },
  },

  {
    operation: 'update',
    method: 'POST',
    path: '/video/profiles/{profile_id}',
    run: async () => {
      const update = await client.videoProfiles.update('profileId', {
        profile_id: '',
        format: 'ABR',
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/video/profiles/{profile_id}',
    run: async () => {
      const retrieve = await client.videoProfiles.retrieve('profileId');
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/video/profiles/{profile_id}',
    run: async () => {
      const delete_ = await client.videoProfiles.delete('profileId');
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/video/playlist',
    run: async () => {
      const create = await client.videoPlaylists.create({
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
    run: async () => {
      const listAll = await client.videoPlaylists.listAll();
    },
  },

  {
    operation: 'createAssetTo',
    method: 'POST',
    path: '/video/playlist/{playlist_id}/asset',
    run: async () => {
      const createAssetTo = await client.videoPlaylists.createAssetTo('playlistId', {
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
    operation: 'deleteAssetFrom',
    method: 'DELETE',
    path: '/video/playlist/{playlist_id}/asset',
    run: async () => {
      const deleteAssetFrom = await client.videoPlaylists.deleteAssetFrom('playlistId', {
        delete_list: ['6508790783e4d606118467a3'],
      });
    },
  },

  {
    operation: 'update',
    method: 'POST',
    path: '/video/playlist/{playlist_id}',
    run: async () => {
      const update = await client.videoPlaylists.update('playlistId');
    },
  },

  {
    operation: 'deleteId',
    method: 'DELETE',
    path: '/video/playlist/{playlist_id}',
    run: async () => {
      await client.videoPlaylists.deleteID('playlistId');
    },
  },

  {
    operation: 'listAssets',
    method: 'GET',
    path: '/video/playlist/{playlist_id}/assets',
    run: async () => {
      const listAssets = await client.videoPlaylists.listAssets('playlistId', {
        sort_order: 1,
        page_number: 1,
        page_size: '10',
      });
    },
  },

  {
    operation: 'reorderAssets2',
    method: 'POST',
    path: '/video/playlists/{playlist_id}/reorder',
    run: async () => {
      const reorderAssets2 = await client.videoPlaylists.reorderAssets2('playlistId', {
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
      const create = await client.webhookAPIs.create({
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
    run: async () => {
      const update = await client.webhookAPIs.update('webhookId');
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/org/webhooks/{webhook_id}',
    run: async () => {
      const delete_ = await client.webhookAPIs.delete('webhookId');
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/image/sources',
    run: async () => {
      const create = await client.imageSources.create({
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
      const list = await client.imageSources.list();
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/image/sources/{image_source_id}',
    run: async () => {
      await client.imageSources.retrieve('imageSourceId');
    },
  },

  {
    operation: 'update',
    method: 'POST',
    path: '/image/sources/{image_source_id}',
    run: async () => {
      const update = await client.imageSources.update('imageSourceId');
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/image/sources/{image_source_id}',
    run: async () => {
      const delete_ = await client.imageSources.delete('imageSourceId');
    },
  },

  {
    operation: 'purgeCache',
    method: 'POST',
    path: '/purge/{subdomain}',
    run: async () => {
      await client.imageSources.purgeCache('subdomain');
    },
  },

  {
    operation: 'analytics',
    method: 'POST',
    path: '/image/analytics',
    run: async () => {
      const analytics = await client.imageSources.analytics({
        metrics: [],
        date_range: {},
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/video/live/assets',
    run: async () => {
      const create = await client.liveStreamAssets.create({
        live_source_id: '',
        resolution: '',
      });
    },
  },

  {
    operation: 'update',
    method: 'POST',
    path: '/video/live/assets/update',
    run: async () => {
      const update = await client.liveStreamAssets.update({
        live_asset_id: '',
      });
    },
  },

  {
    operation: 'retrieveStatus',
    method: 'GET',
    path: '/video/live/assets/{live_asset_id}',
    run: async () => {
      const retrieveStatus = await client.liveStreamAssets.retrieveStatus('liveAssetId');
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/video/live/assets/{live_asset_id}',
    run: async () => {
      const delete_ = await client.liveStreamAssets.delete('liveAssetId');
    },
  },

  {
    operation: 'complete',
    method: 'POST',
    path: '/video/live/assets/{live_asset_id}/complete',
    run: async () => {
      const complete = await client.liveStreamAssets.complete('liveAssetId');
    },
  },

  {
    operation: 'filter',
    method: 'GET',
    path: '/video/live/assets/list/{live_source_id}',
    run: async () => {
      const filter = await client.liveStreamAssets.filter('liveSourceId');
    },
  },

  {
    operation: 'postVideoliveassetsId',
    method: 'POST',
    path: '/video/live/assets/{live_asset_id}/start',
    run: async () => {
      await client.liveStreamAssets.postVideoliveassetsID('liveAssetId');
    },
  },

  {
    operation: 'upload',
    method: 'POST',
    path: '/video/live/assets/thumbnail/upload',
    run: async () => {
      const upload = await client.liveStreamAssets.upload({
        live_asset_id: '68c406b147f9ad0c0d584ce2',
        statuses: ['preparing', 'disconnected'],
      });
    },
  },

  {
    operation: 'listStatusCopy',
    method: 'GET',
    path: '/video/live/assets/{live_asset_id}/history',
    run: async () => {
      const listStatusCopy = await client.liveStreamAssets.listStatusCopy('liveAssetId');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/video/workspaces',
    run: async () => {
      const list = await client.videoWorkspaces.list({
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
      const create = await client.videoWorkspaces.create({
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
    run: async () => {
      const update = await client.videoWorkspaces.update('workspaceId');
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/video/workspaces/{workspace_id}',
    run: async () => {
      const retrieve = await client.videoWorkspaces.retrieve('workspaceId');
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/video/workspaces/{workspace_id}',
    run: async () => {
      const delete_ = await client.videoWorkspaces.delete('workspaceId');
    },
  },

  {
    operation: 'create1',
    method: 'POST',
    path: '/video/workspaces/{workspace_id}/folders',
    run: async () => {
      const create1 = await client.folders.create1('workspaceId', { name: 'Course Assets', parent_id: null });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/video/workspaces/{workspace_id}/folders',
    run: async () => {
      const list = await client.folders.list('workspaceId');
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/video/workspaces/{workspace_id}/folders/{folder_id}',
    run: async () => {
      const retrieve = await client.folders.retrieve('folderId', {
        workspace_id: 'workspaceId',
      });
    },
  },

  {
    operation: 'update',
    method: 'POST',
    path: '/video/workspaces/{workspace_id}/folders/{folder_id}',
    run: async () => {
      const update = await client.folders.update('folderId', {
        workspace_id: 'workspaceId',
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/video/workspaces/{workspace_id}/folders/{folder_id}',
    run: async () => {
      const delete_ = await client.folders.delete('folderId', {
        workspace_id: 'workspaceId',
      });
    },
  },

  {
    operation: 'deleteAssetsFrom',
    method: 'POST',
    path: '/video/workspaces/{workspace_id}/remove-assets-from-folder',
    run: async () => {
      const deleteAssetsFrom = await client.folders.deleteAssetsFrom('workspaceId', {
        asset_ids: ['67e4f2b4403562dbea654301', '67e4f2bb403562dbea654302'],
      });
    },
  },

  {
    operation: 'invite',
    method: 'POST',
    path: '/channel/{video_workspace_id}/viewers/invite',
    run: async () => {
      const invite = await client.channelViewers.invite('videoWorkspaceId', {
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
      const delete_ = await client.channelViewers.delete('videoWorkspaceId', {
        emails: ['test@gumlet.com', 'test+2@gumlet.com'],
      });
    },
  },

  {
    operation: 'inviteCsv',
    method: 'POST',
    path: '/channel/{video_workspace_id}/viewers/invite/csv',
    run: async () => {
      const inviteCsv = await client.channelViewers.inviteCsv('videoWorkspaceId', {
        viewers_csv: 'viewers.csv',
      });
    },
  },

  {
    operation: 'insightsChart',
    method: 'POST',
    path: '/video/viewer-analytics',
    run: async () => {
      const insightsChart = await client.dataAPI.insightsChart({
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
    operation: 'insightsAggregated',
    method: 'POST',
    path: '/insights/aggregated-data',
    run: async () => {
      const insightsAggregated = await client.dataAPI.insightsAggregated({
        aggregate: [],
        workspace_id: '',
        timeframe: {},
      });
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
      try {
        await testCase.run();
        return {
          operation: testCase.operation,
          method: testCase.method,
          path: testCase.path,
          status: 'passed',
          durationMs: Date.now() - startedAt,
        };
      } catch (error) {
        // Prefer the stack so a failure points at the failing SDK call; fall back to the message.
        const message = error instanceof Error ? (error.stack ?? error.message) : String(error);
        return {
          operation: testCase.operation,
          method: testCase.method,
          path: testCase.path,
          status: 'failed',
          durationMs: Date.now() - startedAt,
          error: message,
        };
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
      if (result.status === 'passed')
        console.log(`\u2714 ${result.operation} (${result.method} ${result.path}) ${result.durationMs}ms`);
      else
        console.error(`\u2718 ${result.operation} (${result.method} ${result.path})\n${result.error ?? ''}`);
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
