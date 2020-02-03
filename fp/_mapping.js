Object.defineProperty(exports, "__esModule", {
  value: true
});
var exported_each = "forEach";
var exported_eachRight = "forEachRight";
var exported_entries = "toPairs";
var exported_entriesIn = "toPairsIn";
var exported_extend = "assignIn";
var exported_extendAll = "assignInAll";
var exported_extendAllWith = "assignInAllWith";
var exported_extendWith = "assignInWith";
var exported_first = "head";
var exported_conforms = "conformsTo";
var exported_matches = "isMatch";
var exported_property = "get";
var exported___ = "placeholder";
var exported_F = "stubFalse";
var exported_T = "stubTrue";
var exported_all = "every";
var exported_allPass = "overEvery";
var exported_always = "constant";
var exported_any = "some";
var exported_anyPass = "overSome";
var exported_apply = "spread";
var exported_assoc = "set";
var exported_assocPath = "set";
var exported_complement = "negate";
var exported_compose = "flowRight";
var exported_contains = "includes";
var exported_dissoc = "unset";
var exported_dissocPath = "unset";
var exported_dropLast = "dropRight";
var exported_dropLastWhile = "dropRightWhile";
var exported_equals = "isEqual";
var exported_identical = "eq";
var exported_indexBy = "keyBy";
var exported_init = "initial";
var exported_invertObj = "invert";
var exported_juxt = "over";
var exported_omitAll = "omit";
var exported_nAry = "ary";
var exported_path = "get";
var exported_pathEq = "matchesProperty";
var exported_pathOr = "getOr";
var exported_paths = "at";
var exported_pickAll = "pick";
var exported_pipe = "flow";
var exported_pluck = "map";
var exported_prop = "get";
var exported_propEq = "matchesProperty";
var exported_propOr = "getOr";
var exported_props = "at";
var exported_symmetricDifference = "xor";
var exported_symmetricDifferenceBy = "xorBy";
var exported_symmetricDifferenceWith = "xorWith";
var exported_takeLast = "takeRight";
var exported_takeLastWhile = "takeRightWhile";
var exported_unapply = "rest";
var exported_unnest = "flatten";
var exported_useWith = "overArgs";
var exported_where = "conformsTo";
var exported_whereEq = "isMatch";
var exported_zipObj = "zipObject";

var exported_aliasToReal = {
  // Lodash aliases.
  "each": "forEach",

  "eachRight": "forEachRight",
  "entries": "toPairs",
  "entriesIn": "toPairsIn",
  "extend": "assignIn",
  "extendAll": "assignInAll",
  "extendAllWith": "assignInAllWith",
  "extendWith": "assignInWith",
  "first": "head",

  // Methods that are curried variants of others.
  "conforms": "conformsTo",

  "matches": "isMatch",
  "property": "get",

  // Ramda aliases.
  "__": "placeholder",

  "F": "stubFalse",
  "T": "stubTrue",
  "all": "every",
  "allPass": "overEvery",
  "always": "constant",
  "any": "some",
  "anyPass": "overSome",
  "apply": "spread",
  "assoc": "set",
  "assocPath": "set",
  "complement": "negate",
  "compose": "flowRight",
  "contains": "includes",
  "dissoc": "unset",
  "dissocPath": "unset",
  "dropLast": "dropRight",
  "dropLastWhile": "dropRightWhile",
  "equals": "isEqual",
  "identical": "eq",
  "indexBy": "keyBy",
  "init": "initial",
  "invertObj": "invert",
  "juxt": "over",
  "omitAll": "omit",
  "nAry": "ary",
  "path": "get",
  "pathEq": "matchesProperty",
  "pathOr": "getOr",
  "paths": "at",
  "pickAll": "pick",
  "pipe": "flow",
  "pluck": "map",
  "prop": "get",
  "propEq": "matchesProperty",
  "propOr": "getOr",
  "props": "at",
  "symmetricDifference": "xor",
  "symmetricDifferenceBy": "xorBy",
  "symmetricDifferenceWith": "xorWith",
  "takeLast": "takeRight",
  "takeLastWhile": "takeRightWhile",
  "unapply": "rest",
  "unnest": "flatten",
  "useWith": "overArgs",
  "where": "conformsTo",
  "whereEq": "isMatch",
  "zipObj": "zipObject"
};

