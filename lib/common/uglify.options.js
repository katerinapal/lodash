'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var uglifyoptionsjs = {
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

var uglifyoptionsjs_compress = {
  "collapse_vars": true,
  "negate_iife": false,
  "pure_getters": true,
  "unsafe": true,
  "warnings": false
};

var uglifyoptionsjs_output = {
  "ascii_only": true,
  "comments": /@license/,
  "max_line_len": 500
};

exports.compress = uglifyoptionsjs_compress;
exports.output = uglifyoptionsjs_output;
