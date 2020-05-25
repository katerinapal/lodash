import ext_async_async from "async";
import ext_path_path from "path";
import { filejs as commonfile_filejsjs } from "../common/file";
import { utiljs as commonutil_utiljsjs } from "../common/util";
'use strict';

const basePath = ext_path_path.join(__dirname, '..', '..');
const distPath = ext_path_path.join(basePath, 'dist');
const filename = 'lodash.js';

const baseLodash = ext_path_path.join(basePath, filename);
const distLodash = ext_path_path.join(distPath, filename);

/*----------------------------------------------------------------------------*/

/**
 * Creates browser builds of Lodash at the `target` path.
 *
 * @private
 * @param {string} target The output directory path.
 */
function build() {
  ext_async_async.series([
    commonfile_filejsjs.copy(baseLodash, distLodash),
    commonfile_filejsjs.min(distLodash)
  ], commonutil_utiljsjs.pitch);
}

build();
