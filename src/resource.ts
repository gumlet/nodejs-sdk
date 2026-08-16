// File generated from our OpenAPI spec by Scalar. See README.md for details.

import type { GumletRestAPIs } from './client';

export abstract class APIResource {
  protected _client: GumletRestAPIs;

  constructor(client: GumletRestAPIs) {
    this._client = client;
  }
}
