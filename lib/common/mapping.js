"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mappingjs = undefined;

var _mapping2 = require("../../fp/_mapping");

var _mapping = _interopRequireWildcard(_mapping2);

var _util = require("./util");

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

'use strict';

var Hash = util.Hash;

var mappingjs = new Hash(_mapping._mapping);
exports.mappingjs = mappingjs;
