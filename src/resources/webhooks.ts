// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { Webhook } from 'standardwebhooks';

export class Webhooks extends APIResource {
  unwrap(
    body: string,
    { headers, key }: { headers: Record<string, string>; key?: string },
  ): ParsedWebhookEvent {
    if (headers !== undefined) {
      const keyStr: string | null = key === undefined ? this._client.webhookSecret : key;
      if (keyStr === null) throw new Error('Webhook key must not be null in order to unwrap');
      const wh = new Webhook(keyStr);
      wh.verify(body, headers);
    }
    return JSON.parse(body) as ParsedWebhookEvent;
  }
}

export interface VideoAssetStatusWebhookEvent {
  /**
   * Video status event that triggered this delivery.
   */
  type:
    | 'video.status.created'
    | 'video.status.downloaded'
    | 'video.status.optimized'
    | 'video.status.ready'
    | 'video.status.errored'
    | 'video.status.deleted'
    | 'video.status.repackaged'
    | 'video.status.stream_ready';
  /**
   * Current asset status. `output` is omitted when this is `deleted` or `errored`.
   */
  status: string;
  /**
   * Video asset id.
   */
  asset_id: string;
  /**
   * Asset creation time, in milliseconds since the Unix epoch.
   */
  created_at: number;
  input: VideoAssetStatusWebhookEvent.Input;
  /**
   * Tags stored on the asset.
   */
  tag?: Array<string>;
  /**
   * Asset title.
   */
  title?: string;
  /**
   * Asset description.
   */
  description?: string;
  /**
   * Omitted when the asset status is `deleted` or `errored`. Playback URLs use `https://video.gumlet.io/{workspace_id}/{asset_id}/`.
   */
  output?: VideoAssetStatusWebhookEvent.Output;
  /**
   * Present when the asset status is `errored` and the asset has an error.
   */
  error?: VideoAssetStatusWebhookEvent.Error;
  /**
   * Included when `process_low_resolution_input` is enabled and the smaller frame dimension is below the minimum for the output format: 240 pixels for `hls`, `dash`, or `abr`, and 145 pixels for `mp4`. Transformations such as resize, crop, pad, and overlay are not applied.
   */
  warning?: VideoAssetStatusWebhookEvent.Warning;
}

export namespace VideoAssetStatusWebhookEvent {
  export interface Input {
    /**
     * Asset transformations copied onto the webhook. Keys are converted from camelCase to snake_case. Nested object keys are converted the same way.
     */
    transformations: Input.Transformations;
    /**
     * URL of the source media.
     */
    source_url?: string;
    /**
     * Source frame rate.
     */
    fps?: number;
    /**
     * Source file size in bytes.
     */
    size?: number;
    /**
     * Source width in pixels.
     */
    width?: number;
    /**
     * Source height in pixels.
     */
    height?: number;
    /**
     * Source duration in seconds.
     */
    duration?: number;
    /**
     * Source aspect ratio, such as `16:9`.
     */
    aspect_ratio?: string;
    /**
     * Custom metadata supplied when the asset was created.
     */
    metadata?: unknown;
    /**
     * Encoding profile id used for the asset.
     */
    profile_id?: string;
    /**
     * Vimeo id, when the asset was imported from Vimeo.
     */
    vimeo_id?: string;
  }

  export namespace Input {
    export interface Transformations {
      /**
       * Output format, such as `abr`, `hls`, `dash`, or `mp4`.
       */
      format?: string;
      width?: string;
      height?: string;
      resolution?: Array<string>;
      audio_codec?: Array<string>;
      video_codec?: Array<string>;
      secondary_video_codec?: string;
      /**
       * Thumbnail selectors from the asset. Entries are strings such as `auto`, or objects of thumbnail options.
       */
      thumbnail?: Array<unknown>;
      /**
       * Thumbnail image format, such as `png`, `jpg`, `jpeg`, or `webp`.
       */
      thumbnail_format?: string;
      audio_only?: boolean;
      mp4_access?: boolean;
      keep_original?: boolean;
      per_title_encoding?: boolean;
      process_low_resolution_input?: boolean;
      pad?: Record<string, unknown>;
      crop?: Record<string, unknown>;
      trim?: Record<string, unknown>;
      text_overlay?: Record<string, unknown>;
      image_overlay?: Record<string, unknown>;
      animated_gif?: unknown;
      generate_subtitles?: unknown;
      preview_thumbnails?: unknown;
      [k: string]: unknown;
    }
  }

  export interface Output {
    /**
     * Asset status URL. Pattern: `https://api.gumlet.com/video/v1/status/{asset_id}`.
     * @format uri
     */
    status_url: string;
    /**
     * For `abr`, `main.m3u8`. For every other format, `main.{target_extension}`.
     * @format uri
     */
    playback_url: string;
    /**
     * One URL per configured thumbnail: `thumbnail-{index}-{format_code}.{thumbnail_format}`. Format codes are png `0`, jpeg `1`, jpg `2`, and webp `3`. Index starts at 1.
     */
    thumbnail_url: Array<string>;
    /**
     * Output format from the asset transformations.
     */
    format?: string;
    /**
     * DASH manifest (`main.mpd`). Present when the format is `abr`.
     * @format uri
     */
    dash_playback_url?: string;
    /**
     * Processed output size in bytes. Present when the asset output has a size.
     */
    storage_bytes?: number;
    /**
     * MP4 download URL (`download.mp4`). Present when `mp4_access` is enabled.
     * @format uri
     */
    download_url?: string;
    /**
     * Animated GIF URL (`animation.gif`). Present when an animated GIF was requested.
     * @format uri
     */
    animated_gif_url?: string;
    /**
     * Preview thumbnail WebVTT (`preview_thumbnails.vtt`). Present when preview thumbnails were requested and the asset is not audio-only.
     * @format uri
     */
    preview_thumbnails_url?: string;
  }

