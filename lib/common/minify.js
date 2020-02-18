import _ from "lodash";
import fs from "fs-extra";
import uglify from "uglify-js";
import { uglifyoptionsjs as uglifyOptions } from "./uglify.options";
'use strict';

function minify(srcPath, destPath, callback, options) {
  if (_.isFunction(destPath)) {
    if (_.isObject(callback)) {
      options = callback;
    }
    callback = destPath;
    destPath = undefined;
  }
  if (!destPath) {
    destPath = srcPath.replace(/(?=\.js$)/, '.min');
  }
  const output = uglify.minify(srcPath, _.defaults(options || {}, uglifyOptions));
  fs.writeFile(destPath, output.code, 'utf-8', callback);
}

var exported_minify = minify;

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
export { exported_minify as minify };
