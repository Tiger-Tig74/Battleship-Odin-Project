/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: system-ui, -apple-system, sans-serif;
    background: #0f172a;
    color: #e2e8f0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

header {
    text-align: center;
    padding: 1.5rem 1rem 0.5rem;
}

header h1 {
    font-size: 1.8rem;
    letter-spacing: 2px;
}

#status {
    margin-top: 0.5rem;
    font-size: 1rem;
    color: #93c5fd;
    min-height: 1.4em;
}

#app {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 2.5rem;
    padding: 1.5rem;
    justify-content: center;
}

.board-section h2 {
    font-size: 1rem;
    text-align: center;
    margin-bottom: 0.5rem;
    color: #cbd5e1;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.board {
    display: grid;
    grid-template-columns: repeat(10, 36px);
    grid-template-rows: repeat(10, 36px);
    gap: 2px;
    background: #1e293b;
    padding: 4px;
    border-radius: 6px;
}

.cell {
    width: 36px;
    height: 36px;
    background: #334155;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #e2e8f0;
    transition: background 0.15s;
}

.cell:hover:not(:disabled) {
    background: #475569;
}

.cell:disabled {
    cursor: default;
}

.cell.ship {
    background: #475569;
}

.cell.hit {
    background: #dc2626;
}

.cell.miss {
    background: #0f172a;
    color: #94a3b8;
}

#controls {
    display: flex;
    gap: 0.75rem;
    padding: 1rem 0 2rem;
}

#controls button {
    padding: 0.6rem 1.2rem;
    border: none;
    border-radius: 8px;
    font-family: inherit;
    font-size: 0.95rem;
    cursor: pointer;
    background: #2563eb;
    color: #fff;
    transition: background 0.15s;
}

#controls button:hover {
    background: #1d4ed8;
}

#controls button.hidden {
    display: none;
}

#mode-selector {
    display: inline-flex;
    gap: 0;
    border: 1px solid #334155;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 0.75rem;
}

.mode-btn {
    padding: 0.45rem 1rem;
    background: transparent;
    color: #94a3b8;
    border: none;
    font-family: inherit;
    font-size: 0.9rem;
    cursor: pointer;
}

.mode-btn.active {
    background: #2563eb;
    color: #fff;
}

.dock {
    display: flex;
    gap: 0.75rem;
    padding: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    background: #1e293b;
    border-radius: 10px;
    margin: 0.5rem 1rem;
}

.dock.hidden {
    display: none;
}

.ship-card {
    background: #334155;
    border: 2px dashed #64748b;
    border-radius: 8px;
    padding: 0.5rem 0.75rem;
    cursor: grab;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.35rem;
    user-select: none;
}

.ship-card:active {
    cursor: grabbing;
}

.ship-label {
    font-size: 0.75rem;
    color: #cbd5e1;
    letter-spacing: 0.5px;
}

.ship-silhouette {
    display: flex;
    gap: 2px;
}

.ship-silhouette.vertical {
    flex-direction: column;
}

.ship-seg {
    width: 14px;
    height: 14px;
    background: #475569;
    border-radius: 2px;
}

.cell.preview-ok {
    background: #22c55e !important;
    opacity: 0.6;
}

.cell.preview-bad {
    background: #ef4444 !important;
    opacity: 0.6;
}

.pass-screen {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.pass-screen.hidden {
    display: none;
}

.pass-card {
    background: #1e293b;
    border: 1px solid #334155;
    border-radius: 12px;
    padding: 2.5rem 3rem;
    max-width: 420px;
    text-align: center;
}

.pass-card h2 {
    margin-bottom: 0.75rem;
    color: #93c5fd;
}

.pass-card p {
    margin-bottom: 1.5rem;
    color: #cbd5e1;
}

.pass-card button {
    padding: 0.7rem 1.6rem;
    background: #2563eb;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-family: inherit;
    cursor: pointer;
}

.pass-card button:hover {
    background: #1d4ed8;
}

.board-hidden {
    visibility: hidden;
}

#player-label,
#enemy-label {
    font-size: 1rem;
}

@media (max-width: 820px) {
    #app {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .board {
        grid-template-columns: repeat(10, 28px);
        grid-template-rows: repeat(10, 28px);
    }

    .cell {
        width: 28px;
        height: 28px;
        font-size: 0.9rem;
    }
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,iDAAiD;IACjD,mBAAmB;IACnB,cAAc;IACd,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,2BAA2B;AAC/B;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,WAAW;IACX,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,qBAAqB;IACrB,cAAc;IACd,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC,oCAAoC;IACpC,QAAQ;IACR,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,cAAc;IACd,4BAA4B;AAChC;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;IAClB,oBAAoB;IACpB,kBAAkB;IAClB,eAAe;IACf,mBAAmB;IACnB,WAAW;IACX,4BAA4B;AAChC;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,oBAAoB;IACpB,MAAM;IACN,yBAAyB;IACzB,kBAAkB;IAClB,gBAAgB;IAChB,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;IACrB,uBAAuB;IACvB,cAAc;IACd,YAAY;IACZ,oBAAoB;IACpB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,mBAAmB;IACnB,0BAA0B;IAC1B,kBAAkB;IAClB,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,cAAc;IACd,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,QAAQ;AACZ;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,8BAA8B;IAC9B,YAAY;AAChB;;AAEA;IACI,8BAA8B;IAC9B,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,QAAQ;IACR,8BAA8B;IAC9B,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;IACzB,mBAAmB;IACnB,oBAAoB;IACpB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB,cAAc;AAClB;;AAEA;IACI,qBAAqB;IACrB,cAAc;AAClB;;AAEA;IACI,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;;IAEI,eAAe;AACnB;;AAEA;IACI;QACI,0BAA0B;QAC1B,WAAW;IACf;;IAEA;QACI,uCAAuC;QACvC,oCAAoC;IACxC;;IAEA;QACI,WAAW;QACX,YAAY;QACZ,iBAAiB;IACrB;AACJ","sourcesContent":["* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    font-family: system-ui, -apple-system, sans-serif;\r\n    background: #0f172a;\r\n    color: #e2e8f0;\r\n    min-height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\nheader {\r\n    text-align: center;\r\n    padding: 1.5rem 1rem 0.5rem;\r\n}\r\n\r\nheader h1 {\r\n    font-size: 1.8rem;\r\n    letter-spacing: 2px;\r\n}\r\n\r\n#status {\r\n    margin-top: 0.5rem;\r\n    font-size: 1rem;\r\n    color: #93c5fd;\r\n    min-height: 1.4em;\r\n}\r\n\r\n#app {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, auto);\r\n    gap: 2.5rem;\r\n    padding: 1.5rem;\r\n    justify-content: center;\r\n}\r\n\r\n.board-section h2 {\r\n    font-size: 1rem;\r\n    text-align: center;\r\n    margin-bottom: 0.5rem;\r\n    color: #cbd5e1;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.board {\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 36px);\r\n    grid-template-rows: repeat(10, 36px);\r\n    gap: 2px;\r\n    background: #1e293b;\r\n    padding: 4px;\r\n    border-radius: 6px;\r\n}\r\n\r\n.cell {\r\n    width: 36px;\r\n    height: 36px;\r\n    background: #334155;\r\n    border: none;\r\n    border-radius: 3px;\r\n    cursor: pointer;\r\n    font-size: 1.1rem;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: #e2e8f0;\r\n    transition: background 0.15s;\r\n}\r\n\r\n.cell:hover:not(:disabled) {\r\n    background: #475569;\r\n}\r\n\r\n.cell:disabled {\r\n    cursor: default;\r\n}\r\n\r\n.cell.ship {\r\n    background: #475569;\r\n}\r\n\r\n.cell.hit {\r\n    background: #dc2626;\r\n}\r\n\r\n.cell.miss {\r\n    background: #0f172a;\r\n    color: #94a3b8;\r\n}\r\n\r\n#controls {\r\n    display: flex;\r\n    gap: 0.75rem;\r\n    padding: 1rem 0 2rem;\r\n}\r\n\r\n#controls button {\r\n    padding: 0.6rem 1.2rem;\r\n    border: none;\r\n    border-radius: 8px;\r\n    font-family: inherit;\r\n    font-size: 0.95rem;\r\n    cursor: pointer;\r\n    background: #2563eb;\r\n    color: #fff;\r\n    transition: background 0.15s;\r\n}\r\n\r\n#controls button:hover {\r\n    background: #1d4ed8;\r\n}\r\n\r\n#controls button.hidden {\r\n    display: none;\r\n}\r\n\r\n#mode-selector {\r\n    display: inline-flex;\r\n    gap: 0;\r\n    border: 1px solid #334155;\r\n    border-radius: 8px;\r\n    overflow: hidden;\r\n    margin-bottom: 0.75rem;\r\n}\r\n\r\n.mode-btn {\r\n    padding: 0.45rem 1rem;\r\n    background: transparent;\r\n    color: #94a3b8;\r\n    border: none;\r\n    font-family: inherit;\r\n    font-size: 0.9rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.mode-btn.active {\r\n    background: #2563eb;\r\n    color: #fff;\r\n}\r\n\r\n.dock {\r\n    display: flex;\r\n    gap: 0.75rem;\r\n    padding: 1rem;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    background: #1e293b;\r\n    border-radius: 10px;\r\n    margin: 0.5rem 1rem;\r\n}\r\n\r\n.dock.hidden {\r\n    display: none;\r\n}\r\n\r\n.ship-card {\r\n    background: #334155;\r\n    border: 2px dashed #64748b;\r\n    border-radius: 8px;\r\n    padding: 0.5rem 0.75rem;\r\n    cursor: grab;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 0.35rem;\r\n    user-select: none;\r\n}\r\n\r\n.ship-card:active {\r\n    cursor: grabbing;\r\n}\r\n\r\n.ship-label {\r\n    font-size: 0.75rem;\r\n    color: #cbd5e1;\r\n    letter-spacing: 0.5px;\r\n}\r\n\r\n.ship-silhouette {\r\n    display: flex;\r\n    gap: 2px;\r\n}\r\n\r\n.ship-silhouette.vertical {\r\n    flex-direction: column;\r\n}\r\n\r\n.ship-seg {\r\n    width: 14px;\r\n    height: 14px;\r\n    background: #475569;\r\n    border-radius: 2px;\r\n}\r\n\r\n.cell.preview-ok {\r\n    background: #22c55e !important;\r\n    opacity: 0.6;\r\n}\r\n\r\n.cell.preview-bad {\r\n    background: #ef4444 !important;\r\n    opacity: 0.6;\r\n}\r\n\r\n.pass-screen {\r\n    position: fixed;\r\n    inset: 0;\r\n    background: rgba(0, 0, 0, 0.9);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    z-index: 1000;\r\n}\r\n\r\n.pass-screen.hidden {\r\n    display: none;\r\n}\r\n\r\n.pass-card {\r\n    background: #1e293b;\r\n    border: 1px solid #334155;\r\n    border-radius: 12px;\r\n    padding: 2.5rem 3rem;\r\n    max-width: 420px;\r\n    text-align: center;\r\n}\r\n\r\n.pass-card h2 {\r\n    margin-bottom: 0.75rem;\r\n    color: #93c5fd;\r\n}\r\n\r\n.pass-card p {\r\n    margin-bottom: 1.5rem;\r\n    color: #cbd5e1;\r\n}\r\n\r\n.pass-card button {\r\n    padding: 0.7rem 1.6rem;\r\n    background: #2563eb;\r\n    color: #fff;\r\n    border: none;\r\n    border-radius: 8px;\r\n    font-size: 1rem;\r\n    font-family: inherit;\r\n    cursor: pointer;\r\n}\r\n\r\n.pass-card button:hover {\r\n    background: #1d4ed8;\r\n}\r\n\r\n.board-hidden {\r\n    visibility: hidden;\r\n}\r\n\r\n#player-label,\r\n#enemy-label {\r\n    font-size: 1rem;\r\n}\r\n\r\n@media (max-width: 820px) {\r\n    #app {\r\n        grid-template-columns: 1fr;\r\n        gap: 1.5rem;\r\n    }\r\n\r\n    .board {\r\n        grid-template-columns: repeat(10, 28px);\r\n        grid-template-rows: repeat(10, 28px);\r\n    }\r\n\r\n    .cell {\r\n        width: 28px;\r\n        height: 28px;\r\n        font-size: 0.9rem;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
(module) {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ },

