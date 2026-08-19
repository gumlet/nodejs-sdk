# Changelog

## [1.0.4](https://github.com/gumlet/nodejs-sdk/compare/v1.0.2...v1.0.4) (2026-08-19)


### ⚠ BREAKING CHANGES

* **api:** Response content type of `imageSources.retrieve` changed from `none` to `application/json`.

### Features

* **api:** update response of imageSources.retrieve (+8 more changes) ([c50a08a](https://github.com/gumlet/nodejs-sdk/commit/c50a08aa55ad0e7afa0c12fcbffae71124de2a15))


### Chores

* release 1.0.4 ([33a1260](https://github.com/gumlet/nodejs-sdk/commit/33a12608a225562e483dbdeccd6554dbad00a686))

## [1.0.2](https://github.com/gumlet/nodejs-sdk/compare/v1.0.1...v1.0.2) (2026-08-18)


### Chores

* **api:** update generated SDK content ([83e8b66](https://github.com/gumlet/nodejs-sdk/commit/83e8b664477355ddca1addc5f92e22567c8c343b))

## [1.0.1](https://github.com/gumlet/nodejs-sdk/compare/v0.3.0...v1.0.1) (2026-08-18)


### Chores

* **api:** update generated SDK content ([1272dbc](https://github.com/gumlet/nodejs-sdk/commit/1272dbc211ba84e7effcc1e99b6af6ba61dda5af))
* release 1.0.1 ([dbb26fb](https://github.com/gumlet/nodejs-sdk/commit/dbb26fba6fbba0c5e861a6718337b40b956c8c89))

## [0.3.0](https://github.com/gumlet/nodejs-sdk/compare/v0.2.0...v0.3.0) (2026-08-18)


### ⚠ BREAKING CHANGES

* **api:** 2 breaking changes to the SDK surface.
    - Serialization or defaults of query param `sortBy` on `videoAssets.list` changed.
    - Removed operation `imageSources.retrieve` (`GET /image/sources/{source_id}`).
* **api:** Removed operation `videoAssets.selectFrom` (`POST /video/assets/{asset_id}/thumbnail`).
* **api:** 6 breaking changes to the SDK surface.
    - Removed `apiKey` auth scheme `sec0`.
    - Body field `collection_id` on `videoAssets.upload` is now required.
    - Removed body field `keep_original` from `videoAssets.upload`.
    - Removed body field `thumbnail` from `videoAssets.upload`.
    - Removed body field `enable_preview_thumbnails` from `videoAssets.upload`.
    - Removed body field `workspace_id` from `videoAssets.upload`.

### Features

* **api:** add body field webfolder on imageSources.create ([c9fa4d8](https://github.com/gumlet/nodejs-sdk/commit/c9fa4d8b7f9b74db31715ab6fb2ae3965b3a4948))
* **api:** add operation videoAssets.selectFrom (+1 more change) ([fe97207](https://github.com/gumlet/nodejs-sdk/commit/fe97207b38f6998908b737152bcaf708be33638c))
* **api:** remove auth scheme sec0 (+8 more changes) ([7572925](https://github.com/gumlet/nodejs-sdk/commit/7572925f4a9c9f476005006f5fa83697d045bb9c))
* **api:** remove operation videoAssets.selectFrom ([06f91b4](https://github.com/gumlet/nodejs-sdk/commit/06f91b43540c8dbd5e1f841c164ea1488c19cb18))
* **api:** update SDK surface (2 changes) ([a751d90](https://github.com/gumlet/nodejs-sdk/commit/a751d90f64cec2cb782b9be58989f2087b523aed))


### Chores

* **api:** update generated SDK content ([52f9e2f](https://github.com/gumlet/nodejs-sdk/commit/52f9e2f2e7e1bf4ed27c3cf426c679774b7ae97c))
* **api:** update generated SDK content ([a3daf9d](https://github.com/gumlet/nodejs-sdk/commit/a3daf9d0aeb0db24700341257519b22c4439e939))
* **api:** update generated SDK content ([30990bc](https://github.com/gumlet/nodejs-sdk/commit/30990bc63d7ac7a3f795a1f402e9df091637111c))
* **api:** update generated SDK content ([c8128bf](https://github.com/gumlet/nodejs-sdk/commit/c8128bfaa9cf852564b1a868afb08fcabed16cf3))
* **api:** update generated SDK content ([29c0932](https://github.com/gumlet/nodejs-sdk/commit/29c0932e7c7f2301abd509f9718cce7102ade160))
* **api:** update generated SDK content ([75abc43](https://github.com/gumlet/nodejs-sdk/commit/75abc43dc1696c4f90df60c6e363dba2d024af61))
* **api:** update generated SDK content ([3f88213](https://github.com/gumlet/nodejs-sdk/commit/3f882133e26a4c5bfc2506b8d02241a11e8b0bcd))

## [0.2.0](https://github.com/gumlet/nodejs-sdk/compare/v0.1.0...v0.2.0) (2026-08-17)


### ⚠ BREAKING CHANGES

* **api:** Renamed SDK from `GumletRestApis` to `Gumlet`.

### Features

* **api:** initial SDK generation ([80e6e4c](https://github.com/gumlet/nodejs-sdk/commit/80e6e4c11931f73f407bdbbc61472ad5cee12db6))
* **api:** update SDK name ([0caf315](https://github.com/gumlet/nodejs-sdk/commit/0caf315b4211b2b08934b8f818884291cc884b2d))


### Chores

* **api:** update generated SDK content ([55fd9a2](https://github.com/gumlet/nodejs-sdk/commit/55fd9a2c0bfc62069440b60f9ecd7ee7a56864e7))
* **api:** update generated SDK content ([7a977a5](https://github.com/gumlet/nodejs-sdk/commit/7a977a5944720c0e258df679065346e75e87b964))
* **api:** update generated SDK content ([c15cc65](https://github.com/gumlet/nodejs-sdk/commit/c15cc650a283d649d31b031856445161b239333c))
