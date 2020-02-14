"use strict";

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _async = require("async");

var _async2 = _interopRequireDefault(_async);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _webpack = require("webpack");

var _webpack2 = _interopRequireDefault(_webpack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

var basePath = _path2.default.join(__dirname, '..', '..');
var distPath = _path2.default.join(basePath, 'dist');
var fpPath = _path2.default.join(basePath, 'fp');
var filename = 'lodash.fp.js';

var fpConfig = {
  'entry': _path2.default.join(fpPath, '_convertBrowser.js'),
  'output': {
    'path': distPath,
    'filename': filename,
    'library': 'fp',
    'libraryTarget': 'umd'
  },
  'plugins': [new _webpack2.default.optimize.OccurenceOrderPlugin(), new _webpack2.default.optimize.DedupePlugin()]
};

var mappingConfig = {
  'entry': _path2.default.join(fpPath, '_mapping.js'),
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
  _async2.default.series([_lodash2.default.partial(_webpack2.default, mappingConfig), _lodash2.default.partial(_webpack2.default, fpConfig), file.min(_path2.default.join(distPath, filename))], util.pitch);
}

build();
