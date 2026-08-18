// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';
import { path as __scalarPath } from '../internal/utils/path';

export class VideoAssets extends APIResource {
  /**
   * An asset refers to a media content/video that is processed, stored, and delivered through Gumlet. This endpoint creates an asset allowing users to ingest media content into the Gumlet system for processing and delivery.
   *
   * @param {VideoAssetCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<VideoAssetCreateResponse>} 200
   *
   * @example
   * ```ts
   * const create = await client.videoAssets.create({
   *   format: 'ABR',
   *   collection_id: '646df1c9173a4a2fcac180b4',
   *   input: 'http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8',
   *   description: 'some description',
   *   tag: ['ball'],
   *   profile_id: '646df1c9173a4a2fcac180b7',
   *   cluster_type: 'prod',
   *   playlist_id: '6597acd5ed6f26a9c5ca9633',
   *   metadata: { headermeta: 'metavalue' },
   *   call_to_actions: [
   *     {
   *       start_time: 1,
   *       end_time: 90,
   *       text: 'some test',
   *       url: 'https://some-url.com',
   *       position_from_top: 11,
   *       position_from_right: 23,
   *       border_radius: '11',
   *       font_color: '#000001',
   *       background_color: '#ffffff',
   *     },
   *   ],
   *   folder: '697375fbfa2d1037283140e4',
   * });
   * ```
   */
  create(body: VideoAssetCreateParams, options?: RequestOptions): APIPromise<VideoAssetCreateResponse> {
    return this._client.post('/video/assets', { body, ...options });
  }

  /**
   * This endpoint creates a video asset allowing to upload of the video from the local file system and ingest media content into the Gumlet system for processing and delivery.Body Parameters are the same as the Create Asset Body Parameters except for the `input` parameter which this endpoint does not take.A successful response will be returned with `upload_url` field. You can make `PUT` request to that URL to upload video. To upload video using `upload_url` refer to [this](https://docs.gumlet.com/docs/direct-upload#2-use-the-url-to-upload-a-file).
   *
   * @param {VideoAssetUploadParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<VideoAssetUploadResponse>} 200
   *
   * @example
   * ```ts
   * const upload = await client.videoAssets.upload({
   *   format: 'ABR',
   *   collection_id: '646df1c9173a4a2fcac180b4',
   *   input: 'http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8',
   *   description: 'some description',
   *   tag: ['ball'],
   *   profile_id: '646df1c9173a4a2fcac180b7',
   *   cluster_type: 'prod',
   *   playlist_id: '6597acd5ed6f26a9c5ca9633',
   *   metadata: { headermeta: 'metavalue' },
   *   call_to_actions: [
   *     {
   *       start_time: 1,
   *       end_time: 90,
   *       text: 'some test',
   *       url: 'https://some-url.com',
   *       position_from_top: 11,
   *       position_from_right: 23,
   *       border_radius: '11',
   *       font_color: '#000001',
   *       background_color: '#ffffff',
   *     },
   *   ],
   *   folder: '697375fbfa2d1037283140e4',
   * });
   * ```
   */
  upload(body: VideoAssetUploadParams, options?: RequestOptions): APIPromise<VideoAssetUploadResponse> {
    return this._client.post('/video/assets/upload', { body, ...options });
  }

  /**
   * This endpoint retrieves the details of an asset that has previously been created.
   *
   * @param {string} assetID - An asset id for the previously created asset.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<VideoAssetRetrieveStatusResponse>} 200
   *
   * @example
   * ```ts
   * const retrieveStatus = await client.videoAssets.retrieveStatus('assetId');
   * ```
   */
  retrieveStatus(assetID: string, options?: RequestOptions): APIPromise<VideoAssetRetrieveStatusResponse> {
    return this._client.get(__scalarPath`/video/assets/${assetID}`, options);
  }