/***/ "./src/game/Gameboard.js"
/*!*******************************!*\
  !*** ./src/game/Gameboard.js ***!
  \*******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship.js */ "./src/game/Ship.js");


const SIZE = 10;

class Gameboard {
    constructor() {
        this.size = SIZE;
        this.ships = [];
        this.missedAttacks = [];
        this.attacked = new Set();
        this.grid = Array.from({ length: SIZE }, () => Array(SIZE).fill(null));
    }

    placeShip(length, row, col, orientation = 'horizontal') {
        const coords = [];
        for (let i = 0; i < length; i++) {
            const r = orientation === 'vertical' ? row + i : row;
            const c = orientation === 'horizontal' ? col + i : col;
            if (r < 0 || r >= SIZE || c < 0 || c >= SIZE) {
                throw new Error('Ship placement out of bounds');
            }
            if (this.grid[r][c]) {
                throw new Error('Ship placement overlaps another ship');
            }
            coords.push([r, c]);
        }

        const ship = new _Ship_js__WEBPACK_IMPORTED_MODULE_0__["default"](length);
        this.ships.push(ship);
        coords.forEach(([r, c]) => {
            this.grid[r][c] = ship;
        });
        return ship;
    }

    receiveAttack(row, col) {
        const key = `${row},${col}`;
        if (this.attacked.has(key)) {
            throw new Error('Coordinate already attacked');
        }
        this.attacked.add(key);

        const ship = this.grid[row][col];
        if (ship) {
            ship.hit();
            return 'hit';
        }
        this.missedAttacks.push([row, col]);
        return 'miss';
    }

    hasAttacked(row, col) {
        return this.attacked.has(`${row},${col}`);
    }

    allSunk() {
        if (this.ships.length === 0) return false;
        return this.ships.every((ship) => ship.isSunk());
    }
}

/***/ },

/***/ "./src/game/Player.js"
/*!****************************!*\
  !*** ./src/game/Player.js ***!
  \****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _Gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard.js */ "./src/game/Gameboard.js");


class Player {
    constructor(type = 'real') {
        this.type = type;
        this.board = new _Gameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.targetQueue = [];
        this.lastHits = [];
    }

    getRandomMove(enemyBoard) {
        const board = enemyBoard || this.board;
        const candidates = [];
        for (let r = 0; r < board.size; r++) {
            for (let c = 0; c < board.size; c++) {
                if (!board.attacked.has(`${r},${c}`)) candidates.push([r, c]);
            }
        }
        if (candidates.length === 0) return null;
        return candidates[Math.floor(Math.random() * candidates.length)];
    }

    getSmartMove(enemyBoard) {
        while (this.targetQueue.length > 0) {
            const [r, c] = this.targetQueue.shift();
            if (r >= 0 && r < enemyBoard.size && c >= 0 && c < enemyBoard.size
                && !enemyBoard.attacked.has(`${r},${c}`)) {
                return [r, c];
            }
        }
        return this.getRandomMove(enemyBoard);
    }
}

/***/ },

/***/ "./src/game/Ship.js"
/*!**************************!*\
  !*** ./src/game/Ship.js ***!
  \**************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
    constructor(length) {
        this.length = length;
        this.hits = 0;
    }

    hit() {
        this.hits += 1;
    }

    isSunk() {
        return this.hits >= this.length;
    }
}

/***/ },

/***/ "./src/game/placement.js"
/*!*******************************!*\
  !*** ./src/game/placement.js ***!
  \*******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SHIP_LENGTHS: () => (/* binding */ SHIP_LENGTHS),
/* harmony export */   SHIP_NAMES: () => (/* binding */ SHIP_NAMES),
/* harmony export */   canPlaceAt: () => (/* binding */ canPlaceAt),
/* harmony export */   computeCells: () => (/* binding */ computeCells),
/* harmony export */   randomPlacement: () => (/* binding */ randomPlacement),
/* harmony export */   resetBoard: () => (/* binding */ resetBoard),
/* harmony export */   tryPlace: () => (/* binding */ tryPlace)
/* harmony export */ });
const SHIP_LENGTHS = [5, 4, 3, 3, 2];

const SHIP_NAMES = {
    5: 'Carrier',
    4: 'Battleship',
    3: 'Submarine',
    2: 'Destroyer',
};

function computeCells(board, length, row, col, orientation) {
    const cells = [];
    for (let i = 0; i < length; i++) {
        const r = orientation === 'vertical' ? row + i : row;
        const c = orientation === 'horizontal' ? col + i : col;
        if (r < 0 || r >= board.size || c < 0 || c >= board.size) return null;
        cells.push([r, c]);
    }
    return cells;
}

function canPlaceAt(board, length, row, col, orientation) {
    const cells = computeCells(board, length, row, col, orientation);
    if (!cells) return false;
    return cells.every(([r, c]) => board.grid[r][c] === null);
}

function tryPlace(board, length, row, col, orientation) {
    if (!canPlaceAt(board, length, row, col, orientation)) return null;
    return board.placeShip(length, row, col, orientation);
}

function randomPlacement(board) {
    for (const length of SHIP_LENGTHS) {
        let placed = false;
        let guard = 0;
        while (!placed && guard < 1000) {
            guard += 1;
            const orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';
            const maxRow = orientation === 'vertical' ? board.size - length : board.size - 1;
            const maxCol = orientation === 'horizontal' ? board.size - length : board.size - 1;
            const row = Math.floor(Math.random() * (maxRow + 1));
            const col = Math.floor(Math.random() * (maxCol + 1));
            if (tryPlace(board, length, row, col, orientation)) placed = true;
        }
        if (!placed) throw new Error(`Could not place ship of length ${length}`);
    }
}

function resetBoard(board) {
    board.ships = [];
    board.missedAttacks = [];
    board.attacked = new Set();
    board.grid = Array.from({ length: board.size }, () => Array(board.size).fill(null));
}

/***/ },

/***/ "./src/ui/render.js"
/*!**************************!*\
  !*** ./src/ui/render.js ***!
  \**************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hidePassScreen: () => (/* binding */ hidePassScreen),
/* harmony export */   renderBoard: () => (/* binding */ renderBoard),
/* harmony export */   renderDock: () => (/* binding */ renderDock),
/* harmony export */   setPreview: () => (/* binding */ setPreview),
/* harmony export */   setStatus: () => (/* binding */ setStatus),
/* harmony export */   showPassScreen: () => (/* binding */ showPassScreen),
/* harmony export */   showRestart: () => (/* binding */ showRestart)
/* harmony export */ });
/* harmony import */ var _game_placement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/placement.js */ "./src/game/placement.js");


function renderBoard(container, board, {
    showShips = false,
    onCellClick = null,
} = {}) {
    container.textContent = '';

    for (let r = 0; r < board.size; r++) {
        for (let c = 0; c < board.size; c++) {
            const cell = document.createElement('button');
            cell.className = 'cell';
            cell.dataset.row = r;
            cell.dataset.col = c;

            const ship = board.grid[r][c];
            const attacked = board.attacked.has(`${r},${c}`);

            if (showShips && ship) cell.classList.add('ship');

            if (attacked) {
                if (ship) { cell.classList.add('hit'); cell.textContent = '💥'; }
                else { cell.classList.add('miss'); cell.textContent = '•'; }
            }

            if (onCellClick) {
                if (attacked) {
                    cell.disabled = true;
                } else {
                    cell.addEventListener('click', () => onCellClick(r, c));
                }
            }

            container.appendChild(cell);
        }
    }
}

function setPreview(container, cells, valid = true) {
    container
        .querySelectorAll('.cell.preview-ok, .cell.preview-bad')
        .forEach((el) => el.classList.remove('preview-ok', 'preview-bad'));

    const className = valid ? 'preview-ok' : 'preview-bad';
    (cells || []).forEach(([r, c]) => {
        const el = container.querySelector(`.cell[data-row="${r}"][data-col="${c}"]`);
        if (el) el.classList.add(className);
    });
}

function setStatus(text) {
    document.getElementById('status').textContent = text;
}

function showRestart(show) {
    document.getElementById('restart-btn').classList.toggle('hidden', !show);
    document.getElementById('start-btn').classList.toggle('hidden', show);
    document.getElementById('randomize-btn').classList.toggle('hidden', show);
    document.getElementById('reset-placement-btn').classList.add('hidden');
}

function renderDock(container, shipsToPlace, handlers) {
    container.textContent = '';
    if (shipsToPlace.length === 0) {
        container.classList.add('hidden');
        return;
    }
    container.classList.remove('hidden');

    shipsToPlace.forEach((ship) => {
        const card = document.createElement('div');
        card.className = 'ship-card';
        card.draggable = true;
        card.dataset.shipId = ship.id;
        card.dataset.length = ship.length;

        const label = document.createElement('span');
        label.className = 'ship-label';
        label.textContent = `${_game_placement_js__WEBPACK_IMPORTED_MODULE_0__.SHIP_NAMES[ship.length] || 'Ship'} (${ship.length})`;

        const silhouette = document.createElement('div');
        silhouette.className = 'ship-silhouette ' + ship.orientation;
        for (let i = 0; i < ship.length; i++) {
            const seg = document.createElement('div');
            seg.className = 'ship-seg';
            silhouette.appendChild(seg);
        }

        card.append(label, silhouette);

        card.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', ship.id);
            e.dataTransfer.effectAllowed = 'move';
            handlers.onDragStart(ship.id);
        });

        card.addEventListener('dragend', () => {
            if (handlers.onDragEnd) handlers.onDragEnd();
        });

        container.appendChild(card);
    });
}

function showPassScreen(title, message, onContinue) {
    const overlay = document.getElementById('pass-screen');
    document.getElementById('pass-title').textContent = title;
    document.getElementById('pass-message').textContent = message;

    const btn = document.getElementById('pass-continue');
    const fresh = btn.cloneNode(true);
    btn.replaceWith(fresh);

    fresh.addEventListener('click', () => {
        overlay.classList.add('hidden');
        onContinue();
    });

    overlay.classList.remove('hidden');
}

function hidePassScreen() {
    document.getElementById('pass-screen').classList.add('hidden');
}

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	__webpack_require__.nc = undefined;
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _game_Player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game/Player.js */ "./src/game/Player.js");
/* harmony import */ var _game_placement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game/placement.js */ "./src/game/placement.js");
/* harmony import */ var _ui_render_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/render.js */ "./src/ui/render.js");





const els = {
    playerBoard: document.getElementById('player-board'),
    enemyBoard: document.getElementById('enemy-board'),
    playerLabel: document.getElementById('player-label'),
    enemyLabel: document.getElementById('enemy-label'),
    dock: document.getElementById('dock'),
    status: document.getElementById('status'),
    rotateBtn: document.getElementById('rotate-btn'),
    randomizeBtn: document.getElementById('randomize-btn'),
    resetPlacementBtn: document.getElementById('reset-placement-btn'),
    startBtn: document.getElementById('start-btn'),
    restartBtn: document.getElementById('restart-btn'),
    mode1p: document.getElementById('mode-1p'),
    mode2p: document.getElementById('mode-2p'),
};

