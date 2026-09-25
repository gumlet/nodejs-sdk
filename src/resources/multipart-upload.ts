// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class MultipartUpload extends APIResource {
  /**
   * Use this endpoint to retrieve a pre-signed upload URL for the given part number.
   *
   * @param {string} partNumber - Part number of multiple parts of the original video which you you are uploading
   * @param {MultipartUploadRetrievePartURLParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MultipartUploadRetrievePartURLResponse>} 200
   *
   * @example
   * ```ts
   * const multipartUpload = await client.multipartUpload.retrievePartURL('partNumber', {
   *   asset_id: 'assetId',
   * });
   * ```
   */
  retrievePartURL(
    partNumber: string,
    params: MultipartUploadRetrievePartURLParams,
    options?: RequestOptions,
  ): APIPromise<MultipartUploadRetrievePartURLResponse> {
    const { asset_id } = params;
    return this._client.get(
      __scalarPath`/video/assets/${asset_id}/multipartupload/${partNumber}/sign`,
      options,
    );
  }

  /**
   * Once you upload all parts to S3 bucket via pre-signed URL, use this endpoint to complete the multipart upload.
   *
   * @param {string} assetID - An asset id for which you are uploading original video via multipart
   * @param {MultipartUploadCompleteParams} [body] - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MultipartUploadCompleteResponse>} 200
   *
   * @example
   * ```ts
   * const multipartUpload = await client.multipartUpload.complete('assetId');
   * ```
   */
  complete(
    assetID: string,
    body: MultipartUploadCompleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MultipartUploadCompleteResponse> {
    return this._client.post(__scalarPath`/video/assets/${assetID}/multipartupload/complete`, {
      body,
      ...options,
    });
  }

  /**
   * This call aborts multi-part upload and deletes the already uploaded parts from the storage.
   *
   * @param {string} assetID - An asset id for the asset.
   * @param {MultipartUploadAbortParams} [body] - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MultipartUploadAbortResponse>} Successful response
   *
   * @example
   * ```ts
   * const multipartUpload = await client.multipartUpload.abort('assetId');
   * ```
   */
  abort(
    assetID: string,
    body: MultipartUploadAbortParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MultipartUploadAbortResponse> {
    return this._client.post(__scalarPath`/video/assets/${assetID}/multipartupload/abort`, {
      body,
      ...options,
    });
  }

  /**
   * Lists all parts uploaded so far.
   *
   * @param {string} assetID - An asset id for the asset.
   * @param {MultipartUploadListParams} [body] - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MultipartUploadListResponse>} Successful response
   *
   * @example
   * ```ts
   * const multipartUpload = await client.multipartUpload.list('assetId');
   * ```
   */
  list(
    assetID: string,
    body: MultipartUploadListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MultipartUploadListResponse> {
    return this._client.post(__scalarPath`/video/assets/${assetID}/multipartupload/list`, {
      body,
      ...options,
    });
  }
}

export interface MultipartUploadRetrievePartURLParams {
  /**
   * An asset id of the created asset for which you are uploading parts
   */
  asset_id: string;
}

export interface MultipartUploadRetrievePartURLResponse {
  asset_id?: string;
  part_number?: string;
  part_upload_url?: string;
}

export interface MultipartUploadCompleteParams {
  /**
   * List of object containing part number with ETag received as a response header while uploading each part
   */
  parts?: Array<MultipartUploadCompleteParams.Part>;
}

export namespace MultipartUploadCompleteParams {
  export interface Part {
    /**
     * @format int32
     */
    PartNumber?: number;
    /**
     * ETag received while uploading the part using PUT
     */
    ETag?: string;
  }
}

export type MultipartUploadCompleteResponse = Record<string, unknown>;

export type MultipartUploadAbortParams = Record<string, unknown>;

export type MultipartUploadAbortResponse = Record<string, unknown>;

export type MultipartUploadListParams = Record<string, unknown>;

export interface MultipartUploadListResponse {
  parts: Array<MultipartUploadListResponse.Part>;
}

export namespace MultipartUploadListResponse {
  export interface Part {
    /**
     * Part number
     */
    PartNumber: number;
    /**
     * Size of the uploaded part
     * @format uint64
     */
    Size?: number;
    /**
     * ETag of the uploaded part
     */
    ETag?: string;
  }
}
export declare namespace MultipartUpload {
  export {
    type MultipartUploadRetrievePartURLResponse as MultipartUploadRetrievePartURLResponse,
    type MultipartUploadCompleteResponse as MultipartUploadCompleteResponse,
    type MultipartUploadAbortResponse as MultipartUploadAbortResponse,
    type MultipartUploadListResponse as MultipartUploadListResponse,
    type MultipartUploadRetrievePartURLParams as MultipartUploadRetrievePartURLParams,
    type MultipartUploadCompleteParams as MultipartUploadCompleteParams,
    type MultipartUploadAbortParams as MultipartUploadAbortParams,
    type MultipartUploadListParams as MultipartUploadListParams,
  };
}
