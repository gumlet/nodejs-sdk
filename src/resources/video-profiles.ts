// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class VideoProfiles extends APIResource {
  /**
   * Gumlet provides the functionality of creating multiple video assets using the same set of parameters. A Video profile is a set of parameters that can be referenced/used while creating a video as a single parameter.
   *
   * @param {VideoProfileCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<VideoProfileCreateResponse>} 200
   *
   * @example
   * ```ts
   * const videoProfile = await client.videoProfiles.create({
   *   name: 'Gumlet-Profile-1',
   *   format: 'ABR',
   * });
   * ```
   */
  create(body: VideoProfileCreateParams, options?: RequestOptions): APIPromise<VideoProfileCreateResponse> {
    return this._client.post('/video/profiles', { body, ...options });
  }

  /**
   * This endpoint retrieves the details of all profiles that have previously been created.
   *
   * @param {VideoProfileListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<VideoProfileListResponse>} 200
   *
   * @example
   * ```ts
   * const videoProfile = await client.videoProfiles.list();
   * ```
   */
  list(
    query: VideoProfileListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VideoProfileListResponse> {
    return this._client.get('/video/profiles', { query, ...options });
  }

  /**
   * Update an existing profile. Settings provided in body parameters will only be updated in the existing profile.
   *
   * @param {string} profileID - Profile id of the profile which need to be updated.
   * @param {VideoProfileUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<VideoProfileUpdateResponse>} 200
   *
   * @example
   * ```ts
   * const videoProfile = await client.videoProfiles.update('profileId', {
   *   profile_id: '',
   *   format: 'ABR',
   * });
   * ```
   */
  update(
    profileID: string,
    body: VideoProfileUpdateParams,
    options?: RequestOptions,
  ): APIPromise<VideoProfileUpdateResponse> {
    return this._client.post(__scalarPath`/video/profiles/${profileID}`, { body, ...options });
  }

  /**
   * This endpoint retrieves the details of a video profile that has previously been created.
   *
   * @param {string} profileID - Profile id of the profile which needs to be retrieved.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<VideoProfileRetrieveResponse>} 200
   *
   * @example
   * ```ts
   * const videoProfile = await client.videoProfiles.retrieve('profileId');
   * ```
   */
  retrieve(profileID: string, options?: RequestOptions): APIPromise<VideoProfileRetrieveResponse> {
    return this._client.get(__scalarPath`/video/profiles/${profileID}`, options);
  }

  /**
   * This endpoint removes a profile given its unique `profile_id`. The profile will be removed but video assets created using the profile will remain as it is.
   *
   * @param {string} profileID - Profile id of the profile which needs to be deleted.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<VideoProfileDeleteResponse>} 204
   *
   * @example
   * ```ts
   * const videoProfile = await client.videoProfiles.delete('profileId');
   * ```
   */
  delete(profileID: string, options?: RequestOptions): APIPromise<VideoProfileDeleteResponse> {
    return this._client.delete(__scalarPath`/video/profiles/${profileID}`, options);
  }
}

