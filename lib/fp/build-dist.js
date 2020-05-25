import ext_lodash__ from "lodash";
import ext_async_async from "async";
import ext_path_path from "path";
import ext_webpack_webpack from "webpack";
import { filejs as commonfile_filejsjs } from "../common/file";
import { utiljs as commonutil_utiljsjs } from "../common/util";
'use strict';

const basePath = ext_path_path.join(__dirname, '..', '..');
const distPath = ext_path_path.join(basePath, 'dist');
const fpPath = ext_path_path.join(basePath, 'fp');
const filename = 'lodash.fp.js';

const fpConfig = {
  'entry': ext_path_path.join(fpPath, '_convertBrowser.js'),
  'output': {
    'path': distPath,
    'filename': filename,
    'library': 'fp',
    'libraryTarget': 'umd'
  },
  'plugins': [
    new ext_webpack_webpack.optimize.OccurenceOrderPlugin,
    new ext_webpack_webpack.optimize.DedupePlugin
  ]
};

const mappingConfig = {
  'entry': ext_path_path.join(fpPath, '_mapping.js'),
  'output': {
    'path': distPath,
    'filename': 'mapping.fp.js',
    'library': 'mapping',
    'libraryTarget': 'umd'
  }
};

/*----------------------------------------------------------------------------*/

/**
 * Creates browser builds of the FP converter and mappings at the `target` path.
 *
 * @private
 * @param {string} target The output directory path.
 */
function build() {
  ext_async_async.series([
    ext_lodash__.partial(ext_webpack_webpack, mappingConfig),
    ext_lodash__.partial(ext_webpack_webpack, fpConfig),
    commonfile_filejsjs.min(ext_path_path.join(distPath, filename))
  ], commonutil_utiljsjs.pitch);
}

build();