  /**
   * This endpoint removes an asset given its unique asset id. The asset will be removed from storage as well, associated URLs will be inaccessible.
   *
   * @param {string} assetID - Asset id of the video asset which needs to be deleted.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns 204
   *
   * @example
   * ```ts
   * await client.videoAssets.delete('assetId');
   * ```
   */
  delete(assetID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(__scalarPath`/video/assets/${assetID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * This endpoint allows users to update video asset that has previously been created.
   *
   * @param {VideoAssetUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<VideoAssetUpdateResponse>} 200
   *
   * @example
   * ```ts
   * const update = await client.videoAssets.update({
   *   asset_id: '',
   * });
   * ```
   */
  update(body: VideoAssetUpdateParams, options?: RequestOptions): APIPromise<VideoAssetUpdateResponse> {
    return this._client.post('/video/assets/update', { body, ...options });
  }

  /**
   * Use any image file to use as thumbnail. Once you use the API, you will get `upload_url` in the response, and that can be used to upload the image file.
   *
   * Here is the sample curl request.
   *
   * ```bash
   * curl --location --request PUT '<upload_url>' \
   * --data '<YOUR_FILE_PATH>'
   * ```
   *
   * @param {string} assetID - An asset id for the previously created asset.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<VideoAssetSelectFromImageFileResponse>}
   *
   * @example
   * ```ts
   * const selectFromImageFile = await client.videoAssets.selectFromImageFile('assetId');
   * ```
   */
  selectFromImageFile(
    assetID: string,
    options?: RequestOptions,
  ): APIPromise<VideoAssetSelectFromImageFileResponse> {
    return this._client.post(__scalarPath`/video/assets/${assetID}/thumbnail`, options);
  }

  /**
   * Upload your subtitled .srt file to your video asset.
   *
   * @param {string} assetID - An asset id for the previously created asset.
   * @param {VideoAssetUpload2Params} [body] - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns 200
   *
   * @example
   * ```ts
   * await client.videoAssets.upload2('assetId');
   * ```
   */
  upload2(
    assetID: string,
    body: VideoAssetUpload2Params | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(__scalarPath`/video/assets/${assetID}/subtitle/upload`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Upload Subtitle Completion
   *
   * @param {string} assetID - An asset id for the previously created asset.
   * @param {VideoAssetUploadSubtitleCompletionParams} [body] - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<VideoAssetUploadSubtitleCompletionResponse>} 200
   *
   * @example
   * ```ts
   * const uploadSubtitleCompletion = await client.videoAssets.uploadSubtitleCompletion('assetId');
   * ```
   */
  uploadSubtitleCompletion(
    assetID: string,
    body: VideoAssetUploadSubtitleCompletionParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VideoAssetUploadSubtitleCompletionResponse> {
    return this._client.post(__scalarPath`/video/assets/${assetID}/subtitle/upload/event`, {
      body,
      ...options,
    });
  }

  /**
   * Upload your audio file to your video asset.
   *
   * @param {string} assetID - An asset id for the previously created asset.
   * @param {VideoAssetUpload3Params} [body] - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns 200
   *
   * @example
   * ```ts
   * await client.videoAssets.upload3('assetId');
   * ```
   */
  upload3(
    assetID: string,
    body: VideoAssetUpload3Params | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(__scalarPath`/video/assets/${assetID}/audio/upload`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Upload Audio Completion
   *
   * @param {string} assetID - An asset id for the previously created asset.
   * @param {VideoAssetUploadAudioCompletionParams} [body] - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<VideoAssetUploadAudioCompletionResponse>} 200
   *
   * @example
   * ```ts
   * const uploadAudioCompletion = await client.videoAssets.uploadAudioCompletion('assetId');
   * ```
   */
  uploadAudioCompletion(
    assetID: string,
    body: VideoAssetUploadAudioCompletionParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VideoAssetUploadAudioCompletionResponse> {
    return this._client.post(__scalarPath`/video/assets/${assetID}/audio/upload/event`, { body, ...options });
  }

  /**
   * This endpoint will create/update video asset chapters.
   *
   * @param {string} assetID
   * @param {VideoAssetCreateUpdateChapterParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<VideoAssetCreateUpdateChapterResponse>} 200
   *
   * @example
   * ```ts
   * const createUpdateChapter = await client.videoAssets.createUpdateChapter('assetId', {
   *   chapters: [],
   * });
   * ```
   */
  createUpdateChapter(
    assetID: string,
    body: VideoAssetCreateUpdateChapterParams,
    options?: RequestOptions,
  ): APIPromise<VideoAssetCreateUpdateChapterResponse> {
    return this._client.post(__scalarPath`/video/assets/${assetID}/chapters`, { body, ...options });
  }

  /**
   * @param {VideoAssetPostVideoassetrecoverParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   *
   * @example
   * ```ts
   * await client.videoAssets.postVideoassetrecover({
   *   asset_id: '',
   * });
   * ```
   */
  postVideoassetrecover(
    body: VideoAssetPostVideoassetrecoverParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post('/video/asset/recover', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List folders and assets for a workspace in a single response. Use `parent_id` to browse a specific folder, or filters like `title`, `status`, and `playlist_id` to search assets.
   *
   * @param {string} workspaceID - Video workspace id.
   * @param {VideoAssetListWorkspaceContentParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<VideoAssetListWorkspaceContentResponse>} 200
   *
   * @example
   * ```ts
   * const listWorkspaceContent = await client.videoAssets.listWorkspaceContent('workspaceId', {
   *   type: 'all',
   *   offset: 0,
   *   size: 20,
   * });
   * ```
   */
  listWorkspaceContent(
    workspaceID: string,
    query: VideoAssetListWorkspaceContentParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VideoAssetListWorkspaceContentResponse> {
    return this._client.get(__scalarPath`/video/workspaces/${workspaceID}/list`, { query, ...options });
  }

  /**
   * [Deprecated] This endpoint list assets in video workspace. You can also pass `status` and `tag` to filter assets.
   *
   * @param {string} workspaceID
   * @param {VideoAssetListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<VideoAssetListResponse>} 200
   *
   * @example
   * ```ts
   * const list = await client.videoAssets.list('workspaceId', {
   *   sortBy: 'createdAt',
   *   orderBy: 'desc',
   * });
   * ```
   *
   * @deprecated
   */
  list(
    workspaceID: string,
    query: VideoAssetListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VideoAssetListResponse> {
    return this._client.get(__scalarPath`/video/assets/list/${workspaceID}`, { query, ...options });
  }
}

export interface VideoAssetCreateParams {
  /**
   * URL or web address of a file that Gumlet should download to create a new asset.
   */
  input: string;
  /**
   * Gumlet video workspace id.
   */
  collection_id: string;
  /**
   * Transcode and deliver the asset in the requested format. The options can be one of `ABR` (HLS + DASH) and`MP4`.
   */
  format: 'ABR' | 'MP4';
  /**
   * Provide `profile_id` of the previously created video profile. This parameter will override all the parameters (except `input` and `collection_id`) from the video profile.
   */
  profile_id?: string;
  /**
   * Specify a text string or identifier which can identify an asset or bunch of assets later.
   */
  tag?: Array<string>;
  /**
   * Specify a text string or identifier which can be used for filtering or searching the asset.
   */
  title?: string;
  /**
   * Attach some textual data with the asset. This field is neither searchable nor filterable.
   */
  description?: string;
  /**
   * Add your metadata you want to associate with this asset.<br/> Example: <br/> <code>  {  "internal_video_id" : "123Abc"  }  </code>
   */
  metadata?: Record<string, unknown>;
  /**
   * Resize video with the given width. Can be an absolute value in pixels or a percentage value with the `%` suffix. Specified values greater than the original asset width will be ignored. Applicable only when specified format is `MP4`.
   */
  width?: string;
  /**
   * Resize video with the given height. Can be an absolute value in pixels or a percentage value with the `%` suffix. Specified values greater than the original asset height will be ignored. Applicable only when specified format is `MP4`.
   */
  height?: string;
  /**
   * Required resolutions of the transformed asset in case of HLS or MPEG-DASH delivery format. Can be a comma separated string out of the following values: `240p`, `360p`, `480p`, `540p`, `720p`, and `1080p`. Re-sized rendition will retain the input aspect ratio.
   */
  resolution?: string;
  /**
   * This transformation can be used to crop the video by defining a rectangular area within the dimensions of the output video.
   */
  crop?: VideoAssetCreateParams.Crop;
  /**
   * This transformation can be used to add padding to the video.
   */
  pad?: VideoAssetCreateParams.Pad;
  /**
   * Trim transformation can be used to trim videos based on time duration.
   */
  trim?: VideoAssetCreateParams.Trim;
  /**
   * Image overlay can be used to brand a video or add a visual label in the form of an image.
   */
  image_overlay?: VideoAssetCreateParams.ImageOverlay;
  /**
   * Text overlay can be used to brand a video or add a label in the form of text.
   */
  text_overlay?: VideoAssetCreateParams.TextOverlay;
  /**
   * Create an animated GIF from the video.
   */
  animated_gif?: VideoAssetCreateParams.AnimatedGif;
  /**
   * Add additional Audio / Subtitle tracks to Gumlet for transcoding and delivery along with video asset track.
   */
  additional_tracks?: Array<VideoAssetCreateParams.AdditionalTrack>;
  /**
   * Gumlet allows to generate subtitles from the audio stream (use <a href='https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes'> ISO 639-1 </a> Language Codes)
   */
  generate_subtitles?: VideoAssetCreateParams.GenerateSubtitles;
  /**
   * Creates `MP4` version for download purpose in case of `MPEG-DASH` or `HLS` delivery format. **Default: `false`**
   */
  mp4_access?: boolean;
  /**
   * Gumlet analyzes each input video on a wide range of visual aspects. Based on the analysis, it chooses a unique set of transcoding options for processing the video. This ensures that the output video is of optimal size and best quality. **Default: `true`**
   */
  per_title_encoding?: boolean;
  /**
   * Currently, the minimum supported frame size is `57600` (`240x240`) pixels for `HLS/DASH` and `21025` (`145x145`) pixels for `MP4` format. However, enabling this flag will allow Gumlet to simply put your video asset into the specified delivery format without transcoding and optimization. Enabling this flag will cause any kind of specified video transformation to be ignored if you input video asset frame size is lower than the minimum supported frame size for the specified format. **Default: `false`**
   */
  process_low_resolution_input?: boolean;
  /**
   * This flag allows Gumlet to transcode and deliver audio-only in the specified format. In this case, video transformation and thumbnails/animated GIFs would not be created. **Default: `false`**
   */
  audio_only?: boolean;
  /**
   * Enable DRM encryption for transcoded videos. Gumlet supports Widevine and Fairplay DRMs.
   */
  enable_drm?: boolean;
  /**
   * CTA, is an explicit prompt within the video content encouraging viewers to take a particular action.
   */
  call_to_actions?: Array<VideoAssetCreateParams.CallToAction>;
  /**
   * Add this asset to a playlist.
   */
  playlist_id?: string;
  /**
   * Add this asset to an existing folder by `folder_id`.
   */
  folder?: string;
}

export namespace VideoAssetCreateParams {
  export interface Crop {
    /**
     * Width of the cropping area in pixels.
     */
    width: string;
    /**
     * Height of the cropping area in pixels.
     */
    height: string;
    /**
     * This parameter defines the horizontal coordinate value of the upper-left corner of the cropping area. Values can be an absolute number of pixels or a percentage value relative to the video width. **Default: `0`**
     */
    horizontal_margin?: string;
    /**
     * This parameter defines the vertical coordinate value of the upper-left corner of the cropping area. Values can be an absolute number of pixels or a percentage value relative to the video height. **Default: `0`**
     */
    vertical_margin?: string;
  }

  export interface Pad {
    /**
     * Width of padding on the top side. Values can be an absolute number of pixels or a percentage value relative to the video height. **Default: `%5`**
     */
    top?: string;
    /**
     * Width of padding on the left side. Values can be an absolute number of pixels or a percentage value relative to the video width. **Default: `0`**
     */
    left?: string;
    /**
     * Width of padding on the bottom side. Values can be an absolute number of pixels or a percentage value relative to the video height. **Default: `%5`**
     */
    bottom?: string;
    /**
     * Width of padding on the right side. Values can be an absolute number of pixels or a percentage value relative to the video width. **Default: `0`**
     */
    right?: string;
    /**
     * Color of padding area. **Default: `black`**
     */
    color?: string;
  }

  export interface Trim {
    /**
     * Start offset in number of seconds or in `HH:MM:SS` format.
     * @format float
     */
    start_offset: number;
    /**
     * End offset in number of seconds or in `HH:MM:SS` format.
     * @format float
     */
    end_offset: number;
    /**
     * Duration can be used in conjunction with `start_offset` parameter, can be specified in number of seconds.
     * @format float
     */
    duration?: number;
  }

  export interface ImageOverlay {
    /**
     * This is the required parameter for image overlay, it can be a URL to an image that needs to be overlayed.
     */
    url: string;
    /**
     * This parameter defines the horizontal coordinate value of the corner (determined by `horizontal_align`) of the overlay area. Values can be an absolute number of pixels or a percentage value relative to the video width. **Default: `0`**
     */
    horizontal_margin?: string;
    /**
     * This parameter defines the vertical coordinate value of the corner (determined by `vertical_align`) of the overlay area. Values can be an absolute number of pixels or a percentage value relative to the video height. **Default: `0`**
     */
    vertical_margin?: string;
    /**
     * This parameter specifies the horizontal alignment of the overlayed image and can be either `left` or `right`. **Default: `right`**
     */
    horizontal_align?: string;
    /**
     * This parameter specifies the vertical alignment of the overlayed image and can be either `top` or `bottom`. **Default: `bottom`**
     */
    vertical_align?: string;
    /**
     * Width of the overlayed image. **Default: `image width`**
     */
    width?: string;
    /**
     * Height of the overlayed image. **Default: `image height`**
     */
    height?: string;
  }

  export interface TextOverlay {
    /**
     * Text to be overlayed on video.
     */
    text: string;
    /**
     * This parameter specifies the horizontal alignment of the overlayed image and can be either `left` or `right`. **Default: `right`**
     */
    horizontal_align?: string;
    /**
     * This parameter specifies the vertical alignment of the overlayed image and can be either `top` or `bottom`. **Default: `bottom`**
     */
    vertical_align?: string;
    /**
     * This parameter defines the horizontal coordinate value of the corner (determined by `horizontal_align`) of the overlay area. Values can be an absolute number of pixels relative to the video width. **Default: `0`**
     */
    horizontal_margin?: string;
    /**
     * This parameter defines the vertical coordinate value of the corner (determined by vertical_align) of the overlay area. Values can be an absolute number of pixels relative to the video height. **Default: `0`**
     */
    vertical_margin?: string;
    /**
     * Font color for text. **Default: `black`**
     */
    color?: string;
    /**
     * Font family type for text. **Default: `sans`**
     */
    font?: string;
    /**
     * Font size in pixels. **Default: `16`**
     */
    font_size?: string;
    /**
     * Overlay text opacity can be specified with opacity parameter where value can be between `0` and `100` where `0` is considered completely transparent and `100` is considered completely opaque. **Default: `100`**
     */
    opacity?: string;
    /**
     * This parameter allows rectangular drawing a box over the overlayed text. **Default: `false`**
     */
    box?: boolean;
    /**
     * Box color can be specified with this parameter. **Default: `white`**
     */
    box_color?: string;
    /**
     * Box opacity can be specified with this parameter. **Default: `100`**
     */
    box_opacity?: string;
    /**
     * Padding between the box border and the text can be specified with this parameter in pixels. **Default: `0`**
     */
    box_border?: string;
  }

  export interface AnimatedGif {
    /**
     * The time (in seconds or `HH:MM:SS` format) of the video timeline where the animated gif should begin. **Default: `0`**
     */
    start_offset?: string;
    /**
     * The time (in seconds or `HH:MM:SS` format) of the video timeline where the GIF ends. Defaults to `10` seconds after the start_offset. Maximum duration of GIF is limited to `10` seconds.
     */
    end_offset?: string;
    /**
     * The width in pixels (or in percentage value of asset width) of the animated GIF. Max width is `640px`.
     */
    width?: string;
    /**
     * The height in pixels (or in percentage value of asset height) of the animated GIF. Max height is `640px`.
     */
    height?: string;
    /**
     * The frame rate of the generated GIF. Defaults to `15` fps. Max `30` fps.
     */
    fps?: string;
  }

  export interface AdditionalTrack {
    /**
     * URL or web address of a file that Gumlet should download to add a stream.
     */
    url: string;
    /**
     * Type of additional track. Value can be either audio or subtitle.
     */
    type: string;
    /**
     * The language code value represents BCP 47 specification compliant value. For example, en for English.
     */
    language_code: string;
    /**
     * The name of the track containing a human-readable description.
     */
    name?: string;
  }

  export interface GenerateSubtitles {
    /**
     * Language code for native language of the audio.
     */
    audio_language?: string;
    /**
     * Comma separated string of language codes for which subtitle needs to be generated. Maximum four language codes are allowed.
     */
    subtitle_languages?: string;
  }

  export interface CallToAction {
    text?: string;
    url?: string;
    /**
     * @format int32
     */
    start_time?: number;
    /**
     * @format int32
     */
    end_time?: number;
    /**
     * hex value of color
     */
    font_color?: string;
    /**
     * hex code of color
     */
    background_color?: string;
    /**
     * number of pixels from top
     * @format int32
     */
    position_from_top?: number;
    /**
     * number of pixels from right
     * @format int32
     */
    position_from_right?: number;
  }
}

export interface VideoAssetCreateResponse {
  asset_id?: string;
  /**
   * @default 0
   */
  progress?: number;
  /**
   * @default 0
   */
  created_at?: number;
  /**
   * @default 0
   */
  updated_at?: number;
  status?: string;
  tag?: Array<string>;
  source_id?: string;
  collection_id?: string;
  input?: VideoAssetCreateResponse.Input;
  output?: VideoAssetCreateResponse.Output;
  playlists?: Array<string>;
}

export namespace VideoAssetCreateResponse {
  export interface Input {
    transformations?: Input.Transformations;
    profile_id?: string;
    title?: string;
    description?: string;
    metadata?: Input.Metadata;
    source_url?: string;
    call_to_actions?: Array<Input.CallToAction>;
  }

  export namespace Input {
    export interface Transformations {
      format?: string;
      resolution?: Array<string>;
      audio_codec?: Array<string>;
      video_codec?: Array<string>;
      thumbnail?: Array<string>;
      thumbnail_format?: string;
      /**
       * @default true
       */
      mp4_access?: boolean;
      /**
       * @default true
       */
      per_title_encoding?: boolean;
    }

    export interface Metadata {
      headermeta?: string;
    }

    export interface CallToAction {
      /**
       * @default 0
       */
      start_time?: number;
      /**
       * @default 0
       */
      end_time?: number;
      text?: string;
      url?: string;
      /**
       * @default 0
       */
      position_from_top?: number;
      /**
       * @default 0
       */
      position_from_right?: number;
      /**
       * @default 0
       */
      border_radius?: number;
      font_color?: string;
      background_color?: string;
      html_target?: string;
    }
  }

  export interface Output {
    format?: string;
    status_url?: string;
    playback_url?: string;
    thumbnail_url?: Array<string>;
  }
}

export interface VideoAssetUploadParams {
  /**
   * Gumlet video workspace id.
   */
  collection_id: string;
  /**
   * Provide `profile_id` of the previously created video profile. This parameter will override all the parameters (except `input` and `collection_id`) from the video profile.
   */
  profile_id?: string;
  /**
   * Transcode and deliver the asset in the requested format. The options can be one of `ABR` (HLS + DASH) and`MP4`.
   */
  format?: 'ABR' | 'MP4';
  /**
   * Specify a text string or identifier which can identify an asset or bunch of assets later.
   */
  tag?: Array<string>;
  /**
   * Specify a text string or identifier which can be used for filtering or searching the asset.
   */
  title?: string;
  /**
   * Attach some textual data with the asset. This field is neither searchable nor filterable.
   */
  description?: string;
  /**
   * Add your metadata you want to associate with this asset.<br/> Example: <br/> <code>  {  "internal_video_id" : "123Abc"  }  </code>
   */
  metadata?: Record<string, unknown>;
  /**
   * Resize video with the given width. Can be an absolute value in pixels or a percentage value with the `%` suffix. Specified values greater than the original asset width will be ignored. Applicable only when specified format is `MP4`.
   */
  width?: string;
  /**
   * Resize video with the given height. Can be an absolute value in pixels or a percentage value with the `%` suffix. Specified values greater than the original asset height will be ignored. Applicable only when specified format is `MP4`.
   */
  height?: string;
  /**
   * Required resolutions of the transformed asset in case of HLS or MPEG-DASH delivery format. Can be a comma separated string out of the following values: `240p`, `360p`, `480p`, `540p`, `720p`, and `1080p`. Re-sized rendition will retain the input aspect ratio.
   */
  resolution?: string;
  /**
   * This transformation can be used to crop the video by defining a rectangular area within the dimensions of the output video.
   */
  crop?: VideoAssetUploadParams.Crop;
  /**
   * This transformation can be used to add padding to the video.
   */
  pad?: VideoAssetUploadParams.Pad;
  /**
   * Trim transformation can be used to trim videos based on time duration.
   */
  trim?: VideoAssetUploadParams.Trim;
  /**
   * Image overlay can be used to brand a video or add a visual label in the form of an image.
   */
  image_overlay?: VideoAssetUploadParams.ImageOverlay;
  /**
   * Text overlay can be used to brand a video or add a label in the form of text.
   */
  text_overlay?: VideoAssetUploadParams.TextOverlay;
  /**
   * Create an animated GIF from the video.
   */
  animated_gif?: VideoAssetUploadParams.AnimatedGif;
  /**
   * Add additional Audio / Subtitle tracks to Gumlet for transcoding and delivery along with video asset track.
   */
  additional_tracks?: Array<VideoAssetUploadParams.AdditionalTrack>;
  /**
   * Gumlet allows to generate subtitles from the audio stream (use <a href='https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes'> ISO 639-1 </a> Language Codes)
   */
  generate_subtitles?: VideoAssetUploadParams.GenerateSubtitles;
  /**
   * Creates `MP4` version for download purpose in case of `MPEG-DASH` or `HLS` delivery format. **Default: `false`**
   */
  mp4_access?: boolean;
  /**
   * Gumlet analyzes each input video on a wide range of visual aspects. Based on the analysis, it chooses a unique set of transcoding options for processing the video. This ensures that the output video is of optimal size and best quality. **Default: `true`**
   */
  per_title_encoding?: boolean;
  /**
   * Currently, the minimum supported frame size is `57600` (`240x240`) pixels for `HLS/DASH` and `21025` (`145x145`) pixels for `MP4` format. However, enabling this flag will allow Gumlet to simply put your video asset into the specified delivery format without transcoding and optimization. Enabling this flag will cause any kind of specified video transformation to be ignored if you input video asset frame size is lower than the minimum supported frame size for the specified format. **Default: `false`**
   */
  process_low_resolution_input?: boolean;
  /**
   * This flag allows Gumlet to transcode and deliver audio-only in the specified format. In this case, video transformation and thumbnails/animated GIFs would not be created. **Default: `false`**
   */
  audio_only?: boolean;
  /**
   * Enable DRM encryption for transcoded videos. Gumlet supports Widevine and Fairplay DRMs.
   */
  enable_drm?: boolean;
  /**
   * CTA, is an explicit prompt within the video content encouraging viewers to take a particular action.
   */
  call_to_actions?: Array<VideoAssetUploadParams.CallToAction>;
  /**
   * Add this asset to a playlist.
   */
  playlist_id?: string;
  /**
   * Add this asset to an existing folder by `folder_id`.
   */
  folder?: string;
}

export namespace VideoAssetUploadParams {
  export interface Crop {
    /**
     * Width of the cropping area in pixels.
     */
    width: string;
    /**
     * Height of the cropping area in pixels.
     */
    height: string;
    /**
     * This parameter defines the horizontal coordinate value of the upper-left corner of the cropping area. Values can be an absolute number of pixels or a percentage value relative to the video width. **Default: `0`**
     */
    horizontal_margin?: string;
    /**
     * This parameter defines the vertical coordinate value of the upper-left corner of the cropping area. Values can be an absolute number of pixels or a percentage value relative to the video height. **Default: `0`**
     */
    vertical_margin?: string;
  }

  export interface Pad {
    /**
     * Width of padding on the top side. Values can be an absolute number of pixels or a percentage value relative to the video height. **Default: `%5`**
     */
    top?: string;
    /**
     * Width of padding on the left side. Values can be an absolute number of pixels or a percentage value relative to the video width. **Default: `0`**
     */
    left?: string;
    /**
     * Width of padding on the bottom side. Values can be an absolute number of pixels or a percentage value relative to the video height. **Default: `%5`**
     */
    bottom?: string;
    /**
     * Width of padding on the right side. Values can be an absolute number of pixels or a percentage value relative to the video width. **Default: `0`**
     */
    right?: string;
    /**
     * Color of padding area. **Default: `black`**
     */
    color?: string;
  }

  export interface Trim {
    /**
     * Start offset in number of seconds or in `HH:MM:SS` format.
     * @format float
     */
    start_offset: number;
    /**
     * End offset in number of seconds or in `HH:MM:SS` format.
     * @format float
     */
    end_offset: number;
    /**
     * Duration can be used in conjunction with `start_offset` parameter, can be specified in number of seconds.
     * @format float
     */
    duration?: number;
  }

  export interface ImageOverlay {
    /**
     * This is the required parameter for image overlay, it can be a URL to an image that needs to be overlayed.
     */
    url: string;
    /**
     * This parameter defines the horizontal coordinate value of the corner (determined by `horizontal_align`) of the overlay area. Values can be an absolute number of pixels or a percentage value relative to the video width. **Default: `0`**
     */
    horizontal_margin?: string;
    /**
     * This parameter defines the vertical coordinate value of the corner (determined by `vertical_align`) of the overlay area. Values can be an absolute number of pixels or a percentage value relative to the video height. **Default: `0`**
     */
    vertical_margin?: string;
    /**
     * This parameter specifies the horizontal alignment of the overlayed image and can be either `left` or `right`. **Default: `right`**
     */
    horizontal_align?: string;
    /**
     * This parameter specifies the vertical alignment of the overlayed image and can be either `top` or `bottom`. **Default: `bottom`**
     */
    vertical_align?: string;
    /**
     * Width of the overlayed image. **Default: `image width`**
     */
    width?: string;
    /**
     * Height of the overlayed image. **Default: `image height`**
     */
    height?: string;
  }

  export interface TextOverlay {
    /**
     * Text to be overlayed on video.
     */
    text: string;
    /**
     * This parameter specifies the horizontal alignment of the overlayed image and can be either `left` or `right`. **Default: `right`**
     */
    horizontal_align?: string;
    /**
     * This parameter specifies the vertical alignment of the overlayed image and can be either `top` or `bottom`. **Default: `bottom`**
     */
    vertical_align?: string;
    /**
     * This parameter defines the horizontal coordinate value of the corner (determined by `horizontal_align`) of the overlay area. Values can be an absolute number of pixels relative to the video width. **Default: `0`**
     */
    horizontal_margin?: string;
    /**
     * This parameter defines the vertical coordinate value of the corner (determined by vertical_align) of the overlay area. Values can be an absolute number of pixels relative to the video height. **Default: `0`**
     */
    vertical_margin?: string;
    /**
     * Font color for text. **Default: `black`**
     */
    color?: string;
    /**
     * Font family type for text. **Default: `sans`**
     */
    font?: string;
    /**
     * Font size in pixels. **Default: `16`**
     */
    font_size?: string;
    /**
     * Overlay text opacity can be specified with opacity parameter where value can be between `0` and `100` where `0` is considered completely transparent and `100` is considered completely opaque. **Default: `100`**
     */
    opacity?: string;
    /**
     * This parameter allows rectangular drawing a box over the overlayed text. **Default: `false`**
     */
    box?: boolean;
    /**
     * Box color can be specified with this parameter. **Default: `white`**
     */
    box_color?: string;
    /**
     * Box opacity can be specified with this parameter. **Default: `100`**
     */
    box_opacity?: string;
    /**
     * Padding between the box border and the text can be specified with this parameter in pixels. **Default: `0`**
     */
    box_border?: string;
  }

  export interface AnimatedGif {
    /**
     * The time (in seconds or `HH:MM:SS` format) of the video timeline where the animated gif should begin. **Default: `0`**
     */
    start_offset?: string;
    /**
     * The time (in seconds or `HH:MM:SS` format) of the video timeline where the GIF ends. Defaults to `10` seconds after the start_offset. Maximum duration of GIF is limited to `10` seconds.
     */
    end_offset?: string;
    /**
     * The width in pixels (or in percentage value of asset width) of the animated GIF. Max width is `640px`.
     */
    width?: string;
    /**
     * The height in pixels (or in percentage value of asset height) of the animated GIF. Max height is `640px`.
     */
    height?: string;
    /**
     * The frame rate of the generated GIF. Defaults to `15` fps. Max `30` fps.
     */
    fps?: string;
  }

  export interface AdditionalTrack {
    /**
     * URL or web address of a file that Gumlet should download to add a stream.
     */
    url: string;
    /**
     * Type of additional track. Value can be either audio or subtitle.
     */
    type: string;
    /**
     * The language code value represents BCP 47 specification compliant value. For example, en for English.
     */
    language_code: string;
    /**
     * The name of the track containing a human-readable description.
     */
    name?: string;
  }

  export interface GenerateSubtitles {
    /**
     * Language code for native language of the audio.
     */
    audio_language?: string;
    /**
     * Comma separated string of language codes for which subtitle needs to be generated. Maximum four language codes are allowed.
     */
    subtitle_languages?: string;
  }

  export interface CallToAction {
    text?: string;
    url?: string;
    /**
     * @format int32
     */
    start_time?: number;
    /**
     * @format int32
     */
    end_time?: number;
    /**
     * hex value of color
     */
    font_color?: string;
    /**
     * hex code of color
     */
    background_color?: string;
    /**
     * number of pixels from top
     * @format int32
     */
    position_from_top?: number;
    /**
     * number of pixels from right
     * @format int32
     */
    position_from_right?: number;
  }
}

export interface VideoAssetUploadResponse {
  asset_id?: string;
  /**
   * @default 0
   */
  progress?: number;
  /**
   * @default 0
   */
  created_at?: number;
  /**
   * @default 0
   */
  updated_at?: number;
  status?: string;
  tag?: Array<string>;
  source_id?: string;
  collection_id?: string;
  input?: VideoAssetUploadResponse.Input;
  output?: VideoAssetUploadResponse.Output;
  upload_url?: string;
  playlists?: Array<string>;
}

export namespace VideoAssetUploadResponse {
  export interface Input {
    transformations?: Input.Transformations;
    profile_id?: string;
    title?: string;
    description?: string;
    metadata?: Input.Metadata;
    source_url?: string;
    call_to_actions?: Array<Input.CallToAction>;
  }

  export namespace Input {
    export interface Transformations {
      format?: string;
      resolution?: Array<string>;
      audio_codec?: Array<string>;
      video_codec?: Array<string>;
      thumbnail?: Array<string>;
      thumbnail_format?: string;
      /**
       * @default true
       */
      mp4_access?: boolean;
      /**
       * @default true
       */
      per_title_encoding?: boolean;
      /**
       * @default true
       */
      original_deleted?: boolean;
    }

    export interface Metadata {
      headermeta?: string;
    }

    export interface CallToAction {
      /**
       * @default 0
       */
      start_time?: number;
      /**
       * @default 0
       */
      end_time?: number;
      text?: string;
      url?: string;
      html_target?: string;
    }
  }

  export interface Output {
    format?: string;
    status_url?: string;
    playback_url?: string;
    thumbnail_url?: Array<string>;
  }
}

export interface VideoAssetRetrieveStatusResponse {
  asset_id?: string;
  /**
   * @default 0
   */
  progress?: number;
  /**
   * @default 0
   */
  created_at?: number;
  /**
   * @default 0
   */
  updated_at?: number;
  status?: string;
  tag?: Array<string>;
  source_id?: string;
  collection_id?: string;
  input?: VideoAssetRetrieveStatusResponse.Input;
  output?: VideoAssetRetrieveStatusResponse.Output;
  /**
   * @default 0
   */
  processed_at?: number;
  folder?: string;
  /**
   * Array of Playlist IDs
   */
  playlists?: Array<string>;
}

export namespace VideoAssetRetrieveStatusResponse {
  export interface Input {
    transformations?: Input.Transformations;
    profile_id?: string;
    title?: string;
    description?: string;
    chapters?: Array<Input.Chapter>;
    source_url?: string;
    /**
     * @default 0
     */
    size?: number;
    /**
     * @default 0
     */
    duration?: number;
    aspect_ratio?: string;
    /**
     * @default 0
     */
    fps?: number;
    /**
     * @default 0
     */
    width?: number;
    /**
     * @default 0
     */
    height?: number;
  }

  export namespace Input {
    export interface Transformations {
      format?: string;
      resolution?: Array<string>;
      audio_codec?: Array<string>;
      video_codec?: Array<string>;
      image_overlay?: Transformations.ImageOverlay;
      thumbnail?: Array<string>;
      thumbnail_format?: string;
      /**
       * @default true
       */
      mp4_access?: boolean;
      /**
       * @default true
       */
      audio_only?: boolean;
      /**
       * @default true
       */
      original_deleted?: boolean;
      /**
       * @default true
       */
      per_title_encoding?: boolean;
      generate_subtitles?: Transformations.GenerateSubtitles;
      preview_thumbnails?: Transformations.PreviewThumbnails;
    }

    export namespace Transformations {
      export interface ImageOverlay {
        url?: string;
        vertical_align?: string;
        horizontal_align?: string;
        vertical_margin?: string;
        horizontal_margin?: string;
        width?: string;
        height?: string;
        /**
         * @default true
         */
        image_downloaded?: boolean;
      }

      export interface GenerateSubtitles {
        audio_language?: string;
        subtitle_languages?: Array<string>;
      }

      export interface PreviewThumbnails {
        /**
         * @default 0
         */
        max_tiles?: number;
      }
    }

    export interface Chapter {
      /**
       * @default 0
       */
      endTime?: number;
      label?: string;
    }
  }

  export interface Output {
    format?: string;
    status_url?: string;
    playback_url?: string;
    dash_playback_url?: string;
    thumbnail_url?: Array<string>;
    storage_details?: Output.StorageDetails;
    transcription_word_level_timestamps?: string;
    /**
     * @default 0
     */
    storage_bytes?: number;
    preview_thumbnails_url?: string;
  }

  export namespace Output {
    export interface StorageDetails {
      video?: Array<StorageDetails.Video>;
      audio?: Array<StorageDetails.Audio>;
      playlist?: Array<StorageDetails.Playlist>;
      thumbnail?: Array<StorageDetails.Thumbnail>;
      subtitle?: Array<StorageDetails.Subtitle>;
      previewThumbnail?: Array<StorageDetails.PreviewThumbnail>;
    }

    export namespace StorageDetails {
      export interface Video {
        fileName?: string;
        /**
         * @default 0
         */
        size?: number;
        resolution?: string;
        /**
         * @default 0
         */
        duration?: number;
      }

      export interface Audio {
        fileName?: string;
        /**
         * @default 0
         */
        size?: number;
        /**
         * @default 0
         */
        duration?: number;
      }

      export interface Playlist {
        fileName?: string;
        /**
         * @default 0
         */
        size?: number;
      }

      export interface Thumbnail {
        fileName?: string;
        /**
         * @default 0
         */
        size?: number;
        resolution?: string;
      }

      export interface Subtitle {
        fileName?: string;
        /**
         * @default 0
         */
        size?: number;
      }

      export interface PreviewThumbnail {
        fileName?: string;
        /**
         * @default 0
         */
        size?: number;
      }
    }
  }
}

export interface VideoAssetUpdateParams {
  /**
   * Asset Id
   */
  asset_id: string;
  /**
   * Specify a text string or identifier which can be used for filtering or searching the asset.
   */
  title?: string;
  /**
   * Attach some textual data with the asset. This field is neither searchable nor filterable.
   */
  description?: string;
  /**
   * Specify a text string or identifier which can identify an asset or bunch of assets later. You can pass multiple comma separated values.
   */
  tag?: string;
  /**
   * CTA, is an explicit prompt within the video content encouraging viewers to take a particular action.
   */
  call_to_actions?: Array<VideoAssetUpdateParams.CallToAction>;
  /**
   * Set of key-value pairs that you can attach to this Asset. This can be useful for storing additional information.<br/> Example: <br/> <code>  {  "internal_video_id" : "123Abc"  }  </code>
   * @format json
   */
  metadata?: string;
  /**
   * Comma separated string of language codes.
   */
  remove_subtitles?: Array<string>;
  /**
   * For replacing videos, pass this along with `asset_id`
   *
   * `{workspace_id}/{asset_id}/origin-{asset_id}`
   */
  input?: string;
}

export namespace VideoAssetUpdateParams {
  export interface CallToAction {
    text?: string;
    url?: string;
    /**
     * @format int32
     */
    start_time?: number;
    /**
     * @format int32
     */
    end_time?: number;
    /**
     * hex value of color
     */
    font_color?: string;
    /**
     * hex code of color
     */
    background_color?: string;
    /**
     * number of pixels from top
     * @format int32
     */
    position_from_top?: number;
    /**
     * number of pixels from right
     */
    position_from_right?: string;
  }
}

export type VideoAssetUpdateResponse = Record<string, unknown>;

export interface VideoAssetSelectFromImageFileResponse {
  upload_url?: string;
  asset_id?: string;
  /**
   * Thumbnail updated at timestamp in milliseconds since epoch
   */
  thumbnail_updated_at?: number;
}

export interface VideoAssetUpload2Params {
  /**
   * List of language Code to upload subtitle file  (use <a href='https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes'> ISO 639-1 </a> Language Codes)
   */
  language_codes?: Array<string>;
}

export interface VideoAssetUploadSubtitleCompletionParams {
  upload_responses?: Array<VideoAssetUploadSubtitleCompletionParams.UploadResponse>;
}

export namespace VideoAssetUploadSubtitleCompletionParams {
  export interface UploadResponse {
    /**
     * Language Code for uploadeds.srt file.
     */
    language_code?: string;
    /**
     * Status of language uploaded .srt file. (If status code was 200, You can mark true else false)
     */
    uploaded?: boolean;
  }
}

export type VideoAssetUploadSubtitleCompletionResponse = Record<string, unknown>;

export interface VideoAssetUpload3Params {
  /**
   * List of language Code to upload audio file  (use <a href='https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes'> ISO 639-1 </a> Language Codes)
   */
  language_codes?: Array<string>;
}

export interface VideoAssetUploadAudioCompletionParams {
  upload_responses?: Array<VideoAssetUploadAudioCompletionParams.UploadResponse>;
}

export namespace VideoAssetUploadAudioCompletionParams {
  export interface UploadResponse {
    /**
     * Language Code for uploaded audio file.
     */
    language_code?: string;
    /**
     * Status of language uploaded audio file. (If status code was 200, You can mark true else false)
     */
    uploaded?: boolean;
  }
}

export type VideoAssetUploadAudioCompletionResponse = Record<string, unknown>;

export interface VideoAssetCreateUpdateChapterParams {
  chapters: Array<VideoAssetCreateUpdateChapterParams.Chapter>;
}

export namespace VideoAssetCreateUpdateChapterParams {
  export interface Chapter {
    label: string;
    /**
     * @format int32
     */
    endTime: number;
  }
}

export type VideoAssetCreateUpdateChapterResponse = Record<string, unknown>;

export interface VideoAssetPostVideoassetrecoverParams {
  /**
   * Gumlet Video Asset Id which needs to be recovered.
   */
  asset_id: string;
}

export interface VideoAssetListWorkspaceContentParams {
  /**
   * Return `folders`, `videos`, or `all`. Default is `all`.
   */
  type?: 'folders' | 'videos' | 'all';
  /**
   * Parent folder id. Send `null` to browse the root level.
   */
  parent_id?: string;
  /**
   * Search folders or assets by title or description.
   */
  title?: string;
  /**
   * Comma-separated asset status values.
   */
  status?: string;
  /**
   * Comma-separated asset tags.
   */
  tag?: string;
  /**
   * Filter assets to a playlist.
   */
  playlist_id?: string;
  /**
   * Asset created_at lower bound.
   */
  start_date?: string;
  /**
   * Asset created_at upper bound.
   */
  end_date?: string;
  /**
   * Minimum asset duration in seconds.
   */
  min_duration?: number;
  /**
   * Maximum asset duration in seconds.
   */
  max_duration?: number;
  /**
   * Sort assets by a supported field.
   */
  sortBy?: 'title' | 'duration' | 'uploaded_at' | 'created_at';
  /**
   * Asset sort order.
   */
  orderBy?: 'asc' | 'desc';
  /**
   * Search index used for asset title search.
   */
  searchIndex?: 'search_index_for_asset_list' | 'cms-search' | 'cms-search-v2';
  /**
   * Offset for paginated results.
   * @default 0
   */
  offset?: number;
  /**
   * Page size. Maximum 100.
   * @default 20
   * @maximum 100
   */
  size?: number;
}

export interface VideoAssetListWorkspaceContentResponse {
  folders?: Array<VideoAssetListWorkspaceContentResponse.Folder>;
  all_assets?: Array<VideoAssetListWorkspaceContentResponse.AllAsset>;
  /**
   * @default 0
   */
  folder_count?: number;
  /**
   * @default 0
   */
  asset_count?: number;
  /**
   * @default 0
   */
  total_count?: number;
  /**
   * @default 0
   */
  current_offset?: number;
}

export namespace VideoAssetListWorkspaceContentResponse {
  export interface Folder {
    id?: string;
    name?: string;
    video_source_id?: string;
    parent_id?: string | null;
    path?: Array<string>;
    path_names?: Array<string>;
    /**
     * @default 0
     */
    depth?: number;
    /**
     * @default 0
     */
    subdirectory_count?: number;
    /**
     * @default 0
     */
    asset_count?: number;
    created_at?: string;
    updated_at?: string;
  }

  export interface AllAsset {
    asset_id?: string;
    /**
     * @default 0
     */
    progress?: number;
    /**
     * @default 0
     */
    created_at?: number;
    status?: string;
    tag?: string;
    source_id?: string;
    input?: AllAsset.Input;
    output?: AllAsset.Output;
  }

  export namespace AllAsset {
    export interface Input {
      transformations?: Input.Transformations;
      source_url?: string;
      /**
       * @default 0
       */
      size?: number;
      /**
       * @default 0
       */
      duration?: number;
      aspect_ratio?: string;
      /**
       * @default 0
       */
      fps?: number;
      /**
       * @default 0
       */
      width?: number;
      /**
       * @default 0
       */
      height?: number;
      additional_tracks?: Array<Input.AdditionalTrack>;
    }

    export namespace Input {
      export interface Transformations {
        resolution?: string;
        format?: string;
        audio_codec?: Array<string>;
        video_codec?: Array<string>;
        thumbnail?: Array<string>;
        thumbnail_format?: string;
        /**
         * @default true
         */
        mp4_access?: boolean;
        /**
         * @default true
         */
        audio_only?: boolean;
        /**
         * @default true
         */
        keep_original?: boolean;
        /**
         * @default true
         */
        per_title_encoding?: boolean;
        /**
         * @default true
         */
        process_low_resolution_input?: boolean;
      }

      export interface AdditionalTrack {
        url?: string;
        type?: string;
        language_code?: string;
        name?: string;
      }
    }

    export interface Output {
      format?: string;
      status_url?: string;
      playback_url?: string;
      thumbnail_url?: Array<string>;
    }
  }
}

export interface VideoAssetListParams {
  /**
   * To filter assets on the basis of their current status. Can be specified as a single status value string or comma-separated status values. The status value can be one of `queued`, `processing`, `ready`, `errored`, and `deleted`.
   */
  status?: 'queued' | 'processing' | 'ready' | 'errored' | 'deleted';
  /**
   * Input tag on the basis of which assets need to be filtered. To filter on multiple tags use comma-separated string.
   */
  tag?: string;
  /**
   * Title on the basis of which assets need to be filtered.
   */
  title?: string;
  /**
   * Folder name on the basis of which assets need to be filtered.
   */
  folder?: string;
  /**
   * Offset value for a paginated list of assets.
   */
  offset?: string;
  /**
   * Page size for the paginated list. **Default: `10`** **Max Size: `100`**
   */
  size?: string;
  /**
   * filter assets from a playlist.
   */
  playlist_id?: string;
  /**
   * assets will be sorted based on the provided field.
   * @default createdAt
   */
  sortBy?: 'title' | 'duration' | 'uploaded_at' | 'created_at';
  /**
   * assets will be sorted in the specified order based on provided sortBy field or by default createAt field.
   * @default desc
   */
  orderBy?: 'asc' | 'desc';
  /**
   * Search for folders, videos, or both. For videos, use `videos`. For folders, use `folders`. If you do not send this parameter, it will search for both.
   */
  type?: string;
}

export interface VideoAssetListResponse {
  all_assets?: Array<VideoAssetListResponse.AllAsset>;
  /**
   * @default 0
   */
  total_asset_count?: number;
  /**
   * @default 0
   */
  current_offset?: number;
  distinct_tags?: Array<string>;
}

export namespace VideoAssetListResponse {
  export interface AllAsset {
    asset_id?: string;
    /**
     * @default 0
     */
    progress?: number;
    /**
     * @default 0
     */
    created_at?: number;
    status?: string;
    tag?: string;
    source_id?: string;
    input?: AllAsset.Input;
    output?: AllAsset.Output;
  }

  export namespace AllAsset {
    export interface Input {
      transformations?: Input.Transformations;
      source_url?: string;
      /**
       * @default 0
       */
      size?: number;
      /**
       * @default 0
       */
      duration?: number;
      aspect_ratio?: string;
      /**
       * @default 0
       */
      fps?: number;
      /**
       * @default 0
       */
      width?: number;
      /**
       * @default 0
       */
      height?: number;
      additional_tracks?: Array<Input.AdditionalTrack>;
    }

    export namespace Input {
      export interface Transformations {
        resolution?: string;
        format?: string;
        audio_codec?: Array<string>;
        video_codec?: Array<string>;
        thumbnail?: Array<string>;
        thumbnail_format?: string;
        /**
         * @default true
         */
        mp4_access?: boolean;
        /**
         * @default true
         */
        audio_only?: boolean;
        /**
         * @default true
         */
        keep_original?: boolean;
        /**
         * @default true
         */
        per_title_encoding?: boolean;
        /**
         * @default true
         */
        process_low_resolution_input?: boolean;
      }

      export interface AdditionalTrack {
        url?: string;
        type?: string;
        language_code?: string;
        name?: string;
      }
    }

    export interface Output {
      format?: string;
      status_url?: string;
      playback_url?: string;
      thumbnail_url?: Array<string>;
    }
  }
}
export declare namespace VideoAssets {
  export {
    type VideoAssetCreateResponse as VideoAssetCreateResponse,
    type VideoAssetUploadResponse as VideoAssetUploadResponse,
    type VideoAssetRetrieveStatusResponse as VideoAssetRetrieveStatusResponse,
    type VideoAssetUpdateResponse as VideoAssetUpdateResponse,
    type VideoAssetSelectFromImageFileResponse as VideoAssetSelectFromImageFileResponse,
    type VideoAssetUploadSubtitleCompletionResponse as VideoAssetUploadSubtitleCompletionResponse,
    type VideoAssetUploadAudioCompletionResponse as VideoAssetUploadAudioCompletionResponse,
    type VideoAssetCreateUpdateChapterResponse as VideoAssetCreateUpdateChapterResponse,
    type VideoAssetListWorkspaceContentResponse as VideoAssetListWorkspaceContentResponse,
    type VideoAssetListResponse as VideoAssetListResponse,
    type VideoAssetCreateParams as VideoAssetCreateParams,
    type VideoAssetUploadParams as VideoAssetUploadParams,
    type VideoAssetUpdateParams as VideoAssetUpdateParams,
    type VideoAssetUpload2Params as VideoAssetUpload2Params,
    type VideoAssetUploadSubtitleCompletionParams as VideoAssetUploadSubtitleCompletionParams,
    type VideoAssetUpload3Params as VideoAssetUpload3Params,
    type VideoAssetUploadAudioCompletionParams as VideoAssetUploadAudioCompletionParams,
    type VideoAssetCreateUpdateChapterParams as VideoAssetCreateUpdateChapterParams,
    type VideoAssetPostVideoassetrecoverParams as VideoAssetPostVideoassetrecoverParams,
    type VideoAssetListWorkspaceContentParams as VideoAssetListWorkspaceContentParams,
    type VideoAssetListParams as VideoAssetListParams,
  };
}
