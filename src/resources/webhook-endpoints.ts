// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class WebhookEndpoints extends APIResource {
  /**
   * Creates a new webhook listener. Gumlet POSTs JSON to `url` for each matching event and sends `secret_token` in the `x-gumlet-token` header. Payload schemas are documented in the webhooks section.
   *
   * @param {WebhookEndpointCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<WebhookEndpointCreateResponse>} 200
   *
   * @example
   * ```ts
   * const webhookEndpoint = await client.webhookEndpoints.create({
   *   url: '',
   *   secret_token: '',
   *   triggers: ['status'],
   *   sources: [''],
   * });
   * ```
   */
  create(
    body: WebhookEndpointCreateParams,
    options?: RequestOptions,
  ): APIPromise<WebhookEndpointCreateResponse> {
    return this._client.post('/org/webhooks', { body, ...options });
  }

  /**
   * List all webhooks.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<WebhookEndpointListResponse>} Successful response
   *
   * @example
   * ```ts
   * const webhookEndpoint = await client.webhookEndpoints.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<WebhookEndpointListResponse> {
    return this._client.get('/org/webhooks', options);
  }

  /**
   * Update a webhook listener.
   *
   * @param {string} webhookID - Unique identifier for the Gumlet Webhook which needs to be updated.
   * @param {WebhookEndpointUpdateParams} [body] - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<WebhookEndpointUpdateResponse>} 200
   *
   * @example
   * ```ts
   * const webhookEndpoint = await client.webhookEndpoints.update('webhookId');
   * ```
   */
  update(
    webhookID: string,
    body: WebhookEndpointUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WebhookEndpointUpdateResponse> {
    return this._client.post(__scalarPath`/org/webhooks/${webhookID}`, { body, ...options });
  }

  /**
   * Delete webhook listener endpoint.
   *
   * @param {string} webhookID - Unique identifier for the Gumlet Webhook which needs to be deleted.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<WebhookEndpointDeleteResponse>} 204
   *
   * @example
   * ```ts
   * const webhookEndpoint = await client.webhookEndpoints.delete('webhookId');
   * ```
   */
  delete(webhookID: string, options?: RequestOptions): APIPromise<WebhookEndpointDeleteResponse> {
    return this._client.delete(__scalarPath`/org/webhooks/${webhookID}`, options);
  }

  /**
   * Get delivery history logs for a given webhook.
   *
   * Pagination uses `page_number` / `page_size`. Use `next_page_token` for cursor-based pagination.
   *
   * @param {string} webhookID - Webhook ID. You can get it using list webhook endpoint.
   * @param {WebhookEndpointHistoryParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<WebhookEndpointHistoryResponse>} Successful response
   *
   * @example
   * ```ts
   * const webhookEndpoint = await client.webhookEndpoints.history('webhookId', {
   *   page_number: 1,
   *   page_size: 20,
   * });
   * ```
   */
  history(
    webhookID: string,
    query: WebhookEndpointHistoryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WebhookEndpointHistoryResponse> {
    return this._client.get(__scalarPath`/org/webhook/${webhookID}/history`, { query, ...options });
  }
}

export interface WebhookEndpointCreateParams {
  /**
   * URL from the application you want to send data to.
   */
  url: string;
  /**
   * Secret sent back in the `x-gumlet-token` header of each webhook POST so you can confirm the request came from Gumlet.
   */
  secret_token: string;
  /**
   * Events that invoke this webhook. `status` subscribes to every video asset status event. `live-video-status` subscribes to every live video status event. Any other value subscribes to that event only.
   */
  triggers: Array<
    | 'status'
    | 'live-video-status'
    | 'video.status.created'
    | 'video.status.downloaded'
    | 'video.status.optimized'
    | 'video.status.ready'
    | 'video.status.errored'
    | 'video.status.deleted'
    | 'video.status.repackaged'
    | 'video.status.stream_ready'
    | 'live.video.status.created'
    | 'live.video.status.ready'
    | 'live.video.status.preparing'
    | 'live.video.status.connected'
    | 'live.video.status.active'
    | 'live.video.status.complete'
    | 'live.video.status.disconnected'
    | 'event.embed.viewed'
    | 'event.embed.cta_clicked'
    | 'event.video.updated'
    | 'event.video.uploaded'
    | 'event.playlist.created'
    | 'event.playlist.asset'
    | 'event.playlist.deleted'
    | 'event.video.analytics'
    | 'event.image.analytics'
    | 'event.embed.form_submitted'
    | 'event.comment.all'
    | 'event.channel.member_joined'
  >;
  /**
   * List of video collection identifiers for which webhooks are needed to be invoked.
   */
  sources: Array<string>;
}

export interface WebhookEndpointCreateResponse {
  /**
   * Webhook ID
   */
  id?: string;
  /**
   * Webhook URL
   */
  url?: string;
  /**
   * List of triggers
   */
  triggers?: Array<string>;
  created_at?: string;
  updated_at?: string;
  sources?: Array<string>;
  secret_token?: string;
}

export interface WebhookEndpointListResponse {
  all_webhooks: Array<WebhookEndpointListResponse.AllWebhook>;
}

export namespace WebhookEndpointListResponse {
  export interface AllWebhook {
    /**
     * Webhook ID
     */
    id: string;
    /**
     * Webhook URL
     */
    url?: string | null;
    /**
     * Events that invoke this webhook. `status` subscribes to every video asset status event. `live-video-status` subscribes to every live video status event. Any other value subscribes to that event only.
     */
    triggers?: Array<
      | 'status'
      | 'live-video-status'
      | 'video.status.created'
      | 'video.status.downloaded'
      | 'video.status.optimized'
      | 'video.status.ready'
      | 'video.status.errored'
      | 'video.status.deleted'
      | 'video.status.repackaged'
      | 'video.status.stream_ready'
      | 'live.video.status.created'
      | 'live.video.status.ready'
      | 'live.video.status.preparing'
      | 'live.video.status.connected'
      | 'live.video.status.active'
      | 'live.video.status.complete'
      | 'live.video.status.disconnected'
      | 'event.embed.viewed'
      | 'event.embed.cta_clicked'
      | 'event.video.updated'
      | 'event.video.uploaded'
      | 'event.playlist.created'
      | 'event.playlist.asset'
      | 'event.playlist.deleted'
      | 'event.video.analytics'
      | 'event.image.analytics'
      | 'event.embed.form_submitted'
      | 'event.comment.all'
      | 'event.channel.member_joined'
    >;
    /**
     * Creation timestamp in ISO 8601 format
     */
    created_at?: string;
    /**
     * Update timestamp in ISO 8601 format
     */
    updated_at?: string;
    /**
     * List of workspace IDs for which the webhook is enabled.
     */
    sources?: Array<string>;
    /**
     * Secret you supplied when creating the webhook. Gumlet sends this value in the `x-gumlet-token` header of each webhook POST.
     */
    secret_token?: string;
    live_sources?: Array<string>;
  }
}

export interface WebhookEndpointUpdateParams {
  /**
   * URL from the application you want to send data to.
   */
  url?: string;
  /**
   * Secret sent back in the `x-gumlet-token` header of each webhook POST so you can confirm the request came from Gumlet.
   */
  secret_token?: string;
  /**
   * Events that invoke this webhook. `status` subscribes to every video asset status event. `live-video-status` subscribes to every live video status event. Any other value subscribes to that event only.
   */
  triggers?: Array<
    | 'status'
    | 'live-video-status'
    | 'video.status.created'
    | 'video.status.downloaded'
    | 'video.status.optimized'
    | 'video.status.ready'
    | 'video.status.errored'
    | 'video.status.deleted'
    | 'video.status.repackaged'
    | 'video.status.stream_ready'
    | 'live.video.status.created'
    | 'live.video.status.ready'
    | 'live.video.status.preparing'
    | 'live.video.status.connected'
    | 'live.video.status.active'
    | 'live.video.status.complete'
    | 'live.video.status.disconnected'
    | 'event.embed.viewed'
    | 'event.embed.cta_clicked'
    | 'event.video.updated'
    | 'event.video.uploaded'
    | 'event.playlist.created'
    | 'event.playlist.asset'
    | 'event.playlist.deleted'
    | 'event.video.analytics'
    | 'event.image.analytics'
    | 'event.embed.form_submitted'
    | 'event.comment.all'
    | 'event.channel.member_joined'
  >;
  /**
   * List of video collection identifiers for which webhooks are needed to be invoked.
   */
  sources?: Array<string>;
}

export interface WebhookEndpointUpdateResponse {
  /**
   * Webhook ID
   */
  id?: string;
  /**
   * Webhook URL
   */
  url?: string;
  triggers?: Array<string>;
  created_at?: string;
  updated_at?: string;
  sources?: Array<string>;
  secret_token?: string;
}

export type WebhookEndpointDeleteResponse = Record<string, unknown>;

export interface WebhookEndpointHistoryParams {
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
  /**
   * Cursor for the next page. Pass the `next_page_token` value returned in the previous response.
   * @pattern ^[a-fA-F0-9]{24}$
   */
  next_page_token?: string;
}

export interface WebhookEndpointHistoryResponse {
  /**
   * Webhook trigger history events for this page.
   */
  history: Array<WebhookEndpointHistoryResponse.History>;
  /**
   * Total number of history events.
   */
  total_count: number;
  /**
   * Offset after this page of results.
   */
  current_offset?: number;
  /**
   * Cursor for the next page when more results exist. Empty string when there is no next page.
   */
  next_page_token?: string;
  /**
   * Page size used for this response when it differs from the default.
   */
  page_size?: number;
}

export namespace WebhookEndpointHistoryResponse {
  export interface History {
    /**
     * Webhook event ID
     */
    id: string;
    /**
     * Delivery status stored for the event: `success`, `retrying`, or `failed`. `success` means the endpoint returned a 2xx response. `retrying` means that attempt did not.
     */
    status: 'success' | 'retrying' | 'failed';
    /**
     * Number of retries needed to deliver the webhook.
     */
    retry_count: number;
    /**
     * Webhook event name.
     */
    event:
      | 'video.status.created'
      | 'video.status.downloaded'
      | 'video.status.optimized'
      | 'video.status.ready'
      | 'video.status.errored'
      | 'video.status.deleted'
      | 'video.status.repackaged'
      | 'video.status.stream_ready'
      | 'live.video.status.created'
      | 'live.video.status.ready'
      | 'live.video.status.preparing'
      | 'live.video.status.connected'
      | 'live.video.status.active'
      | 'live.video.status.complete'
      | 'live.video.status.disconnected'
      | 'event.embed.viewed'
      | 'event.embed.cta_clicked'
      | 'event.video.updated'
      | 'event.video.uploaded'
      | 'event.playlist.created'
      | 'event.playlist.asset'
      | 'event.playlist.deleted'
      | 'event.video.analytics'
      | 'event.image.analytics'
      | 'event.embed.form_submitted'
      | 'event.comment.all'
      | 'event.channel.member_joined';
    /**
     * Asset ID for which the event was fired.
     */
    asset_id: string;
    /**
     * Event timestamp in ISO 8601 format.
     */
    created_at: string;
  }
}
export declare namespace WebhookEndpoints {
  export {
    type WebhookEndpointCreateResponse as WebhookEndpointCreateResponse,
    type WebhookEndpointListResponse as WebhookEndpointListResponse,
    type WebhookEndpointUpdateResponse as WebhookEndpointUpdateResponse,
    type WebhookEndpointDeleteResponse as WebhookEndpointDeleteResponse,
    type WebhookEndpointHistoryResponse as WebhookEndpointHistoryResponse,
    type WebhookEndpointCreateParams as WebhookEndpointCreateParams,
    type WebhookEndpointUpdateParams as WebhookEndpointUpdateParams,
    type WebhookEndpointHistoryParams as WebhookEndpointHistoryParams,
  };
}
