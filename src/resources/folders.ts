// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class Folders extends APIResource {
  /**
   * Create a folder inside a video workspace. Optionally provide `parent_id` to create a nested folder.
   *
   * @param {string} workspaceID - Video workspace id.
   * @param {FolderCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<FolderCreateResponse>} 200
   *
   * @example
   * ```ts
   * const create = await client.folders.create('workspaceId', { name: 'Course Assets', parent_id: null });
   * ```
   */
  create(
    workspaceID: string,
    body: FolderCreateParams,
    options?: RequestOptions,
  ): APIPromise<FolderCreateResponse> {
    return this._client.post(__scalarPath`/video/workspaces/${workspaceID}/folders`, { body, ...options });
  }

  /**
   * List folders for a video workspace. Use `parent_id` to list only folders inside a specific parent folder.
   *
   * @param {string} workspaceID - Video workspace id.
   * @param {FolderListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<FolderListResponse>} 200
   *
   * @example
   * ```ts
   * const list = await client.folders.list('workspaceId');
   * ```
   */
  list(
    workspaceID: string,
    query: FolderListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FolderListResponse> {
    return this._client.get(__scalarPath`/video/workspaces/${workspaceID}/folders`, { query, ...options });
  }

  /**
   * Get a single folder by id.
   *
   * @param {string} folderID - Folder id.
   * @param {FolderRetrieveParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<FolderRetrieveResponse>} 200
   *
   * @example
   * ```ts
   * const retrieve = await client.folders.retrieve('folderId', {
   *   workspace_id: 'workspaceId',
   * });
   * ```
   */
  retrieve(
    folderID: string,
    params: FolderRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<FolderRetrieveResponse> {
    const { workspace_id } = params;
    return this._client.get(__scalarPath`/video/workspaces/${workspace_id}/folders/${folderID}`, options);
  }

  /**
   * Rename a folder, move it to another parent folder, or move assets into the folder by sending `asset_ids`.
   *
   * @param {string} folderID - Folder id.
   * @param {FolderUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<FolderUpdateResponse>} 200
   *
   * @example
   * ```ts
   * const update = await client.folders.update('folderId', {
   *   workspace_id: 'workspaceId',
   * });
   * ```
   */
  update(
    folderID: string,
    params: FolderUpdateParams,
    options?: RequestOptions,
  ): APIPromise<FolderUpdateResponse> {
    const { workspace_id, body } = params;
    return this._client.post(__scalarPath`/video/workspaces/${workspace_id}/folders/${folderID}`, {
      body,
      ...options,
    });
  }

  /**
   * Delete a folder. Descendant folders and assets inside them are deleted by the backend workflow.
   *
   * @param {string} folderID - Folder id.
   * @param {FolderDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<FolderDeleteResponse>} 200
   *
   * @example
   * ```ts
   * const delete_ = await client.folders.delete('folderId', {
   *   workspace_id: 'workspaceId',
   * });
   * ```
   */
  delete(
    folderID: string,
    params: FolderDeleteParams,
    options?: RequestOptions,
  ): APIPromise<FolderDeleteResponse> {
    const { workspace_id } = params;
    return this._client.delete(__scalarPath`/video/workspaces/${workspace_id}/folders/${folderID}`, options);
  }

  /**
   * Remove one or more assets from their current folder assignment inside the workspace.
   *
   * @param {string} workspaceID - Video workspace id.
   * @param {FolderDeleteAssetsParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<FolderDeleteAssetsResponse>} 200
   *
   * @example
   * ```ts
   * const deleteAssets = await client.folders.deleteAssets('workspaceId', {
   *   asset_ids: ['67e4f2b4403562dbea654301', '67e4f2bb403562dbea654302'],
   * });
   * ```
   */
  deleteAssets(
    workspaceID: string,
    body: FolderDeleteAssetsParams,
    options?: RequestOptions,
  ): APIPromise<FolderDeleteAssetsResponse> {
    return this._client.post(__scalarPath`/video/workspaces/${workspaceID}/remove-assets-from-folder`, {
      body,
      ...options,
    });
  }
}

export interface FolderCreateParams {
  /**
   * Folder name.
   */
  name: string;
  /**
   * Parent folder id. Send `null` or omit it to create a root-level folder.
   */
  parent_id?: string | null;
}

export interface FolderCreateResponse {
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

export interface FolderListParams {
  /**
   * Parent folder id. Send `null` to list root folders.
   */
  parent_id?: string;
}

export type FolderListResponse = Array<FolderListResponse.FolderListResponseItem>;

export namespace FolderListResponse {
  export interface FolderListResponseItem {
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
}

export interface FolderRetrieveParams {
  /**
   * Video workspace id.
   */
  workspace_id: string;
}

export interface FolderRetrieveResponse {
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

export interface FolderUpdateParams {
  /**
   * Path param: Video workspace id.
   */
  workspace_id: string;
  /**
   * Body param
   */
  body?: FolderUpdateParams.Name | FolderUpdateParams.AssetIDs;
}

export namespace FolderUpdateParams {
  export interface Name {
    /**
     * New folder name.
     */
    name: string;
    /**
     * New parent folder id. Send `null` to move the folder to the root level.
     */
    parent_id?: string | null;
    /**
     * Asset ids to move into this folder.
     */
    asset_ids?: Array<string>;
  }

  export interface AssetIDs {
    asset_ids: Array<string>;
    /**
     * New folder name.
     */
    name?: string;
    /**
     * Parent folder id in which we need to move assets.
     */
    parent_id?: string;
  }
}

export type FolderUpdateResponse =
  | FolderUpdateResponse.FolderUpdateResponseItem
  | FolderUpdateResponse.FolderUpdateResponseItem2;

export namespace FolderUpdateResponse {
  export interface FolderUpdateResponseItem {
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
    /**
     * ISO Timestamp
     */
    created_at?: string;
    /**
     * ISO Timestamp
     */
    updated_at?: string;
  }

  export interface FolderUpdateResponseItem2 {
    message?: string;
    /**
     * @default 0
     */
    movedCount?: number;
  }
}

export interface FolderDeleteParams {
  /**
   * Video workspace id.
   */
  workspace_id: string;
}

export interface FolderDeleteResponse {
  message?: string;
}

export interface FolderDeleteAssetsParams {
  asset_ids: Array<string>;
}

export interface FolderDeleteAssetsResponse {
  message?: string;
  /**
   * @default 0
   */
  removedCount?: number;
}
export declare namespace Folders {
  export {
    type FolderCreateResponse as FolderCreateResponse,
    type FolderListResponse as FolderListResponse,
    type FolderRetrieveResponse as FolderRetrieveResponse,
    type FolderUpdateResponse as FolderUpdateResponse,
    type FolderDeleteResponse as FolderDeleteResponse,
    type FolderDeleteAssetsResponse as FolderDeleteAssetsResponse,
    type FolderCreateParams as FolderCreateParams,
    type FolderListParams as FolderListParams,
    type FolderRetrieveParams as FolderRetrieveParams,
    type FolderUpdateParams as FolderUpdateParams,
    type FolderDeleteParams as FolderDeleteParams,
    type FolderDeleteAssetsParams as FolderDeleteAssetsParams,
  };
}
