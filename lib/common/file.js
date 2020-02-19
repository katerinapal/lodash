import _ from "lodash";
import fs from "fs-extra";
import glob from "glob";
import path from "path";
import * as minify from "../common/minify.js";
'use strict';

/*----------------------------------------------------------------------------*/

/**
 * Creates a [fs.copy](https://github.com/jprichardson/node-fs-extra#copy)
 * function with `srcPath` and `destPath` partially applied.
 *
 * @memberOf file
 * @param {string} srcPath The path of the file to copy.
 * @param {string} destPath The path to copy the file to.
 * @returns {Function} Returns the partially applied function.
 */
function copy(srcPath, destPath) {
  return _.partial(fs.copy, srcPath, destPath);
}

/**
 * Creates an object of base name and compiled template pairs that match `pattern`.
 *
 * @memberOf file
 * @param {string} pattern The glob pattern to be match.
 * @returns {Object} Returns the object of compiled templates.
 */
function globTemplate(pattern) {
  return _.transform(glob.sync(pattern), (result, filePath) => {
    const key = path.basename(filePath, path.extname(filePath));
    result[key] = _.template(fs.readFileSync(filePath, 'utf8'));
  }, {});
}

/**
 * Creates a `minify` function with `srcPath` and `destPath` partially applied.
 *
 * @memberOf file
 * @param {string} srcPath The path of the file to minify.
 * @param {string} destPath The path to write the file to.
 * @returns {Function} Returns the partially applied function.
 */
function min(srcPath, destPath) {
  return _.partial(minify, srcPath, destPath);
}

/**
 * Creates a [fs.writeFile](https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback)
 * function with `filePath` and `data` partially applied.
 *
 * @memberOf file
 * @param {string} destPath The path to write the file to.
 * @param {string} data The data to write to the file.
 * @returns {Function} Returns the partially applied function.
 */
function write(destPath, data) {
  return _.partial(fs.writeFile, destPath, data);
}

var filejs = {
  copy,
  globTemplate,
  min,
  write
};

var filejs_copy = copy;
var filejs_globTemplate = globTemplate;
var filejs_min = min;
var filejs_write = write;
export { filejs_copy as copy, filejs_globTemplate as globTemplate, filejs_min as min, filejs_write as write };
