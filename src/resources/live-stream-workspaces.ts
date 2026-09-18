// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class LiveStreamWorkspaces extends APIResource {
  /**
   * List all live stream workspaces.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<LiveStreamWorkspaceListResponse>} Successful response
   *
   * @example
   * ```ts
   * const liveStreamWorkspace = await client.liveStreamWorkspaces.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<LiveStreamWorkspaceListResponse> {
    return this._client.get('/video/sources/live', options);
  }

  /**
   * Create live stream workspace.
   *
   * @param {LiveStreamWorkspaceCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<LiveStreamWorkspaceCreateResponse>} Successful response
   *
   * @example
   * ```ts
   * const liveStreamWorkspace = await client.liveStreamWorkspaces.create({
   *   name: '',
   * });
   * ```
   */
  create(
    body: LiveStreamWorkspaceCreateParams,
    options?: RequestOptions,
  ): APIPromise<LiveStreamWorkspaceCreateResponse> {
    return this._client.post('/video/sources/live', { body, ...options });
  }

  /**
   * Update live stream workspace.
   *
   * @param {string} liveWorkspaceID - Live stream workspace ID.
   * @param {LiveStreamWorkspaceUpdateParams} [body] - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<LiveStreamWorkspaceUpdateResponse>} Get updated collection details.
   *
   * @example
   * ```ts
   * const liveStreamWorkspace = await client.liveStreamWorkspaces.update('liveWorkspaceId');
   * ```
   */
  update(
    liveWorkspaceID: string,
    body: LiveStreamWorkspaceUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LiveStreamWorkspaceUpdateResponse> {
    return this._client.post(__scalarPath`/video/sources/live/${liveWorkspaceID}`, { body, ...options });
  }

  /**
   * Delete the live stream workspace.
   *
   * @param {string} liveWorkspaceID - Live stream workspace ID.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<LiveStreamWorkspaceDeleteResponse>} Successful response
   *
   * @example
   * ```ts
   * const liveStreamWorkspace = await client.liveStreamWorkspaces.delete('liveWorkspaceId');
   * ```
   */
  delete(liveWorkspaceID: string, options?: RequestOptions): APIPromise<LiveStreamWorkspaceDeleteResponse> {
    return this._client.delete(__scalarPath`/video/sources/live/${liveWorkspaceID}`, options);
  }
}

export interface LiveStreamWorkspaceListResponse {
  /**
   * List of all live stream collections
   */
  all_live_sources: Array<LiveStreamWorkspaceListResponse.AllLiveSource>;
}

export namespace LiveStreamWorkspaceListResponse {
  export interface AllLiveSource {
    /**
     * Live stream workspace name
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
     * Workspace ID
     */
    id: string;
  }
}

export interface LiveStreamWorkspaceCreateParams {
  /**
   * Collection name
   */
  name: string;
}

export interface LiveStreamWorkspaceCreateResponse {
  /**
   * LIve stream workspace ID
   */
  id: string;
  /**
   * Creation timestamp in ISO 8601 format
   * @format date-time
   */
  created_at: string;
  /**
   * Name of the live stream workspace
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

export interface LiveStreamWorkspaceUpdateParams {
  /**
   * Live stream collection name
   */
  name?: string;
  /**
   * Video on demand workspace ID
   */
  video_source_id?: string;
}

export interface LiveStreamWorkspaceUpdateResponse {
  /**
   * LIve stream workspace ID
   */
  id: string;
  /**
   * Creation timestamp in ISO 8601 format
   * @format date-time
   */
  created_at: string;
  /**
   * Name of the live stream workspace
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

export type LiveStreamWorkspaceDeleteResponse = Record<string, unknown>;
export declare namespace LiveStreamWorkspaces {
  export {
    type LiveStreamWorkspaceListResponse as LiveStreamWorkspaceListResponse,
    type LiveStreamWorkspaceCreateResponse as LiveStreamWorkspaceCreateResponse,
    type LiveStreamWorkspaceUpdateResponse as LiveStreamWorkspaceUpdateResponse,
    type LiveStreamWorkspaceDeleteResponse as LiveStreamWorkspaceDeleteResponse,
    type LiveStreamWorkspaceCreateParams as LiveStreamWorkspaceCreateParams,
    type LiveStreamWorkspaceUpdateParams as LiveStreamWorkspaceUpdateParams,
  };
}