export interface VideoProfileCreateParams {
  /**
   * Profile name or identifier.
   */
  name: string;
  /**
   * Transcode and deliver the asset in the requested format. The options can be one of `ABR` (HLS + DASH) and `MP4`.
   */
  format: 'ABR' | 'MP4';
  /**
   * Resize video with the given width. Can be an absolute value in pixels or a percentage value with the `%` suffix. Specified values greater than the original asset width will be ignored. Only applicable when specified `format` is `MP4`.
   */
  width?: string;
  /**
   * Resize video with the given height. Can be an absolute value in pixels or a percentage value with the `%` suffix. Specified values greater than the original asset height will be ignored. Only applicable when specified `format` is `MP4`.
   */
  height?: string;
  /**
   * Required resolutions of the transformed asset in case of HLS or MPEG-DASH delivery format. Can be a comma separated string out of the following values:  `240p`, `360p`, `480p`, `540p`, `720p`,  and `1080p `. Re-sized rendition will retain the input aspect ratio.
   */
  resolution?: string;
  /**
   * This transformation can be used to crop the video by defining a rectangular area within the dimensions of the output video.
   */
  crop?: VideoProfileCreateParams.Crop;
  /**
   * This transformation can be used to add padding to the video.
   */
  pad?: VideoProfileCreateParams.Pad;
  /**
   * Trim transformation can be used to trim videos based on time duration.
   */
  trim?: VideoProfileCreateParams.Trim;
  /**
   * Image overlay can be used to brand a video or add a visual label in the form of an image.
   */
  image_overlay?: VideoProfileCreateParams.ImageOverlay;
  /**
   * Text overlay can be used to brand a video or add a label in the form of text.
   */
  text_overlay?: VideoProfileCreateParams.TextOverlay;
  /**
   * Create an animated GIF from a video.
   */
  animated_gif?: VideoProfileCreateParams.AnimatedGif;
  /**
   * Gumlet allows to generate subtitles from the audio stream (use <a href='https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes'> ISO 639-1 </a> Language Codes). Remove this object if you do not want to generate AI subtitles.
   */
  generate_subtitles?: VideoProfileCreateParams.GenerateSubtitles;
  /**
   * Creates `mp4` version for download purpose in case of `MPEG-DASH` or `HLS` delivery format. **Default: `false`**
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
   * This flag allows Gumlet to transcode and deliver audio-only in the specified format. In this case,This flag allows Gumlet to transcode and deliver audio-only in the specified format. In this case, video transformation and thumbnails/animated GIFs would not be created. **Default: `false`**
   */
  audio_only?: boolean;
  /**
   * Enable DRM encryption for transcoded videos. Gumlet supports Widevine and Fairplay DRMs.
   */
  enable_drm?: boolean;
}

export namespace VideoProfileCreateParams {
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

  export interface GenerateSubtitles {
    /**
     * This will generate the subtitles in the native audio.
     * @default true
     */
    transcribe?: boolean;
    /**
     * Array of string of language codes for which subtitle needs to be generated. Maximum four language codes are allowed.
     */
    subtitle_languages?: string;
  }
}

export interface VideoProfileCreateResponse {
  profile_id?: string;
  name?: string;
  transformations?: VideoProfileCreateResponse.Transformations;
  /**
   * @default 0
   */
  created_at?: number;
}

export namespace VideoProfileCreateResponse {
  export interface Transformations {
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
    per_title_encoding?: boolean;
  }
}

export interface VideoProfileListParams {
  /**
   * Offset value for a paginated list of profiles. Can be zero for the first time and `current_offset` value received from the last request afterwards.
   * @format int32
   */
  offset?: number;
  /**
   * Page size for the paginated list. **Default: `10`**
   * @format int32
   */
  size?: number;
}

export interface VideoProfileListResponse {
  all_profiles?: Array<VideoProfileListResponse.AllProfile>;
  /**
   * @default 0
   */
  total_profile_count?: number;
  /**
   * @default 0
   */
  current_offset?: number;
}

export namespace VideoProfileListResponse {
  export interface AllProfile {
    profile_id?: string;
    name?: string;
    transformations?: AllProfile.Transformations;
    /**
     * @default 0
     */
    created_at?: number;
    /**
     * @default 0
     */
    updated_at?: number;
  }

  export namespace AllProfile {
    export interface Transformations {
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
      per_title_encoding?: boolean;
    }
  }
}

