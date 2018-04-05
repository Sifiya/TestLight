/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/app.js":
/*!*************************!*\
  !*** ./frontend/app.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./css */ "./frontend/css/index.js");

/***/ }),

/***/ "./frontend/css/index.js":
/*!*******************************!*\
  !*** ./frontend/css/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./styles.less */ "./frontend/css/styles.less");

/***/ }),

/***/ "./frontend/css/styles.less":
/*!**********************************!*\
  !*** ./frontend/css/styles.less ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader?url=false!../../node_modules/less-loader/dist/cjs.js!./styles.less */ "./node_modules/css-loader/index.js?url=false!./node_modules/less-loader/dist/cjs.js!./frontend/css/styles.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/css-loader/index.js?url=false!./node_modules/less-loader/dist/cjs.js!./frontend/css/styles.less":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader?url=false!./node_modules/less-loader/dist/cjs.js!./frontend/css/styles.less ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  font-family: 'Arial', sans-serif;\n  margin: 0;\n  padding: 0;\n}\nh1,\nh2 {\n  text-transform: uppercase;\n  margin: 0;\n}\nul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.layout-positioner {\n  width: 1391px;\n  position: relative;\n  margin: 0 auto;\n}\n.page-header {\n  background-color: #24282f;\n  padding: 0;\n  margin: 0;\n  min-height: 102px;\n}\n.page-header_logo_link {\n  text-decoration: none;\n  color: #ffffff;\n}\n.page-header_logo_text {\n  margin: 39px 0;\n  line-height: 22px;\n  display: inline-block;\n}\n.page-header_logo_img {\n  width: 25px;\n  height: 23px;\n  margin-left: 8px;\n  margin-right: 31px;\n}\n.page-header_menu {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.page-header_menu_item {\n  display: inline-block;\n  margin-left: 43px;\n  font-family: 'Open Sans', 'Arial', sans-serif;\n  padding: 39px 0 38px;\n}\n.page-header_menu_item_link {\n  text-decoration: none;\n  color: #ffffff;\n  text-transform: uppercase;\n  padding: 0 13px;\n}\n.page-header_menu_item.active {\n  border-bottom: 2px solid #b5a263;\n}\n.page-main_header {\n  margin: 0;\n  min-height: 283px;\n  background: #24282f url('img/page-main-header-bg_v2.jpg') no-repeat;\n  background-size: cover;\n  padding-top: 90px;\n  box-sizing: border-box;\n}\n.page-main_header h1 {\n  color: #ffffff;\n  font-size: 40px;\n}\n.page-main_header_text {\n  color: #ffffff;\n  line-height: 24px;\n  font-size: 14px;\n  max-width: 811px;\n}\n.page-main_management {\n  padding-top: 155px;\n  text-align: center;\n}\n.page-main_management h1 {\n  display: inline-block;\n  font-size: 24px;\n  line-height: 24px;\n  margin: 0 auto;\n}\n.page-main_management h1::after {\n  content: \"\";\n  display: block;\n  width: 79px;\n  border-bottom: 2px solid #b5a263;\n  margin: 30px auto 0;\n}\n.page-main_management_list {\n  margin-top: 34px;\n  margin-bottom: 40px;\n}\n.page-main_management_list_item {\n  display: inline-block;\n  position: relative;\n  padding-top: 300px;\n  padding-left: 11px;\n  width: 300px;\n  margin-right: 101px;\n  text-align: left;\n}\n.page-main_management_list_item:last-child {\n  margin-right: 0;\n}\n.page-main_management_list_item_img {\n  width: 312px;\n  height: 300px;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.page-main_management_list_item_name {\n  color: #232323;\n  margin-top: 29px;\n  font-size: 16px;\n  line-height: 16px;\n}\n.page-main_management_list_item_position {\n  color: #b5a263;\n  font-size: 14px;\n  margin: 8px 0 0;\n}\n.page-main_management_list_item_socials {\n  position: absolute;\n  top: 330px;\n  right: 0;\n}\n.page-main_management_list_item_socials li {\n  display: inline-block;\n  margin-left: 6px;\n}\n.page-main_management_list_item_socials li:first-child {\n  margin-left: 0px;\n}\n.page-main_management_list_item_socials_link {\n  content: \"\";\n  display: block;\n  background: #dedede url('img/icons.png') no-repeat;\n  border-radius: 50%;\n  width: 34px;\n  height: 34px;\n}\n.page-main_management_list_item_socials_link.link-f {\n  background-position: -1px 0;\n}\n.page-main_management_list_item_socials_link.link-t {\n  background-position: -36px 0;\n}\n.page-main_management_list_item_socials_link.link-g {\n  background-position: -71px 0;\n}\n.page-main_management_button {\n  text-transform: uppercase;\n  font-size: 24px;\n  line-height: 24px;\n  height: 48px;\n  width: 162px;\n  border: 1px solid #2b2f35;\n  border-radius: 50px;\n  background-color: #ffffff;\n  margin-bottom: 30px;\n}\n.page-main_reviews {\n  padding-top: 117px;\n  background-color: #f7f7f7;\n  text-align: center;\n  position: relative;\n}\n.page-main_reviews h1 {\n  color: #24282f;\n  font-size: 24px;\n  line-height: 24px;\n}\n.page-main_reviews h1::after {\n  content: \"\";\n  display: block;\n  width: 79px;\n  border-bottom: 2px solid #24282f;\n  margin: 30px auto 0;\n}\n.page-main_reviews_arrow {\n  position: absolute;\n  top: 40%;\n  content: \"\";\n  display: block;\n  cursor: pointer;\n  background: url('img/icons.png') no-repeat;\n  width: 10px;\n  height: 17px;\n}\n.page-main_reviews_arrow.arrow-left {\n  left: 134px;\n  background-position: -110px -10px;\n}\n.page-main_reviews_arrow.arrow-right {\n  right: 134px;\n  background-position: -124px -10px;\n}\n.page-main_reviews_list {\n  width: 1123px;\n  margin: 0 auto;\n}\n.page-main_reviews_list_item {\n  position: relative;\n  width: 75%;\n  margin: 0 auto 115px;\n  display: inline-block;\n  padding-top: 190px;\n}\n.page-main_reviews_list_item_review-text {\n  color: #232323;\n  font-size: 14px;\n  line-height: 24px;\n}\n.page-main_reviews_list_item_author-img {\n  position: absolute;\n  top: 64px;\n  left: 374.2px;\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n}\n.page-main_reviews_list_item_author-name {\n  margin-top: 45px;\n  margin-bottom: 20px;\n  display: block;\n  text-transform: uppercase;\n  font-size: 16px;\n  line-height: 16px;\n  font-style: normal;\n  font-weight: bold;\n  color: #b5a263;\n}\n.page-main_reviews_list_item_author-profession {\n  font-size: 14px;\n  line-height: 14px;\n  display: block;\n  font-style: normal;\n}\n.page-footer {\n  color: #6e7279;\n}\n.page-footer .hidden {\n  display: none;\n}\n.page-footer_info {\n  background-color: #2b2f35;\n  padding-top: 80px;\n  padding-bottom: 45px;\n  font-size: 14px;\n  line-height: 24px;\n  vertical-align: top;\n}\n.page-footer_info h1 {\n  color: #b5a263;\n  font-size: 14px;\n  margin-bottom: 24px;\n}\n.page-footer_info section {\n  vertical-align: top;\n  display: inline-block;\n  max-width: 300px;\n  margin-right: 150px;\n}\n.page-footer_info section:last-child {\n  margin-right: 0;\n}\n.page-footer_info section p {\n  margin-top: 0;\n}\n.page-footer_info_about {\n  margin-left: 135px;\n}\n.page-footer_info_contact_adress {\n  margin-bottom: 24px;\n}\n.page-footer_info_contact_other {\n  margin: 0;\n}\n.page-footer_info_subscribe_form_email {\n  width: 276px;\n  padding: 11px;\n  margin-bottom: 12px;\n  border: 1px solid #6e7279;\n  background: none;\n  color: #6e7279;\n}\n.page-footer_info_subscribe_form_btn {\n  width: 300px;\n  border: none;\n  text-transform: uppercase;\n  color: #ffffff;\n  background-color: #b5a263;\n  padding: 14px 0;\n  text-align: center;\n}\n.page-footer_final {\n  background-color: #24282f;\n  padding: 27px 0;\n  position: relative;\n}\n.page-footer_final_copyright {\n  margin: 0 0 0 135px;\n  font-size: 12px;\n}\n.page-footer_final_socials {\n  position: absolute;\n  top: -6.75px;\n  right: 150px;\n  margin: 0;\n  padding: 0;\n}\n.page-footer_final_socials-item {\n  display: inline-block;\n}\n.page-footer_final_socials-item a {\n  content: \"\";\n  display: block;\n  width: 32px;\n  height: 32px;\n  border: 1px solid #6e7279;\n  border-radius: 50%;\n  background: url('img/icons.png') no-repeat;\n}\n.page-footer_final_socials-item.soc-f a {\n  background-position: -2px -35px;\n}\n.page-footer_final_socials-item.soc-t a {\n  background-position: -37px -35px;\n}\n.page-footer_final_socials-item.soc-g a {\n  background-position: -72px -35px;\n}\n.page-footer_final_socials-item.soc-d a {\n  background-position: -107px -35px;\n}\n.page-footer_final_socials-item.active a {\n  background-color: #b5a263;\n  border-color: #b5a263;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })

/******/ });
//# sourceMappingURL=index.js.map