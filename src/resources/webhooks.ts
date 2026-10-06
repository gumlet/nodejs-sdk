// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class Webhooks extends APIResource {
  /**
   * Creates a new webhook listener. Gumlet POSTs JSON to `url` for each matching event and sends `secret_token` in the `x-gumlet-token` header. Payload schemas are documented in the webhooks section.
   *
   * @param {WebhookCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<WebhookCreateResponse>} 200
   *
   * @example
   * ```ts
   * const webhook = await client.webhooksResource.create({
   *   url: '',
   *   secret_token: '',
   *   triggers: ['status'],
   *   sources: [''],
   * });
   * ```
   */
  create(body: WebhookCreateParams, options?: RequestOptions): APIPromise<WebhookCreateResponse> {
    return this._client.post('/org/webhooks', { body, ...options });
  }

  /**
   * List all webhooks.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<WebhookListResponse>} Successful response
   *
   * @example
   * ```ts
   * const webhook = await client.webhooksResource.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<WebhookListResponse> {
    return this._client.get('/org/webhooks', options);
  }

  /**
   * Update a webhook listener.
   *
   * @param {string} webhookID - Unique identifier for the Gumlet Webhook which needs to be updated.
   * @param {WebhookUpdateParams} [body] - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<WebhookUpdateResponse>} 200
   *
   * @example
   * ```ts
   * const webhook = await client.webhooksResource.update('webhookId');
   * ```
   */
  update(
    webhookID: string,
    body: WebhookUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WebhookUpdateResponse> {
    return this._client.post(__scalarPath`/org/webhooks/${webhookID}`, { body, ...options });
  }

  /**
   * Delete webhook listener endpoint.
   *
   * @param {string} webhookID - Unique identifier for the Gumlet Webhook which needs to be deleted.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<WebhookDeleteResponse>} 204
   *
   * @example
   * ```ts
   * const webhook = await client.webhooksResource.delete('webhookId');
   * ```
   */
  delete(webhookID: string, options?: RequestOptions): APIPromise<WebhookDeleteResponse> {
    return this._client.delete(__scalarPath`/org/webhooks/${webhookID}`, options);
  }

  /**
   * Get logs history for a given webhook.
   *
   * @param {string} webhookID - Webhook ID. You can get it using list webhook endpoint.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<WebhookHistoryResponse>} Successful response
   *
   * @example
   * ```ts
   * const webhook = await client.webhooksResource.history('webhookId');
   * ```
   */
  history(webhookID: string, options?: RequestOptions): APIPromise<WebhookHistoryResponse> {
    return this._client.get(__scalarPath`/org/webhook/${webhookID}/history`, options);
  }
}

export interface WebhookCreateParams {
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

export interface WebhookCreateResponse {
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

export interface WebhookListResponse {
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

export interface WebhookUpdateParams {
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

export interface WebhookUpdateResponse {
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

export type WebhookDeleteResponse = Record<string, unknown>;

export type WebhookHistoryResponse = Array<WebhookHistoryResponse.WebhookHistoryResponseItem>;

export namespace WebhookHistoryResponse {
  export interface WebhookHistoryResponseItem {
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
export declare namespace Webhooks {
  export {
    type WebhookCreateResponse as WebhookCreateResponse,
    type WebhookListResponse as WebhookListResponse,
    type WebhookUpdateResponse as WebhookUpdateResponse,
    type WebhookDeleteResponse as WebhookDeleteResponse,
    type WebhookHistoryResponse as WebhookHistoryResponse,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookUpdateParams as WebhookUpdateParams,
  };
}
