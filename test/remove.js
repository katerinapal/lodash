#!/usr/bin/env node
"use strict";

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

var _ = require('../lodash');

var args = (args = process.argv).slice(args[0] === process.execPath || args[0] === 'node' ? 2 : 0);

var filePath = _path2.default.resolve(args[1]),
    reLine = /.*/gm;

var pattern = function () {
  var result = args[0],
      delimiter = result.charAt(0),
      lastIndex = result.lastIndexOf(delimiter);

  return RegExp(result.slice(1, lastIndex), result.slice(lastIndex + 1));
}();

/*----------------------------------------------------------------------------*/

_fs2.default.writeFileSync(filePath, _fs2.default.readFileSync(filePath, 'utf8').replace(pattern, function (match) {
  var snippet = _.slice(arguments, -3, -2)[0];
  return match.replace(snippet, snippet.replace(reLine, ''));
}));