  export interface Error {
    /**
     * Error code stored on the asset.
     */
    code: string;
    /**
     * Error message stored on the asset.
     */
    message: string;
  }

  export interface Warning {
    code: 'WRN_LOW_FRAME_SIZE';
    message: 'Video Asset dimensions are lower than minimum supported frame size (240 pixels for HLS/DASH and 145 pixels for mp4). Any types transformation (resize, crop, pad, overlay etc.) specified would not be applied.';
  }
}

export interface LiveVideoStatusWebhookEvent {
  /**
   * Live video status event that triggered this delivery.
   */
  type:
    | 'live.video.status.created'
    | 'live.video.status.ready'
    | 'live.video.status.preparing'
    | 'live.video.status.connected'
    | 'live.video.status.active'
    | 'live.video.status.complete'
    | 'live.video.status.disconnected';
  /**
   * Current live asset status. `output` is omitted when this is `deleted` or `errored`.
   */
  status: string;
  /**
   * Live asset id.
   */
  live_asset_id: string;
  /**
   * Live asset creation time, in milliseconds since the Unix epoch.
   */
  created_at: number;
  /**
   * Live asset update time, in milliseconds since the Unix epoch.
   */
  updated_at: number;
  input: LiveVideoStatusWebhookEvent.Input;
  /**
   * VOD asset id of the recording. Present when the live asset status is `complete` and a VOD asset exists.
   */
  recording_asset_id?: string;
  /**
   * Workspace id of the recording asset. Present together with `recording_asset_id`.
   */
  vod_collection_id?: string;
  /**
   * Deletion time in milliseconds since the Unix epoch. Present when the status is `deleted` or `errored` and a deletion time is stored.
   */
  deleted_at?: number;
  /**
   * Omitted when the live asset status is `deleted` or `errored`.
   */
  output?: LiveVideoStatusWebhookEvent.Output;
  /**
   * Present when the asset status is `errored` and the asset has an error.
   */
  error?: LiveVideoStatusWebhookEvent.Error;
}

export namespace LiveVideoStatusWebhookEvent {
  export interface Input {
    /**
     * Live video workspace id.
     */
    live_video_source_id: string;
    /**
     * Live asset title. When the asset has no title, Gumlet generates `Live stream at HH:MM:SS on {ordinal day} {month}` in the organization user's time zone.
     */
    title: string;
    /**
     * Renditions configured for the live asset.
     */
    resolution?: Array<string>;
    /**
     * Source width in pixels. Present when the asset status is `active` and primary metadata is available.
     */
    width?: number;
    /**
     * Source height in pixels. Present when the asset status is `active` and primary metadata is available.
     */
    height?: number;
    /**
     * Source aspect ratio. Present when the asset status is `active` and primary metadata is available.
     */
    aspect_ratio?: string;
  }

  export interface Output {
    /**
     * Live playback URL. Uses the Mux playback id when one exists (`https://stream.live.gumlet.io/{playback_id}`). Otherwise `https://video.gumlet.io/{live_video_source_id}/{live_asset_id}/master.m3u8`.
     * @format uri
     */
    playback_url?: string;
    /**
     * Embeddable player URL. Pattern: `https://play.gumlet.io/embed/live/{live_asset_id}`.
     * @format uri
     */
    embed_url?: string;
    /**
     * Recording size in bytes. Present when the asset status is `complete` and output metadata exists.
     */
    storage_size?: number;
    /**
     * Recording duration in seconds. Present when the asset status is `complete` and output metadata exists.
     */
    duration?: number;
    /**
     * Playback URL of the completed recording. When a VOD asset was created, this is `https://video.gumlet.io/{vod_collection_id}/{recording_asset_id}/main.m3u8`. Otherwise it uses the Mux VOD playback id.
     * @format uri
     */
    recording_playback_url?: string;
  }

  export interface Error {
    /**
     * Error code stored on the asset.
     */
    code: string;
    /**
     * Error message stored on the asset.
     */
    message: string;
  }
}

export interface ProductEventWebhookEvent {
  /**
   * Product event that triggered this delivery.
   */
  type:
    | 'event.embed.viewed'
    | 'event.embed.cta_clicked'
    | 'event.video.updated'
    | 'event.video.uploaded'
    | 'event.playlist.created'
    | 'event.playlist.asset'
    | 'event.playlist.deleted'
    | 'event.video.analytics'
    | 'event.image.analytics'
    | 'event.embed.form_submitted'
    | 'event.comment.all'
    | 'event.channel.member_joined';
  [k: string]: unknown;
}

export type ParsedWebhookEvent =
  | VideoAssetStatusWebhookEvent
  | LiveVideoStatusWebhookEvent
  | ProductEventWebhookEvent;

export declare namespace Webhooks {
  export {
    type VideoAssetStatusWebhookEvent as VideoAssetStatusWebhookEvent,
    type LiveVideoStatusWebhookEvent as LiveVideoStatusWebhookEvent,
    type ProductEventWebhookEvent as ProductEventWebhookEvent,
    type ParsedWebhookEvent as ParsedWebhookEvent,
  };
}
