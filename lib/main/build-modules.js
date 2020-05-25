import ext_lodash__ from "lodash";
import ext_async_async from "async";
import ext_path_path from "path";
import { filejs as commonfile_filejsjs } from "../common/file";
import { utiljs as commonutil_utiljsjs } from "../common/util";
'use strict';

const basePath = ext_path_path.join(__dirname, '..', '..');
const distPath = ext_path_path.join(basePath, 'dist');

const filePairs = [
  [ext_path_path.join(distPath, 'lodash.core.js'), 'core.js'],
  [ext_path_path.join(distPath, 'lodash.core.min.js'), 'core.min.js'],
  [ext_path_path.join(distPath, 'lodash.min.js'), 'lodash.min.js']
];

/*----------------------------------------------------------------------------*/

/**
 * Creates supplementary Lodash modules at the `target` path.
 *
 * @private
 * @param {string} target The output directory path.
 */
function build(target) {
  const actions = ext_lodash__.map(filePairs, pair =>
    commonfile_filejsjs.copy(pair[0], ext_path_path.join(target, pair[1])));

  ext_async_async.series(actions, commonutil_utiljsjs.pitch);
}

build(ext_lodash__.last(process.argv));
