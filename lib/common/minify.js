var minify_minify = minify;
import ext_lodash__ from "lodash";
import ext_fsextra_fs from "fs-extra";
import ext_uglifyjs_uglify from "uglify-js";
import { uglifyoptionsjs as uglifyoptions_uglifyoptionsjsjs } from "./uglify.options";
'use strict';

function minify(srcPath, destPath, callback, options) {
  if (ext_lodash__.isFunction(destPath)) {
    if (ext_lodash__.isObject(callback)) {
      options = callback;
    }
    callback = destPath;
    destPath = undefined;
  }
  if (!destPath) {
    destPath = srcPath.replace(/(?=\.js$)/, '.min');
  }
  const output = ext_uglifyjs_uglify.minify(srcPath, ext_lodash__.defaults(options || {}, uglifyoptions_uglifyoptionsjsjs));
  ext_fsextra_fs.writeFile(destPath, output.code, 'utf-8', callback);
}

/*----------------------------------------------------------------------------*/

/**
 * Asynchronously minifies the file at `srcPath`, writes it to `destPath`, and
 * invokes `callback` upon completion. The callback is invoked with one argument:
 * (error).
 *
 * If unspecified, `destPath` is `srcPath` with an extension of `.min.js`.
 * (e.g. the `destPath` of `path/to/foo.js` would be `path/to/foo.min.js`)
 *
 * @param {string} srcPath The path of the file to minify.
 * @param {string} [destPath] The path to write the file to.
 * @param {Function} callback The function invoked upon completion.
 * @param {Object} [option] The UglifyJS options object.
 */
export { minify_minify as minify };