var exported_aryMethod = {
  "1": ["assignAll", "assignInAll", "attempt", "castArray", "ceil", "create", "curry", "curryRight", "defaultsAll", "defaultsDeepAll", "floor", "flow", "flowRight", "fromPairs", "invert", "iteratee", "memoize", "method", "mergeAll", "methodOf", "mixin", "nthArg", "over", "overEvery", "overSome", "rest", "reverse", "round", "runInContext", "spread", "template", "trim", "trimEnd", "trimStart", "uniqueId", "words", "zipAll"],

  "2": ["add", "after", "ary", "assign", "assignAllWith", "assignIn", "assignInAllWith", "at", "before", "bind", "bindAll", "bindKey", "chunk", "cloneDeepWith", "cloneWith", "concat", "conformsTo", "countBy", "curryN", "curryRightN", "debounce", "defaults", "defaultsDeep", "defaultTo", "delay", "difference", "divide", "drop", "dropRight", "dropRightWhile", "dropWhile", "endsWith", "eq", "every", "filter", "find", "findIndex", "findKey", "findLast", "findLastIndex", "findLastKey", "flatMap", "flatMapDeep", "flattenDepth", "forEach", "forEachRight", "forIn", "forInRight", "forOwn", "forOwnRight", "get", "groupBy", "gt", "gte", "has", "hasIn", "includes", "indexOf", "intersection", "invertBy", "invoke", "invokeMap", "isEqual", "isMatch", "join", "keyBy", "lastIndexOf", "lt", "lte", "map", "mapKeys", "mapValues", "matchesProperty", "maxBy", "meanBy", "merge", "mergeAllWith", "minBy", "multiply", "nth", "omit", "omitBy", "overArgs", "pad", "padEnd", "padStart", "parseInt", "partial", "partialRight", "partition", "pick", "pickBy", "propertyOf", "pull", "pullAll", "pullAt", "random", "range", "rangeRight", "rearg", "reject", "remove", "repeat", "restFrom", "result", "sampleSize", "some", "sortBy", "sortedIndex", "sortedIndexOf", "sortedLastIndex", "sortedLastIndexOf", "sortedUniqBy", "split", "spreadFrom", "startsWith", "subtract", "sumBy", "take", "takeRight", "takeRightWhile", "takeWhile", "tap", "throttle", "thru", "times", "trimChars", "trimCharsEnd", "trimCharsStart", "truncate", "union", "uniqBy", "uniqWith", "unset", "unzipWith", "without", "wrap", "xor", "zip", "zipObject", "zipObjectDeep"],

  "3": ["assignInWith", "assignWith", "clamp", "differenceBy", "differenceWith", "findFrom", "findIndexFrom", "findLastFrom", "findLastIndexFrom", "getOr", "includesFrom", "indexOfFrom", "inRange", "intersectionBy", "intersectionWith", "invokeArgs", "invokeArgsMap", "isEqualWith", "isMatchWith", "flatMapDepth", "lastIndexOfFrom", "mergeWith", "orderBy", "padChars", "padCharsEnd", "padCharsStart", "pullAllBy", "pullAllWith", "rangeStep", "rangeStepRight", "reduce", "reduceRight", "replace", "set", "slice", "sortedIndexBy", "sortedLastIndexBy", "transform", "unionBy", "unionWith", "update", "xorBy", "xorWith", "zipWith"],

  "4": ["fill", "setWith", "updateWith"]
};

var exported_aryRearg = {
  "2": [1, 0],
  "3": [2, 0, 1],
  "4": [3, 2, 0, 1]
};

var exported_iterateeAry = {
  "dropRightWhile": 1,
  "dropWhile": 1,
  "every": 1,
  "filter": 1,
  "find": 1,
  "findFrom": 1,
  "findIndex": 1,
  "findIndexFrom": 1,
  "findKey": 1,
  "findLast": 1,
  "findLastFrom": 1,
  "findLastIndex": 1,
  "findLastIndexFrom": 1,
  "findLastKey": 1,
  "flatMap": 1,
  "flatMapDeep": 1,
  "flatMapDepth": 1,
  "forEach": 1,
  "forEachRight": 1,
  "forIn": 1,
  "forInRight": 1,
  "forOwn": 1,
  "forOwnRight": 1,
  "map": 1,
  "mapKeys": 1,
  "mapValues": 1,
  "partition": 1,
  "reduce": 2,
  "reduceRight": 2,
  "reject": 1,
  "remove": 1,
  "some": 1,
  "takeRightWhile": 1,
  "takeWhile": 1,
  "times": 1,
  "transform": 2
};

