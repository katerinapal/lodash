"use strict";

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _async = require("async");

var _async2 = _interopRequireDefault(_async);

var _glob = require("glob");

var _glob2 = _interopRequireDefault(_glob);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _mapping = require("../common/mapping");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

var templatePath = _path2.default.join(__dirname, 'template/modules');
var template = file.globTemplate(_path2.default.join(templatePath, '*.jst'));

var aryMethods = _lodash2.default.union(_mapping.mappingjs.aryMethod[1], _mapping.mappingjs.aryMethod[2], _mapping.mappingjs.aryMethod[3], _mapping.mappingjs.aryMethod[4]);

var categories = ['array', 'collection', 'date', 'function', 'lang', 'math', 'number', 'object', 'seq', 'string', 'util'];

var ignored = ['_*.js', 'core.js', 'core.min.js', 'fp.js', 'index.js', 'lodash.js', 'lodash.min.js'];

/**
 * Checks if `name` is a method alias.
 *
 * @private
 * @param {string} name The name to check.
 * @returns {boolean} Returns `true` if `name` is a method alias, else `false`.
 */
function isAlias(name) {
  return _lodash2.default.has(_mapping.mappingjs.aliasToReal, name);
}

/**
 * Checks if `name` is a category name.
 *
 * @private
 * @param {string} name The name to check.
 * @returns {boolean} Returns `true` if `name` is a category name, else `false`.
 */
function isCategory(name) {
  return _lodash2.default.includes(categories, name);
}

/**
 * Checks if `name` belongs to a method that's passed thru and not wrapped.
 *
 * @private
 * @param {string} name The name to check.
 * @returns {boolean} Returns `true` if `name` is of a pass thru method,
 *  else `false`.
 */
function isThru(name) {
  return !_lodash2.default.includes(aryMethods, name);
}

/**
 * Gets metadata for `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {*} Returns the metadata for `func`.
 */
function getTemplate(moduleName) {
  var data = {
    'name': _lodash2.default.get(_mapping.mappingjs.aliasToReal, moduleName, moduleName),
    'mapping': _mapping.mappingjs
  };

  if (isAlias(moduleName)) {
    return template.alias(data);
  }
  if (isCategory(moduleName)) {
    return template.category(data);
  }
  if (isThru(moduleName)) {
    return template.thru(data);
  }
  return template.module(data);
}

/*----------------------------------------------------------------------------*/

/**
 * Creates FP modules at the `target` path.
 *
 * @private
 * @param {string} target The output directory path.
 */
function build(target) {
  target = _path2.default.resolve(target);

  var fpPath = _path2.default.join(target, 'fp');

  // Glob existing lodash module paths.
  var modulePaths = _glob2.default.sync(_path2.default.join(target, '*.js'), {
    'nodir': true,
    'ignore': ignored.map(function (filename) {
      return _path2.default.join(target, filename);
    })
  });

  // Add FP alias and remapped module paths.
  _lodash2.default.each([_mapping.mappingjs.aliasToReal, _mapping.mappingjs.remap], function (data) {
    _lodash2.default.forOwn(data, function (realName, alias) {
      var modulePath = _path2.default.join(target, alias + '.js');
      if (!_lodash2.default.includes(modulePaths, modulePath)) {
        modulePaths.push(modulePath);
      }
    });
  });

  var actions = modulePaths.map(function (modulePath) {
    var moduleName = _path2.default.basename(modulePath, '.js');
    return file.write(_path2.default.join(fpPath, moduleName + '.js'), getTemplate(moduleName));
  });

  actions.unshift(file.copy(_path2.default.join(__dirname, '../../fp'), fpPath));
  actions.push(file.write(_path2.default.join(fpPath, '_falseOptions.js'), template._falseOptions()));
  actions.push(file.write(_path2.default.join(fpPath, '_util.js'), template._util()));
  actions.push(file.write(_path2.default.join(target, 'fp.js'), template.fp()));
  actions.push(file.write(_path2.default.join(fpPath, 'convert.js'), template.convert()));

  _async2.default.series(actions, util.pitch);
}

build(_lodash2.default.last(process.argv));
