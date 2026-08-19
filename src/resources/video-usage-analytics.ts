// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';

export class VideoUsageAnalytics extends APIResource {
  /**
   * This endpoint gives usage analytics data of your videos. Ex - top assets, bandwidth consumption
   *
   * @param {VideoUsageAnalyticRetrieveParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<VideoUsageAnalyticRetrieveResponse>} 200
   *
   * @example
   * ```ts
   * const retrieve = await client.videoUsageAnalytics.retrieve({
   *   metrics: [],
   *   date_range: {},
   *   top_assets_count: '5',
   *   top_assets_page: '0',
   * });
   * ```
   */
  retrieve(
    body: VideoUsageAnalyticRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<VideoUsageAnalyticRetrieveResponse> {
    return this._client.post('/video/analytics', { body, ...options });
  }

  /**
   * This endpoint lists top streamed assets in a video collection
   *
   * @param {VideoUsageAnalyticTopAssetsParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<VideoUsageAnalyticTopAssetsResponse>} 200
   *
   * @example
   * ```ts
   * const topAssets = await client.videoUsageAnalytics.topAssets({
   *   start_at: '2026-06-21',
   *   end_at: '2026-06-30',
   *   page: '1',
   *   page_size: '1000',
   * });
   * ```
   */
  topAssets(
    query: VideoUsageAnalyticTopAssetsParams,
    options?: RequestOptions,
  ): APIPromise<VideoUsageAnalyticTopAssetsResponse> {
    return this._client.get('/video/streaming-duration', { query, ...options });
  }
}

export interface VideoUsageAnalyticRetrieveParams {
  /**
   * Define the metric you need the data for, currently we only support `bandwidth_consumption`, `asset_duration`, `storage_unit`, `top_assets`, `bandwidth_consumption_by_collection`, `errored_videos` and `widget_data`
   */
  metrics: Array<string>;
  /**
   * The timeframe to get the data for. Currently we only support a maximum of 60 days between `start_at` and `end_at`.
   */
  date_range: VideoUsageAnalyticRetrieveParams.DateRange;
  filters?: VideoUsageAnalyticRetrieveParams.Filters;
  /**
   * Count of video assets that should be returned. Max assets count is 1000 per page.
   * @default 5
   */
  top_assets_count?: string;
  /**
   * top_assets metric may get paginated response. Iterate this parameter to get more data.
   * @default 0
   */
  top_assets_page?: string;
}

export namespace VideoUsageAnalyticRetrieveParams {
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

  export interface Filters {
    /**
     * The ID of the `collection` you want to filter the data for
     */
    collection_id?: string;
  }
}

export interface VideoUsageAnalyticRetrieveResponse {
  top_assets?: Array<VideoUsageAnalyticRetrieveResponse.TopAsset>;
}

export namespace VideoUsageAnalyticRetrieveResponse {
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

export interface VideoUsageAnalyticTopAssetsParams {
  /**
   * Date string in "yyyy-mm-dd" format
   */
  start_at: string;
  /**
   * Date string in "yyyy-mm-dd" format
   */
  end_at: string;
  /**
   * Gumlet workspace ID
   */
  collection_id?: string;
  /**
   * Page number of the response.
   * @default 1
   */
  page?: string;
  /**
   * Assets to list per page.
   * @default 1000
   */
  page_size?: string;
}

export interface VideoUsageAnalyticTopAssetsResponse {
  data?: Array<VideoUsageAnalyticTopAssetsResponse.Data>;
  /**
   * @default true
   */
  has_next_page?: boolean;
}

export namespace VideoUsageAnalyticTopAssetsResponse {
  export interface Data {
    asset_id?: string;
    /**
     * @default 0
     */
    units?: number;
  }
}
export declare namespace VideoUsageAnalytics {
  export {
    type VideoUsageAnalyticRetrieveResponse as VideoUsageAnalyticRetrieveResponse,
    type VideoUsageAnalyticTopAssetsResponse as VideoUsageAnalyticTopAssetsResponse,
    type VideoUsageAnalyticRetrieveParams as VideoUsageAnalyticRetrieveParams,
    type VideoUsageAnalyticTopAssetsParams as VideoUsageAnalyticTopAssetsParams,
  };
}
