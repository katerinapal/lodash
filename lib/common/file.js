import ext_lodash__ from "lodash";
import ext_fsextra_fs from "fs-extra";
import ext_glob_glob from "glob";
import ext_path_path from "path";
import { minify as commonminify_minifyjs } from "../common/minify.js";
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
  return ext_lodash__.partial(ext_fsextra_fs.copy, srcPath, destPath);
}

/**
 * Creates an object of base name and compiled template pairs that match `pattern`.
 *
 * @memberOf file
 * @param {string} pattern The glob pattern to be match.
 * @returns {Object} Returns the object of compiled templates.
 */
function globTemplate(pattern) {
  return ext_lodash__.transform(ext_glob_glob.sync(pattern), (result, filePath) => {
    const key = ext_path_path.basename(filePath, ext_path_path.extname(filePath));
    result[key] = ext_lodash__.template(ext_fsextra_fs.readFileSync(filePath, 'utf8'));
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
  return ext_lodash__.partial(commonminify_minifyjs, srcPath, destPath);
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
  return ext_lodash__.partial(ext_fsextra_fs.writeFile, destPath, data);
}

var filejs_filejs;

/*----------------------------------------------------------------------------*/

filejs_filejs = {
  copy,
  globTemplate,
  min,
  write
};
export { filejs_filejs as filejs };
