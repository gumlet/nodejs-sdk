// File generated from our OpenAPI spec by Scalar. See README.md for details.

import type { GumletPteLtd } from './client';

export abstract class APIResource {
  protected _client: GumletPteLtd;

  constructor(client: GumletPteLtd) {
    this._client = client;
  }
}
