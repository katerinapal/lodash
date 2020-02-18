'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var uglifyoptions = {
  'compress': {
    'collapse_vars': true,
    'negate_iife': false,
    'pure_getters': true,
    'unsafe': true,
    'warnings': false
  },
  'output': {
    'ascii_only': true,
    'comments': /@license/,
    'max_line_len': 500
  }
};

var uglifyoptions_compress = {
  "collapse_vars": true,
  "negate_iife": false,
  "pure_getters": true,
  "unsafe": true,
  "warnings": false
};

var uglifyoptions_output = {
  "ascii_only": true,
  "comments": /@license/,
  "max_line_len": 500
};

exports.uglifyoptions_compress = uglifyoptions_compress;
exports.uglifyoptions_output = uglifyoptions_output;
