"use strict";

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _docdown = require("docdown");

var _docdown2 = _interopRequireDefault(_docdown);

var _fsExtra = require("fs-extra");

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _util = require("../common/util");

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

'use strict';

var basePath = _path2.default.join(__dirname, '..', '..');
var docPath = _path2.default.join(basePath, 'doc');
var readmePath = _path2.default.join(docPath, 'README.md');

var pkg = require('../../package.json');
var version = pkg.version;

var config = {
  'base': {
    'path': _path2.default.join(basePath, 'lodash.js'),
    'title': "<a href=\"https://lodash.com/\">lodash</a> <span>v" + version + "</span>",
    'toc': 'categories',
    'url': "https://github.com/lodash/lodash/blob/" + version + "/lodash.js"
  },
  'github': {
    'style': 'github',
    'sublinks': [npmLink('&#x24C3;', 'See the npm package')]
  },
  'site': {
    'entryLink': '<a href="${entryHref}" class="fa fa-link"></a>',
    'sourceLink': '[source](${sourceHref})',
    'tocHref': '',
    'tocLink': '',
    'sublinks': [npmLink('npm package')]
  }
};

/**
 * Composes a npm link from `text` and optional `title`.
 *
 * @private
 * @param {string} text The link text.
 * @param {string} [title] The link title.
 * @returns {string} Returns the composed npm link.
 */
function npmLink(text, title) {
  return '<% if (name == "templateSettings" || !/^(?:methods|properties|seq)$/i.test(category)) {' + 'print(' + '"[' + text + '](https://www.npmjs.com/package/lodash." + name.toLowerCase() + ' + '"' + (title == null ? '' : ' \\"' + title + '\\"') + ')"' + ');' + '} %>';
}

/**
 * Post-process `markdown` to make adjustments.
 *
 * @private
 * @param {string} markdown The markdown to process.
 * @returns {string} Returns the processed markdown.
 */
function postprocess(markdown) {
  // Wrap symbol property identifiers in brackets.
  return markdown.replace(/\.(Symbol\.(?:[a-z]+[A-Z]?)+)/g, '[$1]');
}

/*----------------------------------------------------------------------------*/

/**
 * Creates the documentation markdown formatted for 'github' or 'site'.
 *
 * @private
 * @param {string} type The format type.
 */
function build(type) {
  var options = _lodash2.default.defaults({}, config.base, config[type]);
  var markdown = (0, _docdown2.default)(options);

  _fsExtra2.default.writeFile(readmePath, postprocess(markdown), _util2.default.pitch);
}

build(_lodash2.default.last(process.argv));
