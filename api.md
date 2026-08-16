# gumlet-rest-apis TypeScript API

Complete reference of every operation, grouped by resource. See [the README](./README.md) for usage and configuration.

## Contents

- [`VideoAssets`](#videoassets)
  - [Create Asset](#create-asset)
  - [Create Asset Direct Upload](#create-asset-direct-upload)
  - [Asset Details](#asset-details)
  - [Delete Asset](#delete-asset)
  - [Update Asset](#update-asset)
  - [Update thumbnail from video](#update-thumbnail-from-video)
  - [Update thumbnail via upload](#update-thumbnail-via-upload)
  - [Upload Subtitle](#upload-subtitle)
  - [Upload Subtitle Completion](#upload-subtitle-completion)
  - [Upload Audio](#upload-audio)
  - [Upload Audio Completion](#upload-audio-completion)
  - [Create/Update Video Asset Chapters](#createupdate-video-asset-chapters)
  - [`postVideoassetrecover`](#postvideoassetrecover)
  - [List Assets](#list-assets)
  - [List Assets](#list-assets-1)
- [`VideoUsageAnalytics`](#videousageanalytics)
  - [Video Analytics](#video-analytics)
  - [Streaming Duration](#streaming-duration)
- [`MultipartUpload`](#multipartupload)
  - [Single Part](#single-part)
  - [Complete Multipart Upload](#complete-multipart-upload)
- [`VideoProfiles`](#videoprofiles)
  - [Create Profile](#create-profile)
  - [List Profiles](#list-profiles)
  - [Update Profile](#update-profile)
  - [Get Profile](#get-profile)
  - [Delete Profile](#delete-profile)
- [`VideoPlaylists`](#videoplaylists)
  - [Create Playlist](#create-playlist)
  - [Get all playlists](#get-all-playlists)
  - [Add asset to playlist](#add-asset-to-playlist)
  - [Remove asset from playlist](#remove-asset-from-playlist)
  - [Update Playlist](#update-playlist)
  - [`deleteId`](#deleteid)
  - [Get playlist assets](#get-playlist-assets)
  - [Arrange Videos In Playlist](#arrange-videos-in-playlist)
- [`WebhookApis`](#webhookapis)
  - [Create Webhook](#create-webhook)
  - [Update Webhook](#update-webhook)
  - [Delete Webhook](#delete-webhook)
- [`ImageSources`](#imagesources)
  - [Create Source](#create-source)
  - [List Sources](#list-sources)
  - [Update Source](#update-source)
  - [Delete Source](#delete-source)
  - [Purge Cache](#purge-cache)
  - [Image Analytics](#image-analytics)
  - [Get Source](#get-source)
- [`LiveStreamAssets`](#livestreamassets)
  - [Create Live Asset](#create-live-asset)
  - [Update Live Asset](#update-live-asset)
  - [Get Live Asset Status](#get-live-asset-status)
  - [Delete Live Asset](#delete-live-asset)
  - [Complete Live Stream](#complete-live-stream)
  - [Filter Live Assets](#filter-live-assets)
  - [`postVideoliveassetsId`](#postvideoliveassetsid)
  - [Upload Live Thumbnails](#upload-live-thumbnails)
  - [Get Live Asset Status History](#get-live-asset-status-history)
- [`VideoWorkspaces`](#videoworkspaces)
  - [List Workspaces](#list-workspaces)
  - [Create Workspace](#create-workspace)
  - [Update Workspace](#update-workspace)
  - [Get Workspace](#get-workspace)
  - [Delete Workspace](#delete-workspace)
- [`Folders`](#folders)
  - [Create Folder](#create-folder)
  - [List Folders](#list-folders)
  - [Get Folder](#get-folder)
  - [Update Folder](#update-folder)
  - [Delete Folder](#delete-folder)
  - [Remove Assets From Folder](#remove-assets-from-folder)
- [`ChannelViewers`](#channelviewers)
  - [Invite Channel Viewers](#invite-channel-viewers)
  - [Remove Channel Viewers](#remove-channel-viewers)
  - [Invite Channel Viewers via CSV](#invite-channel-viewers-via-csv)
- [`DataApi`](#dataapi)
  - [Chart Data](#chart-data)
  - [Aggregated Data](#aggregated-data)

## Setup

```ts
import GumletRestAPIs from '@gumlet/gumlet-rest';

const client = new GumletRestAPIs({
  sec0: process.env['SEC0'], // defaults to the SEC0 env var
});
```

## `VideoAssets`

### Create Asset

An asset refers to a media content/video that is processed, stored, and delivered through Gumlet. This endpoint creates an asset allowing users to ingest media content into the Gumlet system for processing and delivery.

| Direction | Type |
| --- | --- |
| Request | [`VideoAssetCreateParams`](./src/resources/video-assets.ts) |
| Response | [`VideoAssetCreateResponse`](./src/resources/video-assets.ts) |

```ts
const create = await client.videoAssets.create({
  'Request Example': {
    value: {
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
          start_time: '1',
          end_time: '90',
          text: 'some test',
          url: 'https://some-url.com',
          position_from_top: '11',
          position_from_right: '23',
          border_radius: '11',
          font_color: '#000001',
          background_color: '#ffffff',
        },
      ],
      folder: '697375fbfa2d1037283140e4',
    },
  },
});
```

### Create Asset Direct Upload

This endpoint creates a video asset allowing to upload of the video from the local file system and ingest media content into the Gumlet system for processing and delivery.Body Parameters are the same as the Create Asset Body Parameters except for the `input` parameter which this endpoint does not take.A successful response will be returned with `upload_url` field. You can make `PUT` request to that URL to upload video. To upload video using `upload_url` refer to [this](https://docs.gumlet.com/docs/direct-upload#2-use-the-url-to-upload-a-file).

| Direction | Type |
| --- | --- |
| Request | [`VideoAssetUploadParams`](./src/resources/video-assets.ts) |
| Response | [`VideoAssetUploadResponse`](./src/resources/video-assets.ts) |

```ts
const upload = await client.videoAssets.upload({
  'Request Example': {
    value: {
      title: 'Sports.',
      description: 'This video provides information about various sports.',
      format: 'MP4',
      tag: ['games', 'field'],
      profile_id: '646df1c9173a4a2fcac180b7',
      cluster_type: 'prod',
      input: 'https://file-examples.com/wp-content/storage/2017/04/file_example_MP4_480_1_5MG.mp4',
      playlist_id: '6597acd5ed6f26a9c5ca9633',
      metadata: { headermeta: 'metavalue' },
      call_to_actions: [
        {
          start_time: '1',
          end_time: '90',
          text: 'Buy here!!',
          url: 'https://some-buy-url-site.com',
          position_from_top: '11',
          position_from_right: '23',
          border_radius: '11',
          font_color: '#000001',
          background_color: '#ffffff',
        },
      ],
      folder: '697375fbfa2d1037283140e4',
      workspace_id: '646df1c9173a4a2fcac180b4',
    },
  },
});
```

### Asset Details

This endpoint retrieves the details of an asset that has previously been created.

| Direction | Type |
| --- | --- |
| Response | [`VideoAssetRetrieveStatusResponse`](./src/resources/video-assets.ts) |

```ts
const retrieveStatus = await client.videoAssets.retrieveStatus('assetId');
```

### Delete Asset

This endpoint removes an asset given its unique asset id. The asset will be removed from storage as well, associated URLs will be inaccessible.

```ts
await client.videoAssets.delete('assetId');
```

### Update Asset

This endpoint allows users to update video asset that has previously been created.

| Direction | Type |
| --- | --- |
| Request | [`VideoAssetUpdateParams`](./src/resources/video-assets.ts) |
| Response | [`VideoAssetUpdateResponse`](./src/resources/video-assets.ts) |

```ts
const update = await client.videoAssets.update({
  asset_id: '',
});
```

### Update thumbnail from video

Select frame from video to use as thumbnail

| Direction | Type |
| --- | --- |
| Request | [`VideoAssetSelectFromParams`](./src/resources/video-assets.ts) |
| Response | [`VideoAssetSelectFromResponse`](./src/resources/video-assets.ts) |

```ts
const string_ = await client.videoAssets.selectFrom('assetId', { frame_at_second: 2 });
```

### Update thumbnail via upload

Use any image file to use as thumbnail

```ts
await client.videoAssets.selectFromImageFile('assetId');
```

### Upload Subtitle

Upload your subtitled .srt file to your video asset.

| Direction | Type |
| --- | --- |
| Request | [`VideoAssetUpload2Params`](./src/resources/video-assets.ts) |

```ts
await client.videoAssets.upload2('assetId');
```

### Upload Subtitle Completion

| Direction | Type |
| --- | --- |
| Request | [`VideoAssetUploadSubtitleCompletionParams`](./src/resources/video-assets.ts) |
| Response | [`VideoAssetUploadSubtitleCompletionResponse`](./src/resources/video-assets.ts) |

```ts
const uploadSubtitleCompletion = await client.videoAssets.uploadSubtitleCompletion('assetId');
```

### Upload Audio

Upload your audio file to your video asset.

| Direction | Type |
| --- | --- |
| Request | [`VideoAssetUpload3Params`](./src/resources/video-assets.ts) |

```ts
await client.videoAssets.upload3('assetId');
```

### Upload Audio Completion

| Direction | Type |
| --- | --- |
| Request | [`VideoAssetUploadAudioCompletionParams`](./src/resources/video-assets.ts) |
| Response | [`VideoAssetUploadAudioCompletionResponse`](./src/resources/video-assets.ts) |

```ts
const uploadAudioCompletion = await client.videoAssets.uploadAudioCompletion('assetId');
```

### Create/Update Video Asset Chapters

This endpoint will create/update video asset chapters.

| Direction | Type |
| --- | --- |
| Request | [`VideoAssetCreateUpdateChapterParams`](./src/resources/video-assets.ts) |
| Response | [`VideoAssetCreateUpdateChapterResponse`](./src/resources/video-assets.ts) |

```ts
const createUpdateChapter = await client.videoAssets.createUpdateChapter('assetId', {
  chapters: [],
});
```

### `postVideoassetrecover`

| Direction | Type |
| --- | --- |
| Request | [`VideoAssetPostVideoassetrecoverParams`](./src/resources/video-assets.ts) |

```ts
await client.videoAssets.postVideoassetrecover({
  asset_id: '',
});
```

### List Assets

List folders and assets for a workspace in a single response. Use `parent_id` to browse a specific folder, or filters like `title`, `status`, and `playlist_id` to search assets.

| Direction | Type |
| --- | --- |
| Request | [`VideoAssetListWorkspaceContentParams`](./src/resources/video-assets.ts) |
| Response | [`VideoAssetListWorkspaceContentResponse`](./src/resources/video-assets.ts) |

```ts
const listWorkspaceContent = await client.videoAssets.listWorkspaceContent('workspaceId', {
  type: 'all',
  offset: 0,
  size: 20,
});
```

### List Assets

[Deprecated] This endpoint list assets in video workspace. You can also pass `status` and `tag` to filter assets.

| Direction | Type |
| --- | --- |
| Request | [`VideoAssetListParams`](./src/resources/video-assets.ts) |
| Response | [`VideoAssetListResponse`](./src/resources/video-assets.ts) |

```ts
const list = await client.videoAssets.list('workspaceId', {
  sortBy: 'createdAt',
  orderBy: 'desc',
});
```

## `VideoUsageAnalytics`

### Video Analytics

This endpoint gives usage analytics data of your videos. Ex - top assets, bandwidth consumption

| Direction | Type |
| --- | --- |
| Request | [`VideoUsageAnalyticCreateParams`](./src/resources/video-usage-analytics.ts) |
| Response | [`VideoUsageAnalyticCreateResponse`](./src/resources/video-usage-analytics.ts) |

```ts
const create = await client.videoUsageAnalytics.create({
  metrics: [],
  date_range: {},
  top_assets_count: '5',
  top_assets_page: '0',
});
```

### Streaming Duration

This endpoint lists top streamed assets in a video collection

| Direction | Type |
| --- | --- |
| Request | [`VideoUsageAnalyticStreamingDurationParams`](./src/resources/video-usage-analytics.ts) |
| Response | [`VideoUsageAnalyticStreamingDurationResponse`](./src/resources/video-usage-analytics.ts) |

```ts
const streamingDuration = await client.videoUsageAnalytics.streamingDuration({
  start_at: 'startAt',
  end_at: 'endAt',
  page_size: '1000',
});
```

## `MultipartUpload`

### Single Part

Use this endpoint to retrieve pre-signed upload URL for each part.

| Direction | Type |
| --- | --- |
| Request | [`MultipartUploadSignPartParams`](./src/resources/multipart-upload.ts) |
| Response | [`MultipartUploadSignPartResponse`](./src/resources/multipart-upload.ts) |

```ts
const signPart = await client.multipartUpload.signPart('partNumber', {
  asset_id: 'assetId',
});
```

### Complete Multipart Upload

Once you upload all parts to S3 bucket via pre-signed URL, use this endpoint to complete the multipart upload.

| Direction | Type |
| --- | --- |
| Request | [`MultipartUploadCompleteParams`](./src/resources/multipart-upload.ts) |
| Response | [`MultipartUploadCompleteResponse`](./src/resources/multipart-upload.ts) |

```ts
const complete = await client.multipartUpload.complete('assetId');
```

## `VideoProfiles`

### Create Profile

Gumlet provides the functionality of creating multiple video assets using the same set of parameters. A Video profile is a set of parameters that can be referenced/used while creating a video as a single parameter.

| Direction | Type |
| --- | --- |
| Request | [`VideoProfileCreateParams`](./src/resources/video-profiles.ts) |
| Response | [`VideoProfileCreateResponse`](./src/resources/video-profiles.ts) |

```ts
const create = await client.videoProfiles.create({
  name: 'Gumlet-Profile-1',
  format: 'ABR',
});
```

### List Profiles

This endpoint retrieves the details of all profiles that have previously been created.

| Direction | Type |
| --- | --- |
| Request | [`VideoProfileListParams`](./src/resources/video-profiles.ts) |
| Response | [`VideoProfileListResponse`](./src/resources/video-profiles.ts) |

```ts
const list = await client.videoProfiles.list();
```

### Update Profile

Update an existing profile. Settings provided in body parameters will only be updated in the existing profile.

| Direction | Type |
| --- | --- |
| Request | [`VideoProfileUpdateParams`](./src/resources/video-profiles.ts) |
| Response | [`VideoProfileUpdateResponse`](./src/resources/video-profiles.ts) |

```ts
const update = await client.videoProfiles.update('profileId', {
  profile_id: '',
  format: 'ABR',
});
```

### Get Profile

This endpoint retrieves the details of a video profile that has previously been created.

| Direction | Type |
| --- | --- |
| Response | [`VideoProfileRetrieveResponse`](./src/resources/video-profiles.ts) |

```ts
const retrieve = await client.videoProfiles.retrieve('profileId');
```

### Delete Profile

This endpoint removes a profile given its unique `profile_id`. The profile will be removed but video assets created using the profile will remain as it is.

| Direction | Type |
| --- | --- |
| Response | [`VideoProfileDeleteResponse`](./src/resources/video-profiles.ts) |

```ts
const delete_ = await client.videoProfiles.delete('profileId');
```

## `VideoPlaylists`

### Create Playlist

| Direction | Type |
| --- | --- |
| Request | [`VideoPlaylistCreateParams`](./src/resources/video-playlists.ts) |
| Response | [`VideoPlaylistCreateResponse`](./src/resources/video-playlists.ts) |

```ts
const create = await client.videoPlaylists.create({
  title: 'Playlist-Title',
  description: 'This is description for playlist.',
  collection_id: '{{video-source-id}}',
});
```

### Get all playlists

| Direction | Type |
| --- | --- |
| Request | [`VideoPlaylistListAllParams`](./src/resources/video-playlists.ts) |
| Response | [`VideoPlaylistListAllResponse`](./src/resources/video-playlists.ts) |

```ts
const listAll = await client.videoPlaylists.listAll();
```

### Add asset to playlist

| Direction | Type |
| --- | --- |
| Request | [`VideoPlaylistCreateAssetToParams`](./src/resources/video-playlists.ts) |
| Response | [`VideoPlaylistCreateAssetToResponse`](./src/resources/video-playlists.ts) |

```ts
const createAssetTo = await client.videoPlaylists.createAssetTo('playlistId', {
  asset_list: [
    { asset_id: '6508790283e4d60611846790' },
    { position: '1', asset_id: '650878f883e4d6061184677d' },
    { asset_id: '650878de83e4d6061184676a' },
    { position: '2', asset_id: '650878d883e4d60611846757' },
    { position: '3', asset_id: '65578dd87eebc22dcdd549a2' },
  ],
});
```

### Remove asset from playlist

| Direction | Type |
| --- | --- |
| Request | [`VideoPlaylistDeleteAssetFromParams`](./src/resources/video-playlists.ts) |
| Response | [`VideoPlaylistDeleteAssetFromResponse`](./src/resources/video-playlists.ts) |

```ts
const deleteAssetFrom = await client.videoPlaylists.deleteAssetFrom('playlistId', {
  delete_list: ['6508790783e4d606118467a3'],
});
```

### Update Playlist

| Direction | Type |
| --- | --- |
| Request | [`VideoPlaylistUpdateParams`](./src/resources/video-playlists.ts) |
| Response | [`VideoPlaylistUpdateResponse`](./src/resources/video-playlists.ts) |

```ts
const update = await client.videoPlaylists.update('playlistId');
```

### `deleteId`

```ts
await client.videoPlaylists.deleteID('playlistId');
```

### Get playlist assets

| Direction | Type |
| --- | --- |
| Request | [`VideoPlaylistListAssetsParams`](./src/resources/video-playlists.ts) |
| Response | [`VideoPlaylistListAssetsResponse`](./src/resources/video-playlists.ts) |

```ts
const listAssets = await client.videoPlaylists.listAssets('playlistId', {
  sort_order: 1,
  page_number: 1,
  page_size: '10',
});
```

### Arrange Videos In Playlist

Reorder videos inside a playlist either by moving a single asset to a position or by sorting the playlist by title or created date.

| Direction | Type |
| --- | --- |
| Request | [`VideoPlaylistReorderAssets2Params`](./src/resources/video-playlists.ts) |
| Response | [`VideoPlaylistReorderAssets2Response`](./src/resources/video-playlists.ts) |

```ts
const reorderAssets2 = await client.videoPlaylists.reorderAssets2('playlistId', {
  asset_id: '6e82bf783e88be000ab45ed2',
  page_number: 1,
  page_size: 10,
  asset_position: 0,
});
```

## `WebhookApis`

### Create Webhook

| Direction | Type |
| --- | --- |
| Request | [`WebhookAPICreateParams`](./src/resources/webhook-apis.ts) |
| Response | [`WebhookAPICreateResponse`](./src/resources/webhook-apis.ts) |

```ts
const create = await client.webhookAPIs.create({
  url: '',
  secret_token: '',
  triggers: [],
  sources: [],
});
```

### Update Webhook

| Direction | Type |
| --- | --- |
| Request | [`WebhookAPIUpdateParams`](./src/resources/webhook-apis.ts) |
| Response | [`WebhookAPIUpdateResponse`](./src/resources/webhook-apis.ts) |

```ts
const update = await client.webhookAPIs.update('webhookId');
```

### Delete Webhook

| Direction | Type |
| --- | --- |
| Response | [`WebhookAPIDeleteResponse`](./src/resources/webhook-apis.ts) |

```ts
const delete_ = await client.webhookAPIs.delete('webhookId');
```

## `ImageSources`

### Create Source

This endpoint allows users to create image source.

| Direction | Type |
| --- | --- |
| Request | [`ImageSourceCreateParams`](./src/resources/image-sources.ts) |
| Response | [`ImageSourceCreateResponse`](./src/resources/image-sources.ts) |

```ts
const create = await client.imageSources.create({
  names: 'zoom-collection',
  type: 'zoom',
  zoom: { secret: 'yourSecret' },
});
```

### List Sources

This endpoint list image sources which are assigned to the user or token.

| Direction | Type |
| --- | --- |
| Response | [`ImageSourceListResponse`](./src/resources/image-sources.ts) |

```ts
const list = await client.imageSources.list();
```

### Update Source

This endpoint allows users to update image source that has previously been created.

| Direction | Type |
| --- | --- |
| Request | [`ImageSourceUpdateParams`](./src/resources/image-sources.ts) |
| Response | [`ImageSourceUpdateResponse`](./src/resources/image-sources.ts) |

```ts
const update = await client.imageSources.update('imageSourceId');
```

### Delete Source

This endpoint removes a image source. All image delivery using this subdomain will be stopped.

| Direction | Type |
| --- | --- |
| Response | [`ImageSourceDeleteResponse`](./src/resources/image-sources.ts) |

```ts
const delete_ = await client.imageSources.delete('imageSourceId');
```

### Purge Cache

You can purge cache for any image by using our cache purge API.

| Direction | Type |
| --- | --- |
| Request | [`ImageSourcePurgeCacheParams`](./src/resources/image-sources.ts) |

```ts
await client.imageSources.purgeCache('subdomain');
```

### Image Analytics

This endpoint help you get analytics data.

| Direction | Type |
| --- | --- |
| Request | [`ImageSourceAnalyticsParams`](./src/resources/image-sources.ts) |
| Response | [`ImageSourceAnalyticsResponse`](./src/resources/image-sources.ts) |

```ts
const analytics = await client.imageSources.analytics({
  metrics: [],
  date_range: {},
});
```

### Get Source

```ts
await client.imageSources.retrieve('sourceId');
```

## `LiveStreamAssets`

### Create Live Asset

A live asset refers to a media content/video that is live-streamed through Gumlet. This endpoint creates a live streaming asset allowing users to live stream a video that will be pushed to Gumlet.

| Direction | Type |
| --- | --- |
| Request | [`LiveStreamAssetCreateParams`](./src/resources/live-stream-assets.ts) |
| Response | [`LiveStreamAssetCreateResponse`](./src/resources/live-stream-assets.ts) |

```ts
const create = await client.liveStreamAssets.create({
  live_source_id: '',
  resolution: '',
});
```

### Update Live Asset

A live asset refers to a media content/video that is live-streamed through Gumlet. This endpoint allows user to update a live streaming asset.

| Direction | Type |
| --- | --- |
| Request | [`LiveStreamAssetUpdateParams`](./src/resources/live-stream-assets.ts) |
| Response | [`LiveStreamAssetUpdateResponse`](./src/resources/live-stream-assets.ts) |

```ts
const update = await client.liveStreamAssets.update({
  live_asset_id: '',
});
```

### Get Live Asset Status

This endpoint retrieves the details of a live video asset that has previously been created.

| Direction | Type |
| --- | --- |
| Response | [`LiveStreamAssetRetrieveStatusResponse`](./src/resources/live-stream-assets.ts) |

```ts
const retrieveStatus = await client.liveStreamAssets.retrieveStatus('liveAssetId');
```

### Delete Live Asset

This endpoint removes a live asset given its unique live asset id. The live asset will be removed from storage as well, associated URLs will be inaccessible.

| Direction | Type |
| --- | --- |
| Response | [`LiveStreamAssetDeleteResponse`](./src/resources/live-stream-assets.ts) |

```ts
const delete_ = await client.liveStreamAssets.delete('liveAssetId');
```

### Complete Live Stream

This endpoint allows marking live assets complete. Once the live asset is marked complete, it can no longer be used to ingest the live stream on Gumlet.

| Direction | Type |
| --- | --- |
| Response | [`LiveStreamAssetCompleteResponse`](./src/resources/live-stream-assets.ts) |

```ts
const complete = await client.liveStreamAssets.complete('liveAssetId');
```

### Filter Live Assets

This endpoint lists live assets on the basis of `status` for the given `live_source_id`.

| Direction | Type |
| --- | --- |
| Request | [`LiveStreamAssetFilterParams`](./src/resources/live-stream-assets.ts) |
| Response | [`LiveStreamAssetFilterResponse`](./src/resources/live-stream-assets.ts) |

```ts
const filter = await client.liveStreamAssets.filter('liveSourceId');
```

### `postVideoliveassetsId`

```ts
await client.liveStreamAssets.postVideoliveassetsID('liveAssetId');
```

### Upload Live Thumbnails

Generate presigned upload URLs for live stream thumbnails. Supported thumbnail states are `preparing`, `disconnected`, and `end`.

| Direction | Type |
| --- | --- |
| Request | [`LiveStreamAssetUploadParams`](./src/resources/live-stream-assets.ts) |
| Response | [`LiveStreamAssetUploadResponse`](./src/resources/live-stream-assets.ts) |

```ts
const upload = await client.liveStreamAssets.upload({
  live_asset_id: '68c406b147f9ad0c0d584ce2',
  statuses: ['preparing', 'disconnected'],
});
```

### Get Live Asset Status History

This endpoint retrieves the history of a live video asset that has previously been created.

| Direction | Type |
| --- | --- |
| Response | [`LiveStreamAssetListStatusCopyResponse`](./src/resources/live-stream-assets.ts) |

```ts
const listStatusCopy = await client.liveStreamAssets.listStatusCopy('liveAssetId');
```

## `VideoWorkspaces`

### List Workspaces

This endpoint list video workspace which are assigned to the user or token.

| Direction | Type |
| --- | --- |
| Request | [`VideoWorkspaceListParams`](./src/resources/video-workspaces.ts) |
| Response | [`VideoWorkspaceListResponse`](./src/resources/video-workspaces.ts) |

```ts
const list = await client.videoWorkspaces.list({
  offset: '0',
  size: '10',
});
```

### Create Workspace

Video workspaces are top-level entities in Gumlet. You can use them to organize videos for different teams/departments or use cases.

| Direction | Type |
| --- | --- |
| Request | [`VideoWorkspaceCreateParams`](./src/resources/video-workspaces.ts) |
| Response | [`VideoWorkspaceCreateResponse`](./src/resources/video-workspaces.ts) |

```ts
const create = await client.videoWorkspaces.create({
  names: 'zoom-workspace',
  type: 'zoom',
  zoom: { secret: 'yourSecret' },
});
```

### Update Workspace

This endpoint allows users to update video workspace that has previously been created.

| Direction | Type |
| --- | --- |
| Request | [`VideoWorkspaceUpdateParams`](./src/resources/video-workspaces.ts) |
| Response | [`VideoWorkspaceUpdateResponse`](./src/resources/video-workspaces.ts) |

```ts
const update = await client.videoWorkspaces.update('workspaceId');
```

### Get Workspace

This endpoint get all the data of video workspace that has previously been created.

| Direction | Type |
| --- | --- |
| Response | [`VideoWorkspaceRetrieveResponse`](./src/resources/video-workspaces.ts) |

```ts
const retrieve = await client.videoWorkspaces.retrieve('workspaceId');
```

### Delete Workspace

This endpoint removes a video workspace given its unique asset id. All the asset in workspace will be removed from storage as well, associated URLs will be inaccessible.

| Direction | Type |
| --- | --- |
| Response | [`VideoWorkspaceDeleteResponse`](./src/resources/video-workspaces.ts) |

```ts
const delete_ = await client.videoWorkspaces.delete('workspaceId');
```

## `Folders`

### Create Folder

Create a folder inside a video workspace. Optionally provide `parent_id` to create a nested folder.

| Direction | Type |
| --- | --- |
| Request | [`FolderCreate1Params`](./src/resources/folders.ts) |
| Response | [`FolderCreate1Response`](./src/resources/folders.ts) |

```ts
const create1 = await client.folders.create1('workspaceId', { name: 'Course Assets', parent_id: null });
```

### List Folders

List folders for a video workspace. Use `parent_id` to list only folders inside a specific parent folder.

| Direction | Type |
| --- | --- |
| Request | [`FolderListParams`](./src/resources/folders.ts) |
| Response | [`FolderListResponse`](./src/resources/folders.ts) |

```ts
const list = await client.folders.list('workspaceId');
```

### Get Folder

Get a single folder by id.

| Direction | Type |
| --- | --- |
| Request | [`FolderRetrieveParams`](./src/resources/folders.ts) |
| Response | [`FolderRetrieveResponse`](./src/resources/folders.ts) |

```ts
const retrieve = await client.folders.retrieve('folderId', {
  workspace_id: 'workspaceId',
});
```

### Update Folder

Rename a folder, move it to another parent folder, or move assets into the folder by sending `asset_ids`.

| Direction | Type |
| --- | --- |
| Request | [`FolderUpdateParams`](./src/resources/folders.ts) |
| Response | [`FolderUpdateResponse`](./src/resources/folders.ts) |

```ts
const update = await client.folders.update('folderId', {
  workspace_id: 'workspaceId',
});
```

### Delete Folder

Delete a folder. Descendant folders and assets inside them are deleted by the backend workflow.

| Direction | Type |
| --- | --- |
| Request | [`FolderDeleteParams`](./src/resources/folders.ts) |
| Response | [`FolderDeleteResponse`](./src/resources/folders.ts) |

```ts
const delete_ = await client.folders.delete('folderId', {
  workspace_id: 'workspaceId',
});
```

### Remove Assets From Folder

Remove one or more assets from their current folder assignment inside the workspace.

| Direction | Type |
| --- | --- |
| Request | [`FolderDeleteAssetsFromParams`](./src/resources/folders.ts) |
| Response | [`FolderDeleteAssetsFromResponse`](./src/resources/folders.ts) |

```ts
const deleteAssetsFrom = await client.folders.deleteAssetsFrom('workspaceId', {
  asset_ids: ['67e4f2b4403562dbea654301', '67e4f2bb403562dbea654302'],
});
```

## `ChannelViewers`

### Invite Channel Viewers

Invite one or more viewers to a members-only channel.

| Direction | Type |
| --- | --- |
| Request | [`ChannelViewerInviteParams`](./src/resources/channel-viewers.ts) |
| Response | [`ChannelViewerInviteResponse`](./src/resources/channel-viewers.ts) |

```ts
const invite = await client.channelViewers.invite('videoWorkspaceId', {
  users: [
    { email: 'test@gumlet.com', name: 'Test User-0' },
    { email: 'test+1@gumlet.com', name: 'Test User-1' },
    { email: 'test+2@gumlet.com', name: 'Test User-2' },
  ],
});
```

### Remove Channel Viewers

Remove one or more viewers from a channel by email address.

| Direction | Type |
| --- | --- |
| Request | [`ChannelViewerDeleteParams`](./src/resources/channel-viewers.ts) |
| Response | [`ChannelViewerDeleteResponse`](./src/resources/channel-viewers.ts) |

```ts
const delete_ = await client.channelViewers.delete('videoWorkspaceId', {
  emails: ['test@gumlet.com', 'test+2@gumlet.com'],
});
```

### Invite Channel Viewers via CSV

Invite viewers to a channel by uploading a CSV file.

| Direction | Type |
| --- | --- |
| Request | [`ChannelViewerInviteCsvParams`](./src/resources/channel-viewers.ts) |
| Response | [`ChannelViewerInviteCsvResponse`](./src/resources/channel-viewers.ts) |

```ts
const inviteCsv = await client.channelViewers.inviteCsv('videoWorkspaceId', { viewers_csv: 'viewers.csv' });
```

## `DataApi`

### Chart Data

This endpoint retrieves metrics data to plot the chart.

| Direction | Type |
| --- | --- |
| Request | [`DataAPIInsightsChartParams`](./src/resources/data-api.ts) |
| Response | [`DataAPIInsightsChartResponse`](./src/resources/data-api.ts) |

```ts
const insightsChart = await client.dataAPI.insightsChart({
  metrics: [],
  workspace_id: '',
  date_range: {
    start_at: '2024-01-01',
    end_at: '2024-01-01',
  },
  group_by: 'daily',
});
```

### Aggregated Data

This endpoint retrieves aggregated data of the given metrics.

| Direction | Type |
| --- | --- |
| Request | [`DataAPIInsightsAggregatedParams`](./src/resources/data-api.ts) |
| Response | [`DataAPIInsightsAggregatedResponse`](./src/resources/data-api.ts) |

```ts
const insightsAggregated = await client.dataAPI.insightsAggregated({
  aggregate: [],
  workspace_id: '',
  timeframe: {},
});
```
