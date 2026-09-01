// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';

export class UserData extends APIResource {
  /**
   * This endpoint gives information about the user account.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<UserDataFetchResponse>} Successful response
   *
   * @example
   * ```ts
   * const userData = await client.userData.fetch();
   * ```
   */
  fetch(options?: RequestOptions): APIPromise<UserDataFetchResponse> {
    return this._client.get('/user/data', options);
  }
}

export interface UserDataFetchResponse {
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
  metadata: UserDataFetchResponse.Metadata;
}

export namespace UserDataFetchResponse {
  export interface Metadata {
    /**
     * Dashboard theme.
     */
    theme: string;
  }
}
export declare namespace UserData {
  export { type UserDataFetchResponse as UserDataFetchResponse };
}
