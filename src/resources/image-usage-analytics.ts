// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';

export class ImageUsageAnalytics extends APIResource {
  /**
   * This endpoint helps you get image analytics data like bandwidth consumption, request count, CDN hit ratio, etc.
   *
   * @param {ImageUsageAnalyticRetrieveParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ImageUsageAnalyticRetrieveResponse>} 200
   *
   * @example
   * ```ts
   * const retrieve = await client.imageUsageAnalytics.retrieve({
   *   metrics: [],
   *   date_range: {},
   *   group_by: 'daily',
   * });
   * ```
   */
  retrieve(
    body: ImageUsageAnalyticRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ImageUsageAnalyticRetrieveResponse> {
    return this._client.post('/image/analytics', { body, ...options });
  }
}

export interface ImageUsageAnalyticRetrieveParams {
  /**
   * Define the metric you need the data for, currently we support "bandwidth_consumption", "requests_count","status_4xx","status_5xx","avg_response_time""
   */
  metrics: Array<
    | 'bandwidth_consumption'
    | 'requests_count'
    | 'transformations_count'
    | 'bandwidth_savings'
    | 'origin_hit_rate'
    | 'avg_transformation_response_time'
    | 'status_4xx'
    | 'status_5xx'
    | 'cdn_hit_rate'
    | 'content_type'
    | 'status_2xx'
    | 'avg_response_time'
  >;
  /**
   * The timeframe to get the data for. Currently we only support a maximum of 30 days between `start_at` and `end_at`.
   */
  date_range: ImageUsageAnalyticRetrieveParams.DateRange;
  /**
   * @default daily
   */
  group_by?: 'daily' | 'weekly' | 'monthly';
}

export namespace ImageUsageAnalyticRetrieveParams {
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
}

export interface ImageUsageAnalyticRetrieveResponse {
  bandwidth_consumption?: Array<ImageUsageAnalyticRetrieveResponse.BandwidthConsumption>;
  requests_count?: Array<ImageUsageAnalyticRetrieveResponse.RequestsCount>;
  status_2xx?: Array<ImageUsageAnalyticRetrieveResponse.Status2xx>;
  status_4xx?: Array<ImageUsageAnalyticRetrieveResponse.Status4xx>;
  status_5xx?: Array<ImageUsageAnalyticRetrieveResponse.Status5xx>;
  avg_response_time?: Array<ImageUsageAnalyticRetrieveResponse.AvgResponseTime>;
  cdn_hit_rate?: Array<ImageUsageAnalyticRetrieveResponse.CdnHitRate>;
  transformations_count?: Array<ImageUsageAnalyticRetrieveResponse.TransformationsCount>;
  origin_hit_rate?: Array<ImageUsageAnalyticRetrieveResponse.OriginHitRate>;
  avg_transformation_response_time?: Array<ImageUsageAnalyticRetrieveResponse.AvgTransformationResponseTime>;
  content_type?: Array<ImageUsageAnalyticRetrieveResponse.ContentType>;
}

export namespace ImageUsageAnalyticRetrieveResponse {
  export interface BandwidthConsumption {
    /**
     * Value of bandwidth consumption in bytes.
     */
    units: number;
    /**
     * Seconds since epoch for the unit given.
     */
    timestamp: number;
  }

  export interface RequestsCount {
    /**
     * Count of requests.
     */
    units: number;
    /**
     * Seconds since epoch for the unit given.
     */
    timestamp: number;
  }

  export interface Status2xx {
    /**
     * Value between 0 and 1 depicting percentage of 2xx requests.
     * @format float
     * @minimum 0
     * @maximum 1
     */
    units: number;
    /**
     * Seconds since epoch for the unit given.
     */
    timestamp: number;
  }

  export interface Status4xx {
    /**
     * Value between 0 and 1 depicting percentage of 4xx requests.
     * @format float
     * @minimum 0
     * @maximum 1
     */
    units: number;
    /**
     * Seconds since epoch for the unit given.
     */
    timestamp: number;
  }

  export interface Status5xx {
    /**
     * Value between 0 and 1 depicting percentage of 5xx requests.
     * @format float
     * @minimum 0
     * @maximum 1
     */
    units: number;
    /**
     * Seconds since epoch for the unit given.
     */
    timestamp: number;
  }

  export interface AvgResponseTime {
    /**
     * Response time in seconds.
     * @format float
     * @minimum 0
     */
    units: number;
    /**
     * Seconds since epoch for the unit given.
     */
    timestamp: number;
  }

  export interface CdnHitRate {
    /**
     * Number between 0 and 1 depicting CDN hit ratio percentage.
     * @format float
     * @minimum 0
     * @maximum 1
     */
    units: number;
    /**
     * Seconds since epoch for the unit given.
     */
    timestamp: number;
  }

  export interface TransformationsCount {
    /**
     * Number of transformations
     */
    units: number;
    /**
     * Seconds since epoch for the unit given.
     */
    timestamp: number;
  }

  export interface OriginHitRate {
    /**
     * Number between 0 and 1 depicting Origin Cache hit ratio.
     * @format float
     * @minimum 0
     * @maximum 1
     */
    units: number;
    /**
     * Seconds since epoch for the unit given.
     */
    timestamp: number;
  }

  export interface AvgTransformationResponseTime {
    /**
     * Seconds it takes for image transform
     * @format float
     * @minimum 0
     */
    units: number;
    /**
     * Seconds since epoch for the unit given.
     */
    timestamp: number;
  }

  export interface ContentType {
    /**
     * Total count of AVIF images delivered
     */
    avif: number;
    /**
     * Total count of PNG images delivered
     */
    png: number;
    /**
     * Total count of JPEG images delivered
     */
    jpeg: number;
    /**
     * Total count of GIF images delivered
     */
    gif: number;
    /**
     * Total count of WEBP images delivered
     */
    webp: number;
    /**
     * Total count of JPEG-XL images delivered
     */
    jxl: number;
    /**
     * Total count of MP4 videos delivered
     */
    mp4: number;
    /**
     * Seconds since epoch.
     */
    timestamp: number;
  }
}
export declare namespace ImageUsageAnalytics {
  export {
    type ImageUsageAnalyticRetrieveResponse as ImageUsageAnalyticRetrieveResponse,
    type ImageUsageAnalyticRetrieveParams as ImageUsageAnalyticRetrieveParams,
  };
}