let mode = '1p';
let player1;
let player2;
let phase = 'placing';
let currentTurn = 1;
let placingPlayerIndex = 1;
let pendingShips = [];
let draggingShipId = null;

function currentPlayer() {
    return currentTurn === 1 ? player1 : player2;
}

function opponentOf(p) {
    return p === player1 ? player2 : player1;
}

function isCurrentPlayerHuman() {
    return mode === '2p' || currentTurn === 1;
}

function humanPlacingPlayer() {
    return placingPlayerIndex === 1 ? player1 : player2;
}

function hideDock() {
    els.dock.classList.add('hidden');
    els.dock.textContent = '';
}

function showPlacementControls(show) {
    els.rotateBtn.classList.toggle('hidden', !show);
    els.resetPlacementBtn.classList.toggle('hidden', !show);
}

function nextShipId() {
    return `ship-${Math.random().toString(36).slice(2, 9)}`;
}

function beginPlacement(index) {
    placingPlayerIndex = index;
    const target = index === 1 ? player1 : player2;
    (0,_game_placement_js__WEBPACK_IMPORTED_MODULE_2__.resetBoard)(target.board);

    pendingShips = _game_placement_js__WEBPACK_IMPORTED_MODULE_2__.SHIP_LENGTHS.map((length) => ({
        length,
        id: nextShipId(),
        orientation: 'horizontal',
    }));

    phase = 'placing';
    (0,_ui_render_js__WEBPACK_IMPORTED_MODULE_3__.hidePassScreen)();
    showPlacementControls(true);
    els.startBtn.classList.remove('hidden');
    els.randomizeBtn.classList.remove('hidden');

    els.playerLabel.textContent = mode === '2p'
        ? `Player ${index} — place your ships`
        : 'Your Board';

    (0,_ui_render_js__WEBPACK_IMPORTED_MODULE_3__.setStatus)('Drag ships onto your board. Press R or click Rotate to change orientation.');
    drawPlacement();
}

function drawPlacement() {
    const target = humanPlacingPlayer();
    (0,_ui_render_js__WEBPACK_IMPORTED_MODULE_3__.renderBoard)(els.playerBoard, target.board, { showShips: true });
    (0,_ui_render_js__WEBPACK_IMPORTED_MODULE_3__.renderBoard)(els.enemyBoard, target.board === player1 ? player2.board : player1.board, {
        showShips: false,
    });

    (0,_ui_render_js__WEBPACK_IMPORTED_MODULE_3__.renderDock)(els.dock, pendingShips, {
        onDragStart: (id) => { draggingShipId = id; },
        onDragEnd: () => {
            draggingShipId = null;
            clearPreview();
        },
    });
}

function getDraggingShip() {
    return pendingShips.find((s) => s.id === draggingShipId);
}

function clearPreview() {
    ;(0,_ui_render_js__WEBPACK_IMPORTED_MODULE_3__.setPreview)(els.playerBoard, []);
}

function attachDragHandlers() {
    els.playerBoard.addEventListener('dragover', (e) => {
        if (phase !== 'placing') return;

        const ship = getDraggingShip();
        if (!ship) return;

        e.preventDefault();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'move';

        const cell = e.target.closest('.cell');
        if (!cell) {
            clearPreview();
            return;
        }

        const row = Number(cell.dataset.row);
        const col = Number(cell.dataset.col);
        const target = humanPlacingPlayer();
        const cells = (0,_game_placement_js__WEBPACK_IMPORTED_MODULE_2__.computeCells)(target.board, ship.length, row, col, ship.orientation);
        const valid = !!cells && (0,_game_placement_js__WEBPACK_IMPORTED_MODULE_2__.canPlaceAt)(target.board, ship.length, row, col, ship.orientation);

        (0,_ui_render_js__WEBPACK_IMPORTED_MODULE_3__.setPreview)(els.playerBoard, cells || [], valid);
    });

    els.playerBoard.addEventListener('dragleave', (e) => {
        if (phase !== 'placing') return;
        if (!els.playerBoard.contains(e.relatedTarget)) clearPreview();
    });

    els.playerBoard.addEventListener('drop', (e) => {
        if (phase !== 'placing') return;
        e.preventDefault();

        const cell = e.target.closest('.cell');
        if (!cell) return;

        const ship = getDraggingShip();
        if (!ship) return;

        const row = Number(cell.dataset.row);
        const col = Number(cell.dataset.col);
        const target = humanPlacingPlayer();
        const placed = (0,_game_placement_js__WEBPACK_IMPORTED_MODULE_2__.tryPlace)(target.board, ship.length, row, col, ship.orientation);

        if (!placed) {
            clearPreview();
            (0,_ui_render_js__WEBPACK_IMPORTED_MODULE_3__.setStatus)('Invalid placement — try another spot.');
            return;
        }

        pendingShips = pendingShips.filter((s) => s.id !== ship.id);
        draggingShipId = null;
        drawPlacement();

        if (pendingShips.length === 0) {
            (0,_ui_render_js__WEBPACK_IMPORTED_MODULE_3__.setStatus)('All ships placed. Click "Start Game" or pass the device.');
            els.startBtn.classList.remove('hidden');
        } else {
            (0,_ui_render_js__WEBPACK_IMPORTED_MODULE_3__.setStatus)(`Placed! ${pendingShips.length} ship(s) remaining.`);
        }
    });
}

function rotateDraggingOrFirst() {
    if (phase !== 'placing') return;

    const ship = getDraggingShip() || pendingShips[0];
    if (!ship) return;
    ship.orientation = ship.orientation === 'horizontal' ? 'vertical' : 'horizontal';
    drawPlacement();
}

els.rotateBtn.addEventListener('click', rotateDraggingOrFirst);
document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'r' && phase === 'placing') rotateDraggingOrFirst();
});

els.randomizeBtn.addEventListener('click', () => {
    if (phase !== 'placing') return;
    const target = humanPlacingPlayer();
    (0,_game_placement_js__WEBPACK_IMPORTED_MODULE_2__.resetBoard)(target.board);
    (0,_game_placement_js__WEBPACK_IMPORTED_MODULE_2__.randomPlacement)(target.board);
    pendingShips = [];
    drawPlacement();
    els.startBtn.classList.remove('hidden');
    (0,_ui_render_js__WEBPACK_IMPORTED_MODULE_3__.setStatus)('Ships randomized. Click "Start Game".');
});

els.resetPlacementBtn.addEventListener('click', () => {
    if (phase !== 'placing') return;
    beginPlacement(placingPlayerIndex);
});

els.startBtn.addEventListener('click', () => {
    if (phase !== 'placing') return;
    if (pendingShips.length > 0) {
        (0,_ui_render_js__WEBPACK_IMPORTED_MODULE_3__.setStatus)('Place all your ships first (drag them onto your board).');
        return;
    }

    if (mode === '1p') {
        (0,_game_placement_js__WEBPACK_IMPORTED_MODULE_2__.resetBoard)(player2.board);
        (0,_game_placement_js__WEBPACK_IMPORTED_MODULE_2__.randomPlacement)(player2.board);
    }

    if (mode === '2p' && placingPlayerIndex === 1) {
        hideDock();
        showPlacementControls(false);
        els.startBtn.classList.add('hidden');
        els.randomizeBtn.classList.add('hidden');
        (0,_ui_render_js__WEBPACK_IMPORTED_MODULE_3__.setStatus)('Pass the device to Player 2…');

        (0,_ui_render_js__WEBPACK_IMPORTED_MODULE_3__.showPassScreen)(
            'Pass to Player 2',
            'Hand the device to Player 2 so they can place their ships. Player 1, look away!',
            () => beginPlacement(2)
        );
        return;
    }

    beginBattle();
});

function beginBattle() {
    phase = 'battle';
    currentTurn = 1;
    hideDock();
    showPlacementControls(false);
    els.startBtn.classList.add('hidden');
    els.randomizeBtn.classList.add('hidden');

    if (mode === '2p') {
        els.enemyLabel.textContent = "Player 2's Board";
        els.playerLabel.textContent = "Player 1's Board";

        (0,_ui_render_js__WEBPACK_IMPORTED_MODULE_3__.showPassScreen)('Pass to Player 1', 'Player 1, take your turn.', () => {
            (0,_ui_render_js__WEBPACK_IMPORTED_MODULE_3__.setStatus)("Player 1: click a cell on Player 2's board.");
            drawBattle();
        });
    } else {
        els.playerLabel.textContent = 'Your Board';
        els.enemyLabel.textContent = 'Enemy Board';
        (0,_ui_render_js__WEBPACK_IMPORTED_MODULE_3__.setStatus)('Your turn: click a cell on the enemy board.');
        drawBattle();
    }
}

function drawBattle() {
    if (phase !== 'battle') return;

    const human = mode === '2p' ? currentPlayer() : player1;
    const opponent = mode === '2p' ? opponentOf(human) : player2;

    (0,_ui_render_js__WEBPACK_IMPORTED_MODULE_3__.renderBoard)(els.playerBoard, human.board, { showShips: true });

    const canClickEnemy =
        (mode === '1p' && currentTurn === 1) ||
        (mode === '2p');

    (0,_ui_render_js__WEBPACK_IMPORTED_MODULE_3__.renderBoard)(els.enemyBoard, opponent.board, {
        showShips: false,
        onCellClick: canClickEnemy ? handleHumanAttack : null,
    });
}

function handleHumanAttack(row, col) {
    if (phase !== 'battle') return;
    if (!isCurrentPlayerHuman()) return;

    const attacker = currentPlayer();
    const defender = opponentOf(attacker);

    if (defender.board.hasAttacked(row, col)) return;

    const result = defender.board.receiveAttack(row, col);
    drawBattle();

    if (defender.board.allSunk()) {
        endGame(`${mode === '2p' ? 'Player ' + currentTurn : 'You'} win!`);
        return;
    }

    if (result === 'miss') {
        passTurn();
    } else {
        (0,_ui_render_js__WEBPACK_IMPORTED_MODULE_3__.setStatus)(mode === '2p'
            ? `Player ${currentTurn} hit! Take another shot.`
            : 'Hit! Take another shot.');
    }
}

function passTurn() {
    if (mode === '1p') {
        currentTurn = 2;
        (0,_ui_render_js__WEBPACK_IMPORTED_MODULE_3__.setStatus)('Enemy is thinking…');
        setTimeout(enemyTurn, 800);
    } else {
        currentTurn = currentTurn === 1 ? 2 : 1;

        els.enemyBoard.classList.add('board-hidden');
        els.playerBoard.classList.add('board-hidden');
        (0,_ui_render_js__WEBPACK_IMPORTED_MODULE_3__.showPassScreen)(
            `Pass to Player ${currentTurn}`,
            `Player ${currentTurn}, it's your turn. Click ready when the other player is looking away.`,
            () => {
                els.enemyBoard.classList.remove('board-hidden');
                els.playerBoard.classList.remove('board-hidden');
                els.playerLabel.textContent = `Player ${currentTurn}'s Board`;
                els.enemyLabel.textContent = `Player ${currentTurn === 1 ? 2 : 1}'s Board`;
                (0,_ui_render_js__WEBPACK_IMPORTED_MODULE_3__.setStatus)(`Player ${currentTurn}: click a cell on the enemy board.`);
                drawBattle();
            }
        );
    }
}

