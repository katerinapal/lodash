'use strict';

var uglifyoptionsjs_obj = {
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

var exported_compress = {
  "collapse_vars": true,
  "negate_iife": false,
  "pure_getters": true,
  "unsafe": true,
  "warnings": false
};

var exported_output = {
  "ascii_only": true,
  "comments": /@license/,
  "max_line_len": 500
};

export { exported_compress as compress, exported_output as output };
