// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource globalSearch', () => {
  smokeCase(
    'globalSearch.search:required',
    { operation: 'search', path: '/entities/global-search' },
    'search: only required params',
    async () => {
      const globalSearch = await client.globalSearch.search({
        search_query: 'searchQuery',
        size: 20,
        assets_offset: 0,
        folders_offset: 0,
        playlists_offset: 0,
        channels_offset: 0,
      });
    },
  );
  smokeCase(
    'globalSearch.search:all',
    { operation: 'search', path: '/entities/global-search' },
    'search: required and optional params',
    async () => {
      const globalSearch = await client.globalSearch.search({
        search_query: 'searchQuery',
        workspace_id: 'workspaceId',
        collection_id: 'collectionId',
        size: 20,
        assets_offset: 0,
        folders_offset: 0,
        playlists_offset: 0,
        channels_offset: 0,
      });
    },
  );
});
