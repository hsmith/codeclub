(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("common", [], factory);
	else if(typeof exports === 'object')
		exports["common"] = factory();
	else
		root["common"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/geometry/Point.js":
/*!*******************************!*\
  !*** ./src/geometry/Point.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Point; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n//\n//\n//\nvar Point = //\n// members //////////////////////////////////////////////////////////////////\n//\n//\n// constructor //////////////////////////////////////////////////////////////\n//\nfunction Point(x, y) {\n  _classCallCheck(this, Point);\n\n  _defineProperty(this, \"x\", 0);\n\n  _defineProperty(this, \"y\", 0);\n\n  this.x = x || 0;\n  this.y = y || 0;\n} //\n// public methods ///////////////////////////////////////////////////////////\n//\n;\n\n\n;\n\n//# sourceURL=webpack://common/./src/geometry/Point.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Point, Character, SimulationManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var geometry_Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! geometry/Point */ \"./src/geometry/Point.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Point\", function() { return geometry_Point__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var simulation_Character__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! simulation/Character */ \"./src/simulation/Character.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Character\", function() { return simulation_Character__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var simulation_SimulationManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! simulation/SimulationManager */ \"./src/simulation/SimulationManager.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SimulationManager\", function() { return simulation_SimulationManager__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n//\n//\n//\n\n\n\n\n\n\n\n//# sourceURL=webpack://common/./src/index.js?");

/***/ }),

/***/ "./src/simulation/Character.js":
/*!*************************************!*\
  !*** ./src/simulation/Character.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Character; });\n/* harmony import */ var geometry_Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! geometry/Point */ \"./src/geometry/Point.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n//\n//\n//\n\n\nvar Character = function Character() {\n  _classCallCheck(this, Character);\n\n  _defineProperty(this, \"position\", new geometry_Point__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 0));\n};\n\n\n\n//# sourceURL=webpack://common/./src/simulation/Character.js?");

/***/ }),

/***/ "./src/simulation/SimulationManager.js":
/*!*********************************************!*\
  !*** ./src/simulation/SimulationManager.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SimulationManager; });\n/* harmony import */ var simulation_Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simulation/Character */ \"./src/simulation/Character.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n//\n//\n//\n\n\nvar SimulationManager =\n/*#__PURE__*/\nfunction () {\n  //\n  // members //////////////////////////////////////////////////////////////////\n  //\n  //\n  // constructor //////////////////////////////////////////////////////////////\n  //\n  function SimulationManager() {\n    _classCallCheck(this, SimulationManager);\n  } //\n  // public methods ///////////////////////////////////////////////////////////\n  //\n\n\n  _createClass(SimulationManager, [{\n    key: \"update\",\n    value: function update() {} //\n    // end class ////////////////////////////////////////////////////////////////\n    //\n\n  }]);\n\n  return SimulationManager;\n}();\n\n\n\n//# sourceURL=webpack://common/./src/simulation/SimulationManager.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack://common/multi_./src/index.js?");

/***/ })

/******/ });
});