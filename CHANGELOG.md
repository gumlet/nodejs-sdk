# Changelog

## [1.1.3](https://github.com/gumlet/nodejs-sdk/compare/v1.1.2...v1.1.3) (2026-08-27)


### ⚠ BREAKING CHANGES

* **api:** Removed operation `dataApi.insightsChart` (`POST /video/viewer-analytics`).

### Features

* **api:** remove operation dataApi.insightsChart (+1 more change) ([be1a2ed](https://github.com/gumlet/nodejs-sdk/commit/be1a2edb0ca426aee6501b06ba0edcea50866525))


### Chores

* release 1.1.3 ([f9d78c3](https://github.com/gumlet/nodejs-sdk/commit/f9d78c3594d2321192ae1ca33f5e9b1481414726))
* release 1.1.3 ([bed4e22](https://github.com/gumlet/nodejs-sdk/commit/bed4e2292c1c6bb70e745a9734b2b56d60069c56))

## [1.1.2](https://github.com/gumlet/nodejs-sdk/compare/v1.1.1...v1.1.2) (2026-08-26)


### Features

* **api:** add query param offset on imageSources.list (+2 more changes) ([e610968](https://github.com/gumlet/nodejs-sdk/commit/e610968348071baf5360494be2202d3f18d79ae1))


### Chores

* release 1.1.2 ([b2b2feb](https://github.com/gumlet/nodejs-sdk/commit/b2b2feb35f41ee1575213822db82e9f4920e1470))
* release 1.1.2 ([8f58595](https://github.com/gumlet/nodejs-sdk/commit/8f58595c80a15ca82a4741f218ff5ad1259cb93c))

## [1.1.1](https://github.com/gumlet/nodejs-sdk/compare/v1.1.0...v1.1.1) (2026-08-23)


### Features

* **api:** add operation imageSources.purge ([0a2fd9c](https://github.com/gumlet/nodejs-sdk/commit/0a2fd9cde9c1acfabe25ffc4e371eae4c49c29a0))


### Chores

* release 1.1.1 ([5eeafc9](https://github.com/gumlet/nodejs-sdk/commit/5eeafc9c7eb0e0df0116974f84d1c3ba9271b9b4))

## [1.1.0](https://github.com/gumlet/nodejs-sdk/compare/v1.0.24...v1.1.0) (2026-08-23)


### Features

* **api:** update operation imageSources.purgeCache ([20b48b3](https://github.com/gumlet/nodejs-sdk/commit/20b48b3a30d4d1033e64d38b6fcdbe1fc15f44d9))

## [1.0.24](https://github.com/gumlet/nodejs-sdk/compare/v1.0.23...v1.0.24) (2026-08-23)


### Chores

* **api:** update generated SDK content ([33d4a1a](https://github.com/gumlet/nodejs-sdk/commit/33d4a1a088f3c910ac25aac75c4ee217149c23dd))

## [1.0.23](https://github.com/gumlet/nodejs-sdk/compare/v1.0.22...v1.0.23) (2026-08-22)


### ⚠ BREAKING CHANGES

* **api:** 4 breaking changes to the SDK surface.
    - Removed operation `videoAssets.subtitleUpload` (`POST /video/assets/{asset_ID}/subtitle/upload`).
    - Removed operation `videoAssets.completeSubtitleUpload` (`POST /video/assets/{asset_ID}/subtitle/upload/event`).
    - Removed operation `videoAssets.audioUpload` (`POST /video/assets/{asset_ID}/audio/upload`).
    - Removed operation `videoAssets.completeAudioUpload` (`POST /video/assets/{asset_ID}/audio/upload/event`).

### Features

* **api:** update SDK surface (8 changes) ([5a3e160](https://github.com/gumlet/nodejs-sdk/commit/5a3e1601df2a2c509774400d003e5c85d414d17a))


### Chores

* **api:** update generated SDK content ([c4d856c](https://github.com/gumlet/nodejs-sdk/commit/c4d856c049cc9ef457d0ac5c0c4eab07cf406ef9))
* release 1.0.23 ([e3702a6](https://github.com/gumlet/nodejs-sdk/commit/e3702a6254d4ae54140e836e9258375834bdb985))

## [1.0.22](https://github.com/gumlet/nodejs-sdk/compare/v1.0.21...v1.0.22) (2026-08-21)


### Chores

* **api:** regenerate SDK ([86ac498](https://github.com/gumlet/nodejs-sdk/commit/86ac498a20f40b8b59d80acddf091fbbcfb70cbc))

## [1.0.21](https://github.com/gumlet/nodejs-sdk/compare/v1.0.20...v1.0.21) (2026-08-20)


### Chores

* **api:** update generated SDK content ([453553a](https://github.com/gumlet/nodejs-sdk/commit/453553a11404f62e46a8c5bc6dd8e334e8ab6853))

## [1.0.20](https://github.com/gumlet/nodejs-sdk/compare/v1.0.19...v1.0.20) (2026-08-20)


### Chores

* **api:** update generated SDK content ([ee08bc4](https://github.com/gumlet/nodejs-sdk/commit/ee08bc447cef4adbd246d61b09f4243e344bb6c6))

## [1.0.19](https://github.com/gumlet/nodejs-sdk/compare/v1.0.18...v1.0.19) (2026-08-20)


### ⚠ BREAKING CHANGES

* **api:** Added required body field `filters` to `imageUsageAnalytics.retrieve`.

### Features

* **api:** add body field filters on imageUsageAnalytics.retrieve ([e0f18f0](https://github.com/gumlet/nodejs-sdk/commit/e0f18f0f87db440d9989094cc4b2d3124f2320c5))


### Chores

* release 1.0.19 ([562a0a1](https://github.com/gumlet/nodejs-sdk/commit/562a0a1a25f18889e713a3407f5e1b66b6568d61))

## [1.0.18](https://github.com/gumlet/nodejs-sdk/compare/v1.0.17...v1.0.18) (2026-08-20)


### Chores

* **api:** update generated SDK content ([48fdc31](https://github.com/gumlet/nodejs-sdk/commit/48fdc31fee7a87a989a7d34f365c71d3f959a0b8))

## [1.0.17](https://github.com/gumlet/nodejs-sdk/compare/v1.0.16...v1.0.17) (2026-08-20)


### Chores

* **api:** update generated SDK content ([286142f](https://github.com/gumlet/nodejs-sdk/commit/286142f4ea36e6bf114872496de129721ae61be4))

## [1.0.16](https://github.com/gumlet/nodejs-sdk/compare/v1.0.15...v1.0.16) (2026-08-20)


### ⚠ BREAKING CHANGES

* **api:** Removed operation `imageSources.analytics` (`POST /image/analytics`).

### Features

* **api:** remove operation imageSources.analytics (+1 more change) ([134b4c0](https://github.com/gumlet/nodejs-sdk/commit/134b4c099da458d8f7407fd8a7b113120662661c))


### Chores

* release 1.0.16 ([c41de73](https://github.com/gumlet/nodejs-sdk/commit/c41de733853f7205db85eaa174963faf6045cfcf))

## [1.0.15](https://github.com/gumlet/nodejs-sdk/compare/v1.0.14...v1.0.15) (2026-08-20)


### Chores

* **api:** regenerate SDK ([6ebec4a](https://github.com/gumlet/nodejs-sdk/commit/6ebec4a269d7e7fa634a5d38916c02ca2a5c5dd9))

## [1.0.14](https://github.com/gumlet/nodejs-sdk/compare/v1.0.13...v1.0.14) (2026-08-19)


### Features

* **api:** add body field group_by on imageSources.analytics ([7316216](https://github.com/gumlet/nodejs-sdk/commit/7316216f0c6ce173e20c680bf1dc3b4cce62ed0d))


### Chores

* release 1.0.14 ([ba07ae8](https://github.com/gumlet/nodejs-sdk/commit/ba07ae8e343e64b5cbb972a0d085d72b754d17b4))

## [1.0.13](https://github.com/gumlet/nodejs-sdk/compare/v1.0.12...v1.0.13) (2026-08-19)


### ⚠ BREAKING CHANGES

* **api:** 6 breaking changes to the SDK surface.
    - Removed operation `videoAssets.retrieveStatus` (`GET /video/assets/{asset_id}`).
    - Removed operation `videoAssets.upload2` (`POST /video/assets/{asset_ID}/subtitle/upload`).
    - Removed operation `videoAssets.upload3` (`POST /video/assets/{asset_ID}/audio/upload`).
    - Removed operation `videoUsageAnalytics.createDetails` (`POST /video/analytics`).
    - Removed operation `multipartUpload.listPartUrl` (`GET /video/assets/{asset_id}/multipartupload/{part_number}/sign`).
    - Removed operation `liveStreamAssets.listStatusCopy` (`GET /video/live/assets/{live_asset_id}/history`).
* **api:** 2 breaking changes to the SDK surface.
    - Removed operation `videoAssets.subtitleUploadComplete` (`POST /video/assets/{asset_ID}/subtitle/upload/event`).
    - Removed operation `liveStreamAssets.postVideoliveassetsId` (`POST /video/live/assets/{live_asset_id}/start`).
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
* **api:** update SDK surface (12 changes) ([7fbaf3c](https://github.com/gumlet/nodejs-sdk/commit/7fbaf3c965e45f108fc0a4185f4bace938de814a))
* **api:** update SDK surface (4 changes) ([6cc0991](https://github.com/gumlet/nodejs-sdk/commit/6cc0991b976966341466cb0b7008c7dba80ae91c))


### Chores

* **api:** update generated SDK content ([4645167](https://github.com/gumlet/nodejs-sdk/commit/4645167e62909a6bb2b31fe281fb2e8f7438f933))
* **api:** update generated SDK content ([3a3482c](https://github.com/gumlet/nodejs-sdk/commit/3a3482c83ef4af759ee38a0c02eca42c41d7342b))
* **api:** update generated SDK content ([dc01475](https://github.com/gumlet/nodejs-sdk/commit/dc01475e315454e7222d5f2eb3f90c2f0eed5ebf))
* **api:** update generated SDK content ([9b52f1a](https://github.com/gumlet/nodejs-sdk/commit/9b52f1a49654fe4adbede92f322c97b89b1f0335))
* **api:** update generated SDK content ([2a44dec](https://github.com/gumlet/nodejs-sdk/commit/2a44dec9fe9ca192656ff35f9a21ac10d1184d80))
* release 1.0.13 ([c57ab68](https://github.com/gumlet/nodejs-sdk/commit/c57ab686b789666896667412d1a2554cab469362))

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
