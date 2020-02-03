"use strict";

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
var filename = 'lodash.js';

var baseLodash = _path2.default.join(basePath, filename);
var distLodash = _path2.default.join(distPath, filename);

/*----------------------------------------------------------------------------*/

/**
 * Creates browser builds of Lodash at the `target` path.
 *
 * @private
 * @param {string} target The output directory path.
 */
function build() {
  _async2.default.series([file.copy(baseLodash, distLodash), file.min(distLodash)], util.pitch);
}

build();
