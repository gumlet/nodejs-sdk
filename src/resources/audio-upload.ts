// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class AudioUpload extends APIResource {
  /**
   * Add any audio file to the video asset.
   * The response of this API call gives `upload_url` for each language specified. You need to send a `PUT` request of the audio files to those URLs. Once that's done, you need to call the audio upload complete API. Only after that will Gumlet add audio to the asset.
   *
   * @param {string} assetID - An asset id for the previously created asset.
   * @param {AudioUploadUploadParams} [body] - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AudioUploadUploadResponse>} 200
   *
   * @example
   * ```ts
   * const upload = await client.audioUpload.upload('assetId');
   * ```
   */
  upload(
    assetID: string,
    body: AudioUploadUploadParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AudioUploadUploadResponse> {
    return this._client.post(__scalarPath`/video/assets/${assetID}/audio/upload`, { body, ...options });
  }

  /**
   * This API must be called after adding audio(s); The add audio call gives you URLs to upload, and you complete a `PUT` request to those URLs.
   * Once that is done, calling this initiates the process to actually add the subtitle to the video.
   *
   * @param {string} assetID - An asset id for the previously created asset.
   * @param {AudioUploadCompleteParams} [body] - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AudioUploadCompleteResponse>} 200
   *
   * @example
   * ```ts
   * const complete = await client.audioUpload.complete('assetId');
   * ```
   */
  complete(
    assetID: string,
    body: AudioUploadCompleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AudioUploadCompleteResponse> {
    return this._client.post(__scalarPath`/video/assets/${assetID}/audio/upload/event`, { body, ...options });
  }
}

export interface AudioUploadUploadParams {
  /**
   * List of language Code to upload audio file  (use <a href='https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes'> ISO 639-1 </a> Language Codes)
   */
  language_codes?: Array<string>;
}

export interface AudioUploadUploadResponse {
  /**
   * Gumlet Asset ID
   */
  asset_id: string;
  signed_urls: Array<AudioUploadUploadResponse.SignedURL>;
}

export namespace AudioUploadUploadResponse {
  export interface SignedURL {
    language_code: string;
    upload_url: string;
  }
}

export interface AudioUploadCompleteParams {
  upload_responses?: Array<AudioUploadCompleteParams.UploadResponse>;
}

export namespace AudioUploadCompleteParams {
  export interface UploadResponse {
    /**
     * Language Code for uploaded audio file.
     */
    language_code?: string;
    /**
     * Status of language uploaded audio file. (If status code was 200, You can mark true else false)
     */
    uploaded?: boolean;
  }
}

export type AudioUploadCompleteResponse = Record<string, unknown>;
export declare namespace AudioUpload {
  export {
    type AudioUploadUploadResponse as AudioUploadUploadResponse,
    type AudioUploadCompleteResponse as AudioUploadCompleteResponse,
    type AudioUploadUploadParams as AudioUploadUploadParams,
    type AudioUploadCompleteParams as AudioUploadCompleteParams,
  };
}