var exported_iterateeRearg = {
  "mapKeys": [1],
  "reduceRight": [1, 0]
};

var exported_methodRearg = {
  "assignInAllWith": [1, 0],
  "assignInWith": [1, 2, 0],
  "assignAllWith": [1, 0],
  "assignWith": [1, 2, 0],
  "differenceBy": [1, 2, 0],
  "differenceWith": [1, 2, 0],
  "getOr": [2, 1, 0],
  "intersectionBy": [1, 2, 0],
  "intersectionWith": [1, 2, 0],
  "isEqualWith": [1, 2, 0],
  "isMatchWith": [2, 1, 0],
  "mergeAllWith": [1, 0],
  "mergeWith": [1, 2, 0],
  "padChars": [2, 1, 0],
  "padCharsEnd": [2, 1, 0],
  "padCharsStart": [2, 1, 0],
  "pullAllBy": [2, 1, 0],
  "pullAllWith": [2, 1, 0],
  "rangeStep": [1, 2, 0],
  "rangeStepRight": [1, 2, 0],
  "setWith": [3, 1, 2, 0],
  "sortedIndexBy": [2, 1, 0],
  "sortedLastIndexBy": [2, 1, 0],
  "unionBy": [1, 2, 0],
  "unionWith": [1, 2, 0],
  "updateWith": [3, 1, 2, 0],
  "xorBy": [1, 2, 0],
  "xorWith": [1, 2, 0],
  "zipWith": [1, 2, 0]
};

var exported_methodSpread = {
  "assignAll": {
    "start": 0
  },

  "assignAllWith": {
    "start": 0
  },

  "assignInAll": {
    "start": 0
  },

  "assignInAllWith": {
    "start": 0
  },

  "defaultsAll": {
    "start": 0
  },

  "defaultsDeepAll": {
    "start": 0
  },

  "invokeArgs": {
    "start": 2
  },

  "invokeArgsMap": {
    "start": 2
  },

  "mergeAll": {
    "start": 0
  },

  "mergeAllWith": {
    "start": 0
  },

  "partial": {
    "start": 1
  },

  "partialRight": {
    "start": 1
  },

  "without": {
    "start": 1
  },

  "zipAll": {
    "start": 0
  }
};

var exported_mutate = {
  "array": {
    "fill": true,
    "pull": true,
    "pullAll": true,
    "pullAllBy": true,
    "pullAllWith": true,
    "pullAt": true,
    "remove": true,
    "reverse": true
  },

  "object": {
    "assign": true,
    "assignAll": true,
    "assignAllWith": true,
    "assignIn": true,
    "assignInAll": true,
    "assignInAllWith": true,
    "assignInWith": true,
    "assignWith": true,
    "defaults": true,
    "defaultsAll": true,
    "defaultsDeep": true,
    "defaultsDeepAll": true,
    "merge": true,
    "mergeAll": true,
    "mergeAllWith": true,
    "mergeWith": true
  },

  "set": {
    "set": true,
    "setWith": true,
    "unset": true,
    "update": true,
    "updateWith": true
  }
};

var exported_realToAlias = function () {
  var hasOwnProperty = Object.prototype.hasOwnProperty,
      object = aliasToReal_obj,
      result = {};

  for (var key in object) {
    var value = object[key];
    if (hasOwnProperty.call(result, value)) {
      result[value].push(key);
    } else {
      result[value] = [key];
    }
  }
  return result;
}();

var exported_remap = {
  "assignAll": "assign",
  "assignAllWith": "assignWith",
  "assignInAll": "assignIn",
  "assignInAllWith": "assignInWith",
  "curryN": "curry",
  "curryRightN": "curryRight",
  "defaultsAll": "defaults",
  "defaultsDeepAll": "defaultsDeep",
  "findFrom": "find",
  "findIndexFrom": "findIndex",
  "findLastFrom": "findLast",
  "findLastIndexFrom": "findLastIndex",
  "getOr": "get",
  "includesFrom": "includes",
  "indexOfFrom": "indexOf",
  "invokeArgs": "invoke",
  "invokeArgsMap": "invokeMap",
  "lastIndexOfFrom": "lastIndexOf",
  "mergeAll": "merge",
  "mergeAllWith": "mergeWith",
  "padChars": "pad",
  "padCharsEnd": "padEnd",
  "padCharsStart": "padStart",
  "propertyOf": "get",
  "rangeStep": "range",
  "rangeStepRight": "rangeRight",
  "restFrom": "rest",
  "spreadFrom": "spread",
  "trimChars": "trim",
  "trimCharsEnd": "trimEnd",
  "trimCharsStart": "trimStart",
  "zipAll": "zip"
};

