"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require("./lodash.js");

var _ = _interopRequireWildcard(_lodash);

var _lodashDocGlobals = require("lodash-doc-globals");

var _lodashDocGlobals2 = _interopRequireDefault(_lodashDocGlobals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

'use strict';

delete global['__core-js_shared__'];

exports.default = {
  'babel': false,
  'globals': _.assign({ '_': _ }, _lodashDocGlobals2.default)
};
;
module.exports = exports.default;
