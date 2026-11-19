// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource videoProfiles', () => {
  smokeCase(
    'videoProfiles.create:required',
    { operation: 'create', path: '/video/profiles' },
    'create: only required params',
    async () => {
      const videoProfile = await client.videoProfiles.create({
        name: 'Gumlet-Profile-1',
        format: 'ABR',
        transcribe: false,
      });
    },
  );
  smokeCase(
    'videoProfiles.create:all',
    { operation: 'create', path: '/video/profiles' },
    'create: required and optional params',
    async () => {
      const videoProfile = await client.videoProfiles.create({
        name: 'Gumlet-Profile-1',
        format: 'ABR',
        width: '',
        height: '',
        resolution: '',
        crop: {
          width: '',
          height: '',
        },
        pad: {},
        trim: {
          start_offset: 0,
          end_offset: 0,
        },
        image_overlay: {
          url: '',
        },
        text_overlay: {
          text: '',
        },
        animated_gif: {},
        generate_subtitles: {},
        transcribe: false,
        mp4_access: false,
        per_title_encoding: false,
        process_low_resolution_input: false,
        audio_only: false,
        enable_drm: false,
      });
    },
  );
  smokeCase(
    'videoProfiles.list:required',
    { operation: 'list', path: '/video/profiles' },
    'list: only required params',
    async () => {
      const page = await client.videoProfiles.list();
    },
  );
  smokeCase(
    'videoProfiles.list:all',
    { operation: 'list', path: '/video/profiles' },
    'list: required and optional params',
    async () => {
      const page = await client.videoProfiles.list({
        next_page_token: 'nextPageToken',
      });
    },
  );
  smokeCase(
    'videoProfiles.update:required',
    { operation: 'update', path: '/video/profiles/{profile_id}' },
    'update: only required params',
    async () => {
      const videoProfile = await client.videoProfiles.update('profileId', {
        profile_id: '',
        format: 'ABR',
        transcribe: false,
        vc: ['libx264'],
      });
    },
  );
  smokeCase(
    'videoProfiles.update:all',
    { operation: 'update', path: '/video/profiles/{profile_id}' },
    'update: required and optional params',
    async () => {
      const videoProfile = await client.videoProfiles.update('profileId', {
        profile_id: '',
        name: '',
        format: 'ABR',
        width: '',
        height: '',
        resolution: '',
        crop: {
          width: '',
          height: '',
        },
        pad: {},
        trim: {
          start_offset: 0,
          end_offset: 0,
        },
        image_overlay: {
          url: '',
        },
        text_overlay: {
          text: '',
        },
        animated_gif: {},
        generate_subtitles: {},
        transcribe: false,
        mp4_access: false,
        per_title_encoding: false,
        process_low_resolution_input: false,
        audio_only: false,
        enable_drm: false,
        vc: ['libx264'],
        generate_chapters: false,
        generate_description: false,
      });
    },
  );
  smokeCase(
    'videoProfiles.retrieve:single',
    { operation: 'retrieve', path: '/video/profiles/{profile_id}' },
    'retrieve',
    async () => {
      const videoProfile = await client.videoProfiles.retrieve('profileId');
    },
  );
  smokeCase(
    'videoProfiles.delete:single',
    { operation: 'delete', path: '/video/profiles/{profile_id}' },
    'delete',
    async () => {
      const videoProfile = await client.videoProfiles.delete('profileId');
    },
  );
});
