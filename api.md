# Gumlet TypeScript API

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
  - [Create/Update Video Asset Chapters](#createupdate-video-asset-chapters)
  - [Recover Deleted Asset](#recover-deleted-asset)
  - [List Assets](#list-assets)
  - [List Assets](#list-assets-1)
- [`SubtitleUpload`](#subtitleupload)
  - [Upload Subtitles](#upload-subtitles)
  - [Complete Subtitle Upload](#complete-subtitle-upload)
- [`AudioUpload`](#audioupload)
  - [Add Audio](#add-audio)
  - [Complete Audio Upload](#complete-audio-upload)
- [`VideoUsageAnalytics`](#videousageanalytics)
  - [Video Usage Analytics](#video-usage-analytics)
  - [Top Streamed Assets](#top-streamed-assets)
- [`MultipartUpload`](#multipartupload)
  - [Get Part Upload URL](#get-part-upload-url)
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
  - [`delete`](#delete)
  - [Get playlist assets](#get-playlist-assets)
  - [Arrange Videos In Playlist](#arrange-videos-in-playlist)
- [`WebhookApis`](#webhookapis)
  - [Create Webhook](#create-webhook)
  - [Update Webhook](#update-webhook)
  - [Delete Webhook](#delete-webhook)
- [`ImageSources`](#imagesources)
  - [Create Source](#create-source)
  - [List Sources](#list-sources)
  - [Get Image Source](#get-image-source)
  - [Update Source](#update-source)
  - [Delete Source](#delete-source)
  - [Purge Cache](#purge-cache)
  - [Purge Image Cache](#purge-image-cache)
- [`ImageUsageAnalytics`](#imageusageanalytics)
  - [Image Usage Analytics](#image-usage-analytics)
- [`LiveStreamAssets`](#livestreamassets)
  - [Create Live Asset](#create-live-asset)
  - [Update Live Asset](#update-live-asset)
  - [Get Live Asset Status](#get-live-asset-status)
  - [Delete Live Asset](#delete-live-asset)
  - [Complete Live Stream](#complete-live-stream)
  - [Filter Live Assets](#filter-live-assets)
  - [`start`](#start)
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
  - [Viewer Analytics](#viewer-analytics)
  - [Aggregated Data](#aggregated-data)
- [`OrganizationData`](#organizationdata)
  - [Get Organization Details](#get-organization-details)
- [`UserData`](#userdata)
  - [Get User](#get-user)
- [`AuditLogs`](#auditlogs)
  - [Fetch Audit Logs](#fetch-audit-logs)

## Setup

```ts
import Gumlet from '@gumlet/nodejs-sdk';

const client = new Gumlet({
  apiKey: process.env['API_KEY'], // defaults to the API_KEY env var
});
```

## `VideoAssets`

Upload, manage, and retrieve video assets, including thumbnails, subtitles, audio tracks, and chapters.

### Create Asset

An asset refers to a media content/video that is processed, stored, and delivered through Gumlet. This endpoint creates an asset allowing users to ingest media content into the Gumlet system for processing and delivery.

| Direction | Type |
| --- | --- |
| Request | [`VideoAssetCreateParams`](./src/resources/video-assets.ts) |
| Response | [`VideoAssetCreateResponse`](./src/resources/video-assets.ts) |

```ts
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
```

### Create Asset Direct Upload

This endpoint creates a video asset allowing to upload of the video from the local file system and ingest media content into the Gumlet system for processing and delivery.Body Parameters are the same as the Create Asset Body Parameters except for the `input` parameter which this endpoint does not take.A successful response will be returned with `upload_url` field. You can make `PUT` request to that URL to upload video. To upload video using `upload_url` refer to [this](https://docs.gumlet.com/docs/direct-upload#2-use-the-url-to-upload-a-file).

| Direction | Type |
| --- | --- |
| Request | [`VideoAssetUploadParams`](./src/resources/video-assets.ts) |
| Response | [`VideoAssetUploadResponse`](./src/resources/video-assets.ts) |

```ts
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
```

### Asset Details

This endpoint retrieves the details of an asset that has previously been created.

| Direction | Type |
| --- | --- |
| Response | [`VideoAssetRetrieveDetailsResponse`](./src/resources/video-assets.ts) |

```ts
const videoAsset = await client.videoAssets.retrieveDetails('assetId');
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
const videoAsset = await client.videoAssets.update({ asset_id: '<YOUR_ASSET_ID>', title: 'Updated Title' });
```

### Update thumbnail from video

Select frame from video to use as thumbnail.

| Direction | Type |
| --- | --- |
| Request | [`VideoAssetThumbnailSelectParams`](./src/resources/video-assets.ts) |
| Response | [`VideoAssetThumbnailSelectResponse`](./src/resources/video-assets.ts) |

```ts
const videoAsset = await client.videoAssets.thumbnailSelect('assetId', { frame_at_second: 2 });
```

### Update thumbnail via upload

Use any image file to use as thumbnail. Once you use the API, you will get `upload_url` in the response, and that can be used to upload the image file.

Here is the sample curl request.

```bash
curl --location --request PUT '<upload_url>' \
--data '<YOUR_FILE_PATH>'
```

| Direction | Type |
| --- | --- |
| Response | [`VideoAssetThumbnailUploadResponse`](./src/resources/video-assets.ts) |

```ts
const videoAsset = await client.videoAssets.thumbnailUpload('assetId');
```

### Create/Update Video Asset Chapters

This endpoint will create/update video asset chapters.

| Direction | Type |
| --- | --- |
| Request | [`VideoAssetCreateUpdateChapterParams`](./src/resources/video-assets.ts) |
| Response | [`VideoAssetCreateUpdateChapterResponse`](./src/resources/video-assets.ts) |

```ts
const videoAsset = await client.videoAssets.createUpdateChapter('assetId', {
  chapters: [
    { label: 'Chapter 1', startTime: 0 },
    { label: 'Chapter 2', startTime: 10 },
  ],
});
```

### Recover Deleted Asset

Recovers a deleted asset from the recycle bin.

| Direction | Type |
| --- | --- |
| Request | [`VideoAssetRecoverParams`](./src/resources/video-assets.ts) |

```ts
await client.videoAssets.recover({
  asset_id: '',
});
```

### List Assets

List folders and assets for a workspace in a single response. Use `parent_id` to browse a specific folder, or filters like `title`, `status`, and `playlist_id` to search assets.

| Direction | Type |
| --- | --- |
| Request | [`VideoAssetListParams`](./src/resources/video-assets.ts) |
| Response | [`VideoAssetListResponse`](./src/resources/video-assets.ts) |

```ts
const videoAsset = await client.videoAssets.list('workspaceId', {
  type: 'all',
  offset: 0,
  size: 20,
});
```

### List Assets

[Deprecated] This endpoint list assets in video workspace. You can also pass `status` and `tag` to filter assets.

| Direction | Type |
| --- | --- |
| Request | [`VideoAssetListDeprecatedParams`](./src/resources/video-assets.ts) |
| Response | [`VideoAssetListDeprecatedResponse`](./src/resources/video-assets.ts) |

```ts
const videoAsset = await client.videoAssets.listDeprecated('workspaceId', {
  sortBy: 'created_at',
  orderBy: 'desc',
});
```

## `SubtitleUpload`

Add subtitles to an existing asset.

### Upload Subtitles

Upload `.srt` or `.vtt`  file to the video asset. The response of this API call gives `upload_url` for each language specified. You need to send a `PUT` request of the subtitle files to those URLs. Once that's done, you need to call the subtitle upload complete API. Only after that, Gumlet will add subtitles to asset.

| Direction | Type |
| --- | --- |
| Request | [`SubtitleUploadUploadParams`](./src/resources/subtitle-upload.ts) |
| Response | [`SubtitleUploadUploadResponse`](./src/resources/subtitle-upload.ts) |

```ts
const subtitleUpload = await client.subtitleUpload.upload('assetId');
```

### Complete Subtitle Upload

This API must be called after adding subtitles; the add subtitle call gives you URLs to upload, and you complete a `PUT` request to those URLs. 
Once that is done, calling this initiates the process to actually add the subtitle to the video.

| Direction | Type |
| --- | --- |
| Request | [`SubtitleUploadCompleteParams`](./src/resources/subtitle-upload.ts) |
| Response | [`SubtitleUploadCompleteResponse`](./src/resources/subtitle-upload.ts) |

```ts
const subtitleUpload = await client.subtitleUpload.complete('assetId');
```

## `AudioUpload`

Add additional audio tracks to an existing asset.

### Add Audio

Add any audio file to the video asset. 
The response of this API call gives `upload_url` for each language specified. You need to send a `PUT` request of the audio files to those URLs. Once that's done, you need to call the audio upload complete API. Only after that will Gumlet add audio to the asset.

| Direction | Type |
| --- | --- |
| Request | [`AudioUploadUploadParams`](./src/resources/audio-upload.ts) |
| Response | [`AudioUploadUploadResponse`](./src/resources/audio-upload.ts) |

```ts
const audioUpload = await client.audioUpload.upload('assetId');
```

### Complete Audio Upload

This API must be called after adding audio(s); The add audio call gives you URLs to upload, and you complete a `PUT` request to those URLs. 
Once that is done, calling this initiates the process to actually add the subtitle to the video.

| Direction | Type |
| --- | --- |
| Request | [`AudioUploadCompleteParams`](./src/resources/audio-upload.ts) |
| Response | [`AudioUploadCompleteResponse`](./src/resources/audio-upload.ts) |

```ts
const audioUpload = await client.audioUpload.complete('assetId');
```

## `VideoUsageAnalytics`

Query video analytics and streaming duration usage data.

### Video Usage Analytics

This endpoint gives usage analytics data of your videos. Ex - top assets, bandwidth consumption

| Direction | Type |
| --- | --- |
| Request | [`VideoUsageAnalyticRetrieveParams`](./src/resources/video-usage-analytics.ts) |
| Response | [`VideoUsageAnalyticRetrieveResponse`](./src/resources/video-usage-analytics.ts) |

```ts
const videoUsageAnalytic = await client.videoUsageAnalytics.retrieve({
  metrics: ['bandwidth_consumption', 'asset_duration', 'storage_unit', 'top_assets', 'drm_requests'],
  date_range: { start_at: '2026-08-01', end_at: '2026-08-20' },
  group_by: 'daily',
});
```

### Top Streamed Assets

This endpoint lists top streamed assets in a video collection

| Direction | Type |
| --- | --- |
| Request | [`VideoUsageAnalyticTopAssetsParams`](./src/resources/video-usage-analytics.ts) |
| Response | [`VideoUsageAnalyticTopAssetsResponse`](./src/resources/video-usage-analytics.ts) |

```ts
const videoUsageAnalytic = await client.videoUsageAnalytics.topAssets({
  start_at: '2026-06-21',
  end_at: '2026-06-30',
  page: '1',
  page_size: '1000',
});
```

## `MultipartUpload`

Upload large video files in parts and complete the multipart upload.

### Get Part Upload URL

Use this endpoint to retrieve a pre-signed upload URL for the given part number.

| Direction | Type |
| --- | --- |
| Request | [`MultipartUploadRetrievePartURLParams`](./src/resources/multipart-upload.ts) |
| Response | [`MultipartUploadRetrievePartURLResponse`](./src/resources/multipart-upload.ts) |

```ts
const multipartUpload = await client.multipartUpload.retrievePartURL('partNumber', {
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
const multipartUpload = await client.multipartUpload.complete('assetId');
```

## `VideoProfiles`

Create and manage encoding/output profiles for video assets.

### Create Profile

Gumlet provides the functionality of creating multiple video assets using the same set of parameters. A Video profile is a set of parameters that can be referenced/used while creating a video as a single parameter.

| Direction | Type |
| --- | --- |
| Request | [`VideoProfileCreateParams`](./src/resources/video-profiles.ts) |
| Response | [`VideoProfileCreateResponse`](./src/resources/video-profiles.ts) |

```ts
const videoProfile = await client.videoProfiles.create({
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
const videoProfile = await client.videoProfiles.list();
```

### Update Profile

Update an existing profile. Settings provided in body parameters will only be updated in the existing profile.

| Direction | Type |
| --- | --- |
| Request | [`VideoProfileUpdateParams`](./src/resources/video-profiles.ts) |
| Response | [`VideoProfileUpdateResponse`](./src/resources/video-profiles.ts) |

```ts
const videoProfile = await client.videoProfiles.update('profileId', {
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
const videoProfile = await client.videoProfiles.retrieve('profileId');
```

### Delete Profile

This endpoint removes a profile given its unique `profile_id`. The profile will be removed but video assets created using the profile will remain as it is.

| Direction | Type |
| --- | --- |
| Response | [`VideoProfileDeleteResponse`](./src/resources/video-profiles.ts) |

```ts
const videoProfile = await client.videoProfiles.delete('profileId');
```

## `VideoPlaylists`

Create and manage playlists, and control which assets belong to them.

### Create Playlist

Create new playlist inside video wprkspace

| Direction | Type |
| --- | --- |
| Request | [`VideoPlaylistCreateParams`](./src/resources/video-playlists.ts) |
| Response | [`VideoPlaylistCreateResponse`](./src/resources/video-playlists.ts) |

```ts
const videoPlaylist = await client.videoPlaylists.create({
  title: 'Playlist-Title',
  description: 'This is description for playlist.',
  collection_id: '{{video-source-id}}',
});
```

### Get all playlists

Get all playlists for given workspace

| Direction | Type |
| --- | --- |
| Request | [`VideoPlaylistListAllParams`](./src/resources/video-playlists.ts) |
| Response | [`VideoPlaylistListAllResponse`](./src/resources/video-playlists.ts) |

```ts
const videoPlaylist = await client.videoPlaylists.listAll();
```

### Add asset to playlist

This operation adds a single asset or a list of assets to a playlist.

| Direction | Type |
| --- | --- |
| Request | [`VideoPlaylistCreateAssetParams`](./src/resources/video-playlists.ts) |
| Response | [`VideoPlaylistCreateAssetResponse`](./src/resources/video-playlists.ts) |

```ts
const videoPlaylist = await client.videoPlaylists.createAsset('playlistId', {
  asset_list: [
    { asset_id: '6508790283e4d60611846790' },
    { position: 1, asset_id: '650878f883e4d6061184677d' },
    { asset_id: '650878de83e4d6061184676a' },
    { position: 2, asset_id: '650878d883e4d60611846757' },
    { position: 3, asset_id: '65578dd87eebc22dcdd549a2' },
  ],
});
```

### Remove asset from playlist

Removed an asset or list of assets from a given playlist.

| Direction | Type |
| --- | --- |
| Request | [`VideoPlaylistDeleteAssetParams`](./src/resources/video-playlists.ts) |
| Response | [`VideoPlaylistDeleteAssetResponse`](./src/resources/video-playlists.ts) |

```ts
const videoPlaylist = await client.videoPlaylists.deleteAsset('playlistId', {
  delete_list: ['6508790783e4d606118467a3'],
});
```

### Update Playlist

This endpoint allows you to update playlist name, channel visibility, or playlist order on a channel page.

| Direction | Type |
| --- | --- |
| Request | [`VideoPlaylistUpdateParams`](./src/resources/video-playlists.ts) |
| Response | [`VideoPlaylistUpdateResponse`](./src/resources/video-playlists.ts) |

```ts
const videoPlaylist = await client.videoPlaylists.update('playlistId');
```

### `delete`

Deletes this playlist.

```ts
await client.videoPlaylists.delete('playlistId');
```

### Get playlist assets

Get a list of all assets inside playlist. You can choose in which order are assets returned.

| Direction | Type |
| --- | --- |
| Request | [`VideoPlaylistListAssetsParams`](./src/resources/video-playlists.ts) |
| Response | [`VideoPlaylistListAssetsResponse`](./src/resources/video-playlists.ts) |

```ts
const videoPlaylist = await client.videoPlaylists.listAssets('playlistId', {
  sort_order: 1,
  page_number: 1,
  page_size: '10',
});
```

### Arrange Videos In Playlist

Reorder videos inside a playlist either by moving a single asset to a position or by sorting the playlist by title or created date.

| Direction | Type |
| --- | --- |
| Request | [`VideoPlaylistReorderAssetParams`](./src/resources/video-playlists.ts) |
| Response | [`VideoPlaylistReorderAssetResponse`](./src/resources/video-playlists.ts) |

```ts
const videoPlaylist = await client.videoPlaylists.reorderAsset('playlistId', {
  asset_id: '6e82bf783e88be000ab45ed2',
  page_number: 1,
  page_size: 10,
  asset_position: 0,
});
```

## `WebhookApis`

Configure webhooks for account and asset events.

### Create Webhook

Creates a new webhook listener.

| Direction | Type |
| --- | --- |
| Request | [`WebhookAPICreateParams`](./src/resources/webhook-apis.ts) |
| Response | [`WebhookAPICreateResponse`](./src/resources/webhook-apis.ts) |

```ts
const webhookAPI = await client.webhookAPIs.create({
  url: '',
  secret_token: '',
  triggers: [],
  sources: [],
});
```

### Update Webhook

Update a webhook listener.

| Direction | Type |
| --- | --- |
| Request | [`WebhookAPIUpdateParams`](./src/resources/webhook-apis.ts) |
| Response | [`WebhookAPIUpdateResponse`](./src/resources/webhook-apis.ts) |

```ts
const webhookAPI = await client.webhookAPIs.update('webhookId');
```

### Delete Webhook

Delete webhook listener endpoint.

| Direction | Type |
| --- | --- |
| Response | [`WebhookAPIDeleteResponse`](./src/resources/webhook-apis.ts) |

```ts
const webhookAPI = await client.webhookAPIs.delete('webhookId');
```

## `ImageSources`

Manage image sources, view image analytics, and purge the image cache.

### Create Source

This endpoint allows users to create image source.

| Direction | Type |
| --- | --- |
| Request | [`ImageSourceCreateParams`](./src/resources/image-sources.ts) |
| Response | [`ImageSourceCreateResponse`](./src/resources/image-sources.ts) |

```ts
const imageSource = await client.imageSources.create({
  type: 'webfolder',
  webfolder: { base_url: 'https://www.google.com' },
  namespace: 'google-demo',
});
```

### List Sources

This endpoint list image sources which are assigned to the user or token.

| Direction | Type |
| --- | --- |
| Request | [`ImageSourceListParams`](./src/resources/image-sources.ts) |
| Response | [`ImageSourceListResponse`](./src/resources/image-sources.ts) |

```ts
const imageSource = await client.imageSources.list({
  offset: 0,
  size: 20,
});
```

### Get Image Source

Get all details about image source.

| Direction | Type |
| --- | --- |
| Response | [`ImageSourceRetrieveResponse`](./src/resources/image-sources.ts) |

```ts
const imageSource = await client.imageSources.retrieve('imageSourceId');
```

### Update Source

This endpoint allows users to update image source that has previously been created.

| Direction | Type |
| --- | --- |
| Request | [`ImageSourceUpdateParams`](./src/resources/image-sources.ts) |
| Response | [`ImageSourceUpdateResponse`](./src/resources/image-sources.ts) |

```ts
const imageSource = await client.imageSources.update('imageSourceId');
```

### Delete Source

This endpoint removes a image source. All image delivery using this subdomain will be stopped.

| Direction | Type |
| --- | --- |
| Response | [`ImageSourceDeleteResponse`](./src/resources/image-sources.ts) |

```ts
const imageSource = await client.imageSources.delete('imageSourceId');
```

### Purge Cache

You can purge cache for any image by using our cache purge API.

| Direction | Type |
| --- | --- |
| Request | [`ImageSourcePurgeCacheParams`](./src/resources/image-sources.ts) |
| Response | [`ImageSourcePurgeCacheResponse`](./src/resources/image-sources.ts) |

```ts
const imageSource = await client.imageSources.purgeCache('subdomain');
```

### Purge Image Cache

You can purge the cache for any image path by using this cache purge API.

| Direction | Type |
| --- | --- |
| Request | [`ImageSourcePurgeParams`](./src/resources/image-sources.ts) |
| Response | [`ImageSourcePurgeResponse`](./src/resources/image-sources.ts) |

```ts
const imageSource = await client.imageSources.purge('sourceId', { paths: ['image.jpeg', 'image2.png'] });
```

## `ImageUsageAnalytics`

Query aggregated and chart-ready image usage analytics data.

### Image Usage Analytics

This endpoint helps you get image analytics data like bandwidth consumption, request count, CDN hit ratio, etc.

| Direction | Type |
| --- | --- |
| Request | [`ImageUsageAnalyticRetrieveParams`](./src/resources/image-usage-analytics.ts) |
| Response | [`ImageUsageAnalyticRetrieveResponse`](./src/resources/image-usage-analytics.ts) |

```ts
const imageUsageAnalytic = await client.imageUsageAnalytics.retrieve({
  metrics: [],
  date_range: {},
  group_by: 'daily',
});
```

## `LiveStreamAssets`

Create, control, and monitor live stream assets.

### Create Live Asset

A live asset refers to a media content/video that is live-streamed through Gumlet. This endpoint creates a live streaming asset allowing users to live stream a video that will be pushed to Gumlet.

| Direction | Type |
| --- | --- |
| Request | [`LiveStreamAssetCreateParams`](./src/resources/live-stream-assets.ts) |
| Response | [`LiveStreamAssetCreateResponse`](./src/resources/live-stream-assets.ts) |

```ts
const liveStreamAsset = await client.liveStreamAssets.create({
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
const liveStreamAsset = await client.liveStreamAssets.update({
  live_asset_id: '',
});
```

### Get Live Asset Status

This endpoint retrieves the details of a live video asset that has previously been created.

| Direction | Type |
| --- | --- |
| Response | [`LiveStreamAssetRetrieveStatusResponse`](./src/resources/live-stream-assets.ts) |

```ts
const liveStreamAsset = await client.liveStreamAssets.retrieveStatus('liveAssetId');
```

### Delete Live Asset

This endpoint removes a live asset given its unique live asset id. The live asset will be removed from storage as well, associated URLs will be inaccessible.

| Direction | Type |
| --- | --- |
| Response | [`LiveStreamAssetDeleteResponse`](./src/resources/live-stream-assets.ts) |

```ts
const liveStreamAsset = await client.liveStreamAssets.delete('liveAssetId');
```

### Complete Live Stream

This endpoint allows marking live assets complete. Once the live asset is marked complete, it can no longer be used to ingest the live stream on Gumlet.

| Direction | Type |
| --- | --- |
| Response | [`LiveStreamAssetCompleteResponse`](./src/resources/live-stream-assets.ts) |

```ts
const liveStreamAsset = await client.liveStreamAssets.complete('liveAssetId');
```

### Filter Live Assets

This endpoint lists live assets on the basis of `status` for the given `live_source_id`.

| Direction | Type |
| --- | --- |
| Request | [`LiveStreamAssetFilterParams`](./src/resources/live-stream-assets.ts) |
| Response | [`LiveStreamAssetFilterResponse`](./src/resources/live-stream-assets.ts) |

```ts
const liveStreamAsset = await client.liveStreamAssets.filter('liveSourceId');
```

### `start`

Start a live stream.

```ts
await client.liveStreamAssets.start('liveAssetId');
```

### Upload Live Thumbnails

Generate presigned upload URLs for live stream thumbnails. Supported thumbnail states are `preparing`, `disconnected`, and `end`.

| Direction | Type |
| --- | --- |
| Request | [`LiveStreamAssetUploadParams`](./src/resources/live-stream-assets.ts) |
| Response | [`LiveStreamAssetUploadResponse`](./src/resources/live-stream-assets.ts) |

```ts
const liveStreamAsset = await client.liveStreamAssets.upload({
  live_asset_id: '68c406b147f9ad0c0d584ce2',
  statuses: ['preparing', 'disconnected'],
});
```

### Get Live Asset Status History

This endpoint retrieves the history of a live video asset that has previously been created.

| Direction | Type |
| --- | --- |
| Response | [`LiveStreamAssetStatusHistoryResponse`](./src/resources/live-stream-assets.ts) |

```ts
const liveStreamAsset = await client.liveStreamAssets.statusHistory('liveAssetId');
```

## `VideoWorkspaces`

Create and manage video workspaces.

### List Workspaces

This endpoint list video workspace which are assigned to the user or token.

| Direction | Type |
| --- | --- |
| Request | [`VideoWorkspaceListParams`](./src/resources/video-workspaces.ts) |
| Response | [`VideoWorkspaceListResponse`](./src/resources/video-workspaces.ts) |

```ts
const videoWorkspace = await client.videoWorkspaces.list({
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
const videoWorkspace = await client.videoWorkspaces.create({
  name: 'zoom-workspace',
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
const videoWorkspace = await client.videoWorkspaces.update('workspaceId');
```

### Get Workspace

This endpoint get all the data of video workspace that has previously been created.

| Direction | Type |
| --- | --- |
| Response | [`VideoWorkspaceRetrieveResponse`](./src/resources/video-workspaces.ts) |

```ts
const videoWorkspace = await client.videoWorkspaces.retrieve('workspaceId');
```

### Delete Workspace

This endpoint removes a video workspace given its unique asset id. All the asset in workspace will be removed from storage as well, associated URLs will be inaccessible.

| Direction | Type |
| --- | --- |
| Response | [`VideoWorkspaceDeleteResponse`](./src/resources/video-workspaces.ts) |

```ts
const videoWorkspace = await client.videoWorkspaces.delete('workspaceId');
```

## `Folders`

Organize video assets into folders within a workspace.

### Create Folder

Create a folder inside a video workspace. Optionally provide `parent_id` to create a nested folder.

| Direction | Type |
| --- | --- |
| Request | [`FolderCreateParams`](./src/resources/folders.ts) |
| Response | [`FolderCreateResponse`](./src/resources/folders.ts) |

```ts
const folder = await client.folders.create('workspaceId', { name: 'Course Assets', parent_id: null });
```

### List Folders

List folders for a video workspace. Use `parent_id` to list only folders inside a specific parent folder.

| Direction | Type |
| --- | --- |
| Request | [`FolderListParams`](./src/resources/folders.ts) |
| Response | [`FolderListResponse`](./src/resources/folders.ts) |

```ts
const folder = await client.folders.list('workspaceId');
```

### Get Folder

Get a single folder by id.

| Direction | Type |
| --- | --- |
| Request | [`FolderRetrieveParams`](./src/resources/folders.ts) |
| Response | [`FolderRetrieveResponse`](./src/resources/folders.ts) |

```ts
const folder = await client.folders.retrieve('folderId', {
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
const folder = await client.folders.update('folderId', {
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
const folder = await client.folders.delete('folderId', {
  workspace_id: 'workspaceId',
});
```

### Remove Assets From Folder

Remove one or more assets from their current folder assignment inside the workspace.

| Direction | Type |
| --- | --- |
| Request | [`FolderDeleteAssetsParams`](./src/resources/folders.ts) |
| Response | [`FolderDeleteAssetsResponse`](./src/resources/folders.ts) |

```ts
const folder = await client.folders.deleteAssets('workspaceId', {
  asset_ids: ['67e4f2b4403562dbea654301', '67e4f2bb403562dbea654302'],
});
```

## `ChannelViewers`

Invite and remove viewers on a private video channel.

### Invite Channel Viewers

Invite one or more viewers to a members-only channel.

| Direction | Type |
| --- | --- |
| Request | [`ChannelViewerInviteParams`](./src/resources/channel-viewers.ts) |
| Response | [`ChannelViewerInviteResponse`](./src/resources/channel-viewers.ts) |

```ts
const channelViewer = await client.channelViewers.invite('videoWorkspaceId', {
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
const channelViewer = await client.channelViewers.delete('videoWorkspaceId', {
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
const channelViewer = await client.channelViewers.inviteCsv('videoWorkspaceId', {
  viewers_csv: 'viewers.csv',
});
```

## `DataApi`

Query aggregated and chart-ready analytics/insights data.

### Viewer Analytics

This endpoint retrieves viewer analytics data.

| Direction | Type |
| --- | --- |
| Request | [`DataAPIInsightsChartParams`](./src/resources/data-api.ts) |
| Response | [`DataAPIInsightsChartResponse`](./src/resources/data-api.ts) |

```ts
const dataAPI = await client.dataAPI.insightsChart({
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
const dataAPI = await client.dataAPI.insightsAggregated({
  aggregate: [],
  workspace_id: '',
  timeframe: {},
});
```

## `OrganizationData`

Endpoints to get organization details.

### Get Organization Details

You can get organization data using this API.

| Direction | Type |
| --- | --- |
| Response | [`OrganizationDataFetchOrgResponse`](./src/resources/organization-data.ts) |

```ts
const organizationData = await client.organizationData.fetchOrg();
```

## `UserData`

Endpoints to get user details.

### Get User

This endpoint gives information about the user account.

| Direction | Type |
| --- | --- |
| Response | [`UserDataFetchResponse`](./src/resources/user-data.ts) |

```ts
const userData = await client.userData.fetch();
```

## `AuditLogs`

Get detailed user activity logs for the entire organisation.

### Fetch Audit Logs

Get audit logs for the user activity in your organisation. Please note that this endpoint can only be accessed by `owner` and `admin` role users.

| Direction | Type |
| --- | --- |
| Request | [`AuditLogFetchParams`](./src/resources/audit-logs.ts) |
| Response | [`AuditLogFetchResponse`](./src/resources/audit-logs.ts) |

```ts
const auditLog = await client.auditLogs.fetch({
  date_range: { start_at: '2026-08-25', end_at: '2026-08-29' },
});
```
