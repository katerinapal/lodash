"use strict";

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _cheerio = require("cheerio");

var _cheerio2 = _interopRequireDefault(_cheerio);

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _markyMarkdown = require("marky-markdown");

var _markyMarkdown2 = _interopRequireDefault(_markyMarkdown);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _util = require("../common/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

var basePath = _path2.default.join(__dirname, '..', '..');
var docPath = _path2.default.join(basePath, 'doc');
var readmePath = _path2.default.join(docPath, 'README.md');

var highlights = {
  'html': ['string'],
  'js': ['comment', 'console', 'delimiter', 'method', 'modifier', 'name', 'numeric', 'string', 'support', 'type']
};

var exts = _lodash2.default.keys(highlights);

/**
 * Converts Lodash method references into documentation links.
 *
 * @private
 * @param {Object} $ The Cheerio object.
 */
function autoLink($) {
  $('.doc-container code').each(function () {
    var $code = $(this);
    var html = $code.html();
    if (/^_\.\w+$/.test(html)) {
      var id = html.split('.')[1];
      $code.replaceWith("<a href=\"#" + id + "\"><code>_." + id + "</code></a>");
    }
  });
}

/**
 * Removes horizontal rules from the document.
 *
 * @private
 * @param {Object} $ The Cheerio object.
 */
function removeHorizontalRules($) {
  $('hr').remove();
}

/**
 * Removes marky-markdown specific ids and class names.
 *
 * @private
 * @param {Object} $ The Cheerio object.
 */
function removeMarkyAttributes($) {
  $('[id^="user-content-"]').attr('class', null).attr('id', null);

  $(':header:not(h3) > a').each(function () {
    var $a = $(this);
    $a.replaceWith($a.html());
  });
}

/**
 * Renames "_" id and anchor references to "lodash".
 *
 * @private
 * @param {Object} $ The Cheerio object.
 */
function renameLodashId($) {
  $('#_').attr('id', 'lodash');
  $('[href="#_"]').attr('href', '#lodash');
}

/**
 * Repairs broken marky-markdown headers.
 * See https://github.com/npm/marky-markdown/issues/217 for more details.
 *
 * @private
 * @param {Object} $ The Cheerio object.
 */
function repairMarkyHeaders($) {
  $('p:empty + h3').prev().remove();

  $('h3 ~ p:empty').each(function () {
    var $p = $(this);
    var node = this.prev;
    while ((node = node.prev) && node.name != 'h3' && node.name != 'p') {
      $p.prepend(node.next);
    }
  });

  $('h3 code em').parent().each(function () {
    var $code = $(this);
    $code.html($code.html().replace(/<\/?em>/g, '_'));
  });
}

/**
 * Cleans up highlights blocks by removing extraneous class names and elements.
 *
 * @private
 * @param {Object} $ The Cheerio object.
 */
function tidyHighlights($) {
  $('.highlight').each(function () {
    var $spans = void 0;
    var $parent = $(this);
    var classes = $parent.find('.source,.text').first().attr('class').split(' ');
    var ext = (0, _lodash2.default)(classes).intersection(exts).last();

    $parent.addClass(ext);

    // Remove line indicators for single line snippets.
    $parent.children('pre').each(function () {
      var $divs = $(this).children('div');
      if ($divs.length == 1) {
        $divs.replaceWith($divs.html());
      }
    });
    // Remove extraneous class names.
    $parent.find('[class]').each(function () {
      var $element = $(this);
      var classes = $element.attr('class').split(' ');
      var attr = (0, _lodash2.default)(classes).intersection(highlights[ext]).join(' ');
      $element.attr('class', attr || null);
    });
    // Collapse nested comment highlights.
    $parent.find("[class~=\"comment\"]").each(function () {
      var $element = $(this);
      $element.text($element.text().trim());
    });
    // Collapse nested string highlights.
    $parent.find("[class~=\"string\"]").each(function () {
      var $element = $(this);
      $element.text($element.text());
    });
    // Collapse nested spans.
    while (($spans = $parent.find('span:not([class])')).length) {
      $spans.each(function () {
        var $span = $(this);
        while ($span[0] && $span[0].name == 'span' && !$span.attr('class')) {
          var _$parent = $span.parent();
          $span.replaceWith($span.html());
          $span = _$parent;
        }
      });
    }
  });
}

/*----------------------------------------------------------------------------*/

/**
 * Creates the documentation HTML.
 *
 * @private
 */
function build() {
  var markdown = _fs2.default
  // Load markdown.
  .readFileSync(readmePath, 'utf8')
  // Uncomment docdown HTML hints.
  .replace(/(<)!--\s*|\s*--(>)/g, '$1$2')
  // Convert source and npm package links to anchors.
  .replace(/\[source\]\(([^)]+)\) \[npm package\]\(([^)]+)\)/g, function (match, href1, href2) {
    return "<p><a href=\"" + href1 + "\">source</a> <a href=\"" + href2 + "\">npm package</a></p>";
  });

  var $ = _cheerio2.default.load((0, _markyMarkdown2.default)(markdown, {
    'enableHeadingLinkIcons': false,
    'sanitize': false
  }));

  var $header = $('h1').first().remove();
  var version = $header.find('span').first().text().trim().slice(1);

  // Auto-link Lodash method references.
  autoLink($);
  // Rename "_" id references to "lodash".
  renameLodashId($);
  // Remove docdown horizontal rules.
  removeHorizontalRules($);
  // Remove marky-markdown attribute additions.
  removeMarkyAttributes($);
  // Repair marky-markdown wrapping around headers.
  repairMarkyHeaders($);
  // Cleanup highlights.
  tidyHighlights($);

  var html = [
  // Append YAML front matter.
  '---', 'id: docs', 'layout: docs', 'title: Lodash Documentation', 'version: ' + (version || null), '---', '',
  // Wrap in raw tags to avoid Liquid template tag processing.
  '{% raw %}', $.html().trim(), '{% endraw %}', ''].join('\n');

  _fs2.default.writeFile(_path2.default.join(docPath, version + '.html'), html, _util.util_pitch);
}

build();
