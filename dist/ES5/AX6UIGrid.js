"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jqmin = require("jqmin");

var _jqmin2 = _interopRequireDefault(_jqmin);

var _AX6UICore2 = require("./AX6UICore.js");

var _AX6UICore3 = _interopRequireDefault(_AX6UICore2);

var _AX6Util = require("./AX6Util");

var _AX6Util2 = _interopRequireDefault(_AX6Util);

var _AX6Info = require("./AX6Info");

var _AX6Info2 = _interopRequireDefault(_AX6Info);

var _AX6Mustache = require("./AX6Mustache");

var _AX6Mustache2 = _interopRequireDefault(_AX6Mustache);

var _AX6UIGrid_data = require("./AX6UIGrid/AX6UIGrid_data");

var _AX6UIGrid_data2 = _interopRequireDefault(_AX6UIGrid_data);

var _AX6UIGrid_header = require("./AX6UIGrid/AX6UIGrid_header");

var _AX6UIGrid_header2 = _interopRequireDefault(_AX6UIGrid_header);

var _AX6UIGrid_body = require("./AX6UIGrid/AX6UIGrid_body");

var _AX6UIGrid_body2 = _interopRequireDefault(_AX6UIGrid_body);

var _AX6UIGrid_scroller = require("./AX6UIGrid/AX6UIGrid_scroller");

var _AX6UIGrid_scroller2 = _interopRequireDefault(_AX6UIGrid_scroller);

var _AX6UIGrid_page = require("./AX6UIGrid/AX6UIGrid_page");

var _AX6UIGrid_page2 = _interopRequireDefault(_AX6UIGrid_page);

var _AX6UIGrid_tmpl = require("./AX6UIGrid/AX6UIGrid_tmpl");

var _AX6UIGrid_tmpl2 = _interopRequireDefault(_AX6UIGrid_tmpl);

var _AX6UIGrid_util = require("./AX6UIGrid/AX6UIGrid_util");

var _AX6UIGrid_util2 = _interopRequireDefault(_AX6UIGrid_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** ~~~~~~~~~~~~~~~~~~ end of import  ~~~~~~~~~~~~~~~~~~~~ **/

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
    verticalScrollerWidth = CT_HEIGHT - headerHeight - pageHeight - footSumHeight < this.list.length * this.xvar.bodyTrHeight ? this.config.scroller.size : 0;
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
      verticalScrollerWidth = CT_HEIGHT - headerHeight - pageHeight - footSumHeight - horizontalScrollerHeight < this.list.length * this.xvar.bodyTrHeight ? this.config.scroller.size : 0;
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
/** ~~~~~~~~~~~~~~~~~~ end of private  ~~~~~~~~~~~~~~~~~~~~ **/

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

        (0, _jqmin2.default)(window).on("resize.ax6grid-" + this.id, _AX6Util2.default.throttle(function (e) {
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

        (0, _jqmin2.default)(document.body).on("click.ax6grid-" + this.id, function (e) {
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
      alignGrid.call(this);
      _AX6UIGrid_body2.default.repaint.call(this);
      if (!isFirstPaint) _AX6UIGrid_body2.default.scrollTo.call(this, { top: 0 });

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