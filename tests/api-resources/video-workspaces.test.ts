// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource videoWorkspaces', () => {
  smokeCase(
    'videoWorkspaces.list:required',
    { operation: 'list', path: '/video/workspaces' },
    'list: only required params',
    async () => {
      const videoWorkspace = await client.videoWorkspaces.list({
        page_number: 1,
        page_size: 20,
        order_by: 'asc',
      });
    },
  );
  smokeCase(
    'videoWorkspaces.list:all',
    { operation: 'list', path: '/video/workspaces' },
    'list: required and optional params',
    async () => {
      const videoWorkspace = await client.videoWorkspaces.list({
        page_number: 1,
        page_size: 20,
        next_page_token: 'nextPageToken',
        order_by: 'asc',
      });
    },
  );
  smokeCase(
    'videoWorkspaces.create:single',
    { operation: 'create', path: '/video/workspaces' },
    'create',
    async () => {
      const videoWorkspace = await client.videoWorkspaces.create({
        name: 'My Workspace',
        type: 'direct-upload',
      });
    },
  );
  smokeCase(
    'videoWorkspaces.update:required',
    { operation: 'update', path: '/video/workspaces/{workspace_id}' },
    'update: only required params',
    async () => {
      const videoWorkspace = await client.videoWorkspaces.update('workspaceId');
    },
  );
  smokeCase(
    'videoWorkspaces.update:all',
    { operation: 'update', path: '/video/workspaces/{workspace_id}' },
    'update: required and optional params',
    async () => {
      const videoWorkspace = await client.videoWorkspaces.update('workspaceId', {
        default_profile_id: '646df1c9173a4a2fcac180b7',
        name: 'awsrename',
        type: 'aws',
        aws: {
          bucket_name: 'my-bucket-test',
          bucket_region: 'ap-southeast-1',
          access_key: 'BQUA6QFXVWHAAB6IO2X1',
          secret: 'aws_secret',
        },
      });
    },
  );
  smokeCase(
    'videoWorkspaces.retrieve:single',
    { operation: 'retrieve', path: '/video/workspaces/{workspace_id}' },
    'retrieve',
    async () => {
      const videoWorkspace = await client.videoWorkspaces.retrieve('workspaceId');
    },
  );
  smokeCase(
    'videoWorkspaces.delete:single',
    { operation: 'delete', path: '/video/workspaces/{workspace_id}' },
    'delete',
    async () => {
      const videoWorkspace = await client.videoWorkspaces.delete('workspaceId');
    },
  );
});
