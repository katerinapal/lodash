import ext_lodash__ from "lodash";
import ext_async_async from "async";
import ext_glob_glob from "glob";
import ext_path_path from "path";
import { filejs as commonfile_filejsjs } from "../common/file";
import { mappingjs as commonmapping_mappingjsjs } from "../common/mapping";
import { utiljs as commonutil_utiljsjs } from "../common/util";
'use strict';

const templatePath = ext_path_path.join(__dirname, 'template/modules');
const template = commonfile_filejsjs.globTemplate(ext_path_path.join(templatePath, '*.jst'));

const aryMethods = ext_lodash__.union(
  commonmapping_mappingjsjs.aryMethod[1],
  commonmapping_mappingjsjs.aryMethod[2],
  commonmapping_mappingjsjs.aryMethod[3],
  commonmapping_mappingjsjs.aryMethod[4]
);

const categories = [
  'array',
  'collection',
  'date',
  'function',
  'lang',
  'math',
  'number',
  'object',
  'seq',
  'string',
  'util'
];

const ignored = [
  '_*.js',
  'core.js',
  'core.min.js',
  'fp.js',
  'index.js',
  'lodash.js',
  'lodash.min.js'
];

/**
 * Checks if `name` is a method alias.
 *
 * @private
 * @param {string} name The name to check.
 * @returns {boolean} Returns `true` if `name` is a method alias, else `false`.
 */
function isAlias(name) {
  return ext_lodash__.has(commonmapping_mappingjsjs.aliasToReal, name);
}

/**
 * Checks if `name` is a category name.
 *
 * @private
 * @param {string} name The name to check.
 * @returns {boolean} Returns `true` if `name` is a category name, else `false`.
 */
function isCategory(name) {
  return ext_lodash__.includes(categories, name);
}

/**
 * Checks if `name` belongs to a method that's passed thru and not wrapped.
 *
 * @private
 * @param {string} name The name to check.
 * @returns {boolean} Returns `true` if `name` is of a pass thru method,
 *  else `false`.
 */
function isThru(name) {
  return !ext_lodash__.includes(aryMethods, name);
}

/**
 * Gets metadata for `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {*} Returns the metadata for `func`.
 */
function getTemplate(moduleName) {
  const data = {
    'name': ext_lodash__.get(commonmapping_mappingjsjs.aliasToReal, moduleName, moduleName),
    'mapping': commonmapping_mappingjsjs
  };

  if (isAlias(moduleName)) {
    return template.alias(data);
  }
  if (isCategory(moduleName)) {
    return template.category(data);
  }
  if (isThru(moduleName)) {
    return template.thru(data);
  }
  return template.module(data);
}

/*----------------------------------------------------------------------------*/

/**
 * Creates FP modules at the `target` path.
 *
 * @private
 * @param {string} target The output directory path.
 */
function build(target) {
  target = ext_path_path.resolve(target);

  const fpPath = ext_path_path.join(target, 'fp');

  // Glob existing lodash module paths.
  const modulePaths = ext_glob_glob.sync(ext_path_path.join(target, '*.js'), {
    'nodir': true,
    'ignore': ignored.map(filename => {
      return ext_path_path.join(target, filename);
    })
  });

  // Add FP alias and remapped module paths.
  ext_lodash__.each([commonmapping_mappingjsjs.aliasToReal, commonmapping_mappingjsjs.remap], data => {
    ext_lodash__.forOwn(data, (realName, alias) => {
      const modulePath = ext_path_path.join(target, alias + '.js');
      if (!ext_lodash__.includes(modulePaths, modulePath)) {
        modulePaths.push(modulePath);
      }
    });
  });

  const actions = modulePaths.map(modulePath => {
    const moduleName = ext_path_path.basename(modulePath, '.js');
    return commonfile_filejsjs.write(ext_path_path.join(fpPath, moduleName + '.js'), getTemplate(moduleName));
  });

  actions.unshift(commonfile_filejsjs.copy(ext_path_path.join(__dirname, '../../fp'), fpPath));
  actions.push(commonfile_filejsjs.write(ext_path_path.join(fpPath, '_falseOptions.js'), template._falseOptions()));
  actions.push(commonfile_filejsjs.write(ext_path_path.join(fpPath, '_util.js'), template._util()));
  actions.push(commonfile_filejsjs.write(ext_path_path.join(target, 'fp.js'), template.fp()));
  actions.push(commonfile_filejsjs.write(ext_path_path.join(fpPath, 'convert.js'), template.convert()));

  ext_async_async.series(actions, commonutil_utiljsjs.pitch);
}

build(ext_lodash__.last(process.argv));
