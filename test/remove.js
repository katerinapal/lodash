#!/usr/bin/env node
import ext_fs_fs from "fs";
import ext_path_path from "path";
'use strict';

var _ = {};

var args = (args = process.argv)
  .slice((args[0] === process.execPath || args[0] === 'node') ? 2 : 0);

var filePath = ext_path_path.resolve(args[1]),
    reLine = /.*/gm;

var pattern = (function() {
  var result = args[0],
      delimiter = result.charAt(0),
      lastIndex = result.lastIndexOf(delimiter);

  return RegExp(result.slice(1, lastIndex), result.slice(lastIndex + 1));
}());

/*----------------------------------------------------------------------------*/

ext_fs_fs.writeFileSync(filePath, ext_fs_fs.readFileSync(filePath, 'utf8').replace(pattern, function(match) {
  var snippet = _.slice(arguments, -3, -2)[0];
  return match.replace(snippet, snippet.replace(reLine, ''));
}));
