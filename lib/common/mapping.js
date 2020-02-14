"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mappingjs = undefined;

var _mapping2 = require("../../fp/_mapping");

var _util = require("./util");

'use strict';

var Hash = _util.util_Hash;

var exported_mappingjs = new Hash(_mapping2.aliasToReal);
exports.mappingjs = exported_mappingjs;
