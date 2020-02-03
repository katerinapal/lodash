"use strict";

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _async = require("async");

var _async2 = _interopRequireDefault(_async);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _file = require("../common/file");

var file = _interopRequireWildcard(_file);

var _util = require("../common/util");

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

var basePath = _path2.default.join(__dirname, '..', '..');
var distPath = _path2.default.join(basePath, 'dist');

var filePairs = [[_path2.default.join(distPath, 'lodash.core.js'), 'core.js'], [_path2.default.join(distPath, 'lodash.core.min.js'), 'core.min.js'], [_path2.default.join(distPath, 'lodash.min.js'), 'lodash.min.js']];

/*----------------------------------------------------------------------------*/

/**
 * Creates supplementary Lodash modules at the `target` path.
 *
 * @private
 * @param {string} target The output directory path.
 */
function build(target) {
  var actions = _lodash2.default.map(filePairs, function (pair) {
    return file.copy(pair[0], _path2.default.join(target, pair[1]));
  });

  _async2.default.series(actions, util.pitch);
}

build(_lodash2.default.last(process.argv));
