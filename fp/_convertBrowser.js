Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = browserConvert;

var _baseConvert = require('./_baseConvert');

var _baseConvert2 = _interopRequireDefault(_baseConvert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts `lodash` to an immutable auto-curried iteratee-first data-last
 * version with conversion `options` applied.
 *
 * @param {Function} lodash The lodash function to convert.
 * @param {Object} [options] The options object. See `baseConvert` for more details.
 * @returns {Function} Returns the converted `lodash`.
 */
function browserConvert(lodash, options) {
  return (0, _baseConvert2.default)(lodash, lodash, options);
}

if (typeof _ == 'function' && typeof _.runInContext == 'function') {
  _ = browserConvert(_.runInContext());
}
module.exports = exports.default;
