import * as _ from "./lodash.js";
import globals from "lodash-doc-globals";
'use strict';

delete global['__core-js_shared__'];

export default {
  'babel': false,
  'globals': _.assign({ '_': _ }, globals)
};;
