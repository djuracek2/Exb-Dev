System.register(["jimu-core","jimu-core/react","jimu-arcgis","calcite-components","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_calcite_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_calcite_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_calcite_components__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/layerlist-widget/map_layer_list/src/runtime/app.css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/layerlist-widget/map_layer_list/src/runtime/app.css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.widget-content {
  overflow-x: hidden !important;
}

.labels-button {
  padding: 0;
}

.accordion-container {
  display: flex;
  flex-direction: column;
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

#decrease-Btn {
  padding-left: 5px !important;
}

#increase-Btn {
  padding-left: 3px !important;
}`, "",{"version":3,"sources":["webpack://./your-extensions/widgets/layerlist-widget/map_layer_list/src/runtime/app.css"],"names":[],"mappings":"AAAA;EACE,6BAAA;AACF;;AAEA;EACE,UAAA;AACF;;AACA;EACE,aAAA;EACA,sBAAA;AAEF;;AACA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,aAAA;AAEA;;AAEA;EACE,4BAAA;AACF;;AAEA;EACE,4BAAA;AACF","sourcesContent":[".widget-content {\n  overflow-x: hidden !important;\n}\n\n.labels-button {\n  padding: 0;\n}\n.accordion-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.accordion-header {\ndisplay: flex;\njustify-content: space-between;\nalign-items: center;\npadding: 10px;\n\n}\n\n#decrease-Btn {\n  padding-left: 5px !important;\n}\n\n#increase-Btn {\n  padding-left: 3px !important;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


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

/***/ }),

/***/ "./your-extensions/widgets/layerlist-widget/map_layer_list/src/runtime/app.css":
/*!*************************************************************************************!*\
  !*** ./your-extensions/widgets/layerlist-widget/map_layer_list/src/runtime/app.css ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_app_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./app.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/layerlist-widget/map_layer_list/src/runtime/app.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_app_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_app_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_app_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_app_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


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

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


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

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


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

/***/ }),

/***/ "calcite-components":
/*!*************************************!*\
  !*** external "calcite-components" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_calcite_components__;

/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "react":
/*!**********************************!*\
  !*** external "jimu-core/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************************************************************************!*\
  !*** ./your-extensions/widgets/layerlist-widget/map_layer_list/src/runtime/widget.tsx ***!
  \****************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Map)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.css */ "./your-extensions/widgets/layerlist-widget/map_layer_list/src/runtime/app.css");
/* harmony import */ var calcite_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! calcite-components */ "calcite-components");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");







function Map(props) {
    const [jimuMapView, setJimuMapView] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [layerList, setLayerList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [dropdownVisible, setDropdownVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [groupIconVisible, setGroupIconVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [labels, setLabels] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([false, false, false, false, false, false, false]);
    const [subLabels, setSubLabels] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([false, false]);
    const [transparency, setTransparency] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const [zoom, setZoom] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(14);
    const [groupTitles, setGroupTitles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const transparencyControlStyles = {
        display: "inline-block",
        position: "absolute",
        right: "10px",
    };
    const transparencyControlStyles2 = {
        display: "inline-block",
        position: "absolute",
        right: "10px",
        bottom: "2px"
    };
    const buttonStyles = {
        width: "24px",
        height: "24px",
        fontSize: "12px",
        cursor: "pointer",
        padding: "0px",
        lineHeight: "0px",
        paddingLeft: "3px"
    };
    const buttonStyles2 = {
        width: "24px",
        height: "24px",
        fontSize: "12px",
        cursor: "pointer",
        padding: "0px",
        lineHeight: "0px",
        paddingLeft: "2px",
    };
    const handleSubGroupIconVisible = (groupId, SubGroupId) => {
        // let togVal = toggleVal;
        let layerID = groupId;
        const subGroupLayers = document.querySelectorAll(`[data-id="${groupId}"]`);
        subGroupLayers.forEach((layer) => {
            const layerId = layer.getAttribute("value");
            layerID = layerId;
            toggleLayerVisibility(layerId, groupId);
        });
        toggleSubGroupIcon(groupId, SubGroupId);
    };
    // separate here
    const toggleSubGroupIcon = (groupId, SubGroupId) => {
        const allGroupLayers = [];
        const groupLayersVis = [];
        const groupLayerHid = [];
        const subGroupLayers = document.querySelectorAll(`[data-id="${groupId}"]`);
        // const subGroupParent = document.querySelectorAll(`[group-id="${groupId}"]`);
        // console.log(subGroupParent)
        // const groupLayers = document.querySelectorAll(`[data-id="${Id}"]`);
        // const subGroupLayers = document.querySelectorAll(`[data-id="sub-${Id}"]`);
        // const allLayers = [...groupLayers, ...subGroupLayers]
        // console.log(allLayers)
        subGroupLayers.forEach((layer) => {
            var _a, _b;
            const layerId = layer.getAttribute("value");
            const layerV = (_b = (_a = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view) === null || _a === void 0 ? void 0 : _a.map) === null || _b === void 0 ? void 0 : _b.findLayerById(layerId);
            if (layerV) {
                if (layerV.visible) {
                    groupLayersVis.push(layerId);
                }
                else {
                    groupLayerHid.push(layerId);
                }
                if (layerV) {
                    allGroupLayers.push(layerId);
                }
            }
        });
        // add logic for subgroup columns here?
        let actionElementSub;
        if (groupLayersVis.length !== allGroupLayers.length) {
            actionElementSub = document.querySelector(`[group-id="${groupId}"]`);
            // set icons on group
            if (actionElementSub) {
                actionElementSub.setAttribute("icon", "square");
            }
        }
        else {
            actionElementSub = document.querySelector(`[group-id="${groupId}"]`);
            // set icons on group
            if (actionElementSub) {
                actionElementSub.setAttribute("icon", "check-square");
            }
        }
    };
    const handleGroupIconVisible = (groupId, layerid, subgroupid) => {
        let subId;
        if (subgroupid != "undefined" && subgroupid != null) {
            subId = subgroupid;
        }
        console.log(groupId);
        let toggleVal;
        setLabels(prevState => {
            const newState = [...prevState];
            newState[groupId] = !newState[groupId];
            toggleVal = newState[groupId];
            toggleAllLayerVisibility(groupId, layerid, toggleVal, subId);
            return newState;
        });
        // console.log(groupIconVisible);
    };
    const handleLabelsClick = (id) => {
        var _a, _b;
        const layer = (_b = (_a = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view) === null || _a === void 0 ? void 0 : _a.map) === null || _b === void 0 ? void 0 : _b.findLayerById(id);
        if (layer) {
            layer.labelsVisible = !layer.labelsVisible;
        }
        const actionElement = document.getElementById(`action-vis-${id}`);
        if (actionElement) {
            actionElement.setAttribute("icon", layer.labelsVisible ? "view-visible" : "view-hide");
        }
    };
    const activeViewChangeHandler = (jmv) => {
        if (jmv) {
            setJimuMapView(jmv);
        }
    };
    const handleOpacity = (layerid, value) => {
        var _a, _b;
        const layer = (_b = (_a = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view) === null || _a === void 0 ? void 0 : _a.map) === null || _b === void 0 ? void 0 : _b.findLayerById(layerid);
        if (layer) {
            layer.opacity = value;
            layer.refresh();
        }
    };
    const handleDecreaseTransparency = (layerid) => {
        console.log("Decrease transparency clicked");
        setTransparency((prevTransparency) => {
            const newTransparency = prevTransparency - 0.1;
            console.log("New transparency:", newTransparency);
            const opacity = 1 - newTransparency; // Calculate opacity from transparency
            handleOpacity(layerid, newTransparency); // Call handleOpacity with updated opacity
            return newTransparency >= 0 ? newTransparency : 0;
        });
    };
    const handleIncreaseTransparency = (layerid) => {
        console.log("Increase transparency clicked");
        setTransparency((prevTransparency) => {
            const newTransparency = prevTransparency + 0.1;
            console.log("New transparency:", newTransparency);
            const opacity = 1 - newTransparency; // Calculate opacity from transparency
            handleOpacity(layerid, newTransparency); // Call handleOpacity with updated opacity
            return newTransparency <= 1 ? newTransparency : 1;
        });
    };
    const handleDecreaseZoom = () => {
        setZoom((prevZoom) => {
            const newZoom = prevZoom - 1;
            if (jimuMapView && jimuMapView.view) {
                jimuMapView.view.zoom = newZoom;
            }
            return newZoom;
        });
    };
    const handleIncreaseZoom = () => {
        setZoom((prevZoom) => {
            const newZoom = prevZoom + 1;
            if (jimuMapView && jimuMapView.view) {
                jimuMapView.view.zoom = newZoom;
            }
            return newZoom;
        });
    };
    let groupIdCounter = 0;
    const processLayers = (layers, groupId = "", subGroupId) => {
        const layerListItems = [];
        let Sub = subGroupId;
        let groupTitles = [];
        let subGroupTitles = [];
        const layers2 = jimuMapView.view.map.layers.items;
        console.log(layers);
        layers2.forEach((layerG) => groupTitles.push(layerG.title));
        console.log(groupTitles);
        // setGroupTitles(groupTitles)
        layers.forEach((layer, i) => {
            const currentGroupId = groupId !== "" ? groupId : groupIdCounter++;
            if (layer.type === "group") {
                const groupTitle = layer.title || "Group";
                if (!groupTitles.includes(layer.title)) {
                    let subGroupId = `sub-${currentGroupId}`;
                    console.log(layer.title);
                    subGroupTitles.push(layer.title);
                    console.log(subGroupTitles);
                    layerListItems.push(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(calcite_components__WEBPACK_IMPORTED_MODULE_4__.CalciteAccordionItem, { "data-id": currentGroupId, "sub-id": `sub-${currentGroupId}`, key: layer.id, className: `accordion-item sub-group-${currentGroupId}`, description: `sub-${groupTitle}` },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(calcite_components__WEBPACK_IMPORTED_MODULE_4__.CalciteAction, { "data-id": `sub-${currentGroupId}`, id: `action-${layer.id}`, className: `sub-group-${currentGroupId}`, "data-layer-id": layer.id, "group-id": `sub-${currentGroupId}`, slot: "actions-end", icon: "square", text: layer.title, onClick: () => handleSubGroupIconVisible(subGroupId, layer.id) }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null, processLayers(layer.layers.items, subGroupId))));
                    // figure out this logic to add another sub-group
                }
                else { // Default title or layer title
                    layerListItems.push(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(calcite_components__WEBPACK_IMPORTED_MODULE_4__.CalciteAccordionItem, { "data-id": currentGroupId, key: layer.id, className: "accordion-item", description: groupTitle },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(calcite_components__WEBPACK_IMPORTED_MODULE_4__.CalciteAction, { "data-id": currentGroupId, id: `action-${layer.id}`, 
                            //sub-id={subGroupId ? `sub-group-${currentGroupId}` : `group-${currentGroupId}`}
                            className: `group-${currentGroupId}`, slot: "actions-end", icon: "square", text: layer.title, onClick: () => handleGroupIconVisible(currentGroupId, layer.id) }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null, processLayers(layer.layers.items, currentGroupId))));
                }
            }
            else {
                // Add CalcitePickListItem with CalciteAction for individual layers
                layerListItems.push(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(calcite_components__WEBPACK_IMPORTED_MODULE_4__.CalcitePickListItem, { key: layer.id, label: layer.title, value: layer.id, description: layer.type, "data-id": groupId },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(calcite_components__WEBPACK_IMPORTED_MODULE_4__.CalciteAction, { id: `action-${layer.id}`, slot: "actions-end", "data-id": `${currentGroupId}`, className: Sub ? `sub-group-${currentGroupId}` : `group-${currentGroupId}`, icon: layer.visible ? "check-square" : "square", text: layer.title, onClick: () => toggleLayerVisibility(layer.id, groupId) }),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(calcite_components__WEBPACK_IMPORTED_MODULE_4__.CalciteDropdown, { slot: "actions-end", "width-scale": "l", closeOnSelectDisabled: "true" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(calcite_components__WEBPACK_IMPORTED_MODULE_4__.CalciteAction, { id: `action-${layer.id}`, icon: "ellipsis", slot: "trigger", text: layer.title }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(calcite_components__WEBPACK_IMPORTED_MODULE_4__.CalciteDropdownGroup, null,
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(calcite_components__WEBPACK_IMPORTED_MODULE_4__.CalciteDropdownItem, null,
                                "Transparency",
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "transparency-control", style: transparencyControlStyles },
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { style: buttonStyles, onClick: () => handleDecreaseTransparency(layer.id), size: "default" },
                                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 12H21V13H3V12Z" fill="#6A6A6A"/>\r\n                        </svg>\r\n                        ', size: "m" })),
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { style: buttonStyles, onClick: () => handleIncreaseTransparency(layer.id) },
                                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 12H12V6H13V12H19V13H13V19H12V13H6V12Z" fill="#6A6A6A"/>\r\n                        </svg>\r\n                        ', size: "m" })))),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(calcite_components__WEBPACK_IMPORTED_MODULE_4__.CalciteDropdownItem, { label: "Toggle Labels" },
                                "Toggle Labels",
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "transparency-control", style: transparencyControlStyles2 },
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(calcite_components__WEBPACK_IMPORTED_MODULE_4__.CalciteAction, { id: `action-vis-${layer.id}`, slot: "actions-end", icon: layer.labelsVisible ? "view-visible" : "view-hide", text: layer.title, scale: "s", className: "labels-button", onClick: () => handleLabelsClick(layer.id) }))),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(calcite_components__WEBPACK_IMPORTED_MODULE_4__.CalciteDropdownItem, { label: "Layer Details", href: layer.url, target: "_blank" },
                                "Layer Details",
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "transparency-control", style: transparencyControlStyles },
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { style: buttonStyles, href: layer.url, type: "tertiary", target: "_blank" },
                                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99991 14C6.99991 14.025 7.00291 14.05 7.00391 14.075L3.46391 10.535C1.52614 8.57967 1.53349 5.42577 3.48035 3.47947C5.4272 1.53316 8.5811 1.52671 10.5359 3.46503L14.5359 7.46502C15.731 8.65643 16.2432 10.3709 15.8976 12.0227C15.552 13.6744 14.3954 15.0397 12.8229 15.652L12.5859 15.415C12.4117 15.2393 12.2717 15.0328 12.1729 14.806C13.5137 14.3989 14.5422 13.3175 14.8816 11.9579C15.2209 10.5983 14.8212 9.16045 13.8289 8.17103L9.82891 4.17103C8.37283 2.71559 6.04981 2.6031 4.45991 3.91103L4.14191 3.52403L4.45991 3.91003C3.58739 4.62642 3.05823 5.67817 3.003 6.80576C2.94776 7.93335 3.37159 9.03178 4.16991 9.83003L7.10991 12.77C7.03714 13.176 7.00033 13.5876 6.99991 14ZM22.9999 18C23.0035 16.6732 22.4763 15.4 21.5359 14.464L17.9959 10.925C17.9959 10.95 17.9999 10.975 17.9999 11C17.9981 11.4125 17.9603 11.8241 17.8869 12.23L20.8289 15.171C21.601 15.9429 22.024 16.9969 21.9999 18.0884C21.9757 19.1799 21.5064 20.2141 20.7009 20.951C19.1219 22.3968 16.6846 22.343 15.1709 20.829L11.1709 16.829C10.1694 15.8439 9.7638 14.4025 10.1046 13.0396C10.4453 11.6768 11.4816 10.5959 12.8289 10.198C12.73 9.96963 12.5892 9.76172 12.4139 9.58503L12.1799 9.35103C11.4501 9.63417 10.797 10.0846 10.2729 10.666C8.50323 12.6438 8.58708 15.6596 10.4639 17.536L14.4639 21.536C15.8939 22.9664 18.0448 23.3944 19.9135 22.6203C21.7821 21.8462 23.0003 20.0226 22.9999 18Z" fill="#6A6A6A"/>\r\n                        </svg>', size: "m" }))))))));
            }
        });
        return layerListItems;
    };
    // Function to toggle layer visibility and changes icon
    // add logic to check group icon
    const toggleLayerVisibility = (layerId, Id, toggleVal) => {
        var _a, _b;
        // Find the layer in the webmap
        const layer = (_b = (_a = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view) === null || _a === void 0 ? void 0 : _a.map) === null || _b === void 0 ? void 0 : _b.findLayerById(layerId);
        const subId = `sub-${Id}`;
        if (layer) {
            // Toggle the layer's visibility
            layer.visible = !layer.visible;
        }
        if (layer) {
            // Update the action icon based on the new visibility state
            const actionElement = document.getElementById(`action-${layerId}`);
            // const groupLayers = document.getElementById(`[data-id="${Id}"]`);
            // const groupIcon = document.querySelector(`.group-${Id}`);
            if (actionElement) {
                actionElement.setAttribute("icon", layer.visible ? "check-square" : "square");
            }
        }
        // toggleSubGroupIcon(layerId, Id, toggleVal)
        if (subId) {
            if (subId.includes("sub")) {
                toggleSubGroupIcon(Id, layerId, toggleVal);
            }
        }
        toggleGroupIcon(layerId, Id, toggleVal);
        // set icon of group
        // if (groupIcon) {
        //   groupIcon.setAttribute(
        //     "icon",
        //     layer.visible ? "check-square" : "square"
        //   );
        // }
        // if (groupLayers) {
        //   groupLayers.setAttribute(
        //     "icon",
        //     layer.visible ? "check-square" : "square"
        //   );
        // }
        // } else {
        //   //change icon of accordion items
        //   // const accordionItem = document.querySelector(`.group-${Id}`);
        //   // if (accordionItem) {
        //   //   accordionItem.setAttribute("icon", Id ? "check-square" : "square");
        //   // }
        // }
    };
    const checkGroupClick = (layerId, Id, toggleVal) => {
        var _a, _b;
        if (toggleVal) {
            const groupIcon = document.querySelector(`.group-${Id}`);
            // set icons on group
            if (groupIcon) {
                groupIcon.setAttribute("icon", "check-square");
            }
            const groupLayers = document.querySelectorAll(`[data-id="${Id}"]`);
            groupLayers.forEach((layer) => {
                var _a, _b;
                const layerId = layer.getAttribute("value");
                const layerV = (_b = (_a = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view) === null || _a === void 0 ? void 0 : _a.map) === null || _b === void 0 ? void 0 : _b.findLayerById(layerId);
                if (layerV) {
                    layerV.visible = true;
                    const actionElement = document.getElementById(`action-${layerId}`);
                    if (actionElement) {
                        actionElement.setAttribute("icon", "check-square");
                    }
                }
            });
        }
        else if (toggleVal === "undefined") {
            const groupIcon = document.querySelector(`.group-${Id}`);
            // set icons on group
            if (groupIcon) {
                groupIcon.setAttribute("icon", "square");
            }
            const layerV = (_b = (_a = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view) === null || _a === void 0 ? void 0 : _a.map) === null || _b === void 0 ? void 0 : _b.findLayerById(layerId);
            if (layerV) {
                layerV.visible = false;
                const actionElement = document.getElementById(`action-${layerId}`);
                if (actionElement) {
                    actionElement.setAttribute("icon", "square");
                }
            }
        }
    };
    // function just to toggle group icon
    const toggleGroupIcon = (layerId, Id, toggleVal) => {
        //checks group icon and if all layers are visible or not
        const allGroupLayers = [];
        const groupLayersVis = [];
        const groupLayerHid = [];
        const groupLayers = document.querySelectorAll(`[data-id="${Id}"]`);
        const subGroupLayers = document.querySelectorAll(`[data-id="sub-${Id}"]`);
        const allLayers = [...groupLayers, ...subGroupLayers];
        console.log(allLayers);
        allLayers.forEach((layer) => {
            var _a, _b;
            const layerId = layer.getAttribute("value");
            const layerV = (_b = (_a = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view) === null || _a === void 0 ? void 0 : _a.map) === null || _b === void 0 ? void 0 : _b.findLayerById(layerId);
            if (layerV) {
                if (layerV.visible) {
                    groupLayersVis.push(layerId);
                }
                else {
                    groupLayerHid.push(layerId);
                }
                if (layerV) {
                    allGroupLayers.push(layerId);
                }
            }
        });
        // add logic for subgroup columns here?
        if (groupLayersVis.length !== allGroupLayers.length) {
            const groupIcon = document.querySelector(`.group-${Id}`);
            // set icons on group
            if (groupIcon) {
                groupIcon.setAttribute("icon", "square");
            }
        }
        else {
            const groupIcon = document.querySelector(`.group-${Id}`);
            // set icons on group
            if (groupIcon) {
                groupIcon.setAttribute("icon", "check-square");
            }
        }
        //}
    };
    const toggleAllLayerVisibility = (groupId, id, toggleVal, subId) => {
        let togVal = toggleVal;
        let layerID;
        const actionElement = document.querySelector(`.group-${groupId}`);
        if (actionElement) {
            actionElement.setAttribute("icon", groupIconVisible ? "check-square" : "square");
        }
        const groupLayers = document.querySelectorAll(`[data-id="${groupId}"]`);
        groupLayers.forEach((layer) => {
            const layerId = layer.getAttribute("value");
            console.log(layer);
            layerID = layerId;
            console.log(layerId);
            toggleLayerVisibility(layerId, groupId, togVal);
        });
        // gets sublayer group main one
        // const subGroupLayers = document.querySelectorAll(`[data-id="sub-${groupId}"]`);
        // let elementID;
        // subGroupLayers.forEach(item => {
        //   if (item.getAttribute('data-layer-id') !== null) {
        //     elementID = item;
        //   }
        // })
        // const SubGroupId = elementID.getAttribute("data-layer-id")
        // console.log(elementID)
        // const layers = jimuMapView.view.map.layers.items;
        //  const subGroup =  layers.filter(layer => layer.type == "group")
        //  console.log(subGroup)
        // THINK ABOUT GETTING SUBGROUPICON HERE
        //handleSubGroupIconVisible(SubGroupId, groupId)
        toggleGroupIcon(layerID, groupId, toggleVal);
        checkGroupClick(layerID, groupId, toggleVal);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (jimuMapView) {
            let groupTitles = [];
            const layers = jimuMapView.view.map.layers.items;
            console.log(layers);
            layers.forEach((layerG) => groupTitles.push(layerG.title));
            console.log(groupTitles);
            setGroupTitles(groupTitles);
            const processedLayerList = processLayers(layers);
            setZoom(jimuMapView.view.zoom); // Process layers
            setLayerList(processedLayerList); // Update layer list state
        }
    }, [jimuMapView]);
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "widget-starter jimu-widget", style: { overflowX: "hidden" } },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("calcite-panel", null,
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(calcite_components__WEBPACK_IMPORTED_MODULE_4__.CalciteAccordion, { "icon-position": "start", "icon-type": "caret", scale: "m" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "accordion-container" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { id: "layerlist-header-container", className: "accordion-header", style: { height: "50px" } },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h5", null, "Layer List"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { marginLeft: 'auto' } },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { style: buttonStyles, onClick: () => handleDecreaseZoom(), className: "btn", id: "decrease-Btn" },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 12H21V13H3V12Z" fill="#6A6A6A"/>\r\n                        </svg>\r\n                        ', size: "s" })),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { style: buttonStyles2, onClick: () => handleIncreaseZoom(), className: "btn", id: "increase-Btn" },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 12H12V6H13V12H19V13H13V19H12V13H6V12Z" fill="#6A6A6A"/>\r\n                        </svg>\r\n                        ', size: "m" }))))),
                props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.JimuMapViewComponent, { useMapWidgetId: props.useMapWidgetIds[0], onActiveViewChange: activeViewChangeHandler })),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null, layerList)))));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9sYXllcmxpc3Qtd2lkZ2V0L21hcF9sYXllcl9saXN0L2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN5SDtBQUNqQjtBQUN4Ryw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sOElBQThJLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVywwQ0FBMEMsa0NBQWtDLEdBQUcsb0JBQW9CLGVBQWUsR0FBRyx3QkFBd0Isa0JBQWtCLDJCQUEyQixHQUFHLHVCQUF1QixnQkFBZ0IsaUNBQWlDLHNCQUFzQixnQkFBZ0IsS0FBSyxtQkFBbUIsaUNBQWlDLEdBQUcsbUJBQW1CLGlDQUFpQyxHQUFHLG1CQUFtQjtBQUN4dUI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDakMxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxz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QUMsY0FBYztnQ0FFakIsMkRBQUMseUNBQUksSUFDSCxJQUFJLEVBQUMsK1FBR0osRUFDRCxJQUFJLEVBQUMsR0FBRyxHQUNSLENBQ0s7NEJBQ1QsMkRBQUMsMkNBQU0sSUFDTCxLQUFLLEVBQUUsYUFBYSxFQUNwQixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsRUFDbkMsU0FBUyxFQUFDLEtBQUssRUFDZixFQUFFLEVBQUMsY0FBYztnQ0FFakIsMkRBQUMseUNBQUksSUFDSCxJQUFJLEVBQUMsc1NBR0osRUFDRCxJQUFJLEVBQUMsR0FBRyxHQUNSLENBQ0ssQ0FDSCxDQUNKLENBQ0Y7Z0JBQ1QsS0FBSyxDQUFDLGVBQWUsSUFBSSxLQUFLLENBQUMsZUFBZSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FDOUQsMkRBQUMsNkRBQW9CLElBQ25CLGNBQWMsRUFBRSxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUN4QyxrQkFBa0IsRUFBRSx1QkFBdUIsR0FDM0MsQ0FDSDtnQkFDRCx3RUFBTSxTQUFTLENBQU8sQ0FDTCxDQUNMLENBQ1osQ0FDUCxDQUFDO0FBQ0osQ0FBQztBQUVPLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2xheWVybGlzdC13aWRnZXQvbWFwX2xheWVyX2xpc3Qvc3JjL3J1bnRpbWUvYXBwLmNzcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2xheWVybGlzdC13aWRnZXQvbWFwX2xheWVyX2xpc3Qvc3JjL3J1bnRpbWUvYXBwLmNzcz81YzM0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJjYWxjaXRlLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9yZWFjdFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9sYXllcmxpc3Qtd2lkZ2V0L21hcF9sYXllcl9saXN0L3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC53aWRnZXQtY29udGVudCB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG4ubGFiZWxzLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5hY2NvcmRpb24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmFjY29yZGlvbi1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbiNkZWNyZWFzZS1CdG4ge1xuICBwYWRkaW5nLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG4jaW5jcmVhc2UtQnRuIHtcbiAgcGFkZGluZy1sZWZ0OiAzcHggIWltcG9ydGFudDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2xheWVybGlzdC13aWRnZXQvbWFwX2xheWVyX2xpc3Qvc3JjL3J1bnRpbWUvYXBwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFFRjs7QUFDQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUVBOztBQUVBO0VBQ0UsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLDRCQUFBO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLndpZGdldC1jb250ZW50IHtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbiAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubGFiZWxzLWJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4uYWNjb3JkaW9uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmFjY29yZGlvbi1oZWFkZXIge1xcbmRpc3BsYXk6IGZsZXg7XFxuanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XFxucGFkZGluZzogMTBweDtcXG5cXG59XFxuXFxuI2RlY3JlYXNlLUJ0biB7XFxuICBwYWRkaW5nLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4jaW5jcmVhc2UtQnRuIHtcXG4gIHBhZGRpbmctbGVmdDogM3B4ICFpbXBvcnRhbnQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL2FwcC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL2FwcC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYWxjaXRlX2NvbXBvbmVudHNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiaW1wb3J0IHsgUmVhY3QsIHR5cGUgQWxsV2lkZ2V0UHJvcHMgfSBmcm9tIFwiamltdS1jb3JlXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSmltdU1hcFZpZXdDb21wb25lbnQsIEppbXVNYXBWaWV3IH0gZnJvbSBcImppbXUtYXJjZ2lzXCI7XHJcbmltcG9ydCBcIi4vYXBwLmNzc1wiO1xyXG5pbXBvcnQge1xyXG4gIENhbGNpdGVQaWNrTGlzdEdyb3VwLFxyXG4gIENhbGNpdGVQaWNrTGlzdEl0ZW0sXHJcbiAgQ2FsY2l0ZUFjdGlvbixcclxuICBDYWxjaXRlQWNjb3JkaW9uLFxyXG4gIENhbGNpdGVBY2NvcmRpb25JdGVtLFxyXG4gIENhbGNpdGVEcm9wZG93bixcclxuICBDYWxjaXRlRHJvcGRvd25Hcm91cCxcclxuICBDYWxjaXRlRHJvcGRvd25JdGVtLFxyXG4gIENhbGNpdGVGYWIsXHJcbn0gZnJvbSBcImNhbGNpdGUtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBmb250VmFsdWUgfSBmcm9tIFwiamltdS11aS9hZHZhbmNlZC9yaWNoLXRleHQtZWRpdG9yXCI7XHJcbmltcG9ydCB7IEZvbnRTaXplVHlwZSB9IGZyb20gXCJkaXN0L3dpZGdldHMvYXJjZ2lzL2ZlYXR1cmUtaW5mby9zcmMvY29uZmlnXCI7XHJcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiamltdS10aGVtZVwiO1xyXG5pbXBvcnQgeyBzdHJpbmcgfSBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSBcImppbXUtdWlcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcImppbXUtdWlcIjtcclxuaW1wb3J0IHsgVXBDaXJjbGVPdXRsaW5lZCB9IGZyb20gXCJqaW11LWljb25zL291dGxpbmVkL2RpcmVjdGlvbmFsL3VwLWNpcmNsZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFwKHByb3BzOiBBbGxXaWRnZXRQcm9wczxhbnk+KSB7XHJcbiAgY29uc3QgW2ppbXVNYXBWaWV3LCBzZXRKaW11TWFwVmlld10gPSB1c2VTdGF0ZTxKaW11TWFwVmlldz4oKTtcclxuICBjb25zdCBbbGF5ZXJMaXN0LCBzZXRMYXllckxpc3RdID0gdXNlU3RhdGU8SlNYLkVsZW1lbnRbXT4oW10pO1xyXG4gIGNvbnN0IFtkcm9wZG93blZpc2libGUsIHNldERyb3Bkb3duVmlzaWJsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbZ3JvdXBJY29uVmlzaWJsZSwgc2V0R3JvdXBJY29uVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xhYmVscywgc2V0TGFiZWxzXSA9IHVzZVN0YXRlKFtmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZV0pO1xyXG4gIGNvbnN0IFtzdWJMYWJlbHMsIHNldFN1YkxhYmVsc10gPSB1c2VTdGF0ZShbZmFsc2UsIGZhbHNlXSlcclxuICBjb25zdCBbdHJhbnNwYXJlbmN5LCBzZXRUcmFuc3BhcmVuY3ldID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW3pvb20sIHNldFpvb21dID0gdXNlU3RhdGUoMTQpO1xyXG4gIGNvbnN0IFtncm91cFRpdGxlcywgc2V0R3JvdXBUaXRsZXNdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gIGNvbnN0IHRyYW5zcGFyZW5jeUNvbnRyb2xTdHlsZXMgPSB7XHJcbiAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIHJpZ2h0OiBcIjEwcHhcIixcclxuICB9O1xyXG5cclxuICBjb25zdCB0cmFuc3BhcmVuY3lDb250cm9sU3R5bGVzMiA9IHtcclxuICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgcmlnaHQ6IFwiMTBweFwiLFxyXG4gICAgYm90dG9tOiBcIjJweFwiXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYnV0dG9uU3R5bGVzID0ge1xyXG4gICAgd2lkdGg6IFwiMjRweFwiLFxyXG4gICAgaGVpZ2h0OiBcIjI0cHhcIixcclxuICAgIGZvbnRTaXplOiBcIjEycHhcIixcclxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICBwYWRkaW5nOiBcIjBweFwiLFxyXG4gICAgbGluZUhlaWdodDogXCIwcHhcIixcclxuICAgIHBhZGRpbmdMZWZ0OiBcIjNweFwiXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYnV0dG9uU3R5bGVzMiA9IHtcclxuICAgIHdpZHRoOiBcIjI0cHhcIixcclxuICAgIGhlaWdodDogXCIyNHB4XCIsXHJcbiAgICBmb250U2l6ZTogXCIxMnB4XCIsXHJcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgcGFkZGluZzogXCIwcHhcIixcclxuICAgIGxpbmVIZWlnaHQ6IFwiMHB4XCIsXHJcbiAgICBwYWRkaW5nTGVmdDogXCIycHhcIixcclxuICB9O1xyXG5cclxuXHJcbiAgY29uc3QgaGFuZGxlU3ViR3JvdXBJY29uVmlzaWJsZSA9IChncm91cElkLCBTdWJHcm91cElkKSA9PiB7XHJcbiAgICAvLyBsZXQgdG9nVmFsID0gdG9nZ2xlVmFsO1xyXG4gICAgbGV0IGxheWVySUQgPSBncm91cElkO1xyXG5cclxuICAgIGNvbnN0IHN1Ykdyb3VwTGF5ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtaWQ9XCIke2dyb3VwSWR9XCJdYCk7XHJcblxyXG4gICAgc3ViR3JvdXBMYXllcnMuZm9yRWFjaCgobGF5ZXIpID0+IHtcclxuICAgICAgY29uc3QgbGF5ZXJJZCA9IGxheWVyLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpO1xyXG4gICAgICBsYXllcklEID0gbGF5ZXJJZFxyXG4gICAgICB0b2dnbGVMYXllclZpc2liaWxpdHkobGF5ZXJJZCwgZ3JvdXBJZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0b2dnbGVTdWJHcm91cEljb24oZ3JvdXBJZCwgU3ViR3JvdXBJZClcclxuICB9XHJcblxyXG5cclxuICAgIC8vIHNlcGFyYXRlIGhlcmVcclxuXHJcbiAgY29uc3QgdG9nZ2xlU3ViR3JvdXBJY29uID0gKGdyb3VwSWQsIFN1Ykdyb3VwSWQpID0+IHtcclxuICAgIGNvbnN0IGFsbEdyb3VwTGF5ZXJzID0gW107XHJcbiAgICBjb25zdCBncm91cExheWVyc1ZpcyA9IFtdO1xyXG4gICAgY29uc3QgZ3JvdXBMYXllckhpZCA9IFtdO1xyXG5cclxuICAgIGNvbnN0IHN1Ykdyb3VwTGF5ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtaWQ9XCIke2dyb3VwSWR9XCJdYCk7XHJcbiAgICAvLyBjb25zdCBzdWJHcm91cFBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtncm91cC1pZD1cIiR7Z3JvdXBJZH1cIl1gKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHN1Ykdyb3VwUGFyZW50KVxyXG5cclxuICAgIC8vIGNvbnN0IGdyb3VwTGF5ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtaWQ9XCIke0lkfVwiXWApO1xyXG4gICAgLy8gY29uc3Qgc3ViR3JvdXBMYXllcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1pZD1cInN1Yi0ke0lkfVwiXWApO1xyXG5cclxuICAgIC8vIGNvbnN0IGFsbExheWVycyA9IFsuLi5ncm91cExheWVycywgLi4uc3ViR3JvdXBMYXllcnNdXHJcbiAgICAvLyBjb25zb2xlLmxvZyhhbGxMYXllcnMpXHJcblxyXG4gICAgc3ViR3JvdXBMYXllcnMuZm9yRWFjaCgobGF5ZXIpID0+IHtcclxuICAgICAgY29uc3QgbGF5ZXJJZCA9IGxheWVyLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpO1xyXG4gICAgICBjb25zdCBsYXllclYgPSBqaW11TWFwVmlldz8udmlldz8ubWFwPy5maW5kTGF5ZXJCeUlkKGxheWVySWQpO1xyXG5cclxuICAgICAgaWYgKGxheWVyVikge1xyXG4gICAgICAgIGlmIChsYXllclYudmlzaWJsZSkge1xyXG4gICAgICAgICAgZ3JvdXBMYXllcnNWaXMucHVzaChsYXllcklkKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBncm91cExheWVySGlkLnB1c2gobGF5ZXJJZClcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxheWVyVikge1xyXG4gICAgICAgICAgYWxsR3JvdXBMYXllcnMucHVzaChsYXllcklkKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gYWRkIGxvZ2ljIGZvciBzdWJncm91cCBjb2x1bW5zIGhlcmU/XHJcblxyXG4gICAgbGV0IGFjdGlvbkVsZW1lbnRTdWI7XHJcblxyXG4gICAgaWYgKGdyb3VwTGF5ZXJzVmlzLmxlbmd0aCAhPT0gYWxsR3JvdXBMYXllcnMubGVuZ3RoKSB7XHJcbiAgICAgIGFjdGlvbkVsZW1lbnRTdWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZ3JvdXAtaWQ9XCIke2dyb3VwSWR9XCJdYCk7XHJcbiAgICAgIC8vIHNldCBpY29ucyBvbiBncm91cFxyXG4gICAgICBpZiAoYWN0aW9uRWxlbWVudFN1Yikge1xyXG4gICAgICAgIGFjdGlvbkVsZW1lbnRTdWIuc2V0QXR0cmlidXRlKFwiaWNvblwiLCBcInNxdWFyZVwiKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWN0aW9uRWxlbWVudFN1YiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtncm91cC1pZD1cIiR7Z3JvdXBJZH1cIl1gKTtcclxuICAgICAgLy8gc2V0IGljb25zIG9uIGdyb3VwXHJcbiAgICAgIGlmIChhY3Rpb25FbGVtZW50U3ViKSB7XHJcbiAgICAgICAgYWN0aW9uRWxlbWVudFN1Yi5zZXRBdHRyaWJ1dGUoXCJpY29uXCIsIFwiY2hlY2stc3F1YXJlXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgfVxyXG4gXHJcblxyXG5cclxuICBjb25zdCBoYW5kbGVHcm91cEljb25WaXNpYmxlID0gKGdyb3VwSWQsIGxheWVyaWQsIHN1Ymdyb3VwaWQpID0+IHtcclxuICAgIGxldCBzdWJJZDtcclxuICAgIGlmIChzdWJncm91cGlkICE9IFwidW5kZWZpbmVkXCIgJiYgc3ViZ3JvdXBpZCAhPSBudWxsKSB7XHJcbiAgICAgIHN1YklkID0gc3ViZ3JvdXBpZFxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coZ3JvdXBJZClcclxuICAgIGxldCB0b2dnbGVWYWw7XHJcbiAgICBzZXRMYWJlbHMocHJldlN0YXRlID0+IHtcclxuICAgICAgY29uc3QgbmV3U3RhdGUgPSBbLi4ucHJldlN0YXRlXTtcclxuICAgICAgbmV3U3RhdGVbZ3JvdXBJZF0gPSAhbmV3U3RhdGVbZ3JvdXBJZF07XHJcbiAgICAgIHRvZ2dsZVZhbCA9IG5ld1N0YXRlW2dyb3VwSWRdO1xyXG4gICAgICB0b2dnbGVBbGxMYXllclZpc2liaWxpdHkoZ3JvdXBJZCwgbGF5ZXJpZCwgdG9nZ2xlVmFsLCBzdWJJZCk7XHJcbiAgICAgIHJldHVybiBuZXdTdGF0ZTtcclxuICAgIH0pXHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coZ3JvdXBJY29uVmlzaWJsZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTGFiZWxzQ2xpY2sgPSAoaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgbGF5ZXIgPSBqaW11TWFwVmlldz8udmlldz8ubWFwPy5maW5kTGF5ZXJCeUlkKGlkKTtcclxuXHJcbiAgICBpZiAobGF5ZXIpIHtcclxuICAgICAgbGF5ZXIubGFiZWxzVmlzaWJsZSA9ICFsYXllci5sYWJlbHNWaXNpYmxlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFjdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYWN0aW9uLXZpcy0ke2lkfWApO1xyXG5cclxuICAgIGlmIChhY3Rpb25FbGVtZW50KSB7XHJcbiAgICAgIGFjdGlvbkVsZW1lbnQuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgIFwiaWNvblwiLFxyXG4gICAgICAgIGxheWVyLmxhYmVsc1Zpc2libGUgPyBcInZpZXctdmlzaWJsZVwiIDogXCJ2aWV3LWhpZGVcIlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyID0gKGptdjogSmltdU1hcFZpZXcpID0+IHtcclxuICAgIGlmIChqbXYpIHtcclxuICAgICAgc2V0SmltdU1hcFZpZXcoam12KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGFjaXR5ID0gKGxheWVyaWQsIHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBsYXllciA9IGppbXVNYXBWaWV3Py52aWV3Py5tYXA/LmZpbmRMYXllckJ5SWQobGF5ZXJpZCk7XHJcblxyXG4gICAgaWYgKGxheWVyKSB7XHJcbiAgICAgIGxheWVyLm9wYWNpdHkgPSB2YWx1ZTtcclxuICAgICAgbGF5ZXIucmVmcmVzaCgpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlRGVjcmVhc2VUcmFuc3BhcmVuY3kgPSAobGF5ZXJpZCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJEZWNyZWFzZSB0cmFuc3BhcmVuY3kgY2xpY2tlZFwiKTtcclxuICAgIHNldFRyYW5zcGFyZW5jeSgocHJldlRyYW5zcGFyZW5jeSkgPT4ge1xyXG4gICAgICBjb25zdCBuZXdUcmFuc3BhcmVuY3kgPSBwcmV2VHJhbnNwYXJlbmN5IC0gMC4xO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIk5ldyB0cmFuc3BhcmVuY3k6XCIsIG5ld1RyYW5zcGFyZW5jeSk7XHJcbiAgICAgIGNvbnN0IG9wYWNpdHkgPSAxIC0gbmV3VHJhbnNwYXJlbmN5OyAvLyBDYWxjdWxhdGUgb3BhY2l0eSBmcm9tIHRyYW5zcGFyZW5jeVxyXG4gICAgICBoYW5kbGVPcGFjaXR5KGxheWVyaWQsIG5ld1RyYW5zcGFyZW5jeSk7IC8vIENhbGwgaGFuZGxlT3BhY2l0eSB3aXRoIHVwZGF0ZWQgb3BhY2l0eVxyXG4gICAgICByZXR1cm4gbmV3VHJhbnNwYXJlbmN5ID49IDAgPyBuZXdUcmFuc3BhcmVuY3kgOiAwO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSW5jcmVhc2VUcmFuc3BhcmVuY3kgPSAobGF5ZXJpZCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJJbmNyZWFzZSB0cmFuc3BhcmVuY3kgY2xpY2tlZFwiKTtcclxuICAgIHNldFRyYW5zcGFyZW5jeSgocHJldlRyYW5zcGFyZW5jeSkgPT4ge1xyXG4gICAgICBjb25zdCBuZXdUcmFuc3BhcmVuY3kgPSBwcmV2VHJhbnNwYXJlbmN5ICsgMC4xO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIk5ldyB0cmFuc3BhcmVuY3k6XCIsIG5ld1RyYW5zcGFyZW5jeSk7XHJcbiAgICAgIGNvbnN0IG9wYWNpdHkgPSAxIC0gbmV3VHJhbnNwYXJlbmN5OyAvLyBDYWxjdWxhdGUgb3BhY2l0eSBmcm9tIHRyYW5zcGFyZW5jeVxyXG4gICAgICBoYW5kbGVPcGFjaXR5KGxheWVyaWQsIG5ld1RyYW5zcGFyZW5jeSk7IC8vIENhbGwgaGFuZGxlT3BhY2l0eSB3aXRoIHVwZGF0ZWQgb3BhY2l0eVxyXG4gICAgICByZXR1cm4gbmV3VHJhbnNwYXJlbmN5IDw9IDEgPyBuZXdUcmFuc3BhcmVuY3kgOiAxO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVjcmVhc2Vab29tID0gKCkgPT4ge1xyXG4gICAgc2V0Wm9vbSgocHJldlpvb20pID0+IHtcclxuICAgICAgY29uc3QgbmV3Wm9vbSA9IHByZXZab29tIC0gMTtcclxuICAgICAgaWYgKGppbXVNYXBWaWV3ICYmIGppbXVNYXBWaWV3LnZpZXcpIHtcclxuICAgICAgICBqaW11TWFwVmlldy52aWV3Lnpvb20gPSBuZXdab29tO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBuZXdab29tO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSW5jcmVhc2Vab29tID0gKCkgPT4ge1xyXG4gICAgc2V0Wm9vbSgocHJldlpvb20pID0+IHtcclxuICAgICAgY29uc3QgbmV3Wm9vbSA9IHByZXZab29tICsgMTtcclxuICAgICAgaWYgKGppbXVNYXBWaWV3ICYmIGppbXVNYXBWaWV3LnZpZXcpIHtcclxuICAgICAgICBqaW11TWFwVmlldy52aWV3Lnpvb20gPSBuZXdab29tO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBuZXdab29tO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgbGV0IGdyb3VwSWRDb3VudGVyID0gMDtcclxuXHJcbiAgY29uc3QgcHJvY2Vzc0xheWVycyA9IChsYXllcnM6IGFueVtdLCBncm91cElkOiBudW1iZXIgfCBzdHJpbmcgPSBcIlwiLCBzdWJHcm91cElkOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IGxheWVyTGlzdEl0ZW1zOiBKU1guRWxlbWVudFtdID0gW107XHJcbiAgICBsZXQgU3ViID0gc3ViR3JvdXBJZDtcclxuXHJcbiAgICBsZXQgZ3JvdXBUaXRsZXMgPSBbXTtcclxuICAgIGxldCBzdWJHcm91cFRpdGxlcyA9IFtdO1xyXG4gICAgY29uc3QgbGF5ZXJzMiA9IGppbXVNYXBWaWV3LnZpZXcubWFwLmxheWVycy5pdGVtcztcclxuICAgIGNvbnNvbGUubG9nKGxheWVycylcclxuXHJcbiAgICBsYXllcnMyLmZvckVhY2goKGxheWVyRykgPT4gZ3JvdXBUaXRsZXMucHVzaChsYXllckcudGl0bGUpKVxyXG4gICAgY29uc29sZS5sb2coZ3JvdXBUaXRsZXMpXHJcbiAgICAvLyBzZXRHcm91cFRpdGxlcyhncm91cFRpdGxlcylcclxuXHJcbiAgICBsYXllcnMuZm9yRWFjaCgobGF5ZXIsIGkpID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudEdyb3VwSWQgPSBncm91cElkICE9PSBcIlwiID8gZ3JvdXBJZCA6IGdyb3VwSWRDb3VudGVyKys7XHJcbiAgICAgIGlmIChsYXllci50eXBlID09PSBcImdyb3VwXCIpIHtcclxuICAgICAgXHJcbiAgICAgICAgY29uc3QgZ3JvdXBUaXRsZSA9IGxheWVyLnRpdGxlIHx8IFwiR3JvdXBcIjtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoIWdyb3VwVGl0bGVzLmluY2x1ZGVzKGxheWVyLnRpdGxlKSkge1xyXG4gICAgICAgICAgbGV0IHN1Ykdyb3VwSWQgPSBgc3ViLSR7Y3VycmVudEdyb3VwSWR9YFxyXG4gICAgICAgICAgY29uc29sZS5sb2cobGF5ZXIudGl0bGUpXHJcbiAgICAgICAgICBzdWJHcm91cFRpdGxlcy5wdXNoKGxheWVyLnRpdGxlKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coc3ViR3JvdXBUaXRsZXMpXHJcblxyXG4gICAgICAgICAgbGF5ZXJMaXN0SXRlbXMucHVzaChcclxuICAgICAgICAgICAgPENhbGNpdGVBY2NvcmRpb25JdGVtXHJcbiAgICAgICAgICAgICAgZGF0YS1pZD17Y3VycmVudEdyb3VwSWR9XHJcbiAgICAgICAgICAgICAgc3ViLWlkPXtgc3ViLSR7Y3VycmVudEdyb3VwSWR9YH1cclxuICAgICAgICAgICAgICBrZXk9e2xheWVyLmlkfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFjY29yZGlvbi1pdGVtIHN1Yi1ncm91cC0ke2N1cnJlbnRHcm91cElkfWB9XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2BzdWItJHtncm91cFRpdGxlfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Q2FsY2l0ZUFjdGlvblxyXG4gICAgICAgICAgICAgICAgZGF0YS1pZD17YHN1Yi0ke2N1cnJlbnRHcm91cElkfWB9XHJcbiAgICAgICAgICAgICAgICBpZD17YGFjdGlvbi0ke2xheWVyLmlkfWB9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BzdWItZ3JvdXAtJHtjdXJyZW50R3JvdXBJZH1gfVxyXG4gICAgICAgICAgICAgICAgZGF0YS1sYXllci1pZD17bGF5ZXIuaWR9XHJcbiAgICAgICAgICAgICAgICBncm91cC1pZD17YHN1Yi0ke2N1cnJlbnRHcm91cElkfWB9XHJcbiAgICAgICAgICAgICAgICBzbG90PVwiYWN0aW9ucy1lbmRcIlxyXG4gICAgICAgICAgICAgICAgaWNvbj1cInNxdWFyZVwiXHJcbiAgICAgICAgICAgICAgICB0ZXh0PXtsYXllci50aXRsZX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVN1Ykdyb3VwSWNvblZpc2libGUoc3ViR3JvdXBJZCwgbGF5ZXIuaWQpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgXHJcbiAgICAgICAgICAgICAgPGRpdj57cHJvY2Vzc0xheWVycyhsYXllci5sYXllcnMuaXRlbXMsIHN1Ykdyb3VwSWQpfTwvZGl2PlxyXG4gICAgICAgICAgICA8L0NhbGNpdGVBY2NvcmRpb25JdGVtPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIC8vIGZpZ3VyZSBvdXQgdGhpcyBsb2dpYyB0byBhZGQgYW5vdGhlciBzdWItZ3JvdXBcclxuICAgICAgICB9IGVsc2Ugey8vIERlZmF1bHQgdGl0bGUgb3IgbGF5ZXIgdGl0bGVcclxuXHJcbiAgICAgICAgbGF5ZXJMaXN0SXRlbXMucHVzaChcclxuICAgICAgICAgIDxDYWxjaXRlQWNjb3JkaW9uSXRlbVxyXG4gICAgICAgICAgICBkYXRhLWlkPXtjdXJyZW50R3JvdXBJZH1cclxuICAgICAgICAgICAga2V5PXtsYXllci5pZH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWl0ZW1cIlxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17Z3JvdXBUaXRsZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPENhbGNpdGVBY3Rpb25cclxuICAgICAgICAgICAgICBkYXRhLWlkPXtjdXJyZW50R3JvdXBJZH1cclxuICAgICAgICAgICAgICBpZD17YGFjdGlvbi0ke2xheWVyLmlkfWB9XHJcbiAgICAgICAgICAgICAgLy9zdWItaWQ9e3N1Ykdyb3VwSWQgPyBgc3ViLWdyb3VwLSR7Y3VycmVudEdyb3VwSWR9YCA6IGBncm91cC0ke2N1cnJlbnRHcm91cElkfWB9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3JvdXAtJHtjdXJyZW50R3JvdXBJZH1gfVxyXG4gICAgICAgICAgICAgIHNsb3Q9XCJhY3Rpb25zLWVuZFwiXHJcbiAgICAgICAgICAgICAgaWNvbj1cInNxdWFyZVwiXHJcbiAgICAgICAgICAgICAgdGV4dD17bGF5ZXIudGl0bGV9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlR3JvdXBJY29uVmlzaWJsZShjdXJyZW50R3JvdXBJZCwgbGF5ZXIuaWQpfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdj57cHJvY2Vzc0xheWVycyhsYXllci5sYXllcnMuaXRlbXMsIGN1cnJlbnRHcm91cElkKX08L2Rpdj5cclxuICAgICAgICAgIDwvQ2FsY2l0ZUFjY29yZGlvbkl0ZW0+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBBZGQgQ2FsY2l0ZVBpY2tMaXN0SXRlbSB3aXRoIENhbGNpdGVBY3Rpb24gZm9yIGluZGl2aWR1YWwgbGF5ZXJzXHJcbiAgICAgICAgbGF5ZXJMaXN0SXRlbXMucHVzaChcclxuICAgICAgICAgIDxDYWxjaXRlUGlja0xpc3RJdGVtXHJcbiAgICAgICAgICAgIGtleT17bGF5ZXIuaWR9XHJcbiAgICAgICAgICAgIGxhYmVsPXtsYXllci50aXRsZX1cclxuICAgICAgICAgICAgdmFsdWU9e2xheWVyLmlkfVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17bGF5ZXIudHlwZX1cclxuICAgICAgICAgICAgZGF0YS1pZD17Z3JvdXBJZH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPENhbGNpdGVBY3Rpb25cclxuICAgICAgICAgICAgICBpZD17YGFjdGlvbi0ke2xheWVyLmlkfWB9XHJcbiAgICAgICAgICAgICAgc2xvdD1cImFjdGlvbnMtZW5kXCJcclxuICAgICAgICAgICAgICBkYXRhLWlkPXtgJHtjdXJyZW50R3JvdXBJZH1gfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17U3ViID8gYHN1Yi1ncm91cC0ke2N1cnJlbnRHcm91cElkfWAgOiBgZ3JvdXAtJHtjdXJyZW50R3JvdXBJZH1gfVxyXG4gICAgICAgICAgICAgIGljb249e2xheWVyLnZpc2libGUgPyBcImNoZWNrLXNxdWFyZVwiIDogXCJzcXVhcmVcIn1cclxuICAgICAgICAgICAgICB0ZXh0PXtsYXllci50aXRsZX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVMYXllclZpc2liaWxpdHkobGF5ZXIuaWQsIGdyb3VwSWQpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q2FsY2l0ZURyb3Bkb3duXHJcbiAgICAgICAgICAgICAgc2xvdD1cImFjdGlvbnMtZW5kXCJcclxuICAgICAgICAgICAgICB3aWR0aC1zY2FsZT1cImxcIlxyXG4gICAgICAgICAgICAgIGNsb3NlT25TZWxlY3REaXNhYmxlZD1cInRydWVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPENhbGNpdGVBY3Rpb25cclxuICAgICAgICAgICAgICAgIGlkPXtgYWN0aW9uLSR7bGF5ZXIuaWR9YH1cclxuICAgICAgICAgICAgICAgIGljb249XCJlbGxpcHNpc1wiXHJcbiAgICAgICAgICAgICAgICBzbG90PVwidHJpZ2dlclwiXHJcbiAgICAgICAgICAgICAgICB0ZXh0PXtsYXllci50aXRsZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxDYWxjaXRlRHJvcGRvd25Hcm91cD5cclxuICAgICAgICAgICAgICAgIDxDYWxjaXRlRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICAgICAgICBUcmFuc3BhcmVuY3lcclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyYW5zcGFyZW5jeS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17dHJhbnNwYXJlbmN5Q29udHJvbFN0eWxlc31cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtidXR0b25TdHlsZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWNyZWFzZVRyYW5zcGFyZW5jeShsYXllci5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiZGVmYXVsdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj0nPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0zIDEySDIxVjEzSDNWMTJaXCIgZmlsbD1cIiM2QTZBNkFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtidXR0b25TdHlsZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVJbmNyZWFzZVRyYW5zcGFyZW5jeShsYXllci5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj0nPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk02IDEySDEyVjZIMTNWMTJIMTlWMTNIMTNWMTlIMTJWMTNINlYxMlpcIiBmaWxsPVwiIzZBNkE2QVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NhbGNpdGVEcm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8Q2FsY2l0ZURyb3Bkb3duSXRlbSBsYWJlbD17XCJUb2dnbGUgTGFiZWxzXCJ9PlxyXG4gICAgICAgICAgICAgICAgICBUb2dnbGUgTGFiZWxzXHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmFuc3BhcmVuY3ktY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3RyYW5zcGFyZW5jeUNvbnRyb2xTdHlsZXMyfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhbGNpdGVBY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPXtgYWN0aW9uLXZpcy0ke2xheWVyLmlkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzbG90PVwiYWN0aW9ucy1lbmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj17bGF5ZXIubGFiZWxzVmlzaWJsZSA/IFwidmlldy12aXNpYmxlXCIgOiBcInZpZXctaGlkZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dD17bGF5ZXIudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzY2FsZT1cInNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGFiZWxzLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVMYWJlbHNDbGljayhsYXllci5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NhbGNpdGVEcm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8Q2FsY2l0ZURyb3Bkb3duSXRlbVxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD17XCJMYXllciBEZXRhaWxzXCJ9XHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2xheWVyLnVybH1cclxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PXtcIl9ibGFua1wifVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBMYXllciBEZXRhaWxzXHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmFuc3BhcmVuY3ktY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3RyYW5zcGFyZW5jeUNvbnRyb2xTdHlsZXN9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17YnV0dG9uU3R5bGVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17bGF5ZXIudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRlcnRpYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD17XCJfYmxhbmtcIn1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPSc8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTYuOTk5OTEgMTRDNi45OTk5MSAxNC4wMjUgNy4wMDI5MSAxNC4wNSA3LjAwMzkxIDE0LjA3NUwzLjQ2MzkxIDEwLjUzNUMxLjUyNjE0IDguNTc5NjcgMS41MzM0OSA1LjQyNTc3IDMuNDgwMzUgMy40Nzk0N0M1LjQyNzIgMS41MzMxNiA4LjU4MTEgMS41MjY3MSAxMC41MzU5IDMuNDY1MDNMMTQuNTM1OSA3LjQ2NTAyQzE1LjczMSA4LjY1NjQzIDE2LjI0MzIgMTAuMzcwOSAxNS44OTc2IDEyLjAyMjdDMTUuNTUyIDEzLjY3NDQgMTQuMzk1NCAxNS4wMzk3IDEyLjgyMjkgMTUuNjUyTDEyLjU4NTkgMTUuNDE1QzEyLjQxMTcgMTUuMjM5MyAxMi4yNzE3IDE1LjAzMjggMTIuMTcyOSAxNC44MDZDMTMuNTEzNyAxNC4zOTg5IDE0LjU0MjIgMTMuMzE3NSAxNC44ODE2IDExLjk1NzlDMTUuMjIwOSAxMC41OTgzIDE0LjgyMTIgOS4xNjA0NSAxMy44Mjg5IDguMTcxMDNMOS44Mjg5MSA0LjE3MTAzQzguMzcyODMgMi43MTU1OSA2LjA0OTgxIDIuNjAzMSA0LjQ1OTkxIDMuOTExMDNMNC4xNDE5MSAzLjUyNDAzTDQuNDU5OTEgMy45MTAwM0MzLjU4NzM5IDQuNjI2NDIgMy4wNTgyMyA1LjY3ODE3IDMuMDAzIDYuODA1NzZDMi45NDc3NiA3LjkzMzM1IDMuMzcxNTkgOS4wMzE3OCA0LjE2OTkxIDkuODMwMDNMNy4xMDk5MSAxMi43N0M3LjAzNzE0IDEzLjE3NiA3LjAwMDMzIDEzLjU4NzYgNi45OTk5MSAxNFpNMjIuOTk5OSAxOEMyMy4wMDM1IDE2LjY3MzIgMjIuNDc2MyAxNS40IDIxLjUzNTkgMTQuNDY0TDE3Ljk5NTkgMTAuOTI1QzE3Ljk5NTkgMTAuOTUgMTcuOTk5OSAxMC45NzUgMTcuOTk5OSAxMUMxNy45OTgxIDExLjQxMjUgMTcuOTYwMyAxMS44MjQxIDE3Ljg4NjkgMTIuMjNMMjAuODI4OSAxNS4xNzFDMjEuNjAxIDE1Ljk0MjkgMjIuMDI0IDE2Ljk5NjkgMjEuOTk5OSAxOC4wODg0QzIxLjk3NTcgMTkuMTc5OSAyMS41MDY0IDIwLjIxNDEgMjAuNzAwOSAyMC45NTFDMTkuMTIxOSAyMi4zOTY4IDE2LjY4NDYgMjIuMzQzIDE1LjE3MDkgMjAuODI5TDExLjE3MDkgMTYuODI5QzEwLjE2OTQgMTUuODQzOSA5Ljc2MzggMTQuNDAyNSAxMC4xMDQ2IDEzLjAzOTZDMTAuNDQ1MyAxMS42NzY4IDExLjQ4MTYgMTAuNTk1OSAxMi44Mjg5IDEwLjE5OEMxMi43MyA5Ljk2OTYzIDEyLjU4OTIgOS43NjE3MiAxMi40MTM5IDkuNTg1MDNMMTIuMTc5OSA5LjM1MTAzQzExLjQ1MDEgOS42MzQxNyAxMC43OTcgMTAuMDg0NiAxMC4yNzI5IDEwLjY2NkM4LjUwMzIzIDEyLjY0MzggOC41ODcwOCAxNS42NTk2IDEwLjQ2MzkgMTcuNTM2TDE0LjQ2MzkgMjEuNTM2QzE1Ljg5MzkgMjIuOTY2NCAxOC4wNDQ4IDIzLjM5NDQgMTkuOTEzNSAyMi42MjAzQzIxLjc4MjEgMjEuODQ2MiAyMy4wMDAzIDIwLjAyMjYgMjIuOTk5OSAxOFpcIiBmaWxsPVwiIzZBNkE2QVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ2FsY2l0ZURyb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICA8L0NhbGNpdGVEcm9wZG93bkdyb3VwPlxyXG4gICAgICAgICAgICA8L0NhbGNpdGVEcm9wZG93bj5cclxuICAgICAgICAgIDwvQ2FsY2l0ZVBpY2tMaXN0SXRlbT5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gbGF5ZXJMaXN0SXRlbXM7XHJcbiAgfTtcclxuXHJcbiAgLy8gRnVuY3Rpb24gdG8gdG9nZ2xlIGxheWVyIHZpc2liaWxpdHkgYW5kIGNoYW5nZXMgaWNvblxyXG4gIC8vIGFkZCBsb2dpYyB0byBjaGVjayBncm91cCBpY29uXHJcbiAgY29uc3QgdG9nZ2xlTGF5ZXJWaXNpYmlsaXR5ID0gKGxheWVySWQ6IGFueSwgSWQ6IGFueSwgdG9nZ2xlVmFsOiBhbnkpID0+IHtcclxuICAgIC8vIEZpbmQgdGhlIGxheWVyIGluIHRoZSB3ZWJtYXBcclxuICAgIGNvbnN0IGxheWVyID0gamltdU1hcFZpZXc/LnZpZXc/Lm1hcD8uZmluZExheWVyQnlJZChsYXllcklkKTtcclxuICAgIGNvbnN0IHN1YklkID0gYHN1Yi0ke0lkfWA7XHJcblxyXG5cclxuICAgIGlmIChsYXllcikge1xyXG4gICAgICAvLyBUb2dnbGUgdGhlIGxheWVyJ3MgdmlzaWJpbGl0eVxyXG4gICAgICBsYXllci52aXNpYmxlID0gIWxheWVyLnZpc2libGU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxheWVyKSB7XHJcbiAgICAgIC8vIFVwZGF0ZSB0aGUgYWN0aW9uIGljb24gYmFzZWQgb24gdGhlIG5ldyB2aXNpYmlsaXR5IHN0YXRlXHJcbiAgICAgIGNvbnN0IGFjdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYWN0aW9uLSR7bGF5ZXJJZH1gKTtcclxuICAgICAgLy8gY29uc3QgZ3JvdXBMYXllcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgW2RhdGEtaWQ9XCIke0lkfVwiXWApO1xyXG4gICAgICAvLyBjb25zdCBncm91cEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZ3JvdXAtJHtJZH1gKTtcclxuXHJcbiAgICAgIGlmIChhY3Rpb25FbGVtZW50KSB7XHJcbiAgICAgICAgYWN0aW9uRWxlbWVudC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICBcImljb25cIixcclxuICAgICAgICAgIGxheWVyLnZpc2libGUgPyBcImNoZWNrLXNxdWFyZVwiIDogXCJzcXVhcmVcIlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB0b2dnbGVTdWJHcm91cEljb24obGF5ZXJJZCwgSWQsIHRvZ2dsZVZhbClcclxuXHJcbiAgICBpZiAoc3ViSWQpIHtcclxuICAgICAgaWYgKHN1YklkLmluY2x1ZGVzKFwic3ViXCIpKSB7XHJcbiAgICAgICAgdG9nZ2xlU3ViR3JvdXBJY29uKElkLCBsYXllcklkLCB0b2dnbGVWYWwpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgXHJcbiAgICB0b2dnbGVHcm91cEljb24obGF5ZXJJZCwgSWQsIHRvZ2dsZVZhbClcclxuICAgIC8vIHNldCBpY29uIG9mIGdyb3VwXHJcbiAgICAgIC8vIGlmIChncm91cEljb24pIHtcclxuICAgICAgLy8gICBncm91cEljb24uc2V0QXR0cmlidXRlKFxyXG4gICAgICAvLyAgICAgXCJpY29uXCIsXHJcbiAgICAgIC8vICAgICBsYXllci52aXNpYmxlID8gXCJjaGVjay1zcXVhcmVcIiA6IFwic3F1YXJlXCJcclxuICAgICAgLy8gICApO1xyXG4gICAgICAvLyB9XHJcblxyXG4gICAgICAvLyBpZiAoZ3JvdXBMYXllcnMpIHtcclxuICAgICAgLy8gICBncm91cExheWVycy5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgIC8vICAgICBcImljb25cIixcclxuICAgICAgLy8gICAgIGxheWVyLnZpc2libGUgPyBcImNoZWNrLXNxdWFyZVwiIDogXCJzcXVhcmVcIlxyXG4gICAgICAvLyAgICk7XHJcbiAgICAgIC8vIH1cclxuICAgIC8vIH0gZWxzZSB7XHJcbiAgICAvLyAgIC8vY2hhbmdlIGljb24gb2YgYWNjb3JkaW9uIGl0ZW1zXHJcbiAgICAvLyAgIC8vIGNvbnN0IGFjY29yZGlvbkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZ3JvdXAtJHtJZH1gKTtcclxuICAgIC8vICAgLy8gaWYgKGFjY29yZGlvbkl0ZW0pIHtcclxuICAgIC8vICAgLy8gICBhY2NvcmRpb25JdGVtLnNldEF0dHJpYnV0ZShcImljb25cIiwgSWQgPyBcImNoZWNrLXNxdWFyZVwiIDogXCJzcXVhcmVcIik7XHJcbiAgICAvLyAgIC8vIH1cclxuICAgIC8vIH1cclxuICAgIFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoZWNrR3JvdXBDbGljayA9IChsYXllcklkLCBJZCwgdG9nZ2xlVmFsKSA9PiB7XHJcbiAgICBpZih0b2dnbGVWYWwpIHtcclxuICAgICAgY29uc3QgZ3JvdXBJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmdyb3VwLSR7SWR9YCk7XHJcbiAgICAgIC8vIHNldCBpY29ucyBvbiBncm91cFxyXG4gICAgICBpZiAoZ3JvdXBJY29uKSB7XHJcbiAgICAgICAgZ3JvdXBJY29uLnNldEF0dHJpYnV0ZShcImljb25cIiwgXCJjaGVjay1zcXVhcmVcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGdyb3VwTGF5ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtaWQ9XCIke0lkfVwiXWApO1xyXG5cclxuICAgICAgZ3JvdXBMYXllcnMuZm9yRWFjaCgobGF5ZXIpID0+IHtcclxuICAgICAgICBjb25zdCBsYXllcklkID0gbGF5ZXIuZ2V0QXR0cmlidXRlKFwidmFsdWVcIik7XHJcblxyXG4gICAgICBjb25zdCBsYXllclYgPSBqaW11TWFwVmlldz8udmlldz8ubWFwPy5maW5kTGF5ZXJCeUlkKGxheWVySWQpO1xyXG5cclxuICAgICAgICBpZiAobGF5ZXJWKSB7XHJcbiAgICAgICAgICBsYXllclYudmlzaWJsZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgY29uc3QgYWN0aW9uRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBhY3Rpb24tJHtsYXllcklkfWApO1xyXG4gICAgXHJcbiAgICAgICAgICBpZiAoYWN0aW9uRWxlbWVudCkge1xyXG4gICAgICAgICAgICBhY3Rpb25FbGVtZW50LnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICBcImljb25cIiwgXCJjaGVjay1zcXVhcmVcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgfSBlbHNlIGlmKHRvZ2dsZVZhbCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICBjb25zdCBncm91cEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZ3JvdXAtJHtJZH1gKTtcclxuICAgICAgLy8gc2V0IGljb25zIG9uIGdyb3VwXHJcbiAgICAgIGlmIChncm91cEljb24pIHtcclxuICAgICAgICBncm91cEljb24uc2V0QXR0cmlidXRlKFwiaWNvblwiLCBcInNxdWFyZVwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgbGF5ZXJWID0gamltdU1hcFZpZXc/LnZpZXc/Lm1hcD8uZmluZExheWVyQnlJZChsYXllcklkKTtcclxuICAgICAgaWYgKGxheWVyVikge1xyXG4gICAgICAgIGxheWVyVi52aXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnN0IGFjdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYWN0aW9uLSR7bGF5ZXJJZH1gKTtcclxuICBcclxuICAgICAgICBpZiAoYWN0aW9uRWxlbWVudCkge1xyXG4gICAgICAgICAgYWN0aW9uRWxlbWVudC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgIFwiaWNvblwiLCBcInNxdWFyZVwiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4gIC8vIGZ1bmN0aW9uIGp1c3QgdG8gdG9nZ2xlIGdyb3VwIGljb25cclxuICBjb25zdCB0b2dnbGVHcm91cEljb24gPSAobGF5ZXJJZCwgSWQsIHRvZ2dsZVZhbCkgPT4ge1xyXG4gIFxyXG4gICAgLy9jaGVja3MgZ3JvdXAgaWNvbiBhbmQgaWYgYWxsIGxheWVycyBhcmUgdmlzaWJsZSBvciBub3RcclxuICAgIGNvbnN0IGFsbEdyb3VwTGF5ZXJzID0gW107XHJcbiAgICBjb25zdCBncm91cExheWVyc1ZpcyA9IFtdO1xyXG4gICAgY29uc3QgZ3JvdXBMYXllckhpZCA9IFtdO1xyXG5cclxuICAgIGNvbnN0IGdyb3VwTGF5ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtaWQ9XCIke0lkfVwiXWApO1xyXG4gICAgY29uc3Qgc3ViR3JvdXBMYXllcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1pZD1cInN1Yi0ke0lkfVwiXWApO1xyXG5cclxuICAgIGNvbnN0IGFsbExheWVycyA9IFsuLi5ncm91cExheWVycywgLi4uc3ViR3JvdXBMYXllcnNdXHJcbiAgICBjb25zb2xlLmxvZyhhbGxMYXllcnMpXHJcblxyXG4gICAgYWxsTGF5ZXJzLmZvckVhY2goKGxheWVyKSA9PiB7XHJcbiAgICAgIGNvbnN0IGxheWVySWQgPSBsYXllci5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKTtcclxuICAgICAgY29uc3QgbGF5ZXJWID0gamltdU1hcFZpZXc/LnZpZXc/Lm1hcD8uZmluZExheWVyQnlJZChsYXllcklkKTtcclxuXHJcbiAgICAgIGlmIChsYXllclYpIHtcclxuICAgICAgICBpZiAobGF5ZXJWLnZpc2libGUpIHtcclxuICAgICAgICAgIGdyb3VwTGF5ZXJzVmlzLnB1c2gobGF5ZXJJZClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZ3JvdXBMYXllckhpZC5wdXNoKGxheWVySWQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsYXllclYpIHtcclxuICAgICAgICAgIGFsbEdyb3VwTGF5ZXJzLnB1c2gobGF5ZXJJZClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGFkZCBsb2dpYyBmb3Igc3ViZ3JvdXAgY29sdW1ucyBoZXJlP1xyXG5cclxuICAgIGlmIChncm91cExheWVyc1Zpcy5sZW5ndGggIT09IGFsbEdyb3VwTGF5ZXJzLmxlbmd0aCkge1xyXG4gICAgICBjb25zdCBncm91cEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZ3JvdXAtJHtJZH1gKTtcclxuICAgICAgLy8gc2V0IGljb25zIG9uIGdyb3VwXHJcbiAgICAgIGlmIChncm91cEljb24pIHtcclxuICAgICAgICBncm91cEljb24uc2V0QXR0cmlidXRlKFwiaWNvblwiLCBcInNxdWFyZVwiKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZ3JvdXBJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmdyb3VwLSR7SWR9YCk7XHJcbiAgICAgIC8vIHNldCBpY29ucyBvbiBncm91cFxyXG4gICAgICBpZiAoZ3JvdXBJY29uKSB7XHJcbiAgICAgICAgZ3JvdXBJY29uLnNldEF0dHJpYnV0ZShcImljb25cIiwgXCJjaGVjay1zcXVhcmVcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAvL31cclxuICB9XHJcblxyXG4gIGNvbnN0IHRvZ2dsZUFsbExheWVyVmlzaWJpbGl0eSA9IChncm91cElkLCBpZCwgdG9nZ2xlVmFsLCBzdWJJZCkgPT4ge1xyXG4gICAgbGV0IHRvZ1ZhbCA9IHRvZ2dsZVZhbDtcclxuICAgIGxldCBsYXllcklEO1xyXG5cclxuXHJcbiAgICBjb25zdCBhY3Rpb25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmdyb3VwLSR7Z3JvdXBJZH1gKTtcclxuICAgIGlmIChhY3Rpb25FbGVtZW50KSB7XHJcbiAgICAgIGFjdGlvbkVsZW1lbnQuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgIFwiaWNvblwiLFxyXG4gICAgICAgIGdyb3VwSWNvblZpc2libGUgPyBcImNoZWNrLXNxdWFyZVwiIDogXCJzcXVhcmVcIlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZ3JvdXBMYXllcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1pZD1cIiR7Z3JvdXBJZH1cIl1gKTtcclxuXHJcbiAgICBncm91cExheWVycy5mb3JFYWNoKChsYXllcikgPT4ge1xyXG4gICAgICBjb25zdCBsYXllcklkID0gbGF5ZXIuZ2V0QXR0cmlidXRlKFwidmFsdWVcIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKGxheWVyKVxyXG4gICAgICBsYXllcklEID0gbGF5ZXJJZFxyXG4gICAgICBjb25zb2xlLmxvZyhsYXllcklkKVxyXG4gICAgICB0b2dnbGVMYXllclZpc2liaWxpdHkobGF5ZXJJZCwgZ3JvdXBJZCwgdG9nVmFsKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGdldHMgc3VibGF5ZXIgZ3JvdXAgbWFpbiBvbmVcclxuXHJcbiAgICAvLyBjb25zdCBzdWJHcm91cExheWVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLWlkPVwic3ViLSR7Z3JvdXBJZH1cIl1gKTtcclxuICAgIC8vIGxldCBlbGVtZW50SUQ7XHJcblxyXG4gICAgLy8gc3ViR3JvdXBMYXllcnMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgIC8vICAgaWYgKGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWxheWVyLWlkJykgIT09IG51bGwpIHtcclxuICAgIC8vICAgICBlbGVtZW50SUQgPSBpdGVtO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9KVxyXG5cclxuICAgIC8vIGNvbnN0IFN1Ykdyb3VwSWQgPSBlbGVtZW50SUQuZ2V0QXR0cmlidXRlKFwiZGF0YS1sYXllci1pZFwiKVxyXG4gICAgLy8gY29uc29sZS5sb2coZWxlbWVudElEKVxyXG4gICAgLy8gY29uc3QgbGF5ZXJzID0gamltdU1hcFZpZXcudmlldy5tYXAubGF5ZXJzLml0ZW1zO1xyXG5cclxuXHJcbiAgLy8gIGNvbnN0IHN1Ykdyb3VwID0gIGxheWVycy5maWx0ZXIobGF5ZXIgPT4gbGF5ZXIudHlwZSA9PSBcImdyb3VwXCIpXHJcblxyXG4gIC8vICBjb25zb2xlLmxvZyhzdWJHcm91cClcclxuLy8gVEhJTksgQUJPVVQgR0VUVElORyBTVUJHUk9VUElDT04gSEVSRVxyXG4gICAgLy9oYW5kbGVTdWJHcm91cEljb25WaXNpYmxlKFN1Ykdyb3VwSWQsIGdyb3VwSWQpXHJcbiAgICB0b2dnbGVHcm91cEljb24obGF5ZXJJRCwgZ3JvdXBJZCwgdG9nZ2xlVmFsKVxyXG4gICAgY2hlY2tHcm91cENsaWNrKGxheWVySUQsIGdyb3VwSWQsIHRvZ2dsZVZhbClcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGppbXVNYXBWaWV3KSB7XHJcbiAgICAgIGxldCBncm91cFRpdGxlcyA9IFtdO1xyXG4gICAgICBjb25zdCBsYXllcnMgPSBqaW11TWFwVmlldy52aWV3Lm1hcC5sYXllcnMuaXRlbXM7XHJcbiAgICAgIGNvbnNvbGUubG9nKGxheWVycylcclxuICAgICAgbGF5ZXJzLmZvckVhY2goKGxheWVyRykgPT4gZ3JvdXBUaXRsZXMucHVzaChsYXllckcudGl0bGUpKVxyXG4gICAgICBjb25zb2xlLmxvZyhncm91cFRpdGxlcylcclxuICAgICAgc2V0R3JvdXBUaXRsZXMoZ3JvdXBUaXRsZXMpXHJcbiAgICAgXHJcbiAgICAgIGNvbnN0IHByb2Nlc3NlZExheWVyTGlzdCA9IHByb2Nlc3NMYXllcnMobGF5ZXJzKTtcclxuICAgICAgc2V0Wm9vbShqaW11TWFwVmlldy52aWV3Lnpvb20pIC8vIFByb2Nlc3MgbGF5ZXJzXHJcbiAgICAgIHNldExheWVyTGlzdChwcm9jZXNzZWRMYXllckxpc3QpOyAvLyBVcGRhdGUgbGF5ZXIgbGlzdCBzdGF0ZVxyXG4gICAgfVxyXG4gIH0sIFtqaW11TWFwVmlld10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtc3RhcnRlciBqaW11LXdpZGdldFwiIHN0eWxlPXt7IG92ZXJmbG93WDogXCJoaWRkZW5cIiB9fT5cclxuICAgICAgPGNhbGNpdGUtcGFuZWw+XHJcbiAgICAgICAgPENhbGNpdGVBY2NvcmRpb24gaWNvbi1wb3NpdGlvbj1cInN0YXJ0XCIgaWNvbi10eXBlPVwiY2FyZXRcIiBzY2FsZT1cIm1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBpZD1cImxheWVybGlzdC1oZWFkZXItY29udGFpbmVyXCIgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWhlYWRlclwiIHN0eWxlPXt7aGVpZ2h0OiBcIjUwcHhcIn19PlxyXG4gICAgICAgICAgPGg1PkxheWVyIExpc3Q8L2g1PlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnYXV0bycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2J1dHRvblN0eWxlc31cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlY3JlYXNlWm9vbSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGVjcmVhc2UtQnRuXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPSc8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTMgMTJIMjFWMTNIM1YxMlpcIiBmaWxsPVwiIzZBNkE2QVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17YnV0dG9uU3R5bGVzMn1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUluY3JlYXNlWm9vbSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaW5jcmVhc2UtQnRuXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPSc8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTYgMTJIMTJWNkgxM1YxMkgxOVYxM0gxM1YxOUgxMlYxM0g2VjEyWlwiIGZpbGw9XCIjNkE2QTZBXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7cHJvcHMudXNlTWFwV2lkZ2V0SWRzICYmIHByb3BzLnVzZU1hcFdpZGdldElkcy5sZW5ndGggPT09IDEgJiYgKFxyXG4gICAgICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcclxuICAgICAgICAgICAgICB1c2VNYXBXaWRnZXRJZD17cHJvcHMudXNlTWFwV2lkZ2V0SWRzWzBdfVxyXG4gICAgICAgICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17YWN0aXZlVmlld0NoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPGRpdj57bGF5ZXJMaXN0fTwvZGl2PlxyXG4gICAgICAgIDwvQ2FsY2l0ZUFjY29yZGlvbj5cclxuICAgICAgPC9jYWxjaXRlLXBhbmVsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9