function enemyTurn() {
    if (phase !== 'battle' || mode !== '1p' || currentTurn !== 2) return;

    const move = player2.getSmartMove(player1.board);
    if (!move) return;

    const [r, c] = move;
    const result = player1.board.receiveAttack(r, c);

    if (player1.board.allSunk()) {
        drawBattle();
        endGame('Enemy wins.');
        return;
    }

    if (result === 'miss') {
        currentTurn = 1;
        drawBattle();
        (0,_ui_render_js__WEBPACK_IMPORTED_MODULE_3__.setStatus)('Your turn: click a cell on the enemy board.');
    } else {
        const neighbors = [[r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]];
        player2.targetQueue.push(...neighbors);
        drawBattle();
        (0,_ui_render_js__WEBPACK_IMPORTED_MODULE_3__.setStatus)('Enemy hit! Enemy shoots again…');
        setTimeout(enemyTurn, 800);
    }
}

function endGame(message) {
    phase = 'over';
    (0,_ui_render_js__WEBPACK_IMPORTED_MODULE_3__.setStatus)(message);
    (0,_ui_render_js__WEBPACK_IMPORTED_MODULE_3__.showRestart)(true);
    hideDock();
    showPlacementControls(false);
}

function setMode(newMode) {
    mode = newMode;
    els.mode1p.classList.toggle('active', mode === '1p');
    els.mode2p.classList.toggle('active', mode === '2p');
    startNewGame();
}

els.mode1p.addEventListener('click', () => setMode('1p'));
els.mode2p.addEventListener('click', () => setMode('2p'));

function startNewGame() {
    player1 = new _game_Player_js__WEBPACK_IMPORTED_MODULE_1__["default"]('real');
    player2 = new _game_Player_js__WEBPACK_IMPORTED_MODULE_1__["default"](mode === '2p' ? 'real' : 'computer');

    currentTurn = 1;
    phase = 'placing';
    pendingShips = [];
    draggingShipId = null;

    (0,_ui_render_js__WEBPACK_IMPORTED_MODULE_3__.showRestart)(false);
    (0,_ui_render_js__WEBPACK_IMPORTED_MODULE_3__.hidePassScreen)();
    attachDragHandlersOnce();

    beginPlacement(1);
}

let dragHandlersAttached = false;
function attachDragHandlersOnce() {
    if (dragHandlersAttached) return;
    dragHandlersAttached = true;
    attachDragHandlers();
}

els.restartBtn.addEventListener('click', startNewGame);

