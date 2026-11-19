// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource billing', () => {
  smokeCase(
    'billing.listInvoices:required',
    { operation: 'listInvoices', path: '/mixed/billing/invoice/history' },
    'listInvoices: only required params',
    async () => {
      const billing = await client.billing.listInvoices({
        page_size: 20,
      });
    },
  );
  smokeCase(
    'billing.listInvoices:all',
    { operation: 'listInvoices', path: '/mixed/billing/invoice/history' },
    'listInvoices: required and optional params',
    async () => {
      const billing = await client.billing.listInvoices({
        page_size: 20,
        last_id: 'lastId',
      });
    },
  );
  smokeCase(
    'billing.fetchDetails:single',
    { operation: 'fetchDetails', path: '/mixed/billing/details' },
    'fetchDetails',
    async () => {
      const billing = await client.billing.fetchDetails();
    },
  );
  smokeCase(
    'billing.updateDetails:single',
    { operation: 'updateDetails', path: '/mixed/billing/details' },
    'updateDetails',
    async () => {
      const billing = await client.billing.updateDetails({
        address_line: '',
        city: '',
        company_name: '',
        country_code: '',
        gst_number: '',
        postal: '',
        state_code: '',
      });
    },
  );
  smokeCase(
    'billing.fetchUpcomingInvoice:single',
    { operation: 'fetchUpcomingInvoice', path: '/mixed/billing/invoice/upcoming' },
    'fetchUpcomingInvoice',
    async () => {
      const billing = await client.billing.fetchUpcomingInvoice();
    },
  );
});
