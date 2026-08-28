// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';

export class UserData extends APIResource {
  /**
   * This endpoint gives information about the user account.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<UserDataRetrieveResponse>} Successful response
   *
   * @example
   * ```ts
   * const userData = await client.userData.retrieve();
   * ```
   */
  retrieve(options?: RequestOptions): APIPromise<UserDataRetrieveResponse> {
    return this._client.get('/user/data', {
      ...options,
      headers: buildHeaders([{ Accept: 'application/javascript' }, options?.headers]),
    });
  }
}

export interface UserDataRetrieveResponse {
  /**
   * User ID
   */
  id: string;
  /**
   * User Email
   * @format email
   */
  email: string;
  /**
   * Full name of user
   */
  name: string;
  /**
   * User creation date. Milliseconds since epoch.
   */
  creation_date: number;
  /**
   * Last login date. Milliseconds since epoch.
   */
  last_login_date: number;
  /**
   * IP address of last login.
   */
  last_login_ip: string;
  /**
   * Roles assigned to the user.
   */
  roles: Array<string>;
  /**
   * Timezone selected by user.
   */
  timezone: string;
  metadata: UserDataRetrieveResponse.Metadata;
}

export namespace UserDataRetrieveResponse {
  export interface Metadata {
    /**
     * Dashboard theme.
     */
    theme: string;
  }
}
export declare namespace UserData {
  export { type UserDataRetrieveResponse as UserDataRetrieveResponse };
}
