// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource imageSources', () => {
  smokeCase(
    'imageSources.create:single',
    { operation: 'create', path: '/image/sources' },
    'create',
    async () => {
      const imageSource = await client.imageSources.create({
        type: 'webfolder',
        webfolder: { base_url: 'https://www.google.com' },
        namespace: 'google-demo',
      });
    },
  );
  smokeCase(
    'imageSources.list:required',
    { operation: 'list', path: '/image/sources' },
    'list: only required params',
    async () => {
      const page = await client.imageSources.list();
    },
  );
  smokeCase(
    'imageSources.list:all',
    { operation: 'list', path: '/image/sources' },
    'list: required and optional params',
    async () => {
      const page = await client.imageSources.list({
        next_page_token: 'nextPageToken',
      });
    },
  );
  smokeCase(
    'imageSources.retrieve:single',
    { operation: 'retrieve', path: '/image/sources/{image_source_id}' },
    'retrieve',
    async () => {
      const imageSource = await client.imageSources.retrieve('imageSourceId');
    },
  );
  smokeCase(
    'imageSources.update:required',
    { operation: 'update', path: '/image/sources/{image_source_id}' },
    'update: only required params',
    async () => {
      const imageSource = await client.imageSources.update('imageSourceId');
    },
  );
  smokeCase(
    'imageSources.update:all',
    { operation: 'update', path: '/image/sources/{image_source_id}' },
    'update: required and optional params',
    async () => {
      const imageSource = await client.imageSources.update('imageSourceId', {
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
    'imageSources.delete:single',
    { operation: 'delete', path: '/image/sources/{image_source_id}' },
    'delete',
    async () => {
      const imageSource = await client.imageSources.delete('imageSourceId');
    },
  );
  smokeCase(
    'imageSources.purgeCache:required',
    { operation: 'purgeCache', path: '/purge/{subdomain}' },
    'purgeCache: only required params',
    async () => {
      const imageSource = await client.imageSources.purgeCache('subdomain');
    },
  );
  smokeCase(
    'imageSources.purgeCache:all',
    { operation: 'purgeCache', path: '/purge/{subdomain}' },
    'purgeCache: required and optional params',
    async () => {
      const imageSource = await client.imageSources.purgeCache('subdomain', {
        paths: ['image.jpeg', 'image2.png'],
      });
    },
  );
  smokeCase(
    'imageSources.purge:single',
    { operation: 'purge', path: '/image/purge/{source_id}' },
    'purge',
    async () => {
      const imageSource = await client.imageSources.purge('sourceId', {
        paths: ['image.jpeg', 'image2.png'],
      });
    },
  );
});
