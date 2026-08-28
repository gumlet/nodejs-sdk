// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';

export class OrganizationData extends APIResource {
  /**
   * You can get organization data using this API.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OrganizationDataRetrieveOrgResponse>} Successful response
   *
   * @example
   * ```ts
   * const organizationData = await client.organizationData.retrieveOrg();
   * ```
   */
  retrieveOrg(options?: RequestOptions): APIPromise<OrganizationDataRetrieveOrgResponse> {
    return this._client.get('/org/data', options);
  }
}

export interface OrganizationDataRetrieveOrgResponse {
  /**
   * Organization ID
   */
  id: string;
  /**
   * Primary email of the organization
   */
  org_email: string;
  /**
   * Flag if account is blocked due to unpaid dues. False means account is not blocked.
   */
  unpaid: boolean;
  /**
   * Org creation time. Epoch timestamp in milliseconds.
   */
  created_at: number;
  /**
   * Subscription plan name
   */
  plan: string;
  /**
   * Billing cycle. `monthly` or `yearly`.
   */
  plan_cycle: 'monthly' | 'yearly';
  plan_data: OrganizationDataRetrieveOrgResponse.PlanData;
  stripe_account_loc: 'ind' | 'sgp';
  /**
   * Flag if SSO is enabled for org.
   */
  sso_enabled?: boolean;
  got_free_trial?: boolean;
  metadata?: OrganizationDataRetrieveOrgResponse.Metadata;
}

export namespace OrganizationDataRetrieveOrgResponse {
  export interface PlanData {
    image: PlanData.Image;
    video: PlanData.Video;
  }

  export namespace PlanData {
    export interface Image {
      /**
       * Image plan name
       */
      plan: string;
      /**
       * Billing cycle. `monthly` or `yearly`.
       */
      cycle: 'monthly' | 'yearly';
      /**
       * If the plan is under trial or not.
       */
      trialing: boolean;
      display_name: string;
    }

    export interface Video {
      /**
       * Video plan name
       */
      plan: string;
      /**
       * Billing cycle. `monthly` or `yearly`.
       */
      cycle: 'monthly' | 'yearly';
      /**
       * If the plan is under trial or not.
       */
      trialing: boolean;
      display_name: string;
    }
  }

  export interface Metadata {
    firstImageSourceCreated: boolean;
    firstVideoUploaded: boolean;
    /**
     * Flag is org is blocked for NSFW uploads.
     */
    nsfw_blocked: boolean;
  }
}
export declare namespace OrganizationData {
  export { type OrganizationDataRetrieveOrgResponse as OrganizationDataRetrieveOrgResponse };
}
