'use strict';

var uglifyoptionsjs_uglifyoptionsjs;

/**
 * The UglifyJS options object for
 * [compress](https://github.com/mishoo/UglifyJS2#compressor-options),
 * [mangle](https://github.com/mishoo/UglifyJS2#mangler-options), and
 * [output](https://github.com/mishoo/UglifyJS2#beautifier-options) options.
 */
uglifyoptionsjs_uglifyoptionsjs = {
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
export { uglifyoptionsjs_uglifyoptionsjs as uglifyoptionsjs };
