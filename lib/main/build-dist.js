import async from "async";
import path from "path";
import { copy as filejs_copy, min as filejs_min } from "../common/file";
import { pitch as utiljs_pitch } from "../common/util";
'use strict';

const basePath = path.join(__dirname, '..', '..');
const distPath = path.join(basePath, 'dist');
const filename = 'lodash.js';

const baseLodash = path.join(basePath, filename);
const distLodash = path.join(distPath, filename);

/*----------------------------------------------------------------------------*/

/**
 * Creates browser builds of Lodash at the `target` path.
 *
 * @private
 * @param {string} target The output directory path.
 */
function build() {
  async.series([
    filejs_copy(baseLodash, distLodash),
    filejs_min(distLodash)
  ], utiljs_pitch);
}

build();
