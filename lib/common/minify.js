"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = minify;

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _fsExtra = require("fs-extra");

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _uglifyJs = require("uglify-js");

var _uglifyJs2 = _interopRequireDefault(_uglifyJs);

var _uglify = require("./uglify.options");

var _uglify2 = _interopRequireDefault(_uglify);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

'use strict';

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
function minify(srcPath, destPath, callback, options) {
  if (_lodash2.default.isFunction(destPath)) {
    if (_lodash2.default.isObject(callback)) {
      options = callback;
    }
    callback = destPath;
    destPath = undefined;
  }
  if (!destPath) {
    destPath = srcPath.replace(/(?=\.js$)/, '.min');
  }
  var output = _uglifyJs2.default.minify(srcPath, _lodash2.default.defaults(options || {}, _uglify2.default));
  _fsExtra2.default.writeFile(destPath, output.code, 'utf-8', callback);
}
module.exports = exports.default;
