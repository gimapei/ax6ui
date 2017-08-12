webpackJsonp([0],Array(30).concat([
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jqmin = __webpack_require__(6);

var _jqmin2 = _interopRequireDefault(_jqmin);

var _axios = __webpack_require__(46);

var _axios2 = _interopRequireDefault(_axios);

var _AX6UIGrid = __webpack_require__(98);

var _AX6UIGrid2 = _interopRequireDefault(_AX6UIGrid);

var _AX6UIMenu = __webpack_require__(78);

var _AX6UIMenu2 = _interopRequireDefault(_AX6UIMenu);

__webpack_require__(103);

__webpack_require__(79);

__webpack_require__(44);

__webpack_require__(73);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var html = "\n<h4>Grid basic</h4>\n<div data-ax6ui-grid=\"grid-basic\" data-ax6ui-grid-config=\"{columns: [\n        {key: 'a', label: 'field A'},\n        {key: 'b', label: 'field B'},\n        {key: 'c', label: 'numbers C'},\n        {key: 'd', label: 'field D'},\n        {key: 'e', label: 'field E'},\n        {key: 'f', label: 'field F'},\n        {key: 'g', label: 'field G'},\n        {key: 'h', label: 'field H'}\n    ]}\" style=\"height: 200px;\"></div>\n    \n<h4>Grid formatter</h4>\n<div data-ax6ui-grid=\"grid-formatter\" style=\"height: 200px;\"></div>\n\n<h4>Grid column group</h4>\n<div data-ax6ui-grid=\"grid-column-group\" style=\"height: 200px;\"></div>\n\n<h4>Grid frozen col&row</h4>\n<div data-ax6ui-grid=\"grid-frozen\" style=\"height: 200px;\"></div>\n\n<h4>Grid context-menu</h4>\n<div data-ax6ui-grid=\"grid-context-menu\" style=\"height: 200px;\"></div>\n";
var fn = {
  moduleRun: function moduleRun($body) {

    _AX6UIGrid2.default.setFormatter({
      "capital": function capital() {
        // 개발자가 직접 정의한.
        return this.value.toUpperCase();
      }
    });
    _AX6UIGrid2.default.setCollector({});
    _AX6UIGrid2.default.setTmpl({
      "page_status": function page_status() {
        return '<span>{{{progress}}} {{fromRowIndex}} - {{toRowIndex}} of {{dataRowCount}} {{#dataRealRowCount}}  현재페이지 {{.}}{{/dataRealRowCount}} {{#totalElements}}  전체갯수 {{.}}{{/totalElements}}</span>';
      }
    });

    var grid_basic = new _AX6UIGrid2.default({
      target: $body.find('[data-ax6ui-grid="grid-basic"]')
    });

    // xhr 호출
    (0, _axios2.default)({
      method: 'get',
      url: 'http://api-demo.ax5.io/api/v1/ax5grid'
    }).then(function (res) {
      grid_basic.setData(res.data);
    }).catch(function (error) {
      console.log(error);
    });

    //
    new _AX6UIGrid2.default({
      target: $body.find('[data-ax6ui-grid="grid-formatter"]'),
      showLineNumber: true,
      showRowSelector: true,
      multipleSelect: true,
      lineNumberColumnWidth: 40,
      rowSelectorColumnWidth: 27,
      columns: [{ key: 'a', label: 'field A' }, { key: 'b', label: 'field B', formatter: 'capital' }, { key: 'c', label: 'number C', formatter: 'money' // 그리드에 내장된 formatter
      }]
    }).setData([{ a: "토마스", b: "Thomas", c: 50000 }]);

    //
    new _AX6UIGrid2.default({
      target: $body.find('[data-ax6ui-grid="grid-column-group"]'),
      columns: [{ key: "a", label: "field A" }, { key: "b", label: "field B" }, {
        key: "c", label: "field C", columns: [// child columns
        { key: "d", label: "field D" }, { key: "e", label: "field E" }, { key: "f", label: "field F" }]
      }, { key: "g", label: "field G" }, { key: "h", label: "field H" }]
    }).setData([{ a: "토마스", b: "Thomas", c: 50000, d: 500, e: "E", f: "장서우", g: "2010년", h: "woman" }, { a: "토마스", b: "Thomas", c: 50000, d: 500, e: "E", f: "이영희", g: "1977년", h: "woman" }]);

    //
    new _AX6UIGrid2.default({
      target: $body.find('[data-ax6ui-grid="grid-frozen"]'),
      frozenColumnIndex: 3,
      frozenRowIndex: 2,
      columns: [{ key: "a", label: "field A", width: 80 }, { key: "b", label: "field B", width: 80 }, {
        label: "Group", columns: [// child columns
        { key: "d", label: "field D" }, { key: "e", label: "field E" }, { key: "f", label: "field F" }]
      }, { key: "c", label: "field C", width: 200 }, { key: "g", label: "field G", width: 300 }, { key: "h", label: "field H" }]
    }).setData([{ a: "토마스", b: "Thomas", c: 50000, d: 500, e: "E", f: "장서우", g: "2010년", h: "woman" }, { a: "토마스", b: "Thomas", c: 50000, d: 500, e: "E", f: "이영희", g: "1977년", h: "woman" }, { a: "토마스", b: "Thomas", c: 50000, d: 500, e: "E", f: "장서우", g: "2010년", h: "woman" }, { a: "토마스", b: "Thomas", c: 50000, d: 500, e: "E", f: "이영희", g: "1977년", h: "woman" }, { a: "토마스", b: "Thomas", c: 50000, d: 500, e: "E", f: "장서우", g: "2010년", h: "woman" }, { a: "토마스", b: "Thomas", c: 50000, d: 500, e: "E", f: "이영희", g: "1977년", h: "woman" }, { a: "토마스", b: "Thomas", c: 50000, d: 500, e: "E", f: "장서우", g: "2010년", h: "woman" }, { a: "토마스", b: "Thomas", c: 50000, d: 500, e: "E", f: "이영희", g: "1977년", h: "woman" }, { a: "토마스", b: "Thomas", c: 50000, d: 500, e: "E", f: "장서우", g: "2010년", h: "woman" }, { a: "토마스", b: "Thomas", c: 50000, d: 500, e: "E", f: "이영희", g: "1977년", h: "woman" }, { a: "토마스", b: "Thomas", c: 50000, d: 500, e: "E", f: "장서우", g: "2010년", h: "woman" }, { a: "토마스", b: "Thomas", c: 50000, d: 500, e: "E", f: "이영희", g: "1977년", h: "woman" }, { a: "토마스", b: "Thomas", c: 50000, d: 500, e: "E", f: "장서우", g: "2010년", h: "woman" }, { a: "토마스", b: "Thomas", c: 50000, d: 500, e: "E", f: "이영희", g: "1977년", h: "woman" }]);

    var menu = new _AX6UIMenu2.default({
      // width: 200,
      iconWidth: 20,
      acceleratorWidth: 100,
      // offset: {left: 10, top: 10},
      itemClickAndClose: false,
      //position: "absolute",
      icons: {
        'arrow': '<i class="tiny material-icons">chevron_right</i>'
      },
      columnKeys: {
        label: 'name',
        items: 'chidren'
      },
      items: [{
        icon: '<i class="tiny material-icons">class</i>',
        name: "Menu Parent 0",
        chidren: [{
          check: {
            type: 'checkbox',
            name: 'A',
            value: '0',
            checked: false
          },
          name: "Menu Z",
          data: {},
          role: "",
          accelerator: "CmdOrCtrl+Z"
        }, {
          check: {
            type: 'checkbox',
            name: 'A',
            value: '1',
            checked: true
          },
          name: "Menu A",
          data: {},
          role: ""
          //accelerator: "CmdOrCtrl+A"
        }],
        filterType: "A"
      }, {
        divide: true,
        filterType: "A"
      }, {
        icon: '<i class="tiny material-icons">class</i>',
        name: "Menu Parent 1",
        chidren: [{
          name: "Menu Z",
          data: {},
          role: "",
          //accelerator: "CmdOrCtrl+Z",
          chidren: [{
            name: "Menu Z",
            data: {},
            role: ""
            //accelerator: "CmdOrCtrl+Z"
          }, {
            name: "Menu A",
            data: {},
            role: ""
            //accelerator: "CmdOrCtrl+A"
          }]
        }, {
          name: "Menu A",
          data: {},
          role: ""
          //accelerator: "CmdOrCtrl+A"
        }],
        filterType: "A"
      }, {
        check: {
          type: 'radio',
          name: 'radioName',
          value: '1',
          checked: false
        },
        icon: '<i class="tiny material-icons">class</i>',
        name: "Menu Parent 2"
      }, {
        check: {
          type: 'radio',
          name: 'radioName',
          value: '2',
          checked: false
        },
        name: "Menu Parent 3"
      }, {
        check: {
          type: 'radio',
          name: 'radioName',
          value: '3',
          checked: false
        },
        name: "Menu Parent 4"
      }, { divide: true }, {
        html: function html() {
          // console.log(this);
          return '<div style="text-align: center;">' + '<button class="btn btn-primary" data-menu-btn="OK">OK</button> ' + '<button class="btn btn-danger" data-menu-btn="CANCEL">CANCEL</button>' + '</div>';
        }
      }]
    });
    menu.onClick = function (item, param) {
      console.log(item, param);
    };

    new _AX6UIGrid2.default({
      target: $body.find('[data-ax6ui-grid="grid-context-menu"]'),
      columns: [{ key: "a", label: "field A" }, { key: "b", label: "field B" }, { key: "c", label: "field C", formatter: "money" }, { key: "g", label: "field G" }, { key: "h", label: "field H" }],
      body: {
        onContextMenu: function onContextMenu(e, param) {
          // console.log(e);
          menu.popup(e, { param: param });
        }
      }
    }).setData([{ a: "토마스", b: "Thomas", c: 50000, d: 500, e: "E", f: "장서우", g: "2010년", h: "woman" }, { a: "토마스", b: "Thomas", c: 50000, d: 500, e: "E", f: "이영희", g: "1977년", h: "woman" }]);
  },
  moduleDestroy: function moduleDestroy($body) {
    $body.off("click");
  }
};

exports.default = {
  html: html,
  fn: fn
};

/***/ }),
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(38);
var isBuffer = __webpack_require__(48);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 * https://github.com/thomasJang/mustache.js -- imporove some variables
 */

/**
 * AX6Mustache는 http://github.com/janl/mustache.js에 몇가지 최소한의 기능을 튜닝하여 사용하는 템플릿 엔진입니다.
 * @namespace AX6Mustache
 */

/**
 * @method AX6Mustache.render
 * @example
 * ```js
 * ax5.mustache.render(template, view)
 *
 *
 * //Array @i
 * //{{#beatles}}
 * //{{firstName}} {{lastName}} ({{@i}}) ({{@first}})
 * //{{/beatles}}
 *
 * //Object @each
 * {{#beatles}}
 *  {{#@each}}
 *      {{@key}} : {{@value.firstName}} {{@value.lastName}}
 *  {{/@each}}
 * {{/beatles}}
 *
 * ```
 */

var AX6 = {};

(function defineMustache(global, factory) {

  factory(global.mustache = {});
})(AX6, function mustacheFactory(mustache) {

  var objectToString = Object.prototype.toString;
  var isArray = Array.isArray || function isArrayPolyfill(object) {
    return objectToString.call(object) === '[object Array]';
  };

  function isFunction(object) {
    return typeof object === 'function';
  }

  /**
   * More correct typeof string handling array
   * which normally returns typeof 'object'
   */
  function typeStr(obj) {
    return isArray(obj) ? 'array' : typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
  }

  function escapeRegExp(string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
  }

  /**
   * Null safe way of checking whether or not an object,
   * including its prototype, has a given property
   */
  function hasProperty(obj, propName) {
    return obj != null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && propName in obj;
  }

  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
  // See https://github.com/janl/mustache.js/issues/189
  var regExpTest = RegExp.prototype.test;

  function testRegExp(re, string) {
    return regExpTest.call(re, string);
  }

  var nonSpaceRe = /\S/;

  function isWhitespace(string) {
    return !testRegExp(nonSpaceRe, string);
  }

  var entityMap = {
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '/': '&#x2F;'
  };

  function escapeHtml(string) {
    return String(string).replace(/[&<>"'\/]/g, function fromEntityMap(s) {
      return entityMap[s];
    });
  }

  var whiteRe = /\s*/;
  var spaceRe = /\s+/;
  var equalsRe = /\s*=/;
  var curlyRe = /\s*\}/;
  var tagRe = /#|\^|\/|>|\{|&|=|!/;

  /**
   * Breaks up the given `template` string into a tree of tokens. If the `tags`
   * argument is given here it must be an array with two string values: the
   * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
   * course, the default is to use mustaches (i.e. mustache.tags).
   *
   * A token is an array with at least 4 elements. The first element is the
   * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
   * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
   * all text that appears outside a symbol this element is "text".
   *
   * The second element of a token is its "value". For mustache tags this is
   * whatever else was inside the tag besides the opening symbol. For text tokens
   * this is the text itself.
   *
   * The third and fourth elements of the token are the start and end indices,
   * respectively, of the token in the original template.
   *
   * Tokens that are the root node of a subtree contain two more elements: 1) an
   * array of tokens in the subtree and 2) the index in the original template at
   * which the closing tag for that section begins.
   */
  function parseTemplate(template, tags) {
    if (!template) return [];

    var sections = []; // Stack to hold section tokens
    var tokens = []; // Buffer to hold the tokens
    var spaces = []; // Indices of whitespace tokens on the current line
    var hasTag = false; // Is there a {{tag}} on the current line?
    var nonSpace = false; // Is there a non-space char on the current line?

    // Strips all whitespace tokens array for the current line
    // if there was a {{#tag}} on it and otherwise only space.
    function stripSpace() {
      if (hasTag && !nonSpace) {
        while (spaces.length) {
          delete tokens[spaces.pop()];
        }
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    }

    var openingTagRe, closingTagRe, closingCurlyRe;

    function compileTags(tagsToCompile) {
      if (typeof tagsToCompile === 'string') tagsToCompile = tagsToCompile.split(spaceRe, 2);

      if (!isArray(tagsToCompile) || tagsToCompile.length !== 2) throw new Error('Invalid tags: ' + tagsToCompile);

      openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
      closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
      closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
    }

    compileTags(tags || mustache.tags);

    var scanner = new Scanner(template);

    var start, type, value, chr, token, openSection;
    while (!scanner.eos()) {
      start = scanner.pos;

      // Match any text between tags.
      value = scanner.scanUntil(openingTagRe);

      if (value) {
        for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
          chr = value.charAt(i);

          if (isWhitespace(chr)) {
            spaces.push(tokens.length);
          } else {
            nonSpace = true;
          }

          tokens.push(['text', chr, start, start + 1]);
          start += 1;

          // Check for whitespace on the current line.
          if (chr === '\n') stripSpace();
        }
      }

      // Match the opening tag.
      if (!scanner.scan(openingTagRe)) break;

      hasTag = true;

      // Get the tag type.
      type = scanner.scan(tagRe) || 'name';
      scanner.scan(whiteRe);

      // Get the tag value.
      if (type === '=') {
        value = scanner.scanUntil(equalsRe);
        scanner.scan(equalsRe);
        scanner.scanUntil(closingTagRe);
      } else if (type === '{') {
        value = scanner.scanUntil(closingCurlyRe);
        scanner.scan(curlyRe);
        scanner.scanUntil(closingTagRe);
        type = '&';
      } else {
        value = scanner.scanUntil(closingTagRe);
      }

      // Match the closing tag.
      if (!scanner.scan(closingTagRe)) throw new Error('Unclosed tag at ' + scanner.pos);

      token = [type, value, start, scanner.pos];
      tokens.push(token);

      if (type === '#' || type === '^') {
        sections.push(token);
      } else if (type === '/') {
        // Check section nesting.
        openSection = sections.pop();

        if (!openSection) throw new Error('Unopened section "' + value + '" at ' + start);

        if (openSection[1] !== value) throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
      } else if (type === 'name' || type === '{' || type === '&') {
        nonSpace = true;
      } else if (type === '=') {
        // Set the tags for the next time around.
        compileTags(value);
      }
    }

    // Make sure there are no open sections when we're done.
    openSection = sections.pop();

    if (openSection) throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

    return nestTokens(squashTokens(tokens));
  }

  /**
   * Combines the values of consecutive text tokens in the given `tokens` array
   * to a single token.
   */
  function squashTokens(tokens) {
    var squashedTokens = [];

    var token, lastToken;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      if (token) {
        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
          lastToken[1] += token[1];
          lastToken[3] = token[3];
        } else {
          squashedTokens.push(token);
          lastToken = token;
        }
      }
    }

    return squashedTokens;
  }

  /**
   * Forms the given array of `tokens` into a nested tree structure where
   * tokens that represent a section have two additional items: 1) an array of
   * all tokens that appear in that section and 2) the index in the original
   * template that represents the end of that section.
   */
  function nestTokens(tokens) {
    var nestedTokens = [];
    var collector = nestedTokens;
    var sections = [];

    var token, section;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      switch (token[0]) {
        case '#':
        case '^':
          collector.push(token);
          sections.push(token);
          collector = token[4] = [];
          break;
        case '/':
          section = sections.pop();
          section[5] = token[2];
          collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
          break;
        default:
          collector.push(token);
      }
    }

    return nestedTokens;
  }

  /**
   * A simple string scanner that is used by the template parser to find
   * tokens in template strings.
   */
  function Scanner(string) {
    this.string = string;
    this.tail = string;
    this.pos = 0;
  }

  /**
   * Returns `true` if the tail is empty (end of string).
   */
  Scanner.prototype.eos = function eos() {
    return this.tail === '';
  };

  /**
   * Tries to match the given regular expression at the current position.
   * Returns the matched text if it can match, the empty string otherwise.
   */
  Scanner.prototype.scan = function scan(re) {
    var match = this.tail.match(re);

    if (!match || match.index !== 0) return '';

    var string = match[0];

    this.tail = this.tail.substring(string.length);
    this.pos += string.length;

    return string;
  };

  /**
   * Skips all text until the given regular expression can be matched. Returns
   * the skipped string, which is the entire tail if no match can be made.
   */
  Scanner.prototype.scanUntil = function scanUntil(re) {
    var index = this.tail.search(re),
        match;

    switch (index) {
      case -1:
        match = this.tail;
        this.tail = '';
        break;
      case 0:
        match = '';
        break;
      default:
        match = this.tail.substring(0, index);
        this.tail = this.tail.substring(index);
    }

    this.pos += match.length;

    return match;
  };

  /**
   * Represents a rendering context by wrapping a view object and
   * maintaining a reference to the parent context.
   */
  function Context(view, parentContext) {
    this.view = view;
    this.cache = {
      '.': this.view,
      '@each': function each() {
        var returns = [];
        for (var k in this) {
          returns.push({ '@key': k, '@value': this[k] });
        }
        return returns;
      }
    };
    this.parent = parentContext;
  }

  /**
   * Creates a new context using the given view with this context
   * as the parent.
   */
  Context.prototype.push = function push(view) {
    return new Context(view, this);
  };

  /**
   * Returns the value of the given name in this context, traversing
   * up the context hierarchy if the value is absent in this context's view.
   */
  Context.prototype.lookup = function lookup(name) {
    var cache = this.cache;

    var value;
    if (cache.hasOwnProperty(name)) {
      value = cache[name];
    } else {
      var context = this,
          names,
          index,
          lookupHit = false;

      while (context) {
        if (name.indexOf('.') > 0) {
          value = context.view;
          names = name.split('.');
          index = 0;

          /**
           * Using the dot notion path in `name`, we descend through the
           * nested objects.
           *
           * To be certain that the lookup has been successful, we have to
           * check if the last object in the path actually has the property
           * we are looking for. We store the result in `lookupHit`.
           *
           * This is specially necessary for when the value has been set to
           * `undefined` and we want to avoid looking up parent contexts.
           **/
          while (value != null && index < names.length) {
            if (index === names.length - 1) lookupHit = hasProperty(value, names[index]);

            value = value[names[index++]];
          }
        } else {
          value = context.view[name];
          lookupHit = hasProperty(context.view, name);
        }

        if (lookupHit) break;

        context = context.parent;
      }

      cache[name] = value;
    }

    if (isFunction(value)) value = value.call(this.view);

    return value;
  };

  /**
   * A Writer knows how to take a stream of tokens and render them to a
   * string, given a context. It also maintains a cache of templates to
   * avoid the need to parse the same template twice.
   */
  function Writer() {
    this.cache = {};
  }

  /**
   * Clears all cached templates in this writer.
   */
  Writer.prototype.clearCache = function clearCache() {
    this.cache = {};
  };

  /**
   * Parses and caches the given `template` and returns the array of tokens
   * that is generated from the parse.
   */
  Writer.prototype.parse = function parse(template, tags) {
    var cache = this.cache;
    var tokens = cache[template];

    if (tokens == null) tokens = cache[template] = parseTemplate(template, tags);

    return tokens;
  };

  /**
   * High-level method that is used to render the given `template` with
   * the given `view`.
   *
   * The optional `partials` argument may be an object that contains the
   * names and templates of partials that are used in the template. It may
   * also be a function that is used to load partial templates on the fly
   * that takes a single argument: the name of the partial.
   */
  Writer.prototype.render = function render(template, view, partials) {
    var tokens = this.parse(template);
    var context = view instanceof Context ? view : new Context(view);
    return this.renderTokens(tokens, context, partials, template);
  };

  /**
   * Low-level method that renders the given array of `tokens` using
   * the given `context` and `partials`.
   *
   * Note: The `originalTemplate` is only ever used to extract the portion
   * of the original template that was contained in a higher-order section.
   * If the template doesn't use higher-order sections, this argument may
   * be omitted.
   */
  Writer.prototype.renderTokens = function renderTokens(tokens, context, partials, originalTemplate) {
    var buffer = '';
    var token, symbol, value;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      value = undefined;
      token = tokens[i];
      symbol = token[0];

      if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate);else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate);else if (symbol === '>') value = this.renderPartial(token, context, partials, originalTemplate);else if (symbol === '&') value = this.unescapedValue(token, context);else if (symbol === 'name') value = this.escapedValue(token, context);else if (symbol === 'text') value = this.rawValue(token);

      if (value !== undefined) buffer += value;
    }

    return buffer;
  };

  Writer.prototype.renderSection = function renderSection(token, context, partials, originalTemplate) {
    var self = this;
    var buffer = '';

    var value = context.lookup(token[1]);

    // This function is used to render an arbitrary template
    // in the current context by higher-order sections.
    function subRender(template) {
      return self.render(template, context, partials);
    }

    if (!value) return;

    if (isArray(value)) {
      for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
        if (value[j]) {
          if (_typeof(value[j]) === 'object') {
            value[j]['@i'] = j;
            value[j]['@first'] = j === 0;
          }

          buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
        }
      }
    } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' || typeof value === 'string' || typeof value === 'number') {
      buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
    } else if (isFunction(value)) {
      if (typeof originalTemplate !== 'string') throw new Error('Cannot use higher-order sections without the original template');

      // Extract the portion of the original template that the section contains.
      value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

      if (value != null) buffer += value;
    } else {
      buffer += this.renderTokens(token[4], context, partials, originalTemplate);
    }
    return buffer;
  };

  Writer.prototype.renderInverted = function renderInverted(token, context, partials, originalTemplate) {
    var value = context.lookup(token[1]);

    // Use JavaScript's definition of falsy. Include empty arrays.
    // See https://github.com/janl/mustache.js/issues/186
    if (!value || isArray(value) && value.length === 0) return this.renderTokens(token[4], context, partials, originalTemplate);
  };

  Writer.prototype.renderPartial = function renderPartial(token, context, partials) {
    if (!partials) return;

    var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
    if (value != null) return this.renderTokens(this.parse(value), context, partials, value);
  };

  Writer.prototype.unescapedValue = function unescapedValue(token, context) {
    var value = context.lookup(token[1]);
    if (value != null) return value;
  };

  Writer.prototype.escapedValue = function escapedValue(token, context) {
    var value = context.lookup(token[1]);
    if (value != null) return mustache.escape(value);
  };

  Writer.prototype.rawValue = function rawValue(token) {
    return token[1];
  };

  mustache.name = 'mustache.js';
  mustache.version = '2.1.3';
  mustache.tags = ['{{', '}}'];

  // All high-level mustache.* functions use this writer.
  var defaultWriter = new Writer();

  /**
   * Clears all cached templates in the default writer.
   */
  mustache.clearCache = function clearCache() {
    return defaultWriter.clearCache();
  };

  /**
   * Parses and caches the given template in the default writer and returns the
   * array of tokens it contains. Doing this ahead of time avoids the need to
   * parse templates on the fly as they are rendered.
   */
  mustache.parse = function parse(template, tags) {
    return defaultWriter.parse(template, tags);
  };

  /**
   * Renders the `template` with the given `view` and `partials` using the
   * default writer.
   */
  mustache.render = function render(template, view, partials) {
    if (typeof template !== 'string') {
      throw new TypeError('Invalid template! Template should be a "string" ' + 'but "' + typeStr(template) + '" was given as the first ' + 'argument for mustache#render(template, view, partials)');
    }

    return defaultWriter.render(template, view, partials);
  };

  // This is here for backwards compatibility with 0.4.x.,
  /*eslint-disable */ // eslint wants camel cased function name
  mustache.to_html = function to_html(template, view, partials, send) {
    /*eslint-enable*/

    var result = mustache.render(template, view, partials);

    if (isFunction(send)) {
      send(result);
    } else {
      return result;
    }
  };

  // Export the escaping function so that the user may override it.
  // See https://github.com/janl/mustache.js/issues/244
  mustache.escape = escapeHtml;

  // Export these mainly for testing, but also for advanced usage.
  mustache.Scanner = Scanner;
  mustache.Context = Context;
  mustache.Writer = Writer;
});

exports.default = AX6.mustache;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(35);
var normalizeHeaderName = __webpack_require__(50);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(40);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(40);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(39)))

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(35);
var settle = __webpack_require__(51);
var buildURL = __webpack_require__(53);
var parseHeaders = __webpack_require__(54);
var isURLSameOrigin = __webpack_require__(55);
var createError = __webpack_require__(41);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(56);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(57);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(39)))

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(52);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(45);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../samples/node_modules/css-loader/index.js!../../samples/node_modules/sass-loader/lib/loader.js!./style.scss", function() {
			var newContent = require("!!../../samples/node_modules/css-loader/index.js!../../samples/node_modules/sass-loader/lib/loader.js!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "@-webkit-keyframes ax6-ui-calendar-fadeout {\n  from {\n    opacity: 1.0; }\n  to {\n    opacity: 0.5; } }\n\n@-moz-keyframes ax6-ui-calendar-fadeout {\n  from {\n    opacity: 1.0; }\n  to {\n    opacity: 0.5; } }\n\n@keyframes ax6-ui-calendar-fadeout {\n  from {\n    opacity: 1.0; }\n  to {\n    opacity: 0.5; } }\n\n@-webkit-keyframes ax6-ui-calendar-fadein {\n  from {\n    opacity: 0.5; }\n  to {\n    opacity: 1.0; } }\n\n@-moz-keyframes ax6-ui-calendar-fadein {\n  from {\n    opacity: 0.5; }\n  to {\n    opacity: 1.0; } }\n\n@keyframes ax6-ui-calendar-fadein {\n  from {\n    opacity: 0.5; }\n  to {\n    opacity: 1.0; } }\n\n[data-ax6ui-calendar] {\n  box-sizing: border-box;\n  position: relative; }\n  [data-ax6ui-calendar] * {\n    box-sizing: border-box; }\n  [data-ax6ui-calendar] .calendar-control {\n    position: relative;\n    box-sizing: content-box;\n    background-color: #f5f5f5;\n    background-image: -webkit-linear-gradient(bottom, #f5f5f5);\n    background-image: linear-gradient(to top,#f5f5f5);\n    border: 1px solid #ddd;\n    border-radius: 5px;\n    font-size: 18px;\n    margin-bottom: 5px;\n    padding: 0;\n    color: #333; }\n    [data-ax6ui-calendar] .calendar-control .date-move-left, [data-ax6ui-calendar] .calendar-control .date-move-right {\n      display: block;\n      position: absolute;\n      overflow: hidden;\n      text-align: center;\n      font-size: 22px;\n      cursor: pointer;\n      text-decoration: none;\n      padding: 0; }\n      [data-ax6ui-calendar] .calendar-control .date-move-left i, [data-ax6ui-calendar] .calendar-control .date-move-left span, [data-ax6ui-calendar] .calendar-control .date-move-right i, [data-ax6ui-calendar] .calendar-control .date-move-right span {\n        line-height: inherit; }\n    [data-ax6ui-calendar] .calendar-control .date-move-left {\n      left: 0px;\n      top: 0px; }\n    [data-ax6ui-calendar] .calendar-control .date-move-right {\n      right: 0px;\n      top: 0px; }\n    [data-ax6ui-calendar] .calendar-control .date-display {\n      text-align: center; }\n      [data-ax6ui-calendar] .calendar-control .date-display [data-calendar-display] {\n        margin: 0px 10px;\n        cursor: pointer;\n        text-decoration: underline; }\n    [data-ax6ui-calendar] .calendar-control a {\n      color: #333; }\n    [data-ax6ui-calendar] .calendar-control a:hover {\n      color: #337ab7; }\n  [data-ax6ui-calendar] .calendar-body.fadein {\n    -webkit-animation: ax6-ui-calendar-fadein 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);\n    -moz-animation: ax6-ui-calendar-fadein 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);\n    animation: ax6-ui-calendar-fadein 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);\n    opacity: 1.0; }\n  [data-ax6ui-calendar] .calendar-body.fadeout {\n    -webkit-animation: ax6-ui-calendar-fadeout 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);\n    -moz-animation: ax6-ui-calendar-fadeout 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);\n    animation: ax6-ui-calendar-fadeout 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);\n    opacity: 0.0; }\n  [data-ax6ui-calendar] .calendar-body table {\n    box-sizing: border-box;\n    table-layout: fixed;\n    border-collapse: collapse;\n    border-spacing: 0;\n    border: 0 none; }\n    [data-ax6ui-calendar] .calendar-body table thead {\n      border: 0 none; }\n      [data-ax6ui-calendar] .calendar-body table thead td, [data-ax6ui-calendar] .calendar-body table thead th {\n        box-sizing: border-box;\n        vertical-align: middle;\n        line-height: 1em;\n        cursor: pointer;\n        text-align: center;\n        font-size: 12px;\n        padding: 0px 2px;\n        border: 0px none;\n        overflow: hidden;\n        background-color: #FFFFFF;\n        background-image: -webkit-linear-gradient(bottom, #FFFFFF, #FFFFFF);\n        background-image: linear-gradient(to top,#FFFFFF, #FFFFFF);\n        color: #6D6E70; }\n        [data-ax6ui-calendar] .calendar-body table thead td.calendar-col-0, [data-ax6ui-calendar] .calendar-body table thead th.calendar-col-0 {\n          color: #C78B81; }\n        [data-ax6ui-calendar] .calendar-body table thead td.calendar-col-6, [data-ax6ui-calendar] .calendar-body table thead th.calendar-col-6 {\n          color: #32B4DC; }\n    [data-ax6ui-calendar] .calendar-body table tbody {\n      border: 0 none; }\n      [data-ax6ui-calendar] .calendar-body table tbody td, [data-ax6ui-calendar] .calendar-body table tbody th {\n        box-sizing: border-box;\n        vertical-align: middle;\n        line-height: 1em;\n        cursor: pointer;\n        text-align: center;\n        font-size: 14px;\n        border: 0px none;\n        background-color: #FFFFFF;\n        background-image: -webkit-linear-gradient(bottom, #FFFFFF, #FFFFFF);\n        background-image: linear-gradient(to top,#FFFFFF, #FFFFFF);\n        overflow: hidden;\n        /*\n          &.calendar-col-0 {\n              .calendar-item-day.live {\n                  color: $ax6ui-calendar-sun-text-color;\n                  @include extend-item-theme();\n              }\n          }\n          &.calendar-col-6 {\n              .calendar-item-day.live {\n                  color: $ax6ui-calendar-sat-text-color;\n                  @include extend-item-theme();\n              }\n          }\n          */ }\n        [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-day, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-day {\n          position: relative;\n          display: block;\n          width: 100%;\n          height: 100%;\n          vertical-align: middle;\n          border-radius: 5px;\n          overflow: hidden;\n          line-height: inherit;\n          background-color: #FFFFFF;\n          background-image: -webkit-linear-gradient(bottom, #FFFFFF, #FFFFFF);\n          background-image: linear-gradient(to top,#FFFFFF, #FFFFFF);\n          color: #C3C4C6;\n          font-size: 14px; }\n          [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-day span.addon, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-day span.addon {\n            position: absolute;\n            width: 100%;\n            text-align: center;\n            line-height: 11.2px;\n            font-size: 11.2px; }\n            [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-day span.addon.addon-header, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-day span.addon.addon-header {\n              left: 0px;\n              top: 1px; }\n            [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-day span.addon.addon-footer, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-day span.addon.addon-footer {\n              left: 0px;\n              bottom: 1px; }\n          [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-day.live, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-day.live {\n            background-color: #F0F0F0;\n            background-image: -webkit-linear-gradient(bottom, #F0F0F0, #F0F0F0);\n            background-image: linear-gradient(to top,#F0F0F0, #F0F0F0);\n            color: #6D6E70; }\n            [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-day.live span.addon, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-day.live span.addon {\n              color: #A1A1A1; }\n            [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-day.live.sunday, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-day.live.sunday {\n              color: #C78B81; }\n            [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-day.live.saturday, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-day.live.saturday {\n              color: #32B4DC; }\n          [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-day.focus, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-day.focus {\n            background-color: #E67241;\n            background-image: -webkit-linear-gradient(bottom, #E67241, #E67241);\n            background-image: linear-gradient(to top,#E67241, #E67241);\n            color: #fff; }\n            [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-day.focus span.addon, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-day.focus span.addon {\n              color: #fff; }\n            [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-day.focus.hover, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-day.focus.hover {\n              background-color: #32B4DC;\n              background-image: -webkit-linear-gradient(bottom, #32B4DC, #32B4DC);\n              background-image: linear-gradient(to top,#32B4DC, #32B4DC);\n              color: #fff !important; }\n              [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-day.focus.hover span.addon, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-day.focus.hover span.addon {\n                color: #fff; }\n          [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-day.period, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-day.period {\n            background-color: #82d3fa;\n            background-image: -webkit-linear-gradient(bottom, #82d3fa, #82d3fa);\n            background-image: linear-gradient(to top,#82d3fa, #82d3fa);\n            color: #fff !important; }\n            [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-day.period span.addon, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-day.period span.addon {\n              color: #fff; }\n          [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-day.selected-day, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-day.selected-day {\n            background-color: #32B4DC;\n            background-image: -webkit-linear-gradient(bottom, #32B4DC, #32B4DC);\n            background-image: linear-gradient(to top,#32B4DC, #32B4DC);\n            color: #fff !important; }\n            [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-day.selected-day span.addon, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-day.selected-day span.addon {\n              color: #fff; }\n          [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-day.disable, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-day.disable {\n            background-color: #FFFFFF;\n            background-image: -webkit-linear-gradient(bottom, #FFFFFF, #FFFFFF);\n            background-image: linear-gradient(to top,#FFFFFF, #FFFFFF);\n            color: #dddedf; }\n          [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-day.holiday, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-day.holiday {\n            color: #C78B81; }\n        [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-month, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-month {\n          display: block;\n          width: 100%;\n          height: 100%;\n          vertical-align: middle;\n          border-radius: 5px;\n          overflow: hidden;\n          line-height: inherit;\n          background-color: #FFFFFF;\n          background-image: -webkit-linear-gradient(bottom, #FFFFFF, #FFFFFF);\n          background-image: linear-gradient(to top,#FFFFFF, #FFFFFF);\n          color: #C3C4C6;\n          font-size: 14px; }\n          [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-month.live, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-month.live {\n            background-color: #F0F0F0;\n            background-image: -webkit-linear-gradient(bottom, #F0F0F0, #F0F0F0);\n            background-image: linear-gradient(to top,#F0F0F0, #F0F0F0);\n            color: #6D6E70; }\n          [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-month.hover, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-month.hover {\n            background-color: #32B4DC;\n            background-image: -webkit-linear-gradient(bottom, #32B4DC, #32B4DC);\n            background-image: linear-gradient(to top,#32B4DC, #32B4DC);\n            color: #fff; }\n          [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-month.focus, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-month.focus {\n            background-color: #E67241;\n            background-image: -webkit-linear-gradient(bottom, #E67241, #E67241);\n            background-image: linear-gradient(to top,#E67241, #E67241);\n            color: #fff; }\n          [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-month.selected-month, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-month.selected-month {\n            background-color: #32B4DC;\n            background-image: -webkit-linear-gradient(bottom, #32B4DC, #32B4DC);\n            background-image: linear-gradient(to top,#32B4DC, #32B4DC);\n            color: #fff !important; }\n            [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-month.selected-month span.addon, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-month.selected-month span.addon {\n              color: #fff; }\n            [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-month.selected-month span.lunar, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-month.selected-month span.lunar {\n              color: #fff; }\n          [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-month.disable, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-month.disable {\n            background-color: #FFFFFF;\n            background-image: -webkit-linear-gradient(bottom, #FFFFFF, #FFFFFF);\n            background-image: linear-gradient(to top,#FFFFFF, #FFFFFF);\n            color: #dddedf; }\n          [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-month.holiday, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-month.holiday {\n            color: #C78B81; }\n        [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-year, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-year {\n          display: block;\n          width: 100%;\n          height: 100%;\n          vertical-align: middle;\n          border-radius: 5px;\n          overflow: hidden;\n          line-height: inherit;\n          background-color: #FFFFFF;\n          background-image: -webkit-linear-gradient(bottom, #FFFFFF, #FFFFFF);\n          background-image: linear-gradient(to top,#FFFFFF, #FFFFFF);\n          color: #C3C4C6;\n          font-size: 14px; }\n          [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-year.live, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-year.live {\n            background-color: #F0F0F0;\n            background-image: -webkit-linear-gradient(bottom, #F0F0F0, #F0F0F0);\n            background-image: linear-gradient(to top,#F0F0F0, #F0F0F0);\n            color: #6D6E70; }\n          [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-year.hover, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-year.hover {\n            background-color: #32B4DC;\n            background-image: -webkit-linear-gradient(bottom, #32B4DC, #32B4DC);\n            background-image: linear-gradient(to top,#32B4DC, #32B4DC);\n            color: #fff; }\n          [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-year.focus, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-year.focus {\n            background-color: #E67241;\n            background-image: -webkit-linear-gradient(bottom, #E67241, #E67241);\n            background-image: linear-gradient(to top,#E67241, #E67241);\n            color: #fff; }\n          [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-year.selected-year, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-year.selected-year {\n            background-color: #32B4DC;\n            background-image: -webkit-linear-gradient(bottom, #32B4DC, #32B4DC);\n            background-image: linear-gradient(to top,#32B4DC, #32B4DC);\n            color: #fff !important; }\n            [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-year.selected-year span.addon, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-year.selected-year span.addon {\n              color: #fff; }\n            [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-year.selected-year span.lunar, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-year.selected-year span.lunar {\n              color: #fff; }\n          [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-year.disable, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-year.disable {\n            background-color: #FFFFFF;\n            background-image: -webkit-linear-gradient(bottom, #FFFFFF, #FFFFFF);\n            background-image: linear-gradient(to top,#FFFFFF, #FFFFFF);\n            color: #dddedf; }\n          [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-year.holiday, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-year.holiday {\n            color: #C78B81; }\n", ""]);

// exports


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(47);

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(35);
var bind = __webpack_require__(38);
var Axios = __webpack_require__(49);
var defaults = __webpack_require__(37);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(43);
axios.CancelToken = __webpack_require__(63);
axios.isCancel = __webpack_require__(42);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(64);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 48 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(37);
var utils = __webpack_require__(35);
var InterceptorManager = __webpack_require__(58);
var dispatchRequest = __webpack_require__(59);
var isAbsoluteURL = __webpack_require__(61);
var combineURLs = __webpack_require__(62);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(35);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(41);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(35);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(35);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(35);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(35);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(35);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(35);
var transformData = __webpack_require__(60);
var isCancel = __webpack_require__(42);
var defaults = __webpack_require__(37);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(35);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(43);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jqmin = __webpack_require__(1);

var _jqmin2 = _interopRequireDefault(_jqmin);

var _AX6Util = __webpack_require__(4);

var _AX6Util2 = _interopRequireDefault(_AX6Util);

var _AX6Info = __webpack_require__(3);

var _AX6Info2 = _interopRequireDefault(_AX6Info);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @method ax5grid.util.divideTableByFrozenColumnIndex
 * @param _table
 * @param _frozenColumnIndex
 * @returns {{leftHeaderData: {rows: Array}, headerData: {rows: Array}}}
 */
var divideTableByFrozenColumnIndex = function divideTableByFrozenColumnIndex(_table, _frozenColumnIndex) {

  var tempTable_l = { rows: [] },
      tempTable_r = { rows: [] };

  for (var r = 0, rl = _table.rows.length; r < rl; r++) {
    var row = _table.rows[r];

    tempTable_l.rows[r] = { cols: [] };
    tempTable_r.rows[r] = { cols: [] };

    for (var c = 0, cl = row.cols.length; c < cl; c++) {
      var col = _jqmin2.default.extend({}, row.cols[c]),
          colStartIndex = col.colIndex,
          colEndIndex = col.colIndex + col.colspan;

      if (colStartIndex < _frozenColumnIndex) {
        if (colEndIndex <= _frozenColumnIndex) {
          // 좌측편에 변형없이 추가
          tempTable_l.rows[r].cols.push(col);
        } else {
          var leftCol = _jqmin2.default.extend({}, col),
              rightCol = _jqmin2.default.extend({}, leftCol);

          leftCol.colspan = _frozenColumnIndex - leftCol.colIndex;
          rightCol.colIndex = _frozenColumnIndex;
          rightCol.colspan = col.colspan - leftCol.colspan;

          tempTable_l.rows[r].cols.push(leftCol);
          if (rightCol.colspan) {
            tempTable_r.rows[r].cols.push(rightCol);
          }
        }
      } else {
        // 오른편
        tempTable_r.rows[r].cols.push(col);
      }

      col = null;
      colStartIndex = null;
      colEndIndex = null;
    }

    row = null;
  }

  return {
    leftData: tempTable_l,
    rightData: tempTable_r
  };
};

var getTableByStartEndColumnIndex = function getTableByStartEndColumnIndex(_table, _startColumnIndex, _endColumnIndex) {

  var tempTable = { rows: [] };
  for (var r = 0, rl = _table.rows.length; r < rl; r++) {
    var row = _table.rows[r];

    tempTable.rows[r] = { cols: [] };
    for (var c = 0, cl = row.cols.length; c < cl; c++) {
      var col = _jqmin2.default.extend({}, row.cols[c]),
          colStartIndex = col.colIndex,
          colEndIndex = col.colIndex + col.colspan;

      if (_startColumnIndex <= colStartIndex || colEndIndex <= _endColumnIndex) {
        if (_startColumnIndex <= colStartIndex && colEndIndex <= _endColumnIndex) {
          // 변형없이 추가
          tempTable.rows[r].cols.push(col);
        } else if (_startColumnIndex > colStartIndex && colEndIndex > _startColumnIndex) {
          // 앞에서 걸친경우
          col.colspan = colEndIndex - _startColumnIndex;
          tempTable.rows[r].cols.push(col);
        } else if (colEndIndex > _endColumnIndex && colStartIndex <= _endColumnIndex) {
          tempTable.rows[r].cols.push(col);
        }
      }
    }
  }

  return tempTable;
};

var getMousePosition = function getMousePosition(e) {
  var mouseObj = void 0,
      originalEvent = e.originalEvent ? e.originalEvent : e;

  mouseObj = 'changedTouches' in originalEvent && originalEvent.changedTouches ? originalEvent.changedTouches[0] : originalEvent;
  // clientX, Y 쓰면 스크롤에서 문제 발생
  return {
    clientX: mouseObj.pageX,
    clientY: mouseObj.pageY
  };
};

var ENM = {
  "mousedown": _AX6Info2.default.supportTouch ? "touchstart" : "mousedown",
  "mousemove": _AX6Info2.default.supportTouch ? "touchmove" : "mousemove",
  "mouseup": _AX6Info2.default.supportTouch ? "touchend" : "mouseup"
};

var makeHeaderTable = function makeHeaderTable(_columns) {
  var columns = _AX6Util2.default.deepCopy(_columns),
      cfg = this.config,
      table = {
    rows: []
  },
      colIndex = 0,
      maekRows = function maekRows(_columns, depth, parentField) {
    var row = { cols: [] };
    var i = 0,
        l = _columns.length;

    for (; i < l; i++) {
      var field = _columns[i];
      var colspan = 1;

      if (!field.hidden) {
        field.colspan = 1;
        field.rowspan = 1;

        field.rowIndex = depth;
        field.colIndex = function () {
          if (!parentField) {
            return colIndex++;
          } else {
            colIndex = parentField.colIndex + i + 1;
            return parentField.colIndex + i;
          }
        }();

        row.cols.push(field);

        if ('columns' in field) {
          colspan = maekRows(field.columns, depth + 1, field);
        } else {
          field.width = 'width' in field ? field.width : cfg.columnMinWidth;
        }
        field.colspan = colspan;
      } else {}
    }

    if (row.cols.length > 0) {
      if (!table.rows[depth]) {
        table.rows[depth] = { cols: [] };
      }
      table.rows[depth].cols = table.rows[depth].cols.concat(row.cols);
      return row.cols.length - 1 + colspan;
    } else {
      return colspan;
    }
  };

  maekRows(columns, 0);

  // set rowspan
  for (var r = 0, rl = table.rows.length; r < rl; r++) {
    for (var c = 0, cl = table.rows[r].cols.length; c < cl; c++) {
      if (!('columns' in table.rows[r].cols[c])) {
        table.rows[r].cols[c].rowspan = rl - r;
      }
    }
  }

  return table;
};

var makeBodyRowTable = function makeBodyRowTable(_columns) {
  var columns = _AX6Util2.default.deepCopy(_columns),
      table = {
    rows: []
  },
      colIndex = 0,
      maekRows = function maekRows(_columns, depth, parentField) {
    var row = { cols: [] },
        i = 0,
        l = _columns.length,
        colspan = 1;

    var selfMakeRow = function selfMakeRow(__columns) {
      var i = 0,
          l = __columns.length;
      for (; i < l; i++) {
        var field = __columns[i],
            _colspan = 1;

        if (!field.hidden) {

          if ('key' in field) {
            field.colspan = 1;
            field.rowspan = 1;

            field.rowIndex = depth;
            field.colIndex = function () {
              if (!parentField) {
                return colIndex++;
              } else {
                colIndex = parentField.colIndex + i + 1;
                return parentField.colIndex + i;
              }
            }();

            row.cols.push(field);
            if ('columns' in field) {
              _colspan = maekRows(field.columns, depth + 1, field);
            }
            field.colspan = _colspan;
          } else {
            if ('columns' in field) {
              selfMakeRow(field.columns, depth);
            }
          }
        } else {}
      }
    };

    for (; i < l; i++) {
      var field = _columns[i];
      colspan = 1;

      if (!field.hidden) {

        if ('key' in field) {
          field.colspan = 1;
          field.rowspan = 1;

          field.rowIndex = depth;
          field.colIndex = function () {
            if (!parentField) {
              return colIndex++;
            } else {
              colIndex = parentField.colIndex + i + 1;
              return parentField.colIndex + i;
            }
          }();

          row.cols.push(field);
          if ('columns' in field) {
            colspan = maekRows(field.columns, depth + 1, field);
          }
          field.colspan = colspan;
        } else {
          if ('columns' in field) {
            selfMakeRow(field.columns, depth);
          }
        }
      } else {}

      field = null;
    }

    if (row.cols.length > 0) {
      if (!table.rows[depth]) {
        table.rows[depth] = { cols: [] };
      }
      table.rows[depth].cols = table.rows[depth].cols.concat(row.cols);
      return row.cols.length - 1 + colspan;
    } else {
      return colspan;
    }
  };

  maekRows(columns, 0);

  (function (table) {
    // set rowspan
    for (var r = 0, rl = table.rows.length; r < rl; r++) {
      var row = table.rows[r];
      for (var c = 0, cl = row.cols.length; c < cl; c++) {
        var col = row.cols[c];
        if (!('columns' in col)) {
          col.rowspan = rl - r;
        }
        col = null;
      }
      row = null;
    }
  })(table);

  return table;
};

var makeBodyRowMap = function makeBodyRowMap(_table) {
  var map = {};
  _table.rows.forEach(function (row) {
    row.cols.forEach(function (col) {
      map[col.rowIndex + "_" + col.colIndex] = _jqmin2.default.extend({}, col);
    });
  });
  return map;
};

var makeFootSumTable = function makeFootSumTable(_footSumColumns) {
  var table = {
    rows: []
  };

  for (var r = 0, rl = _footSumColumns.length; r < rl; r++) {
    var footSumRow = _footSumColumns[r],
        addC = 0;

    table.rows[r] = { cols: [] };

    for (var c = 0, cl = footSumRow.length; c < cl; c++) {
      if (addC > this.colGroup.length) break;
      var colspan = footSumRow[c].colspan || 1;
      if (footSumRow[c].label || footSumRow[c].key) {
        table.rows[r].cols.push({
          colspan: colspan,
          rowspan: 1,
          colIndex: addC,
          columnAttr: "sum",
          align: footSumRow[c].align,
          label: footSumRow[c].label,
          key: footSumRow[c].key,
          collector: footSumRow[c].collector,
          formatter: footSumRow[c].formatter
        });
      } else {
        table.rows[r].cols.push({
          colIndex: addC,
          colspan: colspan,
          rowspan: 1,
          label: "&nbsp;"
        });
      }
      addC += colspan;
      colspan = null;
    }

    if (addC < this.colGroup.length) {
      for (var _c = addC; _c < this.colGroup.length; _c++) {
        table.rows[r].cols.push({
          colIndex: _c,
          colspan: 1,
          rowspan: 1,
          label: "&nbsp;"
        });
      }
    }
    footSumRow = null;
    addC = null;
  }

  return table;
};

var makeBodyGroupingTable = function makeBodyGroupingTable(_bodyGroupingColumns) {
  var table = {
    rows: []
  },
      r = 0,
      addC = 0;

  table.rows[r] = { cols: [] };
  for (var _c2 = 0, cl = _bodyGroupingColumns.length; _c2 < cl; _c2++) {
    if (addC > this.columns.length) break;
    var colspan = _bodyGroupingColumns[_c2].colspan || 1;
    if (_bodyGroupingColumns[_c2].label || _bodyGroupingColumns[_c2].key) {
      table.rows[r].cols.push({
        colspan: colspan,
        rowspan: 1,
        rowIndex: 0,
        colIndex: addC,
        columnAttr: "default",
        align: _bodyGroupingColumns[_c2].align,
        label: _bodyGroupingColumns[_c2].label,
        key: _bodyGroupingColumns[_c2].key,
        collector: _bodyGroupingColumns[_c2].collector,
        formatter: _bodyGroupingColumns[_c2].formatter
      });
    } else {
      table.rows[r].cols.push({
        rowIndex: 0,
        colIndex: addC,
        colspan: colspan,
        rowspan: 1,
        label: "&nbsp;"
      });
    }
    addC += colspan;
  }

  if (addC < this.colGroup.length) {
    for (var c = addC; c < this.colGroup.length; c++) {
      table.rows[r].cols.push({
        rowIndex: 0,
        colIndex: c,
        colspan: 1,
        rowspan: 1,
        label: "&nbsp;"
      });
    }
  }

  return table;
};

var findPanelByColumnIndex = function findPanelByColumnIndex(_dindex, _colIndex, _rowIndex) {
  var _containerPanelName = void 0,
      _isScrollPanel = false,
      _panels = [];

  if (this.xvar.frozenRowIndex > _dindex) _panels.push("top");
  if (this.xvar.frozenColumnIndex > _colIndex) _panels.push("left");
  _panels.push("body");

  if (this.xvar.frozenColumnIndex <= _colIndex || this.xvar.frozenRowIndex <= _dindex) {
    _containerPanelName = _panels.join("-");
    _panels.push("scroll");
    _isScrollPanel = true;
  }

  return {
    panelName: _panels.join("-"),
    containerPanelName: _containerPanelName,
    isScrollPanel: _isScrollPanel
  };
};

var getRealPathForDataItem = function getRealPathForDataItem(_dataPath) {
  var path = [],
      _path = [].concat(_dataPath.split(/[\.\[\]]/g));

  _path.forEach(function (n) {
    if (n !== "") path.push("[\"" + n.replace(/['\"]/g, "") + "\"]");
  });
  _path = null;
  return path.join("");
};

exports.default = {
  divideTableByFrozenColumnIndex: divideTableByFrozenColumnIndex,
  getTableByStartEndColumnIndex: getTableByStartEndColumnIndex,
  getMousePosition: getMousePosition,
  ENM: ENM,
  makeHeaderTable: makeHeaderTable,
  makeBodyRowTable: makeBodyRowTable,
  makeBodyRowMap: makeBodyRowMap,
  makeFootSumTable: makeFootSumTable,
  makeBodyGroupingTable: makeBodyGroupingTable,
  findPanelByColumnIndex: findPanelByColumnIndex,
  getRealPathForDataItem: getRealPathForDataItem
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jqmin = __webpack_require__(1);

var _jqmin2 = _interopRequireDefault(_jqmin);

var _AX6Util = __webpack_require__(4);

var _AX6Util2 = _interopRequireDefault(_AX6Util);

var _AX6UIGrid_util = __webpack_require__(65);

var _AX6UIGrid_util2 = _interopRequireDefault(_AX6UIGrid_util);

var _AX6UIGrid_data = __webpack_require__(81);

var _AX6UIGrid_data2 = _interopRequireDefault(_AX6UIGrid_data);

var _AX6UIGrid_page = __webpack_require__(82);

var _AX6UIGrid_page2 = _interopRequireDefault(_AX6UIGrid_page);

var _AX6UIGrid_header = __webpack_require__(83);

var _AX6UIGrid_header2 = _interopRequireDefault(_AX6UIGrid_header);

var _AX6UIGrid_inline_editor = __webpack_require__(99);

var _AX6UIGrid_inline_editor2 = _interopRequireDefault(_AX6UIGrid_inline_editor);

var _AX6UIGrid_collector = __webpack_require__(100);

var _AX6UIGrid_collector2 = _interopRequireDefault(_AX6UIGrid_collector);

var _AX6UIGrid_formatter = __webpack_require__(101);

var _AX6UIGrid_formatter2 = _interopRequireDefault(_AX6UIGrid_formatter);

var _AX6UIGrid_scroller = __webpack_require__(84);

var _AX6UIGrid_scroller2 = _interopRequireDefault(_AX6UIGrid_scroller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ~~~~~~~~~~~~~~~~~~ end of import  ~~~~~~~~~~~~~~~~~~~~ */

var columnSelect = {
  focusClear: function focusClear() {
    var self = this,
        _column = void 0;
    for (var c in self.focusedColumn) {
      _column = self.focusedColumn[c];
      if (_column) {
        self.$.panel[_column.panelName].find('[data-ax6grid-tr-data-index="' + _column.dindex + '"]').find('[data-ax6grid-column-rowindex="' + _column.rowIndex + '"][data-ax6grid-column-colindex="' + _column.colIndex + '"]').removeAttr('data-ax6grid-column-focused');
      }
    }
    self.focusedColumn = {};
  },
  clear: function clear() {
    var self = this,
        _column = void 0;
    for (var c in self.selectedColumn) {
      _column = self.selectedColumn[c];
      if (_column) {
        self.$.panel[_column.panelName].find('[data-ax6grid-tr-data-index="' + _column.dindex + '"]').find('[data-ax6grid-column-rowindex="' + _column.rowIndex + '"][data-ax6grid-column-colindex="' + _column.colIndex + '"]').removeAttr('data-ax6grid-column-selected');
      }
    }
    self.selectedColumn = {};
  },
  init: function init(column) {
    var self = this;
    if (this.isInlineEditing) {
      for (var editKey in this.inlineEditing) {
        if (editKey == column.dindex + "_" + column.colIndex + "_" + column.rowIndex) {
          return this;
        }
      }
    }

    // focus
    columnSelect.focusClear.call(self);
    self.focusedColumn[column.dindex + "_" + column.colIndex + "_" + column.rowIndex] = {
      panelName: column.panelName,
      dindex: column.dindex,
      doindex: column.doindex,
      rowIndex: column.rowIndex,
      colIndex: column.colIndex,
      colspan: column.colspan
    };

    // select
    columnSelect.clear.call(self);
    self.xvar.selectedRange = {
      start: [column.dindex, column.rowIndex, column.colIndex, column.colspan - 1],
      end: null
    };
    self.selectedColumn[column.dindex + "_" + column.colIndex + "_" + column.rowIndex] = function (data) {
      if (data) {
        return false;
      } else {
        return {
          panelName: column.panelName,
          dindex: column.dindex,
          doindex: column.doindex,
          rowIndex: column.rowIndex,
          colIndex: column.colIndex,
          colspan: column.colspan
        };
      }
    }(self.selectedColumn[column.dindex + "_" + column.colIndex + "_" + column.rowIndex]);

    this.$.panel[column.panelName].find('[data-ax6grid-tr-data-index="' + column.dindex + '"]').find('[data-ax6grid-column-rowindex="' + column.rowIndex + '"][data-ax6grid-column-colindex="' + column.colIndex + '"]').attr('data-ax6grid-column-focused', "true").attr('data-ax6grid-column-selected', "true");

    if (this.isInlineEditing) {
      inlineEdit.deActive.call(this, "RETURN");
    }
  },
  update: function update(column) {
    var self = this;
    var dindex = void 0,
        doindex = void 0,
        colIndex = void 0,
        rowIndex = void 0,
        trl = void 0;

    self.xvar.selectedRange["end"] = [column.dindex, column.rowIndex, column.colIndex, column.colspan - 1];
    columnSelect.clear.call(self);

    var range = {
      r: {
        s: Math.min(self.xvar.selectedRange["start"][0], self.xvar.selectedRange["end"][0]),
        e: Math.max(self.xvar.selectedRange["start"][0], self.xvar.selectedRange["end"][0])
      },
      c: {
        s: Math.min(self.xvar.selectedRange["start"][2], self.xvar.selectedRange["end"][2]),
        e: Math.max(self.xvar.selectedRange["start"][2] + self.xvar.selectedRange["start"][3], self.xvar.selectedRange["end"][2] + self.xvar.selectedRange["end"][3])
      }
    };

    dindex = range.r.s;
    for (; dindex <= range.r.e; dindex++) {

      trl = this.bodyRowTable.rows.length;
      rowIndex = 0;
      for (; rowIndex < trl; rowIndex++) {
        colIndex = range.c.s;
        for (; colIndex <= range.c.e; colIndex++) {
          var _panels = [],
              panelName = "";

          if (self.xvar.frozenRowIndex > dindex) _panels.push("top");
          if (self.xvar.frozenColumnIndex > colIndex) _panels.push("left");
          _panels.push("body");
          if (_panels[0] !== "top") _panels.push("scroll");
          panelName = _panels.join("-");

          self.selectedColumn[dindex + "_" + colIndex + "_" + rowIndex] = {
            panelName: panelName,
            dindex: dindex,
            rowIndex: rowIndex,
            colIndex: colIndex,
            colspan: column.colspan
          };

          _panels = null;
          panelName = null;
        }
      }
    }
    dindex = null;
    doindex = null;
    colIndex = null;
    rowIndex = null;

    for (var c in self.selectedColumn) {
      var _column = self.selectedColumn[c];
      if (_column) {
        self.$.panel[_column.panelName].find('[data-ax6grid-tr-data-index="' + _column.dindex + '"]').find('[data-ax6grid-column-rowindex="' + _column.rowIndex + '"][data-ax6grid-column-colindex="' + _column.colIndex + '"]').attr('data-ax6grid-column-selected', 'true');
      }
    }
  }
};

var columnSelector = {
  "on": function on(cell) {
    var self = this;

    if (this.inlineEditing[cell.dindex + "_" + cell.colIndex + "_" + cell.rowIndex]) {
      return;
    }

    columnSelect.init.call(self, cell);

    this.$["container"]["body"].on("mousemove.ax5grid-" + this.instanceId, '[data-ax6grid-column-attr="default"]', function (e) {
      if (this.getAttribute("data-ax6grid-column-rowIndex")) {
        columnSelect.update.call(self, {
          panelName: this.getAttribute("data-ax6grid-panel-name"),
          dindex: Number(this.getAttribute("data-ax6grid-data-index")),
          doindex: Number(this.getAttribute("data-ax6grid-data-o-index")),
          rowIndex: Number(this.getAttribute("data-ax6grid-column-rowIndex")),
          colIndex: Number(this.getAttribute("data-ax6grid-column-colIndex")),
          colspan: Number(this.getAttribute("colspan"))
        });
        _AX6Util2.default.stopEvent(e);
      }
    }).on("mouseup.ax5grid-" + this.instanceId, function () {
      columnSelector.off.call(self);
    }).on("mouseleave.ax5grid-" + this.instanceId, function () {
      columnSelector.off.call(self);
    });

    (0, _jqmin2.default)(document.body).attr('unselectable', 'on').css('user-select', 'none').on('selectstart', false);
  },
  "off": function off() {

    this.$["container"]["body"].off("mousemove.ax5grid-" + this.instanceId).off("mouseup.ax5grid-" + this.instanceId).off("mouseleave.ax5grid-" + this.instanceId);

    (0, _jqmin2.default)(document.body).removeAttr('unselectable').css('user-select', 'auto').off('selectstart');
  }
};

var resetFrozenColumn = function resetFrozenColumn() {
  var cfg = this.config,
      dividedBodyRowObj = _AX6UIGrid_util2.default.divideTableByFrozenColumnIndex(this.bodyRowTable, this.xvar.frozenColumnIndex);

  this.asideBodyRowData = function (dataTable) {
    var data = { rows: [] };
    for (var i = 0, l = dataTable.rows.length; i < l; i++) {
      data.rows[i] = { cols: [] };
      if (i === 0) {
        var col = {
          label: "",
          colspan: 1,
          rowspan: dataTable.rows.length,
          colIndex: null
        },
            _col = {};

        if (cfg.showLineNumber) {
          _col = _jqmin2.default.extend({}, col, {
            width: cfg.lineNumberColumnWidth,
            _width: cfg.lineNumberColumnWidth,
            columnAttr: "lineNumber",
            label: "&nbsp;", key: "__d-index__"
          });
          data.rows[i].cols.push(_col);
        }
        if (cfg.showRowSelector) {
          _col = _jqmin2.default.extend({}, col, {
            width: cfg.rowSelectorColumnWidth,
            _width: cfg.rowSelectorColumnWidth,
            columnAttr: "rowSelector",
            label: "", key: "__d-checkbox__"
          });
          data.rows[i].cols.push(_col);
        }
      }
    }

    return data;
  }.call(this, this.bodyRowTable);

  //console.log(dividedBodyRowObj);

  this.leftBodyRowData = dividedBodyRowObj.leftData;
  this.bodyRowData = dividedBodyRowObj.rightData;

  if (cfg.body.grouping) {
    var dividedBodyGroupingObj = _AX6UIGrid_util2.default.divideTableByFrozenColumnIndex(this.bodyGroupingTable, this.xvar.frozenColumnIndex);
    this.asideBodyGroupingData = function (dataTable) {
      var data = { rows: [] };
      for (var i = 0, l = dataTable.rows.length; i < l; i++) {
        data.rows[i] = { cols: [] };
        if (i === 0) {
          var col = {
            label: "",
            colspan: 1,
            rowspan: dataTable.rows.length,
            colIndex: null
          },
              _col = {};

          if (cfg.showLineNumber) {
            _col = _jqmin2.default.extend({}, col, {
              width: cfg.lineNumberColumnWidth,
              _width: cfg.lineNumberColumnWidth,
              columnAttr: "lineNumber",
              label: "&nbsp;", key: "__d-index__"
            });
            data.rows[i].cols.push(_col);
          }
          if (cfg.showRowSelector) {
            _col = _jqmin2.default.extend({}, col, {
              width: cfg.rowSelectorColumnWidth,
              _width: cfg.rowSelectorColumnWidth,
              columnAttr: "rowSelector",
              label: "", key: "__d-checkbox__"
            });
            data.rows[i].cols.push(_col);
          }
        }
      }

      return data;
    }.call(this, this.bodyGroupingTable);
    this.leftBodyGroupingData = dividedBodyGroupingObj.leftData;
    this.bodyGroupingData = dividedBodyGroupingObj.rightData;
    this.bodyGroupingMap = _AX6UIGrid_util2.default.makeBodyRowMap.call(this, this.bodyGroupingTable);
  }

  this.leftFootSumData = {};
  this.footSumData = {};
  if (this.config.footSum) {
    var dividedFootSumObj = _AX6UIGrid_util2.default.divideTableByFrozenColumnIndex(this.footSumTable, this.xvar.frozenColumnIndex);
    this.leftFootSumData = dividedFootSumObj.leftData;
    this.footSumData = dividedFootSumObj.rightData;
  }
};

var getFieldValue = function getFieldValue(_list, _item, _index, _col, _value, _returnPlainText) {

  var _key = _col.key,
      tagsToReplace = {
    '<': '&lt;',
    '>': '&gt;'
  };

  if (_key === "__d-index__") {
    return typeof _item["__index"] !== "undefined" ? _item["__index"] + 1 : "";
  } else if (_key === "__d-checkbox__") {
    return "<div class=\"checkBox\" style=\"max-height: " + (_col.width - 10) + "px;min-height: " + (_col.width - 10) + "px;\"></div>";
  } else {
    if (_col.editor && function (_editor) {
      if (_editor.type in _AX6UIGrid_inline_editor2.default) {
        return _AX6UIGrid_inline_editor2.default[_editor.type].editMode == "inline";
      }
      return false;
    }(_col.editor)) {
      // editor가 inline타입이라면

      _value = _value || _AX6UIGrid_data2.default.getValue.call(this, _index, _item.__origin_index__, _key);

      if (_AX6Util2.default.isFunction(_col.editor.disabled)) {
        if (_col.editor.disabled.call({
          list: _list,
          dindex: _index,
          item: _list[_index],
          key: _key,
          value: _value
        })) {
          return _value;
        }
      }

      // print editor
      return _returnPlainText ? _value : _AX6UIGrid_inline_editor2.default[_col.editor.type].getHtml(this, _col.editor, _value);
    }

    var valueProcessor = {
      "formatter": function formatter() {
        var that = {
          key: _key,
          value: _value || _AX6UIGrid_data2.default.getValue.call(this, _index, _item.__origin_index__, _key),
          dindex: _index,
          item: _item,
          list: _list
        };

        var caller = _AX6Util2.default.isFunction(_col.formatter) ? _col.formatter : this.customFormatter[_col.formatter] || _AX6UIGrid_formatter2.default[_col.formatter];
        return caller ? caller.call(that) : that.value;
      },
      "default": function _default() {
        var returnValue = "";

        if (typeof _value !== "undefined") {
          returnValue = _value;
        } else {
          if (/[\.\[\]]/.test(_key)) {
            _value = _AX6UIGrid_data2.default.getValue.call(this, _index, _item.__origin_index__, _key);
          } else {
            _value = _item[_key];
          }

          if (_value !== null && typeof _value !== "undefined") returnValue = _value;
        }

        // 키값이 Boolean일때 오류 발생하여 수정.
        return typeof returnValue !== "string" ? returnValue : returnValue.replace(/[<>]/g, function (tag) {
          return tagsToReplace[tag] || tag;
        });
      },
      "treeControl": function treeControl(__value) {
        var cfg = this.config,
            keys = this.config.tree.columnKeys,
            indentNodeHtml = '';

        if (_item[keys.children].length) {
          indentNodeHtml += '<a ' + 'data-ax6grid-data-index="' + _index + '" ' + 'data-ax6grid-column-attr="tree-control" ' + 'data-ax6grid-tnode-arrow="" ' + 'style="width: ' + cfg.tree.arrowWidth + 'px;padding-left:' + _item[keys.depth] * cfg.tree.indentWidth + 'px;"' + '>';
          indentNodeHtml += _item[keys.collapse] ? cfg.tree.icons.collapsedArrow : cfg.tree.icons.openedArrow;
          indentNodeHtml += '</a>';
        } else {
          indentNodeHtml += '<span ' + 'data-ax6grid-tnode-arrow="" ' + 'style="width: ' + cfg.tree.arrowWidth + 'px;padding-left:' + _item[keys.depth] * cfg.tree.indentWidth + 'px;"' + '>&nbsp;</span>';
        }

        indentNodeHtml += '<span ' + 'data-ax6grid-tnode-item="' + (_item[keys.children].length ? 'group' : 'item') + '" ' + 'style="width: ' + cfg.tree.iconWidth + 'px;"' + '>';
        indentNodeHtml += _item[keys.children].length ? _item[keys.collapse] ? cfg.tree.icons.collapsedGroupIcon : cfg.tree.icons.groupIcon : cfg.tree.icons.itemIcon;
        indentNodeHtml += '</span>';

        return indentNodeHtml + __value;
      }
    };

    var returnValue = _col.formatter ? valueProcessor.formatter.call(this) : valueProcessor.default.call(this);
    if (this.config.tree.use && _col.treeControl) {
      returnValue = valueProcessor.treeControl.call(this, returnValue);
    }

    return returnValue;
  }
};

var getGroupingValue = function getGroupingValue(_item, _index, _col) {
  var value = void 0,
      that = void 0,
      caller = void 0,
      _key = _col.key,
      _label = _col.label;

  if (typeof _key === "undefined") {
    that = {
      key: _key,
      list: _item.__groupingList,
      groupBy: _item.__groupingBy
    };
    if (_AX6Util2.default.isFunction(_label)) {
      value = _label.call(that);
    } else {
      value = _label;
    }
    _item[_col.colIndex] = value;
    return value;
  } else if (_key === "__d-index__") {
    return '';
  } else if (_key === "__d-checkbox__") {
    return '';
  } else {
    if (_col.collector) {
      that = {
        key: _key,
        list: _item.__groupingList
      };
      _item[_col.colIndex] = value = (_AX6Util2.default.isFunction(_col.collector) ? _col.collector : this.customCollector[_col.collector] || _AX6UIGrid_collector2.default[_col.collector]).call(that);
      if (_col.formatter) {
        that.value = value;
        caller = _AX6Util2.default.isFunction(_col.formatter) ? _col.formatter : this.customFormatter[_col.formatter] || _AX6UIGrid_formatter2.default[_col.formatter];
        return caller ? caller.call(that) : value;
      } else {
        return value;
      }
    } else {
      return "&nbsp;";
    }
  }
};

var getSumFieldValue = function getSumFieldValue(_list, _col) {
  var _key = _col.key,
      _label = _col.label;
  //, _collector, _formatter
  if (typeof _key === "undefined") {
    return _label;
  } else if (_key === "__d-index__" || _key === "__d-checkbox__") {
    return '&nbsp;';
  } else {
    if (_col.collector) {
      var that = {
        key: _key,
        list: _list
      };
      var value = (_AX6Util2.default.isFunction(_col.collector) ? _col.collector : this.customCollector[_col.collector] || _AX6UIGrid_collector2.default[_col.collector]).call(that);
      that.value = value;

      if (_col.formatter) {
        return (_AX6Util2.default.isFunction(_col.formatter) ? _col.formatter : this.config.formatter[_col.formatter] || _AX6UIGrid_formatter2.default[_col.formatter]).call(that);
      } else {
        return value;
      }
    } else {
      return "&nbsp;";
    }
  }
};

var inlineEdit = {
  active: function active(_focusedColumn, _e, _initValue) {
    var self = this,
        dindex = void 0,
        doindex = void 0,
        colIndex = void 0,
        rowIndex = void 0,
        panelName = void 0,
        colspan = void 0,
        col = void 0,
        editor = void 0;

    for (var key in _focusedColumn) {
      panelName = _focusedColumn[key].panelName;
      dindex = _focusedColumn[key].dindex;
      doindex = _focusedColumn[key].doindex;
      colIndex = _focusedColumn[key].colIndex;
      rowIndex = _focusedColumn[key].rowIndex;
      colspan = _focusedColumn[key].colspan;

      // 인라인 에디팅을 멈춰야 하는 경우 조건
      col = this.colGroup[colIndex];
      if (!(editor = col.editor)) return this;

      // editor disabled 체크
      if (_AX6Util2.default.isFunction(editor.disabled)) {
        if (editor.disabled.call({
          list: this.list,
          dindex: dindex,
          item: this.list[dindex],
          key: col.key,
          value: _initValue
        })) {
          return this;
        }
      }

      // 조건에 맞지 않는 에디팅 타입이면 반응 없음.
      if (!function (_editor, _type) {
        if (_editor.type in _AX6UIGrid_inline_editor2.default) {
          return _AX6UIGrid_inline_editor2.default[_editor.type].editMode == "popup";
        }
      }(editor)) {
        // 체크 박스 타입이면 값 변경 시도
        if (editor.type == "checkbox") {
          var checked = void 0,
              newValue = void 0;
          if (editor.config && editor.config.trueValue) {
            if (checked = !(_initValue == editor.config.trueValue)) {
              newValue = editor.config.trueValue;
            } else {
              newValue = editor.config.falseValue;
            }
          } else {
            newValue = checked = _initValue == false || _initValue == "false" || _initValue < "1" ? "true" : "false";
          }

          _AX6UIGrid_data2.default.setValue.call(self, dindex, doindex, col.key, newValue);
          updateRowState.call(self, ["cellChecked"], dindex, doindex, {
            key: col.key, rowIndex: rowIndex, colIndex: colIndex,
            editorConfig: col.editor.config, checked: checked
          });
        }
        return this;
      }

      if (this.list[dindex].__isGrouping) {
        return false;
      }
      if (key in this.inlineEditing) {
        return false;
      }

      this.inlineEditing[key] = {
        editor: editor,
        panelName: panelName,
        columnKey: key,
        column: _focusedColumn[key],
        useReturnToSave: _AX6UIGrid_inline_editor2.default[editor.type].useReturnToSave
      };
      this.isInlineEditing = true;
    }
    if (this.isInlineEditing) {

      var originalValue = _AX6UIGrid_data2.default.getValue.call(self, dindex, doindex, col.key),
          initValue = function (__value, __editor) {
        if (_AX6Util2.default.isNothing(__value)) {
          __value = _AX6Util2.default.isNothing(originalValue) ? "" : originalValue;
        }

        if (__editor.type == "money") {
          return _AX6Util2.default.number(__value, { "money": true });
        } else {
          return __value;
        }
      }.call(this, _initValue, editor);

      this.inlineEditing[key].$inlineEditorCell = this.$["panel"][panelName].find('[data-ax6grid-tr-data-index="' + dindex + '"]').find('[data-ax6grid-column-rowindex="' + rowIndex + '"][data-ax6grid-column-colindex="' + colIndex + '"]').find('[data-ax6grid-cellholder]');

      this.inlineEditing[key].$inlineEditor = _AX6UIGrid_inline_editor2.default[editor.type].init(this, key, editor, this.inlineEditing[key].$inlineEditorCell, initValue);

      return true;
    }
  },
  deActive: function deActive(_msg, _key, _value) {
    // console.log(this.inlineEditing.column.dindex, this.inlineEditing.$inlineEditor.val());
    if (!this.inlineEditing[_key]) return this;

    var panelName = this.inlineEditing[_key].panelName,
        dindex = this.inlineEditing[_key].column.dindex,
        doindex = this.inlineEditing[_key].column.doindex,
        rowIndex = this.inlineEditing[_key].column.rowIndex,
        colIndex = this.inlineEditing[_key].column.colIndex,
        column = this.bodyRowMap[this.inlineEditing[_key].column.rowIndex + "_" + this.inlineEditing[_key].column.colIndex],
        editorValue = function ($inlineEditor) {
      if (typeof _value === "undefined") {
        if ($inlineEditor.get(0).tagName == "SELECT" || $inlineEditor.get(0).tagName == "INPUT" || $inlineEditor.get(0).tagName == "TEXTAREA") {
          return $inlineEditor.val();
        } else {
          _msg = "CANCEL";
          return false;
        }
      } else {
        return _value;
      }
    }(this.inlineEditing[_key].$inlineEditor),
        newValue = function (__value, __editor) {
      if (__editor.type == "money") {
        return _AX6Util2.default.number(__value);
      } else {
        return __value;
      }
    }.call(this, editorValue, column.editor);

    var action = {
      "CANCEL": function CANCEL(_dindex, _column, _newValue) {
        action["__clear"].call(this);
      },
      "RETURN": function RETURN(_dindex, _doindex, _column, _newValue) {
        if (_AX6UIGrid_data2.default.setValue.call(this, _dindex, _doindex, _column.key, _newValue)) {
          action["__clear"].call(this);
          repaintCell.call(this, panelName, _dindex, _doindex, rowIndex, colIndex, _newValue);
        } else {
          action["__clear"].call(this);
        }
      },
      "__clear": function __clear() {
        this.isInlineEditing = false;
        var bindedAx5ui = this.inlineEditing[_key].$inlineEditor.data("binded-ax5ui");
        if (bindedAx5ui == "ax5picker") {
          this.inlineEditing[_key].$inlineEditor.ax5picker("close");
        } else if (bindedAx5ui == "ax5select") {
          this.inlineEditing[_key].$inlineEditor.ax5select("close");
        }

        this.inlineEditing[_key].$inlineEditor.remove();
        this.inlineEditing[_key].$inlineEditor = null;
        this.inlineEditing[_key].$inlineEditorCell = null;
        this.inlineEditing[_key] = undefined;
        delete this.inlineEditing[_key]; // delete 지원안하는 브라우저 테스트..
      }
    };

    if (_msg in action) {
      action[_msg || "RETURN"].call(this, dindex, doindex, column, newValue);
    } else {
      action["__clear"].call(this);
    }
  },
  keydown: function keydown(key, columnKey, _options) {
    var processor = {
      "ESC": function ESC() {
        for (var columnKey in this.inlineEditing) {
          inlineEdit.deActive.call(this, "CANCEL", columnKey);
        }
      },
      "RETURN": function RETURN() {
        if (this.isInlineEditing) {
          if (this.inlineEditing[columnKey] && this.inlineEditing[columnKey].useReturnToSave) {
            // todo : 네이밍 검증 할 필요있음.
            inlineEdit.deActive.call(this, "RETURN", columnKey);
          } else {
            return false;
          }
        } else {

          for (var k in this.focusedColumn) {
            var _column = this.focusedColumn[k],
                column = this.bodyRowMap[_column.rowIndex + "_" + _column.colIndex],
                dindex = _column.dindex,
                doindex = _column.doindex,
                value = "",
                col = this.colGroup[_column.colIndex];

            if (column) {
              if (!this.list[dindex].__isGrouping) {
                value = _AX6UIGrid_data2.default.getValue.call(this, dindex, doindex, column.key);
              }
            }

            if (col.editor && _AX6UIGrid_inline_editor2.default[col.editor.type].editMode === "inline") {
              if (_options && _options.moveFocus) {} else {
                if (column.editor && column.editor.type == "checkbox") {
                  value = _AX6UIGrid_data2.default.getValue.call(this, dindex, doindex, column.key);

                  var checked = void 0,
                      newValue = void 0;
                  if (column.editor.config && column.editor.config.trueValue) {
                    // console.log(value, column.editor.config.trueValue);

                    if (value != column.editor.config.trueValue) {
                      newValue = column.editor.config.trueValue;
                      checked = true;
                    } else {
                      newValue = column.editor.config.falseValue;
                      checked = false;
                    }
                  } else {
                    newValue = checked = value == false || value == "false" || value < "1" ? "true" : "false";
                  }

                  _AX6UIGrid_data2.default.setValue.call(this, dindex, doindex, column.key, newValue);
                  updateRowState.call(this, ["cellChecked"], dindex, doindex, {
                    key: column.key, rowIndex: _column.rowIndex, colIndex: _column.colIndex,
                    editorConfig: column.editor.config, checked: checked
                  });
                }
              }
            } else {
              inlineEdit.active.call(this, this.focusedColumn, null, value);
            }
          }
        }
        return true;
      }
    };

    if (key in processor) {
      processor[key].call(this, key, columnKey, _options);
    }
  }
};

var repaint = function repaint(_reset) {
  // debugger;
  var cfg = this.config,
      list = this.proxyList ? this.proxyList : this.list;

  /// repaint reset 타입이면 고정컬럼을 재조정
  if (_reset) {
    resetFrozenColumn.call(this);
    // 틀고정 이 변경되면 출력 시작 인덱스 값을 초기화
    this.xvar.paintStartRowIndex = undefined;
    this.xvar.paintStartColumnIndex = undefined;
  }

  /// 출력시작 인덱스
  var paintStartRowIndex = void 0,
      virtualPaintStartRowIndex = void 0;

  if (this.config.virtualScrollY) {
    virtualPaintStartRowIndex = paintStartRowIndex = Math.floor(-this.$.panel["body-scroll"].position().top / this.xvar.bodyTrHeight) + this.xvar.frozenRowIndex;
    if (this.xvar.paintRowCountTopMargin < paintStartRowIndex) {
      paintStartRowIndex -= this.xvar.paintRowCountTopMargin;
    }
  } else {
    paintStartRowIndex = this.xvar.frozenRowIndex;
  }

  if (isNaN(paintStartRowIndex)) return this;

  var paintStartColumnIndex = 0,
      paintEndColumnIndex = 0,
      nopaintLeftColumnsWidth = null,
      nopaintRightColumnsWidth = null;

  var bodyScrollLeft = -this.$.panel["body-scroll"].position().left;

  if (this.config.virtualScrollX) {
    // 페인트 시작컬럼위치와 종료컬럼위치 구하기
    for (var ci = this.xvar.frozenColumnIndex; ci < this.colGroup.length; ci++) {
      // bodyScrollLeft
      this.colGroup[ci]._sx = ci == this.xvar.frozenColumnIndex ? 0 : this.colGroup[ci - 1]._ex;
      this.colGroup[ci]._ex = this.colGroup[ci]._sx + this.colGroup[ci]._width;

      if (this.colGroup[ci]._sx <= bodyScrollLeft && this.colGroup[ci]._ex >= bodyScrollLeft) {
        paintStartColumnIndex = ci;
      }
      if (this.colGroup[ci]._sx <= bodyScrollLeft + this.xvar.bodyWidth && this.colGroup[ci]._ex >= bodyScrollLeft + this.xvar.bodyWidth) {
        paintEndColumnIndex = ci;

        if (nopaintLeftColumnsWidth === null) nopaintLeftColumnsWidth = this.colGroup[paintStartColumnIndex]._sx;
        if (nopaintRightColumnsWidth === null) nopaintRightColumnsWidth = this.xvar.scrollContentWidth - this.colGroup[ci]._ex;
      }
    }

    if (nopaintLeftColumnsWidth === null) nopaintLeftColumnsWidth = 0;
    if (nopaintRightColumnsWidth === null) nopaintRightColumnsWidth = 0;
    this.$.panel["top-body-scroll"].css({ "padding-left": nopaintLeftColumnsWidth, "padding-right": nopaintRightColumnsWidth });
    this.$.panel["body-scroll"].css({ "padding-left": nopaintLeftColumnsWidth, "padding-right": nopaintRightColumnsWidth });
    this.$.panel["bottom-body-scroll"].css({ "padding-left": nopaintLeftColumnsWidth, "padding-right": nopaintRightColumnsWidth });
  }

  var isFirstPaint = typeof this.xvar.paintStartRowIndex === "undefined",
      headerColGroup = this.headerColGroup,
      asideBodyRowData = this.asideBodyRowData,
      leftBodyRowData = this.leftBodyRowData,
      bodyRowData = this.bodyRowData,
      leftFootSumData = this.leftFootSumData,
      footSumData = this.footSumData,
      asideBodyGroupingData = this.asideBodyGroupingData,
      leftBodyGroupingData = this.leftBodyGroupingData,
      bodyGroupingData = this.bodyGroupingData,
      bodyAlign = cfg.body.align,
      paintRowCount = void 0,
      virtualPaintRowCount = void 0;

  if (!this.config.virtualScrollY) {
    virtualPaintRowCount = paintRowCount = list.length;
  } else {
    virtualPaintRowCount = Math.ceil(this.xvar.bodyHeight / this.xvar.bodyTrHeight);
    paintRowCount = virtualPaintRowCount + (this.xvar.paintRowCountMargin || 1);
  }

  // 여유범위 안에 있으면 페인팅 안할수 있게 paintStartRowIndex 변경하지 않음.
  if (this.xvar.paintRowCountTopMargin < paintStartRowIndex && Math.abs(this.xvar.paintStartRowIndex - paintStartRowIndex) <= this.xvar.paintRowCountTopMargin) {
    paintStartRowIndex = this.xvar.paintStartRowIndex;
  }

  if (this.xvar.dataRowCount === list.length && this.xvar.paintStartRowIndex === paintStartRowIndex && this.xvar.paintRowCount === paintRowCount && this.xvar.paintStartColumnIndex === paintStartColumnIndex && this.xvar.paintEndColumnIndex === paintEndColumnIndex) return this; // 스크롤 포지션 변경 여부에 따라 프로세스 진행여부 결정

  // bodyRowData 수정 : 페인트 컬럼 포지션이 달라지므로
  if (nopaintLeftColumnsWidth || nopaintRightColumnsWidth) {
    headerColGroup = [].concat(headerColGroup).splice(paintStartColumnIndex - this.xvar.frozenColumnIndex, paintEndColumnIndex - paintStartColumnIndex + 1 + this.xvar.frozenColumnIndex);
    bodyRowData = _AX6UIGrid_util2.default.getTableByStartEndColumnIndex(bodyRowData, paintStartColumnIndex, paintEndColumnIndex);

    if (cfg.body.grouping) {
      bodyGroupingData = _AX6UIGrid_util2.default.getTableByStartEndColumnIndex(bodyGroupingData, paintStartColumnIndex, paintEndColumnIndex);
    }
    if (cfg.footSum) {
      footSumData = _AX6UIGrid_util2.default.getTableByStartEndColumnIndex(footSumData, paintStartColumnIndex, paintEndColumnIndex);
    }
    if (this.xvar.paintStartColumnIndex !== paintStartColumnIndex || this.xvar.paintEndColumnIndex !== paintEndColumnIndex) {
      this.needToPaintSum = true;
    }
  }

  /// 스크롤 컨텐츠의 높이 : 그리드 스크롤의 실제 크기와는 관계 없이 데이터 갯수에 따라 스크롤 컨텐츠 높이값 구해서 저장해두기.
  this.xvar.scrollContentHeight = this.xvar.bodyTrHeight * (list.length - this.xvar.frozenRowIndex);
  if (this.xvar.scrollContentHeight < 0) this.xvar.scrollContentHeight = 0;

  /// 사용된 패널들의 키 모음
  this.$.livePanelKeys = [];

  // 그리드 바디 영역 페인트 함수
  /**
   * @param _elTargetKey
   * @param _colGroup
   * @param _bodyRow
   * @param _groupRow
   * @param _list
   * @param [_scrollConfig]
   * @returns {boolean}
   */
  var repaintBody = function repaintBody(_elTargetKey, _colGroup, _bodyRow, _groupRow, _list, _scrollConfig) {
    var _elTarget = this.$.panel[_elTargetKey];

    if (!isFirstPaint && !_scrollConfig) {
      this.$.livePanelKeys.push(_elTargetKey); // 사용중인 패널키를 모아둠. (뷰의 상태 변경시 사용하려고)
      return false;
    }

    var SS = [],
        cgi = void 0,
        cgl = void 0,
        di = void 0,
        dl = void 0,
        tri = void 0,
        trl = void 0,
        ci = void 0,
        cl = void 0,
        col = void 0,
        cellHeight = void 0,
        colAlign = void 0,
        isScrolled = function () {
      // 스크롤값이 변경되거나 처음 호출되었습니까?
      if (typeof _scrollConfig === "undefined" || typeof _scrollConfig['paintStartRowIndex'] === "undefined") {
        _scrollConfig = {
          paintStartRowIndex: 0,
          paintRowCount: _list.length
        };
        return false;
      } else {
        return true;
      }
    }(),
        stripeString = '#fff 0px, #fff ' + (cfg.body.columnHeight - cfg.body.columnBorderWidth) + 'px, #eee ' + (cfg.body.columnHeight - cfg.body.columnBorderWidth) + 'px, #eee ' + cfg.body.columnHeight + 'px';

    if (isScrolled) {
      SS.push('<div style="background:repeating-linear-gradient(to top, ' + stripeString + ');' + 'font-size:0;' + 'line-height:0;height: ' + (_scrollConfig.paintStartRowIndex - this.xvar.frozenRowIndex) * _scrollConfig.bodyTrHeight + 'px;"></div>');
    }

    SS.push('<table border="0" cellpadding="0" cellspacing="0">');
    SS.push('<colgroup>');
    for (cgi = 0, cgl = _colGroup.length; cgi < cgl; cgi++) {
      SS.push('<col style="width:' + _colGroup[cgi]._width + 'px;"  />');
    }
    SS.push('<col  />');
    SS.push('</colgroup>');

    di = _scrollConfig.paintStartRowIndex;

    for (dl = function () {
      var len = void 0;
      len = _list.length;
      if (_scrollConfig.paintRowCount + _scrollConfig.paintStartRowIndex < len) {
        len = _scrollConfig.paintRowCount + _scrollConfig.paintStartRowIndex;
      }
      return len;
    }(); di < dl; di++) {

      if (_list[di]) {
        var isGroupingRow = false,
            rowTable = void 0,
            odi = typeof _list[di].__origin_index__ !== "undefined" ? _list[di].__origin_index__ : di;
        if (_groupRow && "__isGrouping" in _list[di]) {
          rowTable = _groupRow;
          isGroupingRow = true;
        } else {
          rowTable = _bodyRow;
        }

        for (tri = 0, trl = rowTable.rows.length; tri < trl; tri++) {

          SS.push('<tr class="tr-' + di % 4 + '', cfg.body.trStyleClass ? _AX6Util2.default.isFunction(cfg.body.trStyleClass) ? ' ' + cfg.body.trStyleClass.call({
            item: _list[di],
            index: di
          }, _list[di], di) : ' ' + cfg.body.trStyleClass : '', '"', isGroupingRow ? ' data-ax6grid-grouping-tr="true"' : '', ' data-ax6grid-tr-data-index="' + di + '"', ' data-ax6grid-tr-data-o-index="' + odi + '"', ' data-ax6grid-selected="' + (_list[di][cfg.columnKeys.selected] || "false") + '"', ' data-ax6grid-disable-selection="' + (_list[di][cfg.columnKeys.disableSelection] || "false") + '"', '>');
          for (ci = 0, cl = rowTable.rows[tri].cols.length; ci < cl; ci++) {
            col = rowTable.rows[tri].cols[ci];
            cellHeight = cfg.body.columnHeight * col.rowspan - cfg.body.columnBorderWidth;
            colAlign = col.align || bodyAlign;

            SS.push('<td ', 'data-ax6grid-panel-name="' + _elTargetKey + '" ', 'data-ax6grid-data-index="' + di + '" ', 'data-ax6grid-data-o-index="' + odi + '" ', 'data-ax6grid-column-row="' + tri + '" ', 'data-ax6grid-column-col="' + ci + '" ', 'data-ax6grid-column-rowIndex="' + col.rowIndex + '" ', 'data-ax6grid-column-colIndex="' + col.colIndex + '" ', 'data-ax6grid-column-attr="' + (col.columnAttr || "default") + '" ', function (_focusedColumn, _selectedColumn) {
              var attrs = "";
              if (_focusedColumn) {
                attrs += 'data-ax6grid-column-focused="true" ';
              }
              if (_selectedColumn) {
                attrs += 'data-ax6grid-column-selected="true" ';
              }
              return attrs;
            }(this.focusedColumn[di + "_" + col.colIndex + "_" + col.rowIndex], this.selectedColumn[di + "_" + col.colIndex + "_" + col.rowIndex]), 'colspan="' + col.colspan + '" ', 'rowspan="' + col.rowspan + '" ', 'class="' + function (_col) {
              var tdCSS_class = "";
              if (_col.styleClass) {
                if (_AX6Util2.default.isFunction(_col.styleClass)) {
                  tdCSS_class += _col.styleClass.call({
                    column: _col,
                    key: _col.key,
                    item: _list[di],
                    index: di
                  }) + " ";
                } else {
                  tdCSS_class += _col.styleClass + " ";
                }
              }
              if (cfg.body.columnBorderWidth) tdCSS_class += "hasBorder ";
              if (ci == cl - 1) tdCSS_class += "isLastColumn ";
              return tdCSS_class;
            }.call(this, col) + '" ', 'style="height: ' + cellHeight + 'px;min-height: 1px;">');

            SS.push(function (_cellHeight) {
              var lineHeight = cfg.body.columnHeight - cfg.body.columnPadding * 2 - cfg.body.columnBorderWidth;
              if (!col.multiLine) {
                _cellHeight = cfg.body.columnHeight - cfg.body.columnBorderWidth;
              }

              return '<span data-ax6grid-cellHolder="' + (col.multiLine ? 'multiLine' : '') + '" ' + (colAlign ? 'data-ax6grid-text-align="' + colAlign + '"' : '') + '" style="height:' + _cellHeight + 'px;' + (col.multiLine ? '' : 'line-height: ' + lineHeight + 'px;') + '">';
            }(cellHeight), isGroupingRow ? getGroupingValue.call(this, _list[di], di, col) : getFieldValue.call(this, _list, _list[di], di, col), '</span>');

            SS.push('</td>');
          }
          SS.push('<td ', 'data-ax6grid-column-row="null" ', 'data-ax6grid-column-col="null" ', 'data-ax6grid-data-index="' + di + '" ', 'data-ax6grid-data-o-index="' + odi + '" ', 'data-ax6grid-column-attr="' + "default" + '" ', 'style="height: ' + cfg.body.columnHeight + 'px;min-height: 1px;" ', '></td>');
          SS.push('</tr>');
        }
      }
    }
    SS.push('</table>');

    if (isScrolled && _list.length) {
      SS.push('<div style="background:repeating-linear-gradient(to bottom, ' + stripeString + ');' + 'font-size:0;' + 'line-height:0;height: ' + (_list.length - di) * _scrollConfig.bodyTrHeight + 'px;"></div>');
    }

    _elTarget.empty();
    SS = SS.join('');

    _elTarget.get(0).innerHTML = SS;

    this.$.livePanelKeys.push(_elTargetKey); // 사용중인 패널키를 모아둠. (뷰의 상태 변경시 사용하려고)
    return true;
  };

  /**
   * @param _elTargetKey
   * @param _colGroup
   * @param _bodyRow
   * @param _list
   * @param [_scrollConfig]
   * @returns {boolean}
   */
  var repaintSum = function repaintSum(_elTargetKey, _colGroup, _bodyRow, _list, _scrollConfig) {
    var _elTarget = this.$.panel[_elTargetKey];

    if (!isFirstPaint && !_scrollConfig) {
      this.$.livePanelKeys.push(_elTargetKey); // 사용중인 패널키를 모아둠. (뷰의 상태 변경시 사용하려고)
      return false;
    }

    var SS = [],
        cgi = void 0,
        cgl = void 0,
        tri = void 0,
        trl = void 0,
        ci = void 0,
        cl = void 0,
        col = void 0,
        cellHeight = void 0,
        colAlign = void 0;

    SS.push('<table border="0" cellpadding="0" cellspacing="0">');
    SS.push('<colgroup>');
    for (cgi = 0, cgl = _colGroup.length; cgi < cgl; cgi++) {
      SS.push('<col style="width:' + _colGroup[cgi]._width + 'px;"  />');
    }
    SS.push('<col  />');
    SS.push('</colgroup>');

    for (tri = 0, trl = _bodyRow.rows.length; tri < trl; tri++) {
      SS.push('<tr class="tr-sum">');
      for (ci = 0, cl = _bodyRow.rows[tri].cols.length; ci < cl; ci++) {
        col = _bodyRow.rows[tri].cols[ci];
        cellHeight = cfg.body.columnHeight * col.rowspan - cfg.body.columnBorderWidth;
        colAlign = col.align || bodyAlign;

        SS.push('<td ', 'data-ax6grid-panel-name="' + _elTargetKey + '" ', 'data-ax6grid-column-row="' + tri + '" ', 'data-ax6grid-column-col="' + ci + '" ', 'data-ax6grid-column-rowIndex="' + tri + '" ', 'data-ax6grid-column-colIndex="' + col.colIndex + '" ', 'data-ax6grid-column-attr="' + (col.columnAttr || "sum") + '" ', function (_focusedColumn, _selectedColumn) {
          var attrs = "";
          if (_focusedColumn) {
            attrs += 'data-ax6grid-column-focused="true" ';
          }
          if (_selectedColumn) {
            attrs += 'data-ax6grid-column-selected="true" ';
          }
          return attrs;
        }(this.focusedColumn["sum_" + col.colIndex + "_" + tri], this.selectedColumn["sum_" + col.colIndex + "_" + tri]), 'colspan="' + col.colspan + '" ', 'rowspan="' + col.rowspan + '" ', 'class="' + function (_col) {
          var tdCSS_class = "";
          if (_col.styleClass) {
            if (_AX6Util2.default.isFunction(_col.styleClass)) {
              tdCSS_class += _col.styleClass.call({
                column: _col,
                key: _col.key,
                isFootSum: true
              }) + " ";
            } else {
              tdCSS_class += _col.styleClass + " ";
            }
          }
          if (cfg.body.columnBorderWidth) tdCSS_class += "hasBorder ";
          if (ci == cl - 1) tdCSS_class += "isLastColumn ";
          return tdCSS_class;
        }.call(this, col) + '" ', 'style="height: ' + cellHeight + 'px;min-height: 1px;">');

        SS.push(function (_cellHeight) {
          var lineHeight = cfg.body.columnHeight - cfg.body.columnPadding * 2 - cfg.body.columnBorderWidth;
          if (!col.multiLine) {
            _cellHeight = cfg.body.columnHeight - cfg.body.columnBorderWidth;
          }

          return '<span data-ax6grid-cellHolder="' + (col.multiLine ? 'multiLine' : '') + '" ' + (colAlign ? 'data-ax6grid-text-align="' + colAlign + '"' : '') + '" style="height:' + _cellHeight + 'px;' + (col.multiLine ? '' : 'line-height: ' + lineHeight + 'px;') + '">';
        }(cellHeight), getSumFieldValue.call(this, _list, col), '</span>');

        SS.push('</td>');
      }
      SS.push('<td ', 'data-ax6grid-column-row="null" ', 'data-ax6grid-column-col="null" ', 'data-ax6grid-column-attr="' + "sum" + '" ', 'style="height: ' + cfg.body.columnHeight + 'px;min-height: 1px;" ', '></td>');
      SS.push('</tr>');
    }

    SS.push('</table>');

    _elTarget.empty();
    SS = SS.join('');

    _elTarget.get(0).innerHTML = SS;

    this.$.livePanelKeys.push(_elTargetKey); // 사용중인 패널키를 모아둠. (뷰의 상태 변경시 사용하려고)
    return true;
  };

  /**
   * @param _elTargetKey
   * @param _colGroup
   * @param _bodyRow
   * @param _list
   * @param [_scrollConfig]
   * @returns {boolean}
   */
  var mergeCellsBody = function mergeCellsBody(_elTargetKey, _colGroup, _bodyRow, _list, _scrollConfig) {
    var tblRowMaps = [];
    var _elTarget = this.$.panel[_elTargetKey];
    var token = {},
        hasMergeTd = void 0;

    // 테이블의 td들을 수잡하여 저장해두고 스크립트로 반복하여 정리.
    var tableTrs = _elTarget.find("tr");
    for (var ri = 0, rl = tableTrs.length; ri < rl; ri++) {
      var tableTrTds = void 0,
          trMaps = void 0;
      tableTrTds = tableTrs[ri].childNodes;
      trMaps = [];

      for (var _ci = 0, cl = tableTrTds.length; _ci < cl; _ci++) {
        var tdObj = {
          "$": (0, _jqmin2.default)(tableTrTds[_ci])
        };

        if (tdObj["$"].attr("data-ax6grid-column-col") != "null") {
          tdObj.dindex = tdObj["$"].attr("data-ax6grid-data-index");
          tdObj.tri = tdObj["$"].attr("data-ax6grid-column-row");
          tdObj.ci = tdObj["$"].attr("data-ax6grid-column-col");
          tdObj.rowIndex = tdObj["$"].attr("data-ax6grid-column-rowIndex");
          tdObj.colIndex = tdObj["$"].attr("data-ax6grid-column-colIndex");
          tdObj.rowspan = tdObj["$"].attr("rowspan");
          tdObj.text = tdObj["$"].text();
          trMaps.push(tdObj);
        }

        tdObj = null;
      }
      tblRowMaps.push(trMaps);
    }

    // 두줄이상 일 때 의미가 있으니.
    if (tblRowMaps.length > 1) {
      hasMergeTd = false;

      var _loop = function _loop(_ri, _rl) {
        var prevTokenColIndexs = [];

        var _loop2 = function _loop2(_ci3, _cl2) {
          // 적용 하려는 컬럼에 editor 속성이 없다면 머지 대상입니다.

          if (!_colGroup[_ci3].editor && function () {
            if (_AX6Util2.default.isArray(cfg.body.mergeCells)) {
              return _AX6Util2.default.search(cfg.body.mergeCells, _colGroup[_ci3].key) > -1;
            } else {
              return true;
            }
          }()) {

            // 앞줄과 값이 같다면.
            if (token[_ci3] && function () {
              if (prevTokenColIndexs.length > 0) {
                var hasFalse = true;
                prevTokenColIndexs.forEach(function (ti) {
                  if (tblRowMaps[_ri - 1][ti].text != tblRowMaps[_ri][ti].text) {
                    hasFalse = false;
                  }
                });
                return hasFalse;
              } else {
                return true;
              }
            }() && token[_ci3].text == tblRowMaps[_ri][_ci3].text) {
              tblRowMaps[_ri][_ci3].rowspan = 0;
              tblRowMaps[token[_ci3].ri][_ci3].rowspan++;
              hasMergeTd = true;
            } else {
              token[_ci3] = {
                ri: _ri,
                ci: _ci3,
                text: tblRowMaps[_ri][_ci3].text
              };
            }

            prevTokenColIndexs.push(_ci3);
          }
        };

        for (var _ci3 = 0, _cl2 = tblRowMaps[_ri].length; _ci3 < _cl2; _ci3++) {
          _loop2(_ci3, _cl2);
        }
      };

      for (var _ri = 0, _rl = tblRowMaps.length; _ri < _rl; _ri++) {
        _loop(_ri, _rl);
      }

      // rowspan을 다 구했으면 적용합니다.
      if (hasMergeTd) {
        for (var _ri2 = 0, _rl2 = tblRowMaps.length; _ri2 < _rl2; _ri2++) {
          for (var _ci2 = 0, _cl = tblRowMaps[_ri2].length; _ci2 < _cl; _ci2++) {
            if (tblRowMaps[_ri2][_ci2].rowspan == 0) {
              tblRowMaps[_ri2][_ci2]["$"].remove();
            } else if (tblRowMaps[_ri2][_ci2].rowspan > 1) {
              tblRowMaps[_ri2][_ci2]["$"].attr("rowspan", tblRowMaps[_ri2][_ci2].rowspan).addClass("merged");
            }
          }
        }
      }
    }
  };

  var scrollConfig = {
    paintStartRowIndex: paintStartRowIndex,
    paintRowCount: paintRowCount,
    paintStartColumnIndex: paintStartColumnIndex,
    paintEndColumnIndex: paintEndColumnIndex,
    nopaintLeftColumnsWidth: nopaintLeftColumnsWidth,
    nopaintRightColumnsWidth: nopaintRightColumnsWidth,
    bodyTrHeight: this.xvar.bodyTrHeight,
    virtualScrollX: this.config.virtualScrollX,
    virtualScrollY: this.config.virtualScrollY
  };
  var frozenScrollConfig = _jqmin2.default.extend({}, scrollConfig, {
    paintStartRowIndex: 0,
    paintRowCount: this.xvar.frozenRowIndex
  });

  // aside
  if (cfg.asidePanelWidth > 0) {
    if (this.xvar.frozenRowIndex > 0) {
      // 상단 행고정
      repaintBody.call(this, "top-aside-body", this.asideColGroup, asideBodyRowData, asideBodyGroupingData, list.slice(0, this.xvar.frozenRowIndex), frozenScrollConfig);
    }

    repaintBody.call(this, "aside-body-scroll", this.asideColGroup, asideBodyRowData, asideBodyGroupingData, list, scrollConfig);

    if (cfg.footSum) {
      // 바닥 요약 (footSum에 대한 aside 사용안함)
      repaintSum.call(this, "bottom-aside-body", this.asideColGroup, asideBodyRowData, null, list);
    }
  }

  // left
  if (this.xvar.frozenColumnIndex > 0) {
    if (this.xvar.frozenRowIndex > 0) {
      // 상단 행고정
      repaintBody.call(this, "top-left-body", this.leftHeaderColGroup, leftBodyRowData, leftBodyGroupingData, list.slice(0, this.xvar.frozenRowIndex), frozenScrollConfig);
    }

    repaintBody.call(this, "left-body-scroll", this.leftHeaderColGroup, leftBodyRowData, leftBodyGroupingData, list, scrollConfig);

    if (cfg.footSum && this.needToPaintSum) {
      // 바닥 요약
      repaintSum.call(this, "bottom-left-body", this.leftHeaderColGroup, leftFootSumData, list);
    }
  }

  // body
  if (this.xvar.frozenRowIndex > 0) {
    // 상단 행고정
    repaintBody.call(this, "top-body-scroll", headerColGroup, bodyRowData, bodyGroupingData, list.slice(0, this.xvar.frozenRowIndex), frozenScrollConfig);
  }
  repaintBody.call(this, "body-scroll", headerColGroup, bodyRowData, bodyGroupingData, list, scrollConfig);

  // 바닥 요약
  if (cfg.footSum && this.needToPaintSum) {
    repaintSum.call(this, "bottom-body-scroll", headerColGroup, footSumData, list, scrollConfig);
  }
  // right
  if (cfg.rightSum) {}
  // todo : right 표현 정리


  /// mergeCells
  if (cfg.body.mergeCells && list.length) {
    // left
    if (this.xvar.frozenColumnIndex > 0) {
      if (this.xvar.frozenRowIndex > 0) {
        // 상단 행고정
        // console.log(this.leftHeaderColGroup, leftBodyRowData);
        mergeCellsBody.call(this, "top-left-body", this.leftHeaderColGroup, leftBodyRowData, list.slice(0, this.xvar.frozenRowIndex));
      }
      mergeCellsBody.call(this, "left-body-scroll", this.leftHeaderColGroup, leftBodyRowData, list, scrollConfig);
    }

    // body
    if (this.xvar.frozenRowIndex > 0) {
      // 상단 행고정
      mergeCellsBody.call(this, "top-body-scroll", this.headerColGroup, bodyRowData, list.slice(0, this.xvar.frozenRowIndex));
    }
    mergeCellsBody.call(this, "body-scroll", this.headerColGroup, bodyRowData, list, scrollConfig);
  }

  this.xvar.virtualPaintStartRowIndex = virtualPaintStartRowIndex;
  this.xvar.paintStartRowIndex = paintStartRowIndex;
  this.xvar.paintRowCount = paintRowCount;
  this.xvar.virtualPaintRowCount = virtualPaintRowCount;
  this.xvar.paintStartColumnIndex = paintStartColumnIndex;
  this.xvar.paintEndColumnIndex = paintEndColumnIndex;
  this.xvar.nopaintLeftColumnsWidth = nopaintLeftColumnsWidth;
  this.xvar.nopaintRightColumnsWidth = nopaintRightColumnsWidth;
  this.xvar.dataRowCount = list.length;
  this.needToPaintSum = false;

  _AX6UIGrid_page2.default.statusUpdate.call(this);
};

var repaintCell = function repaintCell(_panelName, _dindex, _doindex, _rowIndex, _colIndex, _newValue) {
  var self = this,
      cfg = this.config,
      list = this.list;

  var updateCell = this.$["panel"][_panelName].find('[data-ax6grid-tr-data-index="' + _dindex + '"]').find('[data-ax6grid-column-rowindex="' + _rowIndex + '"][data-ax6grid-column-colindex="' + _colIndex + '"]').find('[data-ax6grid-cellholder]'),
      colGroup = this.colGroup,
      col = colGroup[_colIndex];

  updateCell.html(getFieldValue.call(this, list, list[_dindex], _dindex, col));

  if (col.editor && col.editor.updateWith) {
    col.editor.updateWith.forEach(function (updateColumnKey) {
      colGroup.forEach(function (col) {
        if (col.key == updateColumnKey) {
          var rowIndex = col.rowIndex,
              colIndex = col.colIndex,
              panelName = _AX6UIGrid_util2.default.findPanelByColumnIndex.call(self, _dindex, colIndex, rowIndex).panelName,
              updateWithCell = self.$["panel"][panelName].find('[data-ax6grid-tr-data-index="' + _dindex + '"]').find('[data-ax6grid-column-rowindex="' + rowIndex + '"][data-ax6grid-column-colindex="' + colIndex + '"]').find('[data-ax6grid-cellholder]');

          updateWithCell.html(getFieldValue.call(self, list, list[_dindex], _dindex, col));
        }
      });
    });
  }

  /// ~~~~~~

  var paintStartRowIndex = Math.floor(Math.abs(this.$.panel["body-scroll"].position().top) / this.xvar.bodyTrHeight) + this.xvar.frozenRowIndex,
      headerColGroup = this.headerColGroup,
      leftFootSumData = this.leftFootSumData,
      footSumData = this.footSumData,
      leftBodyGroupingData = this.leftBodyGroupingData,
      bodyGroupingData = this.bodyGroupingData,
      bodyAlign = cfg.body.align,
      paintRowCount = Math.ceil(this.$.panel["body"].height() / this.xvar.bodyTrHeight) + 1,
      scrollConfig = {
    paintStartRowIndex: paintStartRowIndex,
    paintRowCount: paintRowCount,
    bodyTrHeight: this.xvar.bodyTrHeight
  };

  if (this.xvar.nopaintLeftColumnsWidth || this.xvar.nopaintRightColumnsWidth) {
    headerColGroup = [].concat(headerColGroup).splice(this.xvar.paintStartColumnIndex, this.xvar.paintEndColumnIndex - this.xvar.paintStartColumnIndex + 1);
    if (cfg.body.grouping) {
      bodyGroupingData = _AX6UIGrid_util2.default.getTableByStartEndColumnIndex(bodyGroupingData, this.xvar.paintStartColumnIndex, this.xvar.paintEndColumnIndex);
    }
    if (cfg.footSum) {
      footSumData = _AX6UIGrid_util2.default.getTableByStartEndColumnIndex(footSumData, this.xvar.paintStartColumnIndex, this.xvar.paintEndColumnIndex);
    }
  }

  var repaintSum = function repaintSum(_elTargetKey, _colGroup, _bodyRow, _list, _scrollConfig) {
    var _elTarget = this.$.panel[_elTargetKey],
        SS = [],
        cgi = void 0,
        cgl = void 0,
        tri = void 0,
        trl = void 0,
        ci = void 0,
        cl = void 0,
        col = void 0,
        cellHeight = void 0,
        colAlign = void 0;

    SS.push('<table border="0" cellpadding="0" cellspacing="0">');
    SS.push('<colgroup>');
    for (cgi = 0, cgl = _colGroup.length; cgi < cgl; cgi++) {
      SS.push('<col style="width:' + _colGroup[cgi]._width + 'px;"  />');
    }
    SS.push('<col  />');
    SS.push('</colgroup>');

    for (tri = 0, trl = _bodyRow.rows.length; tri < trl; tri++) {
      SS.push('<tr class="tr-sum">');
      for (ci = 0, cl = _bodyRow.rows[tri].cols.length; ci < cl; ci++) {
        col = _bodyRow.rows[tri].cols[ci];
        cellHeight = cfg.body.columnHeight * col.rowspan - cfg.body.columnBorderWidth;
        colAlign = col.align || bodyAlign;

        SS.push('<td ', 'data-ax6grid-panel-name="' + _elTargetKey + '" ', 'data-ax6grid-column-row="' + tri + '" ', 'data-ax6grid-column-col="' + ci + '" ', 'data-ax6grid-column-rowIndex="' + tri + '" ', 'data-ax6grid-column-colIndex="' + col.colIndex + '" ', 'data-ax6grid-column-attr="' + (col.columnAttr || "sum") + '" ', function (_focusedColumn, _selectedColumn) {
          var attrs = "";
          if (_focusedColumn) {
            attrs += 'data-ax6grid-column-focused="true" ';
          }
          if (_selectedColumn) {
            attrs += 'data-ax6grid-column-selected="true" ';
          }
          return attrs;
        }(this.focusedColumn["sum_" + col.colIndex + "_" + tri], this.selectedColumn["sum_" + col.colIndex + "_" + tri]), 'colspan="' + col.colspan + '" ', 'rowspan="' + col.rowspan + '" ', 'class="' + function (_col) {
          var tdCSS_class = "";
          if (_col.styleClass) {
            if (_AX6Util2.default.isFunction(_col.styleClass)) {
              tdCSS_class += _col.styleClass.call({
                column: _col,
                key: _col.key,
                isFootSum: true
              }) + " ";
            } else {
              tdCSS_class += _col.styleClass + " ";
            }
          }
          if (cfg.body.columnBorderWidth) tdCSS_class += "hasBorder ";
          if (ci == cl - 1) tdCSS_class += "isLastColumn ";
          return tdCSS_class;
        }.call(this, col) + '" ', 'style="height: ' + cellHeight + 'px;min-height: 1px;">');

        SS.push(function (_cellHeight) {
          var lineHeight = cfg.body.columnHeight - cfg.body.columnPadding * 2 - cfg.body.columnBorderWidth;
          if (!col.multiLine) {
            _cellHeight = cfg.body.columnHeight - cfg.body.columnBorderWidth;
          }

          return '<span data-ax6grid-cellHolder="' + (col.multiLine ? 'multiLine' : '') + '" ' + (colAlign ? 'data-ax6grid-text-align="' + colAlign + '"' : '') + '" style="height:' + _cellHeight + 'px;' + (col.multiLine ? '' : 'line-height: ' + lineHeight + 'px;') + '">';
        }(cellHeight), getSumFieldValue.call(this, _list, col), '</span>');

        SS.push('</td>');
      }
      SS.push('<td ', 'data-ax6grid-column-row="null" ', 'data-ax6grid-column-col="null" ', 'data-ax6grid-column-attr="' + "sum" + '" ', 'style="height: ' + cfg.body.columnHeight + 'px;min-height: 1px;" ', '></td>');
      SS.push('</tr>');
    }

    SS.push('</table>');

    _elTarget.empty().get(0).innerHTML = SS.join('');
    return true;
  };
  var replaceGroupTr = function replaceGroupTr(_elTargetKey, _colGroup, _groupRow, _list, _scrollConfig) {
    var _elTarget = this.$.panel[_elTargetKey],
        SS = [],
        di = void 0,
        dl = void 0,
        tri = void 0,
        trl = void 0,
        ci = void 0,
        cl = void 0,
        col = void 0,
        cellHeight = void 0,
        colAlign = void 0;

    for (di = _scrollConfig.paintStartRowIndex, dl = function () {
      var len = void 0;
      len = _list.length;
      if (_scrollConfig.paintRowCount + _scrollConfig.paintStartRowIndex < len) {
        len = _scrollConfig.paintRowCount + _scrollConfig.paintStartRowIndex;
      }
      return len;
    }(); di < dl; di++) {
      if (_list[di] && _groupRow && "__isGrouping" in _list[di]) {
        var rowTable = _groupRow;
        SS = [];
        for (tri = 0, trl = rowTable.rows.length; tri < trl; tri++) {
          for (ci = 0, cl = rowTable.rows[tri].cols.length; ci < cl; ci++) {
            col = rowTable.rows[tri].cols[ci];
            cellHeight = cfg.body.columnHeight * col.rowspan - cfg.body.columnBorderWidth;
            colAlign = col.align || bodyAlign;

            SS.push('<td ', 'data-ax6grid-panel-name="' + _elTargetKey + '" ', 'data-ax6grid-data-index="' + di + '" ', 'data-ax6grid-column-row="' + tri + '" ', 'data-ax6grid-column-col="' + ci + '" ', 'data-ax6grid-column-rowIndex="' + col.rowIndex + '" ', 'data-ax6grid-column-colIndex="' + col.colIndex + '" ', 'data-ax6grid-column-attr="' + (col.columnAttr || "default") + '" ', function (_focusedColumn, _selectedColumn) {
              var attrs = "";
              if (_focusedColumn) {
                attrs += 'data-ax6grid-column-focused="true" ';
              }
              if (_selectedColumn) {
                attrs += 'data-ax6grid-column-selected="true" ';
              }
              return attrs;
            }(this.focusedColumn[di + "_" + col.colIndex + "_" + col.rowIndex], this.selectedColumn[di + "_" + col.colIndex + "_" + col.rowIndex]), 'colspan="' + col.colspan + '" ', 'rowspan="' + col.rowspan + '" ', 'class="' + function (_col) {
              var tdCSS_class = "";
              if (_col.styleClass) {
                if (_AX6Util2.default.isFunction(_col.styleClass)) {
                  tdCSS_class += _col.styleClass.call({
                    column: _col,
                    key: _col.key,
                    item: _list[di],
                    index: di
                  }) + " ";
                } else {
                  tdCSS_class += _col.styleClass + " ";
                }
              }
              if (cfg.body.columnBorderWidth) tdCSS_class += "hasBorder ";
              if (ci == cl - 1) tdCSS_class += "isLastColumn ";
              return tdCSS_class;
            }.call(this, col) + '" ', 'style="height: ' + cellHeight + 'px;min-height: 1px;">');

            SS.push(function (_cellHeight) {
              var lineHeight = cfg.body.columnHeight - cfg.body.columnPadding * 2 - cfg.body.columnBorderWidth;
              if (!col.multiLine) {
                _cellHeight = cfg.body.columnHeight - cfg.body.columnBorderWidth;
              }

              return '<span data-ax6grid-cellHolder="' + (col.multiLine ? 'multiLine' : '') + '" ' + (colAlign ? 'data-ax6grid-text-align="' + colAlign + '"' : '') + '" style="height:' + _cellHeight + 'px;' + (col.multiLine ? '' : 'line-height: ' + lineHeight + 'px;') + '">';
            }(cellHeight), getGroupingValue.call(this, _list[di], di, col), '</span>');

            SS.push('</td>');
          }
          SS.push('<td ', 'data-ax6grid-column-row="null" ', 'data-ax6grid-column-col="null" ', 'data-ax6grid-data-index="' + di + '" ', 'data-ax6grid-column-attr="' + "default" + '" ', 'style="height: ' + cfg.body.columnHeight + 'px;min-height: 1px;" ', '></td>');
        }
        _elTarget.find('tr[data-ax6grid-tr-data-index="' + di + '"]').empty().get(0).innerHTML = SS.join('');
      }
    }
  };

  // body.grouping tr 다시 그리기..
  if (cfg.body.grouping) {
    // left
    if (this.xvar.frozenColumnIndex > 0) {
      if (this.xvar.frozenRowIndex > 0) {
        // 상단 행고정
        replaceGroupTr.call(this, "top-left-body", headerColGroup, leftBodyGroupingData, list.slice(0, this.xvar.frozenRowIndex), {
          paintStartRowIndex: 0,
          paintRowCount: this.xvar.frozenRowIndex,
          bodyTrHeight: this.xvar.bodyTrHeight
        });
      }
      replaceGroupTr.call(this, "left-body-scroll", headerColGroup, leftBodyGroupingData, list, scrollConfig);
    }

    // body
    if (this.xvar.frozenRowIndex > 0) {
      // 상단 행고정
      replaceGroupTr.call(this, "top-body-scroll", headerColGroup, bodyGroupingData, list.slice(0, this.xvar.frozenRowIndex), {
        paintStartRowIndex: 0,
        paintRowCount: this.xvar.frozenRowIndex,
        bodyTrHeight: this.xvar.bodyTrHeight
      });
    }

    replaceGroupTr.call(this, "body-scroll", headerColGroup, bodyGroupingData, list, scrollConfig);
  }

  if (this.xvar.frozenColumnIndex > 0) {
    if (cfg.footSum && this.needToPaintSum) {
      // 바닥 요약
      repaintSum.call(this, "bottom-left-body", headerColGroup, leftFootSumData, list);
    }
  }

  if (cfg.footSum && this.needToPaintSum) {
    // 바닥 요약
    repaintSum.call(this, "bottom-body-scroll", headerColGroup, footSumData, list, scrollConfig);
  }
};

var repaintRow = function repaintRow(_dindex) {
  var self = this,
      cfg = this.config,
      list = this.list;
  /// ~~~~~~

  var paintStartRowIndex = Math.floor(Math.abs(this.$.panel["body-scroll"].position().top) / this.xvar.bodyTrHeight) + this.xvar.frozenRowIndex,
      asideBodyRowData = this.asideBodyRowData,
      leftBodyRowData = this.leftBodyRowData,
      bodyRowData = this.bodyRowData,
      leftFootSumData = this.leftFootSumData,
      footSumData = this.footSumData,
      asideBodyGroupingData = this.asideBodyGroupingData,
      leftBodyGroupingData = this.leftBodyGroupingData,
      bodyGroupingData = this.bodyGroupingData,
      bodyAlign = cfg.body.align,
      paintRowCount = Math.ceil(this.$.panel["body"].height() / this.xvar.bodyTrHeight) + 1,
      scrollConfig = {
    paintStartRowIndex: paintStartRowIndex,
    paintRowCount: paintRowCount,
    bodyTrHeight: this.xvar.bodyTrHeight
  };

  var repaintSum = function repaintSum(_elTargetKey, _colGroup, _bodyRow, _list) {
    var _elTarget = this.$.panel[_elTargetKey],
        SS = [],
        cgi = void 0,
        cgl = void 0,
        tri = void 0,
        trl = void 0,
        ci = void 0,
        cl = void 0,
        col = void 0,
        cellHeight = void 0,
        colAlign = void 0;

    SS.push('<table border="0" cellpadding="0" cellspacing="0">');
    SS.push('<colgroup>');
    for (cgi = 0, cgl = _colGroup.length; cgi < cgl; cgi++) {
      SS.push('<col style="width:' + _colGroup[cgi]._width + 'px;"  />');
    }
    SS.push('<col  />');
    SS.push('</colgroup>');

    for (tri = 0, trl = _bodyRow.rows.length; tri < trl; tri++) {
      SS.push('<tr class="tr-sum">');
      for (ci = 0, cl = _bodyRow.rows[tri].cols.length; ci < cl; ci++) {
        col = _bodyRow.rows[tri].cols[ci];
        cellHeight = cfg.body.columnHeight * col.rowspan - cfg.body.columnBorderWidth;
        colAlign = col.align || bodyAlign;

        SS.push('<td ', 'data-ax6grid-panel-name="' + _elTargetKey + '" ', 'data-ax6grid-column-row="' + tri + '" ', 'data-ax6grid-column-col="' + ci + '" ', 'data-ax6grid-column-rowIndex="' + tri + '" ', 'data-ax6grid-column-colIndex="' + col.colIndex + '" ', 'data-ax6grid-column-attr="' + (col.columnAttr || "sum") + '" ', function (_focusedColumn, _selectedColumn) {
          var attrs = "";
          if (_focusedColumn) {
            attrs += 'data-ax6grid-column-focused="true" ';
          }
          if (_selectedColumn) {
            attrs += 'data-ax6grid-column-selected="true" ';
          }
          return attrs;
        }(this.focusedColumn["sum_" + col.colIndex + "_" + tri], this.selectedColumn["sum_" + col.colIndex + "_" + tri]), 'colspan="' + col.colspan + '" ', 'rowspan="' + col.rowspan + '" ', 'class="' + function (_col) {
          var tdCSS_class = "";
          if (_col.styleClass) {
            if (_AX6Util2.default.isFunction(_col.styleClass)) {
              tdCSS_class += _col.styleClass.call({
                column: _col,
                key: _col.key,
                isFootSum: true
              }) + " ";
            } else {
              tdCSS_class += _col.styleClass + " ";
            }
          }
          if (cfg.body.columnBorderWidth) tdCSS_class += "hasBorder ";
          if (ci == cl - 1) tdCSS_class += "isLastColumn ";
          return tdCSS_class;
        }.call(this, col) + '" ', 'style="height: ' + cellHeight + 'px;min-height: 1px;">');

        SS.push(function (_cellHeight) {
          var lineHeight = cfg.body.columnHeight - cfg.body.columnPadding * 2 - cfg.body.columnBorderWidth;
          if (!col.multiLine) {
            _cellHeight = cfg.body.columnHeight - cfg.body.columnBorderWidth;
          }

          return '<span data-ax6grid-cellHolder="' + (col.multiLine ? 'multiLine' : '') + '" ' + (colAlign ? 'data-ax6grid-text-align="' + colAlign + '"' : '') + '" style="height:' + _cellHeight + 'px;line-height: ' + lineHeight + 'px;">';
        }(cellHeight), getSumFieldValue.call(this, _list, col), '</span>');

        SS.push('</td>');
      }
      SS.push('<td ', 'data-ax6grid-column-row="null" ', 'data-ax6grid-column-col="null" ', 'data-ax6grid-column-attr="' + "sum" + '" ', 'style="height: ' + cfg.body.columnHeight + 'px;min-height: 1px;" ', '></td>');
      SS.push('</tr>');
    }

    SS.push('</table>');

    _elTarget.empty().get(0).innerHTML = SS.join('');
    return true;
  };
  var replaceGroupTr = function replaceGroupTr(_elTargetKey, _colGroup, _groupRow, _list, _scrollConfig) {
    var _elTarget = this.$.panel[_elTargetKey],
        SS = [],
        di = void 0,
        dl = void 0,
        tri = void 0,
        trl = void 0,
        ci = void 0,
        cl = void 0,
        col = void 0,
        cellHeight = void 0,
        colAlign = void 0;

    if (typeof _scrollConfig === "undefined" || typeof _scrollConfig['paintStartRowIndex'] === "undefined") {
      _scrollConfig = {
        paintStartRowIndex: 0,
        paintRowCount: _list.length
      };
    }

    for (di = _scrollConfig.paintStartRowIndex, dl = function () {
      var len = void 0;
      len = _list.length;
      if (_scrollConfig.paintRowCount + _scrollConfig.paintStartRowIndex < len) {
        len = _scrollConfig.paintRowCount + _scrollConfig.paintStartRowIndex;
      }
      return len;
    }(); di < dl; di++) {
      if (_list[di] && _groupRow && "__isGrouping" in _list[di]) {
        var rowTable = _groupRow;
        SS = [];
        for (tri = 0, trl = rowTable.rows.length; tri < trl; tri++) {
          for (ci = 0, cl = rowTable.rows[tri].cols.length; ci < cl; ci++) {
            col = rowTable.rows[tri].cols[ci];
            cellHeight = cfg.body.columnHeight * col.rowspan - cfg.body.columnBorderWidth;
            colAlign = col.align || bodyAlign;

            SS.push('<td ', 'data-ax6grid-panel-name="' + _elTargetKey + '" ', 'data-ax6grid-data-index="' + di + '" ', 'data-ax6grid-column-row="' + tri + '" ', 'data-ax6grid-column-col="' + ci + '" ', 'data-ax6grid-column-rowIndex="' + col.rowIndex + '" ', 'data-ax6grid-column-colIndex="' + col.colIndex + '" ', 'data-ax6grid-column-attr="' + (col.columnAttr || "default") + '" ', function (_focusedColumn, _selectedColumn) {
              var attrs = "";
              if (_focusedColumn) {
                attrs += 'data-ax6grid-column-focused="true" ';
              }
              if (_selectedColumn) {
                attrs += 'data-ax6grid-column-selected="true" ';
              }
              return attrs;
            }(this.focusedColumn[di + "_" + col.colIndex + "_" + col.rowIndex], this.selectedColumn[di + "_" + col.colIndex + "_" + col.rowIndex]), 'colspan="' + col.colspan + '" ', 'rowspan="' + col.rowspan + '" ', 'class="' + function (_col) {
              var tdCSS_class = "";
              if (_col.styleClass) {
                if (_AX6Util2.default.isFunction(_col.styleClass)) {
                  tdCSS_class += _col.styleClass.call({
                    column: _col,
                    key: _col.key,
                    item: _list[di],
                    index: di
                  }) + " ";
                } else {
                  tdCSS_class += _col.styleClass + " ";
                }
              }
              if (cfg.body.columnBorderWidth) tdCSS_class += "hasBorder ";
              if (ci == cl - 1) tdCSS_class += "isLastColumn ";
              return tdCSS_class;
            }.call(this, col) + '" ', 'style="height: ' + cellHeight + 'px;min-height: 1px;">');

            SS.push(function (_cellHeight) {
              var lineHeight = cfg.body.columnHeight - cfg.body.columnPadding * 2 - cfg.body.columnBorderWidth;
              if (!col.multiLine) {
                _cellHeight = cfg.body.columnHeight - cfg.body.columnBorderWidth;
              }

              return '<span data-ax6grid-cellHolder="' + (col.multiLine ? 'multiLine' : '') + '" ' + (colAlign ? 'data-ax6grid-text-align="' + colAlign + '"' : '') + '" style="height:' + _cellHeight + 'px;line-height: ' + lineHeight + 'px;">';
            }(cellHeight), getGroupingValue.call(this, _list[di], di, col), '</span>');

            SS.push('</td>');
          }
          SS.push('<td ', 'data-ax6grid-column-row="null" ', 'data-ax6grid-column-col="null" ', 'data-ax6grid-data-index="' + di + '" ', 'data-ax6grid-column-attr="' + "default" + '" ', 'style="height: ' + cfg.body.columnHeight + 'px;min-height: 1px;" ', '></td>');
        }
        _elTarget.find('tr[data-ax6grid-tr-data-index="' + di + '"]').empty().get(0).innerHTML = SS.join('');
      }
    }
  };
  var replaceTr = function replaceTr(_elTargetKey, _colGroup, _bodyRow, _list, di) {
    var _elTarget = this.$.panel[_elTargetKey],
        SS = [],
        tri = void 0,
        trl = void 0,
        ci = void 0,
        cl = void 0,
        col = void 0,
        cellHeight = void 0,
        colAlign = void 0,
        rowTable = _bodyRow,
        odi = typeof _list[di].__origin_index__ !== "undefined" ? _list[di].__origin_index__ : di;

    for (tri = 0, trl = rowTable.rows.length; tri < trl; tri++) {
      for (ci = 0, cl = rowTable.rows[tri].cols.length; ci < cl; ci++) {
        col = rowTable.rows[tri].cols[ci];
        cellHeight = cfg.body.columnHeight * col.rowspan - cfg.body.columnBorderWidth;
        colAlign = col.align || bodyAlign;

        SS.push('<td ', 'data-ax6grid-panel-name="' + _elTargetKey + '" ', 'data-ax6grid-data-index="' + di + '" ', 'data-ax6grid-data-o-index="' + odi + '" ', 'data-ax6grid-column-row="' + tri + '" ', 'data-ax6grid-column-col="' + ci + '" ', 'data-ax6grid-column-rowIndex="' + col.rowIndex + '" ', 'data-ax6grid-column-colIndex="' + col.colIndex + '" ', 'data-ax6grid-column-attr="' + (col.columnAttr || "default") + '" ', function (_focusedColumn, _selectedColumn) {
          var attrs = "";
          if (_focusedColumn) {
            attrs += 'data-ax6grid-column-focused="true" ';
          }
          if (_selectedColumn) {
            attrs += 'data-ax6grid-column-selected="true" ';
          }
          return attrs;
        }(this.focusedColumn[di + "_" + col.colIndex + "_" + col.rowIndex], this.selectedColumn[di + "_" + col.colIndex + "_" + col.rowIndex]), 'colspan="' + col.colspan + '" ', 'rowspan="' + col.rowspan + '" ', 'class="' + function (_col) {
          var tdCSS_class = "";
          if (_col.styleClass) {
            if (_AX6Util2.default.isFunction(_col.styleClass)) {
              tdCSS_class += _col.styleClass.call({
                column: _col,
                key: _col.key,
                item: _list[di],
                index: di
              }) + " ";
            } else {
              tdCSS_class += _col.styleClass + " ";
            }
          }
          if (cfg.body.columnBorderWidth) tdCSS_class += "hasBorder ";
          if (ci == cl - 1) tdCSS_class += "isLastColumn ";
          return tdCSS_class;
        }.call(this, col) + '" ', 'style="height: ' + cellHeight + 'px;min-height: 1px;">');

        SS.push(function (_cellHeight) {
          var lineHeight = cfg.body.columnHeight - cfg.body.columnPadding * 2 - cfg.body.columnBorderWidth;
          if (!col.multiLine) {
            _cellHeight = cfg.body.columnHeight - cfg.body.columnBorderWidth;
          }

          return '<span data-ax6grid-cellHolder="' + (col.multiLine ? 'multiLine' : '') + '" ' + (colAlign ? 'data-ax6grid-text-align="' + colAlign + '"' : '') + '" style="height:' + _cellHeight + 'px;' + (col.multiLine ? '' : 'line-height: ' + lineHeight + 'px;') + '">';
        }(cellHeight), getFieldValue.call(this, _list, _list[di], di, col), '</span>');
        SS.push('</td>');
      }
      SS.push('<td ', 'data-ax6grid-column-row="null" ', 'data-ax6grid-column-col="null" ', 'data-ax6grid-data-index="' + di + '" ', 'data-ax6grid-column-attr="' + "default" + '" ', 'style="height: ' + cfg.body.columnHeight + 'px;min-height: 1px;" ', '></td>');
    }

    _elTarget.find('tr[data-ax6grid-tr-data-index="' + di + '"]').empty().get(0).innerHTML = SS.join('');
  };

  // left
  if (this.xvar.frozenColumnIndex > 0) {
    if (this.xvar.frozenRowIndex > _dindex) {
      // 상단 행고정
      replaceTr.call(this, "top-left-body", this.leftHeaderColGroup, leftBodyRowData, list.slice(0, this.xvar.frozenRowIndex), _dindex);
    } else {
      replaceTr.call(this, "left-body-scroll", this.leftHeaderColGroup, leftBodyRowData, list, _dindex);
    }
  }

  // body
  if (this.xvar.frozenRowIndex > _dindex) {
    // 상단 행고정
    replaceTr.call(this, "top-body-scroll", this.headerColGroup, bodyRowData, list.slice(0, this.xvar.frozenRowIndex), _dindex);
  } else {
    replaceTr.call(this, "body-scroll", this.headerColGroup, bodyRowData, list, _dindex);
  }

  // body.grouping tr 다시 그리기..
  if (cfg.body.grouping) {
    // left
    if (this.xvar.frozenColumnIndex > 0) {
      if (this.xvar.frozenRowIndex > _dindex) {
        // 상단 행고정
        replaceGroupTr.call(this, "top-left-body", this.leftHeaderColGroup, leftBodyGroupingData, list.slice(0, this.xvar.frozenRowIndex));
      } else {
        replaceGroupTr.call(this, "left-body-scroll", this.leftHeaderColGroup, leftBodyGroupingData, list, scrollConfig);
      }
    }

    // body
    if (this.xvar.frozenRowIndex > _dindex) {
      // 상단 행고정
      replaceGroupTr.call(this, "top-body-scroll", this.headerColGroup, bodyGroupingData, list.slice(0, this.xvar.frozenRowIndex));
    } else {
      replaceGroupTr.call(this, "body-scroll", this.headerColGroup, bodyGroupingData, list, scrollConfig);
    }
  }

  if (this.xvar.frozenColumnIndex > 0) {
    if (cfg.footSum && this.needToPaintSum) {
      // 바닥 요약
      repaintSum.call(this, "bottom-left-body", this.leftHeaderColGroup, leftFootSumData, list);
    }
  }

  if (cfg.footSum && this.needToPaintSum) {
    // 바닥 요약
    repaintSum.call(this, "bottom-body-scroll", this.headerColGroup, footSumData, list, scrollConfig);
  }
};

var updateRowState = function updateRowState(_states, _dindex, _doindex, _data) {
  var self = this,
      cfg = this.config,
      processor = {
    "selected": function selected(_dindex, _doindex) {
      if (this.list[_doindex]) {
        var i = this.$.livePanelKeys.length;
        while (i--) {
          this.$.panel[this.$.livePanelKeys[i]].find('[data-ax6grid-tr-data-index="' + _dindex + '"]').attr("data-ax6grid-selected", this.list[_doindex][cfg.columnKeys.selected]);
        }
      }
    },
    "selectedClear": function selectedClear() {
      var di = this.list.length;
      var pi = void 0;

      if (!this.proxyList) {
        while (di--) {
          if (this.list[di][cfg.columnKeys.selected]) {
            pi = this.$.livePanelKeys.length;
            while (pi--) {
              this.$.panel[this.$.livePanelKeys[pi]].find('[data-ax6grid-tr-data-index="' + di + '"]').attr("data-ax6grid-selected", false);
            }
          }
          this.list[di][cfg.columnKeys.selected] = false;
        }
      } else {
        while (di--) {
          this.list[di][cfg.columnKeys.selected] = false;
        }
        di = this.proxyList.length;
        while (di--) {
          if (this.list[doi][cfg.columnKeys.selected]) {
            pi = this.$.livePanelKeys.length;
            while (pi--) {
              this.$.panel[this.$.livePanelKeys[pi]].find('[data-ax6grid-tr-data-index="' + di + '"]').attr("data-ax6grid-selected", false);
            }
          }

          this.proxyList[di][cfg.columnKeys.selected] = false;
          var doi = this.proxyList[di].__original_index__;
        }
      }
    },
    "cellChecked": function cellChecked(_dindex, _doindex, _data) {
      var key = _data.key,
          rowIndex = _data.rowIndex,
          colIndex = _data.colIndex;

      var panelName = function () {
        var _panels = [];
        if (this.xvar.frozenRowIndex > _dindex) _panels.push("top");
        if (this.xvar.frozenColumnIndex > colIndex) _panels.push("left");
        _panels.push("body");
        if (_panels[0] !== "top") _panels.push("scroll");
        return _panels.join("-");
      }.call(this);

      this.$.panel[panelName].find('[data-ax6grid-tr-data-index="' + _dindex + '"]').find('[data-ax6grid-column-rowIndex="' + rowIndex + '"][data-ax6grid-column-colIndex="' + colIndex + '"]').find('[data-ax6grid-editor="checkbox"]').attr("data-ax6grid-checked", '' + _data.checked);
    }
  };

  if (typeof _doindex === "undefined") _doindex = _dindex;

  _states.forEach(function (_state) {
    if (!processor[_state]) throw 'invaild state name';
    processor[_state].call(self, _dindex, _doindex, _data);
  });
};

var updateRowStateAll = function updateRowStateAll(_states, _data) {
  var self = this,
      cfg = this.config,
      processor = {
    "selected": function selected(_dindex) {
      repaint.call(this, true);
    }
  };

  _states.forEach(function (_state) {
    if (!processor[_state]) throw 'invaild state name';
    processor[_state].call(self, _data);
  });
};

var toggleCollapse = function toggleCollapse(_dindex, _doindex, _collapse) {
  if (_AX6UIGrid_data2.default.toggleCollapse.call(this, _dindex, _doindex, _collapse)) {
    this.proxyList = _AX6UIGrid_data2.default.getProxyList.call(this, this.list);
    this.align();
  }
};

var scrollTo = function scrollTo(css, opts) {
  var self = this;
  if (typeof opts === "undefined") opts = { timeoutUnUse: false };
  if (this.isInlineEditing) {
    for (var key in this.inlineEditing) {
      //if(this.inlineEditing[key].editor.type === "select") {}
      // 인라인 에디팅 인데 스크롤 이벤트가 발생하면 디액티브 처리
      inlineEdit.deActive.call(this, "ESC", key);
    }
  }

  if (this.config.asidePanelWidth > 0 && "top" in css) {
    this.$.panel["aside-body-scroll"].css({ top: css.top });
  }
  if (this.xvar.frozenColumnIndex > 0 && "top" in css) {
    this.$.panel["left-body-scroll"].css({ top: css.top });
  }
  if (this.xvar.frozenRowIndex > 0 && "left" in css) {
    this.$.panel["top-body-scroll"].css({ left: css.left });
  }

  this.$.panel["body-scroll"].css(css);

  if (this.config.footSum && "left" in css) {
    this.$.panel["bottom-body-scroll"].css({ left: css.left });
  }

  // 바디 리페인팅 this.__throttledScroll 은 body init 에서 초기화
  if (this.__throttledScroll) {
    this.__throttledScroll(css, opts);
  } else {
    if (this.config.virtualScrollY && !opts.noRepaint && "top" in css) {
      repaint.call(this);
    } else if (this.config.virtualScrollX && !opts.noRepaint && "left" in css) {
      repaint.call(this);
    }
    if (opts.callback) {
      opts.callback();
    }
  }
};

var blur = function blur() {
  columnSelect.focusClear.call(this);
  columnSelect.clear.call(this);
  if (this.isInlineEditing) {
    inlineEdit.deActive.call(this);
  }
};

var moveFocus = function moveFocus(_position) {
  var focus = {
    "UD": function UD(_dy) {
      var moveResult = true,
          focusedColumn = void 0,
          originalColumn = void 0,
          while_i = void 0,
          nPanelInfo = void 0;

      for (var c in this.focusedColumn) {
        focusedColumn = _jqmin2.default.extend({}, this.focusedColumn[c], true);
        break;
      }

      if (!focusedColumn) return false;

      originalColumn = this.bodyRowMap[focusedColumn.rowIndex + "_" + focusedColumn.colIndex];
      columnSelect.focusClear.call(this);
      columnSelect.clear.call(this);

      if (_dy > 0) {
        // 아래로
        if (focusedColumn.rowIndex + (originalColumn.rowspan - 1) + _dy > this.bodyRowTable.rows.length - 1) {
          focusedColumn.dindex = focusedColumn.dindex + _dy;
          focusedColumn.doindex = focusedColumn.doindex + _dy;
          focusedColumn.rowIndex = 0;
          if (focusedColumn.dindex > this.list.length - 1) {
            focusedColumn.dindex = focusedColumn.doindex = this.list.length - 1;
            moveResult = false;
          }
        } else {
          focusedColumn.rowIndex = focusedColumn.rowIndex + _dy;
        }
      } else {
        // 위로
        if (focusedColumn.rowIndex + _dy < 0) {
          focusedColumn.dindex = focusedColumn.dindex + _dy;
          focusedColumn.doindex = focusedColumn.doindex + _dy;
          focusedColumn.rowIndex = this.bodyRowTable.rows.length - 1;
          if (focusedColumn.dindex < 0) {
            focusedColumn.dindex = focusedColumn.doindex = 0;
            moveResult = false;
          }
        } else {
          focusedColumn.rowIndex = focusedColumn.rowIndex + _dy;
        }
      }

      while_i = 0;
      while (typeof this.bodyRowMap[focusedColumn.rowIndex + "_" + focusedColumn.colIndex] === "undefined") {
        if (focusedColumn.rowIndex == 0 || while_i % 2 == (_dy > 0 ? 0 : 1)) {
          focusedColumn.colIndex--;
        } else {
          focusedColumn.rowIndex--;
        }

        if (focusedColumn.rowIndex <= 0 && focusedColumn.colIndex <= 0) {
          // find fail
          moveResult = false;
          break;
        }
        while_i++;
      }

      nPanelInfo = _AX6UIGrid_util2.default.findPanelByColumnIndex.call(this, focusedColumn.dindex, focusedColumn.colIndex);

      // if mergeCells
      if (this.config.body.mergeCells && this.list.length) {
        while (!this.$.panel[nPanelInfo.panelName].find('[data-ax6grid-tr-data-index="' + focusedColumn.dindex + '"]').find('[data-ax6grid-column-rowindex="' + focusedColumn.rowIndex + '"][data-ax6grid-column-colindex="' + focusedColumn.colIndex + '"]').get(0)) {

          if (_dy > 0) {
            focusedColumn.dindex++;
          } else {
            focusedColumn.dindex--;
          }

          if (focusedColumn.dindex < 0 || focusedColumn.dindex > this.list.length - 1) {
            break;
          }
        }
        nPanelInfo = _AX6UIGrid_util2.default.findPanelByColumnIndex.call(this, focusedColumn.dindex, focusedColumn.colIndex);
      }

      focusedColumn.panelName = nPanelInfo.panelName;

      // 포커스 컬럼의 위치에 따라 스크롤 처리.ㅊㅇ

      if (focusedColumn.dindex + 1 > this.xvar.frozenRowIndex) {
        if (focusedColumn.dindex <= this.xvar.virtualPaintStartRowIndex) {
          var newTop = (focusedColumn.dindex - this.xvar.frozenRowIndex - 1) * this.xvar.bodyTrHeight;
          if (newTop < 0) newTop = 0;
          scrollTo.call(this, { top: -newTop, timeoutUnUse: false });
          _AX6UIGrid_scroller2.default.resize.call(this);
        } else if (focusedColumn.dindex + 1 > this.xvar.virtualPaintStartRowIndex + (this.xvar.virtualPaintRowCount - 2)) {
          scrollTo.call(this, { top: (this.xvar.virtualPaintRowCount - 2 - focusedColumn.dindex) * this.xvar.bodyTrHeight, timeoutUnUse: false });
          _AX6UIGrid_scroller2.default.resize.call(this);
        }
      }

      this.focusedColumn[focusedColumn.dindex + "_" + focusedColumn.colIndex + "_" + focusedColumn.rowIndex] = focusedColumn;
      this.$.panel[focusedColumn.panelName].find('[data-ax6grid-tr-data-index="' + focusedColumn.dindex + '"]').find('[data-ax6grid-column-rowindex="' + focusedColumn.rowIndex + '"][data-ax6grid-column-colindex="' + focusedColumn.colIndex + '"]').attr('data-ax6grid-column-focused', "true");

      return moveResult;
    },
    "LR": function LR(_dx) {
      var moveResult = true,
          focusedColumn = void 0,
          originalColumn = void 0,
          while_i = 0,
          isScrollPanel = false,
          containerPanelName = "",
          nPanelInfo = void 0;

      for (var c in this.focusedColumn) {
        focusedColumn = _jqmin2.default.extend({}, this.focusedColumn[c], true);
        break;
      }
      if (!focusedColumn) return false;

      originalColumn = this.bodyRowMap[focusedColumn.rowIndex + "_" + focusedColumn.colIndex];

      columnSelect.focusClear.call(this);
      columnSelect.clear.call(this);

      if (_dx < 0) {
        focusedColumn.colIndex = focusedColumn.colIndex + _dx;
        if (focusedColumn.colIndex < 0) {
          focusedColumn.colIndex = 0;
          moveResult = false;
        }
      } else {
        focusedColumn.colIndex = focusedColumn.colIndex + _dx;
        if (focusedColumn.colIndex > this.colGroup.length - 1) {
          focusedColumn.colIndex = this.colGroup.length - 1;
          moveResult = false;
        }
      }

      if (typeof this.bodyRowMap[focusedColumn.rowIndex + "_" + focusedColumn.colIndex] === "undefined") {
        focusedColumn.rowIndex = 0;
      }

      if (this.list[focusedColumn.dindex] && this.list[focusedColumn.dindex].__isGrouping) {
        if (_dx < 0) {
          while (typeof this.bodyGroupingMap[focusedColumn.rowIndex + "_" + focusedColumn.colIndex] === "undefined") {
            focusedColumn.colIndex--;
            if (focusedColumn.colIndex <= 0) {
              // find fail
              moveResult = false;
              break;
            }
          }
        } else {
          while (typeof this.bodyGroupingMap[focusedColumn.rowIndex + "_" + focusedColumn.colIndex] === "undefined") {
            focusedColumn.colIndex++;
            if (focusedColumn.colIndex >= this.colGroup.length) {
              // find fail
              moveResult = false;
              break;
            }
          }
        }
      } else {
        if (_dx < 0) {
          while (typeof this.bodyRowMap[focusedColumn.rowIndex + "_" + focusedColumn.colIndex] === "undefined") {
            focusedColumn.colIndex--;
            if (focusedColumn.colIndex <= 0) {
              // find fail
              moveResult = false;
              break;
            }
          }
        } else {
          while (typeof this.bodyRowMap[focusedColumn.rowIndex + "_" + focusedColumn.colIndex] === "undefined") {
            focusedColumn.colIndex++;
            if (focusedColumn.colIndex >= this.colGroup.length) {
              // find fail
              moveResult = false;
              break;
            }
          }
        }
      }

      nPanelInfo = _AX6UIGrid_util2.default.findPanelByColumnIndex.call(this, focusedColumn.dindex, focusedColumn.colIndex);

      // if mergeCells
      if (this.config.body.mergeCells && this.list.length && focusedColumn.dindex > 1) {
        while (!this.$.panel[nPanelInfo.panelName].find('[data-ax6grid-tr-data-index="' + focusedColumn.dindex + '"]').find('[data-ax6grid-column-rowindex="' + focusedColumn.rowIndex + '"][data-ax6grid-column-colindex="' + focusedColumn.colIndex + '"]').get(0)) {

          focusedColumn.dindex--;

          if (focusedColumn.dindex < 0 || focusedColumn.dindex > this.list.length - 1) {
            break;
          }
        }
        nPanelInfo = _AX6UIGrid_util2.default.findPanelByColumnIndex.call(this, focusedColumn.dindex, focusedColumn.colIndex);
      }

      focusedColumn.panelName = nPanelInfo.panelName;

      // 포커스 컬럼의 위치에 따라 스크롤 처리
      var isScrollTo = function () {
        if (!this.config.virtualScrollX) return false;
        var scrollLeft = 0;
        if (focusedColumn.colIndex + 1 > this.xvar.frozenColumnIndex) {
          if (focusedColumn.colIndex <= this.xvar.paintStartColumnIndex && this.colGroup[focusedColumn.colIndex]) {
            scrollLeft = -this.colGroup[Number(focusedColumn.colIndex)]._sx;
            scrollTo.call(this, { left: scrollLeft });
            _AX6UIGrid_header2.default.scrollTo.call(this, { left: scrollLeft });
            _AX6UIGrid_scroller2.default.resize.call(this);
            return true;
          } else if (focusedColumn.colIndex >= this.xvar.paintEndColumnIndex && this.colGroup[Number(focusedColumn.colIndex)]) {
            if (this.colGroup[Number(focusedColumn.colIndex)]._ex > this.xvar.bodyWidth) {
              scrollLeft = this.colGroup[Number(focusedColumn.colIndex)]._ex - this.xvar.bodyWidth;
              scrollTo.call(this, { left: -scrollLeft });
              _AX6UIGrid_header2.default.scrollTo.call(this, { left: -scrollLeft });
              _AX6UIGrid_scroller2.default.resize.call(this);
            }
            return true;
          }
        }
        scrollLeft = null;
        return false;
      }.call(this);

      containerPanelName = nPanelInfo.containerPanelName;
      isScrollPanel = nPanelInfo.isScrollPanel;

      this.focusedColumn[focusedColumn.dindex + "_" + focusedColumn.colIndex + "_" + focusedColumn.rowIndex] = focusedColumn;

      var $column = this.$.panel[focusedColumn.panelName].find('[data-ax6grid-tr-data-index="' + focusedColumn.dindex + '"]').find('[data-ax6grid-column-rowindex="' + focusedColumn.rowIndex + '"][data-ax6grid-column-colindex="' + focusedColumn.colIndex + '"]').attr('data-ax6grid-column-focused', "true");

      if (!isScrollTo && $column && isScrollPanel) {
        // 스크롤 패널 이라면~
        // todo : 컬럼이동할 때에도 scrollTo 체크
        var newLeft = function () {
          if ($column.position().left + $column.outerWidth() > Math.abs(this.$.panel[focusedColumn.panelName].position().left) + this.$.panel[containerPanelName].width()) {
            return $column.position().left + $column.outerWidth() - this.$.panel[containerPanelName].width();
          } else if (Math.abs(this.$.panel[focusedColumn.panelName].position().left) > $column.position().left) {
            return $column.position().left;
          } else {
            return;
          }
        }.call(this);

        if (typeof newLeft !== "undefined") {
          _AX6UIGrid_header2.default.scrollTo.call(this, { left: -newLeft });
          scrollTo.call(this, { left: -newLeft });
          _AX6UIGrid_scroller2.default.resize.call(this);
        }
      }

      return moveResult;
    },
    "INDEX": function INDEX(_dindex) {
      var moveResult = true,
          focusedColumn = void 0,
          originalColumn = void 0,
          while_i = void 0;

      for (var c in this.focusedColumn) {
        focusedColumn = _jqmin2.default.extend({}, this.focusedColumn[c], true);
        break;
      }
      if (!focusedColumn) {
        focusedColumn = {
          rowIndex: 0,
          colIndex: 0
        };
      }
      originalColumn = this.bodyRowMap[focusedColumn.rowIndex + "_" + focusedColumn.colIndex];

      columnSelect.focusClear.call(this);
      columnSelect.clear.call(this);

      if (_dindex == "end") {
        _dindex = this.list.length - 1;
      }

      focusedColumn.dindex = _dindex;
      focusedColumn.rowIndex = 0;

      while_i = 0;
      while (typeof this.bodyRowMap[focusedColumn.rowIndex + "_" + focusedColumn.colIndex] === "undefined") {
        if (focusedColumn.rowIndex == 0 || while_i % 2 == (_dy > 0 ? 0 : 1)) {
          focusedColumn.colIndex--;
        } else {
          focusedColumn.rowIndex--;
        }

        if (focusedColumn.rowIndex <= 0 && focusedColumn.colIndex <= 0) {
          // find fail
          break;
        }
        while_i++;
      }

      var nPanelInfo = _AX6UIGrid_util2.default.findPanelByColumnIndex.call(this, focusedColumn.dindex, focusedColumn.colIndex);
      focusedColumn.panelName = nPanelInfo.panelName;

      // 포커스 컬럼의 위치에 따라 스크롤 처리.
      (function () {
        if (focusedColumn.dindex + 1 > this.xvar.frozenRowIndex) {
          if (focusedColumn.dindex < this.xvar.virtualPaintStartRowIndex) {
            scrollTo.call(this, { top: -(focusedColumn.dindex - this.xvar.frozenRowIndex) * this.xvar.bodyTrHeight });
            _AX6UIGrid_scroller2.default.resize.call(this);
          } else if (focusedColumn.dindex + 1 > this.xvar.virtualPaintStartRowIndex + (this.xvar.virtualPaintRowCount - 2)) {
            scrollTo.call(this, { top: -(focusedColumn.dindex - this.xvar.frozenRowIndex - this.xvar.virtualPaintRowCount + 3) * this.xvar.bodyTrHeight });
            _AX6UIGrid_scroller2.default.resize.call(this);
          }
        }
      }).call(this);

      this.focusedColumn[focusedColumn.dindex + "_" + focusedColumn.colIndex + "_" + focusedColumn.rowIndex] = focusedColumn;
      this.$.panel[focusedColumn.panelName].find('[data-ax6grid-tr-data-index="' + focusedColumn.dindex + '"]').find('[data-ax6grid-column-rowindex="' + focusedColumn.rowIndex + '"][data-ax6grid-column-colindex="' + focusedColumn.colIndex + '"]').attr('data-ax6grid-column-focused', "true");

      return moveResult;
    }
  };

  var processor = {
    "UP": function UP() {
      return focus["UD"].call(this, -1);
    },
    "DOWN": function DOWN() {
      return focus["UD"].call(this, 1);
    },
    "LEFT": function LEFT() {
      return focus["LR"].call(this, -1);
    },
    "RIGHT": function RIGHT() {
      return focus["LR"].call(this, 1);
    },
    "HOME": function HOME() {
      return focus["INDEX"].call(this, 0);
    },
    "END": function END() {
      return focus["INDEX"].call(this, "end");
    },
    "position": function position(_position) {
      return focus["INDEX"].call(this, _position);
    }
  };

  if (_position in processor) {
    return processor[_position].call(this);
  } else {
    return processor["position"].call(this, _position);
  }
};

var getExcelString = function getExcelString() {
  var cfg = this.config,
      list = this.list,
      bodyRowData = this.bodyRowTable,
      footSumData = this.footSumTable,
      bodyGroupingData = this.bodyGroupingTable;

  // body-scroll 의 포지션에 의존적이므로..
  var getBody = function getBody(_colGroup, _bodyRow, _groupRow, _list) {
    var SS = [],
        di = void 0,
        dl = void 0,
        tri = void 0,
        trl = void 0,
        ci = void 0,
        cl = void 0,
        col = void 0,
        val = void 0;

    //SS.push('<table border="1">');
    for (di = 0, dl = _list.length; di < dl; di++) {
      var isGroupingRow = false,
          rowTable = void 0;

      if (_groupRow && "__isGrouping" in _list[di]) {
        rowTable = _groupRow;
        isGroupingRow = true;
      } else {
        rowTable = _bodyRow;
      }

      for (tri = 0, trl = rowTable.rows.length; tri < trl; tri++) {
        SS.push('\n<tr>');
        for (ci = 0, cl = rowTable.rows[tri].cols.length; ci < cl; ci++) {
          col = rowTable.rows[tri].cols[ci];

          SS.push('<td ', 'colspan="' + col.colspan + '" ', 'rowspan="' + col.rowspan + '" ', '>', isGroupingRow ? getGroupingValue.call(this, _list[di], di, col) : getFieldValue.call(this, _list, _list[di], di, col, val, "text"), '&nbsp;</td>');
        }
        SS.push('\n</tr>');
      }
    }
    //SS.push('</table>');
    return SS.join('');
  };
  var getSum = function getSum(_colGroup, _bodyRow, _list) {
    var SS = [],
        tri = void 0,
        trl = void 0,
        ci = void 0,
        cl = void 0,
        col = void 0;

    //SS.push('<table border="1">');
    for (tri = 0, trl = _bodyRow.rows.length; tri < trl; tri++) {
      SS.push('\n<tr>');
      for (ci = 0, cl = _bodyRow.rows[tri].cols.length; ci < cl; ci++) {
        col = _bodyRow.rows[tri].cols[ci];
        SS.push('<td ', 'colspan="' + col.colspan + '" ', 'rowspan="' + col.rowspan + '" ', '>', getSumFieldValue.call(this, _list, col), '</td>');
      }
      SS.push('\n</tr>');
    }
    //SS.push('</table>');

    return SS.join('');
  };

  var po = [];
  po.push(getBody.call(this, this.headerColGroup, bodyRowData, bodyGroupingData, list));
  if (cfg.footSum) {
    // 바닥 요약
    po.push(getSum.call(this, this.headerColGroup, footSumData, list));
  }

  // right
  if (cfg.rightSum) {
    // todo : right 표현 정리
  }

  return po.join('');
};

var click = function click(_dindex, _doindex) {
  var that = {
    self: this,
    page: this.page,
    list: this.list,
    item: this.list[_dindex],
    dindex: _dindex
  };

  moveFocus.call(this, _dindex);

  if (this.config.body.onClick) {
    this.config.body.onClick.call(that);
  }

  that = null;
  // console.log(this.$["panel"]["body-scroll"].find('[data-ax6grid-tr-data-index="' + _dindex + '"]>td:first-child'));
};

var dblClick = function dblClick(_dindex, _doindex) {
  var that = {
    self: this,
    page: this.page,
    list: this.list,
    item: this.list[_dindex],
    dindex: _dindex
  };

  moveFocus.call(this, _dindex);

  if (this.config.body.onDBLClick) {
    this.config.body.onDBLClick.call(that);
  }

  that = null;
};

/**
 * @module AX6UIGrid_body
 */
exports.default = {
  /**
   *
   */
  init: function init() {
    var self = this;

    this.$["container"]["body"].on("dblclick", '[data-ax6grid-column-attr]', function (e) {
      var panelName = void 0,
          attr = void 0,
          row = void 0,
          col = void 0,
          dindex = void 0,
          doindex = void 0,
          rowIndex = void 0,
          colIndex = void 0,
          targetDBLClick = {
        "default": function _default(_column) {
          if (self.isInlineEditing) {
            for (var columnKey in self.inlineEditing) {
              if (columnKey == _column.dindex + "_" + _column.colIndex + "_" + _column.rowIndex) {
                return this;
              }
            }
          }

          var column = self.bodyRowMap[_column.rowIndex + "_" + _column.colIndex],
              value = "";
          if (column) {
            if (!self.list[dindex].__isGrouping) {
              value = _AX6UIGrid_data2.default.getValue.call(self, dindex, doindex, column.key);
            }
          }

          var editor = self.colGroup[_column.colIndex].editor;
          if (_AX6Util2.default.isObject(editor)) {
            inlineEdit.active.call(self, self.focusedColumn, e, value);
          } else {
            // 더블클릭 실행
            if (self.config.body.onDBLClick) {
              var that = {
                self: self,
                page: self.page,
                list: self.list,
                item: self.list[_column.dindex],
                dindex: _column.dindex,
                doindex: _column.doindex,
                rowIndex: _column.rowIndex,
                colIndex: _column.colIndex,
                column: column,
                value: self.list[_column.dindex][column.key]
              };
              self.config.body.onDBLClick.call(that);
            }
          }
        },
        "rowSelector": function rowSelector(_column) {},
        "lineNumber": function lineNumber(_column) {}
      };

      panelName = this.getAttribute("data-ax6grid-panel-name");
      attr = this.getAttribute("data-ax6grid-column-attr");
      row = Number(this.getAttribute("data-ax6grid-column-row"));
      col = Number(this.getAttribute("data-ax6grid-column-col"));
      rowIndex = Number(this.getAttribute("data-ax6grid-column-rowIndex"));
      colIndex = Number(this.getAttribute("data-ax6grid-column-colIndex"));
      dindex = Number(this.getAttribute("data-ax6grid-data-index"));
      doindex = Number(this.getAttribute("data-ax6grid-data-o-index"));

      if (attr in targetDBLClick) {
        targetDBLClick[attr]({
          panelName: panelName,
          attr: attr,
          row: row,
          col: col,
          dindex: dindex,
          doindex: doindex,
          rowIndex: rowIndex,
          colIndex: colIndex
        });

        _AX6Util2.default.stopEvent(e);
      }
    });

    this.$["container"]["body"].on("click", '[data-ax6grid-column-attr]', function (e) {
      var panelName = void 0,
          attr = void 0,
          row = void 0,
          col = void 0,
          dindex = void 0,
          doindex = void 0,
          rowIndex = void 0,
          colIndex = void 0,
          disableSelection = void 0,
          targetClick = {
        "default": function _default(_column) {
          var column = self.bodyRowMap[_column.rowIndex + "_" + _column.colIndex],
              that = {
            self: self,
            page: self.page,
            list: self.list,
            item: self.list[_column.doindex],
            dindex: _column.dindex,
            doindex: _column.doindex,
            rowIndex: _column.rowIndex,
            colIndex: _column.colIndex,
            column: column,
            value: self.list[_column.dindex][column.key]
          };

          if (column.editor && column.editor.type == "checkbox") {
            // todo : INLINE_EDITOR에서 처리 할수 있도록 구문 변경 필요.
            var value = _AX6UIGrid_data2.default.getValue.call(self, _column.dindex, _column.doindex, column.key),
                checked = void 0,
                newValue = void 0;

            if (column.editor.config && column.editor.config.trueValue) {
              if (checked = !(value == column.editor.config.trueValue)) {
                newValue = column.editor.config.trueValue;
              } else {
                newValue = column.editor.config.falseValue;
              }
            } else {
              newValue = checked = value == false || value == "false" || value < "1" ? "true" : "false";
            }

            _AX6UIGrid_data2.default.setValue.call(self, _column.dindex, _column.doindex, column.key, newValue);

            updateRowState.call(self, ["cellChecked"], _column.dindex, _column.doindex, {
              key: column.key, rowIndex: _column.rowIndex, colIndex: _column.colIndex,
              editorConfig: column.editor.config, checked: checked
            });
          } else {
            if (self.config.body.onClick) {
              self.config.body.onClick.call(that);
            }
          }
        },
        "rowSelector": function rowSelector(_column) {
          var item = self.list[_column.doindex];
          if (item[self.config.columnKeys.disableSelection]) {
            return false;
          }

          if (!self.config.multipleSelect && self.selectedDataIndexs[0] !== _column.doindex) {
            updateRowState.call(self, ["selectedClear"]);
            _AX6UIGrid_data2.default.clearSelect.call(self);
          }

          _AX6UIGrid_data2.default.select.call(self, _column.dindex, _column.doindex, undefined, {
            internalCall: true
          });
          updateRowState.call(self, ["selected"], _column.dindex, _column.doindex);
        },
        "lineNumber": function lineNumber(_column) {},
        "tree-control": function treeControl(_column, _el) {
          //console.log(_column);
          toggleCollapse.call(self, _column.dindex, _column.doindex);
        }
      };

      panelName = this.getAttribute("data-ax6grid-panel-name");
      attr = this.getAttribute("data-ax6grid-column-attr");
      row = Number(this.getAttribute("data-ax6grid-column-row"));
      col = Number(this.getAttribute("data-ax6grid-column-col"));
      rowIndex = Number(this.getAttribute("data-ax6grid-column-rowIndex"));
      colIndex = Number(this.getAttribute("data-ax6grid-column-colIndex"));
      dindex = Number(this.getAttribute("data-ax6grid-data-index"));
      doindex = Number(this.getAttribute("data-ax6grid-data-o-index"));

      if (attr in targetClick) {
        targetClick[attr]({
          panelName: panelName,
          attr: attr,
          row: row,
          col: col,
          dindex: dindex,
          doindex: doindex,
          rowIndex: rowIndex,
          colIndex: colIndex
        }, this);
      }
    });

    this.$["container"]["body"].on("contextmenu", function (e) {
      var target = void 0,
          dindex = void 0,
          doindex = void 0,
          rowIndex = void 0,
          colIndex = void 0,
          item = void 0,
          column = void 0,
          param = {};

      target = _AX6Util2.default.findParentNode(e.target, function (t) {
        if (t.getAttribute("data-ax6grid-column-attr")) {
          return true;
        }
      });

      if (target) {
        // item 찾기
        rowIndex = Number(target.getAttribute("data-ax6grid-column-rowIndex"));
        colIndex = Number(target.getAttribute("data-ax6grid-column-colIndex"));
        dindex = Number(target.getAttribute("data-ax6grid-data-index"));
        doindex = Number(target.getAttribute("data-ax6grid-data-o-index"));
        column = self.bodyRowMap[rowIndex + "_" + colIndex];
        item = self.list[dindex];
      }

      if (self.config.body.onContextMenu) {
        param = {
          element: target,
          dindex: dindex,
          doindex: doindex,
          rowIndex: rowIndex,
          colIndex: colIndex,
          item: item,
          column: column,
          gridSelf: self
        };
        self.config.body.onContextMenu.call({
          self: self,
          item: item,
          column: column,
          dindex: dindex,
          doindex: doindex,
          rowIndex: rowIndex,
          colIndex: colIndex
        }, e, param);
      }

      _AX6Util2.default.stopEvent(e.originalEvent);
      target = null;
      dindex = null;
      doindex = null;
      rowIndex = null;
      colIndex = null;
      item = null;
      column = null;
      param = null;
    });

    this.$["container"]["body"].on("mousedown", '[data-ax6grid-column-attr="default"]', function (e) {
      if (self.xvar.touchmoved) return false;
      if (this.getAttribute("data-ax6grid-column-rowIndex")) {
        columnSelector.on.call(self, {
          panelName: this.getAttribute("data-ax6grid-panel-name"),
          dindex: Number(this.getAttribute("data-ax6grid-data-index")),
          doindex: Number(this.getAttribute("data-ax6grid-data-o-index")),
          rowIndex: Number(this.getAttribute("data-ax6grid-column-rowIndex")),
          colIndex: Number(this.getAttribute("data-ax6grid-column-colIndex")),
          colspan: Number(this.getAttribute("colspan"))
        });
      }
    }).on("dragstart", function (e) {
      _AX6Util2.default.stopEvent(e);
      return false;
    });

    resetFrozenColumn.call(this);

    // 그리드 바디에 출력할 여유 카운트
    this.xvar.paintRowCountMargin = this.config.virtualScrollYCountMargin;
    this.xvar.paintRowCountTopMargin = this.config.virtualScrollYCountMargin - Math.floor(this.config.virtualScrollYCountMargin / 2);

    if (this.config.virtualScrollAccelerated) {
      this.__throttledScroll = _AX6Util2.default.throttle(function (css, opts) {
        if (this.config.virtualScrollY && !opts.noRepaint && "top" in css) {
          repaint.call(this);
        } else if (this.config.virtualScrollX && !opts.noRepaint && "left" in css) {
          repaint.call(this);
        }
        if (opts.callback) {
          opts.callback();
        }
      }, this.config.virtualScrollAcceleratedDelayTime);
    } else {
      this.__throttledScroll = false;
    }
  },
  /**
   *
   * @param _reset
   * @return {module:AX6UIGrid_body}
   */
  repaint: repaint,
  /**
   *
   * @param _panelName
   * @param _dindex
   * @param _doindex
   * @param _rowIndex
   * @param _colIndex
   * @param _newValue
   */
  repaintCell: repaintCell,
  /**
   *
   * @param _dindex
   */
  repaintRow: repaintRow,
  /**
   *
   * @param _states
   * @param _dindex
   * @param _doindex
   * @param _data
   */
  updateRowState: updateRowState,
  /**
   *
   * @param _states
   * @param _data
   */
  updateRowStateAll: updateRowStateAll,
  /**
   *
   * @param css
   * @param opts
   */
  scrollTo: scrollTo,
  /**
   *
   */
  blur: blur,
  /**
   *
   * @param _position
   * @return {*}
   */
  moveFocus: moveFocus,
  inlineEdit: inlineEdit,
  /**
   *
   * @return {string}
   */
  getExcelString: getExcelString,
  /**
   *
   * @param _dindex
   * @param _doindex
   * @param _collapse
   */
  toggleCollapse: toggleCollapse,
  /**
   *
   * @param _dindex
   * @param _doindex
   */
  click: click,
  /**
   *
   * @param _dindex
   * @param _doindex
   */
  dblClick: dblClick
};

/***/ }),
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(74);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../samples/node_modules/css-loader/index.js!../../samples/node_modules/sass-loader/lib/loader.js!./style.scss", function() {
			var newContent = require("!!../../samples/node_modules/css-loader/index.js!../../samples/node_modules/sass-loader/lib/loader.js!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "@-webkit-keyframes ax-picker {\n  0% {\n    opacity: 0.0;\n    -webkit-transform: translate(0, 0%); }\n  100% {\n    opacity: 1.0;\n    -webkit-transform: translate(0, 0); } }\n\n@-moz-keyframes ax-picker {\n  0% {\n    opacity: 0.0;\n    -moz-transform: translate(0, 0%); }\n  100% {\n    opacity: 1.0;\n    -moz-transform: translate(0, 0); } }\n\n@keyframes ax-picker {\n  0% {\n    opacity: 0.0;\n    -webkit-transform: translate(0, 0%);\n    -moz-transform: translate(0, 0%);\n    -ms-transform: translate(0, 0%);\n    -o-transform: translate(0, 0%);\n    transform: translate(0, 0%); }\n  100% {\n    opacity: 1.0;\n    -webkit-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    transform: translate(0, 0); } }\n\n@-webkit-keyframes ax-picker-destroy {\n  from {\n    opacity: 1.0;\n    -webkit-transform: translate(0, 0); }\n  to {\n    opacity: 0.0;\n    -webkit-transform: scale(0.8) translate(0, -10%); } }\n\n@-moz-keyframes ax-picker-destroy {\n  from {\n    opacity: 1.0;\n    -moz-transform: translate(0, 0); }\n  to {\n    opacity: 0.0;\n    -moz-transform: scale(0.8) translate(0, -10%); } }\n\n@keyframes ax-picker-destroy {\n  from {\n    opacity: 1.0;\n    -webkit-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    transform: translate(0, 0); }\n  to {\n    opacity: 0.0;\n    -webkit-transform: scale(0.8) translate(0, -10%);\n    -moz-transform: scale(0.8) translate(0, -10%);\n    -ms-transform: scale(0.8) translate(0, -10%);\n    -o-transform: scale(0.8) translate(0, -10%);\n    transform: scale(0.8) translate(0, -10%); } }\n\n[data-ax6ui-picker] {\n  box-sizing: border-box;\n  z-index: 2000;\n  position: absolute;\n  left: 0;\n  top: 0;\n  -webkit-perspective: 1000;\n  -moz-perspective: 1000;\n  perspective: 1000;\n  -webkit-transform-style: preserve-3d;\n  -moz-transform-style: preserve-3d;\n  -ms-transform-style: preserve-3d;\n  -o-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-animation: ax-picker 0.1s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards;\n  -moz-animation: ax-picker 0.1s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards;\n  animation: ax-picker 0.1s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards;\n  -webkit-transform: translateZ(0);\n  -moz-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  -o-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-transform-origin: center top;\n  -moz-transform-origin: center top;\n  -ms-transform-origin: center top;\n  -o-transform-origin: center top;\n  transform-origin: center top;\n  /* flip type\n  @include backface-visibility(visible);\n  @include transform(translateY(0%) rotateX(0deg));\n  */\n  background-color: #fff;\n  background-image: -webkit-linear-gradient(bottom, #fff);\n  background-image: linear-gradient(to top,#fff);\n  border: 1px solid;\n  border-color: #ddd;\n  border-radius: 5px;\n  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.175); }\n  [data-ax6ui-picker] *,\n  [data-ax6ui-picker] *:before,\n  [data-ax6ui-picker] *:after {\n    box-sizing: border-box; }\n  [data-ax6ui-picker] .ax-picker-heading {\n    font-weight: 600;\n    padding: 10px 15px;\n    border-bottom: 1px solid transparent;\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n    color: #333;\n    background-color: #f5f5f5;\n    background-image: -webkit-linear-gradient(bottom, #f5f5f5);\n    background-image: linear-gradient(to top,#f5f5f5); }\n    [data-ax6ui-picker] .ax-picker-heading .badge {\n      font-size: 0.8em;\n      color: #f5f5f5;\n      background-color: #333;\n      background-image: -webkit-linear-gradient(bottom, #333);\n      background-image: linear-gradient(to top,#333); }\n  [data-ax6ui-picker] .ax-picker-body {\n    padding: 5px;\n    text-align: center; }\n    [data-ax6ui-picker] .ax-picker-body .ax-picker-content {\n      min-width: 50px; }\n      [data-ax6ui-picker] .ax-picker-body .ax-picker-content .ax-picker-content-box {\n        border: 0px solid;\n        border-color: none;\n        border-radius: 0px;\n        padding: 0px;\n        overflow: hidden; }\n    [data-ax6ui-picker] .ax-picker-body .ax-picker-buttons {\n      padding: 10px 0px 5px 0px; }\n      [data-ax6ui-picker] .ax-picker-body .ax-picker-buttons button:not(:last-child) {\n        margin-right: 3px; }\n  [data-ax6ui-picker].direction-top .ax-picker-arrow {\n    position: absolute;\n    width: 0;\n    height: 0;\n    left: 50%;\n    top: 0; }\n    [data-ax6ui-picker].direction-top .ax-picker-arrow:before {\n      content: ' ';\n      position: absolute;\n      width: 0;\n      height: 0;\n      left: -10px;\n      top: -20px;\n      border-left: 10px solid transparent;\n      border-right: 10px solid transparent;\n      border-bottom: 20px solid #ddd; }\n    [data-ax6ui-picker].direction-top .ax-picker-arrow:after {\n      content: ' ';\n      position: absolute;\n      width: 0;\n      height: 0;\n      left: -10px;\n      top: -18px;\n      border-left: 10px solid transparent;\n      border-right: 10px solid transparent;\n      border-bottom: 20px solid #fff; }\n  [data-ax6ui-picker].direction-right .ax-picker-arrow {\n    position: absolute;\n    width: 0;\n    height: 0;\n    right: 0;\n    top: 50%; }\n    [data-ax6ui-picker].direction-right .ax-picker-arrow:before {\n      content: ' ';\n      position: absolute;\n      width: 0;\n      height: 0;\n      right: -20px;\n      top: -10px;\n      border-top: 10px solid transparent;\n      border-bottom: 10px solid transparent;\n      border-left: 20px solid #ddd; }\n    [data-ax6ui-picker].direction-right .ax-picker-arrow:after {\n      content: ' ';\n      position: absolute;\n      width: 0;\n      height: 0;\n      right: -18px;\n      top: -10px;\n      border-top: 10px solid transparent;\n      border-bottom: 10px solid transparent;\n      border-left: 20px solid #fff; }\n  [data-ax6ui-picker].direction-bottom .ax-picker-arrow {\n    position: absolute;\n    width: 0;\n    height: 0;\n    left: 50%;\n    bottom: 0; }\n    [data-ax6ui-picker].direction-bottom .ax-picker-arrow:before {\n      content: ' ';\n      position: absolute;\n      width: 0;\n      height: 0;\n      left: -10px;\n      bottom: -20px;\n      border-left: 10px solid transparent;\n      border-right: 10px solid transparent;\n      border-top: 20px solid #ddd; }\n    [data-ax6ui-picker].direction-bottom .ax-picker-arrow:after {\n      content: ' ';\n      position: absolute;\n      width: 0;\n      height: 0;\n      left: -10px;\n      bottom: -18px;\n      border-left: 10px solid transparent;\n      border-right: 10px solid transparent;\n      border-top: 20px solid #fff; }\n  [data-ax6ui-picker].direction-left .ax-picker-arrow {\n    position: absolute;\n    width: 0;\n    height: 0;\n    left: 0;\n    top: 50%; }\n    [data-ax6ui-picker].direction-left .ax-picker-arrow:before {\n      content: ' ';\n      position: absolute;\n      width: 0;\n      height: 0;\n      left: -20px;\n      top: -10px;\n      border-top: 10px solid transparent;\n      border-bottom: 10px solid transparent;\n      border-right: 20px solid #ddd; }\n    [data-ax6ui-picker].direction-left .ax-picker-arrow:after {\n      content: ' ';\n      position: absolute;\n      width: 0;\n      height: 0;\n      left: -18px;\n      top: -10px;\n      border-top: 10px solid transparent;\n      border-bottom: 10px solid transparent;\n      border-right: 20px solid #fff; }\n  [data-ax6ui-picker].destroy {\n    -webkit-animation: ax-picker-destroy 0.1s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;\n    -moz-animation: ax-picker-destroy 0.1s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;\n    animation: ax-picker-destroy 0.1s cubic-bezier(0.215, 0.61, 0.355, 1) forwards; }\n  [data-ax6ui-picker].direction-top {\n    -webkit-transform-origin: center top;\n    -moz-transform-origin: center top;\n    -ms-transform-origin: center top;\n    -o-transform-origin: center top;\n    transform-origin: center top; }\n  [data-ax6ui-picker].direction-right {\n    -webkit-transform-origin: right center;\n    -moz-transform-origin: right center;\n    -ms-transform-origin: right center;\n    -o-transform-origin: right center;\n    transform-origin: right center; }\n  [data-ax6ui-picker].direction-bottom {\n    -webkit-transform-origin: center bottom;\n    -moz-transform-origin: center bottom;\n    -ms-transform-origin: center bottom;\n    -o-transform-origin: center bottom;\n    transform-origin: center bottom; }\n  [data-ax6ui-picker].direction-left {\n    -webkit-transform-origin: left center;\n    -moz-transform-origin: left center;\n    -ms-transform-origin: left center;\n    -o-transform-origin: left center;\n    transform-origin: left center; }\n\n.input-group[data-ax6picker] .input-group-addon {\n  cursor: pointer; }\n  .input-group[data-ax6picker] .input-group-addon:not(:last-child) {\n    border-left: 0 none;\n    border-right: 0 none; }\n  .input-group[data-ax6picker] .input-group-addon.color-preview {\n    padding: 0; }\n  .input-group[data-ax6picker] .input-group-addon [data-ax6picker-color=\"preview\"] {\n    display: block; }\n\n.form-group[data-ax6picker] .input-group-addon {\n  cursor: pointer; }\n  .form-group[data-ax6picker] .input-group-addon:not(:last-child) {\n    border-left: 0 none;\n    border-right: 0 none; }\n  .form-group[data-ax6picker] .input-group-addon.color-preview {\n    padding: 0; }\n  .form-group[data-ax6picker] .input-group-addon [data-ax6picker-color=\"preview\"] {\n    display: block; }\n", ""]);

// exports


/***/ }),
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jqmin = __webpack_require__(1);

var _jqmin2 = _interopRequireDefault(_jqmin);

var _AX6UICore2 = __webpack_require__(5);

var _AX6UICore3 = _interopRequireDefault(_AX6UICore2);

var _AX6Info = __webpack_require__(3);

var _AX6Info2 = _interopRequireDefault(_AX6Info);

var _AX6Util = __webpack_require__(4);

var _AX6Util2 = _interopRequireDefault(_AX6Util);

var _AX6Mustache = __webpack_require__(36);

var _AX6Mustache2 = _interopRequireDefault(_AX6Mustache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* ~~~~~~~~~~~~~~~~~~ end of import  ~~~~~~~~~~~~~~~~~~~~ */

var tmpl = {
  menu: function menu(columnKeys) {
    return "\n        <div data-ax6ui-menu=\"\" class=\"{{theme}}\" {{#width}}style=\"width:{{width}}px;\"{{/width}}>\n            <div class=\"ax-menu-body\">\n                {{#" + columnKeys.items + "}}\n                    {{^@isMenu}}\n                        {{#divide}}\n                        <div class=\"ax-menu-item-divide\" data-menu-item-index=\"{{@i}}\"></div>\n                        {{/divide}}\n                        {{#html}}\n                        <div class=\"ax-menu-item-html\" data-menu-item-index=\"{{@i}}\">{{{@html}}}</div>\n                        {{/html}}\n                    {{/@isMenu}}\n                    {{#@isMenu}}\n                    <div class=\"ax-menu-item\" data-menu-item-depth=\"{{@depth}}\" data-menu-item-index=\"{{@i}}\" data-menu-item-path=\"{{@path}}.{{@i}}\">\n                        <span class=\"ax-menu-item-cell ax-menu-item-checkbox\">\n                            {{#check}}\n                            <span class=\"item-checkbox-wrap useCheckBox\" {{#checked}}data-item-checked=\"true\"{{/checked}}></span>\n                            {{/check}}\n                            {{^check}}\n                            <span class=\"item-checkbox-wrap\"></span>\n                            {{/check}}\n                        </span>\n                        {{#icon}}\n                        <span class=\"ax-menu-item-cell ax-menu-item-icon\" style=\"width:{{cfg.iconWidth}}px;\">{{{.}}}</span>\n                        {{/icon}}\n                        <span class=\"ax-menu-item-cell ax-menu-item-label\">{{{" + columnKeys.label + "}}}</span>\n                        {{#accelerator}}\n                        <span class=\"ax-menu-item-cell ax-menu-item-accelerator\" style=\"width:{{cfg.acceleratorWidth}}px;\"><span class=\"item-wrap\">{{.}}</span></span>\n                        {{/accelerator}}\n                        {{#@hasChild}}\n                        <span class=\"ax-menu-item-cell ax-menu-item-handle\">{{{cfg.icons.arrow}}}</span>\n                        {{/@hasChild}}\n                    </div>\n                    {{/@isMenu}}\n\n                {{/" + columnKeys.items + "}}\n            </div>\n            <div class=\"ax-menu-arrow\"></div>\n        </div>\n        ";
  },
  menubar: function menubar(columnKeys) {
    return "\n        <div data-ax6ui-menubar=\"\" class=\"{{theme}}\">\n            <div class=\"ax-menu-body\">\n                {{#" + columnKeys.items + "}}\n                    {{^@isMenu}}\n                        {{#divide}}\n                        <div class=\"ax-menu-item-divide\" data-menu-item-index=\"{{@i}}\"></div>\n                        {{/divide}}\n                        {{#html}}\n                        <div class=\"ax-menu-item-html\" data-menu-item-index=\"{{@i}}\">{{{@html}}}</div>\n                        {{/html}}\n                    {{/@isMenu}}\n                    {{#@isMenu}}\n                    <div class=\"ax-menu-item\" data-menu-item-index=\"{{@i}}\">\n                        {{#icon}}\n                        <span class=\"ax-menu-item-cell ax-menu-item-icon\" style=\"width:{{cfg.iconWidth}}px;\">{{{.}}}</span>\n                        {{/icon}}\n                        <span class=\"ax-menu-item-cell ax-menu-item-label\">{{{" + columnKeys.label + "}}}</span>\n                    </div>\n                    {{/@isMenu}}\n                {{/" + columnKeys.items + "}}\n            </div>\n        </div>\n        ";
  }
};

var appEventAttach = function appEventAttach(active, opt) {
  if (active) {
    (0, _jqmin2.default)(document.body).off("click.ax5menu-" + this.instanceId).on("click.ax5menu-" + this.instanceId, clickItem.bind(this, opt));

    (0, _jqmin2.default)(window).off("keydown.ax5menu-" + this.instanceId).on("keydown.ax5menu-" + this.instanceId, function (e) {
      if (e.which == _AX6Info2.default.eventKeys.ESC) {
        self.close();
      }
    }).off("resize.ax5menu-" + this.instanceId).on("resize.ax5menu-" + this.instanceId, function (e) {
      self.close();
    });
  } else {
    (0, _jqmin2.default)(document.body).off("click.ax5menu-" + this.instanceId);
    (0, _jqmin2.default)(window).off("keydown.ax5menu-" + this.instanceId);
    (0, _jqmin2.default)(window).off("resize.ax5menu-" + this.instanceId);
  }
};
var onStateChanged = function onStateChanged(opts, that) {
  if (opts && opts.onStateChanged) {
    opts.onStateChanged.call(that, that);
  } else if (this.onStateChanged) {
    this.onStateChanged.call(that, that);
  }

  this.state = that.state;
  opts = null;
  that = null;
  return true;
};
var onLoad = function onLoad(that) {
  if (this.onLoad) {
    this.onLoad.call(that, that);
  }

  that = null;
  return true;
};
var _popup = function _popup(opt, items, depth, path) {
  var self = this,
      cfg = this.config;
  var data = opt,
      $activeMenu = void 0,
      removed = void 0;

  data.theme = opt.theme || cfg.theme;
  data.cfg = {
    icons: _jqmin2.default.extend({}, cfg.icons),
    iconWidth: opt.iconWidth || cfg.iconWidth,
    acceleratorWidth: opt.acceleratorWidth || cfg.acceleratorWidth
  };

  items.forEach(function (n) {
    if (n.html || n.divide) {
      n['@isMenu'] = false;
      if (n.html) {
        n['@html'] = n.html.call({
          item: n,
          config: cfg,
          opt: opt
        });
      }
    } else {
      n['@isMenu'] = true;
    }
  });

  data[cfg.columnKeys.items] = items;
  data['@depth'] = depth;
  data['@path'] = path || "root";
  data['@hasChild'] = function () {
    return this[cfg.columnKeys.items] && this[cfg.columnKeys.items].length > 0;
  };
  $activeMenu = (0, _jqmin2.default)(_AX6Mustache2.default.render(tmpl.menu.call(this, cfg.columnKeys), data));
  (0, _jqmin2.default)(document.body).append($activeMenu);

  // remove queue
  removed = this.queue.splice(depth);
  removed.forEach(function (n) {
    n.$target.remove();
  });

  this.queue.push({
    '$target': $activeMenu,
    'data': _jqmin2.default.extend({}, data)
  });

  $activeMenu.on('mouseover', '[data-menu-item-index]', function () {
    var depth = this.getAttribute("data-menu-item-depth"),
        index = this.getAttribute("data-menu-item-index"),
        path = this.getAttribute("data-menu-item-path"),
        $this = void 0,
        offset = void 0,
        scrollTop = void 0,
        childOpt = void 0,
        _items = void 0,
        _activeMenu = void 0;

    if (depth != null && typeof depth != "undefined") {
      _items = self.queue[depth].data[cfg.columnKeys.items][index][cfg.columnKeys.items];
      _activeMenu = self.queue[depth].$target;
      _activeMenu.find('[data-menu-item-index]').removeClass("hover");
      (0, _jqmin2.default)(this).addClass("hover");

      if (_activeMenu.attr("data-selected-menu-item-index") != index) {
        _activeMenu.attr("data-selected-menu-item-index", index);

        if (_items && _items.length > 0) {

          $this = (0, _jqmin2.default)(this);
          offset = $this.offset();
          scrollTop = cfg.position == "fixed" ? (0, _jqmin2.default)(document).scrollTop() : 0;
          childOpt = {
            '@parent': {
              left: offset.left,
              top: offset.top,
              width: $this.outerWidth(),
              height: $this.outerHeight()
            },
            left: offset.left + $this.outerWidth() - cfg.menuBodyPadding,
            top: offset.top - cfg.menuBodyPadding - 1 - scrollTop
          };

          childOpt = _jqmin2.default.extend(true, opt, childOpt);
          _popup.call(self, childOpt, _items, Number(depth) + 1, path);
        } else {
          self.queue.splice(Number(depth) + 1).forEach(function (n) {
            n.$target.remove();
          });
        }
      }
    }

    depth = null;
    index = null;
    path = null;
    $this = null;
    offset = null;
    scrollTop = null;
    childOpt = null;
    _items = null;
    _activeMenu = null;
  });

  // mouse out
  $activeMenu.on('mouseout', '[data-menu-item-index]', function () {
    var depth = this.getAttribute("data-menu-item-depth"),
        index = this.getAttribute("data-menu-item-index"),
        path = this.getAttribute("data-menu-item-path"),
        _items = void 0;

    if (path) {
      _items = self.queue[depth].data[cfg.columnKeys.items][index][cfg.columnKeys.items];
    }
    if (_items && _items.length > 0) {} else {
      (0, _jqmin2.default)(this).removeClass("hover");
    }
  });

  // is Root
  if (depth == 0) {
    if (data.direction) $activeMenu.addClass("direction-" + data.direction);
    onStateChanged.call(this, null, {
      self: this,
      items: items,
      parent: function (path) {
        if (!path) return false;
        try {
          return Function("", "return this.config.items[" + path.substring(5).replace(/\./g, '].items[') + "];").call(self);
        } catch (e) {}
      }(data['@path']),
      state: "popup"
    });
  }

  align.call(this, $activeMenu, data);
  onLoad.call(this, {
    self: this,
    items: items,
    element: $activeMenu.get(0)
  });

  data = null;
  $activeMenu = null;
  removed = null;
  opt = null;
  items = null;
  depth = null;
  path = null;

  return this;
};
var clickItem = function clickItem(opt, e) {
  var self = this,
      cfg = this.config;
  var target = void 0,
      item = void 0;

  target = _AX6Util2.default.findParentNode(e.target, function (target) {
    if (target.getAttribute("data-menu-item-index")) {
      return true;
    }
  });
  if (target) {
    if (typeof opt === "undefined") opt = {};
    item = function (path) {
      if (!path) return false;
      try {
        return Function("", "return this[" + path.substring(5).replace(/\./g, '].' + cfg.columnKeys.items + '[') + "];").call(opt.items || cfg.items);
      } catch (e) {
        console.log(_AX6Info2.default.getError("ax5menu", "501", "menuItemClick"));
      } finally {
        item = null;
      }
    }(target.getAttribute("data-menu-item-path"));

    if (!item) return this;

    if (item.check) {
      (function (items) {
        var setValue = {
          'checkbox': function checkbox(value) {
            this.checked = !value;
          },
          'radio': function radio(value) {
            var name = this.name;
            items.forEach(function (n) {
              if (n.check && n.check.type === 'radio' && n.check.name == name) {
                n.check.checked = false;
              }
            });
            this.checked = !value;
          }
        };
        if (setValue[this.type]) setValue[this.type].call(this, this.checked);
        setValue = null;
      }).call(item.check, cfg.items);

      if (!cfg.itemClickAndClose) {
        self.queue.forEach(function (n) {
          n.$target.find('[data-menu-item-index]').each(function () {
            var item = n.data[cfg.columnKeys.items][this.getAttribute("data-menu-item-index")];
            if (item.check) {
              (0, _jqmin2.default)(this).find(".item-checkbox-wrap").attr("data-item-checked", item.check.checked);
            }
            item = null;
          });
        });
      }
    }

    if (self.onClick) {
      if (self.onClick.call(item, item, opt.param)) {
        self.close();
      }
    }
    if ((!item[cfg.columnKeys.items] || item[cfg.columnKeys.items].length == 0) && cfg.itemClickAndClose) self.close();
  } else {
    self.close();
  }

  target = null;
  item = null;
  return this;
};
var align = function align($activeMenu, data) {
  var self = this,
      cfg = this.config;
  var $window = (0, _jqmin2.default)(window),
      $document = (0, _jqmin2.default)(document),
      wh = cfg.position == "fixed" ? $window.height() : $document.height(),
      ww = $window.width(),
      h = $activeMenu.outerHeight(),
      w = $activeMenu.outerWidth(),
      l = data.left,
      t = data.top,
      position = cfg.position || "fixed";

  if (l + w > ww) {
    if (data['@parent']) {
      l = data['@parent'].left - w + cfg.menuBodyPadding;
    } else {
      l = ww - w;
    }
  }

  if (t + h > wh) {
    t = wh - h;
  }

  $activeMenu.css({ left: l, top: t, position: position });

  $activeMenu = null;
  data = null;
  $window = null;
  $document = null;
  wh = null;
  ww = null;
  h = null;
  w = null;
  l = null;
  t = null;
  position = null;
  return this;
};
/* ~~~~~~~~~~~~~~~~~~ end of private  ~~~~~~~~~~~~~~~~~~~~ */

/**
 * @class
 */

var AX6UIMenu = function (_AX6UICore) {
  _inherits(AX6UIMenu, _AX6UICore);

  /**
   * @constructor
   * @param config
   */
  function AX6UIMenu(config) {
    _classCallCheck(this, AX6UIMenu);

    /**
     * @member {JSON}
     * @param config
     * @param [config.theme]
     * @param [config.iconWidth=22]
     * @param [config.acceleratorWidth=100]
     * @param [config.menuBodyPadding=5]
     * @param [config.offset]
     * @param [config.offset.left=0]
     * @param [config.offset.top=0]
     * @param [config.position="fixed"]
     * @param [config.animateTime=250]
     * @param [config.items]
     * @param [config.itemClickAndClose=true]
     * @param [config.columnKeys]
     * @param [config.columnKeys.label='label']
     * @param [config.columnKeys.items='items']
     * @param [config.onStateChanged]
     * @param [config.onClick]
     * @param [config.onLoad]
     *
     */
    var _this = _possibleConstructorReturn(this, (AX6UIMenu.__proto__ || Object.getPrototypeOf(AX6UIMenu)).call(this));

    _this.config = {
      theme: "default",
      iconWidth: 22,
      acceleratorWidth: 100,
      menuBodyPadding: 5,
      offset: { left: 0, top: 0 },
      position: "fixed",
      animateTime: 250,
      items: [],
      itemClickAndClose: true,
      columnKeys: {
        label: 'label',
        items: 'items'
      }
    };
    _jqmin2.default.extend(true, _this.config, config);

    // 멤버 변수 초기화
    /**
     * @member
     */
    _this.openTimer = null;
    /**
     * @member
     */
    _this.closeTimer = null;
    /**
     * @member {Array}
     */
    _this.queue = [];
    /**
     * @member {Object}
     */
    _this.menuBar = {};
    /**
     * @member
     */
    _this.state = undefined;

    if (typeof config !== "undefined") _this.init();
    return _this;
  }

  /**
   * @method
   */


  _createClass(AX6UIMenu, [{
    key: "init",
    value: function init() {
      this.onStateChanged = this.config.onStateChanged;
      delete this.config.onStateChanged;
      this.onClick = this.config.onClick;
      delete this.config.onClick;
      this.onLoad = this.config.onLoad;
      delete this.config.onLoad;

      onStateChanged.call(this, null, {
        self: this,
        state: "init"
      });
      // init 호출 여부
      this.initOnce();
    }

    /**
     * @method
     */

  }, {
    key: "initOnce",
    value: function initOnce() {
      if (this.initialized) return this;
      this.initialized = true;
    }

    /**
     * @method
     * @param {Event|Object} e - Event or Object
     * @param {Object} [opt]
     * @param {String} [opt.theme]
     * @param {Function} [opt.filter]
     * @returns {AX6UIMenu}
     */

  }, {
    key: "popup",
    value: function popup(e, opt) {
      var self = this,
          cfg = this.config;
      var getOption = {
        'event': function event(e, opt) {
          e = {
            left: e.clientX,
            top: cfg.position == "fixed" ? e.clientY : e.pageY,
            width: cfg.width,
            theme: cfg.theme
          };

          e.left -= 5;
          e.top -= 5;

          if (cfg.offset) {
            if (cfg.offset.left) e.left += cfg.offset.left;
            if (cfg.offset.top) e.top += cfg.offset.top;
          }
          opt = _jqmin2.default.extend(true, e, opt);

          try {
            return opt;
          } finally {
            e = null;
            //opt = null;
          }
        },
        'object': function object(e, opt) {
          e = {
            left: e.left,
            top: e.top,
            width: e.width || cfg.width,
            theme: e.theme || cfg.theme
          };

          if (cfg.offset) {
            if (cfg.offset.left) e.left += cfg.offset.left;
            if (cfg.offset.top) e.top += cfg.offset.top;
          }

          opt = _jqmin2.default.extend(true, e, opt);

          try {
            return opt;
          } finally {
            e = null;
            //opt = null;
          }
        }
      },
          updateTheme = function updateTheme(theme) {
        if (theme) cfg.theme = theme;
      };

      if (!e) return this;
      opt = getOption[typeof e.clientX == "undefined" ? "object" : "event"].call(this, e, opt);
      updateTheme(opt.theme);

      var items = [].concat(cfg.items),
          _filteringItem = void 0;
      opt.items = items;

      if (opt.filter) {
        _filteringItem = function filteringItem(_items) {
          var arr = [];
          _items.forEach(function (n) {
            if (n.items && n.items.length > 0) {
              n.items = _filteringItem(n.items);
            }
            if (opt.filter.call(n)) {
              arr.push(n);
            }
          });
          return arr;
        };
        opt.items = items = _filteringItem(items);
      }

      if (items.length) {
        appEventAttach.call(this, false);
        _popup.call(this, opt, items, 0); // 0 is seq of queue

        if (this.popupEventAttachTimer) clearTimeout(this.popupEventAttachTimer);
        this.popupEventAttachTimer = setTimeout(function () {
          appEventAttach.call(this, true, opt); // 이벤트 연결
        }.bind(this), 500);
      }

      e = null;
      return this;
    }

    /**
     * @method
     * @param {Element|jQueryObject} el
     * @returns {AX6UIMenu}
     */

  }, {
    key: "attach",
    value: function attach(el, opt) {
      var self = this,
          cfg = this.config;
      var getOption = {
        'object': function object(e, opt) {
          e = {
            left: e.left,
            top: e.top,
            width: e.width || cfg.width,
            theme: e.theme || cfg.theme,
            direction: e.direction || cfg.direction
          };
          opt = _jqmin2.default.extend(true, opt, e);

          try {
            return opt;
          } finally {
            e = null;
            opt = null;
          }
        }
      };

      var popUpChildMenu = function popUpChildMenu(target, opt, eType) {
        var $target = (0, _jqmin2.default)(target),
            offset = $target.offset(),
            height = $target.outerHeight(),
            index = Number(target.getAttribute("data-menu-item-index")),
            scrollTop = cfg.position == "fixed" ? (0, _jqmin2.default)(document).scrollTop() : 0;

        if (cfg.items && cfg.items[index][cfg.columnKeys.items] && cfg.items[index][cfg.columnKeys.items].length) {

          if (self.menuBar.openedIndex == index) {
            if (eType == "click") self.close();
            return false;
          }

          self.menuBar.target.find('[data-menu-item-index]').removeClass("hover");
          self.menuBar.opened = true;
          self.menuBar.openedIndex = index;

          $target.attr("data-menu-item-opened", "true");
          $target.addClass("hover");

          if (cfg.offset) {
            if (cfg.offset.left) offset.left += cfg.offset.left;
            if (cfg.offset.top) offset.top += cfg.offset.top;
          }

          opt = getOption["object"].call(this, { left: offset.left, top: offset.top + height - scrollTop }, opt);

          _popup.call(self, opt, cfg.items[index][cfg.columnKeys.items], 0, 'root.' + target.getAttribute("data-menu-item-index")); // 0 is seq of queue
          appEventAttach.call(self, true, {}); // 이벤트 연결
        }

        target = null;
        opt = null;
        $target = null;
        offset = null;
        height = null;
        index = null;
        scrollTop = null;
      };
      var clickParentMenu = function clickParentMenu(target, opt, eType) {
        var $target = (0, _jqmin2.default)(target),
            offset = $target.offset(),
            height = $target.outerHeight(),
            index = Number(target.getAttribute("data-menu-item-index")),
            scrollTop = cfg.position == "fixed" ? (0, _jqmin2.default)(document).scrollTop() : 0;
        if (cfg.items && (!cfg.items[index][cfg.columnKeys.items] || cfg.items[index][cfg.columnKeys.items].length == 0)) {
          if (self.onClick) {
            self.onClick.call(cfg.items[index], cfg.items[index]);
          }
        }
      };

      var data = {},
          items = cfg.items,
          $activeMenu = void 0;

      if (typeof opt === "undefined") opt = {};

      data.theme = opt.theme || cfg.theme;
      data.cfg = {
        icons: _jqmin2.default.extend({}, cfg.icons),
        iconWidth: opt.iconWidth || cfg.iconWidth,
        acceleratorWidth: opt.acceleratorWidth || cfg.acceleratorWidth
      };

      items.forEach(function (n) {
        if (n.html || n.divide) {
          n['@isMenu'] = false;
          if (n.html) {
            n['@html'] = n.html.call({
              item: n,
              config: cfg,
              opt: opt
            });
          }
        } else {
          n['@isMenu'] = true;
        }
      });

      data[cfg.columnKeys.items] = items;

      $activeMenu = (0, _jqmin2.default)(_AX6Mustache2.default.render(tmpl.menubar.call(this, cfg.columnKeys), data));

      self.menuBar = {
        target: (0, _jqmin2.default)(el),
        opened: false
      };
      self.menuBar.target.html($activeMenu);

      // click, mouseover
      self.menuBar.target.on("click", function (e) {
        if (!e) return this;
        var target = _AX6Util2.default.findParentNode(e.target, function (target) {
          if (target.getAttribute("data-menu-item-index")) {
            return true;
          }
        });
        if (target) {
          clickParentMenu(target, opt, "click");
          popUpChildMenu(target, opt, "click");
        }

        target = null;
      });
      self.menuBar.target.on("mouseover", function (e) {
        if (!self.menuBar.opened) return false;
        var target = _AX6Util2.default.findParentNode(e.target, function (target) {
          if (target.getAttribute("data-menu-item-index")) {
            return true;
          }
        });
        if (target) popUpChildMenu(target, opt, "mouseover");

        target = null;
      });

      el = null;
      opt = null;
      data = null;
      items = null;
      $activeMenu = null;

      return this;
    }

    /**
     * @method
     * @returns {AX6UIMenu}
     */

  }, {
    key: "close",
    value: function close() {
      var self = this,
          cfg = this.config;
      if (self.menuBar && self.menuBar.target) {
        self.menuBar.target.find('[data-menu-item-index]').removeClass("hover");
        self.menuBar.opened = false;
        self.menuBar.openedIndex = null;
      }

      appEventAttach.call(this, false); // 이벤트 제거

      this.queue.forEach(function (n) {
        n.$target.remove();
      });
      this.queue = [];

      onStateChanged.call(this, null, {
        self: this,
        state: "close"
      });

      return this;
    }
  }, {
    key: "getCheckValue",


    /**
     * @method
     * @returns {Object} statusCheckItem
     */
    value: function getCheckValue() {

      var checkItems = {};
      var collectItem = function collectItem(items) {
        var i = items.length;
        while (i--) {
          if (items[i].check && items[i].check.checked) {
            if (!checkItems[items[i].check.name]) checkItems[items[i].check.name] = items[i].check.value;else {
              if (_AX6Util2.default.isString(checkItems[items[i].check.name])) checkItems[items[i].check.name] = [checkItems[items[i].check.name]];
              checkItems[items[i].check.name].push(items[i].check.value);
            }
          }
          if (items[i].items && items[i].items.length > 0) collectItem(items[i].items);
        }
      };

      collectItem(this.config.items);

      try {
        return checkItems;
      } finally {
        checkItems = null;
      }
    }
  }]);

  return AX6UIMenu;
}(_AX6UICore3.default);

exports.default = AX6UIMenu;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(80);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../samples/node_modules/css-loader/index.js!../../samples/node_modules/sass-loader/lib/loader.js!./style.scss", function() {
			var newContent = require("!!../../samples/node_modules/css-loader/index.js!../../samples/node_modules/sass-loader/lib/loader.js!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "@-webkit-keyframes ax-menu {\n  0% {\n    opacity: 0.0; }\n  1% {\n    opacity: 0.0; }\n  100% {\n    opacity: 0.95; } }\n\n@-moz-keyframes ax-menu {\n  0% {\n    opacity: 0.0; }\n  1% {\n    opacity: 0.0; }\n  100% {\n    opacity: 0.95; } }\n\n@keyframes ax-menu {\n  0% {\n    opacity: 0.0; }\n  1% {\n    opacity: 0.0; }\n  100% {\n    opacity: 0.95; } }\n\n@-webkit-keyframes ax-menu-destroy {\n  from {\n    -webkit-transform: scale(1);\n    opacity: 1.0; }\n  to {\n    -webkit-transform: scale(0.5);\n    opacity: 0.0; } }\n\n@-moz-keyframes ax-menu-destroy {\n  from {\n    -moz-transform: scale(1);\n    opacity: 1.0; }\n  to {\n    -moz-transform: scale(0.5);\n    opacity: 0.0; } }\n\n@keyframes ax-menu-destroy {\n  from {\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    -o-transform: scale(1);\n    transform: scale(1);\n    opacity: 1.0; }\n  to {\n    -webkit-transform: scale(0.5);\n    -moz-transform: scale(0.5);\n    -ms-transform: scale(0.5);\n    -o-transform: scale(0.5);\n    transform: scale(0.5);\n    opacity: 0.0; } }\n\n[data-ax6ui-menu] {\n  box-sizing: border-box;\n  z-index: 2000;\n  position: fixed;\n  left: 0px;\n  top: 0px;\n  .width: 100px;\n  opacity: 0.95;\n  -webkit-perspective: 1000px;\n  -moz-perspective: 1000px;\n  perspective: 1000px;\n  -webkit-transform-style: preserve-3d;\n  -moz-transform-style: preserve-3d;\n  -ms-transform-style: preserve-3d;\n  -o-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-animation: ax-menu 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  -moz-animation: ax-menu 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  animation: ax-menu 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  -webkit-transform: translateZ(0);\n  -moz-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  -o-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-transform-origin: center top;\n  -moz-transform-origin: center top;\n  -ms-transform-origin: center top;\n  -o-transform-origin: center top;\n  transform-origin: center top;\n  /* flip type\n  @include backface-visibility(visible);\n  @include transform(translateY(0%) rotateX(0deg));\n  */\n  background-color: #eee;\n  background-image: -webkit-linear-gradient(bottom, #eee);\n  background-image: linear-gradient(to top,#eee);\n  border: 1px solid;\n  border-color: #aaa;\n  border-radius: 5px;\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);\n  color: #333; }\n  [data-ax6ui-menu] *,\n  [data-ax6ui-menu] *:before,\n  [data-ax6ui-menu] *:after {\n    box-sizing: border-box; }\n  [data-ax6ui-menu] .ax-menu-heading {\n    font-weight: 600;\n    padding: 10px 15px;\n    border-bottom: 1px solid transparent;\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n    color: #333;\n    background-color: #f5f5f5;\n    background-image: -webkit-linear-gradient(bottom, #f5f5f5);\n    background-image: linear-gradient(to top,#f5f5f5); }\n    [data-ax6ui-menu] .ax-menu-heading .badge {\n      font-size: 0.8em;\n      color: #f5f5f5;\n      background-color: #333;\n      background-image: -webkit-linear-gradient(bottom, #333);\n      background-image: linear-gradient(to top,#333); }\n  [data-ax6ui-menu] .ax-menu-body {\n    padding: 5px 0px;\n    text-align: center;\n    position: relative;\n    overflow: hidden; }\n    [data-ax6ui-menu] .ax-menu-body .ax-menu-item {\n      padding: 4px 0px;\n      text-align: left;\n      background: #eee;\n      color: #444;\n      cursor: pointer;\n      font-size: 13px;\n      display: table;\n      position: relative;\n      border-collapse: separate;\n      box-sizing: border-box;\n      overflow: hidden;\n      width: 100%;\n      height: 18px; }\n      [data-ax6ui-menu] .ax-menu-body .ax-menu-item .ax-menu-item-cell {\n        box-sizing: border-box;\n        display: table-cell;\n        vertical-align: middle;\n        white-space: nowrap;\n        font-size: 13px;\n        line-height: 18px;\n        padding: 0px 0px 0px 0px;\n        user-select: none; }\n        [data-ax6ui-menu] .ax-menu-body .ax-menu-item .ax-menu-item-cell.ax-menu-item-checkbox {\n          overflow: hidden;\n          width: 18px;\n          text-align: center; }\n          [data-ax6ui-menu] .ax-menu-body .ax-menu-item .ax-menu-item-cell.ax-menu-item-checkbox .item-checkbox-wrap {\n            position: relative;\n            display: block;\n            width: 18px;\n            height: 18px; }\n            [data-ax6ui-menu] .ax-menu-body .ax-menu-item .ax-menu-item-cell.ax-menu-item-checkbox .item-checkbox-wrap.useCheckBox:after {\n              content: '';\n              width: 10px;\n              height: 5px;\n              position: absolute;\n              top: 4px;\n              left: 4px;\n              border: 2px solid #444;\n              border-top: none;\n              border-right: none;\n              background: transparent;\n              opacity: 0.1;\n              -webkit-transform: rotate(-50deg);\n              -moz-transform: rotate(-50deg);\n              -ms-transform: rotate(-50deg);\n              -o-transform: rotate(-50deg);\n              transform: rotate(-50deg); }\n            [data-ax6ui-menu] .ax-menu-body .ax-menu-item .ax-menu-item-cell.ax-menu-item-checkbox .item-checkbox-wrap.useCheckBox[data-item-checked=\"true\"]:after {\n              opacity: 1; }\n        [data-ax6ui-menu] .ax-menu-body .ax-menu-item .ax-menu-item-cell.ax-menu-item-icon {\n          text-align: left; }\n        [data-ax6ui-menu] .ax-menu-body .ax-menu-item .ax-menu-item-cell.ax-menu-item-label {\n          padding-right: 10px; }\n        [data-ax6ui-menu] .ax-menu-body .ax-menu-item .ax-menu-item-cell.ax-menu-item-accelerator {\n          text-align: right;\n          padding: 0px 7px 0px 0px; }\n          [data-ax6ui-menu] .ax-menu-body .ax-menu-item .ax-menu-item-cell.ax-menu-item-accelerator .item-wrap {\n            width: 100%;\n            vertical-align: middle;\n            display: inline-block;\n            max-width: 100%;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            white-space: nowrap;\n            word-wrap: normal;\n            display: block; }\n        [data-ax6ui-menu] .ax-menu-body .ax-menu-item .ax-menu-item-cell.ax-menu-item-handle {\n          overflow: hidden;\n          width: 14px;\n          text-align: center; }\n      [data-ax6ui-menu] .ax-menu-body .ax-menu-item:hover, [data-ax6ui-menu] .ax-menu-body .ax-menu-item.hover {\n        background: #999;\n        color: #fff; }\n        [data-ax6ui-menu] .ax-menu-body .ax-menu-item:hover .ax-menu-item-cell.ax-menu-item-checkbox .item-checkbox-wrap:after, [data-ax6ui-menu] .ax-menu-body .ax-menu-item.hover .ax-menu-item-cell.ax-menu-item-checkbox .item-checkbox-wrap:after {\n          border-color: #fff; }\n    [data-ax6ui-menu] .ax-menu-body .ax-menu-item-divide {\n      border-top: 1px solid;\n      border-color: #aaaaaa;\n      margin: 5px 0px; }\n    [data-ax6ui-menu] .ax-menu-body .ax-menu-item-html {\n      padding: 0px 5px;\n      text-align: left; }\n    [data-ax6ui-menu] .ax-menu-body .ax-menu-buttons button:not(:last-child) {\n      margin-right: 3px; }\n  [data-ax6ui-menu].direction-top {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px; }\n    [data-ax6ui-menu].direction-top.with-arrow .ax-menu-arrow {\n      position: absolute;\n      width: 0;\n      height: 0;\n      left: 50%;\n      top: 0px; }\n      [data-ax6ui-menu].direction-top.with-arrow .ax-menu-arrow:before {\n        content: ' ';\n        position: absolute;\n        width: 0;\n        height: 0;\n        left: -10px;\n        top: -20px;\n        border-left: 10px solid transparent;\n        border-right: 10px solid transparent;\n        border-bottom: 20px solid #aaa; }\n      [data-ax6ui-menu].direction-top.with-arrow .ax-menu-arrow:after {\n        content: ' ';\n        position: absolute;\n        width: 0;\n        height: 0;\n        left: -10px;\n        top: -18px;\n        border-left: 10px solid transparent;\n        border-right: 10px solid transparent;\n        border-bottom: 20px solid #eee; }\n  [data-ax6ui-menu].direction-right {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px; }\n    [data-ax6ui-menu].direction-right.with-arrow .ax-menu-arrow {\n      position: absolute;\n      width: 0;\n      height: 0;\n      right: 0px;\n      top: 50%; }\n      [data-ax6ui-menu].direction-right.with-arrow .ax-menu-arrow:before {\n        content: ' ';\n        position: absolute;\n        width: 0;\n        height: 0;\n        right: -20px;\n        top: -10px;\n        border-top: 10px solid transparent;\n        border-bottom: 10px solid transparent;\n        border-left: 20px solid #aaa; }\n      [data-ax6ui-menu].direction-right.with-arrow .ax-menu-arrow:after {\n        content: ' ';\n        position: absolute;\n        width: 0;\n        height: 0;\n        right: -18px;\n        top: -10px;\n        border-top: 10px solid transparent;\n        border-bottom: 10px solid transparent;\n        border-left: 20px solid #eee; }\n  [data-ax6ui-menu].direction-bottom {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px; }\n    [data-ax6ui-menu].direction-bottom.with-arrow .ax-menu-arrow {\n      position: absolute;\n      width: 0;\n      height: 0;\n      left: 50%;\n      bottom: 0px; }\n      [data-ax6ui-menu].direction-bottom.with-arrow .ax-menu-arrow:before {\n        content: ' ';\n        position: absolute;\n        width: 0;\n        height: 0;\n        left: -10px;\n        bottom: -20px;\n        border-left: 10px solid transparent;\n        border-right: 10px solid transparent;\n        border-top: 20px solid #aaa; }\n      [data-ax6ui-menu].direction-bottom.with-arrow .ax-menu-arrow:after {\n        content: ' ';\n        position: absolute;\n        width: 0;\n        height: 0;\n        left: -10px;\n        bottom: -18px;\n        border-left: 10px solid transparent;\n        border-right: 10px solid transparent;\n        border-top: 20px solid #eee; }\n  [data-ax6ui-menu].direction-left {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px; }\n    [data-ax6ui-menu].direction-left.with-arrow .ax-menu-arrow {\n      position: absolute;\n      width: 0;\n      height: 0;\n      left: 0px;\n      top: 50%; }\n      [data-ax6ui-menu].direction-left.with-arrow .ax-menu-arrow:before {\n        content: ' ';\n        position: absolute;\n        width: 0;\n        height: 0;\n        left: -20px;\n        top: -10px;\n        border-top: 10px solid transparent;\n        border-bottom: 10px solid transparent;\n        border-right: 20px solid #aaa; }\n      [data-ax6ui-menu].direction-left.with-arrow .ax-menu-arrow:after {\n        content: ' ';\n        position: absolute;\n        width: 0;\n        height: 0;\n        left: -18px;\n        top: -10px;\n        border-top: 10px solid transparent;\n        border-bottom: 10px solid transparent;\n        border-right: 20px solid #eee; }\n  [data-ax6ui-menu].destroy {\n    -webkit-animation: ax-menu-destroy 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards;\n    -moz-animation: ax-menu-destroy 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards;\n    animation: ax-menu-destroy 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards; }\n  [data-ax6ui-menu].direction-top {\n    -webkit-transform-origin: center top;\n    -moz-transform-origin: center top;\n    -ms-transform-origin: center top;\n    -o-transform-origin: center top;\n    transform-origin: center top; }\n  [data-ax6ui-menu].direction-right {\n    -webkit-transform-origin: right center;\n    -moz-transform-origin: right center;\n    -ms-transform-origin: right center;\n    -o-transform-origin: right center;\n    transform-origin: right center; }\n  [data-ax6ui-menu].direction-bottom {\n    -webkit-transform-origin: center bottom;\n    -moz-transform-origin: center bottom;\n    -ms-transform-origin: center bottom;\n    -o-transform-origin: center bottom;\n    transform-origin: center bottom; }\n  [data-ax6ui-menu].direction-left {\n    -webkit-transform-origin: left center;\n    -moz-transform-origin: left center;\n    -ms-transform-origin: left center;\n    -o-transform-origin: left center;\n    transform-origin: left center; }\n\n[data-ax6ui-menubar] {\n  box-sizing: border-box;\n  height: 100%;\n  position: relative; }\n  [data-ax6ui-menubar] .ax-menu-body {\n    display: table;\n    height: 100%;\n    border-collapse: separate;\n    box-sizing: border-box; }\n    [data-ax6ui-menubar] .ax-menu-body .ax-menu-item {\n      display: table-cell;\n      height: 100%;\n      vertical-align: middle;\n      white-space: nowrap;\n      box-sizing: border-box;\n      padding: 0px 10px;\n      cursor: pointer;\n      font-size: 13px; }\n      [data-ax6ui-menubar] .ax-menu-body .ax-menu-item .ax-menu-item-cell {\n        white-space: nowrap;\n        user-select: none; }\n  [data-ax6ui-menubar] .ax-menu-body .ax-menu-item {\n    color: #444; }\n    [data-ax6ui-menubar] .ax-menu-body .ax-menu-item:hover, [data-ax6ui-menubar] .ax-menu-body .ax-menu-item.hover {\n      background: #999;\n      color: #fff; }\n", ""]);

// exports


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _jqmin = __webpack_require__(1);

var _jqmin2 = _interopRequireDefault(_jqmin);

var _AX6Util = __webpack_require__(4);

var _AX6Util2 = _interopRequireDefault(_AX6Util);

var _AX6UIGrid_page = __webpack_require__(82);

var _AX6UIGrid_page2 = _interopRequireDefault(_AX6UIGrid_page);

var _AX6UIGrid_util = __webpack_require__(65);

var _AX6UIGrid_util2 = _interopRequireDefault(_AX6UIGrid_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ~~~~~~~~~~~~~~~~~~ end of import  ~~~~~~~~~~~~~~~~~~~~ */

var clearGroupingData = function clearGroupingData(_list) {
  var i = 0,
      l = _list.length,
      returnList = [];
  for (; i < l; i++) {
    if (_list[i] && !_list[i]["__isGrouping"]) {
      if (_list[i][this.config.columnKeys.selected]) {
        this.selectedDataIndexs.push(i);
      }
      returnList.push(_jqmin2.default.extend({}, _list[i]));
    }
  }
  return returnList;
};

var initData = function initData(_list) {
  this.selectedDataIndexs = [];
  // this.deletedList = [];
  // todo : deletedList 초기화 시점이 언제로 하는게 좋은가. set 메소드에서 초기화 하는 것으로 수정

  var i = 0,
      l = _list.length,
      returnList = [],
      appendIndex = 0,
      dataRealRowCount = 0,
      lineNumber = 0;

  if (this.config.body.grouping) {

    var groupingKeys = _AX6Util2.default.map(this.bodyGrouping.by, function () {
      return {
        key: this,
        compareString: "",
        grouping: false,
        list: []
      };
    });

    var gi = 0,
        gl = groupingKeys.length,
        compareString = void 0,
        appendRow = [],
        ari = void 0;
    for (; i < l + 1; i++) {
      gi = 0;

      if (_list[i] && _list[i][this.config.columnKeys.deleted]) {
        this.deletedList.push(_list[i]);
      } else {
        compareString = ""; // 그룹핑 구문검사용
        appendRow = []; // 현재줄 앞에 추가해줘야 하는 줄

        // 그룹핑 구문검사
        for (; gi < gl; gi++) {
          if (_list[i]) {
            compareString += "$|$" + _list[i][groupingKeys[gi].key];
          }

          if (appendIndex > 0 && compareString != groupingKeys[gi].compareString) {
            var appendRowItem = { keys: [], labels: [], list: groupingKeys[gi].list };
            for (var ki = 0; ki < gi + 1; ki++) {
              appendRowItem.keys.push(groupingKeys[ki].key);
              appendRowItem.labels.push(_list[i - 1][groupingKeys[ki].key]);
            }
            appendRow.push(appendRowItem);
            groupingKeys[gi].list = [];
          }

          groupingKeys[gi].list.push(_list[i]);
          groupingKeys[gi].compareString = compareString;
        }

        // 새로 추가해야할 그룹핑 row
        ari = appendRow.length;
        while (ari--) {
          returnList.push({ __isGrouping: true, __groupingList: appendRow[ari].list, __groupingBy: { keys: appendRow[ari].keys, labels: appendRow[ari].labels } });
        }
        //~ 그룹핑 구문 검사 완료

        if (_list[i]) {
          if (_list[i][this.config.columnKeys.selected]) {
            this.selectedDataIndexs.push(i);
          }
          // 그룹핑이 적용된 경우 오리지널 인덱스 의미 없음 : 정렬보다 그룹핑이 더 중요하므로.
          _list[i]["__original_index"] = _list[i]["__index"] = lineNumber;
          returnList.push(_list[i]);

          dataRealRowCount++;
          appendIndex++;
          lineNumber++;
        }
      }
    }
  } else {
    for (; i < l; i++) {
      if (_list[i]) {
        if (_list[i][this.config.columnKeys.deleted]) {
          this.deletedList.push(_list[i]);
        } else {

          if (_list[i][this.config.columnKeys.selected]) {
            this.selectedDataIndexs.push(i);
          }

          // __original_index 인덱스 키가 없다면 추가.
          if (typeof _list[i]["__original_index"] === "undefined") {
            _list[i]["__original_index"] = lineNumber;
          }
          _list[i]["__index"] = lineNumber;
          dataRealRowCount++;
          lineNumber++;
          returnList.push(_list[i]);
        }
      }
    }
  }

  // 원본 데이터의 갯수
  // grouping은 제외하고 수집됨.
  this.xvar.dataRealRowCount = dataRealRowCount;
  return returnList;
};

var arrangeData4tree = function arrangeData4tree(_list) {
  this.selectedDataIndexs = [];
  this.deletedList = [];
  var i = 0,
      seq = 0,
      appendIndex = 0,
      dataRealRowCount = 0,
      lineNumber = 0;

  var li = _list.length;
  var keys = this.config.tree.columnKeys;
  var hashDigit = this.config.tree.hashDigit;
  var listIndexMap = {};

  while (li--) {
    delete _list[li][keys.parentHash];
    delete _list[li][keys.selfHash];
    //delete _list[li][keys.childrenLength];
  }

  /// 루트 아이템 수집
  i = 0;
  seq = 0;
  li = _list.length;
  for (; i < li; i++) {
    if (_list[i]) {
      listIndexMap[_list[i][keys.selfKey]] = i; // 인덱싱

      if (_AX6Util2.default.isNothing(_list[i][keys.parentKey]) || _list[i][keys.parentKey] === "top") {
        // 최상위 아이템인 경우
        _list[i][keys.parentKey] = "top";
        _list[i][keys.children] = [];
        _list[i][keys.parentHash] = _AX6Util2.default.setDigit("0", hashDigit);
        _list[i][keys.selfHash] = _AX6Util2.default.setDigit("0", hashDigit) + "." + _AX6Util2.default.setDigit(seq, hashDigit);
        _list[i][keys.depth] = 0;
        _list[i][keys.hidden] = false;

        seq++;
      }
    }
  }

  /// 자식 아이템 수집
  i = 0;
  lineNumber = 0;
  for (; i < li; i++) {
    var _parent = void 0,
        _parentHash = void 0;
    if (_list[i] && _list[i][keys.parentKey] !== "top" && typeof _list[i][keys.parentHash] === "undefined") {

      if (_parent = _list[listIndexMap[_list[i][keys.parentKey]]]) {
        _parentHash = _parent[keys.selfHash];
        _list[i][keys.children] = [];
        _list[i][keys.parentHash] = _parentHash;
        _list[i][keys.selfHash] = _parentHash + "." + _AX6Util2.default.setDigit(_parent[keys.children].length, hashDigit);
        _list[i][keys.depth] = _parent[keys.depth] + 1;
        if (_parent[keys.collapse] || _parent[keys.hidden]) _list[i][keys.hidden] = true;
        _parent[keys.children].push(_list[i][keys.selfKey]);
      } else {
        _list[i][keys.parentKey] = "top";
        _list[i][keys.children] = [];
        _list[i][keys.parentHash] = _AX6Util2.default.setDigit("0", hashDigit);
        _list[i][keys.selfHash] = _AX6Util2.default.setDigit("0", hashDigit) + "." + _AX6Util2.default.setDigit(seq, hashDigit);
        _list[i][keys.hidden] = false;

        seq++;
      }
    }

    if (_list[i]) {
      if (_list[i][this.config.columnKeys.deleted]) {
        this.deletedList.push(_list[i]);
        _list[i][keys.hidden] = true;
      } else if (_list[i][this.config.columnKeys.selected]) {
        this.selectedDataIndexs.push(i);
      }

      _list[i]["__index"] = lineNumber;
      dataRealRowCount++;
      lineNumber++;
    }
  }

  this.listIndexMap = listIndexMap;
  this.xvar.dataRealRowCount = dataRealRowCount;

  return _list;
};

var set = function set(data) {
  var list = void 0;
  if (_AX6Util2.default.isArray(data)) {
    this.page = null;
    list = data;
  } else if ("page" in data) {
    this.page = _jqmin2.default.extend({}, data.page);
    list = data.list;
  }

  // console.log(this.list.length);

  if (this.config.tree.use) {
    this.list = arrangeData4tree.call(this, list);
    this.proxyList = getProxyList.call(this, sort.call(this, this.sortInfo, this.list));
  } else {
    this.proxyList = null;
    this.list = initData.call(this, !this.config.remoteSort && Object.keys(this.sortInfo).length ? sort.call(this, this.sortInfo, list) : list);
  }
  this.selectedDataIndexs = [];
  this.deletedList = [];

  this.needToPaintSum = true;
  this.xvar.frozenRowIndex = this.config.frozenRowIndex > this.list.length ? this.list.length : this.config.frozenRowIndex;
  this.xvar.paintStartRowIndex = undefined; // 스크롤 포지션 저장변수 초기화
  this.xvar.virtualPaintStartRowIndex = undefined; // 스크롤 포지션 저장변수 초기화
  _AX6UIGrid_page2.default.navigationUpdate.call(this);

  if (this.config.body.grouping) {}
  return this;
};

var get = function get() {
  return {
    list: this.list,
    page: this.page
  };
};

var getList = function getList(_type) {
  var returnList = [];
  //let list = (this.proxyList) ? this.proxyList : this.list;
  var list = this.list;
  var i = 0,
      l = list.length;
  switch (_type) {
    case "modified":
      for (; i < l; i++) {
        if (list[i] && !list[i]["__isGrouping"] && list[i][this.config.columnKeys.modified]) {
          returnList.push(_jqmin2.default.extend({}, list[i]));
        }
      }
      break;
    case "selected":
      for (; i < l; i++) {
        if (list[i] && !list[i]["__isGrouping"] && list[i][this.config.columnKeys.selected]) {
          returnList.push(_jqmin2.default.extend({}, list[i]));
        }
      }
      break;
    case "deleted":
      //_list = clearGroupingData(this.list);
      returnList = [].concat(this.deletedList);
      break;
    default:
      returnList = clearGroupingData.call(this, list);
  }
  return returnList;
};

var getProxyList = function getProxyList(_list) {
  var i = 0,
      l = _list.length,
      returnList = [];
  for (; i < l; i++) {

    if (_list[i] && !_list[i][this.config.tree.columnKeys.hidden]) {
      _list[i].__origin_index__ = i;
      returnList.push(_list[i]);
    }
  }
  return returnList;
};

var setValue = function setValue(_dindex, _doindex, _key, _value) {
  var originalValue = getValue.call(this, _dindex, _doindex, _key);
  var list = this.list;
  var listIndex = typeof _doindex === "undefined" ? _dindex : _doindex;
  this.needToPaintSum = true;

  if (originalValue !== _value) {
    if (/[\.\[\]]/.test(_key)) {
      try {
        list[listIndex][this.config.columnKeys.modified] = true;
        Function("val", "this" + _AX6UIGrid_util2.default.getRealPathForDataItem(_key) + " = val;").call(list[listIndex], _value);
      } catch (e) {}
    } else {
      list[listIndex][this.config.columnKeys.modified] = true;
      list[listIndex][_key] = _value;
    }

    if (this.onDataChanged) {
      this.onDataChanged.call({
        self: this,
        list: this.list,
        dindex: _dindex,
        doindex: _doindex,
        item: this.list[_dindex],
        key: _key,
        value: _value
      });
    }
  }

  return true;
};

var getValue = function getValue(_dindex, _doindex, _key, _value) {
  var list = this.list;
  var listIndex = typeof _doindex === "undefined" ? _dindex : _doindex;

  if (/[\.\[\]]/.test(_key)) {
    try {
      _value = Function("", "return this" + _AX6UIGrid_util2.default.getRealPathForDataItem(_key) + ";").call(list[listIndex]);
    } catch (e) {}
  } else {
    _value = list[listIndex][_key];
  }
  return _value;
};

var clearSelect = function clearSelect() {
  this.selectedDataIndexs = [];
};

var select = function select(_dindex, _doindex, _selected, _options) {
  var cfg = this.config;

  if (typeof _doindex === "undefined") _doindex = _dindex;

  if (!this.list[_doindex]) return false;
  if (this.list[_doindex].__isGrouping) return false;
  if (this.list[_doindex][cfg.columnKeys.disableSelection]) return false;

  if (typeof _selected === "undefined") {
    if (this.list[_doindex][cfg.columnKeys.selected] = !this.list[_doindex][cfg.columnKeys.selected]) {
      this.selectedDataIndexs.push(_doindex);
    } else {
      this.selectedDataIndexs.splice(_AX6Util2.default.search(this.selectedDataIndexs, function () {
        return this == _doindex;
      }), 1);
    }
  } else {
    if (this.list[_doindex][cfg.columnKeys.selected] = _selected) {
      this.selectedDataIndexs.push(_doindex);
    } else {
      this.selectedDataIndexs.splice(_AX6Util2.default.search(this.selectedDataIndexs, function () {
        return this == _doindex;
      }), 1);
    }
  }

  if (this.onDataChanged && _options && _options.internalCall) {
    this.onDataChanged.call({
      self: this,
      list: this.list,
      dindex: _dindex,
      doindex: _doindex,
      item: this.list[_doindex],
      key: cfg.columnKeys.selected,
      value: this.list[_doindex][cfg.columnKeys.selected]
    });
  }

  return this.list[_doindex][cfg.columnKeys.selected];
};

var selectAll = function selectAll(_selected, _options) {
  var cfg = this.config,
      dindex = this.list.length;

  this.selectedDataIndexs = [];

  if (typeof _selected === "undefined") {
    while (dindex--) {
      if (this.list[dindex].__isGrouping) continue;
      if (_options && _options.filter) {
        if (_options.filter.call(this.list[dindex]) !== true) {
          continue;
        }
      }
      if (this.list[dindex][cfg.columnKeys.disableSelection]) continue;

      if (this.list[dindex][cfg.columnKeys.selected] = !this.list[dindex][cfg.columnKeys.selected]) {
        this.selectedDataIndexs.push(dindex);
      }
    }
  } else {
    while (dindex--) {
      if (this.list[dindex].__isGrouping) continue;
      if (_options && _options.filter) {
        if (_options.filter.call(this.list[dindex]) !== true) {
          continue;
        }
      }
      if (this.list[dindex][cfg.columnKeys.disableSelection]) continue;

      if (this.list[dindex][cfg.columnKeys.selected] = _selected) {
        this.selectedDataIndexs.push(dindex);
      }
    }
  }

  if (this.onDataChanged && _options && _options.internalCall) {
    this.onDataChanged.call({
      self: this,
      list: this.list
    });
  }

  return this.list;
};

var add = function add(_row, _dindex, _options) {
  var list = this.config.body.grouping ? clearGroupingData.call(this, this.list) : this.list;
  var processor = {
    "first": function first() {
      list = [].concat(_row).concat(list);
    },
    "last": function last() {
      list = list.concat([].concat(_row));
    }
  };

  if (this.config.tree.use) {
    var _list2 = this.list.concat([].concat(_row));

    this.list = arrangeData4tree.call(this, _list2);
    this.proxyList = getProxyList.call(this, sort.call(this, this.sortInfo, this.list));
  } else {
    if (typeof _dindex === "undefined") _dindex = "last";
    if (_dindex in processor) {
      _row[this.config.columnKeys.modified] = true;
      processor[_dindex].call(this, _row);
    } else {
      if (!_AX6Util2.default.isNumber(_dindex)) {
        throw 'invalid argument _dindex';
      }
      if (_AX6Util2.default.isArray(_row)) {
        for (var _i = 0, _l = _row.length; _i < _l; _i++) {
          list.splice(_dindex + _i, 0, _row[_i]);
        }
      } else {
        list.splice(_dindex, 0, _row);
      }
    }

    if (this.config.body.grouping) {
      list = initData.call(this, sort.call(this, this.sortInfo, list));
    } else if (_options && _options.sort && Object.keys(this.sortInfo).length) {
      list = initData.call(this, sort.call(this, this.sortInfo, list));
    } else {
      list = initData.call(this, list);
    }

    this.list = list;
  }

  this.needToPaintSum = true;
  this.xvar.frozenRowIndex = this.config.frozenRowIndex > this.list.length ? this.list.length : this.config.frozenRowIndex;
  this.xvar.paintStartRowIndex = undefined; // 스크롤 포지션 저장변수 초기화
  this.xvar.virtualPaintStartRowIndex = undefined; // 스크롤 포지션 저장변수 초기화
  _AX6UIGrid_page2.default.navigationUpdate.call(this);
  return this;
};

var remove = function remove(_dindex) {
  var list = this.config.body.grouping ? clearGroupingData.call(this, this.list) : this.list;
  var processor = {
    "first": function first() {
      if (this.config.tree.use) {
        processor.tree.call(this, 0);
      } else {
        list.splice(0, 1);
      }
    },
    "last": function last() {
      if (this.config.tree.use) {
        processor.tree.call(this, list.length - 1);
      } else {
        list.splice(list.length - 1, 1);
      }
    },
    "index": function index(_dindex) {
      if (this.config.tree.use) {
        processor.tree.call(this, _dindex);
      } else {
        list.splice(_dindex, 1);
      }
    },
    "selected": function selected() {
      if (this.config.tree.use) {
        processor.tree.call(this, "selected");
      } else {
        var __list = [],
            i = void 0,
            l = void 0;

        for (i = 0, l = list.length; i < l; i++) {
          if (!list[i][this.config.columnKeys.selected]) {
            __list.push(list[i]);
          }
        }
        list = __list;
        __list = null;
        i = null;
      }
    },
    "tree": function tree(_dindex) {
      var treeKeys = this.config.tree.columnKeys,
          selfHash = list[_dindex][this.config.tree.columnKeys.selfHash];
      list = _AX6Util2.default.filter(list, function () {
        return this[treeKeys.selfHash].substr(0, selfHash.length) != selfHash;
      });
      treeKeys = null;
      selfHash = null;
    }
  };

  if (typeof _dindex === "undefined") _dindex = "last";
  if (_dindex in processor) {
    processor[_dindex].call(this, _dindex);
  } else {
    if (!_AX6Util2.default.isNumber(_dindex)) {
      throw 'invalid argument _dindex';
    }
    processor["index"].call(this, _dindex);
  }

  if (this.config.tree.use) {
    this.list = arrangeData4tree.call(this, list);
    this.proxyList = getProxyList.call(this, sort.call(this, this.sortInfo, this.list));
  } else {
    if (this.config.body.grouping) {
      list = initData.call(this, sort.call(this, this.sortInfo, list));
    } else if (Object.keys(this.sortInfo).length) {
      list = initData.call(this, sort.call(this, this.sortInfo, list));
    } else {
      list = initData.call(this, list);
    }
    this.list = list;
  }

  this.needToPaintSum = true;
  this.xvar.frozenRowIndex = this.config.frozenRowIndex > this.list.length ? this.list.length : this.config.frozenRowIndex;
  this.xvar.paintStartRowIndex = undefined; // 스크롤 포지션 저장변수 초기화
  this.xvar.virtualPaintStartRowIndex = undefined; // 스크롤 포지션 저장변수 초기화
  _AX6UIGrid_page2.default.navigationUpdate.call(this);
  return this;
};

var deleteRow = function deleteRow(_dindex) {
  var list = this.config.body.grouping ? clearGroupingData.call(this, this.list) : this.list;
  var processor = {
    "first": function first() {
      if (this.config.tree.use) {
        processor.tree.call(this, 0);
      } else {
        list[0][this.config.columnKeys.deleted] = true;
      }
    },
    "last": function last() {
      if (this.config.tree.use) {
        processor.tree.call(this, list.length - 1);
      } else {
        list[list.length - 1][this.config.columnKeys.deleted] = true;
      }
    },
    "selected": function selected() {
      if (this.config.tree.use) {
        processor.tree.call(this, "selected");
      } else {
        var i = list.length;
        while (i--) {
          if (list[i][this.config.columnKeys.selected]) {
            list[i][this.config.columnKeys.deleted] = true;
          }
        }
        i = null;
      }
    },
    "tree": function tree(_dindex) {
      var keys = this.config.columnKeys,
          treeKeys = this.config.tree.columnKeys;

      if (_dindex === "selected") {

        var i = list.length;
        while (i--) {
          if (list[i][this.config.columnKeys.selected]) {
            list[i][this.config.columnKeys.deleted] = true;

            var selfHash = list[i][treeKeys.selfHash];
            var ii = list.length;

            while (ii--) {
              if (list[ii][treeKeys.selfHash].substr(0, selfHash.length) === selfHash) {
                list[ii][keys.deleted] = true;
              }
            }

            selfHash = null;
            ii = null;
          }
        }
        i = null;
      } else {
        var _selfHash = list[_dindex][treeKeys.selfHash];
        var _i2 = list.length;
        while (_i2--) {
          if (list[_i2][treeKeys.selfHash].substr(0, _selfHash.length) !== _selfHash) {
            list[_i2][keys.deleted] = true;
          }
        }
        _selfHash = null;
        _i2 = null;
      }

      keys = null;
      treeKeys = null;
    }
  };

  if (typeof _dindex === "undefined") _dindex = "last";

  if (_dindex in processor) {
    processor[_dindex].call(this, _dindex);
  } else {
    if (!_AX6Util2.default.isNumber(_dindex)) {
      throw 'invalid argument _dindex';
    }
    list[_dindex][this.config.columnKeys.deleted] = true;
  }

  if (this.config.tree.use) {
    this.list = arrangeData4tree.call(this, list);
    this.proxyList = getProxyList.call(this, sort.call(this, this.sortInfo, this.list));
  } else {
    if (this.config.body.grouping) {
      list = initData.call(this, sort.call(this, this.sortInfo, list));
    } else if (Object.keys(this.sortInfo).length) {
      list = initData.call(this, sort.call(this, this.sortInfo, list));
    } else {
      list = initData.call(this, list);
    }

    this.list = list;
  }

  this.needToPaintSum = true;
  this.xvar.frozenRowIndex = this.config.frozenRowIndex > this.list.length ? this.list.length : this.config.frozenRowIndex;
  this.xvar.paintStartRowIndex = undefined; // 스크롤 포지션 저장변수 초기화
  this.xvar.virtualPaintStartRowIndex = undefined; // 스크롤 포지션 저장변수 초기화
  _AX6UIGrid_page2.default.navigationUpdate.call(this);
  return this;
};

var update = function update(_row, _dindex) {
  if (!_AX6Util2.default.isNumber(_dindex)) {
    throw 'invalid argument _dindex';
  }
  //
  this.needToPaintSum = true;
  this.list.splice(_dindex, 1, _row);

  if (this.config.body.grouping) {
    this.list = initData.call(this, clearGroupingData.call(this, this.list));
  }
};

var updateChild = function updateChild(_dindex, _updateData, _options) {
  var keys = this.config.tree.columnKeys,
      selfHash = void 0,
      originIndex = void 0;

  if (typeof _dindex === "undefined") return false;
  originIndex = this.proxyList[_dindex].__origin_index__;

  if (this.list[originIndex][keys.children]) {
    this.proxyList = []; // 리셋 프록시

    if (_options && _options.filter) {
      if (_options.filter.call({ item: this.list[originIndex], dindex: originIndex }, this.list[originIndex])) {
        for (var _k in _updateData) {
          this.list[originIndex][_k] = _updateData[_k];
        }
      }
    } else {
      for (var _k2 in _updateData) {
        this.list[originIndex][_k2] = _updateData[_k2];
      }
    }

    selfHash = this.list[originIndex][keys.selfHash];

    var i = 0,
        l = this.list.length;
    for (; i < l; i++) {
      if (this.list[i]) {
        if (this.list[i][keys.parentHash].substr(0, selfHash.length) === selfHash) {

          if (_options && _options.filter) {
            if (_options.filter.call({ item: this.list[i], dindex: i }, this.list[i])) {
              for (var _k3 in _updateData) {
                this.list[i][_k3] = _updateData[_k3];
              }
            }
          } else {
            for (var _k4 in _updateData) {
              this.list[i][_k4] = _updateData[_k4];
            }
          }
        }

        if (!this.list[i][keys.hidden]) {
          this.proxyList.push(this.list[i]);
        }
      }
    }

    return true;
  } else {
    return false;
  }
};

var sort = function sort(_sortInfo, _list, _options) {
  var self = this,
      list = _list || this.list,
      sortInfoArray = [],
      lineNumber = 0;
  var getKeyValue = function getKeyValue(_item, _key, _value) {
    if (/[\.\[\]]/.test(_key)) {
      try {
        _value = Function("", "return this" + _AX6UIGrid_util2.default.getRealPathForDataItem(_key) + ";").call(_item);
      } catch (e) {}
    } else {
      _value = _item[_key];
    }
    return _value;
  };

  for (var k in _sortInfo) {
    sortInfoArray[_sortInfo[k].seq] = { key: k, order: _sortInfo[k].orderBy };
  }
  sortInfoArray = _AX6Util2.default.filter(sortInfoArray, function () {
    return typeof this !== "undefined";
  });

  // 정렬조건이 없으면 original_index값을 이용하여 정렬처리
  if (_options && _options.resetLineNumber && sortInfoArray.length === 0) {
    sortInfoArray[0] = { key: '__original_index', order: "asc" };
  }

  var i = 0,
      l = sortInfoArray.length,
      _a_val = void 0,
      _b_val = void 0;

  list.sort(function (_a, _b) {
    for (i = 0; i < l; i++) {
      _a_val = getKeyValue(_a, sortInfoArray[i].key);
      _b_val = getKeyValue(_b, sortInfoArray[i].key);

      if ((typeof _a_val === "undefined" ? "undefined" : _typeof(_a_val)) !== (typeof _b_val === "undefined" ? "undefined" : _typeof(_b_val))) {
        _a_val = '' + _a_val;
        _b_val = '' + _b_val;
      }
      if (_a_val < _b_val) {
        return sortInfoArray[i].order === "asc" ? -1 : 1;
      } else if (_a_val > _b_val) {
        return sortInfoArray[i].order === "asc" ? 1 : -1;
      }
    }
  });

  if (_options && _options.resetLineNumber) {
    i = 0, l = list.length, lineNumber = 0;
    for (; i < l; i++) {
      if (_list[i] && !_list[i]["__isGrouping"]) {
        _list[i]["__index"] = lineNumber++;
      }
    }
  }

  if (_list) {
    return list;
  } else {
    this.xvar.frozenRowIndex = this.config.frozenRowIndex > this.list.length ? this.list.length : this.config.frozenRowIndex;
    this.xvar.paintStartRowIndex = undefined; // 스크롤 포지션 저장변수 초기화
    this.xvar.virtualPaintStartRowIndex = undefined; // 스크롤 포지션 저장변수 초기화
    _AX6UIGrid_page2.default.navigationUpdate.call(this);
    return this;
  }
};

var append = function append(_list, _callback) {
  var self = this;

  if (this.config.tree.use) {
    var list = this.list.concat([].concat(_list));

    this.list = arrangeData4tree.call(this, list);
    this.proxyList = getProxyList.call(this, sort.call(this, this.sortInfo, this.list));
    list = null;
  } else {
    this.list = this.list.concat([].concat(_list));
  }

  this.appendProgress = true;
  _AX6UIGrid_page2.default.statusUpdate.call(this);

  if (this.appendDebouncer) {
    if (self.appendDebounceTimes < this.config.debounceTime / 10) {
      clearTimeout(this.appendDebouncer);
      self.appendDebounceTimes++;
    } else {
      self.appendDebounceTimes = 0;
      appendIdle.call(self);
      _callback();
      return false;
    }
  }

  this.appendDebouncer = setTimeout(function () {
    self.appendDebounceTimes = 0;
    appendIdle.call(self);
    _callback();
  }, this.config.debounceTime);

  // todo : append bounce animation
};

var appendIdle = function appendIdle() {
  this.appendProgress = false;
  if (this.config.body.grouping) {
    this.list = initData.call(this, sort.call(this, this.sortInfo, this.list));
  } else {
    this.list = initData.call(this, this.list);
  }

  this.needToPaintSum = true;
  this.xvar.frozenRowIndex = this.config.frozenRowIndex > this.list.length ? this.list.length : this.config.frozenRowIndex;
  this.xvar.paintStartRowIndex = undefined; // 스크롤 포지션 저장변수 초기화
  this.xvar.virtualPaintStartRowIndex = undefined; // 스크롤 포지션 저장변수 초기화
  _AX6UIGrid_page2.default.navigationUpdate.call(this);
};

var toggleCollapse = function toggleCollapse(_dindex, _doindx, _collapse) {
  var keys = this.config.tree.columnKeys,
      selfHash = void 0,
      originIndex = void 0;

  if (typeof _dindex === "undefined") return false;
  originIndex = this.proxyList[_dindex].__origin_index__;

  if (this.list[originIndex][keys.children]) {
    this.proxyList = []; // 리셋 프록시
    if (typeof _collapse == "undefined") {
      _collapse = !(this.list[originIndex][keys.collapse] || false);
    }

    this.list[originIndex][keys.collapse] = _collapse;
    selfHash = this.list[originIndex][keys.selfHash];

    var i = this.list.length;
    while (i--) {
      if (this.list[i]) {
        // console.log(this.list[i][keys.parentHash].substr(0, selfHash.length), selfHash);
        if (this.list[i][keys.parentHash].substr(0, selfHash.length) === selfHash) {
          this.list[i][keys.hidden] = _collapse;
        }

        if (!this.list[i][keys.hidden]) {
          this.proxyList.push(this.list[i]);
        }
      }
    }

    return true;
  } else {
    return false;
  }
};

/**
 * @module AX6UIGrid_data
 */
exports.default = {
  init: function init() {},
  /**
   * @param data
   * @return {module:AX6UIGrid_data}
   */
  set: set,
  /**
   * @return {*}
   */
  get: get,
  /**
   * @param {String} _type - modified|selected|deleted
   * @return {Array}
   */
  getList: getList,
  /**
   * @param {Array}
   * @return {Array}
   */
  getProxyList: getProxyList,
  /**
   *
   * @param _dindex
   * @param _doindex
   * @param _key
   * @param _value
   * @return {boolean}
   */
  setValue: setValue,
  /**
   *
   * @param _dindex
   * @param _doindex
   * @param _key
   * @param _value
   * @return {*}
   */
  getValue: getValue,
  /**
   *
   */
  clearSelect: clearSelect,
  /**
   *
   * @param _dindex
   * @param _doindex
   * @param _selected
   * @param _options
   * @return {boolean}
   */
  select: select,
  /**
   *
   * @param _selected
   * @param _options
   */
  selectAll: selectAll,
  /**
   *
   * @param _row
   * @param _dindex
   * @param _options
   * @return {add}
   */
  add: add,
  /**
   * list에서 완전 제거 하는 경우 사용.
   * @param _dindex
   * @return {remove}
   */
  remove: remove,
  /**
   * list에서 deleted 처리 repaint
   * @param _dindex
   * @return {deleteRow}
   */
  deleteRow: deleteRow,
  /**
   *
   * @param _row
   * @param _dindex
   */
  update: update,
  /**
   *
   * @param _dindex
   * @param _updateData
   * @param _options
   * @return {boolean}
   */
  updateChild: updateChild,
  /**
   *
   * @param _sortInfo
   * @param _list
   * @param _options
   * @return {*}
   */
  sort: sort,
  /**
   *
   * @param _list
   * @return {Array}
   */
  initData: initData,
  /**
   *
   * @param _list
   * @return {Array}
   */
  clearGroupingData: clearGroupingData,
  /**
   *
   * @param _list
   * @param _callback
   * @return {boolean}
   */
  append: append,
  /**
   *
   * @param _dindex
   * @param _doindx
   * @param _collapse
   * @return {boolean}
   */
  toggleCollapse: toggleCollapse
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AX6Util = __webpack_require__(4);

var _AX6Util2 = _interopRequireDefault(_AX6Util);

var _AX6Mustache = __webpack_require__(36);

var _AX6Mustache2 = _interopRequireDefault(_AX6Mustache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var onclickPageMove = function onclickPageMove(_act) {
  var callback = function callback(_pageNo) {
    if (this.page.currentPage != _pageNo) {
      this.page.selectPage = _pageNo;
      if (this.config.page.onChange) {
        this.config.page.onChange.call({
          self: this,
          page: this.page,
          data: this.data
        });
      }
    }
  };
  var processor = {
    "first": function first() {
      callback.call(this, 0);
    },
    "prev": function prev() {
      var pageNo = this.page.currentPage - 1;
      if (pageNo < 0) pageNo = 0;
      callback.call(this, pageNo);
    },
    "next": function next() {
      var pageNo = this.page.currentPage + 1;
      if (pageNo > this.page.totalPages - 1) pageNo = this.page.totalPages - 1;
      callback.call(this, pageNo);
    },
    "last": function last() {
      callback.call(this, this.page.totalPages - 1);
    }
  };

  if (_act in processor) {
    processor[_act].call(this);
  } else {
    callback.call(this, _act - 1);
  }
};

var navigationUpdate = function navigationUpdate() {
  var self = this;
  if (this.page) {
    var page = {
      hasPage: false,
      currentPage: this.page.currentPage,
      pageSize: this.page.pageSize,
      totalElements: this.page.totalElements,
      totalPages: this.page.totalPages,
      firstIcon: this.config.page.firstIcon,
      prevIcon: this.config.page.prevIcon || "«",
      nextIcon: this.config.page.nextIcon || "»",
      lastIcon: this.config.page.lastIcon
    };
    var navigationItemCount = this.config.page.navigationItemCount;

    page["@paging"] = function () {
      var returns = [],
          startI = void 0,
          endI = void 0;

      startI = page.currentPage - Math.floor(navigationItemCount / 2);
      if (startI < 0) startI = 0;
      endI = page.currentPage + navigationItemCount;
      if (endI > page.totalPages) endI = page.totalPages;

      if (endI - startI > navigationItemCount) {
        endI = startI + navigationItemCount;
      }

      if (endI - startI < navigationItemCount) {
        startI = endI - navigationItemCount;
      }
      if (startI < 0) startI = 0;

      for (var p = startI, l = endI; p < l; p++) {
        returns.push({ 'pageNo': p + 1, 'selected': page.currentPage == p });
      }
      return returns;
    }();

    if (page["@paging"].length > 0) {
      page.hasPage = true;
    }

    this.$["page"]["navigation"].html(_AX6Mustache2.default.render(this.__tmpl.page_navigation.call(this), page));
    this.$["page"]["navigation"].find("[data-ax6grid-page-move]").on("click", function () {
      onclickPageMove.call(self, this.getAttribute("data-ax6grid-page-move"));
    });
  } else {
    this.$["page"]["navigation"].empty();
  }
};

var statusUpdate = function statusUpdate() {
  if (!this.config.page.statusDisplay) {
    return;
  }

  var toRowIndex = void 0,
      rangeCount = Math.min(this.xvar.dataRowCount, this.xvar.virtualPaintRowCount);
  var data = {};

  toRowIndex = this.xvar.virtualPaintStartRowIndex + rangeCount;

  if (toRowIndex > this.xvar.dataRowCount) {
    toRowIndex = this.xvar.dataRowCount;
  }

  data.fromRowIndex = _AX6Util2.default.number(this.xvar.virtualPaintStartRowIndex + 1, { "money": true });
  data.toRowIndex = _AX6Util2.default.number(toRowIndex, { "money": true });
  data.totalElements = false;
  data.dataRealRowCount = this.xvar.dataRowCount !== this.xvar.dataRealRowCount ? _AX6Util2.default.number(this.xvar.dataRealRowCount, { "money": true }) : false;
  data.dataRowCount = _AX6Util2.default.number(this.xvar.dataRowCount, { "money": true });
  data.progress = this.appendProgress ? this.config.appendProgressIcon : "";

  if (this.page) {
    data.fromRowIndex_page = _AX6Util2.default.number(this.xvar.virtualPaintStartRowIndex + this.page.currentPage * this.page.pageSize + 1, { "money": true });
    data.toRowIndex_page = _AX6Util2.default.number(this.xvar.virtualPaintStartRowIndex + rangeCount + this.page.currentPage * this.page.pageSize, { "money": true });
    data.totalElements = _AX6Util2.default.number(this.page.totalElements, { "money": true });

    if (data.toRowIndex_page > this.page.totalElements) {
      data.toRowIndex_page = this.page.totalElements;
    }
  }

  this.$["page"]["status"].html(_AX6Mustache2.default.render(this.__tmpl.page_status.call(this), data));
};

exports.default = {
  navigationUpdate: navigationUpdate,
  statusUpdate: statusUpdate
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jqmin = __webpack_require__(1);

var _jqmin2 = _interopRequireDefault(_jqmin);

var _AX6Util = __webpack_require__(4);

var _AX6Util2 = _interopRequireDefault(_AX6Util);

var _AX6UIGrid_util = __webpack_require__(65);

var _AX6UIGrid_util2 = _interopRequireDefault(_AX6UIGrid_util);

var _AX6UIGrid_body = __webpack_require__(66);

var _AX6UIGrid_body2 = _interopRequireDefault(_AX6UIGrid_body);

var _AX6UIGrid_data = __webpack_require__(81);

var _AX6UIGrid_data2 = _interopRequireDefault(_AX6UIGrid_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var columnResizerEvent = {
  "on": function on(_columnResizer, _colIndex) {
    var self = this;
    var $columnResizer = $(_columnResizer);
    var columnResizerPositionLeft = $columnResizer.offset().left;
    var gridTargetOffsetLeft = self.$["container"]["root"].offset().left;
    self.xvar.columnResizerIndex = _colIndex;
    var resizeRange = {
      min: -self.colGroup[_colIndex]._width + 2,
      max: self.$["container"]["root"].width() - self.colGroup[_colIndex]._width
    };

    (0, _jqmin2.default)(document.body).on(_AX6UIGrid_util2.default.ENM["mousemove"] + ".ax5grid-" + this.instanceId, function (e) {
      var mouseObj = _AX6UIGrid_util2.default.getMousePosition(e);
      self.xvar.__da = mouseObj.clientX - self.xvar.mousePosition.clientX;

      if (resizeRange.min > self.xvar.__da) {
        self.xvar.__da = resizeRange.min;
      } else if (resizeRange.max < self.xvar.__da) {
        self.xvar.__da = resizeRange.max;
      }

      if (!self.xvar.columnResizerLived) {
        self.$["resizer"]["horizontal"].addClass("live");
      }
      self.xvar.columnResizerLived = true;
      self.$["resizer"]["horizontal"].css({
        left: columnResizerPositionLeft + self.xvar.__da - gridTargetOffsetLeft
      });
    }).on(_AX6UIGrid_util2.default.ENM["mouseup"] + ".ax5grid-" + this.instanceId, function (e) {
      columnResizerEvent.off.call(self);
      _AX6Util2.default.stopEvent(e);
    }).on("mouseleave.ax5grid-" + this.instanceId, function (e) {
      columnResizerEvent.off.call(self);
      _AX6Util2.default.stopEvent(e);
    });

    (0, _jqmin2.default)(document.body).attr('unselectable', 'on').css('user-select', 'none').on('selectstart', false);
  },
  "off": function off() {
    this.$["resizer"]["horizontal"].removeClass("live");
    this.xvar.columnResizerLived = false;

    if (typeof this.xvar.__da === "undefined") {} else {
      this.setColumnWidth(this.colGroup[this.xvar.columnResizerIndex]._width + this.xvar.__da, this.xvar.columnResizerIndex);
    }

    (0, _jqmin2.default)(document.body).off(_AX6UIGrid_util2.default.ENM["mousemove"] + ".ax5grid-" + this.instanceId).off(_AX6UIGrid_util2.default.ENM["mouseup"] + ".ax5grid-" + this.instanceId).off("mouseleave.ax5grid-" + this.instanceId);

    (0, _jqmin2.default)(document.body).removeAttr('unselectable').css('user-select', 'auto').off('selectstart');
  }
};

var init = function init() {
  // 헤더 초기화
  var self = this;

  this.$["container"]["header"].on("click", '[data-ax6grid-column-attr]', function (e) {
    var key = this.getAttribute("data-ax6grid-column-key"),
        colIndex = this.getAttribute("data-ax6grid-column-colindex"),

    //rowIndex = this.getAttribute("data-ax6grid-column-rowindex"),
    col = self.colGroup[colIndex];

    if (key === "__checkbox_header__") {
      var selected = this.getAttribute("data-ax6grid-selected");
      selected = _AX6Util2.default.isNothing(selected) ? true : selected !== "true";

      $(this).attr("data-ax6grid-selected", selected);
      self.selectAll({ selected: selected });

      selected = null;
    } else {
      if (key && col && col.sortable !== false && !col.sortFixed) {
        if (col.sortable === true || self.config.sortable === true) {
          toggleSort.call(self, col.key);
        }
      }
    }

    _AX6UIGrid_body2.default.blur.call(self);

    key = null;
    colIndex = null;
    col = null;
  });
  this.$["container"]["header"].on("mousedown", '[data-ax6grid-column-resizer]', function (e) {
    var colIndex = this.getAttribute("data-ax6grid-column-resizer");

    self.xvar.mousePosition = _AX6UIGrid_util2.default.getMousePosition(e);
    columnResizerEvent.on.call(self, this, Number(colIndex));
    _AX6Util2.default.stopEvent(e);

    colIndex = null;
  }).on("dragstart", function (e) {
    _AX6Util2.default.stopEvent(e);
    return false;
  });

  resetFrozenColumn.call(this);
};

var resetFrozenColumn = function resetFrozenColumn() {
  var cfg = this.config,
      dividedHeaderObj = _AX6UIGrid_util2.default.divideTableByFrozenColumnIndex(this.headerTable, this.xvar.frozenColumnIndex);

  this.asideHeaderData = function (dataTable) {
    var colGroup = [];
    var data = { rows: [] };
    for (var i = 0, l = dataTable.rows.length; i < l; i++) {
      data.rows[i] = { cols: [] };
      if (i === 0) {
        var col = {
          label: "",
          colspan: 1,
          rowspan: dataTable.rows.length,
          colIndex: null
        },
            _col = {};

        if (cfg.showLineNumber) {
          _col = _jqmin2.default.extend({}, col, {
            width: cfg.lineNumberColumnWidth,
            _width: cfg.lineNumberColumnWidth,
            columnAttr: "lineNumber",
            key: "__index_header__", label: "&nbsp;"
          });
          colGroup.push(_col);
          data.rows[i].cols.push(_col);
        }
        if (cfg.showRowSelector) {
          _col = _jqmin2.default.extend({}, col, {
            width: cfg.rowSelectorColumnWidth,
            _width: cfg.rowSelectorColumnWidth,
            columnAttr: "rowSelector",
            key: "__checkbox_header__", label: ""
          });
          colGroup.push(_col);
          data.rows[i].cols.push(_col);
        }

        col = null;
      }
    }

    this.asideColGroup = colGroup;
    return data;
  }.call(this, this.headerTable);

  this.leftHeaderData = dividedHeaderObj.leftData;
  this.headerData = dividedHeaderObj.rightData;
};

var getFieldValue = function getFieldValue(_col) {
  return _col.key === "__checkbox_header__" ? "<div class=\"checkBox\" style=\"max-height: " + (_col.width - 10) + "px;min-height: " + (_col.width - 10) + "px;\"></div>" : _col.label || "&nbsp;";
};

var repaint = function repaint(_reset) {
  var cfg = this.config,
      colGroup = this.colGroup;

  if (_reset) {
    resetFrozenColumn.call(this);
    this.xvar.paintStartRowIndex = undefined;
    this.xvar.virtualPaintStartRowIndex = undefined; // 스크롤 포지션 저장변수 초기화
  }
  var asideHeaderData = this.asideHeaderData,
      leftHeaderData = this.leftHeaderData,
      headerData = this.headerData,
      headerAlign = cfg.header.align;

  // this.asideColGroup : asideHeaderData에서 처리 함.
  this.leftHeaderColGroup = colGroup.slice(0, this.config.frozenColumnIndex);
  this.headerColGroup = colGroup.slice(this.config.frozenColumnIndex);

  var repaintHeader = function repaintHeader(_elTarget, _colGroup, _bodyRow) {
    var tableWidth = 0,
        SS = [];
    SS.push('<table border="0" cellpadding="0" cellspacing="0">');
    SS.push('<colgroup>');
    for (var cgi = 0, cgl = _colGroup.length; cgi < cgl; cgi++) {
      SS.push('<col style="width:' + _colGroup[cgi]._width + 'px;"  />');
      tableWidth += _colGroup[cgi]._width;
    }
    SS.push('<col  />');
    SS.push('</colgroup>');

    for (var tri = 0, trl = _bodyRow.rows.length; tri < trl; tri++) {
      var trCSS_class = "";
      SS.push('<tr class="' + trCSS_class + '">');
      for (var ci = 0, cl = _bodyRow.rows[tri].cols.length; ci < cl; ci++) {
        var col = _bodyRow.rows[tri].cols[ci];
        var cellHeight = cfg.header.columnHeight * col.rowspan - cfg.header.columnBorderWidth;
        var colAlign = headerAlign || col.align;
        SS.push('<td ', 'data-ax6grid-column-attr="' + (col.columnAttr || "default") + '" ', 'data-ax6grid-column-row="' + tri + '" ', 'data-ax6grid-column-col="' + ci + '" ', function () {
          return typeof col.key !== "undefined" ? 'data-ax6grid-column-key="' + col.key + '" ' : '';
        }(), 'data-ax6grid-column-colindex="' + col.colIndex + '" ', 'data-ax6grid-column-rowindex="' + col.rowIndex + '" ', 'colspan="' + col.colspan + '" ', 'rowspan="' + col.rowspan + '" ', 'class="' + function (_col) {
          var tdCSS_class = "";
          if (_col.headerStyleClass) {
            if (_AX6Util2.default.isFunction(_col.headerStyleClass)) {
              tdCSS_class += _col.headerStyleClass.call({
                column: _col,
                key: _col.key
              }) + " ";
            } else {
              tdCSS_class += _col.headerStyleClass + " ";
            }
          }
          if (cfg.header.columnBorderWidth) tdCSS_class += "hasBorder ";
          if (ci == cl - 1) tdCSS_class += "isLastColumn ";
          return tdCSS_class;
        }.call(this, col) + '" ', 'style="height: ' + cellHeight + 'px;min-height: 1px;">');

        SS.push(function () {
          var lineHeight = cfg.header.columnHeight - cfg.header.columnPadding * 2 - cfg.header.columnBorderWidth;
          return '<span data-ax6grid-cellHolder="" ' + (colAlign ? 'data-ax6grid-text-align="' + colAlign + '"' : '') + ' style="height: ' + (cfg.header.columnHeight - cfg.header.columnBorderWidth) + 'px;line-height: ' + lineHeight + 'px;">';
        }(), function () {
          var _SS = "";

          if (!_AX6Util2.default.isNothing(col.key) && !_AX6Util2.default.isNothing(col.colIndex) && (cfg.sortable === true || col.sortable === true) && col.sortable !== false) {
            _SS += '<span data-ax6grid-column-sort="' + col.colIndex + '" data-ax6grid-column-sort-order="' + (colGroup[col.colIndex].sort || "") + '" />';
          }
          return _SS;
        }(), getFieldValue.call(this, col), '</span>');

        if (!_AX6Util2.default.isNothing(col.colIndex)) {
          if (cfg.enableFilter) {
            SS.push('<span data-ax6grid-column-filter="' + col.colIndex + '" data-ax6grid-column-filter-value=""  />');
          }
        }

        SS.push('</td>');
      }
      SS.push('<td ', 'data-ax6grid-column-row="null" ', 'data-ax6grid-column-col="null" ', 'style="height: ' + cfg.header.columnHeight + 'px;min-height: 1px;" ', '></td>');
      SS.push('</tr>');
    }
    SS.push('</table>');
    _elTarget.html(SS.join(''));

    /// append column-resizer
    (function () {
      var resizerHeight = cfg.header.columnHeight * _bodyRow.rows.length - cfg.header.columnBorderWidth,
          resizerLeft = 0,
          AS = [];

      for (var cgi = 0, cgl = _colGroup.length; cgi < cgl; cgi++) {
        var col = _colGroup[cgi];
        if (!_AX6Util2.default.isNothing(col.colIndex)) {
          //_colGroup[cgi]._width
          resizerLeft += col._width;
          AS.push('<div data-ax6grid-column-resizer="' + col.colIndex + '" style="height:' + resizerHeight + 'px;left: ' + (resizerLeft - 4) + 'px;"  />');
        }
      }
      _elTarget.append(AS);
    }).call(this);

    return tableWidth;
  };

  if (cfg.asidePanelWidth > 0) {
    repaintHeader.call(this, this.$.panel["aside-header"], this.asideColGroup, asideHeaderData);
  }
  if (cfg.frozenColumnIndex > 0) {
    repaintHeader.call(this, this.$.panel["left-header"], this.leftHeaderColGroup, leftHeaderData);
  }
  this.xvar.scrollContentWidth = repaintHeader.call(this, this.$.panel["header-scroll"], this.headerColGroup, headerData);

  if (cfg.rightSum) {}
};

var scrollTo = function scrollTo(css) {
  this.$.panel["header-scroll"].css(css);
  return this;
};

var toggleSort = function toggleSort(_key) {
  var sortOrder = "",
      sortInfo = {},
      seq = 0;

  for (var k in this.sortInfo) {
    if (this.sortInfo[k].fixed) {
      sortInfo[k] = this.sortInfo[k];
      seq++;
    }
  }

  for (var i = 0, l = this.colGroup.length; i < l; i++) {
    if (this.colGroup[i].key == _key) {
      if (sortOrder == "") {
        if (typeof this.colGroup[i].sort === "undefined") {
          sortOrder = "desc";
        } else if (this.colGroup[i].sort === "desc") {
          sortOrder = "asc";
        } else {
          sortOrder = undefined;
        }
      }
      this.colGroup[i].sort = sortOrder;
    } else if (!this.config.multiSort) {
      this.colGroup[i].sort = undefined;
    }

    if (typeof this.colGroup[i].sort !== "undefined") {
      if (!sortInfo[this.colGroup[i].key]) {
        sortInfo[this.colGroup[i].key] = {
          seq: seq++,
          orderBy: this.colGroup[i].sort
        };
      }
    }
  }

  this.setColumnSort(sortInfo);
  return this;
};

var applySortStatus = function applySortStatus(_sortInfo) {
  for (var i = 0, l = this.colGroup.length; i < l; i++) {
    for (var _key in _sortInfo) {
      if (this.colGroup[i].key == _key) {
        this.colGroup[i].sort = _sortInfo[_key].orderBy;
      }
    }
  }
  return this;
};

var select = function select(_options) {
  _AX6UIGrid_data2.default.select.call(this, dindex, _options && _options.selected);
  _AX6UIGrid_body2.default.updateRowState.call(this, ["selected"], dindex);
};

var getExcelString = function getExcelString() {
  var cfg = this.config,
      colGroup = this.colGroup,
      headerData = this.headerTable,
      getHeader = function getHeader(_colGroup, _bodyRow) {
    var SS = [];
    //SS.push('<table border="1">');
    for (var tri = 0, trl = _bodyRow.rows.length; tri < trl; tri++) {
      SS.push('<tr>');
      for (var ci = 0, cl = _bodyRow.rows[tri].cols.length; ci < cl; ci++) {
        var col = _bodyRow.rows[tri].cols[ci];
        SS.push('<td ', 'colspan="' + col.colspan + '" ', 'rowspan="' + col.rowspan + '" ', '>', getFieldValue.call(this, col), '</td>');
      }
      SS.push('</tr>');
    }
    //SS.push('</table>');

    return SS.join('');
  };

  return getHeader.call(this, colGroup, headerData);
};

exports.default = {
  init: init,
  repaint: repaint,
  scrollTo: scrollTo,
  toggleSort: toggleSort,
  applySortStatus: applySortStatus,
  getExcelString: getExcelString
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jqmin = __webpack_require__(1);

var _jqmin2 = _interopRequireDefault(_jqmin);

var _AX6Util = __webpack_require__(4);

var _AX6Util2 = _interopRequireDefault(_AX6Util);

var _AX6Info = __webpack_require__(3);

var _AX6Info2 = _interopRequireDefault(_AX6Info);

var _AX6UIGrid_util = __webpack_require__(65);

var _AX6UIGrid_util2 = _interopRequireDefault(_AX6UIGrid_util);

var _AX6UIGrid_header = __webpack_require__(83);

var _AX6UIGrid_header2 = _interopRequireDefault(_AX6UIGrid_header);

var _AX6UIGrid_body = __webpack_require__(66);

var _AX6UIGrid_body2 = _interopRequireDefault(_AX6UIGrid_body);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moveout_timer = new Date().getTime();

var convertScrollPosition = {
  "vertical": function vertical(css, _var) {
    var _content_height = _var._content_height - _var._panel_height,
        _scroller_height = _var._vertical_scroller_height - _var.verticalScrollBarHeight,
        top = _content_height * css.top / _scroller_height;

    if (top < 0) top = 0;else if (_content_height < top) {
      top = _content_height;
    }
    return {
      top: -top
    };
  },
  "horizontal": function horizontal(css, _var) {
    var _content_width = _var._content_width - _var._panel_width,
        _scroller_width = _var._horizontal_scroller_width - _var.horizontalScrollBarWidth,
        left = _content_width * css.left / _scroller_width;

    if (left < 0) left = 0;else if (_content_width < left) {
      left = _content_width;
    }
    return {
      left: -left
    };
  }
};

var convertScrollBarPosition = {
  "vertical": function vertical(_top, _var) {

    var self = this,
        type = "vertical",
        _content_height = _var._content_height - _var._panel_height,
        _scroller_height = _var._vertical_scroller_height - _var.verticalScrollBarHeight,
        top = _scroller_height * _top / _content_height,
        scrollPositon = void 0;

    if (-top > _scroller_height) {
      top = -_scroller_height;

      scrollPositon = convertScrollPosition[type].call(this, { top: -top }, {
        _content_width: _var._content_width,
        _content_height: _var._content_height,
        _panel_width: _var._panel_width,
        _panel_height: _var._panel_height,
        _horizontal_scroller_width: _var._horizontal_scroller_width,
        _vertical_scroller_height: _var._vertical_scroller_height,
        verticalScrollBarHeight: _var.verticalScrollBarHeight,
        horizontalScrollBarWidth: _var.horizontalScrollBarWidth
      });

      _AX6UIGrid_body2.default.scrollTo.call(self, scrollPositon);
    }

    return -top;
  },
  "horizontal": function horizontal(_left, _var) {
    var self = this,
        type = "horizontal",
        _content_width = _var._content_width - _var._panel_width,
        _scroller_width = _var._horizontal_scroller_width - _var.horizontalScrollBarWidth,
        left = _scroller_width * _left / _content_width,
        scrollPositon = void 0;

    if (-left > _scroller_width) {
      left = -_scroller_width;
      scrollPositon = convertScrollPosition[type].call(this, { left: -left }, {
        _content_width: _var._content_width,
        _content_height: _var._content_height,
        _panel_width: _var._panel_width,
        _panel_height: _var._panel_height,
        _horizontal_scroller_width: _var._horizontal_scroller_width,
        _vertical_scroller_height: _var._vertical_scroller_height,
        verticalScrollBarHeight: _var.verticalScrollBarHeight,
        horizontalScrollBarWidth: _var.horizontalScrollBarWidth
      });

      _AX6UIGrid_header2.default.scrollTo.call(self, scrollPositon);
      _AX6UIGrid_body2.default.scrollTo.call(self, scrollPositon);
    }

    return -left;
  }
};

var scrollBarMover = {
  "click": function click(track, bar, type, e) {

    // 마우스 무브 완료 타임과 클릭타임 차이가 20 보다 작으면 클릭이벤트 막기.
    if (new Date().getTime() - moveout_timer < 20) {
      return false;
    }

    var self = this,
        trackOffset = track.offset(),
        barBox = {
      width: bar.outerWidth(), height: bar.outerHeight()
    },
        trackBox = {
      width: track.innerWidth(), height: track.innerHeight()
    },
        _vertical_scroller_height = self.$["scroller"]["vertical"].innerHeight(),
        _panel_height = self.$["panel"]["body"].height(),
        _horizontal_scroller_width = self.$["scroller"]["horizontal"].innerWidth(),
        _panel_width = self.$["panel"]["body"].width(),
        _content_height = self.xvar.scrollContentHeight,
        _content_width = self.xvar.scrollContentWidth,
        verticalScrollBarHeight = self.$["scroller"]["vertical-bar"].outerHeight(),
        horizontalScrollBarWidth = self.$["scroller"]["horizontal-bar"].outerWidth(),
        getScrollerPosition = {
      "vertical": function vertical(e) {
        var mouseObj = _AX6UIGrid_util2.default.getMousePosition(e);
        // track을 벗어 나지 안도록 범위 체크
        var newTop = mouseObj.clientY - trackOffset.top;
        if (newTop < 0) {
          newTop = 0;
        } else if (newTop + barBox.height > trackBox.height) {
          newTop = trackBox.height - barBox.height;
        }
        return { top: newTop };
      },
      "horizontal": function horizontal(e) {
        var mouseObj = _AX6UIGrid_util2.default.getMousePosition(e);
        // track을 벗어 나지 안도록 범위 체크
        var newLeft = mouseObj.clientX - trackOffset.left;
        if (newLeft < 0) {
          newLeft = 0;
        } else if (newLeft + barBox.width > trackBox.width) {
          newLeft = trackBox.width - barBox.width;
        }
        return { left: newLeft };
      }
    },
        css = getScrollerPosition[type](e);

    bar.css(css);

    var scrollPositon = convertScrollPosition[type].call(self, css, {
      _content_width: _content_width,
      _content_height: _content_height,
      _panel_width: _panel_width,
      _panel_height: _panel_height,
      _horizontal_scroller_width: _horizontal_scroller_width,
      _vertical_scroller_height: _vertical_scroller_height,
      verticalScrollBarHeight: verticalScrollBarHeight,
      horizontalScrollBarWidth: horizontalScrollBarWidth
    });
    if (type === "horizontal") _AX6UIGrid_header2.default.scrollTo.call(self, scrollPositon);
    _AX6UIGrid_body2.default.scrollTo.call(self, scrollPositon);

    scrollPositon = null;
  },
  "on": function on(track, bar, type, e) {
    var self = this,
        barOffset = bar.position(),
        barBox = {
      width: bar.outerWidth(), height: bar.outerHeight()
    },
        trackBox = {
      width: track.innerWidth(), height: track.innerHeight()
    },
        _vertical_scroller_height = self.$["scroller"]["vertical"].innerHeight(),
        _panel_height = self.$["panel"]["body"].height(),
        _horizontal_scroller_width = self.$["scroller"]["horizontal"].innerWidth(),
        _panel_width = self.$["panel"]["body"].width(),
        _content_height = self.xvar.scrollContentHeight,
        _content_width = self.xvar.scrollContentWidth,
        verticalScrollBarHeight = self.$["scroller"]["vertical-bar"].outerHeight(),
        horizontalScrollBarWidth = self.$["scroller"]["horizontal-bar"].outerWidth(),
        getScrollerPosition = {
      "vertical": function vertical(e) {
        var mouseObj = _AX6UIGrid_util2.default.getMousePosition(e);
        self.xvar.__da = mouseObj.clientY - self.xvar.mousePosition.clientY;
        // track을 벗어 나지 안도록 범위 체크
        var newTop = barOffset.top + self.xvar.__da;
        if (newTop < 0) {
          newTop = 0;
        } else if (newTop + barBox.height > trackBox.height) {
          newTop = trackBox.height - barBox.height;
        }
        return { top: newTop };
      },
      "horizontal": function horizontal(e) {
        var mouseObj = _AX6UIGrid_util2.default.getMousePosition(e);
        self.xvar.__da = mouseObj.clientX - self.xvar.mousePosition.clientX;
        // track을 벗어 나지 안도록 범위 체크
        var newLeft = barOffset.left + self.xvar.__da;
        if (newLeft < 0) {
          newLeft = 0;
        } else if (newLeft + barBox.width > trackBox.width) {
          newLeft = trackBox.width - barBox.width;
        }
        return { left: newLeft };
      }
    };

    self.xvar.__da = 0; // 이동량 변수 초기화 (계산이 잘못 될까바)

    (0, _jqmin2.default)(document.body).on(_AX6UIGrid_util2.default.ENM["mousemove"] + ".ax6grid-" + this.instanceId, function (e) {
      var css = getScrollerPosition[type](e);
      bar.css(css);

      var scrollPositon = convertScrollPosition[type].call(self, css, {
        _content_width: _content_width,
        _content_height: _content_height,
        _panel_width: _panel_width,
        _panel_height: _panel_height,
        _horizontal_scroller_width: _horizontal_scroller_width,
        _vertical_scroller_height: _vertical_scroller_height,
        verticalScrollBarHeight: verticalScrollBarHeight,
        horizontalScrollBarWidth: horizontalScrollBarWidth
      });

      if (type === "horizontal") _AX6UIGrid_header2.default.scrollTo.call(self, scrollPositon);

      _AX6UIGrid_body2.default.scrollTo.call(self, scrollPositon);
    }).on(_AX6UIGrid_util2.default.ENM["mouseup"] + ".ax6grid-" + this.instanceId, function (e) {
      scrollBarMover.off.call(self);
    }).on("mouseleave.ax6grid-" + this.instanceId, function (e) {
      scrollBarMover.off.call(self);
    });

    (0, _jqmin2.default)(document.body).attr('unselectable', 'on').css('user-select', 'none').on('selectstart', false);
  },
  "off": function off() {
    moveout_timer = new Date().getTime();

    (0, _jqmin2.default)(document.body).off(_AX6UIGrid_util2.default.ENM["mousemove"] + ".ax6grid-" + this.instanceId).off(_AX6UIGrid_util2.default.ENM["mouseup"] + ".ax6grid-" + this.instanceId).off("mouseleave.ax6grid-" + this.instanceId);

    (0, _jqmin2.default)(document.body).removeAttr('unselectable').css('user-select', 'auto').off('selectstart');
  }
};

var scrollContentMover = {
  "wheel": function wheel(delta) {
    var self = this,
        _body_scroll_position = self.$["panel"]["body-scroll"].position(),
        _panel_height = self.xvar.body_panel_height,
        _panel_width = self.xvar.body_panel_width,
        _content_height = self.xvar.scrollContentHeight,
        _content_width = self.xvar.scrollContentWidth;

    if (isNaN(_content_height) || isNaN(_content_width)) {
      return false;
    }

    var newLeft = void 0,
        newTop = void 0,
        _top_is_end = false,
        _left_is_end = false;

    newLeft = _body_scroll_position.left - delta.x;
    newTop = _body_scroll_position.top - delta.y;

    // newTop이 범위를 넘었는지 체크
    if (newTop >= 0) {
      newTop = 0;
      _top_is_end = true;
    } else if (newTop <= _panel_height - _content_height) {
      newTop = _panel_height - _content_height;
      if (newTop >= 0) newTop = 0;
      _top_is_end = true;
    } else {
      if (delta.y == 0) _top_is_end = true;
    }

    // newLeft이 범위를 넘었는지 체크
    if (newLeft >= 0) {
      newLeft = 0;
      _left_is_end = true;
    } else if (newLeft <= _panel_width - _content_width) {
      newLeft = _panel_width - _content_width;
      if (newLeft >= 0) newLeft = 0;
      _left_is_end = true;
    } else {
      if (delta.x == 0) _left_is_end = true;
    }

    _AX6UIGrid_header2.default.scrollTo.call(self, { left: newLeft });
    _AX6UIGrid_body2.default.scrollTo.call(self, { left: newLeft, top: newTop }, {
      callback: function callback() {
        resize.call(self);
      }
    });

    return !_top_is_end || !_left_is_end;
  },
  "on": function on() {
    var self = this,
        _body_scroll_position = self.$["panel"]["body-scroll"].position(),
        _panel_height = self.xvar.body_panel_height,
        _panel_width = self.xvar.body_panel_width,
        _content_height = self.xvar.scrollContentHeight,
        _content_width = self.xvar.scrollContentWidth,
        getContentPosition = function getContentPosition(e) {
      var mouseObj = _AX6UIGrid_util2.default.getMousePosition(e),
          newLeft = void 0,
          newTop = void 0;

      self.xvar.__x_da = mouseObj.clientX - self.xvar.mousePosition.clientX;
      self.xvar.__y_da = mouseObj.clientY - self.xvar.mousePosition.clientY;

      newLeft = _body_scroll_position.left + self.xvar.__x_da;
      newTop = _body_scroll_position.top + self.xvar.__y_da;

      // newTop이 범위를 넘었는지 체크
      if (newTop >= 0) {
        newTop = 0;
      } else if (newTop <= _panel_height - _content_height) {
        newTop = _panel_height - _content_height;
        if (newTop >= 0) newTop = 0;
      }

      // newLeft이 범위를 넘었는지 체크
      if (newLeft >= 0) {
        newLeft = 0;
      } else if (newLeft <= _panel_width - _content_width) {
        newLeft = _panel_width - _content_width;
        if (newLeft >= 0) newLeft = 0;
      }

      return {
        left: newLeft, top: newTop
      };
    };

    this.xvar.__x_da = 0; // 이동량 변수 초기화
    this.xvar.__y_da = 0; // 계산이 잘못 될까바
    this.xvar.touchmoved = false;

    (0, _jqmin2.default)(document.body).on("touchmove" + ".ax6grid-" + this.instanceId, function (e) {
      var css = getContentPosition(e);

      resize.call(self);
      _AX6UIGrid_header2.default.scrollTo.call(self, { left: css.left });
      _AX6UIGrid_body2.default.scrollTo.call(self, css, { noRepaint: "noRepaint" });
      _AX6Util2.default.stopEvent(e.originalEvent);
      self.xvar.touchmoved = true;
    }).on("touchend" + ".ax6grid-" + this.instanceId, function (e) {
      if (self.xvar.touchmoved) {
        var css = getContentPosition(e);

        resize.call(self);
        _AX6UIGrid_header2.default.scrollTo.call(self, { left: css.left });
        _AX6UIGrid_body2.default.scrollTo.call(self, css);
        _AX6Util2.default.stopEvent(e.originalEvent);
        scrollContentMover.off.call(self);
      }
    });

    (0, _jqmin2.default)(document.body).attr('unselectable', 'on').css('user-select', 'none').on('selectstart', false);
  },
  "off": function off() {

    (0, _jqmin2.default)(document.body).off("touchmove" + ".ax6grid-" + this.instanceId).off("touchend" + ".ax6grid-" + this.instanceId);

    (0, _jqmin2.default)(document.body).removeAttr('unselectable').css('user-select', 'auto').off('selectstart');
  }
};

var init = function init() {
  var self = this,
      margin = this.config.scroller.trackPadding;

  if (margin == 0) {
    this.$["scroller"]["vertical-bar"].css({ width: this.config.scroller.size, left: -1 });
    this.$["scroller"]["horizontal-bar"].css({ height: this.config.scroller.size, top: -1 });
  } else {
    this.$["scroller"]["vertical-bar"].css({ width: this.config.scroller.size - (margin + 1), left: margin / 2 });
    this.$["scroller"]["horizontal-bar"].css({ height: this.config.scroller.size - (margin + 1), top: margin / 2 });
  }

  this.$["scroller"]["vertical-bar"].on(_AX6UIGrid_util2.default.ENM["mousedown"], function (e) {
    this.xvar.mousePosition = _AX6UIGrid_util2.default.getMousePosition(e);
    scrollBarMover.on.call(this, this.$["scroller"]["vertical"], this.$["scroller"]["vertical-bar"], "vertical", e);
  }.bind(this)).on("dragstart", function (e) {
    _AX6Util2.default.stopEvent(e);
    return false;
  });

  this.$["scroller"]["vertical"].on("click", function (e) {
    if (e.target.getAttribute("data-ax6grid-scroller") == "vertical") {
      scrollBarMover.click.call(this, this.$["scroller"]["vertical"], this.$["scroller"]["vertical-bar"], "vertical", e);
    }
  }.bind(this));

  this.$["scroller"]["horizontal-bar"].on(_AX6UIGrid_util2.default.ENM["mousedown"], function (e) {
    this.xvar.mousePosition = _AX6UIGrid_util2.default.getMousePosition(e);
    scrollBarMover.on.call(this, this.$["scroller"]["horizontal"], this.$["scroller"]["horizontal-bar"], "horizontal", e);
  }.bind(this)).on("dragstart", function (e) {
    _AX6Util2.default.stopEvent(e);
    return false;
  });

  this.$["scroller"]["horizontal"].on("click", function (e) {
    if (e.target.getAttribute("data-ax6grid-scroller") == "horizontal") {
      scrollBarMover.click.call(this, this.$["scroller"]["horizontal"], this.$["scroller"]["horizontal-bar"], "horizontal", e);
    }
  }.bind(this));

  this.$["container"]["body"].on('mousewheel DOMMouseScroll', function (e) {
    var E = e.originalEvent,
        delta = { x: 0, y: 0 };

    if (E.detail) {
      delta.y = E.detail * 10;
    } else {
      if (typeof E.deltaY === "undefined") {
        delta.y = -E.wheelDelta;
        delta.x = 0;
      } else {
        delta.y = E.deltaY;
        delta.x = E.deltaX;
      }
    }

    if (scrollContentMover.wheel.call(this, delta)) {
      _AX6Util2.default.stopEvent(e);
    }
  }.bind(this));

  if (_AX6Info2.default.supportTouch) {
    this.$["container"]["body"].on("touchstart", '[data-ax6grid-panel]', function (e) {
      self.xvar.mousePosition = _AX6UIGrid_util2.default.getMousePosition(e);
      scrollContentMover.on.call(self);
    });
  }

  this.xvar.body_panel_height = this.$["panel"]["body"].height();
  this.xvar.body_panel_width = this.$["panel"]["body"].width();
};

var resize = function resize() {
  var _vertical_scroller_height = this.$["scroller"]["vertical"].height(),
      _horizontal_scroller_width = this.$["scroller"]["horizontal"].width(),
      _panel_height = this.$["panel"]["body"].height(),
      _panel_width = this.$["panel"]["body"].width(),
      _content_height = this.xvar.scrollContentHeight,
      _content_width = this.xvar.scrollContentWidth,
      verticalScrollBarHeight = _panel_height * _vertical_scroller_height / _content_height,
      horizontalScrollBarWidth = _panel_width * _horizontal_scroller_width / _content_width;

  if (verticalScrollBarHeight < this.config.scroller.barMinSize) verticalScrollBarHeight = this.config.scroller.barMinSize;
  if (horizontalScrollBarWidth < this.config.scroller.barMinSize) horizontalScrollBarWidth = this.config.scroller.barMinSize;

  this.$["scroller"]["vertical-bar"].css({
    top: convertScrollBarPosition.vertical.call(this, this.$.panel["body-scroll"].position().top, {
      _content_width: _content_width,
      _content_height: _content_height,
      _panel_width: _panel_width,
      _panel_height: _panel_height,
      _horizontal_scroller_width: _horizontal_scroller_width,
      _vertical_scroller_height: _vertical_scroller_height,
      verticalScrollBarHeight: verticalScrollBarHeight,
      horizontalScrollBarWidth: horizontalScrollBarWidth
    }),
    height: verticalScrollBarHeight
  });

  this.$["scroller"]["horizontal-bar"].css({
    left: convertScrollBarPosition.horizontal.call(this, this.$.panel["body-scroll"].position().left, {
      _content_width: _content_width,
      _content_height: _content_height,
      _panel_width: _panel_width,
      _panel_height: _panel_height,
      _horizontal_scroller_width: _horizontal_scroller_width,
      _vertical_scroller_height: _vertical_scroller_height,
      verticalScrollBarHeight: verticalScrollBarHeight,
      horizontalScrollBarWidth: horizontalScrollBarWidth
    }),
    width: horizontalScrollBarWidth
  });

  this.xvar.body_panel_height = _panel_height;
  this.xvar.body_panel_width = _panel_width;

  _vertical_scroller_height = null;
  _horizontal_scroller_width = null;
  _panel_height = null;
  _panel_width = null;
  _content_height = null;
  _content_width = null;
  verticalScrollBarHeight = null;
  horizontalScrollBarWidth = null;
};

exports.default = {
  // 타이머
  moveout_timer: moveout_timer,
  init: init,
  resize: resize
};

/***/ }),
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jqmin = __webpack_require__(1);

var _jqmin2 = _interopRequireDefault(_jqmin);

var _AX6UICore2 = __webpack_require__(5);

var _AX6UICore3 = _interopRequireDefault(_AX6UICore2);

var _AX6Util = __webpack_require__(4);

var _AX6Util2 = _interopRequireDefault(_AX6Util);

var _AX6Info = __webpack_require__(3);

var _AX6Info2 = _interopRequireDefault(_AX6Info);

var _AX6Mustache = __webpack_require__(36);

var _AX6Mustache2 = _interopRequireDefault(_AX6Mustache);

var _AX6UIGrid_data = __webpack_require__(81);

var _AX6UIGrid_data2 = _interopRequireDefault(_AX6UIGrid_data);

var _AX6UIGrid_header = __webpack_require__(83);

var _AX6UIGrid_header2 = _interopRequireDefault(_AX6UIGrid_header);

var _AX6UIGrid_body = __webpack_require__(66);

var _AX6UIGrid_body2 = _interopRequireDefault(_AX6UIGrid_body);

var _AX6UIGrid_scroller = __webpack_require__(84);

var _AX6UIGrid_scroller2 = _interopRequireDefault(_AX6UIGrid_scroller);

var _AX6UIGrid_page = __webpack_require__(82);

var _AX6UIGrid_page2 = _interopRequireDefault(_AX6UIGrid_page);

var _AX6UIGrid_tmpl = __webpack_require__(102);

var _AX6UIGrid_tmpl2 = _interopRequireDefault(_AX6UIGrid_tmpl);

var _AX6UIGrid_util = __webpack_require__(65);

var _AX6UIGrid_util2 = _interopRequireDefault(_AX6UIGrid_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* ~~~~~~~~~~~~~~~~~~ end of import  ~~~~~~~~~~~~~~~~~~~~ */

var formatter = {};
var collector = {};
var ctrlKeys = {
  "33": "KEY_PAGEUP",
  "34": "KEY_PAGEDOWN",
  "35": "KEY_END",
  "36": "KEY_HOME",
  "37": "KEY_LEFT",
  "38": "KEY_UP",
  "39": "KEY_RIGHT",
  "40": "KEY_DOWN"
};
var tmpl = {};

var initGrid = function initGrid() {
  // 그리드 템플릿에 전달하고자 하는 데이터를 정리합시다.

  var data = {
    instanceId: this.id
  };

  this.$target.html(_AX6Mustache2.default.render(this.__tmpl.main.call(this), data));

  // 그리드 패널 프레임의 각 엘리먼트를 캐쉬합시다.
  this.$ = {
    "container": {
      "hidden": this.$target.find('[data-ax6grid-container="hidden"]'),
      "root": this.$target.find('[data-ax6grid-container="root"]'),
      "header": this.$target.find('[data-ax6grid-container="header"]'),
      "body": this.$target.find('[data-ax6grid-container="body"]'),
      "page": this.$target.find('[data-ax6grid-container="page"]'),
      "scroller": this.$target.find('[data-ax6grid-container="scroller"]')
    },
    "panel": {
      "aside-header": this.$target.find('[data-ax6grid-panel="aside-header"]'),
      "left-header": this.$target.find('[data-ax6grid-panel="left-header"]'),
      "header": this.$target.find('[data-ax6grid-panel="header"]'),
      "header-scroll": this.$target.find('[data-ax6grid-panel-scroll="header"]'),
      "right-header": this.$target.find('[data-ax6grid-panel="right-header"]'),
      "top-aside-body": this.$target.find('[data-ax6grid-panel="top-aside-body"]'),
      "top-left-body": this.$target.find('[data-ax6grid-panel="top-left-body"]'),
      "top-body": this.$target.find('[data-ax6grid-panel="top-body"]'),
      "top-body-scroll": this.$target.find('[data-ax6grid-panel-scroll="top-body"]'),
      "top-right-body": this.$target.find('[data-ax6grid-panel="top-right-body"]'),
      "aside-body": this.$target.find('[data-ax6grid-panel="aside-body"]'),
      "aside-body-scroll": this.$target.find('[data-ax6grid-panel-scroll="aside-body"]'),
      "left-body": this.$target.find('[data-ax6grid-panel="left-body"]'),
      "left-body-scroll": this.$target.find('[data-ax6grid-panel-scroll="left-body"]'),
      "body": this.$target.find('[data-ax6grid-panel="body"]'),
      "body-scroll": this.$target.find('[data-ax6grid-panel-scroll="body"]'),
      "right-body": this.$target.find('[data-ax6grid-panel="right-body"]'),
      "right-body-scroll": this.$target.find('[data-ax6grid-panel-scroll="right-body"]'),
      "bottom-aside-body": this.$target.find('[data-ax6grid-panel="bottom-aside-body"]'),
      "bottom-left-body": this.$target.find('[data-ax6grid-panel="bottom-left-body"]'),
      "bottom-body": this.$target.find('[data-ax6grid-panel="bottom-body"]'),
      "bottom-body-scroll": this.$target.find('[data-ax6grid-panel-scroll="bottom-body"]'),
      "bottom-right-body": this.$target.find('[data-ax6grid-panel="bottom-right-body"]')
    },
    "livePanelKeys": [], // 현재 사용중인 패널들 (grid-body repaint에서 수집하여 처리)
    "scroller": {
      "vertical": this.$target.find('[data-ax6grid-scroller="vertical"]'),
      "vertical-bar": this.$target.find('[data-ax6grid-scroller="vertical-bar"]'),
      "horizontal": this.$target.find('[data-ax6grid-scroller="horizontal"]'),
      "horizontal-bar": this.$target.find('[data-ax6grid-scroller="horizontal-bar"]'),
      "corner": this.$target.find('[data-ax6grid-scroller="corner"]')
    },
    "page": {
      "navigation": this.$target.find('[data-ax6grid-page="navigation"]'),
      "status": this.$target.find('[data-ax6grid-page="status"]')
    },
    "form": {
      "clipboard": this.$target.find('[data-ax6grid-form="clipboard"]')
    },
    "resizer": {
      "vertical": this.$target.find('[data-ax6grid-resizer="vertical"]'),
      "horizontal": this.$target.find('[data-ax6grid-resizer="horizontal"]')
    }
  };

  this.$["container"]["root"].css({ height: this.config.height || this.config._height });

  return this;
};
var initColumns = function initColumns(_columns) {
  if (!_AX6Util2.default.isArray(_columns)) _columns = [];
  this.columns = _AX6Util2.default.deepCopy(_columns);
  this.headerTable = _AX6UIGrid_util2.default.makeHeaderTable.call(this, this.columns);
  this.xvar.frozenColumnIndex = this.config.frozenColumnIndex || 0;

  this.bodyRowTable = _AX6UIGrid_util2.default.makeBodyRowTable.call(this, this.columns);
  this.bodyRowMap = _AX6UIGrid_util2.default.makeBodyRowMap.call(this, this.bodyRowTable);
  // 바디에 표현될 한줄의 높이를 계산합니다.
  this.xvar.bodyTrHeight = this.bodyRowTable.rows.length * this.config.body.columnHeight;

  var colGroupMap = {};
  for (var r = 0, rl = this.headerTable.rows.length; r < rl; r++) {
    var row = this.headerTable.rows[r];
    for (var c = 0, cl = row.cols.length; c < cl; c++) {
      colGroupMap[row.cols[c].colIndex] = _jqmin2.default.extend({}, row.cols[c]);
    }
  }

  this.colGroup = [];
  for (var k in colGroupMap) {
    this.colGroup.push(colGroupMap[k]);
  }

  return this;
};
var onResetColumns = function onResetColumns() {
  initColumns.call(this, this.config.columns);
  resetColGroupWidth.call(this);
  if (this.config.footSum) {
    initFootSum.call(this, this.config.footSum);
    this.needToPaintSum = true;
  }
  if (this.config.body.grouping) initBodyGroup.call(this, this.config.body.grouping);
  alignGrid.call(this, true);
  _AX6UIGrid_header2.default.repaint.call(this, true);
  _AX6UIGrid_body2.default.repaint.call(this, true);
  _AX6UIGrid_scroller2.default.resize.call(this);
};
var resetColGroupWidth = function resetColGroupWidth() {
  var _this = this;

  /// !! 그리드 target의 크기가 변경되면 이 함수를 호출하려 this.colGroup의 _width 값을 재 계산 하여야 함. [tom]
  var CT_WIDTH = this.$["container"]["root"].width() - function () {
    var width = 0;
    if (_this.config.showLineNumber) width += _this.config.lineNumberColumnWidth;
    if (_this.config.showRowSelector) width += _this.config.rowSelectorColumnWidth;
    width += _this.config.scroller.size;
    return width;
  }(),
      totalWidth = 0,
      computedWidth = void 0,
      autoWidthColgroupIndexs = [],
      colGroup = this.colGroup,
      i = void 0,
      l = void 0;

  for (i = 0, l = colGroup.length; i < l; i++) {
    if (_AX6Util2.default.isNumber(colGroup[i].width)) {
      totalWidth += colGroup[i]._width = colGroup[i].width;
    } else if (colGroup[i].width === "*") {
      autoWidthColgroupIndexs.push(i);
    } else if (_AX6Util2.default.right(colGroup[i].width, 1) === "%") {
      totalWidth += colGroup[i]._width = CT_WIDTH * _AX6Util2.default.left(colGroup[i].width, "%") / 100;
    }
  }
  if (autoWidthColgroupIndexs.length > 0) {
    computedWidth = (CT_WIDTH - totalWidth) / autoWidthColgroupIndexs.length;
    for (i = 0, l = autoWidthColgroupIndexs.length; i < l; i++) {
      colGroup[autoWidthColgroupIndexs[i]]._width = computedWidth;
    }
  }
};
var initFootSum = function initFootSum(_footSum) {
  if (_AX6Util2.default.isArray(_footSum)) {
    this.footSumTable = _AX6UIGrid_util2.default.makeFootSumTable.call(this, this.footSumColumns = _footSum);
  } else {
    this.footSumColumns = [];
    this.footSumTable = {};
  }
};
var initBodyGroup = function initBodyGroup(_grouping) {
  var grouping = _jqmin2.default.extend({}, _grouping);
  if ("by" in grouping && "columns" in grouping) {
    this.bodyGrouping = {
      by: grouping.by,
      columns: grouping.columns
    };
    this.bodyGroupingTable = _AX6UIGrid_util2.default.makeBodyGroupingTable.call(this, this.bodyGrouping.columns);
    this.sortInfo = function () {
      var sortInfo = {};
      for (var k = 0, kl = this.bodyGrouping.by.length; k < kl; k++) {
        sortInfo[this.bodyGrouping.by[k]] = {
          orderBy: "asc",
          seq: k,
          fixed: true
        };
        for (var c = 0, cl = this.colGroup.length; c < cl; c++) {
          if (this.colGroup[c].key === this.bodyGrouping.by[k]) {
            this.colGroup[c].sort = "asc";
            this.colGroup[c].sortFixed = true;
          }
        }
      }
      return sortInfo;
    }.call(this);
  } else {
    this.config.body.grouping = false;
  }
};
var alignGrid = function alignGrid(_isFirst) {
  var _this2 = this;

  var list = this.proxyList ? this.proxyList : this.list;
  // 대상이 크기가 컬럼의 최소 크기 보다 작업 금지
  if (Math.min(this.$target.innerWidth(), this.$target.innerHeight()) < 5) {
    return false;
  }

  if (!this.config.height) {
    this.$["container"]["root"].css({ height: this.config._height = this.$target.height() });
  }

  var CT_WIDTH = this.$["container"]["root"].width(),
      CT_HEIGHT = this.$["container"]["root"].height(),
      CT_INNER_WIDTH = CT_WIDTH,
      CT_INNER_HEIGHT = CT_HEIGHT,
      asidePanelWidth = this.config.asidePanelWidth = function () {
    var width = 0;
    if (_this2.config.showLineNumber) width += _this2.config.lineNumberColumnWidth;
    if (_this2.config.showRowSelector) width += _this2.config.rowSelectorColumnWidth;
    return width;
  }(),
      frozenPanelWidth = this.config.frozenPanelWidth = function (colGroup, endIndex) {
    var width = 0;
    for (var i = 0, l = endIndex; i < l; i++) {
      width += colGroup[i]._width;
    }
    return width;
  }(this.colGroup, this.config.frozenColumnIndex),
      verticalScrollerWidth = void 0,
      horizontalScrollerHeight = void 0,
      bodyHeight = void 0;

  // todo : 우측 함계컬럼 너비 계산
  var rightPanelWidth = 0,
      frozenRowHeight = this.config.frozenRowIndex * this.xvar.bodyTrHeight,
      footSumHeight = this.footSumColumns.length * this.xvar.bodyTrHeight,
      headerHeight = this.config.header.display ? this.headerTable.rows.length * this.config.header.columnHeight : 0,
      pageHeight = this.config.page.display ? this.config.page.height : 0;

  {
    verticalScrollerWidth = CT_HEIGHT - headerHeight - pageHeight - footSumHeight < list.length * this.xvar.bodyTrHeight ? this.config.scroller.size : 0;
    // 남은 너비가 colGroup의 너비보다 넓을때. 수평 스크롤 활성화.
    horizontalScrollerHeight = function () {
      var totalColGroupWidth = 0;
      // aside 빼고 너비
      // 수직 스크롤이 있으면 또 빼고 비교
      var bodyWidth = CT_WIDTH - asidePanelWidth - verticalScrollerWidth;
      for (var i = 0, l = _this2.colGroup.length; i < l; i++) {
        totalColGroupWidth += _this2.colGroup[i]._width;
      }
      return totalColGroupWidth > bodyWidth ? _this2.config.scroller.size : 0;
    }();

    if (horizontalScrollerHeight > 0) {
      verticalScrollerWidth = CT_HEIGHT - headerHeight - pageHeight - footSumHeight - horizontalScrollerHeight < list.length * this.xvar.bodyTrHeight ? this.config.scroller.size : 0;
    }
  }

  // 수평 너비 결정
  CT_INNER_WIDTH = CT_WIDTH - verticalScrollerWidth;
  // 수직 스크롤러의 높이 결정.
  CT_INNER_HEIGHT = CT_HEIGHT - pageHeight - horizontalScrollerHeight;

  bodyHeight = CT_INNER_HEIGHT - headerHeight;

  var panelDisplayProcess = function panelDisplayProcess(panel, vPosition, hPosition, containerType) {
    var css = {
      display: "block"
    },
        isHide = false;

    switch (hPosition) {
      case "aside":
        if (asidePanelWidth === 0) {
          isHide = true;
        } else {
          css["left"] = 0;
          css["width"] = asidePanelWidth;
        }
        break;
      case "left":
        if (this.config.frozenColumnIndex === 0) {
          isHide = true;
        } else {
          css["left"] = asidePanelWidth;
          css["width"] = frozenPanelWidth;
        }
        break;
      case "right":
        if (!this.config.rightSum) {
          isHide = true;
        } else {}
        break;
      default:
        if (containerType !== "page") {
          if (this.config.frozenColumnIndex === 0) {
            css["left"] = asidePanelWidth;
          } else {
            css["left"] = frozenPanelWidth + asidePanelWidth;
          }
          css["width"] = CT_INNER_WIDTH - asidePanelWidth - frozenPanelWidth - rightPanelWidth;
        }
        break;
    }

    if (isHide) {
      panel.css({ display: "none" });
      // 프로세스 중지
      return this;
    }

    if (containerType === "body") {
      switch (vPosition) {
        case "top":
          if (this.config.frozenRowIndex == 0) {
            isHide = true;
          } else {
            css["top"] = 0;
            css["height"] = frozenRowHeight;
          }
          break;
        case "bottom":
          if (!this.config.footSum) {
            isHide = true;
          } else {
            css["top"] = bodyHeight - footSumHeight;
            css["height"] = footSumHeight; // footSum height
          }
          break;
        default:
          css["top"] = frozenRowHeight;
          css["height"] = bodyHeight - frozenRowHeight - footSumHeight;

          break;
      }
    } else if (containerType === "header") {
      css["height"] = headerHeight;
    } else if (containerType === "page") {
      if (pageHeight == 0) {
        isHide = true;
      } else {
        css["height"] = pageHeight;
      }
    }

    if (isHide) {
      panel.css({ display: "none" });
      // 프로세스 중지
      return this;
    }

    panel.css(css);
    return this;
  };
  var scrollerDisplayProcess = function scrollerDisplayProcess(panel, scrollerWidth, scrollerHeight, containerType) {
    var css = {
      display: "block"
    },
        isHide = false;

    switch (containerType) {
      case "vertical":
        if (scrollerWidth > 0) {
          css["width"] = scrollerWidth;
          css["height"] = CT_INNER_HEIGHT;
          css["bottom"] = scrollerHeight + pageHeight;
        } else {
          isHide = true;
        }
        break;
      case "horizontal":
        if (scrollerHeight > 0) {
          css["width"] = CT_INNER_WIDTH;
          css["height"] = scrollerHeight;
          css["right"] = scrollerWidth;
          css["bottom"] = pageHeight;
        } else {
          isHide = true;
        }
        break;
      case "corner":
        if (scrollerWidth > 0 && scrollerHeight > 0) {
          css["width"] = scrollerWidth;
          css["height"] = scrollerHeight;
          css["bottom"] = pageHeight;
        } else {
          isHide = true;
        }
        break;
    }

    if (isHide) {
      panel.css({ display: "none" });
      // 프로세스 중지
      return this;
    }

    panel.css(css);
  };

  this.$["container"]["header"].css({ height: headerHeight });
  this.$["container"]["body"].css({ height: bodyHeight });

  // 각 패널들의 크기 표시여부를 결정합니다
  panelDisplayProcess.call(this, this.$["panel"]["aside-header"], "", "aside", "header");
  panelDisplayProcess.call(this, this.$["panel"]["left-header"], "", "left", "header");
  panelDisplayProcess.call(this, this.$["panel"]["header"], "", "", "header");
  panelDisplayProcess.call(this, this.$["panel"]["right-header"], "", "right", "header");

  panelDisplayProcess.call(this, this.$["panel"]["top-aside-body"], "top", "aside", "body");
  panelDisplayProcess.call(this, this.$["panel"]["top-left-body"], "top", "left", "body");
  panelDisplayProcess.call(this, this.$["panel"]["top-body"], "top", "", "body");
  panelDisplayProcess.call(this, this.$["panel"]["top-right-body"], "top", "right", "body");

  panelDisplayProcess.call(this, this.$["panel"]["aside-body"], "", "aside", "body");
  panelDisplayProcess.call(this, this.$["panel"]["left-body"], "", "left", "body");
  panelDisplayProcess.call(this, this.$["panel"]["body"], "", "", "body");
  panelDisplayProcess.call(this, this.$["panel"]["right-body"], "", "right", "body");

  panelDisplayProcess.call(this, this.$["panel"]["bottom-aside-body"], "bottom", "aside", "body");
  panelDisplayProcess.call(this, this.$["panel"]["bottom-left-body"], "bottom", "left", "body");
  panelDisplayProcess.call(this, this.$["panel"]["bottom-body"], "bottom", "", "body");
  panelDisplayProcess.call(this, this.$["panel"]["bottom-right-body"], "bottom", "right", "body");

  scrollerDisplayProcess.call(this, this.$["scroller"]["vertical"], verticalScrollerWidth, horizontalScrollerHeight, "vertical");
  scrollerDisplayProcess.call(this, this.$["scroller"]["horizontal"], verticalScrollerWidth, horizontalScrollerHeight, "horizontal");
  scrollerDisplayProcess.call(this, this.$["scroller"]["corner"], verticalScrollerWidth, horizontalScrollerHeight, "corner");

  panelDisplayProcess.call(this, this.$["container"]["page"], "", "", "page");

  // 각 패널의 사이즈 결정
  /// 다른 패널의 사이즈 정보가 필요한 경우 여기서 정의해주고 사용함.
  this.xvar.bodyHeight = this.$.panel["body"].height();
  this.xvar.bodyWidth = this.$.panel["body"].width();
  // scrollContentWidth 는 grid-header repaint에서 결정합니다. 까먹지 맙시다. > this.xvar.scrollContentWidth

  return true;
};
var sortColumns = function sortColumns(_sortInfo) {
  _AX6UIGrid_header2.default.repaint.call(this);

  if (_AX6Util2.default.isFunction(this.config.remoteSort)) {
    var that = { sortInfo: [] };
    for (var k in _sortInfo) {
      that.sortInfo.push({
        key: k,
        orderBy: _sortInfo[k].orderBy,
        seq: _sortInfo[k].seq
      });
    }
    that.sortInfo.sort(function (a, b) {
      return a.seq > b.seq;
    });
    this.config.remoteSort.call(that, that);
  } else {
    if (this.config.body.grouping) {
      this.list = _AX6UIGrid_data2.default.initData.call(this, _AX6UIGrid_data2.default.sort.call(this, _sortInfo, _AX6UIGrid_data2.default.clearGroupingData.call(this, this.list)));
    } else {
      this.list = _AX6UIGrid_data2.default.sort.call(this, _sortInfo, _AX6UIGrid_data2.default.clearGroupingData.call(this, this.list), { resetLineNumber: true });
    }
    _AX6UIGrid_body2.default.repaint.call(this, true);
    _AX6UIGrid_scroller2.default.resize.call(this);
  }
};

/* ~~~~~~~~~~~~~~~~~~ end of private  ~~~~~~~~~~~~~~~~~~~~ */

/**
 * @class
 */

var AX6UIGrid = function (_AX6UICore) {
  _inherits(AX6UIGrid, _AX6UICore);

  _createClass(AX6UIGrid, null, [{
    key: "setFormatter",


    /**
     * @static
     * @param _formatter
     */
    value: function setFormatter(_formatter) {
      return formatter = Object.assign(formatter, _formatter);
    }

    /**
     * @static
     * @return {Object}
     */

  }, {
    key: "getFormatter",
    value: function getFormatter() {
      return formatter || {};
    }

    /**
     * @static
     * @param _collector
     * @return {collector}
     */

  }, {
    key: "setCollector",
    value: function setCollector(_collector) {
      return collector = Object.assign(collector, _collector);
    }

    /**
     * @static
     * @return {collector}
     */

  }, {
    key: "getCollector",
    value: function getCollector() {
      return collector || {};
    }

    /**
     * @static
     * @param _tmpl
     * @return {tmpl}
     */

  }, {
    key: "setTmpl",
    value: function setTmpl(_tmpl) {
      return tmpl = Object.assign(tmpl, _tmpl);
    }

    /**
     * @static
     * @return {tmpl}
     */

  }, {
    key: "getTmpl",
    value: function getTmpl() {
      return tmpl || {};
    }

    /**
     * @constructor
     * @param config
     */

  }]);

  function AX6UIGrid(config) {
    var _ret;

    _classCallCheck(this, AX6UIGrid);

    /**
     * @member {JSON}
     * @param config
     * @param {Element} config.target
     * @param {Number} [config.frozenColumnIndex=0]
     * @param {Number} [config.frozenRowIndex=0]
     * @param {Boolean} [config.showLineNumber=false]
     * @param {Boolean} [config.showRowSelector=false]
     * @param {Boolean} [config.multipleSelect=true]
     * @param {Number} [config.columnMinWidth=100]
     * @param {Number} [config.lineNumberColumnWidth=30]
     * @param {Number} [config.rowSelectorColumnWidth=25]
     * @param {Boolean} [config.sortable=false]
     * @param {Boolean} [config.multiSort=false]
     * @param {Function} [config.remoteSort=false]
     * @param {Boolean} [config.virtualScrollY=true] - 세로축 가상스크롤 처리여부
     * @param {Boolean} [config.virtualScrollX=true] - 가로축 가상스크롤 처리여부
     * @param {Object} [config.header]
     * @param {String} [config.header.align]
     * @param {Number} [config.header.columnHeight=25]
     * @param {Number} [config.header.columnPadding=3]
     * @param {Number} [config.header.columnBorderWidth=1]
     * @param {Object} [config.body]
     * @param {Function} [config.body.onClick]
     * @param {Function} [config.body.onDBLClick]
     * @param {Function} [config.body.onDataChanged]
     * @param {Function} [config.body.onContextMenu]
     * @param {String|Array} [config.body.mergeCells=false] -
     * @param {String} [config.body.align]
     * @param {Number} [config.body.columnHeight=25]
     * @param {Number} [config.body.columnPadding=3]
     * @param {Number} [config.body.columnBorderWidth=1]
     * @param {Object} [config.body.grouping]
     * @param {Array} [config.body.grouping.by] - list grouping keys
     * @param {Array} [config.body.grouping.columns] - list grouping columns
     * @param {(String|Function)} [config.body.trStyleClass]
     * @param {Object} [config.page]
     * @param {Number} [config.page.height=25]
     * @param {Boolean} [config.page.display=true] - grid page display
     * @param {Boolean} [config.page.statusDisplay=true] - grid status display
     * @param {Number} [config.page.navigationItemCount=5]
     * @param {Object} [config.scroller]
     * @param {Number} [config.scroller.size=15]
     * @param {Number} [config.scroller.barMinSize=15]
     * @param {Number} [config.scroller.trackPadding=4]
     * @param {Object} [config.columnKeys]
     * @param {String} [config.columnKeys.selected="_SELECTED"]
     * @param {Object[]} config.columns
     * @param {String} config.columns[].key
     * @param {String} config.columns[].label
     * @param {Number} config.columns[].width
     * @param {(String|Function)} config.columns[].styleClass
     * @param {(String|Function)} config.columns[].headerStyleClass
     * @param {Boolean} config.columns[].enableFilter
     * @param {Boolean} config.columns[].sortable
     * @param {String} config.columns[].align
     * @param {(String|Function)} config.columns[].formatter
     * @param {Object} config.columns[].editor
     * @param {String} config.columns[].editor.type - text,number,money,date
     * @param {Object} config.columns[].editor.config
     * @param {Array} config.columns[].editor.updateWith
     * @param {Function} config.columns[].editor.disabled - disable editor
     * @param {Boolean} [config.columns[].multiLine=false]
     * @param {Object} [config.tree]
     * @param {Boolean} [config.tree.use=false] - Whether tree-type data is used
     * @param {Number} [config.tree.hashDigit=8]
     * @param {Number} [config.tree.indentWidth=10]
     * @param {Number} [config.tree.arrowWidth=15]
     * @param {Number} [config.tree.iconWidth=18]
     * @param {Object} [config.tree.icons]
     * @param {String} [config.tree.icons.openedArrow='▾']
     * @param {String} [config.tree.icons.collapsedArrow='▸']
     * @param {String} [config.tree.icons.groupIcon='⊚']
     * @param {String} [config.tree.icons.collapsedGroupIcon='⊚']
     * @param {String} [config.tree.icons.itemIcon='⊙']
     * @param {Object} [config.tree.columnKeys]
     * @param {String} [config.tree.columnKeys.parentKey="pid"]
     * @param {String} [config.tree.columnKeys.selfKey="id"]
     * @param {String} [config.tree.columnKeys.collapse="collapse"]
     * @param {String} [config.tree.columnKeys.hidden="hidden"]
     * @param {String} [config.tree.columnKeys.parentHash="__hp__"]
     * @param {String} [config.tree.columnKeys.selfHash="__hs__"]
     * @param {String} [config.tree.columnKeys.children="__children__"]
     * @param {String} [config.tree.columnKeys.depth="__depth__"]
     */
    var _this3 = _possibleConstructorReturn(this, (AX6UIGrid.__proto__ || Object.getPrototypeOf(AX6UIGrid)).call(this));

    _this3.config = {
      theme: 'default',
      animateTime: 250,
      debounceTime: 250,
      appendDebouncer: null,
      appendDebounceTimes: 0,
      appendProgressIcon: '...',
      appendProgress: false,

      // 틀고정 속성
      frozenColumnIndex: 0,
      frozenRowIndex: 0,
      showLineNumber: false,
      showRowSelector: false,
      multipleSelect: true,
      virtualScrollY: true,
      virtualScrollX: true,

      // 스크롤될 때 body 페인팅 딜레이를 주어 성능이 좋은 않은 브라우저에서 반응을 빠르게 할 때 사용하는 옵션들
      virtualScrollYCountMargin: 0,
      virtualScrollAccelerated: true,
      virtualScrollAcceleratedDelayTime: 10,

      height: 0,
      columnMinWidth: 100,
      lineNumberColumnWidth: 30,
      rowSelectorColumnWidth: 26,
      sortable: undefined,
      remoteSort: false,

      header: {
        display: true,
        align: false,
        columnHeight: 26,
        columnPadding: 3,
        columnBorderWidth: 1
      },
      body: {
        align: false,
        columnHeight: 26,
        columnPadding: 3,
        columnBorderWidth: 1,
        grouping: false,
        mergeCells: false
      },
      rightSum: false,
      footSum: false,
      page: {
        height: 25,
        display: true,
        statusDisplay: true,
        navigationItemCount: 5
      },
      scroller: {
        size: 15,
        barMinSize: 15,
        trackPadding: 4
      },
      columnKeys: {
        selected: '__selected__',
        modified: '__modified__',
        deleted: '__deleted__',
        disableSelection: '__disable_selection__'
      },
      tree: {
        use: false,
        hashDigit: 8,
        indentWidth: 10,
        arrowWidth: 15,
        iconWidth: 18,
        icons: {
          openedArrow: '▾',
          collapsedArrow: '▸',
          groupIcon: '⊚',
          collapsedGroupIcon: '⊚',
          itemIcon: '⊙'
        },
        columnKeys: {
          parentKey: "pid",
          selfKey: "id",
          collapse: "collapse",
          hidden: "hidden",
          parentHash: "__hp__",
          selfHash: "__hs__",
          children: "__children__",
          depth: "__depth__"
        }
      }
    };
    _jqmin2.default.extend(true, _this3.config, config);

    // 멤버 변수 초기화
    /**
     * @member {Object}
     */
    _this3.xvar = {
      bodyTrHeight: 0, // 한줄의 높이
      scrollContentWidth: 0, // 스크롤 될 내용물의 너비 (스크롤 될 내용물 : panel['body-scroll'] 안에 컬럼이 있는)
      scrollContentHeight: 0, // 스크롤 된 내용물의 높이
      scrollTimer: null
    };

    // 그리드 데이터셋
    /**
     * @member {Array}
     */
    _this3.columns = []; // config.columns에서 복제된 오브젝트
    /**
     * @member {Array}
     */
    _this3.colGroup = []; // columns를 table태그로 출력하기 좋게 변환한 오브젝트
    /**
     * @member {Array}
     */
    _this3.footSumColumns = [];
    /**
     * @member {Object}
     */
    _this3.bodyGrouping = {};
    /**
     * @member {Array}
     */
    _this3.list = []; // 그리드의 데이터
    /**
     * @member {Array}
     */
    _this3.proxyList = null; // 그리드 데이터의 대리자
    /**
     * @member {Object}
     */
    _this3.page = null; // 그리드의 페이지 정보

    _this3.selectedDataIndexs = [];
    _this3.deletedList = [];

    /**
     * @member {Object}
     */
    _this3.sortInfo = {}; // 그리드의 헤더 정렬 정보
    _this3.focused = false;
    /**
     * @member {Object}
     */
    _this3.focusedColumn = {}; // 그리드 바디의 포커스된 셀 정보
    /**
     * @member {Object}
     */
    _this3.selectedColumn = {}; // 그리드 바디의 선택된 셀 정보
    _this3.isInlineEditing = false;
    /**
     * @member {Object}
     */
    _this3.inlineEditing = {};
    /**
     * @member {Object}
     */
    _this3.listIndexMap = {}; // tree데이터 사용시 데이터 인덱싱 맵
    /**
     * @member {Object}
     */
    _this3.contextMenu = null; // contentMenu 의 인스턴스

    // header
    /**
     * @member {Object}
     */
    _this3.headerTable = {};
    /**
     * @member {Object}
     */
    _this3.leftHeaderData = {};
    /**
     * @member {Object}
     */
    _this3.headerData = {};
    /**
     * @member {Object}
     */
    _this3.rightHeaderData = {};

    // body
    /**
     * @member {Object}
     */
    _this3.bodyRowTable = {};
    /**
     * @member {Object}
     */
    _this3.leftBodyRowData = {};
    /**
     * @member {Object}
     */
    _this3.bodyRowData = {};
    /**
     * @member {Object}
     */
    _this3.rightBodyRowData = {};
    /**
     * @member {Object}
     */
    _this3.bodyRowMap = {};

    /**
     * @member {Object}
     */
    _this3.bodyGroupingTable = {};
    /**
     * @member {Object}
     */
    _this3.leftBodyGroupingData = {};
    /**
     * @member {Object}
     */
    _this3.bodyGroupingData = {};
    /**
     * @member {Object}
     */
    _this3.rightBodyGroupingData = {};
    /**
     * @member {Object}
     */
    _this3.bodyGroupingMap = {};

    // footSum
    /**
     * @member {Object}
     */
    _this3.footSumTable = {}; // footSum의 출력레이아웃
    /**
     * @member {Object}
     */
    _this3.leftFootSumData = {}; // frozenColumnIndex 를 기준으로 나누어진 출력 레이아웃 왼쪽
    /**
     * @member {Object}
     */
    _this3.footSumData = {}; // frozenColumnIndex 를 기준으로 나누어진 출력 레이아웃 오른쪽
    /**
     * @member {Boolean}
     */
    _this3.needToPaintSum = true; // 데이터 셋이 변경되어 summary 변경 필요여부

    /**
     * 사용자 정의 formatter. AX6UIGrid.setFormatter 를 이용하여 확장
     * @member
     */
    _this3.customFormatter = AX6UIGrid.getFormatter();

    /**
     * 사용자 정의 collector. AX6UIGrid.setCollector 를 이용하여 확장
     * @member
     */
    _this3.customCollector = AX6UIGrid.getCollector();

    _this3.__tmpl = Object.assign(_AX6UIGrid_tmpl2.default, AX6UIGrid.getTmpl());

    if (typeof config !== "undefined") _this3.init();

    return _ret = _this3, _possibleConstructorReturn(_this3, _ret);
  }

  /**
   * @method
   * @param config
   */


  _createClass(AX6UIGrid, [{
    key: "init",
    value: function init() {
      var _this4 = this;

      // 그리드의 이벤트 정의 구간
      this.onStateChanged = this.config.onStateChanged;
      this.onLoad = this.config.onLoad;

      // init 호출 여부
      this.initOnce();

      if (typeof this.config.target !== "undefined") {

        this.$target = (0, _jqmin2.default)(this.config.target);

        // target attribute data
        (function (data) {
          if (_AX6Util2.default.isObject(data) && !data.error) {
            this.config = _jqmin2.default.extend(true, {}, this.config, data);
          }
        }).call(this, _AX6Util2.default.parseJson(this.$target.attr("data-ax6ui-grid-config"), true));

        if (!this.config.height) {
          this.config._height = this.$target.height();
        }

        if (!this.id) this.id = this.$target.data("ax6ui-grid-id");
        if (!this.id) {
          this.id = 'ax6ui-grid-' + this.instanceId;
          this.$target.data("ax6ui-grid-id", this.id);
        }

        _AX6UIGrid_data2.default.init.call(this);

        if (this.config.tree.use) {
          // 트리라면
          this.sortInfo = {};
          this.sortInfo[this.config.tree.columnKeys.selfHash] = { orderBy: "asc", seq: 0, fixed: true };
        }

        ///========
        // 그리드를 그리기 위한 가장 기초적인 작업 뼈대와 틀을 준비합니다. 이 메소드는 초기화 시 한번만 호출 되게 됩니다.
        initGrid.call(this);

        // columns데이터를 분석하여 미리 처리해야하는 데이터를 정리합니다.
        initColumns.call(this, this.config.columns);
        resetColGroupWidth.call(this);

        // footSum 데이터를 분석하여 미리 처리해야 하는 데이터를 정리
        if (this.config.footSum) initFootSum.call(this, this.config.footSum);

        // bodyGrouping 데이터를 분석하여 미리 처리해야 하는 데이터를 정리
        if (this.config.body.grouping) initBodyGroup.call(this, this.config.body.grouping);

        // 그리드의 각 요소의 크기를 맞춤니다.
        alignGrid.call(this, true);

        // columns의 데이터로 header데이터를 만들고
        _AX6UIGrid_header2.default.init.call(this);
        // header를 출력합니다.
        _AX6UIGrid_header2.default.repaint.call(this);

        // columns의 데이터로 body데이터를 만들고
        _AX6UIGrid_body2.default.init.call(this);
        // body를 출력합니다.
        _AX6UIGrid_body2.default.repaint.call(this);

        // scroller
        _AX6UIGrid_scroller2.default.init.call(this);
        _AX6UIGrid_scroller2.default.resize.call(this);

        (0, _jqmin2.default)(window).off("resize.ax6grid-" + this.instanceId).off("keydown.ax6grid-" + this.instanceId).on("resize.ax6grid-" + this.instanceId, _AX6Util2.default.throttle(function (e) {
          alignGrid.call(this);
          _AX6UIGrid_scroller2.default.resize.call(this);
          _AX6UIGrid_body2.default.repaint.call(this); // window resize시 repaint 함수 호출
        }, 30).bind(this)).on("keydown.ax6grid-" + this.instanceId, function (e) {
          if (_this4.focused) {
            if (_this4.isInlineEditing) {
              if (e.which == _AX6Info2.default.eventKeys.ESC) {
                _this4.keyDown("ESC", e.originalEvent);
              } else if (e.which == _AX6Info2.default.eventKeys.RETURN) {
                _this4.keyDown("RETURN", e.originalEvent);
              } else if (e.which == _AX6Info2.default.eventKeys.TAB) {
                _this4.keyDown("TAB", e.originalEvent);
                _AX6Util2.default.stopEvent(e);
              } else if (e.which == _AX6Info2.default.eventKeys.UP) {
                _this4.keyDown("RETURN", { shiftKey: true });
              } else if (e.which == _AX6Info2.default.eventKeys.DOWN) {
                _this4.keyDown("RETURN", {});
              }
            } else {
              if (e.metaKey || e.ctrlKey) {
                if (e.which == 67) {
                  // c
                  self.copySelect();
                }
              } else {
                if (ctrlKeys[e.which]) {
                  _this4.keyDown(ctrlKeys[e.which], e.originalEvent); // 키다운 이벤트 호출
                  _AX6Util2.default.stopEvent(e);
                } else if (e.which == _AX6Info2.default.eventKeys.ESC) {
                  if (_this4.focused) {
                    _AX6UIGrid_body2.default.blur.call(self);
                  }
                } else if (e.which == _AX6Info2.default.eventKeys.RETURN || e.which == _AX6Info2.default.eventKeys.SPACE) {
                  _this4.keyDown("RETURN", e.originalEvent);
                } else if (e.which == _AX6Info2.default.eventKeys.TAB) {
                  //self.keyDown("RETURN", e.originalEvent);
                  _AX6Util2.default.stopEvent(e);
                } else if (Object.keys(_this4.focusedColumn).length) {
                  _this4.keyDown("INLINE_EDIT", e.originalEvent);
                }
              }
            }
          }
        });

        (0, _jqmin2.default)(document.body).off("click.ax6grid-" + this.instanceId).on("click.ax6grid-" + this.instanceId, function (e) {
          var isPickerClick = false,
              target = _AX6Util2.default.findParentNode(e.target, function (_target) {
            if (isPickerClick = _target.getAttribute("data-ax6grid-inline-edit-picker")) {
              return true;
            }
            return _target.getAttribute("data-ax6grid-container") === "root";
          });

          if (target && target.getAttribute("data-ax6grid-instance") === _this4.id) {
            _this4.focused = true;
          } else {
            _this4.focused = false;
            _AX6UIGrid_body2.default.blur.call(_this4);
          }
        });

        // 그리드 레이아웃이 모든 준비를 마친시점에 onLoad존재 여부를 확인하고 호출하여 줍니다.
        setTimeout(function () {
          if (_this4.onLoad) {
            _this4.onLoad.call({
              self: _this4
            });
          }
        });
      }
    }

    /**
     * @method
     */

  }, {
    key: "initOnce",
    value: function initOnce() {
      if (this.initialized) return this;
      this.initialized = true;
    }

    /**
     * 그리드의 각 패널들의 크기를 변경된 설정에 맞추어 다시 그림
     * @method
     * @return {AX6UIGrid}
     */

  }, {
    key: "align",
    value: function align() {
      if (alignGrid.call(this)) {
        _AX6UIGrid_body2.default.repaint.call(this);
        _AX6UIGrid_scroller2.default.resize.call(this);
      }
      return this;
    }

    /**
     * 그리드에 키보드 액션을 전달
     * @method
     * @param _act
     * @param _data
     * @return {AX6UIGrid}
     */

  }, {
    key: "keyDown",
    value: function keyDown(_act, _data) {
      var processor = {
        "KEY_UP": function KEY_UP() {
          _AX6UIGrid_body2.default.moveFocus.call(this, "UP");
        },
        "KEY_DOWN": function KEY_DOWN() {
          _AX6UIGrid_body2.default.moveFocus.call(this, "DOWN");
        },
        "KEY_LEFT": function KEY_LEFT() {
          _AX6UIGrid_body2.default.moveFocus.call(this, "LEFT");
        },
        "KEY_RIGHT": function KEY_RIGHT() {
          _AX6UIGrid_body2.default.moveFocus.call(this, "RIGHT");
        },
        "KEY_HOME": function KEY_HOME() {
          _AX6UIGrid_body2.default.moveFocus.call(this, "HOME");
        },
        "KEY_END": function KEY_END() {
          _AX6UIGrid_body2.default.moveFocus.call(this, "END");
        },
        "INLINE_EDIT": function INLINE_EDIT(_e) {
          _AX6UIGrid_body2.default.inlineEdit.active.call(this, this.focusedColumn, _e);
          if (!/[0-9a-zA-Z]/.test(_e.key)) {
            _AX6Util2.default.stopEvent(_e);
          }
        },
        "ESC": function ESC(_e) {
          _AX6UIGrid_body2.default.inlineEdit.keydown.call(this, "ESC");
        },
        "RETURN": function RETURN(_e) {
          var activeEditLength = 0;
          for (var columnKey in this.inlineEditing) {
            activeEditLength++;

            if (!_AX6UIGrid_body2.default.inlineEdit.keydown.call(this, "RETURN", columnKey)) {
              return false;
              _AX6Util2.default.stopEvent(_e);
            }
            // next focus
            if (activeEditLength == 1) {
              if (_AX6UIGrid_body2.default.moveFocus.call(this, _e.shiftKey ? "UP" : "DOWN")) {
                _AX6UIGrid_body2.default.inlineEdit.keydown.call(this, "RETURN");
              }
            }
          }
          if (activeEditLength == 0) {
            _AX6UIGrid_body2.default.inlineEdit.keydown.call(this, "RETURN");
            _AX6Util2.default.stopEvent(_e);
          } else {}
        },
        "TAB": function TAB(_e) {

          var activeEditLength = 0;
          for (var columnKey in this.inlineEditing) {
            activeEditLength++;

            _AX6UIGrid_body2.default.inlineEdit.keydown.call(this, "RETURN", columnKey, { moveFocus: true });
            // next focus
            if (activeEditLength == 1) {
              if (_AX6UIGrid_body2.default.moveFocus.call(this, _e.shiftKey ? "LEFT" : "RIGHT")) {
                _AX6UIGrid_body2.default.inlineEdit.keydown.call(this, "RETURN", undefined, { moveFocus: true });
              }
            }
          }
        }
      };
      if (_act in processor) processor[_act].call(this, _data);
      return this;
    }

    /**
     * 선택된 셀을 클립보드에 복사합니다
     * @method
     * @return {*}
     */

  }, {
    key: "copySelect",
    value: function copySelect() {
      var copysuccess = void 0,
          $clipBoard = this.$["form"]["clipboard"],
          copyTextArray = [],
          copyText = "",
          _rowIndex = void 0,
          _colIndex = void 0,
          _dindex = void 0,
          _di = 0;

      for (var c in this.selectedColumn) {
        var _column = this.selectedColumn[c];

        if (_column) {
          if (typeof _dindex === "undefined") {
            _dindex = _column.dindex;
            _rowIndex = _column.rowIndex;
            _colIndex = _column.rowIndex;
          }

          if (_dindex != _column.dindex || _rowIndex != _column.rowIndex) {
            _di++;
          }

          if (!copyTextArray[_di]) {
            copyTextArray[_di] = [];
          }
          var originalColumn = this.bodyRowMap[_column.rowIndex + "_" + _column.colIndex];
          if (originalColumn) {
            if (this.list[_column.dindex].__isGrouping) {
              copyTextArray[_di].push(this.list[_column.dindex][_column.colIndex]);
            } else {
              copyTextArray[_di].push(this.list[_column.dindex][originalColumn.key]);
            }
          } else {
            copyTextArray[_di].push("");
          }

          _dindex = _column.dindex;
          _rowIndex = _column.rowIndex;
        }
      }

      copyTextArray.forEach(function (r) {
        copyText += r.join('\t') + "\n";
      });

      $clipBoard.get(0).innerText = copyText;
      $clipBoard.select();

      try {
        copysuccess = document.execCommand("copy");
      } catch (e) {
        copysuccess = false;
      }
      return copysuccess;
    }

    /**
     * @method
     * @param _data
     * @return {AX6UIGrid}
     * @example
     * ```js
     * import {AX6UIGrid as Grid} from "ax6ui";
     *
     * let grid = new Grid({target: el});
     * grid.setData([
     *  {name: "Thomas"}
     * ]);
     *
     * grid.setData({
       *  list: [],
       *  page: {
       *      currentPage: 0,
       *      pageSize: 50,
       *      totalElements: 500,
       *      totalPages: 100
       *  }
       * });
     * ```
     */

  }, {
    key: "setData",
    value: function setData(_data) {
      var isFirstPaint = typeof this.xvar.paintStartRowIndex === "undefined";

      _AX6UIGrid_data2.default.set.call(this, _data);
      _AX6UIGrid_body2.default.repaint.call(this);
      if (!isFirstPaint) _AX6UIGrid_body2.default.scrollTo.call(this, { top: 0 });

      alignGrid.call(this);
      _AX6UIGrid_scroller2.default.resize.call(this);
      _AX6UIGrid_page2.default.navigationUpdate.call(this);

      isFirstPaint = null;
      return this;
    }

    /**
     * @method
     * @param _type
     * @return {*}
     * @example
     * ```js
     * import {AX6UIGrid as Grid} from "ax6ui";
     * let grid = new Grid({target: el});
     * grid.setData([]);
     *
     * grid.getList(); // return all
     * grid.getList("selected");
     * grid.getList("modified");
     * grid.getList("deleted");
     * ```
     */

  }, {
    key: "getList",
    value: function getList(_type) {
      return _AX6UIGrid_data2.default.getList.call(this, _type);
    }

    /**
     * @method
     * @param _height
     * @return {AX6UIGrid}
     * @example
     * ```js
     * grid.setHeight(height);
     * ```
     */

  }, {
    key: "setHeight",
    value: function setHeight(_height) {
      if (_height == "100%") {
        _height = this.$target.offsetParent().innerHeight();
      }
      this.$target.css({ height: _height });
      this.$["container"]["root"].css({ height: _height });
      alignGrid.call(this);
      _AX6UIGrid_body2.default.repaint.call(this, "reset");
      _AX6UIGrid_scroller2.default.resize.call(this);
      return this;
    }

    /**
     * @method
     * @param _row
     * @param {Number|String} [_dindex="last"]
     * @param _options
     * @param {Boolean} [_options.sort]
     * @param {Number|String} [_options.focus] - HOME|END|[dindex]
     * @return {AX6UIGrid}
     * @example
     * ```js
     * grid.addRow($.extend({}, {...}), "first");
     * grid.addRow($.extend({}, {...}), "last", {focus: "END"});
     * grid.addRow($.extend({}, {...}), "last", {focus: "HOME"});
     * grid.addRow($.extend({}, {...}), "last", {focus: 10});
     * ```
     */

  }, {
    key: "addRow",
    value: function addRow(_row, _dindex, _options) {
      _AX6UIGrid_data2.default.add.call(this, _row, _dindex, _options);
      alignGrid.call(this);
      _AX6UIGrid_body2.default.repaint.call(this, "reset");
      if (_options && _options.focus) {
        _AX6UIGrid_body2.default.moveFocus.call(this, _options.focus);
      }
      _AX6UIGrid_scroller2.default.resize.call(this);
      return this;
    }

    /**
     * @method
     * @param _list
     * @return {AX6UIGrid}
     * @example
     * ```js
     * grid.appendToList([{},{},{}]);
     * grid.appendToList([{},{},{}]);
     * ```
     */

  }, {
    key: "appendToList",
    value: function appendToList(_list) {
      _AX6UIGrid_data2.default.append.call(this, _list, function () {
        alignGrid.call(this);
        _AX6UIGrid_body2.default.repaint.call(this);
        _AX6UIGrid_scroller2.default.resize.call(this);
      }.bind(this));
      return this;
    }

    /**
     * @method
     * @param {Number|String} [_dindex=last]
     * @return {AX6UIGrid}
     * @example
     * ```js
     * grid.removeRow();
     * grid.removeRow("first");
     * grid.removeRow("last");
     * grid.removeRow(1);
     * grid.removeRow("selected");
     * ```
     */

  }, {
    key: "removeRow",
    value: function removeRow(_dindex) {
      _AX6UIGrid_data2.default.remove.call(this, _dindex);
      alignGrid.call(this);
      _AX6UIGrid_body2.default.repaint.call(this, "reset");
      _AX6UIGrid_body2.default.moveFocus.call(this, this.config.body.grouping ? "START" : "END");
      _AX6UIGrid_scroller2.default.resize.call(this);
      return this;
    }

    /**
     * @method
     * @param _row
     * @param _dindex
     * @return {AX6UIGrid}
     * @example
     * ```js
     * grid.updateRow({price: 100, amount: 100, cost: 10000}, 1);
     * ```
     */

  }, {
    key: "updateRow",
    value: function updateRow(_row, _dindex) {
      _AX6UIGrid_data2.default.update.call(this, _row, _dindex);
      // todo : mergeCells 옵션에 따라 예외처리
      _AX6UIGrid_body2.default.repaintRow.call(this, _dindex);
      return this;
    }

    /**
     * @method
     * @param {Number} _dindex
     * @param {Object} _updateData
     * @param {Object} [_options]
     * @param {Function} [_options.filter]
     * @returns {AX6UIGrid}
     * @example
     * ```js
     * onDataChanged: function () {
       *      this.self.updateChildRows(this.dindex, {isChecked: this.item.isChecked});
       * }
     *
     * onDataChanged: function () {
       *      this.self.updateChildRows(this.dindex, {isChecked: this.item.isChecked}, {filter: function(){
       *          return this.item.type == "A";
       *      });
       * }
       * ```
       */

  }, {
    key: "updateChildRows",
    value: function updateChildRows(_dindex, _updateData, _options) {
      _AX6UIGrid_data2.default.updateChild.call(this, _dindex, _updateData, _options);
      this.xvar.paintStartRowIndex = undefined;
      this.xvar.paintStartColumnIndex = undefined;
      _AX6UIGrid_body2.default.repaint.call(this);
      return this;
    }

    /**
     * @method
     * @param {Number|String} _dindex
     * @returns {AX6UIGrid}
     * @example
     * ```js
     * grid.deleteRow("first");
     * grid.deleteRow("last");
     * grid.deleteRow(1);
     * grid.deleteRow("selected");
     * ```
     */

  }, {
    key: "deleteRow",
    value: function deleteRow(_dindex) {
      _AX6UIGrid_data2.default.deleteRow.call(this, _dindex);
      alignGrid.call(this);
      _AX6UIGrid_body2.default.repaint.call(this, "reset");

      _AX6UIGrid_scroller2.default.resize.call(this);
      return this;
    }

    /**
     * @method
     * @param _dindex
     * @param _key
     * @param _value
     * @returns {AX6UIGrid}
     * @example
     * ```js
     * grid.setValue(0, "price", 100);
     * ```
     */

  }, {
    key: "setValue",
    value: function setValue(_dindex, _key, _value) {
      var doindex = void 0;

      if (_AX6UIGrid_data2.default.setValue.call(this, _dindex, doindex, _key, _value)) {
        var repaintCell = function repaintCell(_panelName, _rows, __dindex, __doindex, __key, __value) {
          for (var r = 0, rl = _rows.length; r < rl; r++) {
            for (var c = 0, cl = _rows[r].cols.length; c < cl; c++) {
              if (_rows[r].cols[c].key == __key) {
                if (this.xvar.frozenRowIndex > __dindex) {
                  _AX6UIGrid_body2.default.repaintCell.call(this, "top-" + _panelName, __dindex, __doindex, r, c, __value);
                } else {
                  _AX6UIGrid_body2.default.repaintCell.call(this, _panelName + "-scroll", __dindex, __doindex, r, c, __value);
                }
              }
            }
          }
        };

        repaintCell.call(this, "left-body", this.leftBodyRowData.rows, _dindex, doindex, _key, _value);
        repaintCell.call(this, "body", this.bodyRowData.rows, _dindex, doindex, _key, _value);
      }

      return this;
    }

    /**
     * @method
     * @param {Object} _column
     * @param {Number|String} [_cindex=last]
     * @returns {AX6UIGrid}
     */

  }, {
    key: "addColumn",
    value: function addColumn(_column, _cindex) {
      var processor = {
        "first": function first(_column) {
          this.config.columns = [].concat(_column).concat(this.config.columns);
        },
        "last": function last(_column) {
          this.config.columns = this.config.columns.concat([].concat(_column));
        }
      };

      if (typeof _column === "undefined") throw '_column must not be null';
      if (typeof _cindex === "undefined") _cindex = "last";
      if (_cindex in processor) {
        processor[_cindex].call(this, _column);
      } else {
        if (!_AX6Util2.default.isNumber(_cindex)) {
          throw 'invalid argument _cindex';
        }
        if (_AX6Util2.default.isArray(_column)) {
          for (var _i = 0, _l = _column.length; _i < _l; _i++) {
            this.config.columns.splice(_cindex + _i, 0, _column[_i]);
          }
        } else {
          this.config.columns.splice(_cindex, 0, _column);
        }
      }
      onResetColumns.call(this); // 컬럼이 변경되었을 때.
      return this;
    }

    /**
     * @method
     * @param {Number|String} [_cindex=last]
     * @returns {AX6UIGrid}
     */

  }, {
    key: "removeColumn",
    value: function removeColumn(_cindex) {
      var processor = {
        "first": function first(_cindex) {
          this.config.columns.splice(_cindex, 1);
        },
        "last": function last() {
          this.config.columns.splice(this.config.columns.length - 1, 1);
        }
      };
      if (typeof _cindex === "undefined") _cindex = "last";
      if (_cindex in processor) {
        processor[_cindex].call(this, _cindex);
      } else {
        if (!_AX6Util2.default.isNumber(_cindex)) {
          throw 'invalid argument _cindex';
        }
        //
        this.config.columns.splice(_cindex, 1);
      }
      onResetColumns.call(this); // 컬럼이 변경되었을 때.
      return this;
    }

    /**
     * @method
     * @param {Object} _column
     * @param {Number} _cindex
     * @returns {AX6UIGrid}
     */

  }, {
    key: "updateColumn",
    value: function updateColumn(_column, _cindex) {
      if (!_AX6Util2.default.isNumber(_cindex)) {
        throw 'invalid argument _cindex';
      }
      //
      this.config.columns.splice(_cindex, 1, _column);
      onResetColumns.call(this); // 컬럼이 변경되었을 때.
      return this;
    }

    /**
     * @method
     * @param {Number} _width
     * @param {Number} _cindex
     * @returns {AX6UIGrid}
     */

  }, {
    key: "setColumnWidth",
    value: function setColumnWidth(_width, _cindex) {
      this.colGroup[this.xvar.columnResizerIndex]._width = _width;
      this.needToPaintSum = true;

      // 컬럼너비 변경사항 적용.
      _AX6UIGrid_header2.default.repaint.call(this);
      _AX6UIGrid_body2.default.repaint.call(this, true);
      _AX6UIGrid_scroller2.default.resize.call(this);

      alignGrid.call(this);
      return this;
    }

    /**
     * @method
     * @returns {Object} sortInfo
     */

  }, {
    key: "getColumnSortInfo",
    value: function getColumnSortInfo() {
      var that = { sortInfo: [] };
      for (var k in this.sortInfo) {
        that.sortInfo.push({
          key: k,
          orderBy: this.sortInfo[k].orderBy,
          seq: this.sortInfo[k].seq
        });
      }
      that.sortInfo.sort(function (a, b) {
        return a.seq > b.seq;
      });
      return that.sortInfo;
    }

    /**
     * @method
     * @param {Object} _sortInfo
     * @param {Object} _sortInfo.key
     * @param {Number} _sortInfo.key.seq - seq of sortOrder
     * @param {String} _sortInfo.key.orderBy - "desc"|"asc"
     * @returns {AX6UIGrid}
     * @example
     * ```js
     * grid.setColumnSort({a:{seq:0, orderBy:"desc"}, b:{seq:1, orderBy:"asc"}});
     * ```
     */

  }, {
    key: "setColumnSort",
    value: function setColumnSort(_sortInfo) {
      if (typeof _sortInfo !== "undefined") {
        this.sortInfo = _sortInfo;
        _AX6UIGrid_header2.default.applySortStatus.call(this, _sortInfo);
      }

      sortColumns.call(this, _sortInfo || this.sortInfo);
      return this;
    }

    /**
     * @method
     * @param {Number|Object} _selectObject
     * @param {Number} _selectObject.index - index of row
     * @param {Number} _selectObject.rowIndex - rowIndex of columns
     * @param {Number} _selectObject.conIndex - colIndex of columns
     * @param {Object} _options
     * @param {Boolean} _options.selectedClear
     * @param {Boolean} _options.selected
     * @returns {AX6UIGrid}
     * @example
     * ```js
     * grid.select(0);
     * grid.select(0, {selected: true});
     * grid.select(0, {selected: false});
     * grid.select(0, {selectedClear: true});
     * ```
     */

  }, {
    key: "select",
    value: function select(_selectObject, _options) {
      if (_AX6Util2.default.isNumber(_selectObject)) {
        var dindex = _selectObject;

        if (!this.config.multipleSelect) {
          this.clearSelect();
        } else {
          if (_options && _options.selectedClear) {
            this.clearSelect();
          }
        }

        _AX6UIGrid_data2.default.select.call(this, dindex, undefined, _options && _options.selected);
        _AX6UIGrid_body2.default.updateRowState.call(this, ["selected"], dindex, undefined);
      }
      return this;
    }

    /**
     * @method
     * @param _dindex
     * @return {AX6UIGrid}
     */

  }, {
    key: "clickBody",
    value: function clickBody(_dindex) {
      _AX6UIGrid_body2.default.click.call(this, _dindex);
      return this;
    }

    /**
     * @method
     * @param _dindex
     * @return {AX6UIGrid}
     */

  }, {
    key: "DBLClickBody",
    value: function DBLClickBody(_dindex) {
      _AX6UIGrid_body2.default.dblClick.call(this, _dindex);
      return this;
    }

    /**
     * @method
     * @return {AX6UIGrid}
     */

  }, {
    key: "clearSelect",
    value: function clearSelect() {
      _AX6UIGrid_body2.default.updateRowState.call(this, ["selectedClear"]);
      _AX6UIGrid_data2.default.clearSelect.call(this);
      return this;
    }

    /**
     * @method
     * @param {Object} _options
     * @param {Boolean} _options.selected
     * @param {Function} _options.filter
     * @returns {AX6UIGrid}
     * @example
     * ```js
     * grid.selectAll();
     * grid.selectAll({selected: true});
     * grid.selectAll({selected: false});
     * grid.selectAll({filter: function(){
       *      return this["b"] == "A01";
       * });
       * grid.selectAll({selected: true, filter: function(){
       *      return this["b"] == "A01";
       * });
       * ```
       */

  }, {
    key: "selectAll",
    value: function selectAll(_options) {
      _AX6UIGrid_data2.default.selectAll.call(this, _options && _options.selected, _options);
      _AX6UIGrid_body2.default.updateRowStateAll.call(this, ["selected"]);
      return this;
    }

    /**
     * @method
     * @param {String} _fileName
     * @returns {AX6UIGrid|String}
     * @example
     * ```js
     * grid.exportExcel("grid-to-excel.xls");
     * console.log(grid.exportExcel());
     * ```
     */

  }, {
    key: "exportExcel",
    value: function exportExcel(_fileName) {
      var table = [];
      table.push('<table border="1">');
      table.push(_AX6UIGrid_header2.default.getExcelString.call(this));
      table.push(_AX6UIGrid_body2.default.getExcelString.call(this));
      table.push('</table>');

      if (typeof _fileName === "undefined") {
        return table.join('');
      } else {
        EXCEL.export.call(this, [table.join('')], _fileName);
      }

      return this;
    }

    /**
     * @method
     * @param {String|Number} _pos - UP, DOWN, LEFT, RIGHT, HOME, END
     * @returns {AX6UIGrid}
     * @example
     * ```js
     * grid.focus("UP");
     * grid.focus("DOWN");
     * grid.focus("HOME");
     * grid.focus("END");
     * ```
     */

  }, {
    key: "focus",
    value: function focus(_pos) {

      if (_AX6UIGrid_body2.default.moveFocus.call(this, _pos)) {
        var focusedColumn = void 0;
        for (var c in this.focusedColumn) {
          focusedColumn = _jqmin2.default.extend({}, this.focusedColumn[c], true);
          break;
        }
        if (focusedColumn) {
          this.select(focusedColumn.dindex, { selectedClear: true });
        }
      } else {
        if (typeof this.selectedDataIndexs[0] === "undefined") {
          this.select(0);
        } else {
          var selectedIndex = this.selectedDataIndexs[0];
          var processor = {
            "UP": function UP() {
              if (selectedIndex > 0) {
                this.select(selectedIndex - 1, { selectedClear: true });
                _AX6UIGrid_body2.default.moveFocus.call(this, selectedIndex - 1);
              }
            },
            "DOWN": function DOWN() {
              if (selectedIndex < this.list.length - 1) {
                this.select(selectedIndex + 1, { selectedClear: true });
                _AX6UIGrid_body2.default.moveFocus.call(this, selectedIndex + 1);
              }
            },
            "HOME": function HOME() {
              this.select(0, { selectedClear: true });
              _AX6UIGrid_body2.default.moveFocus.call(this, 0);
            },
            "END": function END() {
              this.select(this.list.length - 1, { selectedClear: true });
              _AX6UIGrid_body2.default.moveFocus.call(this, this.list.length - 1);
            }
          };

          if (_pos in processor) {
            processor[_pos].call(this);
          }
        }
      }
      return this;
    }

    /**
     * @method
     * @return {null}
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.$target.empty();
      this.list = [];

      return null;
    }
  }]);

  return AX6UIGrid;
}(_AX6UICore3.default);

exports.default = AX6UIGrid;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jqmin = __webpack_require__(1);

var _jqmin2 = _interopRequireDefault(_jqmin);

var _AX6UIGrid_body = __webpack_require__(66);

var _AX6UIGrid_body2 = _interopRequireDefault(_AX6UIGrid_body);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var edit_text = {
  useReturnToSave: true,
  editMode: "popup",
  getHtml: function getHtml(_root, _columnKey, _editor, _value) {
    if (typeof _editor.attributes !== "undefined") {
      var attributesText = "";
      for (var k in _editor.attributes) {
        attributesText += " " + k + "='" + _editor.attributes[k] + "'";
      }
    }
    return "<input type=\"text\" data-ax6grid-editor=\"text\" value=\"" + _value + "\" " + attributesText + ">";
  },
  init: function init(_root, _columnKey, _editor, _$parent, _value) {
    var $el;
    _$parent.append($el = (0, _jqmin2.default)(this.getHtml(_root, _columnKey, _editor, _value)));
    this.bindUI(_root, _columnKey, $el, _editor, _$parent, _value);
    $el.on("blur", function () {
      _AX6UIGrid_body2.default.inlineEdit.deActive.call(_root, "RETURN", _columnKey);
    });
    return $el;
  },
  bindUI: function bindUI(_root, _columnKey, _$el, _editor, _$parent, _value) {
    _$el.focus().select();
  }
};

var edit_money = {
  useReturnToSave: true,
  editMode: "popup",
  getHtml: function getHtml(_root, _columnKey, _editor, _value) {
    var attributesText = "";
    if (typeof _editor.attributes !== "undefined") {
      for (var k in _editor.attributes) {
        attributesText += " " + k + "='" + _editor.attributes[k] + "'";
      }
    }
    return '<input type="text" data-ax6grid-editor="money" value="' + _value + '" ' + attributesText + '" />';
  },
  init: function init(_root, _columnKey, _editor, _$parent, _value) {
    var $el = void 0;
    _$parent.append($el = (0, _jqmin2.default)(this.getHtml(_root, _columnKey, _editor, _value)));
    this.bindUI(_root, _columnKey, $el, _editor, _$parent, _value);
    $el.on("blur", function () {
      _AX6UIGrid_body2.default.inlineEdit.deActive.call(_root, "RETURN", _columnKey);
    });
    return $el;
  },
  bindUI: function bindUI(_root, _columnKey, _$el, _editor, _$parent, _value) {
    _$el.data("binded-ax5ui", "ax5formater");
    _$el.ax5formatter($.extend(true, {
      pattern: "money"
    }, _editor.config));
    _$el.focus().select();
  }
};

var edit_number = {
  useReturnToSave: true,
  editMode: "popup",
  getHtml: function getHtml(_root, _columnKey, _editor, _value) {
    var attributesText = "";
    if (typeof _editor.attributes !== "undefined") {
      for (var k in _editor.attributes) {
        attributesText += " " + k + "='" + _editor.attributes[k] + "'";
      }
    }
    return '<input type="text" data-ax6grid-editor="number" value="' + _value + '" ' + attributesText + '" />';
  },
  init: function init(_root, _columnKey, _editor, _$parent, _value) {
    var $el;
    _$parent.append($el = (0, _jqmin2.default)(this.getHtml(_root, _columnKey, _editor, _value)));
    this.bindUI(_root, _columnKey, $el, _editor, _$parent, _value);
    $el.on("blur", function () {
      _AX6UIGrid_body2.default.inlineEdit.deActive.call(_root, "RETURN", _columnKey);
    });
    return $el;
  },
  bindUI: function bindUI(_root, _columnKey, _$el, _editor, _$parent, _value) {
    _$el.data("binded-ax5ui", "ax5formater");
    _$el.ax5formatter($.extend(true, {
      pattern: "number"
    }, _editor.config));
    _$el.focus().select();
  }
};

var edit_date = {
  useReturnToSave: true,
  editMode: "popup",
  getHtml: function getHtml(_root, _columnKey, _editor, _value) {
    return '<input type="text" data-ax6grid-editor="calendar" value="' + _value + '" >';
  },
  init: function init(_root, _columnKey, _editor, _$parent, _value) {
    var $el;
    _$parent.append($el = (0, _jqmin2.default)(this.getHtml(_root, _columnKey, _editor, _value)));
    this.bindUI(_root, _columnKey, $el, _editor, _$parent, _value);
    return $el;
  },
  bindUI: function bindUI(_root, _columnKey, _$el, _editor, _$parent, _value) {
    var self = _root;
    _$el.data("binded-ax5ui", "ax5picker");

    _$el.ax5picker($.extend(true, {
      direction: "auto",
      content: {
        type: 'date',
        formatter: {
          pattern: 'date'
        }
      },
      onStateChanged: function onStateChanged() {
        if (this.state == "open") {
          this.self.activePicker.attr("data-ax6grid-inline-edit-picker", "date");
        } else if (this.state == "close") {
          _AX6UIGrid_body2.default.inlineEdit.deActive.call(self, "RETURN", _columnKey);
        }
      }
    }, _editor.config));

    _$el.focus().select();
  }
};

var edit_select = {
  useReturnToSave: false,
  editMode: "popup",
  getHtml: function getHtml(_root, _columnKey, _editor, _value) {
    var po = [];
    po.push('<div data-ax5select="ax5grid-editor" data-ax5select-config="{}">');
    po.push('</div>');

    return po.join('');
  },
  init: function init(_root, _columnKey, _editor, _$parent, _value) {
    var $el;
    _$parent.append($el = (0, _jqmin2.default)(this.getHtml(_root, _columnKey, _editor, _value)));
    this.bindUI(_root, _columnKey, $el, _editor, _$parent, _value);
    return $el;
  },
  bindUI: function bindUI(_root, _columnKey, _$el, _editor, _$parent, _value) {
    var eConfig = {
      columnKeys: {
        optionValue: "value",
        optionText: "text",
        optionSelected: "selected"
      }
    };
    _jqmin2.default.extend(true, eConfig, _editor.config);

    eConfig.options.forEach(function (n) {
      if (n[eConfig.columnKeys.optionValue] == _value) n[eConfig.columnKeys.optionSelected] = true;
    });

    var self = _root;
    _$el.data("binded-ax5ui", "ax5select");
    _$el.ax5select($.extend(true, {
      direction: "auto",
      columnKeys: eConfig.columnKeys,
      options: eConfig.options,
      onStateChanged: function onStateChanged() {
        if (this.state == "open") {
          this.self.activeSelectOptionGroup.attr("data-ax6grid-inline-edit-picker", "select");
        } else if (this.state == "changeValue") {
          _AX6UIGrid_body2.default.inlineEdit.deActive.call(self, "RETURN", _columnKey, this.value[0][eConfig.columnKeys.optionValue]);
        } else if (this.state == "close") {
          _AX6UIGrid_body2.default.inlineEdit.deActive.call(self, "ESC", _columnKey);
        }
      }
    }, _editor.config));
    _$el.ax5select("open");
    _$el.ax5select("setValue", _value);
    _$el.find("a").focus();
  }
};

var edit_checkbox = {
  editMode: "inline",
  getHtml: function getHtml(_root, _editor, _value) {

    var lineHeight = _root.config.body.columnHeight - _root.config.body.columnPadding * 2 - _root.config.body.columnBorderWidth;
    var checked;
    if (_editor.config && _editor.config.trueValue) {
      checked = _value == _editor.config.trueValue ? "true" : "false";
    } else {
      checked = _value == false || _value == "false" || _value < "1" ? "false" : "true";
    }

    var eConfig = {
      marginTop: 2,
      height: lineHeight - 4
    };
    _jqmin2.default.extend(true, eConfig, _editor.config);
    eConfig.marginTop = (lineHeight - eConfig.height) / 2;

    return '<div data-ax6grid-editor="checkbox" data-ax6grid-checked="' + checked + '" style="height:' + eConfig.height + 'px;width:' + eConfig.height + 'px;margin-top:' + eConfig.marginTop + 'px;"></div>';
  }
};

var edit_textarea = {
  useReturnToSave: false,
  editMode: "popup",
  _getHtml: function _getHtml(_root, _columnKey, _editor, _value) {
    // init 에서 사용하게 될 HTML 태그를 만들어 줍니다.
    return "<div data-ax6grid-editor=\"textarea\"></div>";
  },
  _bindUI: function _bindUI(_root, _columnKey, _$el, _editor, _$parent, _value) {
    // 위치와 크기를 구합니다.
    var offset = _$el.offset();
    var box = {
      width: _$el.width()
    };
    var editorHeight = 150;
    var buttonHeight = 30;

    // 새로운 엘리먼트 생성
    var $newDiv = (0, _jqmin2.default)("<div data-ax6grid-popup=\"textarea\" style=\"z-index: 9999;\">\n    <textarea style=\"width:100%;height:" + (editorHeight - buttonHeight) + "px;\" class=\"form-control\">" + _value + "</textarea>\n    <div style=\"height:" + buttonHeight + "px;padding:5px;text-align: right;\">\n        <button class=\"btn btn-default\">OK</button>\n    </div>\n</div>");
    var $newTextarea = $newDiv.find("textarea");
    // 엘리먼트에 CSS 적용
    $newDiv.css({
      position: "absolute",
      left: offset.left,
      top: offset.top,
      width: box.width,
      height: editorHeight
    });
    $newDiv.find("textarea");

    // 새로운 엘리먼트를 document.body에 append
    (0, _jqmin2.default)(document.body).append($newDiv);
    $newTextarea.focus().select();

    $newTextarea.on("blur", function (e) {
      _AX6UIGrid_body2.default.inlineEdit.deActive.call(_root, "RETURN", _columnKey, this.value);
      $newDiv.remove();
      ax5.util.stopEvent(e.originalEvent);
    });
    $newTextarea.on("keydown", function (e) {
      if (e.which == ax5.info.eventKeys.ESC) {
        _AX6UIGrid_body2.default.inlineEdit.deActive.call(_root, "ESC", _columnKey);
        $newDiv.remove();
        ax5.util.stopEvent(e.originalEvent);
      }
    });

    /// 값 변경
    /// BODY.inlineEdit.deActive.call(_root, "RETURN", _columnKey, this.value[0][eConfig.columnKeys.optionValue]);
    /// 에디팅 취소
    /// BODY.inlineEdit.deActive.call(_root, "ESC", _columnKey);
  },

  init: function init(_root, _columnKey, _editor, _$parent, _value) {
    // 인라인 에디팅 활성화 시작
    /**
     * _root : gridInstance
     * _columnKey : di + "_" + col.colIndex + "_" + col.rowIndex
     * _editor : col.editor
     * _$parent : 셀
     * _value : 값
     */
    var $el = void 0;
    _$parent.append($el = (0, _jqmin2.default)(this._getHtml(_root, _columnKey, _editor, _value)));
    // 셀에 HTML 컨텐츠 추가

    this._bindUI(_root, _columnKey, $el, _editor, _$parent, _value);
    // 이벤트 바인딩

    return $el;
  }
};

exports.default = {
  "text": edit_text,
  "money": edit_money,
  "number": edit_number,
  "date": edit_date,
  "select": edit_select,
  "checkbox": edit_checkbox,
  "textarea": edit_textarea
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AX6Util = __webpack_require__(4);

var _AX6Util2 = _interopRequireDefault(_AX6Util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sum = function sum() {
  var value = 0,
      i = this.list.length;
  while (i--) {
    if (!("__groupingList" in this.list[i])) {
      value += _AX6Util2.default.number(this.list[i][this.key]);
    }
  }
  return value;
};

var avg = function avg() {
  var value = 0,
      i = this.list.length,
      listLength = 0;
  while (i--) {
    if (!("__groupingList" in this.list[i])) {
      value += _AX6Util2.default.number(this.list[i][this.key]);
      listLength++;
    }
  }
  return _AX6Util2.default.number(value / (listLength || 1), { "round": 2 });
};

/**
 * @module AX6UIGrid_collector
 */
exports.default = {
  /**
   *
   */
  sum: sum,
  /**
   *
   */
  avg: avg
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AX6Util = __webpack_require__(4);

var _AX6Util2 = _interopRequireDefault(_AX6Util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var money = function money() {
  if (typeof this.value !== "undefined") {
    var val = ('' + this.value).replace(/[^0-9^\.^\-]/g, ""),
        regExpPattern = new RegExp('([0-9])([0-9][0-9][0-9][,.])'),
        arrNumber = val.split('.'),
        returnValue = void 0;

    arrNumber[0] += '.';

    do {
      arrNumber[0] = arrNumber[0].replace(regExpPattern, '$1,$2');
    } while (regExpPattern.test(arrNumber[0]));

    return arrNumber.length > 1 ? arrNumber[0] + _AX6Util2.default.left(arrNumber[1], 2) : arrNumber[0].split('.')[0];
  } else {
    return "";
  }
};

exports.default = {
  money: money
};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var main = function main() {
    return "<div data-ax6grid-container=\"root\" data-ax6grid-instance=\"{{instanceId}}\">\n            <div data-ax6grid-container=\"hidden\">\n                <textarea data-ax6grid-form=\"clipboard\"></textarea>\n            </div>\n            <div data-ax6grid-container=\"header\">\n                <div data-ax6grid-panel=\"aside-header\"></div>\n                <div data-ax6grid-panel=\"left-header\"></div>\n                <div data-ax6grid-panel=\"header\">\n                    <div data-ax6grid-panel-scroll=\"header\"></div>\n                </div>\n                <div data-ax6grid-panel=\"right-header\"></div>\n            </div>\n            <div data-ax6grid-container=\"body\">\n                <div data-ax6grid-panel=\"top-aside-body\"></div>\n                <div data-ax6grid-panel=\"top-left-body\"></div>\n                <div data-ax6grid-panel=\"top-body\">\n                    <div data-ax6grid-panel-scroll=\"top-body\"></div>\n                </div>\n                <div data-ax6grid-panel=\"top-right-body\"></div>\n                <div data-ax6grid-panel=\"aside-body\">\n                    <div data-ax6grid-panel-scroll=\"aside-body\"></div>\n                </div>\n                <div data-ax6grid-panel=\"left-body\">\n                    <div data-ax6grid-panel-scroll=\"left-body\"></div>\n                </div>\n                <div data-ax6grid-panel=\"body\">\n                    <div data-ax6grid-panel-scroll=\"body\"></div>\n                </div>\n                <div data-ax6grid-panel=\"right-body\">\n                  <div data-ax6grid-panel-scroll=\"right-body\"></div>\n                </div>\n                <div data-ax6grid-panel=\"bottom-aside-body\"></div>\n                <div data-ax6grid-panel=\"bottom-left-body\"></div>\n                <div data-ax6grid-panel=\"bottom-body\">\n                    <div data-ax6grid-panel-scroll=\"bottom-body\"></div>\n                </div>\n                <div data-ax6grid-panel=\"bottom-right-body\"></div>\n            </div>\n            <div data-ax6grid-container=\"page\">\n                <div data-ax6grid-page=\"holder\">\n                    <div data-ax6grid-page=\"navigation\"></div>\n                    <div data-ax6grid-page=\"status\"></div>\n                </div>\n            </div>\n            <div data-ax6grid-container=\"scroller\">\n                <div data-ax6grid-scroller=\"vertical\">\n                    <div data-ax6grid-scroller=\"vertical-bar\"></div>    \n                </div>\n                <div data-ax6grid-scroller=\"horizontal\">\n                    <div data-ax6grid-scroller=\"horizontal-bar\"></div>\n                </div>\n                <div data-ax6grid-scroller=\"corner\"></div>\n            </div>\n            <div data-ax6grid-resizer=\"vertical\"></div>\n            <div data-ax6grid-resizer=\"horizontal\"></div>\n        </div>";
};

var page_navigation = function page_navigation() {
    return "<div data-ax6grid-page-navigation=\"holder\">\n            {{#hasPage}}\n            <div data-ax6grid-page-navigation=\"cell\">    \n                {{#firstIcon}}<button type=\"button\" data-ax6grid-page-move=\"first\">{{{firstIcon}}}</button>{{/firstIcon}}\n                <button type=\"button\" data-ax6grid-page-move=\"prev\">{{{prevIcon}}}</button>\n            </div>\n            <div data-ax6grid-page-navigation=\"cell-paging\">\n                {{#@paging}}\n                <button type=\"button\" data-ax6grid-page-move=\"{{pageNo}}\" data-ax6grid-page-selected=\"{{selected}}\">{{pageNo}}</button>\n                {{/@paging}}\n            </div>\n            <div data-ax6grid-page-navigation=\"cell\">\n                <button type=\"button\" data-ax6grid-page-move=\"next\">{{{nextIcon}}}</button>\n                {{#lastIcon}}<button type=\"button\" data-ax6grid-page-move=\"last\">{{{lastIcon}}}</button>{{/lastIcon}}\n            </div>\n            {{/hasPage}}\n        </div>";
};

var page_status = function page_status() {
    return "<span>{{{progress}}} {{fromRowIndex}} - {{toRowIndex}} of {{dataRowCount}} {{#totalElements}}&nbsp; Total {{.}}{{/totalElements}}</span>";
};

exports.default = {
    "main": main,
    "page_navigation": page_navigation,
    "page_status": page_status
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(104);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../samples/node_modules/css-loader/index.js!../../samples/node_modules/sass-loader/lib/loader.js!./style.scss", function() {
			var newContent = require("!!../../samples/node_modules/css-loader/index.js!../../samples/node_modules/sass-loader/lib/loader.js!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "[data-ax6ui-grid] {\n  box-sizing: border-box; }\n  [data-ax6ui-grid] *,\n  [data-ax6ui-grid] *:before,\n  [data-ax6ui-grid] *:after {\n    box-sizing: border-box; }\n  [data-ax6ui-grid] [data-ax6grid-container=\"root\"] {\n    margin: 0;\n    padding: 0;\n    position: relative;\n    background: #fff;\n    border: 1px solid #ccc;\n    overflow: hidden; }\n    [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"hidden\"] {\n      margin: 0;\n      padding: 0;\n      position: absolute;\n      left: -100%;\n      top: -100%;\n      height: 100%;\n      width: 100%; }\n    [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] {\n      user-select: none;\n      margin: 0;\n      padding: 0;\n      position: relative;\n      overflow: hidden;\n      background-color: #FFFFFF;\n      background-image: -webkit-linear-gradient(top, #FFFFFF, #F0F0F0);\n      background-image: linear-gradient(to bottom,#FFFFFF, #F0F0F0);\n      border: 0 none;\n      border-bottom: 1px solid #ccc;\n      color: #222; }\n      [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] {\n        margin: 0;\n        padding: 0;\n        position: absolute;\n        overflow: hidden;\n        /*\n    overflow: hidden;\n    -webkit-overflow-scrolling: touch;\n    transform: translate3d(0, 0, 0);\n    */ }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table {\n          table-layout: fixed;\n          border-collapse: separate;\n          border-spacing: 0;\n          border: 0 none;\n          width: 100%;\n          height: 100%; }\n          [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr {\n            border-bottom: 0 none; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr.tr-0 {\n              background: #f3f3f3; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr.tr-1 {\n              background: #fff; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr.tr-2 {\n              background: #f3f3f3; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr.tr-3 {\n              background: #fff; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr.hover {\n              background: #e1eef8; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr[data-ax6grid-grouping-tr=\"true\"] {\n              background: #ffffe7; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr[data-ax6grid-selected=\"true\"] {\n              background: #e3f1ff; }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr[data-ax6grid-selected=\"true\"] td[data-ax6grid-column-attr=\"rowSelector\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr[data-ax6grid-selected=\"true\"] td[data-ax6grid-column-attr=\"lineNumber\"] {\n                box-shadow: none; }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr[data-ax6grid-selected=\"true\"] td[data-ax6grid-column-attr=\"rowSelector\"] .checkBox:after {\n                opacity: 1; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr[data-ax6grid-disable-selection=\"true\"] td[data-ax6grid-column-attr=\"rowSelector\"] .checkBox {\n              cursor: not-allowed;\n              background-color: #d7d7d7;\n              background-image: -webkit-linear-gradient(top, #d7d7d7, #e6e6e6);\n              background-image: linear-gradient(to bottom,#d7d7d7, #e6e6e6); }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr[data-ax6grid-disable-selection=\"true\"] td[data-ax6grid-column-attr=\"rowSelector\"] .checkBox:after {\n                opacity: 0; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td.merged {\n              background: #fff; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td {\n              box-sizing: border-box;\n              overflow: hidden;\n              position: relative;\n              padding: 0;\n              font-size: 12px;\n              border: 0 none;\n              border-radius: 0;\n              cursor: pointer;\n              box-shadow: inset 1px 1px 0px 0px #fff; }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td.hasBorder {\n                border-right: 1px solid #ccc;\n                border-bottom: 1px solid #ccc; }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td.focused {\n                box-shadow: inset 0px 0px 1px 1px #0581f2; }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td:hover {\n                background-color: #eee;\n                background-image: -webkit-linear-gradient(top, #eee, #eee);\n                background-image: linear-gradient(to bottom,#eee, #eee); }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td[data-ax6grid-column-row=\"null\"] {\n                box-shadow: none; }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td[data-ax6grid-column-row=\"null\"] {\n                border-right: 0 none; }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td[data-ax6grid-column-selected] {\n                background: #e3f1ff;\n                border-color: #ccc;\n                color: #000; }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td[data-ax6grid-column-focused] {\n                box-shadow: inset 0px 0px 1px 1px #0581f2;\n                background: #fdfeff;\n                color: #000; }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td[data-ax6grid-column-attr=\"rowSelector\"] {\n                cursor: pointer; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td[data-ax6grid-column-attr=\"rowSelector\"] [data-ax6grid-cellHolder] {\n                  padding: 5px; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td[data-ax6grid-column-attr=\"rowSelector\"] .checkBox {\n                  display: inline-block;\n                  position: relative;\n                  border: 1px solid #ccc;\n                  border-radius: 3px;\n                  background-color: #FFFFFF;\n                  background-image: -webkit-linear-gradient(top, #FFFFFF, #F0F0F0);\n                  background-image: linear-gradient(to bottom,#FFFFFF, #F0F0F0);\n                  height: 100%;\n                  width: 100%; }\n                  [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td[data-ax6grid-column-attr=\"rowSelector\"] .checkBox:after {\n                    content: '';\n                    width: 60%;\n                    height: 40%;\n                    position: absolute;\n                    top: 20%;\n                    right: 20%;\n                    border: 0.2em solid #3372ff;\n                    border-top: none;\n                    border-right: none;\n                    background: transparent;\n                    opacity: 0.0;\n                    -webkit-transform: rotate(-50deg);\n                    -moz-transform: rotate(-50deg);\n                    -ms-transform: rotate(-50deg);\n                    -o-transform: rotate(-50deg);\n                    transform: rotate(-50deg); }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td[data-ax6grid-column-attr=\"rowSelector\"][data-ax6grid-selected=\"true\"] .checkBox:after {\n                  opacity: 1; }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] {\n                display: block;\n                box-sizing: border-box;\n                padding: 3px 5px;\n                font-size: 12px;\n                white-space: nowrap;\n                overflow: hidden;\n                text-overflow: ellipsis; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder][data-ax6grid-text-align=\"left\"] {\n                  text-align: left; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder][data-ax6grid-text-align=\"center\"] {\n                  text-align: center; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder][data-ax6grid-text-align=\"right\"] {\n                  text-align: right; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder][data-ax6grid-cellHolder=\"multiLine\"] {\n                  white-space: normal; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] [data-ax6grid-editor] {\n                  position: absolute;\n                  left: 0;\n                  top: 0;\n                  width: 100%;\n                  height: 100%;\n                  border: 0 none;\n                  background: #fff; }\n                  [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] [data-ax6grid-editor]::-ms-clear {\n                    display: none; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] [data-ax5select] {\n                  position: absolute;\n                  display: block;\n                  left: 0;\n                  top: 0;\n                  width: 100%;\n                  height: 100%;\n                  border: 0 none;\n                  background: #fff; }\n                  [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] [data-ax5select] .ax5select-display {\n                    height: 100%;\n                    border-radius: 0; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] [data-ax6grid-editor=\"checkbox\"] {\n                  display: inline-block;\n                  position: relative;\n                  border: 1px solid #ccc;\n                  border-radius: 3px;\n                  background-color: #FFFFFF;\n                  background-image: -webkit-linear-gradient(top, #FFFFFF, #F0F0F0);\n                  background-image: linear-gradient(to bottom,#FFFFFF, #F0F0F0);\n                  height: 100%; }\n                  [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] [data-ax6grid-editor=\"checkbox\"]:after {\n                    content: '';\n                    width: 60%;\n                    height: 40%;\n                    position: absolute;\n                    top: 20%;\n                    right: 20%;\n                    border: 0.2em solid #3372ff;\n                    border-top: none;\n                    border-right: none;\n                    background: transparent;\n                    opacity: 0.0;\n                    -webkit-transform: rotate(-50deg);\n                    -moz-transform: rotate(-50deg);\n                    -ms-transform: rotate(-50deg);\n                    -o-transform: rotate(-50deg);\n                    transform: rotate(-50deg); }\n                  [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] [data-ax6grid-editor=\"checkbox\"][data-ax6grid-checked=\"true\"]:after {\n                    opacity: 1.0; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] [data-ax6grid-tnode-arrow] {\n                  display: inline-block;\n                  box-sizing: content-box;\n                  text-align: right;\n                  text-shadow: 0 -1px #fff;\n                  padding: 0 5px 0 0; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] a[data-ax6grid-tnode-arrow] {\n                  cursor: pointer;\n                  text-decoration: none; }\n                  [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] a[data-ax6grid-tnode-arrow]:hover {\n                    text-decoration: none; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] [data-ax6grid-tnode-item=\"group\"] {\n                  display: inline-block; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] [data-ax6grid-tnode-item=\"item\"] {\n                  display: inline-block; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"aside-header\"] {\n          border-right: 1px solid #cccccc; }\n          [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"aside-header\"] table tr td {\n            text-align: center; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"top-aside-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"aside-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-aside-body\"] {\n          border-right: 1px solid #cccccc;\n          background: #f2f2f2; }\n          [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"top-aside-body\"] table tr, [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"aside-body\"] table tr, [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-aside-body\"] table tr {\n            background: #f2f2f2; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"top-aside-body\"] table tr td, [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"aside-body\"] table tr td, [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-aside-body\"] table tr td {\n              text-align: center;\n              box-shadow: inset 1px 1px 0px 0px #fff; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"left-header\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"top-left-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"left-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-left-body\"] {\n          border-right: 1px solid #b3b3b3; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"top-aside-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"top-left-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"top-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"top-right-body\"] {\n          border-bottom: 1px solid #b3b3b3; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-aside-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-left-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-right-body\"] {\n          border-top: 1px solid #b3b3b3; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-aside-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-left-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-right-body\"] {\n          background: #ffe7e2; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] [data-ax6grid-panel-scroll] {\n          position: absolute;\n          left: 0;\n          top: 0; }\n      [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-column-resizer] {\n        position: absolute;\n        right: 0;\n        top: 0;\n        width: 4px;\n        height: 100%;\n        cursor: col-resize; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-column-resizer]:hover {\n          background: #ff3300;\n          opacity: 0.5; }\n      [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-column-sort] {\n        position: relative;\n        width: 10;\n        height: 10;\n        display: inline-block; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-column-sort]:before {\n          top: 0;\n          left: 0;\n          position: absolute;\n          content: ' ';\n          width: 0;\n          height: 0;\n          display: inline-block;\n          border-left: 3.6px solid transparent;\n          border-right: 3.6px solid transparent;\n          border-bottom: 4.09091px solid #000;\n          background: transparent;\n          opacity: 0.3; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-column-sort]:after {\n          bottom: 0;\n          left: 0;\n          position: absolute;\n          content: ' ';\n          width: 0;\n          height: 0;\n          display: inline-block;\n          border-left: 3.6px solid transparent;\n          border-right: 3.6px solid transparent;\n          border-top: 4.09091px solid #000;\n          background: transparent;\n          opacity: 0.3; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-column-sort][data-ax6grid-column-sort-order=\"asc\"]:before {\n          top: 2px;\n          left: 0;\n          position: absolute;\n          content: ' ';\n          width: 0;\n          height: 0;\n          display: inline-block;\n          border-left: 4px solid transparent;\n          border-right: 4px solid transparent;\n          border-bottom: 5px solid #000;\n          background: transparent;\n          opacity: 0.8; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-column-sort][data-ax6grid-column-sort-order=\"asc\"]:after {\n          display: none; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-column-sort][data-ax6grid-column-sort-order=\"desc\"]:before {\n          display: none; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-column-sort][data-ax6grid-column-sort-order=\"desc\"]:after {\n          bottom: 2px;\n          left: 0;\n          position: absolute;\n          content: ' ';\n          width: 0;\n          height: 0;\n          display: inline-block;\n          border-left: 4px solid transparent;\n          border-right: 4px solid transparent;\n          border-top: 5px solid #000;\n          background: transparent;\n          opacity: 0.8; }\n      [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-column-filter] {\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 10;\n        height: 10;\n        cursor: pointer; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-column-filter]:before {\n          content: ' ';\n          width: 0;\n          height: 0;\n          display: inline-block;\n          border-left: 5 solid transparent;\n          border-right: 5 solid transparent;\n          border-top: 10 solid #000;\n          background: transparent;\n          opacity: 1; }\n    [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] {\n      margin: 0;\n      padding: 0;\n      position: relative;\n      overflow: hidden;\n      /*\n      @keyframes fadein {\n          from { opacity: 0; }\n          to   { opacity: 1; }\n      }\n\n      [data-ax6grid-panel-scroll=\"body\"]{\n          table {\n              @include animation(fadein 0.3s);\n          }\n      }\n      */ }\n      [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] {\n        margin: 0;\n        padding: 0;\n        position: absolute;\n        overflow: hidden;\n        /*\n    overflow: hidden;\n    -webkit-overflow-scrolling: touch;\n    transform: translate3d(0, 0, 0);\n    */ }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table {\n          table-layout: fixed;\n          border-collapse: separate;\n          border-spacing: 0;\n          border: 0 none;\n          width: 100%; }\n          [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr {\n            border-bottom: 0 none; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr.tr-0 {\n              background: #f3f3f3; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr.tr-1 {\n              background: #fff; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr.tr-2 {\n              background: #f3f3f3; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr.tr-3 {\n              background: #fff; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr.hover {\n              background: #e1eef8; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr[data-ax6grid-grouping-tr=\"true\"] {\n              background: #ffffe7; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr[data-ax6grid-selected=\"true\"] {\n              background: #e3f1ff; }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr[data-ax6grid-selected=\"true\"] td[data-ax6grid-column-attr=\"rowSelector\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr[data-ax6grid-selected=\"true\"] td[data-ax6grid-column-attr=\"lineNumber\"] {\n                box-shadow: none; }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr[data-ax6grid-selected=\"true\"] td[data-ax6grid-column-attr=\"rowSelector\"] .checkBox:after {\n                opacity: 1; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr[data-ax6grid-disable-selection=\"true\"] td[data-ax6grid-column-attr=\"rowSelector\"] .checkBox {\n              cursor: not-allowed;\n              background-color: #d7d7d7;\n              background-image: -webkit-linear-gradient(top, #d7d7d7, #e6e6e6);\n              background-image: linear-gradient(to bottom,#d7d7d7, #e6e6e6); }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr[data-ax6grid-disable-selection=\"true\"] td[data-ax6grid-column-attr=\"rowSelector\"] .checkBox:after {\n                opacity: 0; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td.merged {\n              background: #fff; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td {\n              box-sizing: border-box;\n              overflow: hidden;\n              position: relative;\n              padding: 0;\n              font-size: 12px;\n              border: 0 none;\n              border-radius: 0; }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td.hasBorder {\n                border-right: 1px solid #ccc;\n                border-bottom: 1px solid #ccc; }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td.focused {\n                box-shadow: inset 0px 0px 1px 1px #0581f2; }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td[data-ax6grid-column-row=\"null\"] {\n                border-right: 0 none; }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td[data-ax6grid-column-selected] {\n                background: #e3f1ff;\n                border-color: #ccc;\n                color: #000; }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td[data-ax6grid-column-focused] {\n                box-shadow: inset 0px 0px 1px 1px #0581f2;\n                background: #fdfeff;\n                color: #000; }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td[data-ax6grid-column-attr=\"rowSelector\"] {\n                cursor: pointer; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td[data-ax6grid-column-attr=\"rowSelector\"] [data-ax6grid-cellHolder] {\n                  padding: 5px; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td[data-ax6grid-column-attr=\"rowSelector\"] .checkBox {\n                  display: inline-block;\n                  position: relative;\n                  border: 1px solid #ccc;\n                  border-radius: 3px;\n                  background-color: #FFFFFF;\n                  background-image: -webkit-linear-gradient(top, #FFFFFF, #F0F0F0);\n                  background-image: linear-gradient(to bottom,#FFFFFF, #F0F0F0);\n                  height: 100%;\n                  width: 100%; }\n                  [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td[data-ax6grid-column-attr=\"rowSelector\"] .checkBox:after {\n                    content: '';\n                    width: 60%;\n                    height: 40%;\n                    position: absolute;\n                    top: 20%;\n                    right: 20%;\n                    border: 0.2em solid #3372ff;\n                    border-top: none;\n                    border-right: none;\n                    background: transparent;\n                    opacity: 0.0;\n                    -webkit-transform: rotate(-50deg);\n                    -moz-transform: rotate(-50deg);\n                    -ms-transform: rotate(-50deg);\n                    -o-transform: rotate(-50deg);\n                    transform: rotate(-50deg); }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td[data-ax6grid-column-attr=\"rowSelector\"][data-ax6grid-selected=\"true\"] .checkBox:after {\n                  opacity: 1; }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] {\n                display: block;\n                box-sizing: border-box;\n                padding: 3px 5px;\n                font-size: 12px;\n                white-space: nowrap;\n                overflow: hidden;\n                text-overflow: ellipsis; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder][data-ax6grid-text-align=\"left\"] {\n                  text-align: left; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder][data-ax6grid-text-align=\"center\"] {\n                  text-align: center; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder][data-ax6grid-text-align=\"right\"] {\n                  text-align: right; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder][data-ax6grid-cellHolder=\"multiLine\"] {\n                  white-space: normal; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] [data-ax6grid-editor] {\n                  position: absolute;\n                  left: 0;\n                  top: 0;\n                  width: 100%;\n                  height: 100%;\n                  border: 0 none;\n                  background: #fff; }\n                  [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] [data-ax6grid-editor]::-ms-clear {\n                    display: none; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] [data-ax5select] {\n                  position: absolute;\n                  display: block;\n                  left: 0;\n                  top: 0;\n                  width: 100%;\n                  height: 100%;\n                  border: 0 none;\n                  background: #fff; }\n                  [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] [data-ax5select] .ax5select-display {\n                    height: 100%;\n                    border-radius: 0; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] [data-ax6grid-editor=\"checkbox\"] {\n                  display: inline-block;\n                  position: relative;\n                  border: 1px solid #ccc;\n                  border-radius: 3px;\n                  background-color: #FFFFFF;\n                  background-image: -webkit-linear-gradient(top, #FFFFFF, #F0F0F0);\n                  background-image: linear-gradient(to bottom,#FFFFFF, #F0F0F0);\n                  height: 100%; }\n                  [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] [data-ax6grid-editor=\"checkbox\"]:after {\n                    content: '';\n                    width: 60%;\n                    height: 40%;\n                    position: absolute;\n                    top: 20%;\n                    right: 20%;\n                    border: 0.2em solid #3372ff;\n                    border-top: none;\n                    border-right: none;\n                    background: transparent;\n                    opacity: 0.0;\n                    -webkit-transform: rotate(-50deg);\n                    -moz-transform: rotate(-50deg);\n                    -ms-transform: rotate(-50deg);\n                    -o-transform: rotate(-50deg);\n                    transform: rotate(-50deg); }\n                  [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] [data-ax6grid-editor=\"checkbox\"][data-ax6grid-checked=\"true\"]:after {\n                    opacity: 1.0; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] [data-ax6grid-tnode-arrow] {\n                  display: inline-block;\n                  box-sizing: content-box;\n                  text-align: right;\n                  text-shadow: 0 -1px #fff;\n                  padding: 0 5px 0 0; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] a[data-ax6grid-tnode-arrow] {\n                  cursor: pointer;\n                  text-decoration: none; }\n                  [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] a[data-ax6grid-tnode-arrow]:hover {\n                    text-decoration: none; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] [data-ax6grid-tnode-item=\"group\"] {\n                  display: inline-block; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] [data-ax6grid-tnode-item=\"item\"] {\n                  display: inline-block; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"aside-header\"] {\n          border-right: 1px solid #cccccc; }\n          [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"aside-header\"] table tr td {\n            text-align: center; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"top-aside-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"aside-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-aside-body\"] {\n          border-right: 1px solid #cccccc;\n          background: #f2f2f2; }\n          [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"top-aside-body\"] table tr, [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"aside-body\"] table tr, [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-aside-body\"] table tr {\n            background: #f2f2f2; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"top-aside-body\"] table tr td, [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"aside-body\"] table tr td, [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-aside-body\"] table tr td {\n              text-align: center;\n              box-shadow: inset 1px 1px 0px 0px #fff; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"left-header\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"top-left-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"left-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-left-body\"] {\n          border-right: 1px solid #b3b3b3; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"top-aside-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"top-left-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"top-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"top-right-body\"] {\n          border-bottom: 1px solid #b3b3b3; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-aside-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-left-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-right-body\"] {\n          border-top: 1px solid #b3b3b3; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-aside-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-left-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-right-body\"] {\n          background: #ffe7e2; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] [data-ax6grid-panel-scroll] {\n          position: absolute;\n          left: 0;\n          top: 0; }\n    [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"page\"] {\n      margin: 0;\n      padding: 0;\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      width: 100%;\n      overflow: hidden;\n      background-color: #FFFFFF;\n      background-image: -webkit-linear-gradient(top, #FFFFFF, #F0F0F0);\n      background-image: linear-gradient(to bottom,#FFFFFF, #F0F0F0);\n      border: 0 none;\n      border-top: 1px solid #ccc; }\n      [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"page\"] [data-ax6grid-page=\"holder\"] {\n        margin: 0;\n        padding: 0;\n        display: table;\n        width: 100%;\n        height: 100%; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"page\"] [data-ax6grid-page=\"holder\"] [data-ax6grid-page=\"navigation\"] {\n          margin: 0;\n          padding: 0;\n          display: table-cell;\n          vertical-align: middle;\n          text-align: left;\n          padding-left: 5px;\n          font-size: 12px; }\n          [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"page\"] [data-ax6grid-page=\"holder\"] [data-ax6grid-page=\"navigation\"] [data-ax6grid-page-navigation=\"holder\"] {\n            display: table; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"page\"] [data-ax6grid-page=\"holder\"] [data-ax6grid-page=\"navigation\"] [data-ax6grid-page-navigation=\"holder\"] [data-ax6grid-page-navigation=\"cell\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"page\"] [data-ax6grid-page=\"holder\"] [data-ax6grid-page=\"navigation\"] [data-ax6grid-page-navigation=\"holder\"] [data-ax6grid-page-navigation=\"cell-paging\"] {\n              display: table-cell;\n              vertical-align: middle; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"page\"] [data-ax6grid-page=\"holder\"] [data-ax6grid-page=\"navigation\"] [data-ax6grid-page-navigation=\"holder\"] [data-ax6grid-page-navigation=\"cell-paging\"] {\n              padding: 0 5px; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"page\"] [data-ax6grid-page=\"holder\"] [data-ax6grid-page=\"navigation\"] [data-ax6grid-page-navigation=\"holder\"] [data-ax6grid-page-move] {\n              box-sizing: border-box;\n              min-width: 20px;\n              border-radius: 5px;\n              padding: 1px;\n              border: 0px none;\n              background: transparent;\n              font-size: 11px;\n              color: #222;\n              outline: 0; }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"page\"] [data-ax6grid-page=\"holder\"] [data-ax6grid-page=\"navigation\"] [data-ax6grid-page-navigation=\"holder\"] [data-ax6grid-page-move][data-ax6grid-page-selected=\"true\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"page\"] [data-ax6grid-page=\"holder\"] [data-ax6grid-page=\"navigation\"] [data-ax6grid-page-navigation=\"holder\"] [data-ax6grid-page-move]:active {\n                background-color: #888;\n                color: #fff; }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"page\"] [data-ax6grid-page=\"holder\"] [data-ax6grid-page=\"navigation\"] [data-ax6grid-page-navigation=\"holder\"] [data-ax6grid-page-move]:hover {\n                text-decoration: underline; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"page\"] [data-ax6grid-page=\"holder\"] [data-ax6grid-page=\"status\"] {\n          margin: 0;\n          padding: 0;\n          display: table-cell;\n          text-align: right;\n          vertical-align: middle;\n          padding-right: 10px;\n          font-size: 12px;\n          color: #222; }\n    [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"scroller\"] {\n      margin: 0;\n      padding: 0;\n      position: absolute;\n      right: 0;\n      bottom: 0; }\n      [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"scroller\"] [data-ax6grid-scroller=\"vertical\"] {\n        box-sizing: border-box;\n        position: absolute;\n        display: none;\n        right: 0;\n        bottom: 0;\n        width: 15px;\n        height: 100%;\n        background: #f3f3f3;\n        border-left: 1px solid #ccc; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"scroller\"] [data-ax6grid-scroller=\"vertical\"] [data-ax6grid-scroller=\"vertical-bar\"] {\n          position: absolute;\n          top: 0;\n          left: 0;\n          border-top-left-radius: 10px;\n          border-top-right-radius: 10px;\n          border-bottom-left-radius: 10px;\n          border-bottom-right-radius: 10px;\n          box-sizing: border-box;\n          border: 0px solid #fff;\n          background: #ccc;\n          cursor: ns-resize; }\n          [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"scroller\"] [data-ax6grid-scroller=\"vertical\"] [data-ax6grid-scroller=\"vertical-bar\"]:hover {\n            border: 0px solid #ccc;\n            background: #bababa; }\n      [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"scroller\"] [data-ax6grid-scroller=\"horizontal\"] {\n        box-sizing: border-box;\n        position: absolute;\n        display: none;\n        right: 0;\n        bottom: 0;\n        height: 15px;\n        width: 100%;\n        background: #f3f3f3;\n        border-top: 1px solid #ccc; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"scroller\"] [data-ax6grid-scroller=\"horizontal\"] [data-ax6grid-scroller=\"horizontal-bar\"] {\n          position: absolute;\n          top: 0;\n          left: 0;\n          border-top-left-radius: 10px;\n          border-top-right-radius: 10px;\n          border-bottom-left-radius: 10px;\n          border-bottom-right-radius: 10px;\n          box-sizing: border-box;\n          border: 0px solid #fff;\n          background: #ccc;\n          cursor: ew-resize; }\n          [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"scroller\"] [data-ax6grid-scroller=\"horizontal\"] [data-ax6grid-scroller=\"horizontal-bar\"]:hover {\n            border: 0px solid #ccc;\n            background: #bababa; }\n      [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"scroller\"] [data-ax6grid-scroller=\"corner\"] {\n        position: absolute;\n        display: none;\n        right: 0;\n        bottom: 0;\n        width: 15px;\n        height: 15px;\n        background: #EAEDEF;\n        border-top: 1px solid #ccc;\n        border-left: 1px solid #ccc; }\n    [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-resizer=\"horizontal\"] {\n      display: none; }\n      [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-resizer=\"horizontal\"].live {\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        background: #ff3300;\n        opacity: 0.5;\n        height: 100%;\n        width: 2px;\n        cursor: col-resize; }\n    [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-resizer=\"vertical\"] {\n      display: none; }\n      [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-resizer=\"vertical\"].live {\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        background: #ff3300;\n        opacity: 0.5;\n        height: 2px;\n        width: 100%;\n        cursor: row-resize; }\n", ""]);

// exports


/***/ })
]));