// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';

export class LiveStreamAnalytics extends APIResource {
  /**
   * Get usage analytics for your live streams.
   *
   * @param {LiveStreamAnalyticUsageParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<LiveStreamAnalyticUsageResponse>} Successful response
   *
   * @example
   * ```ts
   * const liveStreamAnalytic = await client.liveStreamAnalytics.usage({
   *   date_range: {
   *     start_at: '2024-01-01',
   *     end_at: '2024-01-01',
   *   },
   *   group_by: 'daily',
   *   metrics: ['bandwidth_consumption'],
   * });
   * ```
   */
  usage(
    body: LiveStreamAnalyticUsageParams,
    options?: RequestOptions,
  ): APIPromise<LiveStreamAnalyticUsageResponse> {
    return this._client.post('/video/live/analytics', { body, ...options });
  }
}

export interface LiveStreamAnalyticUsageParams {
  date_range: LiveStreamAnalyticUsageParams.DateRange;
  /**
   * Group the data either weekly, daily or monthly
   */
  group_by: 'daily' | 'weekly' | 'monthly';
  /**
   * List of metrics required in response
   */
  metrics: Array<'bandwidth_consumption' | 'asset_duration' | 'storage_unit'>;
}

export namespace LiveStreamAnalyticUsageParams {
  export interface DateRange {
    /**
     * Start date in ISO 8601 date format (YYYY-MM-DD)
     * @format date
     */
    start_at: string;
    /**
     * End date in ISO 8601 date format (YYYY-MM-DD)
     * @format date
     */
    end_at: string;
  }
}

export interface LiveStreamAnalyticUsageResponse {
  /**
   * Storage data unit information
   */
  storage_data_unit: 'min' | 'gb';
  /**
   * Data about bandwidth consumption
   */
  bandwidth_consumption?: Array<LiveStreamAnalyticUsageResponse.BandwidthConsumption>;
  /**
   * Data about input seconds processed
   */
  asset_duration?: Array<LiveStreamAnalyticUsageResponse.AssetDuration>;
  /**
   * Bytes or seconds of storage used
   */
  storage_unit?: Array<LiveStreamAnalyticUsageResponse.StorageUnit>;
}

export namespace LiveStreamAnalyticUsageResponse {
  export interface BandwidthConsumption {
    /**
     * Bandwidth consumption data in bytes
     * @format uint64
     */
    units: number;
    /**
     * Milliseconds since epoch timestamp for the data point
     * @format int64
     */
    timestamp: number;
  }

  export interface AssetDuration {
    /**
     * Input asset seconds
     * @format int64
     */
    units: number;
    /**
     * Milliseconds since epoch timestamp for the data point
     * @format int64
     */
    timestamp: number;
  }

  export interface StorageUnit {
    /**
     * Storage unit in either bytes or seconds. You can get the information from `storage_data_unit` field.
     * @format uint64
     */
    units: number;
    /**
     * Milliseconds since epoch timestamp for the data point
     * @format int64
     */
    timestamp: number;
  }
}
export declare namespace LiveStreamAnalytics {
  export {
    type LiveStreamAnalyticUsageResponse as LiveStreamAnalyticUsageResponse,
    type LiveStreamAnalyticUsageParams as LiveStreamAnalyticUsageParams,
  };
}
