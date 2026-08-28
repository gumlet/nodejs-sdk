// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';

export class DataAPI extends APIResource {
  /**
   * This endpoint retrieves viewer analytics data.
   *
   * @param {DataAPIInsightsChartParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<DataAPIInsightsChartResponse>} 200
   *
   * @example
   * ```ts
   * const dataAPI = await client.dataAPI.insightsChart({
   *   metrics: [],
   *   workspace_id: '',
   *   date_range: {
   *     start_at: '2024-01-01',
   *     end_at: '2024-01-01',
   *   },
   *   group_by: 'daily',
   * });
   * ```
   */
  insightsChart(
    body: DataAPIInsightsChartParams,
    options?: RequestOptions,
  ): APIPromise<DataAPIInsightsChartResponse> {
    return this._client.post('/insights/viewer-analytics', { body, ...options });
  }

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

export interface DataAPIInsightsChartParams {
  /**
   * Get data for one or more `metrics` in the same request. Please add any of these metrics. `views`, `unique_views`, `impressions`. `completion_percent_by_views`, `playing_time`, `concurrent_users`, `widget_form_submitted`, `cta_clicks`
   */
  metrics: Array<string>;
  /**
   * The five to ten character unique identifier of the Gumlet workspace ID available on the Video Workspaces.
   */
  workspace_id: string;
  /**
   * The timeframe to get the data for.
   * Currently, we only support a maximum of *60 days* between `start_at` and `end_at`.
   */
  date_range: DataAPIInsightsChartParams.DateRange;
  /**
   * Build *segments* of users using multiple filters on the data, `value` should be an *exact match*
   */
  filters?: Array<DataAPIInsightsChartParams.Filter>;
  /**
   * Data can be grouped by `daily`, `weekly` or `monthly`.
   * @default daily
   */
  group_by?: 'daily' | 'weekly' | 'monthly';
  /**
   * Metrics result Group by selected dimension, You can select upto 3 dimensions to get nested category result. result will follow selection orders.
   */
  chart_dimension?: DataAPIInsightsChartParams.ChartDimension;
}

export namespace DataAPIInsightsChartParams {
  export interface DateRange {
    /**
     * Use <b>yyyy-MM-dd</b> format
     * @format date
     */
    start_at: string;
    /**
     * Use <b>yyyy-MM-dd</b> format
     * @format date
     */
    end_at: string;
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
      | 'player_language_code'
      | 'player_name'
      | 'meta_page_url'
      | 'meta_asn'
      | 'custom_user_id'
      | 'custom_user_email'
      | 'custom_video_id'
      | 'custom_video_title'
      | 'video_source_url'
      | 'custom_video_variant_name'
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

  export interface ChartDimension {
    group_by?: Array<ChartDimension.GroupBy>;
  }

  export namespace ChartDimension {
    export interface GroupBy {
      name?:
        | 'custom_video_title'
        | 'custom_video_id'
        | 'custom_workspace_id'
        | 'video_source_url'
        | 'video_source_format'
        | 'player_software_version'
        | 'player_software'
        | 'meta_page_url'
        | 'audio_language'
        | 'subtitle_language'
        | 'video_width_pixels'
        | 'video_height_pixels'
        | 'meta_country'
        | 'meta_city'
        | 'meta_device_category'
        | 'meta_device_manufacturer'
        | 'meta_browser'
        | 'meta_browser_version'
        | 'meta_browser_language'
        | 'meta_operating_system'
        | 'meta_operating_system_version'
        | 'meta_device_name'
        | 'meta_asn';
    }
  }
}

export interface DataAPIInsightsChartResponse {
  views?: Array<DataAPIInsightsChartResponse.View>;
  unique_views?: Array<DataAPIInsightsChartResponse.UniqueView>;
  analytics_data?: DataAPIInsightsChartResponse.AnalyticsData;
}

export namespace DataAPIInsightsChartResponse {
  export interface View {
    /**
     * @default 0
     */
    x?: number;
    y?: unknown;
    unit?: string;
  }

  export interface UniqueView {
    /**
     * @default 0
     */
    x?: number;
    y?: unknown;
    unit?: string;
  }

  export interface AnalyticsData {
    views?: Array<AnalyticsData.View>;
  }

  export namespace AnalyticsData {
    export interface View {
      /**
       * Date in epoch format
       */
      x?: string;
      /**
       * Value
       */
      y?: string;
      unit?: string;
    }
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
    type DataAPIInsightsChartResponse as DataAPIInsightsChartResponse,
    type DataAPIInsightsAggregatedResponse as DataAPIInsightsAggregatedResponse,
    type DataAPIInsightsChartParams as DataAPIInsightsChartParams,
    type DataAPIInsightsAggregatedParams as DataAPIInsightsAggregatedParams,
  };
}