var exported_skipFixed = {
  "castArray": true,
  "flow": true,
  "flowRight": true,
  "iteratee": true,
  "mixin": true,
  "rearg": true,
  "runInContext": true
};

var exported_skipRearg = {
  "add": true,
  "assign": true,
  "assignIn": true,
  "bind": true,
  "bindKey": true,
  "concat": true,
  "difference": true,
  "divide": true,
  "eq": true,
  "gt": true,
  "gte": true,
  "isEqual": true,
  "lt": true,
  "lte": true,
  "matchesProperty": true,
  "merge": true,
  "multiply": true,
  "overArgs": true,
  "partial": true,
  "partialRight": true,
  "propertyOf": true,
  "random": true,
  "range": true,
  "rangeRight": true,
  "subtract": true,
  "zip": true,
  "zipObject": true,
  "zipObjectDeep": true
};

exports.aliasToReal = exported_aliasToReal;
exports.aryMethod = exported_aryMethod;
exports.aryRearg = exported_aryRearg;
exports.iterateeAry = exported_iterateeAry;
exports.iterateeRearg = exported_iterateeRearg;
exports.methodRearg = exported_methodRearg;
exports.methodSpread = exported_methodSpread;
exports.mutate = exported_mutate;
exports.realToAlias = exported_realToAlias;
exports.remap = exported_remap;
exports.skipFixed = exported_skipFixed;
exports.skipRearg = exported_skipRearg;

var exported_dropRightWhile = 1;
var exported_dropWhile = 1;
var exported_every = 1;
var exported_filter = 1;
var exported_find = 1;
var exported_findFrom = 1;
var exported_findIndex = 1;
var exported_findIndexFrom = 1;
var exported_findKey = 1;
var exported_findLast = 1;
var exported_findLastFrom = 1;
var exported_findLastIndex = 1;
var exported_findLastIndexFrom = 1;
var exported_findLastKey = 1;
var exported_flatMap = 1;
var exported_flatMapDeep = 1;
var exported_flatMapDepth = 1;
var exported_forEach = 1;
var exported_forEachRight = 1;
var exported_forIn = 1;
var exported_forInRight = 1;
var exported_forOwn = 1;
var exported_forOwnRight = 1;
var exported_map = 1;
var exported_mapKeys = 1;
var exported_mapValues = 1;
var exported_partition = 1;
var exported_reduce = 2;
var exported_reduceRight = 2;
var exported_reject = 1;
var exported_remove = 1;
var exported_some = 1;
var exported_takeRightWhile = 1;
var exported_takeWhile = 1;
var exported_times = 1;
var exported_transform = 2;
var exported_mapKeys = [1];
var exported_reduceRight = [1, 0];
var exported_assignInAllWith = [1, 0];
var exported_assignInWith = [1, 2, 0];
var exported_assignAllWith = [1, 0];
var exported_assignWith = [1, 2, 0];
var exported_differenceBy = [1, 2, 0];
var exported_differenceWith = [1, 2, 0];
var exported_getOr = [2, 1, 0];
var exported_intersectionBy = [1, 2, 0];
var exported_intersectionWith = [1, 2, 0];
var exported_isEqualWith = [1, 2, 0];
var exported_isMatchWith = [2, 1, 0];
var exported_mergeAllWith = [1, 0];
var exported_mergeWith = [1, 2, 0];
var exported_padChars = [2, 1, 0];
var exported_padCharsEnd = [2, 1, 0];
var exported_padCharsStart = [2, 1, 0];
var exported_pullAllBy = [2, 1, 0];
var exported_pullAllWith = [2, 1, 0];
var exported_rangeStep = [1, 2, 0];
var exported_rangeStepRight = [1, 2, 0];
var exported_setWith = [3, 1, 2, 0];
var exported_sortedIndexBy = [2, 1, 0];
var exported_sortedLastIndexBy = [2, 1, 0];
var exported_unionBy = [1, 2, 0];
var exported_unionWith = [1, 2, 0];
var exported_updateWith = [3, 1, 2, 0];
var exported_xorBy = [1, 2, 0];
var exported_xorWith = [1, 2, 0];
var exported_zipWith = [1, 2, 0];

