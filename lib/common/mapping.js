"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mapping2 = require("../../fp/_mapping");

var _mapping = _interopRequireWildcard(_mapping2);

var _util = require("./util");

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

'use strict';

var Hash = _util2.default.Hash;

/*----------------------------------------------------------------------------*/

exports.default = new Hash(_mapping);
;
module.exports = exports.default;
