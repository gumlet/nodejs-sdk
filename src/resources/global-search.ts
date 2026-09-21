// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';

export class GlobalSearch extends APIResource {
  /**
   * Search all video assets / playlists / folders etc across workspaces.
   *
   * @param {GlobalSearchSearchParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<GlobalSearchSearchResponse>} Successful response
   *
   * @example
   * ```ts
   * const globalSearch = await client.globalSearch.search({
   *   search_query: 'searchQuery',
   *   size: 20,
   *   assets_offset: 0,
   *   folders_offset: 0,
   *   playlists_offset: 0,
   *   channels_offset: 0,
   * });
   * ```
   */
  search(query: GlobalSearchSearchParams, options?: RequestOptions): APIPromise<GlobalSearchSearchResponse> {
    return this._client.get('/entities/global-search', { query, ...options });
  }
}

export interface GlobalSearchSearchParams {
  /**
   * Search query term
   */
  search_query: string;
  /**
   * Workspace ID if you want to limit search to a specific workspace
   */
  collection_id?: string;
  /**
   * Number of results to return
   * @default 20
   */
  size?: number;
  /**
   * Offset for assets
   * @default 0
   */
  assets_offset?: number;
  /**
   * Offset for folders
   * @default 0
   */
  folders_offset?: number;
  /**
   * Offset for playlists
   * @default 0
   */
  playlists_offset?: number;
  /**
   * Offset for channels
   * @default 0
   */
  channels_offset?: number;
}

export interface GlobalSearchSearchResponse {
  /**
   * Result array of all folders
   */
  all_folders: Array<GlobalSearchSearchResponse.AllFolder>;
  /**
   * Result array of all assets
   */
  all_assets: Array<GlobalSearchSearchResponse.AllAsset>;
  /**
   * Result array of all playlists
   */
  all_playlists: Array<GlobalSearchSearchResponse.AllPlaylist>;
  /**
   * Result array of all channels
   */
  all_channels: Array<GlobalSearchSearchResponse.AllChannel>;
}

export namespace GlobalSearchSearchResponse {
  export interface AllFolder {
    /**
     * Folder ID
     */
    id: string;
    /**
     * Created at timestamp in milliseconds since epoch
     * @format int64
     */
    created_at: number;
    /**
     * Updated at timestamp in milliseconds since epoch
     * @format int64
     */
    updated_at: number;
    /**
     * Workspace ID in which the folder resides
     */
    workspace_id: string;
    highlight: Array<AllFolder.Highlight>;
  }

  export namespace AllFolder {
    export interface Highlight {
      /**
       * Search ranking score
       */
      score: number;
      /**
       * Which field to highlight
       */
      path: string;
      texts: Array<Highlight.Text>;
    }

    export namespace Highlight {
      export interface Text {
        /**
         * The word to highlight or not
         */
        value: string;
        /**
         * Whether this word needs highlight
         */
        type: 'hit' | 'text';
      }
    }
  }

  export interface AllAsset {
    /**
     * Asset ID
     */
    id: string;
    /**
     * Asset Title
     */
    title: string;
    /**
     * List of tags applied to this asset
     */
    tags: Array<string>;
    /**
     * Workspace ID on in which this asset resides
     */
    workspace_id: string;
    /**
     * Created at timestamp in milliseconds since epoch
     * @format int64
     */
    created_at: number;
    /**
     * Updated at timestamp in milliseconds since epoch
     * @format int64
     */
    updated_at: number;
    highlight: Array<AllAsset.Highlight>;
  }

  export namespace AllAsset {
    export interface Highlight {
      /**
       * Search ranking score
       */
      score: number;
      /**
       * Which field to highlight
       */
      path: string;
      texts: Array<Highlight.Text>;
    }

    export namespace Highlight {
      export interface Text {
        /**
         * The word to highlight or not
         */
        value: string;
        /**
         * Whether this word needs highlight
         */
        type: 'hit' | 'text';
      }
    }
  }

  export interface AllPlaylist {
    /**
     * Playlist ID
     */
    id: string;
    /**
     * Playlist title
     */
    title: string;
    /**
     * Playlist description
     */
    description: string;
    /**
     * Created at timestamp in milliseconds since epoch
     * @format int64
     */
    created_at: number;
    /**
     * Updated at timestamp in milliseconds since epoch
     * @format int64
     */
    updated_at: number;
    /**
     * Workspace ID on in which this playlist resides
     */
    workspace_id: string;
    highlight: Array<AllPlaylist.Highlight>;
  }

  export namespace AllPlaylist {
    export interface Highlight {
      /**
       * Search ranking score
       */
      score: number;
      /**
       * Which field to highlight
       */
      path: string;
      texts: Array<Highlight.Text>;
    }

    export namespace Highlight {
      export interface Text {
        /**
         * The word to highlight or not
         */
        value: string;
        /**
         * Whether this word needs highlight
         */
        type: 'hit' | 'text';
      }
    }
  }

  export interface AllChannel {
    /**
     * Channel title
     */
    title: string;
    /**
     * Channel description
     */
    description: string;
    /**
     * Created at timestamp in milliseconds since epoch
     * @format int64
     */
    created_at: number;
    /**
     * Updated at timestamp in milliseconds since epoch
     * @format int64
     */
    updated_at: number;
    /**
     * Workspace ID on in which this channel resides
     */
    workspace_id: string;
    highlight: Array<AllChannel.Highlight>;
  }

  export namespace AllChannel {
    export interface Highlight {
      /**
       * Search ranking score
       */
      score: number;
      /**
       * Which field to highlight
       */
      path: string;
      texts: Array<Highlight.Text>;
    }

    export namespace Highlight {
      export interface Text {
        /**
         * The word to highlight or not
         */
        value: string;
        /**
         * Whether this word needs highlight
         */
        type: 'hit' | 'text';
      }
    }
  }
}
export declare namespace GlobalSearch {
  export {
    type GlobalSearchSearchResponse as GlobalSearchSearchResponse,
    type GlobalSearchSearchParams as GlobalSearchSearchParams,
  };
}