var exported_assignAll = {
  "start": 0
};

var exported_assignAllWith = {
  "start": 0
};

var exported_assignInAll = {
  "start": 0
};

var exported_assignInAllWith = {
  "start": 0
};

var exported_defaultsAll = {
  "start": 0
};

var exported_defaultsDeepAll = {
  "start": 0
};

var exported_invokeArgs = {
  "start": 2
};

var exported_invokeArgsMap = {
  "start": 2
};

var exported_mergeAll = {
  "start": 0
};

var exported_mergeAllWith = {
  "start": 0
};

var exported_partial = {
  "start": 1
};

var exported_partialRight = {
  "start": 1
};

var exported_without = {
  "start": 1
};

var exported_zipAll = {
  "start": 0
};

var exported_array = {
  "fill": true,
  "pull": true,
  "pullAll": true,
  "pullAllBy": true,
  "pullAllWith": true,
  "pullAt": true,
  "remove": true,
  "reverse": true
};

var exported_object = {
  "assign": true,
  "assignAll": true,
  "assignAllWith": true,
  "assignIn": true,
  "assignInAll": true,
  "assignInAllWith": true,
  "assignInWith": true,
  "assignWith": true,
  "defaults": true,
  "defaultsAll": true,
  "defaultsDeep": true,
  "defaultsDeepAll": true,
  "merge": true,
  "mergeAll": true,
  "mergeAllWith": true,
  "mergeWith": true
};

var exported_set = {
  "set": true,
  "setWith": true,
  "unset": true,
  "update": true,
  "updateWith": true
};

var exported_assignAll = "assign";
var exported_assignAllWith = "assignWith";
var exported_assignInAll = "assignIn";
var exported_assignInAllWith = "assignInWith";
var exported_curryN = "curry";
var exported_curryRightN = "curryRight";
var exported_defaultsAll = "defaults";
var exported_defaultsDeepAll = "defaultsDeep";
var exported_findFrom = "find";
var exported_findIndexFrom = "findIndex";
var exported_findLastFrom = "findLast";
var exported_findLastIndexFrom = "findLastIndex";
var exported_getOr = "get";
var exported_includesFrom = "includes";
var exported_indexOfFrom = "indexOf";
var exported_invokeArgs = "invoke";
var exported_invokeArgsMap = "invokeMap";
var exported_lastIndexOfFrom = "lastIndexOf";
var exported_mergeAll = "merge";
var exported_mergeAllWith = "mergeWith";
var exported_padChars = "pad";
var exported_padCharsEnd = "padEnd";
var exported_padCharsStart = "padStart";
var exported_propertyOf = "get";
var exported_rangeStep = "range";
var exported_rangeStepRight = "rangeRight";
var exported_restFrom = "rest";
var exported_spreadFrom = "spread";
var exported_trimChars = "trim";
var exported_trimCharsEnd = "trimEnd";
var exported_trimCharsStart = "trimStart";
var exported_zipAll = "zip";
var exported_castArray = true;
var exported_flow = true;
var exported_flowRight = true;
var exported_iteratee = true;
var exported_mixin = true;
var exported_rearg = true;
var exported_runInContext = true;
var exported_add = true;
var exported_assign = true;
var exported_assignIn = true;
var exported_bind = true;
var exported_bindKey = true;
var exported_concat = true;
var exported_difference = true;
var exported_divide = true;
var exported_eq = true;
var exported_gt = true;
var exported_gte = true;
var exported_isEqual = true;
var exported_lt = true;
var exported_lte = true;
var exported_matchesProperty = true;
var exported_merge = true;
var exported_multiply = true;
var exported_overArgs = true;
var exported_partial = true;
var exported_partialRight = true;
var exported_propertyOf = true;
var exported_random = true;
var exported_range = true;
var exported_rangeRight = true;
var exported_subtract = true;
var exported_zip = true;
var exported_zipObject = true;
var exported_zipObjectDeep = true;
