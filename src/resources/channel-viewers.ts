// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';
import { path as __scalarPath } from '../internal/utils/path';
import type { Uploadable } from '../core/uploads';

export class ChannelViewers extends APIResource {
  /**
   * Invite one or more viewers to a members-only channel.
   *
   * @param {string} videoWorkspaceID - Gumlet workspace ID. You can get it on Gumlet dashboard or retrieve it using list workspace API.
   * @param {ChannelViewerInviteParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ChannelViewerInviteResponse>} 200
   *
   * @example
   * ```ts
   * const invite = await client.channelViewers.invite('videoWorkspaceId', {
   *   users: [
   *     { email: 'test@gumlet.com', name: 'Test User-0' },
   *     { email: 'test+1@gumlet.com', name: 'Test User-1' },
   *     { email: 'test+2@gumlet.com', name: 'Test User-2' },
   *   ],
   * });
   * ```
   */
  invite(
    videoWorkspaceID: string,
    body: ChannelViewerInviteParams,
    options?: RequestOptions,
  ): APIPromise<ChannelViewerInviteResponse> {
    return this._client.post(__scalarPath`/channel/${videoWorkspaceID}/viewers/invite`, { body, ...options });
  }

  /**
   * Remove one or more viewers from a channel by email address.
   *
   * @param {string} videoWorkspaceID - Gumlet workspace ID. You can get it on Gumlet dashboard or retrieve it using list workspace API.
   * @param {ChannelViewerDeleteParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ChannelViewerDeleteResponse>} 200
   *
   * @example
   * ```ts
   * const delete_ = await client.channelViewers.delete('videoWorkspaceId', {
   *   emails: ['test@gumlet.com', 'test+2@gumlet.com'],
   * });
   * ```
   */
  delete(
    videoWorkspaceID: string,
    body: ChannelViewerDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ChannelViewerDeleteResponse> {
    return this._client.post(__scalarPath`/channel/${videoWorkspaceID}/viewers/remove`, { body, ...options });
  }

  /**
   * Invite viewers to a channel by uploading a CSV file.
   *
   * @param {string} videoWorkspaceID - Gumlet workspace ID. You can get it on Gumlet dashboard or retrieve it using list workspace API.
   * @param {ChannelViewerInviteCsvParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ChannelViewerInviteCsvResponse>} 200
   *
   * @example
   * ```ts
   * const inviteCsv = await client.channelViewers.inviteCsv('videoWorkspaceId', { viewers_csv: 'viewers.csv' });
   * ```
   */
  inviteCsv(
    videoWorkspaceID: string,
    body: ChannelViewerInviteCsvParams,
    options?: RequestOptions,
  ): APIPromise<ChannelViewerInviteCsvResponse> {
    return this._client.post(
      __scalarPath`/channel/${videoWorkspaceID}/viewers/invite/csv`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export interface ChannelViewerInviteParams {
  /**
   * List of viewers to invite. A maximum of 200 viewers can be invited in one request.
   * @minItems 1
   * @maxItems 200
   */
  users: Array<ChannelViewerInviteParams.User>;
}

export namespace ChannelViewerInviteParams {
  export interface User {
    /**
     * Viewer email address.
     * @format email
     */
    email: string;
    /**
     * Viewer display name.
     * @minLength 1
     * @maxLength 100
     */
    name: string;
  }
}

export interface ChannelViewerInviteResponse {
  success?: boolean;
}

export interface ChannelViewerDeleteParams {
  /**
   * Email addresses of viewers to remove. A maximum of 200 viewers can be removed in one request.
   * @maxItems 200
   */
  emails: Array<string>;
}

export interface ChannelViewerDeleteResponse {
  success?: boolean;
}

export interface ChannelViewerInviteCsvParams {
  /**
   * CSV file containing viewer rows. Required columns: email, name. Maximum 500 viewers.
   * @format binary
   */
  viewers_csv: Uploadable;
}

export interface ChannelViewerInviteCsvResponse {
  success?: boolean;
}
export declare namespace ChannelViewers {
  export {
    type ChannelViewerInviteResponse as ChannelViewerInviteResponse,
    type ChannelViewerDeleteResponse as ChannelViewerDeleteResponse,
    type ChannelViewerInviteCsvResponse as ChannelViewerInviteCsvResponse,
    type ChannelViewerInviteParams as ChannelViewerInviteParams,
    type ChannelViewerDeleteParams as ChannelViewerDeleteParams,
    type ChannelViewerInviteCsvParams as ChannelViewerInviteCsvParams,
  };
}
