// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';

export class RecycleBin extends APIResource {
  /**
   * Recovers a deleted asset from the recycle bin.
   *
   * @param {RecycleBinRecoverParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   *
   * @example
   * ```ts
   * await client.recycleBin.recover({
   *   asset_id: '',
   * });
   * ```
   */
  recover(body: RecycleBinRecoverParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/video/asset/recover', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List all assets in a recycle bin for a given workspace. The deleted assets are available for 30 days. After that, assets are permanently deleted.
   *
   * Pagination uses `page_number` / `page_size` only (no `next_page_token`).
   *
   * @param {RecycleBinListParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RecycleBinListResponse>} Successful response
   *
   * @example
   * ```ts
   * const recycleBin = await client.recycleBin.list({
   *   workspace_id: 'workspaceId',
   *   page_number: 1,
   *   page_size: 20,
   * });
   * ```
   */
  list(query: RecycleBinListParams, options?: RequestOptions): APIPromise<RecycleBinListResponse> {
    return this._client.get('/video/asset/recoverable/list', { query, ...options });
  }
}

export interface RecycleBinRecoverParams {
  /**
   * Gumlet Video Asset Id which needs to be recovered.
   */
  asset_id: string;
}

export interface RecycleBinListParams {
  /**
   * ID of workspace for which you want to list the recycle bin items.
   */
  workspace_id: string;
  /**
   * Page number to retrieve. Starts at `1`.
   * @default 1
   * @minimum 1
   */
  page_number?: number;
  /**
   * Number of items to return per page. **Default: `20`**. **Maximum: `100`**.
   * @minimum 1
   * @maximum 100
   */
  page_size?: number;
}

export interface RecycleBinListResponse {
  /**
   * Number of total assets in recycle bin.
   */
  total_asset_count: number;
  /**
   * Number of total assets in current offset.
   */
  current_offset: number;
  all_assets: Array<RecycleBinListResponse.AllAsset>;
}

export namespace RecycleBinListResponse {
  export interface AllAsset {
    /**
     * Asset ID of the deleted asset.
     */
    asset_id: string;
    /**
     * Workspace ID for the asset.
     */
    workspace_id: string;
    /**
     * Title of the asset.
     */
    title: string;
    /**
     * Description of the video.
     */
    description: string | null;
    /**
     * Tags associated with the asset.
     */
    tags: Array<string>;
    /**
     * Duration of the asset in seconds.
     */
    duration: number;
    /**
     * Deleted timestamp of asset in milliseconds since epoch.
     */
    deleted_at: number;
    /**
     * User ID of the user who deleted the asset.
     */
    deleted_by: string;
  }
}
export declare namespace RecycleBin {
  export {
    type RecycleBinListResponse as RecycleBinListResponse,
    type RecycleBinRecoverParams as RecycleBinRecoverParams,
    type RecycleBinListParams as RecycleBinListParams,
  };
}