export interface VideoProfileUpdateParams {
  /**
   * Profile id of the profile which needs to be deleted.
   */
  profile_id: string;
  /**
   * Profile name or identifier.
   */
  name?: string;
  /**
   * Transcode and deliver the asset in the requested format. The options can be one of `ABR` (HLS + DASH) and `MP4`.
   * @default ABR
   */
  format?: 'ABR' | 'MP4';
  /**
   * Resize video with the given width. Can be an absolute value in pixels or a percentage value with the `%` suffix. Specified values greater than the original asset width will be ignored. Only applicable when specified `format` is `MP4`.
   */
  width?: string;
  /**
   * Resize video with the given height. Can be an absolute value in pixels or a percentage value with the `%` suffix. Specified values greater than the original asset height will be ignored. Only applicable when specified `format` is `MP4`.
   */
  height?: string;
  /**
   * Resize video with the given height. Can be an absolute value in pixels or a percentage value with the `%` suffix. Specified values greater than the original asset height will be ignored. Only applicable when specified `format` is `MP4`.
   */
  resolution?: string;
  /**
   * This transformation can be used to crop the video by defining a rectangular area within the dimensions of the output video.
   */
  crop?: VideoProfileUpdateParams.Crop;
  /**
   * This transformation can be used to add padding to the video.
   */
  pad?: VideoProfileUpdateParams.Pad;
  /**
   * Trim transformation can be used to trim videos based on time duration.
   */
  trim?: VideoProfileUpdateParams.Trim;
  /**
   * Image overlay can be used to brand a video or add a visual label in the form of an image.
   */
  image_overlay?: VideoProfileUpdateParams.ImageOverlay;
  /**
   * Text overlay can be used to brand a video or add a label in the form of text.
   */
  text_overlay?: VideoProfileUpdateParams.TextOverlay;
  /**
   * Create an animated GIF from a video.
   */
  animated_gif?: VideoProfileUpdateParams.AnimatedGif;
  /**
   * Gumlet allows to generate subtitles from the audio stream (use <a href='https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes'> ISO 639-1 </a> Language Codes). You can remove this object if don't want to generate AI subtitles.
   */
  generate_subtitles?: VideoProfileUpdateParams.GenerateSubtitles;
  /**
   * Creates `mp4` version for download purpose in case of `MPEG-DASH` or `HLS` delivery format. **Default: `false`**
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
   * This flag allows Gumlet to transcode and deliver audio-only in the specified format. In this case,This flag allows Gumlet to transcode and deliver audio-only in the specified format. In this case, video transformation and thumbnails/animated GIFs would not be created. **Default: `false`**
   */
  audio_only?: boolean;
  /**
   * Enable DRM encryption for transcoded videos. Gumlet supports Widevine and Fairplay DRMs.
   */
  enable_drm?: boolean;
}

export namespace VideoProfileUpdateParams {
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

  export interface GenerateSubtitles {
    /**
     * Array of string of language codes for which subtitle needs to be generated. Maximum four language codes are allowed.
     */
    subtitle_languages?: Array<string>;
    /**
     * This is by default true to generate the subtitles in the native audio.
     */
    transcribe?: boolean;
  }
}

export interface VideoProfileUpdateResponse {
  profile_id?: string;
  name?: string;
  transformations?: VideoProfileUpdateResponse.Transformations;
  /**
   * @default 0
   */
  created_at?: number;
  /**
   * @default 0
   */
  updated_at?: number;
}

export namespace VideoProfileUpdateResponse {
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
    per_title_encoding?: boolean;
  }
}

export interface VideoProfileRetrieveResponse {
  profile_id?: string;
  name?: string;
  transformations?: VideoProfileRetrieveResponse.Transformations;
  /**
   * @default 0
   */
  created_at?: number;
  /**
   * @default 0
   */
  updated_at?: number;
}

export namespace VideoProfileRetrieveResponse {
  export interface Transformations {
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
    per_title_encoding?: boolean;
    resolution?: string;
  }
}

export type VideoProfileDeleteResponse = Record<string, unknown>;
export declare namespace VideoProfiles {
  export {
    type VideoProfileCreateResponse as VideoProfileCreateResponse,
    type VideoProfileListResponse as VideoProfileListResponse,
    type VideoProfileUpdateResponse as VideoProfileUpdateResponse,
    type VideoProfileRetrieveResponse as VideoProfileRetrieveResponse,
    type VideoProfileDeleteResponse as VideoProfileDeleteResponse,
    type VideoProfileCreateParams as VideoProfileCreateParams,
    type VideoProfileListParams as VideoProfileListParams,
    type VideoProfileUpdateParams as VideoProfileUpdateParams,
  };
}
