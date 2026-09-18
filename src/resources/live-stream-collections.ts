// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class LiveStreamCollections extends APIResource {
  /**
   * List all live stream collections
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<LiveStreamCollectionListResponse>} Successful response
   *
   * @example
   * ```ts
   * const liveStreamCollection = await client.liveStreamCollections.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<LiveStreamCollectionListResponse> {
    return this._client.get('/video/sources/live', options);
  }

  /**
   * Create live stream collection.
   *
   * @param {LiveStreamCollectionCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<LiveStreamCollectionCreateResponse>} Successful response
   *
   * @example
   * ```ts
   * const liveStreamCollection = await client.liveStreamCollections.create({
   *   name: '',
   * });
   * ```
   */
  create(
    body: LiveStreamCollectionCreateParams,
    options?: RequestOptions,
  ): APIPromise<LiveStreamCollectionCreateResponse> {
    return this._client.post('/video/sources/live', { body, ...options });
  }

  /**
   * Update live stream collection.
   *
   * @param {string} liveCollectionID - Live stream collection ID.
   * @param {LiveStreamCollectionUpdateParams} [body] - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<LiveStreamCollectionUpdateResponse>} Get updated collection details.
   *
   * @example
   * ```ts
   * const liveStreamCollection = await client.liveStreamCollections.update('liveCollectionId');
   * ```
   */
  update(
    liveCollectionID: string,
    body: LiveStreamCollectionUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LiveStreamCollectionUpdateResponse> {
    return this._client.post(__scalarPath`/video/sources/live/${liveCollectionID}`, { body, ...options });
  }

  /**
   * Delete the live stream collection.
   *
   * @param {string} liveCollectionID - Live stream collection ID.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<LiveStreamCollectionDeleteResponse>} Successful response
   *
   * @example
   * ```ts
   * const liveStreamCollection = await client.liveStreamCollections.delete('liveCollectionId');
   * ```
   */
  delete(liveCollectionID: string, options?: RequestOptions): APIPromise<LiveStreamCollectionDeleteResponse> {
    return this._client.delete(__scalarPath`/video/sources/live/${liveCollectionID}`, options);
  }
}

export interface LiveStreamCollectionListResponse {
  /**
   * List of all live stream collections
   */
  all_live_sources: Array<LiveStreamCollectionListResponse.AllLiveSource>;
}

export namespace LiveStreamCollectionListResponse {
  export interface AllLiveSource {
    /**
     * Live stream collection name
     */
    name: string;
    /**
     * Creation time in ISO 8601 timestamp
     * @format date-time
     */
    created_at: string;
    /**
     * Update time in ISO 8601 timestamp
     * @format date-time
     */
    updated_at: string;
    /**
     * Video workspace ID that is attached to this collection. Once the live stream completes, the video gets stored in this workspace for long-term storage.
     */
    video_workspace_id: string;
    /**
     * Collection ID
     */
    id: string;
  }
}

export interface LiveStreamCollectionCreateParams {
  /**
   * Collection name
   */
  name: string;
}

export interface LiveStreamCollectionCreateResponse {
  /**
   * LIve stream collection ID
   */
  id: string;
  /**
   * Creation timestamp in ISO 8601 format
   * @format date-time
   */
  created_at: string;
  /**
   * Name of the live stream collection
   */
  name: string;
  /**
   * Update timestamp in ISO 8601 format
   * @format date-time
   */
  updated_at: string;
  /**
   * Video workspace ID attached to this collection.
   */
  video_workspace_id?: string;
}

export interface LiveStreamCollectionUpdateParams {
  /**
   * Live stream collection name
   */
  name?: string;
  /**
   * Video on demand workspace ID
   */
  video_source_id?: string;
}

export interface LiveStreamCollectionUpdateResponse {
  /**
   * LIve stream collection ID
   */
  id: string;
  /**
   * Creation timestamp in ISO 8601 format
   * @format date-time
   */
  created_at: string;
  /**
   * Name of the live stream collection
   */
  name: string;
  /**
   * Update timestamp in ISO 8601 format
   * @format date-time
   */
  updated_at: string;
  /**
   * Video workspace ID attached to this collection.
   */
  video_workspace_id?: string;
}

export type LiveStreamCollectionDeleteResponse = Record<string, unknown>;
export declare namespace LiveStreamCollections {
  export {
    type LiveStreamCollectionListResponse as LiveStreamCollectionListResponse,
    type LiveStreamCollectionCreateResponse as LiveStreamCollectionCreateResponse,
    type LiveStreamCollectionUpdateResponse as LiveStreamCollectionUpdateResponse,
    type LiveStreamCollectionDeleteResponse as LiveStreamCollectionDeleteResponse,
    type LiveStreamCollectionCreateParams as LiveStreamCollectionCreateParams,
    type LiveStreamCollectionUpdateParams as LiveStreamCollectionUpdateParams,
  };
}
