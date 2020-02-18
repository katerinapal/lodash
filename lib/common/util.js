"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.util_pitch = exports.util_Hash = undefined;

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

/*----------------------------------------------------------------------------*/

/**
 * Creates a hash object. If a `properties` object is provided, its own
 * enumerable properties are assigned to the created hash.
 *
 * @memberOf util
 * @param {Object} [properties] The properties to assign to the hash.
 * @returns {Object} Returns the new hash object.
 */
function Hash(properties) {
  return _lodash2.default.transform(properties, function (result, value, key) {
    result[key] = _lodash2.default.isPlainObject(value) && !(value instanceof Hash) ? new Hash(value) : value;
  }, this);
}

Hash.prototype = Object.create(null);

/**
 * This method throws any error it receives.
 *
 * @memberOf util
 * @param {Object} [error] The error object.
 */
function pitch(error) {
  if (error != null) {
    throw error;
  }
}

var util = {
  Hash: Hash,
  pitch: pitch
};

var util_Hash = Hash;
var util_pitch = pitch;
exports.util_Hash = util_Hash;
exports.util_pitch = util_pitch;
