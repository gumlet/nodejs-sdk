// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';

export class Billing extends APIResource {
  /**
   * Liost all invoices that are generated so far.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BillingListInvoicesResponse>} Successful response
   *
   * @example
   * ```ts
   * const billing = await client.billing.listInvoices();
   * ```
   */
  listInvoices(options?: RequestOptions): APIPromise<BillingListInvoicesResponse> {
    return this._client.get('/mixed/billing/invoice/history', options);
  }

  /**
   * Get billing details for this organization.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BillingFetchDetailsResponse>} Successful response
   *
   * @example
   * ```ts
   * const billing = await client.billing.fetchDetails();
   * ```
   */
  fetchDetails(options?: RequestOptions): APIPromise<BillingFetchDetailsResponse> {
    return this._client.get('/mixed/billing/details', options);
  }

  /**
   * Update billing details
   *
   * @param {BillingUpdateDetailsParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BillingUpdateDetailsResponse>} Successful response
   *
   * @example
   * ```ts
   * const billing = await client.billing.updateDetails({
   *   address_line: '',
   *   city: '',
   *   company_name: '',
   *   country_code: '',
   *   gst_number: '',
   *   postal: '',
   *   state_code: '',
   * });
   * ```
   */
  updateDetails(
    body: BillingUpdateDetailsParams,
    options?: RequestOptions,
  ): APIPromise<BillingUpdateDetailsResponse> {
    return this._client.post('/mixed/billing/details', { body, ...options });
  }

  /**
   * Get details about upcoming invoice.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BillingFetchUpcomingInvoiceResponse>} Successful response
   *
   * @example
   * ```ts
   * const billing = await client.billing.fetchUpcomingInvoice();
   * ```
   */
  fetchUpcomingInvoice(options?: RequestOptions): APIPromise<BillingFetchUpcomingInvoiceResponse> {
    return this._client.get('/mixed/billing/invoice/upcoming', options);
  }
}

export interface BillingListInvoicesResponse {
  /**
   * Flag which shows if this account has any unpaid invoices.
   */
  unpaid_invoices: boolean;
  /**
   * List of invoices
   */
  stripe_invoices: Array<BillingListInvoicesResponse.StripeInvoice>;
}

export namespace BillingListInvoicesResponse {
  export interface StripeInvoice {
    /**
     * Invoice ID as per stripe. This is not invoice number.
     */
    id: string;
    /**
     * Current status of the invoice
     */
    status: 'draft' | 'open' | 'paid' | 'uncollectible' | 'void';
    /**
     * Created timestamp of invoice in seconds since epoch
     */
    created: number;
    /**
     * Amount due for invoice in the lowest denomination of the given currency. For example if the invoice is in USD, the amount shown here is in cents. Therefore, a value like 10000 means the invoice is $100.
     */
    amount_due: number;
    /**
     * URL of the invoice page where you can pay the invoice
     */
    hosted_invoice_url: string;
    /**
     * URL of the page from where you can download the invoice PDF
     */
    invoice_pdf: string;
  }
}

export interface BillingFetchDetailsResponse {
  /**
   * Company name
   */
  company_name: string;
  /**
   * GST / VAT number
   */
  gst_number: string;
  /**
   * Address line 1
   */
  address_line: string;
  /**
   * City
   */
  city: string;
  /**
   * ISO code of the state
   */
  state_code: string;
  /**
   * Postal code
   */
  postal: string;
  /**
   * ISO code of country. For example, it's "US" for USA.
   */
  country_code: string;
}

export interface BillingUpdateDetailsParams {
  /**
   * Address line 1
   */
  address_line: string;
  /**
   * Name of the city
   */
  city: string;
  /**
   * Company name
   */
  company_name: string;
  /**
   * ISO country code
   */
  country_code: string;
  /**
   * GST / VAT details of the company
   */
  gst_number: string;
  /**
   * Postal code of the company
   */
  postal: string;
  /**
   * ISO code of the state / region
   */
  state_code: string;
}

export interface BillingUpdateDetailsResponse {
  /**
   * Address line 1
   */
  address_line: string;
  /**
   * Name of the city
   */
  city: string;
  /**
   * Company name
   */
  company_name: string;
  /**
   * ISO country code
   */
  country_code: string;
  /**
   * GST / VAT details of the company
   */
  gst_number: string;
  /**
   * Postal code of the company
   */
  postal: string;
  /**
   * ISO code of the state / region
   */
  state_code: string;
}

export interface BillingFetchUpcomingInvoiceResponse {
  /**
   * Invoice start date in DD MMM YYYY format
   */
  invoice_start_date: string;
  /**
   * Invoice end date in DD MMM YYYY format
   */
  invoice_last_date: string;
  /**
   * Next invoice date in DD MMM format
   */
  next_invoice_date: string;
  /**
   * Current month total amount in given currency.
   */
  current_month_usage: string;
  /**
   * Upcoming invoice details
   */
  upcoming_invoice: BillingFetchUpcomingInvoiceResponse.UpcomingInvoice;
  /**
   * Trial end date
   */
  trial_end_date?: string | null;
}

export namespace BillingFetchUpcomingInvoiceResponse {
  export interface UpcomingInvoice {
    /**
     * Upcoming invoice amount without tax
     */
    subtotal: string;
    /**
     * Invoice line items
     */
    lines: UpcomingInvoice.Lines;
  }

  export namespace UpcomingInvoice {
    export interface Lines {
      data: Array<Lines.Data>;
    }

    export namespace Lines {
      export interface Data {
        /**
         * Description about invoice line item
         */
        description: string;
        /**
         * User friendly quantity of the line item
         */
        quantity: string;
        /**
         * Price per unit for the given item in given currency.
         */
        unit_price: number;
        /**
         * Total amount of the line item
         */
        amount: string;
      }
    }
  }
}
export declare namespace Billing {
  export {
    type BillingListInvoicesResponse as BillingListInvoicesResponse,
    type BillingFetchDetailsResponse as BillingFetchDetailsResponse,
    type BillingUpdateDetailsResponse as BillingUpdateDetailsResponse,
    type BillingFetchUpcomingInvoiceResponse as BillingFetchUpcomingInvoiceResponse,
    type BillingUpdateDetailsParams as BillingUpdateDetailsParams,
  };
}
