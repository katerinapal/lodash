"use strict";

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _fsExtra = require("fs-extra");

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _file = require("../common/file");

var _file2 = _interopRequireDefault(_file);

var _mapping = require("../common/mapping");

var _mapping2 = _interopRequireDefault(_mapping);

var _util = require("../common/util");

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

'use strict';

var templatePath = _path2.default.join(__dirname, 'template/doc');
var template = _file2.default.globTemplate(_path2.default.join(templatePath, '*.jst'));

var argNames = ['a', 'b', 'c', 'd'];

var templateData = {
  mapping: _mapping2.default,
  toArgOrder: toArgOrder,
  toFuncList: toFuncList
};

/**
 * Converts arranged argument `indexes` into a named argument string
 * representation of their order.
 *
 * @private
 * @param {number[]} indexes The arranged argument indexes.
 * @returns {string} Returns the named argument string.
 */
function toArgOrder(indexes) {
  var reordered = [];
  _lodash2.default.each(indexes, function (newIndex, index) {
    reordered[newIndex] = argNames[index];
  });
  return '`(' + reordered.join(', ') + ')`';
}

/**
 * Converts `funcNames` into a chunked list string representation.
 *
 * @private
 * @param {string[]} funcNames The function names.
 * @returns {string} Returns the function list string.
 */
function toFuncList(funcNames) {
  var chunks = _lodash2.default.chunk(funcNames.slice().sort(), 5);
  var lastChunk = _lodash2.default.last(chunks);
  var lastName = lastChunk ? lastChunk.pop() : undefined;

  chunks = _lodash2.default.reject(chunks, _lodash2.default.isEmpty);
  lastChunk = _lodash2.default.last(chunks);

  var result = '`' + _lodash2.default.map(chunks, function (chunk) {
    return chunk.join('`, `') + '`';
  }).join(',\n`');
  if (lastName == null) {
    return result;
  }
  if (_lodash2.default.size(chunks) > 1 || _lodash2.default.size(lastChunk) > 1) {
    result += ',';
  }
  result += ' &';
  result += _lodash2.default.size(lastChunk) < 5 ? ' ' : '\n';
  return result + '`' + lastName + '`';
}

/*----------------------------------------------------------------------------*/

/**
 * Creates the FP-Guide wiki at the `target` path.
 *
 * @private
 * @param {string} target The output file path.
 */
function build(target) {
  target = _path2.default.resolve(target);
  _fsExtra2.default.writeFile(target, template.wiki(templateData), _util2.default.pitch);
}

build(_lodash2.default.last(process.argv));
