// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
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
   *   type: 'webfolder',
   *   webfolder: { base_url: 'https://www.google.com' },
   *   namespace: 'google-demo',
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
   * @returns {APIPromise<ImageSourceListResponse>} List all image sources
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
   * Get all details about image source.
   *
   * @param {string} imageSourceID - Image source id. You can get it on Gumlet dashboard or using list sources API endpoint.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ImageSourceRetrieveResponse>}
   *
   * @example
   * ```ts
   * const retrieve = await client.imageSources.retrieve('imageSourceId');
   * ```
   */
  retrieve(imageSourceID: string, options?: RequestOptions): APIPromise<ImageSourceRetrieveResponse> {
    return this._client.get(__scalarPath`/image/sources/${imageSourceID}`, options);
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
   * @param {string} imageSourceID - Image source ID to delete. You can get this on Gumlet dashboard or in list source API.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ImageSourceDeleteResponse>}
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
   * @returns {APIPromise<ImageSourcePurgeCacheResponse>} 200
   *
   * @example
   * ```ts
   * const purgeCache = await client.imageSources.purgeCache('subdomain');
   * ```
   *
   * @deprecated
   */
  purgeCache(
    subdomain: string,
    body: ImageSourcePurgeCacheParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ImageSourcePurgeCacheResponse> {
    return this._client.post(__scalarPath`/purge/${subdomain}`, { body, ...options });
  }

  /**
   * You can purge the cache for any image path by using this cache purge API.
   *
   * @param {string} sourceID - Image Source ID
   * @param {ImageSourcePurgeParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ImageSourcePurgeResponse>} Successful response
   *
   * @example
   * ```ts
   * const purge = await client.imageSources.purge('sourceId', { paths: ['image.jpeg', 'image2.png'] });
   * ```
   */
  purge(
    sourceID: string,
    body: ImageSourcePurgeParams,
    options?: RequestOptions,
  ): APIPromise<ImageSourcePurgeResponse> {
    return this._client.post(__scalarPath`/image/purge/${sourceID}`, { body, ...options });
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
  webfolder?: ImageSourceCreateParams.Webfolder;
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

  export interface Webfolder {
    base_url?: string;
  }
}

export interface ImageSourceCreateResponse {
  id?: string;
  namespace?: string;
  type?: string;
  cdn_type?: string;
  cdn_cache_time?: number;
  canonical_url?: boolean;
  browser_cache_time?: number;
  is_cloudfront?: boolean;
  created_at?: string;
  updated_at?: string;
  webfolder?: ImageSourceCreateResponse.Webfolder;
  default_params?: ImageSourceCreateResponse.DefaultParams;
  subdomain?: string;
  is_active?: boolean;
}

export namespace ImageSourceCreateResponse {
  export interface Webfolder {
    base_url?: string;
  }

  export interface DefaultParams {
    format?: string;
    compress?: string;
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

export interface ImageSourceRetrieveResponse {
  id?: string;
  namespace?: string;
  type?: string;
  cdn_type?: string;
  cdn_cache_time?: number;
  canonical_url?: boolean;
  browser_cache_time?: number;
  is_cloudfront?: boolean;
  created_at?: string;
  updated_at?: string;
  /**
   * This is a required field if source type is webfolder.
   */
  webfolder?: ImageSourceRetrieveResponse.Webfolder;
  /**
   * This is a required field if source type is aws.
   */
  aws?: ImageSourceRetrieveResponse.Aws;
  /**
   * This is a required field if source type is proxy.
   */
  proxy?: ImageSourceRetrieveResponse.Proxy;
  /**
   * This is a required field if source type is gcs.
   */
  gcs?: ImageSourceRetrieveResponse.Gcs;
  /**
   * This is a required field if source type is dostorage.
   */
  dostorage?: ImageSourceRetrieveResponse.Dostorage;
  /**
   * This is a required field if source type is wasabi.
   */
  wasabi?: ImageSourceRetrieveResponse.Wasabi;
  /**
   * This is a required field if source type is linode.
   */
  linode?: ImageSourceRetrieveResponse.Linode;
  /**
   * This is a required field if source type is backblaze.
   */
  backblaze?: ImageSourceRetrieveResponse.Backblaze;
  /**
   * This is a required field if source type is cloudflare.
   */
  cloudflare?: ImageSourceRetrieveResponse.Cloudflare;
  /**
   * This is a required field if source type is cloudinary.
   */
  cloudinary?: ImageSourceRetrieveResponse.Cloudinary;
  /**
   * This is a required field if source type is azure.
   */
  azure?: ImageSourceRetrieveResponse.Azure;
  default_params?: Record<string, unknown>;
  request_headers?: Array<Record<string, unknown>>;
  subdomain?: string;
  is_active?: boolean;
}

export namespace ImageSourceRetrieveResponse {
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
  default_params?: Record<string, unknown>;
  /**
   * URL for error image to display when we get broken image from your origin.
   */
  error_image?: string;
  request_headers?: Array<Record<string, unknown>>;
  response_headers?: Array<Record<string, unknown>>;
  temp_cname?: Array<string>;
  /**
   * Browser cache time in seconds. For example setting this to 3600 caches the image in browser for 3600 seconds (1 hour)
   * @format int32
   */
  browser_cache_time?: number;
  /**
   * CDN cache time in seconds.
   * @format int32
   */
  cdn_cache_time?: number;
  /**
   * Enable / disable source.
   */
  is_active?: boolean;
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
  namespace?: string;
  type?: string;
  cdn_type?: string;
  cdn_cache_time?: number;
  canonical_url?: boolean;
  browser_cache_time?: number;
  is_cloudfront?: boolean;
  created_at?: string;
  updated_at?: string;
  /**
   * This is a required field if source type is webfolder.
   */
  webfolder?: ImageSourceUpdateResponse.Webfolder;
  /**
   * This is a required field if source type is aws.
   */
  aws?: ImageSourceUpdateResponse.Aws;
  /**
   * This is a required field if source type is proxy.
   */
  proxy?: ImageSourceUpdateResponse.Proxy;
  /**
   * This is a required field if source type is gcs.
   */
  gcs?: ImageSourceUpdateResponse.Gcs;
  /**
   * This is a required field if source type is dostorage.
   */
  dostorage?: ImageSourceUpdateResponse.Dostorage;
  /**
   * This is a required field if source type is wasabi.
   */
  wasabi?: ImageSourceUpdateResponse.Wasabi;
  /**
   * This is a required field if source type is linode.
   */
  linode?: ImageSourceUpdateResponse.Linode;
  /**
   * This is a required field if source type is backblaze.
   */
  backblaze?: ImageSourceUpdateResponse.Backblaze;
  /**
   * This is a required field if source type is cloudflare.
   */
  cloudflare?: ImageSourceUpdateResponse.Cloudflare;
  /**
   * This is a required field if source type is cloudinary.
   */
  cloudinary?: ImageSourceUpdateResponse.Cloudinary;
  /**
   * This is a required field if source type is azure.
   */
  azure?: ImageSourceUpdateResponse.Azure;
  default_params?: Record<string, unknown>;
  request_headers?: Array<Record<string, unknown>>;
  subdomain?: string;
  is_active?: boolean;
}

export namespace ImageSourceUpdateResponse {
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

export type ImageSourceDeleteResponse = Record<string, unknown>;

export interface ImageSourcePurgeCacheParams {
  /**
   * An array of path of images to purge. It should be provided without any query parameters.
   */
  paths?: Array<string>;
}

export interface ImageSourcePurgeCacheResponse {
  status: string;
}

export interface ImageSourcePurgeParams {
  /**
   * An array of path of images to purge. It should be provided without any query parameters.
   */
  paths: Array<string>;
}

export interface ImageSourcePurgeResponse {
  status: string;
}
export declare namespace ImageSources {
  export {
    type ImageSourceCreateResponse as ImageSourceCreateResponse,
    type ImageSourceListResponse as ImageSourceListResponse,
    type ImageSourceRetrieveResponse as ImageSourceRetrieveResponse,
    type ImageSourceUpdateResponse as ImageSourceUpdateResponse,
    type ImageSourceDeleteResponse as ImageSourceDeleteResponse,
    type ImageSourcePurgeCacheResponse as ImageSourcePurgeCacheResponse,
    type ImageSourcePurgeResponse as ImageSourcePurgeResponse,
    type ImageSourceCreateParams as ImageSourceCreateParams,
    type ImageSourceUpdateParams as ImageSourceUpdateParams,
    type ImageSourcePurgeCacheParams as ImageSourcePurgeCacheParams,
    type ImageSourcePurgeParams as ImageSourcePurgeParams,
  };
}
