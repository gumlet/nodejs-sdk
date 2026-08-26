// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class SubtitleUpload extends APIResource {
  /**
   * Upload `.srt` or `.vtt`  file to the video asset. The response of this API call gives `upload_url` for each language specified. You need to send a `PUT` request of the subtitle files to those URLs. Once that's done, you need to call the subtitle upload complete API. Only after that, Gumlet will add subtitles to asset.
   *
   * @param {string} assetID - An asset id for the previously created asset.
   * @param {SubtitleUploadUploadParams} [body] - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SubtitleUploadUploadResponse>} 200
   *
   * @example
   * ```ts
   * const subtitleUpload = await client.subtitleUpload.upload('assetId');
   * ```
   */
  upload(
    assetID: string,
    body: SubtitleUploadUploadParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubtitleUploadUploadResponse> {
    return this._client.post(__scalarPath`/video/assets/${assetID}/subtitle/upload`, { body, ...options });
  }

  /**
   * This API must be called after adding subtitles; the add subtitle call gives you URLs to upload, and you complete a `PUT` request to those URLs.
   * Once that is done, calling this initiates the process to actually add the subtitle to the video.
   *
   * @param {string} assetID - An asset id for the previously created asset.
   * @param {SubtitleUploadCompleteParams} [body] - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SubtitleUploadCompleteResponse>} 200
   *
   * @example
   * ```ts
   * const subtitleUpload = await client.subtitleUpload.complete('assetId');
   * ```
   */
  complete(
    assetID: string,
    body: SubtitleUploadCompleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubtitleUploadCompleteResponse> {
    return this._client.post(__scalarPath`/video/assets/${assetID}/subtitle/upload/event`, {
      body,
      ...options,
    });
  }
}

export interface SubtitleUploadUploadParams {
  /**
   * List of language Code to upload subtitle file  (use <a href='https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes'> ISO 639-1 </a> Language Codes)
   */
  language_codes?: Array<string>;
}

export interface SubtitleUploadUploadResponse {
  /**
   * Asset ID of Gumlet
   */
  asset_id: string;
  signed_urls: Array<SubtitleUploadUploadResponse.SignedURL>;
}

export namespace SubtitleUploadUploadResponse {
  export interface SignedURL {
    language_code: string;
    upload_url: string;
  }
}

export interface SubtitleUploadCompleteParams {
  upload_responses?: Array<SubtitleUploadCompleteParams.UploadResponse>;
}

export namespace SubtitleUploadCompleteParams {
  export interface UploadResponse {
    /**
     * Language Code for uploaded .srt or .vtt file.
     */
    language_code?: string;
    /**
     * Status of language uploaded .srt or .vtt file. (If status code was 200, You can mark true else false)
     */
    uploaded?: boolean;
  }
}

export type SubtitleUploadCompleteResponse = Record<string, unknown>;
export declare namespace SubtitleUpload {
  export {
    type SubtitleUploadUploadResponse as SubtitleUploadUploadResponse,
    type SubtitleUploadCompleteResponse as SubtitleUploadCompleteResponse,
    type SubtitleUploadUploadParams as SubtitleUploadUploadParams,
    type SubtitleUploadCompleteParams as SubtitleUploadCompleteParams,
  };
}
