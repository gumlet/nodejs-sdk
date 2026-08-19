# Changelog

## [2.0.0](https://github.com/gumlet/nodejs-sdk/compare/v1.0.12...v2.0.0) (2026-08-19)


### ⚠ BREAKING CHANGES

* **api:** 20 breaking changes to the SDK surface.
    - Operation `videoAssets.list` route changed from `GET /video/assets/list/{workspace_id}` to `GET /video/workspaces/{workspace_id}/list`.
    - Serialization or defaults of query param `type` on `videoAssets.list` changed.
    - Serialization or defaults of query param `sortBy` on `videoAssets.list` changed.
    - Serialization or defaults of query param `orderBy` on `videoAssets.list` changed.
    - Serialization or defaults of query param `offset` on `videoAssets.list` changed.
    - Serialization or defaults of query param `size` on `videoAssets.list` changed.
    - Removed query param `folder` from `videoAssets.list`.
    - Removed operation `videoAssets.selectFrom` (`POST /video/assets/{asset_id}/thumbnail-select`).
    - Removed operation `videoAssets.selectFromImageFile` (`POST /video/assets/{asset_ID}/thumbnail`).
    - Removed operation `videoAssets.postVideoassetrecover` (`POST /video/asset/recover`).
    - Removed operation `videoAssets.listWorkspaceContent` (`GET /video/workspaces/{workspace_id}/list`).
    - Removed operation `videoUsageAnalytics.create` (`POST /video/analytics`).
    - Removed operation `videoUsageAnalytics.streamingDuration` (`GET /video/streaming-duration`).
    - Removed operation `multipartUpload.signPart` (`GET /video/assets/{asset_id}/multipartupload/{part_number}/sign`).
    - Removed operation `videoPlaylists.createAssetTo` (`POST /video/playlist/{playlist_id}/asset`).
    - Removed operation `videoPlaylists.deleteAssetFrom` (`DELETE /video/playlist/{playlist_id}/asset`).
    - Removed operation `videoPlaylists.deleteId` (`DELETE /video/playlist/{playlist_id}`).
    - Removed operation `videoPlaylists.reorderAssets2` (`POST /video/playlists/{playlist_id}/reorder`).
    - Removed operation `folders.create1` (`POST /video/workspaces/{workspace_id}/folders`).
    - Removed operation `folders.deleteAssetsFrom` (`POST /video/workspaces/{workspace_id}/remove-assets-from-folder`).
* **api:** Serialization or defaults of query param `page` on `videoUsageAnalytics.streamingDuration` changed.

### Features

* **api:** update operation videoAssets.list (+39 more changes) ([00b3b34](https://github.com/gumlet/nodejs-sdk/commit/00b3b343fafad88b708787bd119009bf36e5d492))
* **api:** update SDK surface (1 change) ([380a4d6](https://github.com/gumlet/nodejs-sdk/commit/380a4d61f5f4c4e76f1b3ae62ac76f867a38184d))


### Chores

* **api:** update generated SDK content ([9b52f1a](https://github.com/gumlet/nodejs-sdk/commit/9b52f1a49654fe4adbede92f322c97b89b1f0335))
* **api:** update generated SDK content ([2a44dec](https://github.com/gumlet/nodejs-sdk/commit/2a44dec9fe9ca192656ff35f9a21ac10d1184d80))

## [1.0.12](https://github.com/gumlet/nodejs-sdk/compare/v1.0.10...v1.0.12) (2026-08-19)


### ⚠ BREAKING CHANGES

* **api:** Renamed SDK from `GumletPteLtd` to `Gumlet`.

### Features

* **api:** update SDK name ([8cfa385](https://github.com/gumlet/nodejs-sdk/commit/8cfa38550946b69af7b97ecf4c4c2c4fbe43b0ab))


### Chores

* **api:** update generated SDK content ([1e004ad](https://github.com/gumlet/nodejs-sdk/commit/1e004adc57128e597c5d571642fb84d296223106))
* release 1.0.1 ([87d0945](https://github.com/gumlet/nodejs-sdk/commit/87d0945e8fa83ee4f31be5a7524b75c8efcdca4b))
* release 1.0.12 ([5b399d7](https://github.com/gumlet/nodejs-sdk/commit/5b399d78c03abeefdd39d1517e464dbb74fba932))

## [1.0.10](https://github.com/gumlet/nodejs-sdk/compare/v1.0.8...v1.0.10) (2026-08-19)


### ⚠ BREAKING CHANGES

* **api:** 2 breaking changes to the SDK surface.
    - Removed operation `videoAssets.uploadSubtitleCompletion` (`POST /video/assets/{asset_ID}/subtitle/upload/event`).
    - Removed operation `videoAssets.uploadAudioCompletion` (`POST /video/assets/{asset_ID}/audio/upload/event`).

### Features

* **api:** update SDK surface (4 changes) ([6759d57](https://github.com/gumlet/nodejs-sdk/commit/6759d5769ccc1eef251d9b00c6af5ad3b8bf31f9))


### Chores

* **api:** update generated SDK content ([b96850b](https://github.com/gumlet/nodejs-sdk/commit/b96850b8d1b7e4b01bc0a2bc2d28dbb95e5032c4))
* release 1.0.10 ([992af3d](https://github.com/gumlet/nodejs-sdk/commit/992af3d72890922b9c51abdc65ee77574941f569))

## [1.0.8](https://github.com/gumlet/nodejs-sdk/compare/v1.0.7...v1.0.8) (2026-08-19)


### Chores

* **api:** update generated SDK content ([4cf0bd4](https://github.com/gumlet/nodejs-sdk/commit/4cf0bd4313bda37481bf271fa613946f3b4a34f2))

## [1.0.7](https://github.com/gumlet/nodejs-sdk/compare/v1.0.6...v1.0.7) (2026-08-19)


### Chores

* **api:** update generated SDK content ([63054b0](https://github.com/gumlet/nodejs-sdk/commit/63054b067dc490624cf0bf6f1afe2123ddc6b12f))

## [1.0.6](https://github.com/gumlet/nodejs-sdk/compare/v1.0.5...v1.0.6) (2026-08-19)


### Chores

* **api:** update generated SDK content ([8bc507d](https://github.com/gumlet/nodejs-sdk/commit/8bc507d74a5bcd53a147e3b378e4c4de20d17673))

## [1.0.5](https://github.com/gumlet/nodejs-sdk/compare/v1.0.4...v1.0.5) (2026-08-19)


### ⚠ BREAKING CHANGES

* **api:** Renamed SDK from `Gumlet` to `GumletPteLtd`.

### Features

* **api:** update SDK name ([58ba716](https://github.com/gumlet/nodejs-sdk/commit/58ba7165414ecf596cdd01ef524464c84e203861))


### Chores

* release 1.0.5 ([85af2f3](https://github.com/gumlet/nodejs-sdk/commit/85af2f343305cb06b634fd21661ff5ac316d748b))

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
