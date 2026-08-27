// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';

export class DataAPI extends APIResource {
  /**
   * This endpoint retrieves aggregated data of the given metrics.
   *
   * @param {DataAPIInsightsAggregatedParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<DataAPIInsightsAggregatedResponse>} 200
   *
   * @example
   * ```ts
   * const dataAPI = await client.dataAPI.insightsAggregated({
   *   aggregate: [],
   *   workspace_id: '',
   *   timeframe: {},
   * });
   * ```
   */
  insightsAggregated(
    body: DataAPIInsightsAggregatedParams,
    options?: RequestOptions,
  ): APIPromise<DataAPIInsightsAggregatedResponse> {
    return this._client.post('/insights/aggregated-data', { body, ...options });
  }
}

export interface DataAPIInsightsAggregatedParams {
  /**
   * Aggregate multiple metrics at the same time
   */
  aggregate: Array<DataAPIInsightsAggregatedParams.Aggregate>;
  /**
   * The unique identifier of the Gumlet workspace ID available on the Video Workspaces.
   */
  workspace_id: string;
  /**
   * The timeframe to get the data for. Currently we only support maximum difference between `start_at` and `end_at` to be *60 days*
   */
  timeframe: DataAPIInsightsAggregatedParams.Timeframe;
  /**
   * Get aggregations for metrics with multiple filters, `value` should be an exact match
   */
  filters?: Array<DataAPIInsightsAggregatedParams.Filter>;
}

export namespace DataAPIInsightsAggregatedParams {
  export interface Aggregate {
    /**
     * The metric to be aggregated for this request.
     */
    metric:
      | 'views'
      | 'unique_views'
      | 'completion_percent_by_views'
      | 'playing_time'
      | 'concurrent_users'
      | 'impressions'
      | 'widget_form_submitted'
      | 'cta_clicks';
    /**
     * Aggregation function which is to be used.
     */
    function: 'sum' | 'average';
  }

  export interface Timeframe {
    /**
     * Use <b>yyyy-MM-dd</b> format
     * @format date
     */
    start_at?: string;
    /**
     * Use <b>yyyy-MM-dd</b> format
     * @format date
     */
    end_at?: string;
  }

  export interface Filter {
    /**
     * Name of the breakdown to filter data on.
     */
    name:
      | 'meta_browser'
      | 'meta_operating_system'
      | 'meta_operating_system_version'
      | 'meta_device_category'
      | 'meta_device_manufacturer'
      | 'meta_device_name'
      | 'meta_device_display_width'
      | 'meta_device_display_height'
      | 'meta_country'
      | 'meta_city'
      | 'meta_region'
      | 'player_software'
      | 'player_software_version'
      | 'player_height_pixels'
      | 'player_width_pixels'
      | 'player_language_code'
      | 'meta_page_url'
      | 'meta_asn'
      | 'custom_user_id'
      | 'user_name'
      | 'user_email'
      | 'custom_video_id'
      | 'custom_video_title'
      | 'video_source_url'
      | 'video_source_hostname'
      | 'video_source_format'
      | 'custom_video_language'
      | 'custom_video_variant'
      | 'custom_data_1'
      | 'custom_data_2'
      | 'custom_data_3'
      | 'custom_data_4'
      | 'custom_data_5';
    /**
     * Value to be matched for the given filter name. Currently we support exact matches.
     */
    value: string;
    /**
     * Operator to be used while filtering the data
     * @default equals
     */
    operator?: 'equals' | 'does not equal' | 'contains' | 'does not contain' | 'is set' | 'is not set';
  }
}

export interface DataAPIInsightsAggregatedResponse {
  views?: DataAPIInsightsAggregatedResponse.Views;
}

export namespace DataAPIInsightsAggregatedResponse {
  export interface Views {
    sum?: Views.Sum;
  }

  export namespace Views {
    export interface Sum {
      /**
       * @default 0
       */
      value?: number;
      unit?: string;
    }
  }
}
export declare namespace DataAPI {
  export {
    type DataAPIInsightsAggregatedResponse as DataAPIInsightsAggregatedResponse,
    type DataAPIInsightsAggregatedParams as DataAPIInsightsAggregatedParams,
  };
}
