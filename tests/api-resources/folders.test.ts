// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource folders', () => {
  smokeCase(
    'folders.create:single',
    { operation: 'create', path: '/video/workspaces/{workspace_id}/folders' },
    'create',
    async () => {
      const folder = await client.folders.create('workspaceId', { name: 'Course Assets', parent_id: null });
    },
  );
  smokeCase(
    'folders.list:required',
    { operation: 'list', path: '/video/workspaces/{workspace_id}/folders' },
    'list: only required params',
    async () => {
      const folder = await client.folders.list('workspaceId');
    },
  );
  smokeCase(
    'folders.list:all',
    { operation: 'list', path: '/video/workspaces/{workspace_id}/folders' },
    'list: required and optional params',
    async () => {
      const folder = await client.folders.list('workspaceId', {
        parent_id: 'parentId',
      });
    },
  );
  smokeCase(
    'folders.retrieve:single',
    { operation: 'retrieve', path: '/video/workspaces/{workspace_id}/folders/{folder_id}' },
    'retrieve',
    async () => {
      const folder = await client.folders.retrieve('folderId', {
        workspace_id: 'workspaceId',
      });
    },
  );
  smokeCase(
    'folders.update:required',
    { operation: 'update', path: '/video/workspaces/{workspace_id}/folders/{folder_id}' },
    'update: only required params',
    async () => {
      const folder = await client.folders.update('folderId', {
        workspace_id: 'workspaceId',
      });
    },
  );
  smokeCase(
    'folders.update:all',
    { operation: 'update', path: '/video/workspaces/{workspace_id}/folders/{folder_id}' },
    'update: required and optional params',
    async () => {
      const folder = await client.folders.update('folderId', {
        workspace_id: 'workspaceId',
        body: {
          name: '',
          parent_id: '',
          asset_ids: [''],
        },
      });
    },
  );
  smokeCase(
    'folders.delete:single',
    { operation: 'delete', path: '/video/workspaces/{workspace_id}/folders/{folder_id}' },
    'delete',
    async () => {
      const folder = await client.folders.delete('folderId', {
        workspace_id: 'workspaceId',
      });
    },
  );
  smokeCase(
    'folders.removeAssets:single',
    { operation: 'removeAssets', path: '/video/workspaces/{workspace_id}/remove-assets-from-folder' },
    'removeAssets',
    async () => {
      const folder = await client.folders.removeAssets('workspaceId', {
        asset_ids: ['67e4f2b4403562dbea654301', '67e4f2bb403562dbea654302'],
      });
    },
  );
});
