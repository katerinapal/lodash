import _ from "lodash";
import async from "async";
import path from "path";
import * as file from "../common/file";
import * as util from "../common/util";
'use strict';

const basePath = path.join(__dirname, '..', '..');
const distPath = path.join(basePath, 'dist');

const filePairs = [
  [path.join(distPath, 'lodash.core.js'), 'core.js'],
  [path.join(distPath, 'lodash.core.min.js'), 'core.min.js'],
  [path.join(distPath, 'lodash.min.js'), 'lodash.min.js']
];

/*----------------------------------------------------------------------------*/

/**
 * Creates supplementary Lodash modules at the `target` path.
 *
 * @private
 * @param {string} target The output directory path.
 */
function build(target) {
  const actions = _.map(filePairs, pair =>
    file.copy(pair[0], path.join(target, pair[1])));

  async.series(actions, util.pitch);
}

build(_.last(process.argv));