startNewGame();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8saUZBQWlGLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssS0FBSyxZQUFZLFdBQVcsTUFB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dHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL1NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL3BsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3VpL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMGYxNzJhO1xyXG4gICAgY29sb3I6ICNlMmU4ZjA7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEuNXJlbSAxcmVtIDAuNXJlbTtcclxufVxyXG5cclxuaGVhZGVyIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxufVxyXG5cclxuI3N0YXR1cyB7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBjb2xvcjogIzkzYzVmZDtcclxuICAgIG1pbi1oZWlnaHQ6IDEuNGVtO1xyXG59XHJcblxyXG4jYXBwIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcclxuICAgIGdhcDogMi41cmVtO1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ib2FyZC1zZWN0aW9uIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgIGNvbG9yOiAjY2JkNWUxO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcbi5ib2FyZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDM2cHgpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDM2cHgpO1xyXG4gICAgZ2FwOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMWUyOTNiO1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcblxyXG4uY2VsbCB7XHJcbiAgICB3aWR0aDogMzZweDtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIGJhY2tncm91bmQ6ICMzMzQxNTU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2UyZThmMDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xNXM7XHJcbn1cclxuXHJcbi5jZWxsOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcclxuICAgIGJhY2tncm91bmQ6ICM0NzU1Njk7XHJcbn1cclxuXHJcbi5jZWxsOmRpc2FibGVkIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuLmNlbGwuc2hpcCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDc1NTY5O1xyXG59XHJcblxyXG4uY2VsbC5oaXQge1xyXG4gICAgYmFja2dyb3VuZDogI2RjMjYyNjtcclxufVxyXG5cclxuLmNlbGwubWlzcyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMGYxNzJhO1xyXG4gICAgY29sb3I6ICM5NGEzYjg7XHJcbn1cclxuXHJcbiNjb250cm9scyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAwLjc1cmVtO1xyXG4gICAgcGFkZGluZzogMXJlbSAwIDJyZW07XHJcbn1cclxuXHJcbiNjb250cm9scyBidXR0b24ge1xyXG4gICAgcGFkZGluZzogMC42cmVtIDEuMnJlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZDogIzI1NjNlYjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cztcclxufVxyXG5cclxuI2NvbnRyb2xzIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMWQ0ZWQ4O1xyXG59XHJcblxyXG4jY29udHJvbHMgYnV0dG9uLmhpZGRlbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4jbW9kZS1zZWxlY3RvciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGdhcDogMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzQxNTU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcclxufVxyXG5cclxuLm1vZGUtYnRuIHtcclxuICAgIHBhZGRpbmc6IDAuNDVyZW0gMXJlbTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6ICM5NGEzYjg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubW9kZS1idG4uYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICMyNTYzZWI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmRvY2sge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMC43NXJlbTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICMxZTI5M2I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAwLjVyZW0gMXJlbTtcclxufVxyXG5cclxuLmRvY2suaGlkZGVuIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5zaGlwLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogIzMzNDE1NTtcclxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjNjQ3NDhiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XHJcbiAgICBjdXJzb3I6IGdyYWI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuMzVyZW07XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLnNoaXAtY2FyZDphY3RpdmUge1xyXG4gICAgY3Vyc29yOiBncmFiYmluZztcclxufVxyXG5cclxuLnNoaXAtbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgY29sb3I6ICNjYmQ1ZTE7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbn1cclxuXHJcbi5zaGlwLXNpbGhvdWV0dGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMnB4O1xyXG59XHJcblxyXG4uc2hpcC1zaWxob3VldHRlLnZlcnRpY2FsIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5zaGlwLXNlZyB7XHJcbiAgICB3aWR0aDogMTRweDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIGJhY2tncm91bmQ6ICM0NzU1Njk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcbi5jZWxsLnByZXZpZXctb2sge1xyXG4gICAgYmFja2dyb3VuZDogIzIyYzU1ZSAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG59XHJcblxyXG4uY2VsbC5wcmV2aWV3LWJhZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWY0NDQ0ICFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbn1cclxuXHJcbi5wYXNzLXNjcmVlbiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBpbnNldDogMDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC45KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG59XHJcblxyXG4ucGFzcy1zY3JlZW4uaGlkZGVuIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5wYXNzLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogIzFlMjkzYjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzQxNTU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgcGFkZGluZzogMi41cmVtIDNyZW07XHJcbiAgICBtYXgtd2lkdGg6IDQyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucGFzcy1jYXJkIGgyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XHJcbiAgICBjb2xvcjogIzkzYzVmZDtcclxufVxyXG5cclxuLnBhc3MtY2FyZCBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgIGNvbG9yOiAjY2JkNWUxO1xyXG59XHJcblxyXG4ucGFzcy1jYXJkIGJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAwLjdyZW0gMS42cmVtO1xyXG4gICAgYmFja2dyb3VuZDogIzI1NjNlYjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5wYXNzLWNhcmQgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMxZDRlZDg7XHJcbn1cclxuXHJcbi5ib2FyZC1oaWRkZW4ge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4jcGxheWVyLWxhYmVsLFxyXG4jZW5lbXktbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODIwcHgpIHtcclxuICAgICNhcHAge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgIGdhcDogMS41cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5ib2FyZCB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDI4cHgpO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAyOHB4KTtcclxuICAgIH1cclxuXHJcbiAgICAuY2VsbCB7XHJcbiAgICAgICAgd2lkdGg6IDI4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgfVxyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5n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QXVCO0lBQ3ZCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksZUFBZTtBQUNuQjs7QUFFQTtJQUNJO1FBQ0ksMEJBQTBCO1FBQzFCLFdBQVc7SUFDZjs7SUFFQTtRQUNJLHVDQUF1QztRQUN2QyxvQ0FBb0M7SUFDeEM7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGlCQUFpQjtJQUNyQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBzYW5zLXNlcmlmO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMGYxNzJhO1xcclxcbiAgICBjb2xvcjogI2UyZThmMDtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMS41cmVtIDFyZW0gMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgaDEge1xcclxcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuI3N0YXR1cyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBjb2xvcjogIzkzYzVmZDtcXHJcXG4gICAgbWluLWhlaWdodDogMS40ZW07XFxyXFxufVxcclxcblxcclxcbiNhcHAge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcXHJcXG4gICAgZ2FwOiAyLjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZC1zZWN0aW9uIGgyIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXHJcXG4gICAgY29sb3I6ICNjYmQ1ZTE7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzNnB4KTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDM2cHgpO1xcclxcbiAgICBnYXA6IDJweDtcXHJcXG4gICAgYmFja2dyb3VuZDogIzFlMjkzYjtcXHJcXG4gICAgcGFkZGluZzogNHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi5jZWxsIHtcXHJcXG4gICAgd2lkdGg6IDM2cHg7XFxyXFxuICAgIGhlaWdodDogMzZweDtcXHJcXG4gICAgYmFja2dyb3VuZDogIzMzNDE1NTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBjb2xvcjogI2UyZThmMDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cztcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGw6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNDc1NTY5O1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbDpkaXNhYmxlZCB7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwuc2hpcCB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM0NzU1Njk7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLmhpdCB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNkYzI2MjY7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLm1pc3Mge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMGYxNzJhO1xcclxcbiAgICBjb2xvcjogIzk0YTNiODtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRyb2xzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAwLjc1cmVtO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDAgMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRyb2xzIGJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDAuNnJlbSAxLjJyZW07XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMyNTYzZWI7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udHJvbHMgYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzFkNGVkODtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRyb2xzIGJ1dHRvbi5oaWRkZW4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jbW9kZS1zZWxlY3RvciB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgICBnYXA6IDA7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzQxNTU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGUtYnRuIHtcXHJcXG4gICAgcGFkZGluZzogMC40NXJlbSAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgY29sb3I6ICM5NGEzYjg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tb2RlLWJ0bi5hY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMjU2M2ViO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmRvY2sge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDAuNzVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMxZTI5M2I7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIG1hcmdpbjogMC41cmVtIDFyZW07XFxyXFxufVxcclxcblxcclxcbi5kb2NrLmhpZGRlbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLWNhcmQge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMzM0MTU1O1xcclxcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgIzY0NzQ4YjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcXHJcXG4gICAgY3Vyc29yOiBncmFiO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDAuMzVyZW07XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1jYXJkOmFjdGl2ZSB7XFxyXFxuICAgIGN1cnNvcjogZ3JhYmJpbmc7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLWxhYmVsIHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcclxcbiAgICBjb2xvcjogI2NiZDVlMTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1zaWxob3VldHRlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAycHg7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLXNpbGhvdWV0dGUudmVydGljYWwge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1zZWcge1xcclxcbiAgICB3aWR0aDogMTRweDtcXHJcXG4gICAgaGVpZ2h0OiAxNHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNDc1NTY5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLnByZXZpZXctb2sge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMjJjNTVlICFpbXBvcnRhbnQ7XFxyXFxuICAgIG9wYWNpdHk6IDAuNjtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwucHJldmlldy1iYWQge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZWY0NDQ0ICFpbXBvcnRhbnQ7XFxyXFxuICAgIG9wYWNpdHk6IDAuNjtcXHJcXG59XFxyXFxuXFxyXFxuLnBhc3Mtc2NyZWVuIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBpbnNldDogMDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjkpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgei1pbmRleDogMTAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhc3Mtc2NyZWVuLmhpZGRlbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wYXNzLWNhcmQge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMWUyOTNiO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzM0MTU1O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgICBwYWRkaW5nOiAyLjVyZW0gM3JlbTtcXHJcXG4gICAgbWF4LXdpZHRoOiA0MjBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFzcy1jYXJkIGgyIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcXHJcXG4gICAgY29sb3I6ICM5M2M1ZmQ7XFxyXFxufVxcclxcblxcclxcbi5wYXNzLWNhcmQgcCB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXHJcXG4gICAgY29sb3I6ICNjYmQ1ZTE7XFxyXFxufVxcclxcblxcclxcbi5wYXNzLWNhcmQgYnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZzogMC43cmVtIDEuNnJlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogIzI1NjNlYjtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wYXNzLWNhcmQgYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzFkNGVkODtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkLWhpZGRlbiB7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuI3BsYXllci1sYWJlbCxcXHJcXG4jZW5lbXktbGFiZWwge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MjBweCkge1xcclxcbiAgICAjYXBwIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICAgICAgZ2FwOiAxLjVyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmJvYXJkIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAyOHB4KTtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAyOHB4KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY2VsbCB7XFxyXFxuICAgICAgICB3aWR0aDogMjhweDtcXHJcXG4gICAgICAgIGhlaWdodDogMjhweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBTaGlwIGZyb20gJy4vU2hpcC5qcyc7XHJcblxyXG5jb25zdCBTSVpFID0gMTA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zaXplID0gU0laRTtcclxuICAgICAgICB0aGlzLnNoaXBzID0gW107XHJcbiAgICAgICAgdGhpcy5taXNzZWRBdHRhY2tzID0gW107XHJcbiAgICAgICAgdGhpcy5hdHRhY2tlZCA9IG5ldyBTZXQoKTtcclxuICAgICAgICB0aGlzLmdyaWQgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBTSVpFIH0sICgpID0+IEFycmF5KFNJWkUpLmZpbGwobnVsbCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYWNlU2hpcChsZW5ndGgsIHJvdywgY29sLCBvcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgIGNvbnN0IGNvb3JkcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgciA9IG9yaWVudGF0aW9uID09PSAndmVydGljYWwnID8gcm93ICsgaSA6IHJvdztcclxuICAgICAgICAgICAgY29uc3QgYyA9IG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgPyBjb2wgKyBpIDogY29sO1xyXG4gICAgICAgICAgICBpZiAociA8IDAgfHwgciA+PSBTSVpFIHx8IGMgPCAwIHx8IGMgPj0gU0laRSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTaGlwIHBsYWNlbWVudCBvdXQgb2YgYm91bmRzJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZ3JpZFtyXVtjXSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTaGlwIHBsYWNlbWVudCBvdmVybGFwcyBhbm90aGVyIHNoaXAnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb29yZHMucHVzaChbciwgY10pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKGxlbmd0aCk7XHJcbiAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xyXG4gICAgICAgIGNvb3Jkcy5mb3JFYWNoKChbciwgY10pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ncmlkW3JdW2NdID0gc2hpcDtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gc2hpcDtcclxuICAgIH1cclxuXHJcbiAgICByZWNlaXZlQXR0YWNrKHJvdywgY29sKSB7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gYCR7cm93fSwke2NvbH1gO1xyXG4gICAgICAgIGlmICh0aGlzLmF0dGFja2VkLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ29vcmRpbmF0ZSBhbHJlYWR5IGF0dGFja2VkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXR0YWNrZWQuYWRkKGtleSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNoaXAgPSB0aGlzLmdyaWRbcm93XVtjb2xdO1xyXG4gICAgICAgIGlmIChzaGlwKSB7XHJcbiAgICAgICAgICAgIHNoaXAuaGl0KCk7XHJcbiAgICAgICAgICAgIHJldHVybiAnaGl0JztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5taXNzZWRBdHRhY2tzLnB1c2goW3JvdywgY29sXSk7XHJcbiAgICAgICAgcmV0dXJuICdtaXNzJztcclxuICAgIH1cclxuXHJcbiAgICBoYXNBdHRhY2tlZChyb3csIGNvbCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmF0dGFja2VkLmhhcyhgJHtyb3d9LCR7Y29sfWApO1xyXG4gICAgfVxyXG5cclxuICAgIGFsbFN1bmsoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hpcHMubGVuZ3RoID09PSAwKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hpcHMuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL0dhbWVib2FyZC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xyXG4gICAgY29uc3RydWN0b3IodHlwZSA9ICdyZWFsJykge1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcclxuICAgICAgICB0aGlzLnRhcmdldFF1ZXVlID0gW107XHJcbiAgICAgICAgdGhpcy5sYXN0SGl0cyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJhbmRvbU1vdmUoZW5lbXlCb2FyZCkge1xyXG4gICAgICAgIGNvbnN0IGJvYXJkID0gZW5lbXlCb2FyZCB8fCB0aGlzLmJvYXJkO1xyXG4gICAgICAgIGNvbnN0IGNhbmRpZGF0ZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCByID0gMDsgciA8IGJvYXJkLnNpemU7IHIrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IGJvYXJkLnNpemU7IGMrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFib2FyZC5hdHRhY2tlZC5oYXMoYCR7cn0sJHtjfWApKSBjYW5kaWRhdGVzLnB1c2goW3IsIGNdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2FuZGlkYXRlcy5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xyXG4gICAgICAgIHJldHVybiBjYW5kaWRhdGVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNhbmRpZGF0ZXMubGVuZ3RoKV07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U21hcnRNb3ZlKGVuZW15Qm9hcmQpIHtcclxuICAgICAgICB3aGlsZSAodGhpcy50YXJnZXRRdWV1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtyLCBjXSA9IHRoaXMudGFyZ2V0UXVldWUuc2hpZnQoKTtcclxuICAgICAgICAgICAgaWYgKHIgPj0gMCAmJiByIDwgZW5lbXlCb2FyZC5zaXplICYmIGMgPj0gMCAmJiBjIDwgZW5lbXlCb2FyZC5zaXplXHJcbiAgICAgICAgICAgICAgICAmJiAhZW5lbXlCb2FyZC5hdHRhY2tlZC5oYXMoYCR7cn0sJHtjfWApKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW3IsIGNdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFJhbmRvbU1vdmUoZW5lbXlCb2FyZCk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcclxuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgICAgIHRoaXMuaGl0cyA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaGl0KCkge1xyXG4gICAgICAgIHRoaXMuaGl0cyArPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGlzU3VuaygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oaXRzID49IHRoaXMubGVuZ3RoO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNvbnN0IFNISVBfTEVOR1RIUyA9IFs1LCA0LCAzLCAzLCAyXTtcclxuXHJcbmV4cG9ydCBjb25zdCBTSElQX05BTUVTID0ge1xyXG4gICAgNTogJ0NhcnJpZXInLFxyXG4gICAgNDogJ0JhdHRsZXNoaXAnLFxyXG4gICAgMzogJ1N1Ym1hcmluZScsXHJcbiAgICAyOiAnRGVzdHJveWVyJyxcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlQ2VsbHMoYm9hcmQsIGxlbmd0aCwgcm93LCBjb2wsIG9yaWVudGF0aW9uKSB7XHJcbiAgICBjb25zdCBjZWxscyA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHIgPSBvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJyA/IHJvdyArIGkgOiByb3c7XHJcbiAgICAgICAgY29uc3QgYyA9IG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgPyBjb2wgKyBpIDogY29sO1xyXG4gICAgICAgIGlmIChyIDwgMCB8fCByID49IGJvYXJkLnNpemUgfHwgYyA8IDAgfHwgYyA+PSBib2FyZC5zaXplKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBjZWxscy5wdXNoKFtyLCBjXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2VsbHM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYW5QbGFjZUF0KGJvYXJkLCBsZW5ndGgsIHJvdywgY29sLCBvcmllbnRhdGlvbikge1xyXG4gICAgY29uc3QgY2VsbHMgPSBjb21wdXRlQ2VsbHMoYm9hcmQsIGxlbmd0aCwgcm93LCBjb2wsIG9yaWVudGF0aW9uKTtcclxuICAgIGlmICghY2VsbHMpIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiBjZWxscy5ldmVyeSgoW3IsIGNdKSA9PiBib2FyZC5ncmlkW3JdW2NdID09PSBudWxsKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRyeVBsYWNlKGJvYXJkLCBsZW5ndGgsIHJvdywgY29sLCBvcmllbnRhdGlvbikge1xyXG4gICAgaWYgKCFjYW5QbGFjZUF0KGJvYXJkLCBsZW5ndGgsIHJvdywgY29sLCBvcmllbnRhdGlvbikpIHJldHVybiBudWxsO1xyXG4gICAgcmV0dXJuIGJvYXJkLnBsYWNlU2hpcChsZW5ndGgsIHJvdywgY29sLCBvcmllbnRhdGlvbik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5kb21QbGFjZW1lbnQoYm9hcmQpIHtcclxuICAgIGZvciAoY29uc3QgbGVuZ3RoIG9mIFNISVBfTEVOR1RIUykge1xyXG4gICAgICAgIGxldCBwbGFjZWQgPSBmYWxzZTtcclxuICAgICAgICBsZXQgZ3VhcmQgPSAwO1xyXG4gICAgICAgIHdoaWxlICghcGxhY2VkICYmIGd1YXJkIDwgMTAwMCkge1xyXG4gICAgICAgICAgICBndWFyZCArPSAxO1xyXG4gICAgICAgICAgICBjb25zdCBvcmllbnRhdGlvbiA9IE1hdGgucmFuZG9tKCkgPCAwLjUgPyAnaG9yaXpvbnRhbCcgOiAndmVydGljYWwnO1xyXG4gICAgICAgICAgICBjb25zdCBtYXhSb3cgPSBvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJyA/IGJvYXJkLnNpemUgLSBsZW5ndGggOiBib2FyZC5zaXplIC0gMTtcclxuICAgICAgICAgICAgY29uc3QgbWF4Q29sID0gb3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyA/IGJvYXJkLnNpemUgLSBsZW5ndGggOiBib2FyZC5zaXplIC0gMTtcclxuICAgICAgICAgICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heFJvdyArIDEpKTtcclxuICAgICAgICAgICAgY29uc3QgY29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heENvbCArIDEpKTtcclxuICAgICAgICAgICAgaWYgKHRyeVBsYWNlKGJvYXJkLCBsZW5ndGgsIHJvdywgY29sLCBvcmllbnRhdGlvbikpIHBsYWNlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcGxhY2VkKSB0aHJvdyBuZXcgRXJyb3IoYENvdWxkIG5vdCBwbGFjZSBzaGlwIG9mIGxlbmd0aCAke2xlbmd0aH1gKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0Qm9hcmQoYm9hcmQpIHtcclxuICAgIGJvYXJkLnNoaXBzID0gW107XHJcbiAgICBib2FyZC5taXNzZWRBdHRhY2tzID0gW107XHJcbiAgICBib2FyZC5hdHRhY2tlZCA9IG5ldyBTZXQoKTtcclxuICAgIGJvYXJkLmdyaWQgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBib2FyZC5zaXplIH0sICgpID0+IEFycmF5KGJvYXJkLnNpemUpLmZpbGwobnVsbCkpO1xyXG59IiwiaW1wb3J0IHsgU0hJUF9OQU1FUyB9IGZyb20gJy4uL2dhbWUvcGxhY2VtZW50LmpzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJCb2FyZChjb250YWluZXIsIGJvYXJkLCB7XHJcbiAgICBzaG93U2hpcHMgPSBmYWxzZSxcclxuICAgIG9uQ2VsbENsaWNrID0gbnVsbCxcclxufSA9IHt9KSB7XHJcbiAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcclxuXHJcbiAgICBmb3IgKGxldCByID0gMDsgciA8IGJvYXJkLnNpemU7IHIrKykge1xyXG4gICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgYm9hcmQuc2l6ZTsgYysrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSAnY2VsbCc7XHJcbiAgICAgICAgICAgIGNlbGwuZGF0YXNldC5yb3cgPSByO1xyXG4gICAgICAgICAgICBjZWxsLmRhdGFzZXQuY29sID0gYztcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBib2FyZC5ncmlkW3JdW2NdO1xyXG4gICAgICAgICAgICBjb25zdCBhdHRhY2tlZCA9IGJvYXJkLmF0dGFja2VkLmhhcyhgJHtyfSwke2N9YCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2hvd1NoaXBzICYmIHNoaXApIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGF0dGFja2VkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2hpcCkgeyBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpOyBjZWxsLnRleHRDb250ZW50ID0gJ/CfkqUnOyB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHsgY2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7IGNlbGwudGV4dENvbnRlbnQgPSAn4oCiJzsgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAob25DZWxsQ2xpY2spIHtcclxuICAgICAgICAgICAgICAgIGlmIChhdHRhY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gb25DZWxsQ2xpY2sociwgYykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2VsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0UHJldmlldyhjb250YWluZXIsIGNlbGxzLCB2YWxpZCA9IHRydWUpIHtcclxuICAgIGNvbnRhaW5lclxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbC5wcmV2aWV3LW9rLCAuY2VsbC5wcmV2aWV3LWJhZCcpXHJcbiAgICAgICAgLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdwcmV2aWV3LW9rJywgJ3ByZXZpZXctYmFkJykpO1xyXG5cclxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHZhbGlkID8gJ3ByZXZpZXctb2snIDogJ3ByZXZpZXctYmFkJztcclxuICAgIChjZWxscyB8fCBbXSkuZm9yRWFjaCgoW3IsIGNdKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZWwgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihgLmNlbGxbZGF0YS1yb3c9XCIke3J9XCJdW2RhdGEtY29sPVwiJHtjfVwiXWApO1xyXG4gICAgICAgIGlmIChlbCkgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTdGF0dXModGV4dCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXR1cycpLnRleHRDb250ZW50ID0gdGV4dDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dSZXN0YXJ0KHNob3cpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN0YXJ0LWJ0bicpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicsICFzaG93KTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1idG4nKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nLCBzaG93KTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYW5kb21pemUtYnRuJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJywgc2hvdyk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXQtcGxhY2VtZW50LWJ0bicpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRG9jayhjb250YWluZXIsIHNoaXBzVG9QbGFjZSwgaGFuZGxlcnMpIHtcclxuICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgaWYgKHNoaXBzVG9QbGFjZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG5cclxuICAgIHNoaXBzVG9QbGFjZS5mb3JFYWNoKChzaGlwKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNhcmQuY2xhc3NOYW1lID0gJ3NoaXAtY2FyZCc7XHJcbiAgICAgICAgY2FyZC5kcmFnZ2FibGUgPSB0cnVlO1xyXG4gICAgICAgIGNhcmQuZGF0YXNldC5zaGlwSWQgPSBzaGlwLmlkO1xyXG4gICAgICAgIGNhcmQuZGF0YXNldC5sZW5ndGggPSBzaGlwLmxlbmd0aDtcclxuXHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgbGFiZWwuY2xhc3NOYW1lID0gJ3NoaXAtbGFiZWwnO1xyXG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gYCR7U0hJUF9OQU1FU1tzaGlwLmxlbmd0aF0gfHwgJ1NoaXAnfSAoJHtzaGlwLmxlbmd0aH0pYDtcclxuXHJcbiAgICAgICAgY29uc3Qgc2lsaG91ZXR0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHNpbGhvdWV0dGUuY2xhc3NOYW1lID0gJ3NoaXAtc2lsaG91ZXR0ZSAnICsgc2hpcC5vcmllbnRhdGlvbjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHNlZy5jbGFzc05hbWUgPSAnc2hpcC1zZWcnO1xyXG4gICAgICAgICAgICBzaWxob3VldHRlLmFwcGVuZENoaWxkKHNlZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXJkLmFwcGVuZChsYWJlbCwgc2lsaG91ZXR0ZSk7XHJcblxyXG4gICAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIHNoaXAuaWQpO1xyXG4gICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gJ21vdmUnO1xyXG4gICAgICAgICAgICBoYW5kbGVycy5vbkRyYWdTdGFydChzaGlwLmlkKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlcnMub25EcmFnRW5kKSBoYW5kbGVycy5vbkRyYWdFbmQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93UGFzc1NjcmVlbih0aXRsZSwgbWVzc2FnZSwgb25Db250aW51ZSkge1xyXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzLXNjcmVlbicpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3MtdGl0bGUnKS50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3MtbWVzc2FnZScpLnRleHRDb250ZW50ID0gbWVzc2FnZTtcclxuXHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzcy1jb250aW51ZScpO1xyXG4gICAgY29uc3QgZnJlc2ggPSBidG4uY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgYnRuLnJlcGxhY2VXaXRoKGZyZXNoKTtcclxuXHJcbiAgICBmcmVzaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgIG9uQ29udGludWUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoaWRlUGFzc1NjcmVlbigpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzLXNjcmVlbicpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxuY29uc3QgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRjb25zdCBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0Y29uc3QgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRpZiAoIShtb2R1bGVJZCBpbiBfX3dlYnBhY2tfbW9kdWxlc19fKSkge1xuXHRcdGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRcdGNvbnN0IGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHRjb25zdCBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlci92YWx1ZSBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9nYW1lL1BsYXllci5qcyc7XHJcbmltcG9ydCB7XHJcbiAgICBTSElQX0xFTkdUSFMsXHJcbiAgICByYW5kb21QbGFjZW1lbnQsXHJcbiAgICByZXNldEJvYXJkLFxyXG4gICAgY29tcHV0ZUNlbGxzLFxyXG4gICAgY2FuUGxhY2VBdCxcclxuICAgIHRyeVBsYWNlLFxyXG59IGZyb20gJy4vZ2FtZS9wbGFjZW1lbnQuanMnO1xyXG5pbXBvcnQge1xyXG4gICAgcmVuZGVyQm9hcmQsXHJcbiAgICBzZXRQcmV2aWV3LFxyXG4gICAgcmVuZGVyRG9jayxcclxuICAgIHNldFN0YXR1cyxcclxuICAgIHNob3dSZXN0YXJ0LFxyXG4gICAgc2hvd1Bhc3NTY3JlZW4sXHJcbiAgICBoaWRlUGFzc1NjcmVlbixcclxufSBmcm9tICcuL3VpL3JlbmRlci5qcyc7XHJcblxyXG5jb25zdCBlbHMgPSB7XHJcbiAgICBwbGF5ZXJCb2FyZDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1ib2FyZCcpLFxyXG4gICAgZW5lbXlCb2FyZDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VuZW15LWJvYXJkJyksXHJcbiAgICBwbGF5ZXJMYWJlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1sYWJlbCcpLFxyXG4gICAgZW5lbXlMYWJlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VuZW15LWxhYmVsJyksXHJcbiAgICBkb2NrOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9jaycpLFxyXG4gICAgc3RhdHVzOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdHVzJyksXHJcbiAgICByb3RhdGVCdG46IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3RhdGUtYnRuJyksXHJcbiAgICByYW5kb21pemVCdG46IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYW5kb21pemUtYnRuJyksXHJcbiAgICByZXNldFBsYWNlbWVudEJ0bjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2V0LXBsYWNlbWVudC1idG4nKSxcclxuICAgIHN0YXJ0QnRuOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtYnRuJyksXHJcbiAgICByZXN0YXJ0QnRuOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdGFydC1idG4nKSxcclxuICAgIG1vZGUxcDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGUtMXAnKSxcclxuICAgIG1vZGUycDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGUtMnAnKSxcclxufTtcclxuXHJcbmxldCBtb2RlID0gJzFwJztcclxubGV0IHBsYXllcjE7XHJcbmxldCBwbGF5ZXIyO1xyXG5sZXQgcGhhc2UgPSAncGxhY2luZyc7XHJcbmxldCBjdXJyZW50VHVybiA9IDE7XHJcbmxldCBwbGFjaW5nUGxheWVySW5kZXggPSAxO1xyXG5sZXQgcGVuZGluZ1NoaXBzID0gW107XHJcbmxldCBkcmFnZ2luZ1NoaXBJZCA9IG51bGw7XHJcblxyXG5mdW5jdGlvbiBjdXJyZW50UGxheWVyKCkge1xyXG4gICAgcmV0dXJuIGN1cnJlbnRUdXJuID09PSAxID8gcGxheWVyMSA6IHBsYXllcjI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9wcG9uZW50T2YocCkge1xyXG4gICAgcmV0dXJuIHAgPT09IHBsYXllcjEgPyBwbGF5ZXIyIDogcGxheWVyMTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNDdXJyZW50UGxheWVySHVtYW4oKSB7XHJcbiAgICByZXR1cm4gbW9kZSA9PT0gJzJwJyB8fCBjdXJyZW50VHVybiA9PT0gMTtcclxufVxyXG5cclxuZnVuY3Rpb24gaHVtYW5QbGFjaW5nUGxheWVyKCkge1xyXG4gICAgcmV0dXJuIHBsYWNpbmdQbGF5ZXJJbmRleCA9PT0gMSA/IHBsYXllcjEgOiBwbGF5ZXIyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlRG9jaygpIHtcclxuICAgIGVscy5kb2NrLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgZWxzLmRvY2sudGV4dENvbnRlbnQgPSAnJztcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1BsYWNlbWVudENvbnRyb2xzKHNob3cpIHtcclxuICAgIGVscy5yb3RhdGVCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJywgIXNob3cpO1xyXG4gICAgZWxzLnJlc2V0UGxhY2VtZW50QnRuLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicsICFzaG93KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbmV4dFNoaXBJZCgpIHtcclxuICAgIHJldHVybiBgc2hpcC0ke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIsIDkpfWA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJlZ2luUGxhY2VtZW50KGluZGV4KSB7XHJcbiAgICBwbGFjaW5nUGxheWVySW5kZXggPSBpbmRleDtcclxuICAgIGNvbnN0IHRhcmdldCA9IGluZGV4ID09PSAxID8gcGxheWVyMSA6IHBsYXllcjI7XHJcbiAgICByZXNldEJvYXJkKHRhcmdldC5ib2FyZCk7XHJcblxyXG4gICAgcGVuZGluZ1NoaXBzID0gU0hJUF9MRU5HVEhTLm1hcCgobGVuZ3RoKSA9PiAoe1xyXG4gICAgICAgIGxlbmd0aCxcclxuICAgICAgICBpZDogbmV4dFNoaXBJZCgpLFxyXG4gICAgICAgIG9yaWVudGF0aW9uOiAnaG9yaXpvbnRhbCcsXHJcbiAgICB9KSk7XHJcblxyXG4gICAgcGhhc2UgPSAncGxhY2luZyc7XHJcbiAgICBoaWRlUGFzc1NjcmVlbigpO1xyXG4gICAgc2hvd1BsYWNlbWVudENvbnRyb2xzKHRydWUpO1xyXG4gICAgZWxzLnN0YXJ0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgZWxzLnJhbmRvbWl6ZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuXHJcbiAgICBlbHMucGxheWVyTGFiZWwudGV4dENvbnRlbnQgPSBtb2RlID09PSAnMnAnXHJcbiAgICAgICAgPyBgUGxheWVyICR7aW5kZXh9IOKAlCBwbGFjZSB5b3VyIHNoaXBzYFxyXG4gICAgICAgIDogJ1lvdXIgQm9hcmQnO1xyXG5cclxuICAgIHNldFN0YXR1cygnRHJhZyBzaGlwcyBvbnRvIHlvdXIgYm9hcmQuIFByZXNzIFIgb3IgY2xpY2sgUm90YXRlIHRvIGNoYW5nZSBvcmllbnRhdGlvbi4nKTtcclxuICAgIGRyYXdQbGFjZW1lbnQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHJhd1BsYWNlbWVudCgpIHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGh1bWFuUGxhY2luZ1BsYXllcigpO1xyXG4gICAgcmVuZGVyQm9hcmQoZWxzLnBsYXllckJvYXJkLCB0YXJnZXQuYm9hcmQsIHsgc2hvd1NoaXBzOiB0cnVlIH0pO1xyXG4gICAgcmVuZGVyQm9hcmQoZWxzLmVuZW15Qm9hcmQsIHRhcmdldC5ib2FyZCA9PT0gcGxheWVyMSA/IHBsYXllcjIuYm9hcmQgOiBwbGF5ZXIxLmJvYXJkLCB7XHJcbiAgICAgICAgc2hvd1NoaXBzOiBmYWxzZSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJlbmRlckRvY2soZWxzLmRvY2ssIHBlbmRpbmdTaGlwcywge1xyXG4gICAgICAgIG9uRHJhZ1N0YXJ0OiAoaWQpID0+IHsgZHJhZ2dpbmdTaGlwSWQgPSBpZDsgfSxcclxuICAgICAgICBvbkRyYWdFbmQ6ICgpID0+IHtcclxuICAgICAgICAgICAgZHJhZ2dpbmdTaGlwSWQgPSBudWxsO1xyXG4gICAgICAgICAgICBjbGVhclByZXZpZXcoKTtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERyYWdnaW5nU2hpcCgpIHtcclxuICAgIHJldHVybiBwZW5kaW5nU2hpcHMuZmluZCgocykgPT4gcy5pZCA9PT0gZHJhZ2dpbmdTaGlwSWQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhclByZXZpZXcoKSB7XHJcbiAgICBzZXRQcmV2aWV3KGVscy5wbGF5ZXJCb2FyZCwgW10pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhdHRhY2hEcmFnSGFuZGxlcnMoKSB7XHJcbiAgICBlbHMucGxheWVyQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChwaGFzZSAhPT0gJ3BsYWNpbmcnKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHNoaXAgPSBnZXREcmFnZ2luZ1NoaXAoKTtcclxuICAgICAgICBpZiAoIXNoaXApIHJldHVybjtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmIChlLmRhdGFUcmFuc2ZlcikgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJztcclxuXHJcbiAgICAgICAgY29uc3QgY2VsbCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5jZWxsJyk7XHJcbiAgICAgICAgaWYgKCFjZWxsKSB7XHJcbiAgICAgICAgICAgIGNsZWFyUHJldmlldygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByb3cgPSBOdW1iZXIoY2VsbC5kYXRhc2V0LnJvdyk7XHJcbiAgICAgICAgY29uc3QgY29sID0gTnVtYmVyKGNlbGwuZGF0YXNldC5jb2wpO1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGh1bWFuUGxhY2luZ1BsYXllcigpO1xyXG4gICAgICAgIGNvbnN0IGNlbGxzID0gY29tcHV0ZUNlbGxzKHRhcmdldC5ib2FyZCwgc2hpcC5sZW5ndGgsIHJvdywgY29sLCBzaGlwLm9yaWVudGF0aW9uKTtcclxuICAgICAgICBjb25zdCB2YWxpZCA9ICEhY2VsbHMgJiYgY2FuUGxhY2VBdCh0YXJnZXQuYm9hcmQsIHNoaXAubGVuZ3RoLCByb3csIGNvbCwgc2hpcC5vcmllbnRhdGlvbik7XHJcblxyXG4gICAgICAgIHNldFByZXZpZXcoZWxzLnBsYXllckJvYXJkLCBjZWxscyB8fCBbXSwgdmFsaWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZWxzLnBsYXllckJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKHBoYXNlICE9PSAncGxhY2luZycpIHJldHVybjtcclxuICAgICAgICBpZiAoIWVscy5wbGF5ZXJCb2FyZC5jb250YWlucyhlLnJlbGF0ZWRUYXJnZXQpKSBjbGVhclByZXZpZXcoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGVscy5wbGF5ZXJCb2FyZC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGUpID0+IHtcclxuICAgICAgICBpZiAocGhhc2UgIT09ICdwbGFjaW5nJykgcmV0dXJuO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2VsbCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5jZWxsJyk7XHJcbiAgICAgICAgaWYgKCFjZWxsKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHNoaXAgPSBnZXREcmFnZ2luZ1NoaXAoKTtcclxuICAgICAgICBpZiAoIXNoaXApIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3Qgcm93ID0gTnVtYmVyKGNlbGwuZGF0YXNldC5yb3cpO1xyXG4gICAgICAgIGNvbnN0IGNvbCA9IE51bWJlcihjZWxsLmRhdGFzZXQuY29sKTtcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBodW1hblBsYWNpbmdQbGF5ZXIoKTtcclxuICAgICAgICBjb25zdCBwbGFjZWQgPSB0cnlQbGFjZSh0YXJnZXQuYm9hcmQsIHNoaXAubGVuZ3RoLCByb3csIGNvbCwgc2hpcC5vcmllbnRhdGlvbik7XHJcblxyXG4gICAgICAgIGlmICghcGxhY2VkKSB7XHJcbiAgICAgICAgICAgIGNsZWFyUHJldmlldygpO1xyXG4gICAgICAgICAgICBzZXRTdGF0dXMoJ0ludmFsaWQgcGxhY2VtZW50IOKAlCB0cnkgYW5vdGhlciBzcG90LicpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwZW5kaW5nU2hpcHMgPSBwZW5kaW5nU2hpcHMuZmlsdGVyKChzKSA9PiBzLmlkICE9PSBzaGlwLmlkKTtcclxuICAgICAgICBkcmFnZ2luZ1NoaXBJZCA9IG51bGw7XHJcbiAgICAgICAgZHJhd1BsYWNlbWVudCgpO1xyXG5cclxuICAgICAgICBpZiAocGVuZGluZ1NoaXBzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBzZXRTdGF0dXMoJ0FsbCBzaGlwcyBwbGFjZWQuIENsaWNrIFwiU3RhcnQgR2FtZVwiIG9yIHBhc3MgdGhlIGRldmljZS4nKTtcclxuICAgICAgICAgICAgZWxzLnN0YXJ0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFN0YXR1cyhgUGxhY2VkISAke3BlbmRpbmdTaGlwcy5sZW5ndGh9IHNoaXAocykgcmVtYWluaW5nLmApO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByb3RhdGVEcmFnZ2luZ09yRmlyc3QoKSB7XHJcbiAgICBpZiAocGhhc2UgIT09ICdwbGFjaW5nJykgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHNoaXAgPSBnZXREcmFnZ2luZ1NoaXAoKSB8fCBwZW5kaW5nU2hpcHNbMF07XHJcbiAgICBpZiAoIXNoaXApIHJldHVybjtcclxuICAgIHNoaXAub3JpZW50YXRpb24gPSBzaGlwLm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xyXG4gICAgZHJhd1BsYWNlbWVudCgpO1xyXG59XHJcblxyXG5lbHMucm90YXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlRHJhZ2dpbmdPckZpcnN0KTtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XHJcbiAgICBpZiAoZS5rZXkudG9Mb3dlckNhc2UoKSA9PT0gJ3InICYmIHBoYXNlID09PSAncGxhY2luZycpIHJvdGF0ZURyYWdnaW5nT3JGaXJzdCgpO1xyXG59KTtcclxuXHJcbmVscy5yYW5kb21pemVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZiAocGhhc2UgIT09ICdwbGFjaW5nJykgcmV0dXJuO1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gaHVtYW5QbGFjaW5nUGxheWVyKCk7XHJcbiAgICByZXNldEJvYXJkKHRhcmdldC5ib2FyZCk7XHJcbiAgICByYW5kb21QbGFjZW1lbnQodGFyZ2V0LmJvYXJkKTtcclxuICAgIHBlbmRpbmdTaGlwcyA9IFtdO1xyXG4gICAgZHJhd1BsYWNlbWVudCgpO1xyXG4gICAgZWxzLnN0YXJ0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgc2V0U3RhdHVzKCdTaGlwcyByYW5kb21pemVkLiBDbGljayBcIlN0YXJ0IEdhbWVcIi4nKTtcclxufSk7XHJcblxyXG5lbHMucmVzZXRQbGFjZW1lbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZiAocGhhc2UgIT09ICdwbGFjaW5nJykgcmV0dXJuO1xyXG4gICAgYmVnaW5QbGFjZW1lbnQocGxhY2luZ1BsYXllckluZGV4KTtcclxufSk7XHJcblxyXG5lbHMuc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZiAocGhhc2UgIT09ICdwbGFjaW5nJykgcmV0dXJuO1xyXG4gICAgaWYgKHBlbmRpbmdTaGlwcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgc2V0U3RhdHVzKCdQbGFjZSBhbGwgeW91ciBzaGlwcyBmaXJzdCAoZHJhZyB0aGVtIG9udG8geW91ciBib2FyZCkuJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChtb2RlID09PSAnMXAnKSB7XHJcbiAgICAgICAgcmVzZXRCb2FyZChwbGF5ZXIyLmJvYXJkKTtcclxuICAgICAgICByYW5kb21QbGFjZW1lbnQocGxheWVyMi5ib2FyZCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1vZGUgPT09ICcycCcgJiYgcGxhY2luZ1BsYXllckluZGV4ID09PSAxKSB7XHJcbiAgICAgICAgaGlkZURvY2soKTtcclxuICAgICAgICBzaG93UGxhY2VtZW50Q29udHJvbHMoZmFsc2UpO1xyXG4gICAgICAgIGVscy5zdGFydEJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICBlbHMucmFuZG9taXplQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgIHNldFN0YXR1cygnUGFzcyB0aGUgZGV2aWNlIHRvIFBsYXllciAy4oCmJyk7XHJcblxyXG4gICAgICAgIHNob3dQYXNzU2NyZWVuKFxyXG4gICAgICAgICAgICAnUGFzcyB0byBQbGF5ZXIgMicsXHJcbiAgICAgICAgICAgICdIYW5kIHRoZSBkZXZpY2UgdG8gUGxheWVyIDIgc28gdGhleSBjYW4gcGxhY2UgdGhlaXIgc2hpcHMuIFBsYXllciAxLCBsb29rIGF3YXkhJyxcclxuICAgICAgICAgICAgKCkgPT4gYmVnaW5QbGFjZW1lbnQoMilcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBiZWdpbkJhdHRsZSgpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGJlZ2luQmF0dGxlKCkge1xyXG4gICAgcGhhc2UgPSAnYmF0dGxlJztcclxuICAgIGN1cnJlbnRUdXJuID0gMTtcclxuICAgIGhpZGVEb2NrKCk7XHJcbiAgICBzaG93UGxhY2VtZW50Q29udHJvbHMoZmFsc2UpO1xyXG4gICAgZWxzLnN0YXJ0QnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgZWxzLnJhbmRvbWl6ZUJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuXHJcbiAgICBpZiAobW9kZSA9PT0gJzJwJykge1xyXG4gICAgICAgIGVscy5lbmVteUxhYmVsLnRleHRDb250ZW50ID0gXCJQbGF5ZXIgMidzIEJvYXJkXCI7XHJcbiAgICAgICAgZWxzLnBsYXllckxhYmVsLnRleHRDb250ZW50ID0gXCJQbGF5ZXIgMSdzIEJvYXJkXCI7XHJcblxyXG4gICAgICAgIHNob3dQYXNzU2NyZWVuKCdQYXNzIHRvIFBsYXllciAxJywgJ1BsYXllciAxLCB0YWtlIHlvdXIgdHVybi4nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFN0YXR1cyhcIlBsYXllciAxOiBjbGljayBhIGNlbGwgb24gUGxheWVyIDIncyBib2FyZC5cIik7XHJcbiAgICAgICAgICAgIGRyYXdCYXR0bGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxzLnBsYXllckxhYmVsLnRleHRDb250ZW50ID0gJ1lvdXIgQm9hcmQnO1xyXG4gICAgICAgIGVscy5lbmVteUxhYmVsLnRleHRDb250ZW50ID0gJ0VuZW15IEJvYXJkJztcclxuICAgICAgICBzZXRTdGF0dXMoJ1lvdXIgdHVybjogY2xpY2sgYSBjZWxsIG9uIHRoZSBlbmVteSBib2FyZC4nKTtcclxuICAgICAgICBkcmF3QmF0dGxlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyYXdCYXR0bGUoKSB7XHJcbiAgICBpZiAocGhhc2UgIT09ICdiYXR0bGUnKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgaHVtYW4gPSBtb2RlID09PSAnMnAnID8gY3VycmVudFBsYXllcigpIDogcGxheWVyMTtcclxuICAgIGNvbnN0IG9wcG9uZW50ID0gbW9kZSA9PT0gJzJwJyA/IG9wcG9uZW50T2YoaHVtYW4pIDogcGxheWVyMjtcclxuXHJcbiAgICByZW5kZXJCb2FyZChlbHMucGxheWVyQm9hcmQsIGh1bWFuLmJvYXJkLCB7IHNob3dTaGlwczogdHJ1ZSB9KTtcclxuXHJcbiAgICBjb25zdCBjYW5DbGlja0VuZW15ID1cclxuICAgICAgICAobW9kZSA9PT0gJzFwJyAmJiBjdXJyZW50VHVybiA9PT0gMSkgfHxcclxuICAgICAgICAobW9kZSA9PT0gJzJwJyk7XHJcblxyXG4gICAgcmVuZGVyQm9hcmQoZWxzLmVuZW15Qm9hcmQsIG9wcG9uZW50LmJvYXJkLCB7XHJcbiAgICAgICAgc2hvd1NoaXBzOiBmYWxzZSxcclxuICAgICAgICBvbkNlbGxDbGljazogY2FuQ2xpY2tFbmVteSA/IGhhbmRsZUh1bWFuQXR0YWNrIDogbnVsbCxcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVIdW1hbkF0dGFjayhyb3csIGNvbCkge1xyXG4gICAgaWYgKHBoYXNlICE9PSAnYmF0dGxlJykgcmV0dXJuO1xyXG4gICAgaWYgKCFpc0N1cnJlbnRQbGF5ZXJIdW1hbigpKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgYXR0YWNrZXIgPSBjdXJyZW50UGxheWVyKCk7XHJcbiAgICBjb25zdCBkZWZlbmRlciA9IG9wcG9uZW50T2YoYXR0YWNrZXIpO1xyXG5cclxuICAgIGlmIChkZWZlbmRlci5ib2FyZC5oYXNBdHRhY2tlZChyb3csIGNvbCkpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBkZWZlbmRlci5ib2FyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sKTtcclxuICAgIGRyYXdCYXR0bGUoKTtcclxuXHJcbiAgICBpZiAoZGVmZW5kZXIuYm9hcmQuYWxsU3VuaygpKSB7XHJcbiAgICAgICAgZW5kR2FtZShgJHttb2RlID09PSAnMnAnID8gJ1BsYXllciAnICsgY3VycmVudFR1cm4gOiAnWW91J30gd2luIWApO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocmVzdWx0ID09PSAnbWlzcycpIHtcclxuICAgICAgICBwYXNzVHVybigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRTdGF0dXMobW9kZSA9PT0gJzJwJ1xyXG4gICAgICAgICAgICA/IGBQbGF5ZXIgJHtjdXJyZW50VHVybn0gaGl0ISBUYWtlIGFub3RoZXIgc2hvdC5gXHJcbiAgICAgICAgICAgIDogJ0hpdCEgVGFrZSBhbm90aGVyIHNob3QuJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhc3NUdXJuKCkge1xyXG4gICAgaWYgKG1vZGUgPT09ICcxcCcpIHtcclxuICAgICAgICBjdXJyZW50VHVybiA9IDI7XHJcbiAgICAgICAgc2V0U3RhdHVzKCdFbmVteSBpcyB0aGlua2luZ+KApicpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZW5lbXlUdXJuLCA4MDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjdXJyZW50VHVybiA9IGN1cnJlbnRUdXJuID09PSAxID8gMiA6IDE7XHJcblxyXG4gICAgICAgIGVscy5lbmVteUJvYXJkLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLWhpZGRlbicpO1xyXG4gICAgICAgIGVscy5wbGF5ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKCdib2FyZC1oaWRkZW4nKTtcclxuICAgICAgICBzaG93UGFzc1NjcmVlbihcclxuICAgICAgICAgICAgYFBhc3MgdG8gUGxheWVyICR7Y3VycmVudFR1cm59YCxcclxuICAgICAgICAgICAgYFBsYXllciAke2N1cnJlbnRUdXJufSwgaXQncyB5b3VyIHR1cm4uIENsaWNrIHJlYWR5IHdoZW4gdGhlIG90aGVyIHBsYXllciBpcyBsb29raW5nIGF3YXkuYCxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxzLmVuZW15Qm9hcmQuY2xhc3NMaXN0LnJlbW92ZSgnYm9hcmQtaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICBlbHMucGxheWVyQm9hcmQuY2xhc3NMaXN0LnJlbW92ZSgnYm9hcmQtaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICBlbHMucGxheWVyTGFiZWwudGV4dENvbnRlbnQgPSBgUGxheWVyICR7Y3VycmVudFR1cm59J3MgQm9hcmRgO1xyXG4gICAgICAgICAgICAgICAgZWxzLmVuZW15TGFiZWwudGV4dENvbnRlbnQgPSBgUGxheWVyICR7Y3VycmVudFR1cm4gPT09IDEgPyAyIDogMX0ncyBCb2FyZGA7XHJcbiAgICAgICAgICAgICAgICBzZXRTdGF0dXMoYFBsYXllciAke2N1cnJlbnRUdXJufTogY2xpY2sgYSBjZWxsIG9uIHRoZSBlbmVteSBib2FyZC5gKTtcclxuICAgICAgICAgICAgICAgIGRyYXdCYXR0bGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVuZW15VHVybigpIHtcclxuICAgIGlmIChwaGFzZSAhPT0gJ2JhdHRsZScgfHwgbW9kZSAhPT0gJzFwJyB8fCBjdXJyZW50VHVybiAhPT0gMikgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IG1vdmUgPSBwbGF5ZXIyLmdldFNtYXJ0TW92ZShwbGF5ZXIxLmJvYXJkKTtcclxuICAgIGlmICghbW92ZSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IFtyLCBjXSA9IG1vdmU7XHJcbiAgICBjb25zdCByZXN1bHQgPSBwbGF5ZXIxLmJvYXJkLnJlY2VpdmVBdHRhY2sociwgYyk7XHJcblxyXG4gICAgaWYgKHBsYXllcjEuYm9hcmQuYWxsU3VuaygpKSB7XHJcbiAgICAgICAgZHJhd0JhdHRsZSgpO1xyXG4gICAgICAgIGVuZEdhbWUoJ0VuZW15IHdpbnMuJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXN1bHQgPT09ICdtaXNzJykge1xyXG4gICAgICAgIGN1cnJlbnRUdXJuID0gMTtcclxuICAgICAgICBkcmF3QmF0dGxlKCk7XHJcbiAgICAgICAgc2V0U3RhdHVzKCdZb3VyIHR1cm46IGNsaWNrIGEgY2VsbCBvbiB0aGUgZW5lbXkgYm9hcmQuJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IG5laWdoYm9ycyA9IFtbciAtIDEsIGNdLCBbciArIDEsIGNdLCBbciwgYyAtIDFdLCBbciwgYyArIDFdXTtcclxuICAgICAgICBwbGF5ZXIyLnRhcmdldFF1ZXVlLnB1c2goLi4ubmVpZ2hib3JzKTtcclxuICAgICAgICBkcmF3QmF0dGxlKCk7XHJcbiAgICAgICAgc2V0U3RhdHVzKCdFbmVteSBoaXQhIEVuZW15IHNob290cyBhZ2FpbuKApicpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZW5lbXlUdXJuLCA4MDApO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBlbmRHYW1lKG1lc3NhZ2UpIHtcclxuICAgIHBoYXNlID0gJ292ZXInO1xyXG4gICAgc2V0U3RhdHVzKG1lc3NhZ2UpO1xyXG4gICAgc2hvd1Jlc3RhcnQodHJ1ZSk7XHJcbiAgICBoaWRlRG9jaygpO1xyXG4gICAgc2hvd1BsYWNlbWVudENvbnRyb2xzKGZhbHNlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0TW9kZShuZXdNb2RlKSB7XHJcbiAgICBtb2RlID0gbmV3TW9kZTtcclxuICAgIGVscy5tb2RlMXAuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJywgbW9kZSA9PT0gJzFwJyk7XHJcbiAgICBlbHMubW9kZTJwLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsIG1vZGUgPT09ICcycCcpO1xyXG4gICAgc3RhcnROZXdHYW1lKCk7XHJcbn1cclxuXHJcbmVscy5tb2RlMXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzZXRNb2RlKCcxcCcpKTtcclxuZWxzLm1vZGUycC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNldE1vZGUoJzJwJykpO1xyXG5cclxuZnVuY3Rpb24gc3RhcnROZXdHYW1lKCkge1xyXG4gICAgcGxheWVyMSA9IG5ldyBQbGF5ZXIoJ3JlYWwnKTtcclxuICAgIHBsYXllcjIgPSBuZXcgUGxheWVyKG1vZGUgPT09ICcycCcgPyAncmVhbCcgOiAnY29tcHV0ZXInKTtcclxuXHJcbiAgICBjdXJyZW50VHVybiA9IDE7XHJcbiAgICBwaGFzZSA9ICdwbGFjaW5nJztcclxuICAgIHBlbmRpbmdTaGlwcyA9IFtdO1xyXG4gICAgZHJhZ2dpbmdTaGlwSWQgPSBudWxsO1xyXG5cclxuICAgIHNob3dSZXN0YXJ0KGZhbHNlKTtcclxuICAgIGhpZGVQYXNzU2NyZWVuKCk7XHJcbiAgICBhdHRhY2hEcmFnSGFuZGxlcnNPbmNlKCk7XHJcblxyXG4gICAgYmVnaW5QbGFjZW1lbnQoMSk7XHJcbn1cclxuXHJcbmxldCBkcmFnSGFuZGxlcnNBdHRhY2hlZCA9IGZhbHNlO1xyXG5mdW5jdGlvbiBhdHRhY2hEcmFnSGFuZGxlcnNPbmNlKCkge1xyXG4gICAgaWYgKGRyYWdIYW5kbGVyc0F0dGFjaGVkKSByZXR1cm47XHJcbiAgICBkcmFnSGFuZGxlcnNBdHRhY2hlZCA9IHRydWU7XHJcbiAgICBhdHRhY2hEcmFnSGFuZGxlcnMoKTtcclxufVxyXG5cclxuZWxzLnJlc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydE5ld0dhbWUpO1xyXG5cclxuc3RhcnROZXdHYW1lKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9