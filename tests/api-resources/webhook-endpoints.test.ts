// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource webhookEndpoints', () => {
  smokeCase(
    'webhookEndpoints.retrieve:single',
    { operation: 'retrieve', path: '/org/webhooks/{webhook_id}' },
    'retrieve',
    async () => {
      const webhookEndpoint = await client.webhookEndpoints.retrieve('webhookId');
    },
  );
  smokeCase(
    'webhookEndpoints.create:single',
    { operation: 'create', path: '/org/webhooks' },
    'create',
    async () => {
      const webhookEndpoint = await client.webhookEndpoints.create({
        url: '',
        secret_token: '',
        triggers: ['status'],
        sources: [''],
      });
    },
  );
  smokeCase(
    'webhookEndpoints.list:single',
    { operation: 'list', path: '/org/webhooks' },
    'list',
    async () => {
      const webhookEndpoint = await client.webhookEndpoints.list();
    },
  );
  smokeCase(
    'webhookEndpoints.update:required',
    { operation: 'update', path: '/org/webhooks/{webhook_id}' },
    'update: only required params',
    async () => {
      const webhookEndpoint = await client.webhookEndpoints.update('webhookId');
    },
  );
  smokeCase(
    'webhookEndpoints.update:all',
    { operation: 'update', path: '/org/webhooks/{webhook_id}' },
    'update: required and optional params',
    async () => {
      const webhookEndpoint = await client.webhookEndpoints.update('webhookId', {
        url: '',
        secret_token: '',
        triggers: ['status'],
        sources: [''],
      });
    },
  );
  smokeCase(
    'webhookEndpoints.delete:single',
    { operation: 'delete', path: '/org/webhooks/{webhook_id}' },
    'delete',
    async () => {
      const webhookEndpoint = await client.webhookEndpoints.delete('webhookId');
    },
  );
  smokeCase(
    'webhookEndpoints.history:required',
    { operation: 'history', path: '/org/webhook/{webhook_id}/history' },
    'history: only required params',
    async () => {
      const webhookEndpoint = await client.webhookEndpoints.history('webhookId', {
        page_number: 1,
        page_size: 20,
      });
    },
  );
  smokeCase(
    'webhookEndpoints.history:all',
    { operation: 'history', path: '/org/webhook/{webhook_id}/history' },
    'history: required and optional params',
    async () => {
      const webhookEndpoint = await client.webhookEndpoints.history('webhookId', {
        page_number: 1,
        page_size: 20,
        next_page_token: 'nextPageToken',
      });
    },
  );
});
