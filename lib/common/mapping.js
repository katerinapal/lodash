import { aliasToReal as _mapping } from "../../fp/_mapping";
import { util_Hash } from "./util";
'use strict';

const Hash = util_Hash;

var exported_mappingjs = new Hash(_mapping);
export { exported_mappingjs as mappingjs };
