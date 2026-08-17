// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class VideoWorkspaces extends APIResource {
  /**
   * This endpoint list video workspace which are assigned to the user or token.
   *
   * @param {VideoWorkspaceListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<VideoWorkspaceListResponse>} 200
   *
   * @example
   * ```ts
   * const list = await client.videoWorkspaces.list({
   *   offset: '0',
   *   size: '10',
   * });
   * ```
   */
  list(
    query: VideoWorkspaceListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VideoWorkspaceListResponse> {
    return this._client.get('/video/workspaces', { query, ...options });
  }

  /**
   * Video workspaces are top-level entities in Gumlet. You can use them to organize videos for different teams/departments or use cases.
   *
   * @param {VideoWorkspaceCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<VideoWorkspaceCreateResponse>} 200
   *
   * @example
   * ```ts
   * const create = await client.videoWorkspaces.create({
   *   names: 'zoom-workspace',
   *   type: 'zoom',
   *   zoom: { secret: 'yourSecret' },
   * });
   * ```
   */
  create(
    body: VideoWorkspaceCreateParams,
    options?: RequestOptions,
  ): APIPromise<VideoWorkspaceCreateResponse> {
    return this._client.post('/video/workspaces', { body, ...options });
  }

  /**
   * This endpoint allows users to update video workspace that has previously been created.
   *
   * @param {string} workspaceID
   * @param {VideoWorkspaceUpdateParams} [body] - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<VideoWorkspaceUpdateResponse>} 200
   *
   * @example
   * ```ts
   * const update = await client.videoWorkspaces.update('workspaceId');
   * ```
   */
  update(
    workspaceID: string,
    body: VideoWorkspaceUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VideoWorkspaceUpdateResponse> {
    return this._client.post(__scalarPath`/video/workspaces/${workspaceID}`, { body, ...options });
  }

  /**
   * This endpoint get all the data of video workspace that has previously been created.
   *
   * @param {string} workspaceID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<VideoWorkspaceRetrieveResponse>} 200
   *
   * @example
   * ```ts
   * const retrieve = await client.videoWorkspaces.retrieve('workspaceId');
   * ```
   */
  retrieve(workspaceID: string, options?: RequestOptions): APIPromise<VideoWorkspaceRetrieveResponse> {
    return this._client.get(__scalarPath`/video/workspaces/${workspaceID}`, options);
  }

  /**
   * This endpoint removes a video workspace given its unique asset id. All the asset in workspace will be removed from storage as well, associated URLs will be inaccessible.
   *
   * @param {string} workspaceID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<VideoWorkspaceDeleteResponse>} 200
   *
   * @example
   * ```ts
   * const delete_ = await client.videoWorkspaces.delete('workspaceId');
   * ```
   */
  delete(workspaceID: string, options?: RequestOptions): APIPromise<VideoWorkspaceDeleteResponse> {
    return this._client.delete(__scalarPath`/video/workspaces/${workspaceID}`, options);
  }
}

export interface VideoWorkspaceListParams {
  /**
   * @default 0
   */
  offset?: string;
  /**
   * @default 10
   */
  size?: string;
}

export interface VideoWorkspaceListResponse {
  all_sources?: Array<VideoWorkspaceListResponse.AllSource>;
}

export namespace VideoWorkspaceListResponse {
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

export interface VideoWorkspaceCreateParams {
  /**
   * Specify a text string or identifier for the workspace.
   */
  name: string;
  /**
   * Video workspaces are top-level entities in Gumlet. You can use them to organize videos for different teams/departments or use cases.
   */
  type:
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
    | 'cloudflare'
    | 'zoom';
  /**
   * Gumlet provides the functionality of creating multiple video assets using the same set of parameters.
   */
  default_profile_id?: string;
  /**
   * The five to ten character unique identifier of the Gumlet Insight Property available on the dashboard.
   */
  insight_property_id?: string;
  /**
   * Gumlet provides multiple options for securing your video playback.
   */
  video_protection?: VideoWorkspaceCreateParams.VideoProtection;
  /**
   * This is a required field if workspace type is aws.
   */
  aws?: VideoWorkspaceCreateParams.Aws;
  /**
   * This is a required field if workspace type is proxy.
   */
  proxy?: VideoWorkspaceCreateParams.Proxy;
  /**
   * This is a required field if workspace type is gcs.
   */
  gcs?: VideoWorkspaceCreateParams.Gcs;
  /**
   * This is a required field if workspace type is dostorage.
   */
  dostorage?: VideoWorkspaceCreateParams.Dostorage;
  /**
   * This is a required field if workspace type is wasabi.
   */
  wasabi?: VideoWorkspaceCreateParams.Wasabi;
  /**
   * This is a required field if workspace type is cloudinary.
   */
  cloudinary?: VideoWorkspaceCreateParams.Cloudinary;
  /**
   * This is a required field if workspace type is azure.
   */
  azure?: VideoWorkspaceCreateParams.Azure;
  /**
   * This is a required field if workspace type is linode.
   */
  linode?: VideoWorkspaceCreateParams.Linode;
  /**
   * This is a required field if workspace type is backblaze.
   */
  backblaze?: VideoWorkspaceCreateParams.Backblaze;
  /**
   * This is a required field if workspace type is cloudflare.
   */
  cloudflare?: VideoWorkspaceCreateParams.Cloudflare;
  /**
   * This is a required field if workspace type is zoom.
   */
  zoom?: VideoWorkspaceCreateParams.Zoom;
}

export namespace VideoWorkspaceCreateParams {
  export interface VideoProtection {
    /**
     * @default false
     */
    signed_url?: boolean;
    signed_url_secret?: string;
    /**
     * Example: ["IN","USA"]
     */
    blacklisted_countries?: Array<string>;
    whitelisted_referrers?: string;
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

  export interface Zoom {
    secret: string;
  }
}

export interface VideoWorkspaceCreateResponse {
  id?: string;
  name?: string;
  type?: string;
  created_at?: string;
  updated_at?: string;
  video_protection?: Record<string, unknown>;
  player_config?: VideoWorkspaceCreateResponse.PlayerConfig;
  default_profile_id?: string;
  insight_property_id?: string;
  zoom?: VideoWorkspaceCreateResponse.Zoom;
  embed_details?: VideoWorkspaceCreateResponse.EmbedDetails;
  folders?: Array<unknown>;
  channel_settings?: VideoWorkspaceCreateResponse.ChannelSettings;
}

export namespace VideoWorkspaceCreateResponse {
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

export interface VideoWorkspaceUpdateParams {
  /**
   * video workspace name
   */
  name?: string;
  /**
   * Gumlet provides the functionality of creating multiple video assets using the same set of parameters.
   */
  default_profile_id?: string;
  /**
   * cname for channel
   */
  temp_cname?: Array<string>;
  /**
   * The five to ten character unique identifier of the Gumlet Insight Property available on the dashboard.
   */
  insight_property_id?: string;
  /**
   * Configure player settings for this playlist, it overrides the setting set on workspace.
   */
  player_config?: VideoWorkspaceUpdateParams.PlayerConfig;
  /**
   * Gumlet provides multiple options for securing your video playback.
   */
  video_protection?: VideoWorkspaceUpdateParams.VideoProtection;
  /**
   * Configurations to set various channel settings.
   */
  channel_settings?: VideoWorkspaceUpdateParams.ChannelSettings;
  /**
   * Video workspaces are top-level entities in Gumlet. You can use them to organize videos for different teams/departments or use cases.
   */
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
    | 'cloudflare'
    | 'zoom';
  /**
   * This is a required field if workspace type is webfolder.
   */
  webfolder?: VideoWorkspaceUpdateParams.Webfolder;
  /**
   * This is a required field if workspace type is aws.
   */
  aws?: VideoWorkspaceUpdateParams.Aws;
  /**
   * This is a required field if workspace type is proxy.
   */
  proxy?: VideoWorkspaceUpdateParams.Proxy;
  /**
   * This is a required field if workspace type is gcs.
   */
  gcs?: VideoWorkspaceUpdateParams.Gcs;
  /**
   * This is a required field if workspace type is dostorage.
   */
  dostorage?: VideoWorkspaceUpdateParams.Dostorage;
  /**
   * This is a required field if workspace type is wasabi.
   */
  wasabi?: VideoWorkspaceUpdateParams.Wasabi;
  /**
   * This is a required field if workspace type is linode.
   */
  linode?: VideoWorkspaceUpdateParams.Linode;
  /**
   * This is a required field if workspace type is backblaze.
   */
  backblaze?: VideoWorkspaceUpdateParams.Backblaze;
  /**
   * This is a required field if workspace type is cloudflare.
   */
  cloudflare?: VideoWorkspaceUpdateParams.Cloudflare;
  /**
   * This is a required field if workspace type is cloudinary.
   */
  cloudinary?: VideoWorkspaceUpdateParams.Cloudinary;
  /**
   * This is a required field if workspace type is azure.
   */
  azure?: VideoWorkspaceUpdateParams.Azure;
  /**
   * This is a required field if workspace type is zoom.
   */
  zoom?: VideoWorkspaceUpdateParams.Zoom;
}

export namespace VideoWorkspaceUpdateParams {
  export interface PlayerConfig {
    preload?: boolean;
    autoplay?: boolean;
    disable_seek?: boolean;
    disable_player_controls?: boolean;
    powered_by_gumlet_overlay?: boolean;
    allow_drm_protected_videos?: boolean;
    loop?: boolean;
    player_color?: string;
    include_seo?: boolean;
    subtitle_enabled?: boolean;
    pixel_tags?: Record<string, unknown>;
    /**
     * @format int32
     */
    logo_width?: number;
    /**
     * @format int32
     */
    logo_height?: number;
    dynamic_watermark?: boolean;
    /**
     * @format int32
     */
    watermark_font_size?: number;
    watermark_font_color?: string;
    watermark_bg_color?: string;
    /**
     * @format int32
     */
    watermark_interval?: number;
    cast?: boolean;
    show_video_title?: boolean;
  }

  export interface VideoProtection {
    /**
     * @default false
     */
    signed_url?: boolean;
    signed_url_secret?: string;
    /**
     * Example: ["IN","USA"]
     */
    blacklisted_countries?: Array<string>;
    whitelisted_referrers?: string;
  }

  export interface ChannelSettings {
    /**
     * @default false
     */
    active?: boolean;
    description?: string;
    title?: string;
    privacy_type?: '"public"' | '"private"' | '"password-protected"';
    /**
     * Video asset id, the asset should be in the same workspace as channel
     */
    featured_video?: string;
    /**
     * under channel_settings privacy_type must be "password-protected". Password length should be greater than 5 and lesser than 100 characters.
     */
    password?: string;
  }

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

  export interface Zoom {
    secret: string;
  }
}

export interface VideoWorkspaceUpdateResponse {
  id?: string;
  name?: string;
  type?: string;
  created_at?: string;
  updated_at?: string;
  video_protection?: VideoWorkspaceUpdateResponse.VideoProtection;
  player_config?: VideoWorkspaceUpdateResponse.PlayerConfig;
  default_profile_id?: string;
  insight_property_id?: string;
  aws?: VideoWorkspaceUpdateResponse.Aws;
  embed_details?: VideoWorkspaceUpdateResponse.EmbedDetails;
  folders?: Array<string>;
  channel_settings?: VideoWorkspaceUpdateResponse.ChannelSettings;
}

export namespace VideoWorkspaceUpdateResponse {
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

export type VideoWorkspaceRetrieveResponse = Record<string, unknown>;

export type VideoWorkspaceDeleteResponse = Record<string, unknown>;
export declare namespace VideoWorkspaces {
  export {
    type VideoWorkspaceListResponse as VideoWorkspaceListResponse,
    type VideoWorkspaceCreateResponse as VideoWorkspaceCreateResponse,
    type VideoWorkspaceUpdateResponse as VideoWorkspaceUpdateResponse,
    type VideoWorkspaceRetrieveResponse as VideoWorkspaceRetrieveResponse,
    type VideoWorkspaceDeleteResponse as VideoWorkspaceDeleteResponse,
    type VideoWorkspaceListParams as VideoWorkspaceListParams,
    type VideoWorkspaceCreateParams as VideoWorkspaceCreateParams,
    type VideoWorkspaceUpdateParams as VideoWorkspaceUpdateParams,
  };
}
