// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';
import { path as __scalarPath } from '../internal/utils/path';

export class LiveStreamAssets extends APIResource {
  /**
   * A live asset refers to a media content/video that is live-streamed through Gumlet. This endpoint creates a live streaming asset allowing users to live stream a video that will be pushed to Gumlet.
   *
   * @param {LiveStreamAssetCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<LiveStreamAssetCreateResponse>} 200
   *
   * @example
   * ```ts
   * const create = await client.liveStreamAssets.create({
   *   live_source_id: '',
   *   resolution: '',
   * });
   * ```
   */
  create(
    body: LiveStreamAssetCreateParams,
    options?: RequestOptions,
  ): APIPromise<LiveStreamAssetCreateResponse> {
    return this._client.post('/video/live/assets', { body, ...options });
  }

  /**
   * A live asset refers to a media content/video that is live-streamed through Gumlet. This endpoint allows user to update a live streaming asset.
   *
   * @param {LiveStreamAssetUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<LiveStreamAssetUpdateResponse>} 200
   *
   * @example
   * ```ts
   * const update = await client.liveStreamAssets.update({
   *   live_asset_id: '',
   * });
   * ```
   */
  update(
    body: LiveStreamAssetUpdateParams,
    options?: RequestOptions,
  ): APIPromise<LiveStreamAssetUpdateResponse> {
    return this._client.post('/video/live/assets/update', { body, ...options });
  }

  /**
   * This endpoint retrieves the details of a live video asset that has previously been created.
   *
   * @param {string} liveAssetID - An live asset id for the previously created asset.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<LiveStreamAssetRetrieveStatusResponse>} 200
   *
   * @example
   * ```ts
   * const retrieveStatus = await client.liveStreamAssets.retrieveStatus('liveAssetId');
   * ```
   */
  retrieveStatus(
    liveAssetID: string,
    options?: RequestOptions,
  ): APIPromise<LiveStreamAssetRetrieveStatusResponse> {
    return this._client.get(__scalarPath`/video/live/assets/${liveAssetID}`, options);
  }

  /**
   * This endpoint removes a live asset given its unique live asset id. The live asset will be removed from storage as well, associated URLs will be inaccessible.
   *
   * @param {string} liveAssetID - Live asset id of the live asset which needs to be deleted.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<LiveStreamAssetDeleteResponse>} 204
   *
   * @example
   * ```ts
   * const delete_ = await client.liveStreamAssets.delete('liveAssetId');
   * ```
   */
  delete(liveAssetID: string, options?: RequestOptions): APIPromise<LiveStreamAssetDeleteResponse> {
    return this._client.delete(__scalarPath`/video/live/assets/${liveAssetID}`, options);
  }

  /**
   * This endpoint allows marking live assets complete. Once the live asset is marked complete, it can no longer be used to ingest the live stream on Gumlet.
   *
   * @param {string} liveAssetID - Live asset id of the live stream which needs to be completed.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<LiveStreamAssetCompleteResponse>} 200
   *
   * @example
   * ```ts
   * const complete = await client.liveStreamAssets.complete('liveAssetId');
   * ```
   */
  complete(liveAssetID: string, options?: RequestOptions): APIPromise<LiveStreamAssetCompleteResponse> {
    return this._client.post(__scalarPath`/video/live/assets/${liveAssetID}/complete`, options);
  }

