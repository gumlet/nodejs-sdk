// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class WebhookAPIs extends APIResource {
  /**
   * Create Webhook
   *
   * @param {WebhookAPICreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<WebhookAPICreateResponse>} 200
   *
   * @example
   * ```ts
   * const create = await client.webhookAPIs.create({
   *   url: '',
   *   secret_token: '',
   *   triggers: [],
   *   sources: [],
   * });
   * ```
   */
  create(body: WebhookAPICreateParams, options?: RequestOptions): APIPromise<WebhookAPICreateResponse> {
    return this._client.post('/org/webhooks', { body, ...options });
  }

  /**
   * Update Webhook
   *
   * @param {string} webhookID - Unique identifier for the Gumlet Webhook which needs to be updated.
   * @param {WebhookAPIUpdateParams} [body] - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<WebhookAPIUpdateResponse>} 200
   *
   * @example
   * ```ts
   * const update = await client.webhookAPIs.update('webhookId');
   * ```
   */
  update(
    webhookID: string,
    body: WebhookAPIUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WebhookAPIUpdateResponse> {
    return this._client.post(__scalarPath`/org/webhooks/${webhookID}`, { body, ...options });
  }

  /**
   * Delete Webhook
   *
   * @param {string} webhookID - Unique identifier for the Gumlet Webhook which needs to be deleted.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<WebhookAPIDeleteResponse>} 204
   *
   * @example
   * ```ts
   * const delete_ = await client.webhookAPIs.delete('webhookId');
   * ```
   */
  delete(webhookID: string, options?: RequestOptions): APIPromise<WebhookAPIDeleteResponse> {
    return this._client.delete(__scalarPath`/org/webhooks/${webhookID}`, options);
  }
}

export interface WebhookAPICreateParams {
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

export interface WebhookAPICreateResponse {
  id?: string;
  url?: string;
  triggers?: Array<string>;
  created_at?: string;
  updated_at?: string;
  sources?: Array<string>;
  secret_token?: string;
}

export interface WebhookAPIUpdateParams {
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

export interface WebhookAPIUpdateResponse {
  id?: string;
  url?: string;
  triggers?: Array<string>;
  created_at?: string;
  updated_at?: string;
  sources?: Array<string>;
  secret_token?: string;
}

export type WebhookAPIDeleteResponse = Record<string, unknown>;
export declare namespace WebhookAPIs {
  export {
    type WebhookAPICreateResponse as WebhookAPICreateResponse,
    type WebhookAPIUpdateResponse as WebhookAPIUpdateResponse,
    type WebhookAPIDeleteResponse as WebhookAPIDeleteResponse,
    type WebhookAPICreateParams as WebhookAPICreateParams,
    type WebhookAPIUpdateParams as WebhookAPIUpdateParams,
  };
}
