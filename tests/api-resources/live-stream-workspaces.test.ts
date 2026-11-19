// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource liveStreamWorkspaces', () => {
  smokeCase(
    'liveStreamWorkspaces.list:single',
    { operation: 'list', path: '/video/sources/live' },
    'list',
    async () => {
      const liveStreamWorkspace = await client.liveStreamWorkspaces.list();
    },
  );
  smokeCase(
    'liveStreamWorkspaces.create:single',
    { operation: 'create', path: '/video/sources/live' },
    'create',
    async () => {
      const liveStreamWorkspace = await client.liveStreamWorkspaces.create({
        name: '',
      });
    },
  );
  smokeCase(
    'liveStreamWorkspaces.update:required',
    { operation: 'update', path: '/video/sources/live/{live_workspace_id}' },
    'update: only required params',
    async () => {
      const liveStreamWorkspace = await client.liveStreamWorkspaces.update('liveWorkspaceId');
    },
  );
  smokeCase(
    'liveStreamWorkspaces.update:all',
    { operation: 'update', path: '/video/sources/live/{live_workspace_id}' },
    'update: required and optional params',
    async () => {
      const liveStreamWorkspace = await client.liveStreamWorkspaces.update('liveWorkspaceId', {
        name: 'live-stream-collections',
        video_source_id: '67bea1d66ca0059a95bf7de9',
      });
    },
  );
  smokeCase(
    'liveStreamWorkspaces.delete:single',
    { operation: 'delete', path: '/video/sources/live/{live_workspace_id}' },
    'delete',
    async () => {
      const liveStreamWorkspace = await client.liveStreamWorkspaces.delete('liveWorkspaceId');
    },
  );
});
