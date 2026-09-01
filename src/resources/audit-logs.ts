// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';

export class AuditLogs extends APIResource {
  /**
   * Get audit logs for the user activity in your organisation. Please note that this endpoint can only be accessed by `owner` and `admin` role users.
   *
   * @param {AuditLogFetchParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AuditLogFetchResponse>} Successful response
   *
   * @example
   * ```ts
   * const auditLog = await client.auditLogs.fetch({
   *   date_range: { start_at: '2026-08-25', end_at: '2026-08-29' },
   * });
   * ```
   */
  fetch(body: AuditLogFetchParams, options?: RequestOptions): APIPromise<AuditLogFetchResponse> {
    return this._client.post('/user/audit-log', { body, ...options });
  }
}

export interface AuditLogFetchParams {
  date_range: AuditLogFetchParams.DateRange;
  /**
   * Page number of results.
   * @default 1
   * @minimum 1
   * @multipleOf 1
   */
  page_number?: number;
  /**
   * @default 100
   * @minimum 10
   * @maximum 500
   */
  page_size?: number;
  /**
   * Array of user emails to filter the activity logs.
   */
  user_email?: Array<string>;
  /**
   * Array of activity types to filter the audit logs
   */
  activity_type?: Array<
    | 'workspace_created'
    | 'video_uploaded'
    | 'video_details_updated'
    | 'video_deleted'
    | 'thumbnail_updated'
    | 'subtitles_updated'
    | 'audio_updated'
    | 'processing_settings_updated'
    | 'player_settings_updated'
    | 'workspace_updated'
    | 'team_member_invited'
    | 'team_member_removed'
    | 'import_started'
    | 'playlist_created'
    | 'playlist_updated'
    | 'playlist_asset_changed'
    | 'security_settings_updated'
    | 'channel_updated'
    | 'video_alert_changed'
    | 'video_report_changed'
    | 'live_stream_created'
    | 'live_stream_started'
    | 'live_stream_thumbnail_updated'
    | 'live_stream_completed'
    | 'live_stream_collection_created'
    | 'live_stream_collection_updated'
    | 'live_stream_deleted'
    | 'image_source_created'
    | 'image_source_updated'
    | 'image_report_changed'
    | 'image_alert_changed'
    | 'user_profile_updated'
    | 'api_key_changed'
    | 'webhook_created'
    | 'webhook_updated'
    | 'webhook_deleted'
    | 'drm_credentials_changed'
    | 'plan_changed'
    | 'billing_details_updated'
    | 'playlist_deleted'
    | 'payment_method_added'
    | 'billing_alert_changed'
  >;
}

export namespace AuditLogFetchParams {
  export interface DateRange {
    /**
     * Starting date for audit logs. It's a string in YYYY-MM-DD format.
     */
    start_at: string;
    /**
     * Ending date for audit logs. It's a string in YYYY-MM-DD format.
     */
    end_at: string;
  }
}

export interface AuditLogFetchResponse {
  /**
   * Details about pagination of the audit logs.
   */
  pagination: AuditLogFetchResponse.Pagination;
  data: Array<AuditLogFetchResponse.Data>;
}

export namespace AuditLogFetchResponse {
  export interface Pagination {
    /**
     * Current page.
     */
    page: number;
    /**
     * Items returned in current page
     */
    page_size: number;
    /**
     * Total available pages.
     */
    total_pages: number;
    /**
     * Total available audit log items.
     */
    total: number;
  }

  export interface Data {
    /**
     * User friendly name of the activity
     */
    activity: string;
    /**
     * IP address from where the activity happened.
     */
    ip: string;
    /**
     * Email id of the user who performed the activity.
     */
    action_user: string;
    /**
     * API status code for the event
     */
    status_code: number;
    /**
     * Total response time in milliseconds for the event.
     */
    response_time: number;
    /**
     * Milliseconds since epoch marking the exact timestamp for the activity.
     */
    timestamp: number;
    /**
     * Details about affected resource
     */
    source: Data.Source;
  }

  export namespace Data {
    export interface Source {
      /**
       * ID of the resource.
       */
      id: string;
      /**
       * What kind of ID is there? For example, if the activity happened on a video workspace, the type would be `workspace`
       */
      type: string;
    }
  }
}
export declare namespace AuditLogs {
  export {
    type AuditLogFetchResponse as AuditLogFetchResponse,
    type AuditLogFetchParams as AuditLogFetchParams,
  };
}
