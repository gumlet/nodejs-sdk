// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class Webhooks extends APIResource {
  /**
   * Creates a new webhook listener.
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
   *   triggers: [''],
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
   * Authentication token to ensure legitimacy of Gumlet Webhook request on your application.
   */
  secret_token: string;
  /**
   * Triggers for the invocation of webhookos, supported option is `status`.
   */
  triggers: Array<string>;
  /**
   * List of video collection identifiers for which webhooks are needed to be invoked.
   */
  sources: Array<string>;
}

export interface WebhookCreateResponse {
  id?: string;
  url?: string;
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
   * List of triggers configured for this webhook
   */
  triggers: Array<string>;
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
   * The token which you must validate when you receive the webhook. It's given by you when you create the webhook.
   */
  secret_token?: string;
}

export interface WebhookUpdateParams {
  /**
   * URL from the application you want to send data to.
   */
  url?: string;
  /**
   * Authentication token to ensure legitimacy of Gumlet Webhook request on your application.
   */
  secret_token?: string;
  /**
   * Triggers for the invocation of webhookos, supported option is `status`.
   */
  triggers?: string;
  /**
   * List of video collection identifiers for which webhooks are needed to be invoked.
   */
  sources?: string;
}

export interface WebhookUpdateResponse {
  id?: string;
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
     * Status of webhook event
     */
    status: string;
    /**
     * Number of retries it needed to deliver webhook.
     */
    retry_count: number;
    /**
     * Name of the webhook event
     */
    event: string;
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
