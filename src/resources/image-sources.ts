// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';
import { path as __scalarPath } from '../internal/utils/path';

export class ImageSources extends APIResource {
  /**
   * This endpoint allows users to create image source.
   *
   * @param {ImageSourceCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ImageSourceCreateResponse>} 200
   *
   * @example
   * ```ts
   * const create = await client.imageSources.create({
   *   names: 'zoom-collection',
   *   type: 'zoom',
   *   zoom: { secret: 'yourSecret' },
   * });
   * ```
   */
  create(body: ImageSourceCreateParams, options?: RequestOptions): APIPromise<ImageSourceCreateResponse> {
    return this._client.post('/image/sources', { body, ...options });
  }

  /**
   * This endpoint list image sources which are assigned to the user or token.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ImageSourceListResponse>} 200
   *
   * @example
   * ```ts
   * const list = await client.imageSources.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ImageSourceListResponse> {
    return this._client.get('/image/sources', options);
  }

  /**
   * This endpoint allows users to update image source that has previously been created.
   *
   * @param {string} imageSourceID - image source id which you want to update
   * @param {ImageSourceUpdateParams} [body] - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ImageSourceUpdateResponse>} 200
   *
   * @example
   * ```ts
   * const update = await client.imageSources.update('imageSourceId');
   * ```
   */
  update(
    imageSourceID: string,
    body: ImageSourceUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ImageSourceUpdateResponse> {
    return this._client.post(__scalarPath`/image/sources/${imageSourceID}`, { body, ...options });
  }

  /**
   * This endpoint removes a image source. All image delivery using this subdomain will be stopped.
   *
   * @param {string} imageSourceID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ImageSourceDeleteResponse>} 200
   *
   * @example
   * ```ts
   * const delete_ = await client.imageSources.delete('imageSourceId');
   * ```
   */
  delete(imageSourceID: string, options?: RequestOptions): APIPromise<ImageSourceDeleteResponse> {
    return this._client.delete(__scalarPath`/image/sources/${imageSourceID}`, options);
  }

  /**
   * You can purge cache for any image by using our cache purge API.
   *
   * @param {string} subdomain - Subdomain is same subdomain you created while creating source. If you serve image from example.gumlet.com, please enter only 'example' for this parameter.
   * @param {ImageSourcePurgeCacheParams} [body] - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns 200
   *
   * @example
   * ```ts
   * await client.imageSources.purgeCache('subdomain');
   * ```
   */
  purgeCache(
    subdomain: string,
    body: ImageSourcePurgeCacheParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(__scalarPath`/purge/${subdomain}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * This endpoint help you get analytics data.
   *
   * @param {ImageSourceAnalyticsParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ImageSourceAnalyticsResponse>} 200
   *
   * @example
   * ```ts
   * const analytics = await client.imageSources.analytics({
   *   metrics: [],
   *   date_range: {},
   * });
   * ```
   */
  analytics(
    body: ImageSourceAnalyticsParams,
    options?: RequestOptions,
  ): APIPromise<ImageSourceAnalyticsResponse> {
    return this._client.post('/image/analytics', { body, ...options });
  }

  /**
   * Get Source
   *
   * @param {string} sourceID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   *
   * @example
   * ```ts
   * await client.imageSources.retrieve('sourceId');
   * ```
   */
  retrieve(sourceID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(__scalarPath`/image/sources/${sourceID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ImageSourceCreateParams {
  /**
   * unique subdomain associated with the image source
   */
  namespace: string;
  type:
    | 'proxy'
    | 'webfolder'
    | 'aws'
    | 'gcs'
    | 'dostorage'
    | 'wasabi'
    | 'cloudinary'
    | 'azure'
    | 'linode'
    | 'backblaze'
    | 'cloudflare'
    | 'zoom';
  /**
   * This is a required field if source type is aws.
   */
  aws?: ImageSourceCreateParams.Aws;
  /**
   * This is a required field if source type is proxy.
   */
  proxy?: ImageSourceCreateParams.Proxy;
  /**
   * This is a required field if source type is gcs.
   */
  gcs?: ImageSourceCreateParams.Gcs;
  /**
   * This is a required field if source type is dostorage.
   */
  dostorage?: ImageSourceCreateParams.Dostorage;
  /**
   * This is a required field if source type is wasabi.
   */
  wasabi?: ImageSourceCreateParams.Wasabi;
  /**
   * This is a required field if source type is cloudinary.
   */
  cloudinary?: ImageSourceCreateParams.Cloudinary;
  /**
   * This is a required field if source type is azure.
   */
  azure?: ImageSourceCreateParams.Azure;
  /**
   * This is a required field if source type is linode.
   */
  linode?: ImageSourceCreateParams.Linode;
  /**
   * This is a required field if source type is backblaze.
   */
  backblaze?: ImageSourceCreateParams.Backblaze;
  /**
   * This is a required field if source type is cloudflare.
   */
  cloudflare?: ImageSourceCreateParams.Cloudflare;
}

export namespace ImageSourceCreateParams {
  export interface Aws {
    bucket_name: string;
    bucket_region: string;
    access_key: string;
    secret: string;
    base_path?: string;
    endpoint?: string;
  }

  export interface Proxy {
    whitelisted_domains: string;
  }

  export interface Gcs {
    bucket_name: string;
    service_account_key: string;
  }

  export interface Dostorage {
    bucket_name: string;
    bucket_region: string;
    access_key: string;
    secret: string;
    base_path?: string;
  }

  export interface Wasabi {
    bucket_name: string;
    bucket_region: string;
    access_key: string;
    secret: string;
    base_path?: string;
  }

  export interface Cloudinary {
    host_name: string;
    cloud_name: string;
  }

  export interface Azure {
    azure_account_name: string;
    azure_container_name: string;
    azure_shared_token: string;
    azure_path: string;
  }

  export interface Linode {
    bucket_name: string;
    bucket_region: string;
    access_key: string;
    secret: string;
  }

  export interface Backblaze {
    bucket_name: string;
    access_key: string;
    secret: string;
    /**
     * bucket_region or endpoint
     */
    bucket_region?: string;
    /**
     * bucket_region or endpoint
     */
    endpoint?: string;
    base_path?: string;
  }

  export interface Cloudflare {
    bucket_name: string;
    access_key: string;
    account_id: string;
    secret: string;
    base_path?: string;
  }
}

export interface ImageSourceCreateResponse {
  id?: string;
  name?: string;
  type?: string;
  created_at?: string;
  updated_at?: string;
  video_protection?: Record<string, unknown>;
  player_config?: ImageSourceCreateResponse.PlayerConfig;
  default_profile_id?: string;
  insight_property_id?: string;
  zoom?: ImageSourceCreateResponse.Zoom;
  embed_details?: ImageSourceCreateResponse.EmbedDetails;
  folders?: Array<unknown>;
  channel_settings?: ImageSourceCreateResponse.ChannelSettings;
}

export namespace ImageSourceCreateResponse {
  export interface PlayerConfig {
    /**
     * @default true
     */
    preload?: boolean;
    /**
     * @default true
     */
    autoplay?: boolean;
    /**
     * @default true
     */
    disable_seek?: boolean;
    /**
     * @default true
     */
    disable_player_controls?: boolean;
    /**
     * @default true
     */
    powered_by_gumlet_overlay?: boolean;
    /**
     * @default true
     */
    allow_drm_protected_videos?: boolean;
    /**
     * @default true
     */
    loop?: boolean;
    player_color?: string;
    /**
     * @default true
     */
    include_seo?: boolean;
    /**
     * @default true
     */
    subtitle_enabled?: boolean;
    pixel_tags?: Record<string, unknown>;
    /**
     * @default 0
     */
    logo_width?: number;
    /**
     * @default 0
     */
    logo_height?: number;
    /**
     * @default true
     */
    dynamic_watermark?: boolean;
    /**
     * @default 0
     */
    watermark_font_size?: number;
    watermark_font_color?: string;
    watermark_bg_color?: string;
    /**
     * @default 0
     */
    watermark_interval?: number;
  }

  export interface Zoom {
    secret?: string;
  }

  export interface EmbedDetails {
    /**
     * @default true
     */
    powered_by_gumlet_overlay?: boolean;
    /**
     * @default true
     */
    allow_drm_protected_videos?: boolean;
    /**
     * @default true
     */
    preload?: boolean;
    /**
     * @default true
     */
    autoplay?: boolean;
    /**
     * @default 0
     */
    logo_width?: number;
    /**
     * @default 0
     */
    logo_height?: number;
    player_color?: string;
    /**
     * @default true
     */
    is_seo?: boolean;
    /**
     * @default true
     */
    dynamic_watermark?: boolean;
    /**
     * @default 0
     */
    watermark_font_size?: number;
    watermark_font_color?: string;
    watermark_bg_color?: string;
    /**
     * @default 0
     */
    watermark_interval?: number;
    /**
     * @default true
     */
    disable_seek?: boolean;
    /**
     * @default true
     */
    disable_player_controls?: boolean;
    /**
     * @default true
     */
    loop?: boolean;
    /**
     * @default true
     */
    subtitle_enabled?: boolean;
  }

  export interface ChannelSettings {
    /**
     * @default true
     */
    active?: boolean;
    privacy_type?: string;
  }
}

export interface ImageSourceListResponse {
  all_sources?: Array<ImageSourceListResponse.AllSource>;
}

export namespace ImageSourceListResponse {
  export interface AllSource {
    id?: string;
    name?: string;
    type?: string;
    created_at?: string;
    updated_at?: string;
    video_protection?: AllSource.VideoProtection;
    player_config?: AllSource.PlayerConfig;
    default_profile_id?: string;
    insight_property_id?: string;
    aws?: AllSource.Aws;
    embed_details?: AllSource.EmbedDetails;
    folders?: Array<string>;
    channel_settings?: AllSource.ChannelSettings;
  }

  export namespace AllSource {
    export interface VideoProtection {
      /**
       * @default true
       */
      signed_url?: boolean;
      signed_url_secret?: string;
    }

    export interface PlayerConfig {
      /**
       * @default true
       */
      preload?: boolean;
      /**
       * @default true
       */
      autoplay?: boolean;
      /**
       * @default true
       */
      disable_seek?: boolean;
      /**
       * @default true
       */
      disable_player_controls?: boolean;
      /**
       * @default true
       */
      powered_by_gumlet_overlay?: boolean;
      /**
       * @default true
       */
      allow_drm_protected_videos?: boolean;
      /**
       * @default true
       */
      loop?: boolean;
      player_color?: string;
      /**
       * @default true
       */
      include_seo?: boolean;
      /**
       * @default true
       */
      subtitle_enabled?: boolean;
      pixel_tags?: Record<string, unknown>;
      /**
       * @default 0
       */
      logo_width?: number;
      /**
       * @default 0
       */
      logo_height?: number;
      /**
       * @default true
       */
      dynamic_watermark?: boolean;
      /**
       * @default 0
       */
      watermark_font_size?: number;
      watermark_font_color?: string;
      watermark_bg_color?: string;
      /**
       * @default 0
       */
      watermark_interval?: number;
    }

    export interface Aws {
      bucket_name?: string;
      bucket_region?: string;
      access_key?: string;
      secret?: string;
    }

    export interface EmbedDetails {
      pixel_tags?: Record<string, unknown>;
      /**
       * @default true
       */
      preload?: boolean;
      /**
       * @default true
       */
      autoplay?: boolean;
      /**
       * @default 0
       */
      logo_width?: number;
      /**
       * @default 0
       */
      logo_height?: number;
      player_color?: string;
      /**
       * @default true
       */
      is_seo?: boolean;
      /**
       * @default true
       */
      dynamic_watermark?: boolean;
      /**
       * @default true
       */
      disable_seek?: boolean;
      /**
       * @default true
       */
      disable_player_controls?: boolean;
      /**
       * @default true
       */
      allow_drm_protected_videos?: boolean;
      /**
       * @default true
       */
      powered_by_gumlet_overlay?: boolean;
      /**
       * @default true
       */
      loop?: boolean;
      /**
       * @default true
       */
      subtitle_enabled?: boolean;
      watermark_bg_color?: string;
      watermark_font_color?: string;
      /**
       * @default 0
       */
      watermark_font_size?: number;
      /**
       * @default 0
       */
      watermark_interval?: number;
    }

    export interface ChannelSettings {
      title?: string;
      /**
       * @default true
       */
      active?: boolean;
      description?: string;
      privacy_type?: string;
      /**
       * @default true
       */
      custom_logo?: boolean;
      logo_url?: string;
      cname?: Array<string>;
      temp_cname?: Array<string>;
    }
  }
}

export interface ImageSourceUpdateParams {
  type?:
    | 'proxy'
    | 'direct-upload'
    | 'webfolder'
    | 'aws'
    | 'gcs'
    | 'dostorage'
    | 'wasabi'
    | 'cloudinary'
    | 'azure'
    | 'linode'
    | 'backblaze'
    | 'cloudflare';
  /**
   * This is a required field if source type is webfolder.
   */
  webfolder?: ImageSourceUpdateParams.Webfolder;
  /**
   * This is a required field if source type is aws.
   */
  aws?: ImageSourceUpdateParams.Aws;
  /**
   * This is a required field if source type is proxy.
   */
  proxy?: ImageSourceUpdateParams.Proxy;
  /**
   * This is a required field if source type is gcs.
   */
  gcs?: ImageSourceUpdateParams.Gcs;
  /**
   * This is a required field if source type is dostorage.
   */
  dostorage?: ImageSourceUpdateParams.Dostorage;
  /**
   * This is a required field if source type is wasabi.
   */
  wasabi?: ImageSourceUpdateParams.Wasabi;
  /**
   * This is a required field if source type is linode.
   */
  linode?: ImageSourceUpdateParams.Linode;
  /**
   * This is a required field if source type is backblaze.
   */
  backblaze?: ImageSourceUpdateParams.Backblaze;
  /**
   * This is a required field if source type is cloudflare.
   */
  cloudflare?: ImageSourceUpdateParams.Cloudflare;
  /**
   * This is a required field if source type is cloudinary.
   */
  cloudinary?: ImageSourceUpdateParams.Cloudinary;
  /**
   * This is a required field if source type is azure.
   */
  azure?: ImageSourceUpdateParams.Azure;
}

export namespace ImageSourceUpdateParams {
  export interface Webfolder {
    base_url?: string;
  }

  export interface Aws {
    bucket_name: string;
    bucket_region: string;
    access_key: string;
    secret: string;
    base_path?: string;
    endpoint?: string;
  }

  export interface Proxy {
    whitelisted_domains: string;
  }

  export interface Gcs {
    bucket_name: string;
    service_account_key: string;
  }

  export interface Dostorage {
    bucket_name: string;
    bucket_region: string;
    access_key: string;
    secret: string;
    base_path?: string;
  }

  export interface Wasabi {
    bucket_name: string;
    bucket_region: string;
    access_key: string;
    secret: string;
    base_path?: string;
  }

  export interface Linode {
    bucket_name: string;
    bucket_region: string;
    access_key: string;
    secret: string;
  }

  export interface Backblaze {
    bucket_name: string;
    access_key: string;
    secret: string;
    /**
     * bucket_region or endpoint
     */
    bucket_region?: string;
    /**
     * bucket_region or endpoint
     */
    endpoint?: string;
    base_path?: string;
  }

  export interface Cloudflare {
    bucket_name: string;
    access_key: string;
    account_id: string;
    secret: string;
    base_path?: string;
  }

  export interface Cloudinary {
    host_name: string;
    cloud_name: string;
  }

  export interface Azure {
    azure_account_name: string;
    azure_container_name: string;
    azure_shared_token: string;
    azure_path: string;
  }
}

export interface ImageSourceUpdateResponse {
  id?: string;
  name?: string;
  type?: string;
  created_at?: string;
  updated_at?: string;
  video_protection?: ImageSourceUpdateResponse.VideoProtection;
  player_config?: ImageSourceUpdateResponse.PlayerConfig;
  default_profile_id?: string;
  insight_property_id?: string;
  aws?: ImageSourceUpdateResponse.Aws;
  embed_details?: ImageSourceUpdateResponse.EmbedDetails;
  folders?: Array<string>;
  channel_settings?: ImageSourceUpdateResponse.ChannelSettings;
}

export namespace ImageSourceUpdateResponse {
  export interface VideoProtection {
    /**
     * @default true
     */
    signed_url?: boolean;
    signed_url_secret?: string;
  }

  export interface PlayerConfig {
    /**
     * @default true
     */
    preload?: boolean;
    /**
     * @default true
     */
    autoplay?: boolean;
    /**
     * @default true
     */
    disable_seek?: boolean;
    /**
     * @default true
     */
    disable_player_controls?: boolean;
    /**
     * @default true
     */
    powered_by_gumlet_overlay?: boolean;
    /**
     * @default true
     */
    allow_drm_protected_videos?: boolean;
    /**
     * @default true
     */
    loop?: boolean;
    player_color?: string;
    /**
     * @default true
     */
    include_seo?: boolean;
    /**
     * @default true
     */
    subtitle_enabled?: boolean;
    pixel_tags?: Record<string, unknown>;
    /**
     * @default 0
     */
    logo_width?: number;
    /**
     * @default 0
     */
    logo_height?: number;
    /**
     * @default true
     */
    dynamic_watermark?: boolean;
    /**
     * @default 0
     */
    watermark_font_size?: number;
    watermark_font_color?: string;
    watermark_bg_color?: string;
    /**
     * @default 0
     */
    watermark_interval?: number;
  }

  export interface Aws {
    bucket_name?: string;
    bucket_region?: string;
    access_key?: string;
    secret?: string;
  }

  export interface EmbedDetails {
    /**
     * @default true
     */
    preload?: boolean;
    /**
     * @default true
     */
    autoplay?: boolean;
    /**
     * @default 0
     */
    logo_width?: number;
    /**
     * @default 0
     */
    logo_height?: number;
    player_color?: string;
    /**
     * @default true
     */
    is_seo?: boolean;
    /**
     * @default true
     */
    dynamic_watermark?: boolean;
    /**
     * @default 0
     */
    watermark_font_size?: number;
    watermark_font_color?: string;
    watermark_bg_color?: string;
    /**
     * @default 0
     */
    watermark_interval?: number;
    /**
     * @default true
     */
    disable_seek?: boolean;
    /**
     * @default true
     */
    disable_player_controls?: boolean;
    /**
     * @default true
     */
    powered_by_gumlet_overlay?: boolean;
    /**
     * @default true
     */
    allow_drm_protected_videos?: boolean;
    pixel_tags?: Record<string, unknown>;
    /**
     * @default true
     */
    loop?: boolean;
    /**
     * @default true
     */
    subtitle_enabled?: boolean;
  }

  export interface ChannelSettings {
    title?: string;
    /**
     * @default true
     */
    active?: boolean;
    description?: string;
    privacy_type?: string;
    /**
     * @default true
     */
    custom_logo?: boolean;
    logo_url?: string;
    cname?: Array<string>;
    temp_cname?: Array<string>;
  }
}

export type ImageSourceDeleteResponse = Record<string, unknown>;

export interface ImageSourcePurgeCacheParams {
  /**
   * An array of path of images to purge. It should be provided without any query parameters.
   */
  paths?: Array<string>;
}

export interface ImageSourceAnalyticsParams {
  /**
   * Define the metric you need the data for, currently we support "bandwidth_consumption", "requests_count","status_4xx","status_5xx","avg_response_time""
   */
  metrics: Array<string>;
  /**
   * The timeframe to get the data for. Currently we only support a maximum of 30 days between `start_at` and `end_at`.
   */
  date_range: ImageSourceAnalyticsParams.DateRange;
}

export namespace ImageSourceAnalyticsParams {
  export interface DateRange {
    /**
     * The starting date to consider
     * @format date
     */
    start_at?: string;
    /**
     * The ending date to consider
     * @format date
     */
    end_at?: string;
  }
}

export interface ImageSourceAnalyticsResponse {
  top_assets?: Array<ImageSourceAnalyticsResponse.TopAsset>;
}

export namespace ImageSourceAnalyticsResponse {
  export interface TopAsset {
    collection_id?: string;
    asset_id?: string;
    /**
     * @default 0
     */
    units?: number;
    collection_name?: string;
  }
}
export declare namespace ImageSources {
  export {
    type ImageSourceCreateResponse as ImageSourceCreateResponse,
    type ImageSourceListResponse as ImageSourceListResponse,
    type ImageSourceUpdateResponse as ImageSourceUpdateResponse,
    type ImageSourceDeleteResponse as ImageSourceDeleteResponse,
    type ImageSourceAnalyticsResponse as ImageSourceAnalyticsResponse,
    type ImageSourceCreateParams as ImageSourceCreateParams,
    type ImageSourceUpdateParams as ImageSourceUpdateParams,
    type ImageSourcePurgeCacheParams as ImageSourcePurgeCacheParams,
    type ImageSourceAnalyticsParams as ImageSourceAnalyticsParams,
  };
}
