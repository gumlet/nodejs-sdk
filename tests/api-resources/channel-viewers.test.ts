// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource channelViewers', () => {
  smokeCase(
    'channelViewers.invite:single',
    { operation: 'invite', path: '/channel/{video_workspace_id}/viewers/invite' },
    'invite',
    async () => {
      const channelViewer = await client.channelViewers.invite('videoWorkspaceId', {
        users: [
          { email: 'test@gumlet.com', name: 'Test User-0' },
          { email: 'test+1@gumlet.com', name: 'Test User-1' },
          { email: 'test+2@gumlet.com', name: 'Test User-2' },
        ],
      });
    },
  );
  smokeCase(
    'channelViewers.remove:single',
    { operation: 'remove', path: '/channel/{video_workspace_id}/viewers/remove' },
    'remove',
    async () => {
      const channelViewer = await client.channelViewers.remove('videoWorkspaceId', {
        emails: ['test@gumlet.com', 'test+2@gumlet.com'],
      });
    },
  );
  smokeCase(
    'channelViewers.inviteCsv:single',
    { operation: 'inviteCsv', path: '/channel/{video_workspace_id}/viewers/invite/csv' },
    'inviteCsv',
    async () => {
      const channelViewer = await client.channelViewers.inviteCsv('videoWorkspaceId', {
        viewers_csv: 'viewers.csv',
      });
    },
  );
  smokeCase(
    'channelViewers.listSubscribers:required',
    { operation: 'listSubscribers', path: '/channel/{workspace_id}/viewers' },
    'listSubscribers: only required params',
    async () => {
      const channelViewer = await client.channelViewers.listSubscribers('workspaceId', {
        page_number: 1,
        page_size: 20,
      });
    },
  );
  smokeCase(
    'channelViewers.listSubscribers:all',
    { operation: 'listSubscribers', path: '/channel/{workspace_id}/viewers' },
    'listSubscribers: required and optional params',
    async () => {
      const channelViewer = await client.channelViewers.listSubscribers('workspaceId', {
        page_number: 1,
        page_size: 20,
        next_page_token: 'nextPageToken',
      });
    },
  );
});
