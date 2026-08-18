// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';
import { path as __scalarPath } from '../internal/utils/path';

export class VideoPlaylists extends APIResource {
  /**
   * Create new playlist inside video wprkspace
   *
   * @param {VideoPlaylistCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<VideoPlaylistCreateResponse>} 200
   *
   * @example
   * ```ts
   * const create = await client.videoPlaylists.create({
   *   title: 'Playlist-Title',
   *   description: 'This is description for playlist.',
   *   collection_id: '{{video-source-id}}',
   * });
   * ```
   */
  create(body: VideoPlaylistCreateParams, options?: RequestOptions): APIPromise<VideoPlaylistCreateResponse> {
    return this._client.post('/video/playlist', { body, ...options });
  }

  /**
   * Get all playlists for given workspace
   *
   * @param {VideoPlaylistListAllParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<VideoPlaylistListAllResponse>} 200
   *
   * @example
   * ```ts
   * const listAll = await client.videoPlaylists.listAll();
   * ```
   */
  listAll(
    query: VideoPlaylistListAllParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VideoPlaylistListAllResponse> {
    return this._client.get('/video/playlist', { query, ...options });
  }

  /**
   * This operation adds a single asset or a list of assets to a playlist.
   *
   * @param {string} playlistID - Playlist ID in which the asset needs to be added.
   * @param {VideoPlaylistCreateAssetToParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<VideoPlaylistCreateAssetToResponse>} 200
   *
   * @example
   * ```ts
   * const createAssetTo = await client.videoPlaylists.createAssetTo('playlistId', {
   *   asset_list: [
   *     { asset_id: '6508790283e4d60611846790' },
   *     { position: 1, asset_id: '650878f883e4d6061184677d' },
   *     { asset_id: '650878de83e4d6061184676a' },
   *     { position: 2, asset_id: '650878d883e4d60611846757' },
   *     { position: 3, asset_id: '65578dd87eebc22dcdd549a2' },
   *   ],
   * });
   * ```
   */
  createAssetTo(
    playlistID: string,
    body: VideoPlaylistCreateAssetToParams,
    options?: RequestOptions,
  ): APIPromise<VideoPlaylistCreateAssetToResponse> {
    return this._client.post(__scalarPath`/video/playlist/${playlistID}/asset`, { body, ...options });
  }

  /**
   * Removed an asset or list of assets from a given playlist.
   *
   * @param {string} playlistID - Playlist ID that is to be deleted.
   * @param {VideoPlaylistDeleteAssetFromParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<VideoPlaylistDeleteAssetFromResponse>} 200
   *
   * @example
   * ```ts
   * const deleteAssetFrom = await client.videoPlaylists.deleteAssetFrom('playlistId', {
   *   delete_list: ['6508790783e4d606118467a3'],
   * });
   * ```
   */
  deleteAssetFrom(
    playlistID: string,
    body: VideoPlaylistDeleteAssetFromParams,
    options?: RequestOptions,
  ): APIPromise<VideoPlaylistDeleteAssetFromResponse> {
    return this._client.delete(__scalarPath`/video/playlist/${playlistID}/asset`, { body, ...options });
  }

  /**
   * This endpoint allows you to update playlist name, channel visibility, or playlist order on a channel page.
   *
   * @param {string} playlistID - ID for the playlist to update.
   * @param {VideoPlaylistUpdateParams} [body] - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<VideoPlaylistUpdateResponse>} 200
   *
   * @example
   * ```ts
   * const update = await client.videoPlaylists.update('playlistId');
   * ```
   */
  update(
    playlistID: string,
    body: VideoPlaylistUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VideoPlaylistUpdateResponse> {
    return this._client.post(__scalarPath`/video/playlist/${playlistID}`, { body, ...options });
  }

  /**
   * Deletes this playlist.
   *
   * @param {string} playlistID - Playlist ID that is to be deleted.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   *
   * @example
   * ```ts
   * await client.videoPlaylists.deleteID('playlistId');
   * ```
   */
  deleteID(playlistID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(__scalarPath`/video/playlist/${playlistID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get a list of all assets inside playlist. You can choose in which order are assets returned.
   *
   * @param {string} playlistID - ID of playlist in which you need to list assets.
   * @param {VideoPlaylistListAssetsParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<VideoPlaylistListAssetsResponse>} 200
   *
   * @example
   * ```ts
   * const listAssets = await client.videoPlaylists.listAssets('playlistId', {
   *   sort_order: 1,
   *   page_number: 1,
   *   page_size: '10',
   * });
   * ```
   */
  listAssets(
    playlistID: string,
    query: VideoPlaylistListAssetsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VideoPlaylistListAssetsResponse> {
    return this._client.get(__scalarPath`/video/playlist/${playlistID}/assets`, { query, ...options });
  }

  /**
   * Reorder videos inside a playlist either by moving a single asset to a position or by sorting the playlist by title or created date.
   *
   * @param {string} playlistID - Playlist id.
   * @param {VideoPlaylistReorderAssets2Params} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<VideoPlaylistReorderAssets2Response>} 200
   *
   * @example
   * ```ts
   * const reorderAssets2 = await client.videoPlaylists.reorderAssets2('playlistId', {
   *   asset_id: '6e82bf783e88be000ab45ed2',
   *   page_number: 1,
   *   page_size: 10,
   *   asset_position: 0,
   * });
   * ```
   */
  reorderAssets2(
    playlistID: string,
    body: VideoPlaylistReorderAssets2Params,
    options?: RequestOptions,
  ): APIPromise<VideoPlaylistReorderAssets2Response> {
    return this._client.post(__scalarPath`/video/playlists/${playlistID}/reorder`, { body, ...options });
  }
}

export interface VideoPlaylistCreateParams {
  collection_id: string;
  title: string;
  description?: string;
}

export interface VideoPlaylistCreateResponse {
  id?: string;
  collection_id?: string;
  title?: string;
  description?: string;
  player_config?: VideoPlaylistCreateResponse.PlayerConfig;
}

export namespace VideoPlaylistCreateResponse {
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
}

export interface VideoPlaylistListAllParams {
  /**
   * Video Collection ID
   */
  collection_id?: string;
}

export type VideoPlaylistListAllResponse =
  Array<VideoPlaylistListAllResponse.VideoPlaylistListAllResponseItem>;

export namespace VideoPlaylistListAllResponse {
  export interface VideoPlaylistListAllResponseItem {
    id?: string;
    collection_id?: string;
    title?: string;
    description?: string;
    player_config?: Record<string, unknown>;
  }
}

export interface VideoPlaylistCreateAssetToParams {
  asset_list: Array<VideoPlaylistCreateAssetToParams.AssetList>;
}

export namespace VideoPlaylistCreateAssetToParams {
  export interface AssetList {
    asset_id?: string;
    /**
     * Optional, if not provided asset will added at the back/last of playlist
     * @format int32
     */
    position?: number;
  }
}

export interface VideoPlaylistCreateAssetToResponse {
  /**
   * @default true
   */
  success?: boolean;
}

export interface VideoPlaylistDeleteAssetFromParams {
  /**
   * Array of video asset ids.
   */
  delete_list: Array<string>;
}

export interface VideoPlaylistDeleteAssetFromResponse {
  /**
   * @default true
   */
  success?: boolean;
}

export interface VideoPlaylistUpdateParams {
  title?: string;
  description?: string;
  /**
   * Playlists have order in which they will be shown on the channel page.
   * @format int32
   */
  position?: number;
  /**
   * Configure player settings for this playlist, it overrides the setting set on collection.
   */
  player_config?: VideoPlaylistUpdateParams.PlayerConfig;
  /**
   * If true then playlist will be visible on channel page.
   * @default false
   */
  channel_visibility?: boolean;
}

export namespace VideoPlaylistUpdateParams {
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
  }
}

export interface VideoPlaylistUpdateResponse {
  id?: string;
  collection_id?: string;
  title?: string;
  description?: string;
  player_config?: VideoPlaylistUpdateResponse.PlayerConfig;
}

export namespace VideoPlaylistUpdateResponse {
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
}

export interface VideoPlaylistListAssetsParams {
  /**
   * Optional, if sort_by is set to asset_title it will sorted by title name. Otherwise order in which user added the assets in playlist.
   */
  sort_by?: string;
  /**
   * -1 or 1
   * @default 1
   * @format int32
   */
  sort_order?: number;
  /**
   * Optional, Minimun 1
   * @default 1
   * @format int32
   */
  page_number?: number;
  /**
   * Optional, Minimun 10
   * @default 10
   */
  page_size?: string;
}

export interface VideoPlaylistListAssetsResponse {
  asset_list?: Array<VideoPlaylistListAssetsResponse.AssetList>;
  /**
   * @default true
   */
  has_next_page?: boolean;
  /**
   * @default 0
   */
  next_page?: number;
}

export namespace VideoPlaylistListAssetsResponse {
  export interface AssetList {
    id?: string;
    title?: string;
    description?: string;
    status?: string;
    created_at?: string;
    /**
     * @default 0
     */
    duration?: number;
  }
}

export type VideoPlaylistReorderAssets2Params =
  | VideoPlaylistReorderAssets2Params.Variant0
  | VideoPlaylistReorderAssets2Params.Variant1;

export declare namespace VideoPlaylistReorderAssets2Params {
  export interface Variant0 {
    /**
     * Asset id to move.
     */
    asset_id: string;
    /**
     * Current playlist page number.
     * @minimum 1
     */
    page_number: number;
    /**
     * Playlist page size used by the caller.
     * @minimum 1
     * @maximum 200
     */
    page_size: number;
    /**
     * Zero-based position inside the provided page.
     * @minimum 0
     */
    asset_position: number;
  }

  export interface Variant1 {
    sort_by: 'title' | 'created_at';
    sort_order: 'asc' | 'desc';
  }
}

export interface VideoPlaylistReorderAssets2Response {
  /**
   * @default true
   */
  success?: boolean;
  asset_list?: Array<string>;
}
export declare namespace VideoPlaylists {
  export {
    type VideoPlaylistCreateResponse as VideoPlaylistCreateResponse,
    type VideoPlaylistListAllResponse as VideoPlaylistListAllResponse,
    type VideoPlaylistCreateAssetToResponse as VideoPlaylistCreateAssetToResponse,
    type VideoPlaylistDeleteAssetFromResponse as VideoPlaylistDeleteAssetFromResponse,
    type VideoPlaylistUpdateResponse as VideoPlaylistUpdateResponse,
    type VideoPlaylistListAssetsResponse as VideoPlaylistListAssetsResponse,
    type VideoPlaylistReorderAssets2Response as VideoPlaylistReorderAssets2Response,
    type VideoPlaylistCreateParams as VideoPlaylistCreateParams,
    type VideoPlaylistListAllParams as VideoPlaylistListAllParams,
    type VideoPlaylistCreateAssetToParams as VideoPlaylistCreateAssetToParams,
    type VideoPlaylistDeleteAssetFromParams as VideoPlaylistDeleteAssetFromParams,
    type VideoPlaylistUpdateParams as VideoPlaylistUpdateParams,
    type VideoPlaylistListAssetsParams as VideoPlaylistListAssetsParams,
    type VideoPlaylistReorderAssets2Params as VideoPlaylistReorderAssets2Params,
  };
}
