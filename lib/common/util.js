import ext_lodash__ from "lodash";
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
  return ext_lodash__.transform(properties, (result, value, key) => {
    result[key] = (ext_lodash__.isPlainObject(value) && !(value instanceof Hash))
      ? new Hash(value)
      : value;
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

var utiljs_utiljs;

utiljs_utiljs = {
  Hash,
  pitch
};
export { utiljs_utiljs as utiljs };
