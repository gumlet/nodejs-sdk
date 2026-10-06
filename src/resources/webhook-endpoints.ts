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
   * Get logs history for a given webhook.
   *
   * @param {string} webhookID - Webhook ID. You can get it using list webhook endpoint.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<WebhookEndpointHistoryResponse>} Successful response
   *
   * @example
   * ```ts
   * const webhookEndpoint = await client.webhookEndpoints.history('webhookId');
   * ```
   */
  history(webhookID: string, options?: RequestOptions): APIPromise<WebhookEndpointHistoryResponse> {
    return this._client.get(__scalarPath`/org/webhook/${webhookID}/history`, options);
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
  /**
   * Webhook ID
   */
  id: string;
  /**
   * Webhook URL
   */
  url: string;
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
   * Creation timestamp in ISO 8601 format
   */
  created_at: string;
  /**
   * Update timestamp in ISO 8601 format
   */
  updated_at: string;
  /**
   * List of workspace IDs for which the webhook is enabled.
   */
  sources: Array<string>;
  /**
   * Secret you supplied when creating the webhook. Gumlet sends this value in the `x-gumlet-token` header of each webhook POST.
   */
  secret_token?: string;
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
  sources?: string;
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

export type WebhookEndpointHistoryResponse =
  Array<WebhookEndpointHistoryResponse.WebhookEndpointHistoryResponseItem>;

export namespace WebhookEndpointHistoryResponse {
  export interface WebhookEndpointHistoryResponseItem {
    /**
     * Webhook event ID
     */
    id: string;
    /**
     * Delivery status stored for the event: `success`, `retrying`, or `failed`. `success` means the endpoint returned a 2xx response. `retrying` means that attempt did not.
     */
    status: string;
    /**
     * Number of retries it needed to deliver webhook.
     */
    retry_count: number;
    /**
     * Webhook event name. One of the video status, live video status, or product events.
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
     * Asset ID for which the event was fired
     */
    asset_id: string;
    /**
     * Event timestamp in ISO 8601 format
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
  };
}
