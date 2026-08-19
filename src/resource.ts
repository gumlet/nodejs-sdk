// File generated from our OpenAPI spec by Scalar. See README.md for details.

import type { Gumlet } from './client';

export abstract class APIResource {
  protected _client: Gumlet;

  constructor(client: Gumlet) {
    this._client = client;
  }
}
