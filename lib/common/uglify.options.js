'use strict';

var exported_uglifyoptionsjs = {
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

var exported_uglifyoptionsjs_compress = {
  "collapse_vars": true,
  "negate_iife": false,
  "pure_getters": true,
  "unsafe": true,
  "warnings": false
};

var exported_uglifyoptionsjs_output = {
  "ascii_only": true,
  "comments": /@license/,
  "max_line_len": 500
};

export { exported_uglifyoptionsjs_compress as compress, exported_uglifyoptionsjs_output as output };
