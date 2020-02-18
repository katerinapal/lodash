"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.file_write = exports.file_min = exports.file_globTemplate = exports.file_copy = undefined;

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _fsExtra = require("fs-extra");

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _glob = require("glob");

var _glob2 = _interopRequireDefault(_glob);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _minify = require("../common/minify.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  return _lodash2.default.partial(_fsExtra2.default.copy, srcPath, destPath);
}

/**
 * Creates an object of base name and compiled template pairs that match `pattern`.
 *
 * @memberOf file
 * @param {string} pattern The glob pattern to be match.
 * @returns {Object} Returns the object of compiled templates.
 */
function globTemplate(pattern) {
  return _lodash2.default.transform(_glob2.default.sync(pattern), function (result, filePath) {
    var key = _path2.default.basename(filePath, _path2.default.extname(filePath));
    result[key] = _lodash2.default.template(_fsExtra2.default.readFileSync(filePath, 'utf8'));
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
  return _lodash2.default.partial(_minify.minify, srcPath, destPath);
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
  return _lodash2.default.partial(_fsExtra2.default.writeFile, destPath, data);
}

var file = {
  copy: copy,
  globTemplate: globTemplate,
  min: min,
  write: write
};

var file_copy = copy;
var file_globTemplate = globTemplate;
var file_min = min;
var file_write = write;
exports.file_copy = file_copy;
exports.file_globTemplate = file_globTemplate;
exports.file_min = file_min;
exports.file_write = file_write;