  /**
   * This endpoint lists live assets on the basis of `status` for the given `live_source_id`.
   *
   * @param {string} liveSourceID - Gumlet live source/collection id.
   * @param {LiveStreamAssetFilterParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<LiveStreamAssetFilterResponse>} 200
   *
   * @example
   * ```ts
   * const filter = await client.liveStreamAssets.filter('liveSourceId');
   * ```
   */
  filter(
    liveSourceID: string,
    query: LiveStreamAssetFilterParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LiveStreamAssetFilterResponse> {
    return this._client.get(__scalarPath`/video/live/assets/list/${liveSourceID}`, { query, ...options });
  }

  /**
   * Start a live stream.
   *
   * @param {string} liveAssetID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   *
   * @example
   * ```ts
   * await client.liveStreamAssets.postVideoliveassetsID('liveAssetId');
   * ```
   */
  postVideoliveassetsID(liveAssetID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(__scalarPath`/video/live/assets/${liveAssetID}/start`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Generate presigned upload URLs for live stream thumbnails. Supported thumbnail states are `preparing`, `disconnected`, and `end`.
   *
   * @param {LiveStreamAssetUploadParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<LiveStreamAssetUploadResponse>} 200
   *
   * @example
   * ```ts
   * const upload = await client.liveStreamAssets.upload({
   *   live_asset_id: '68c406b147f9ad0c0d584ce2',
   *   statuses: ['preparing', 'disconnected'],
   * });
   * ```
   */
  upload(
    body: LiveStreamAssetUploadParams,
    options?: RequestOptions,
  ): APIPromise<LiveStreamAssetUploadResponse> {
    return this._client.post('/video/live/assets/thumbnail/upload', { body, ...options });
  }

  /**
   * This endpoint retrieves the history of a live video asset that has previously been created.
   *
   * @param {string} liveAssetID - An live asset id for the previously created asset.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<LiveStreamAssetListStatusCopyResponse>} 200
   *
   * @example
   * ```ts
   * const listStatusCopy = await client.liveStreamAssets.listStatusCopy('liveAssetId');
   * ```
   */
  listStatusCopy(
    liveAssetID: string,
    options?: RequestOptions,
  ): APIPromise<LiveStreamAssetListStatusCopyResponse> {
    return this._client.get(__scalarPath`/video/live/assets/${liveAssetID}/history`, options);
  }
}

export interface LiveStreamAssetCreateParams {
  /**
   * Gumlet live video source/collection id.
   */
  live_source_id: string;
  /**
   * Required resolutions in HLS delivery format for live stream. Can be an array of string out of the following values:  `240p`, `360p`, `480p`, `540p`, `720p`, and `1080p`. Re-sized rendition will retain the input aspect ratio.
   */
  resolution: string;
  /**
   * Your live stream asset title
   */
  title?: string;
  /**
   * Creates <code>MP4</code> version for download purpose.
   */
  mp4_access?: boolean;
  orientation?: 'landscape' | 'potrait';
  /**
   * @format date-time
   */
  start_at?: string;
}

export interface LiveStreamAssetCreateResponse {
  status?: string;
  stream_key?: string;
  live_asset_id?: string;
  live_video_source_id?: string;
  input?: LiveStreamAssetCreateResponse.Input;
  stream_url?: string;
  output?: LiveStreamAssetCreateResponse.Output;
  thumbnail?: LiveStreamAssetCreateResponse.Thumbnail;
  /**
   * @default 0
   */
  created_at?: number;
  /**
   * @default 0
   */
  updated_at?: number;
  vod_asset_id?: string;
}

export namespace LiveStreamAssetCreateResponse {
  export interface Input {
    resolution?: Array<string>;
    title?: string;
  }

  export interface Output {
    playback_url?: string;
    recording_playback_url?: string;
    recording_dash_playback_url?: string;
  }

  export interface Thumbnail {
    preparing?: string;
    disconnected?: string;
    end?: string;
  }
}

export interface LiveStreamAssetUpdateParams {
  /**
   * Gumlet live video asset id.
   */
  live_asset_id: string;
  /**
   * Your live stream asset title
   */
  title?: string;
  /**
   * @format date-time
   */
  start_at?: string;
}

export interface LiveStreamAssetUpdateResponse {
  status?: string;
  stream_key?: string;
  live_asset_id?: string;
  live_video_source_id?: string;
  input?: LiveStreamAssetUpdateResponse.Input;
  stream_url?: string;
  output?: LiveStreamAssetUpdateResponse.Output;
  thumbnail?: LiveStreamAssetUpdateResponse.Thumbnail;
  /**
   * @default 0
   */
  created_at?: number;
  /**
   * @default 0
   */
  updated_at?: number;
  vod_asset_id?: string;
}

export namespace LiveStreamAssetUpdateResponse {
  export interface Input {
    resolution?: Array<string>;
    title?: string;
  }

  export interface Output {
    playback_url?: string;
    recording_playback_url?: string;
    recording_dash_playback_url?: string;
  }

  export interface Thumbnail {
    preparing?: string;
    disconnected?: string;
    end?: string;
  }
}

export interface LiveStreamAssetRetrieveStatusResponse {
  status?: string;
  stream_key?: string;
  live_asset_id?: string;
  live_video_source_id?: string;
  input?: LiveStreamAssetRetrieveStatusResponse.Input;
  stream_url?: string;
  output?: LiveStreamAssetRetrieveStatusResponse.Output;
  thumbnail?: LiveStreamAssetRetrieveStatusResponse.Thumbnail;
  /**
   * @default 0
   */
  created_at?: number;
  /**
   * @default 0
   */
  updated_at?: number;
  vod_asset_id?: string;
}

export namespace LiveStreamAssetRetrieveStatusResponse {
  export interface Input {
    resolution?: Array<string>;
    title?: string;
  }

  export interface Output {
    playback_url?: string;
    recording_playback_url?: string;
    recording_dash_playback_url?: string;
  }

  export interface Thumbnail {
    preparing?: string;
    disconnected?: string;
    end?: string;
  }
}

export type LiveStreamAssetDeleteResponse = Record<string, unknown>;

export type LiveStreamAssetCompleteResponse = Record<string, unknown>;

export interface LiveStreamAssetFilterParams {
  /**
   * To filter live assets on the basis of their current status. Can be specified as a single status value string or comma-separated status values. The status value can be one of `created`, `active`, `complete`, `disconnected`, `errored`, and `deleted`.
   */
  status?: string;
  /**
   * Offset value for a paginated list of assets.
   * @format int32
   */
  offset?: number;
  /**
   * Page size for the paginated list.
   * @format int32
   */
  size?: number;
}

export interface LiveStreamAssetFilterResponse {
  all_live_assets?: Array<LiveStreamAssetFilterResponse.AllLiveAsset>;
  /**
   * @default 0
   */
  total_live_asset_count?: number;
  /**
   * @default 0
   */
  current_offset?: number;
}

export namespace LiveStreamAssetFilterResponse {
  export interface AllLiveAsset {
    status?: string;
    stream_key?: string;
    live_asset_id?: string;
    live_video_source_id?: string;
    input?: AllLiveAsset.Input;
    stream_url?: string;
    output?: AllLiveAsset.Output;
    thumbnail?: AllLiveAsset.Thumbnail;
    /**
     * @default 0
     */
    created_at?: number;
    /**
     * @default 0
     */
    updated_at?: number;
    deleted_at?: number;
  }

  export namespace AllLiveAsset {
    export interface Input {
      resolution?: Array<string>;
      title?: string;
    }

    export interface Output {
      playback_url?: string;
      recording_playback_url?: string;
      recording_dash_playback_url?: string;
    }

    export interface Thumbnail {
      preparing?: string;
      disconnected?: string;
      end?: string;
    }
  }
}

export interface LiveStreamAssetUploadParams {
  /**
   * Gumlet live video asset id.
   */
  live_asset_id: string;
  /**
   * Thumbnail states to upload. You can send an array or a comma-separated string.
   */
  statuses: Array<'preparing' | 'disconnected' | 'end'> | string;
}

export interface LiveStreamAssetUploadResponse {
  message?: string;
  presigned_upload_urls?: LiveStreamAssetUploadResponse.PresignedUploadURLs;
}

export namespace LiveStreamAssetUploadResponse {
  export interface PresignedUploadURLs {
    preparing?: string;
    disconnected?: string;
    end?: string;
  }
}

export interface LiveStreamAssetListStatusCopyResponse {
  status?: string;
  stream_key?: string;
  live_asset_id?: string;
  live_video_source_id?: string;
  input?: LiveStreamAssetListStatusCopyResponse.Input;
  stream_url?: string;
  output?: LiveStreamAssetListStatusCopyResponse.Output;
  /**
   * @default 0
   */
  created_at?: number;
  /**
   * @default 0
   */
  updated_at?: number;
}

export namespace LiveStreamAssetListStatusCopyResponse {
  export interface Input {
    resolution?: Array<string>;
  }

  export interface Output {
    playback_url?: string;
  }
}
export declare namespace LiveStreamAssets {
  export {
    type LiveStreamAssetCreateResponse as LiveStreamAssetCreateResponse,
    type LiveStreamAssetUpdateResponse as LiveStreamAssetUpdateResponse,
    type LiveStreamAssetRetrieveStatusResponse as LiveStreamAssetRetrieveStatusResponse,
    type LiveStreamAssetDeleteResponse as LiveStreamAssetDeleteResponse,
    type LiveStreamAssetCompleteResponse as LiveStreamAssetCompleteResponse,
    type LiveStreamAssetFilterResponse as LiveStreamAssetFilterResponse,
    type LiveStreamAssetUploadResponse as LiveStreamAssetUploadResponse,
    type LiveStreamAssetListStatusCopyResponse as LiveStreamAssetListStatusCopyResponse,
    type LiveStreamAssetCreateParams as LiveStreamAssetCreateParams,
    type LiveStreamAssetUpdateParams as LiveStreamAssetUpdateParams,
    type LiveStreamAssetFilterParams as LiveStreamAssetFilterParams,
    type LiveStreamAssetUploadParams as LiveStreamAssetUploadParams,
  };
}
