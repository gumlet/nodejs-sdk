// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIPromise, defaultParseResponse, type APIResponseProps } from '../api-promise';
import type { Gumlet } from '../client';
import { GumletError } from './error';
import type { FinalRequestOptions } from '../internal/request-options';
import { maybeObj } from '../internal/utils/values';

export type PageRequestOptions = Pick<FinalRequestOptions, 'query' | 'headers' | 'body' | 'path' | 'method'>;

export abstract class AbstractPage<Item> implements AsyncIterable<Item> {
  protected readonly client: Gumlet;
  // Writable so a subclass can rewrite what it parsed or the options the next page is built from;
  // a subclass that only reads them is unaffected.
  protected options: FinalRequestOptions;
  protected response: Response;
  protected body: unknown;

  constructor(client: Gumlet, response: Response, body: unknown, options: FinalRequestOptions) {
    this.client = client;
    this.response = response;
    this.body = body;
    // An idempotency key belongs to the one request it was sent with. A page only ever uses these
    // options to build the *next* request, so the key is dropped here and each page gets its own.
    const { idempotencyKey: _idempotencyKey, ...pageOptions } = options;
    this.options = pageOptions;
  }

  abstract nextPageRequestOptions(): PageRequestOptions | null;
  // A plain array, not `readonly`, so a caller can keep a page's items in an `Item[]` it owns.
  abstract getPaginatedItems(): Item[];

  hasNextPage(): boolean {
    const items = this.getPaginatedItems();
    if (!items.length) return false;
    return this.nextPageRequestOptions() !== null;
  }

  async getNextPage(): Promise<this> {
    const nextOptions = this.nextPageRequestOptions();
    if (!nextOptions)
      throw new GumletError(
        'No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.',
      );
    return await this.client.requestAPIList(this.constructor as PageConstructor<this, Item>, nextOptions);
  }

  async *iterPages(): AsyncGenerator<this> {
    let page: this = this;
    yield page;
    while (page.hasNextPage()) {
      page = await page.getNextPage();
      yield page;
    }
  }

  async *[Symbol.asyncIterator](): AsyncGenerator<Item> {
    for await (const page of this.iterPages()) {
      for (const item of page.getPaginatedItems()) yield item;
    }
  }
}

export type PageConstructor<Page extends AbstractPage<Item>, Item> = new (
  client: Gumlet,
  response: Response,
  body: unknown,
  options: FinalRequestOptions,
) => Page;

export class PagePromise<
    Page extends AbstractPage<Item>,
    Item = ReturnType<Page['getPaginatedItems']>[number],
  >
  extends APIPromise<Page>
  implements AsyncIterable<Item>
{
  constructor(client: Gumlet, request: Promise<APIResponseProps>, Page: PageConstructor<Page, Item>) {
    super(
      client,
      request,
      async (client, props) =>
        new Page(client, props.response, await defaultParseResponse(client, props), props.options),
    );
  }

  async *[Symbol.asyncIterator](): AsyncGenerator<Item> {
    const page = await this;
    for await (const item of page) yield item;
  }
}

export interface ProfilePageParams {
  page_number?: number;

  page_size?: number;
}

export interface ImageSourcePageParams {
  page_number?: number;

  page_size?: number;
}

export interface LiveAssetsPageParams {
  page_number?: number;

  page_size?: number;
}

export interface ProfilePageResponse<Item> {
  all_profiles: Array<Item>;
  total_profile_count: number;
  page_size: number;
}

export class ProfilePage<Item> extends AbstractPage<Item> implements ProfilePageResponse<Item> {
  all_profiles: Array<Item>;

  total_profile_count: number;

  page_size: number;

  constructor(client: Gumlet, response: Response, body: unknown, options: FinalRequestOptions) {
    super(client, response, body, options);
    const parsed = body as ProfilePageResponse<Item>;

    this.all_profiles = parsed.all_profiles || [];
    this.total_profile_count = parsed.total_profile_count;
    this.page_size = parsed.page_size;
  }

  getPaginatedItems(): Item[] {
    const items = this.all_profiles;
    return Array.isArray(items) ? items : [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const currentPage = numericPageParam(maybeObj(this.options.query)['page_number'], 1);
    if (currentPage === null) {
      return null;
    }

    const totalPages = null;
    if (totalPages !== null && currentPage >= totalPages) {
      return null;
    }

    const nextPage = currentPage + 1;
    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        page_number: nextPage,
      },
    };
  }
}

export interface ImageSourcePageResponse<Item> {
  all_sources: Array<Item>;
  total_count: number;
  page_size: number;
}

export class ImageSourcePage<Item> extends AbstractPage<Item> implements ImageSourcePageResponse<Item> {
  all_sources: Array<Item>;

  total_count: number;

  page_size: number;

  constructor(client: Gumlet, response: Response, body: unknown, options: FinalRequestOptions) {
    super(client, response, body, options);
    const parsed = body as ImageSourcePageResponse<Item>;

    this.all_sources = parsed.all_sources || [];
    this.total_count = parsed.total_count;
    this.page_size = parsed.page_size;
  }

  getPaginatedItems(): Item[] {
    const items = this.all_sources;
    return Array.isArray(items) ? items : [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const currentPage = numericPageParam(maybeObj(this.options.query)['page_number'], 1);
    if (currentPage === null) {
      return null;
    }

    const totalPages = null;
    if (totalPages !== null && currentPage >= totalPages) {
      return null;
    }

    const nextPage = currentPage + 1;
    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        page_number: nextPage,
      },
    };
  }
}

export interface LiveAssetsPageResponse<Item> {
  all_live_assets: Array<Item>;
  total_live_asset_count: number;
  page_size: number;
}

export class LiveAssetsPage<Item> extends AbstractPage<Item> implements LiveAssetsPageResponse<Item> {
  all_live_assets: Array<Item>;

  total_live_asset_count: number;

  page_size: number;

  constructor(client: Gumlet, response: Response, body: unknown, options: FinalRequestOptions) {
    super(client, response, body, options);
    const parsed = body as LiveAssetsPageResponse<Item>;

    this.all_live_assets = parsed.all_live_assets || [];
    this.total_live_asset_count = parsed.total_live_asset_count;
    this.page_size = parsed.page_size;
  }

  getPaginatedItems(): Item[] {
    const items = this.all_live_assets;
    return Array.isArray(items) ? items : [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const currentPage = numericPageParam(maybeObj(this.options.query)['page_number'], 1);
    if (currentPage === null) {
      return null;
    }

    const totalPages = null;
    if (totalPages !== null && currentPage >= totalPages) {
      return null;
    }

    const nextPage = currentPage + 1;
    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        page_number: nextPage,
      },
    };
  }
}

const numericPageValue = (value: unknown): number | null => {
  if (typeof value === 'number') return Number.isFinite(value) ? value : null;
  if (typeof value === 'string' && value.trim().length > 0) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
};

const numericPageParam = (value: unknown, fallback: number): number | null =>
  value == null ? fallback : numericPageValue(value);
