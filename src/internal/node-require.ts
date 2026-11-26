// File generated from our OpenAPI spec by Scalar. See README.md for details.

/*
 * `node:module`'s `createRequire` for the webhook error bridge, on the one runtime that has no
 * synchronous way to it: an ES module application on Node before 20.16, on 21 or on 22 before 22.3,
 * which has no `process.getBuiltinModule`.
 *
 * This file is what every runtime other than Node loads, so it never imports a `node:` module: a
 * browser or edge bundle that met one would fail to build. The build writes a Node-only sibling,
 * `node-require.node.js`, which imports `createRequire` statically (see `scripts/finalize-build.mjs`),
 * and the package's `imports` map sends the ES module build there under the `node` condition alone.
 * The CommonJS build, and the source, always load this file, since they reach `node:module` without it.
 */

/** Always `undefined` here; the Node-only sibling exports the real `createRequire`. */
export const createRequire: ((path: string) => unknown) | undefined = undefined;
