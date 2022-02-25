/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/grid.js":
/*!*********************!*\
  !*** ./src/grid.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n\nclass Grid{\n  constructor(height = 500, width = 500, column = 8, row = 8){\n    this.height = height;\n    this.width = width;\n    this.columnNum = column; \n    this.rowNum = row;\n  }\n\n  drawGrid(){\n    let canvas = document.createElement(\"CANVAS\");\n    canvas.width = this.width;\n    canvas.height = this.height;\n    let ctx = canvas.getContext(\"2d\");\n    canvas.style.border = \"2px solid black\"\n    ctx.fillStyle = \"grey\";\n    ctx.fillRect(0, 0, this.width, this.height);\n    ctx.beginPath();\n    ctx.lineWidth = 2;\n    ctx.lineStyle = \"black\";\n    for (let x = 0; x < this.height; x += this.height / this.rowNum) {\n      ctx.moveTo(x, 0)\n      ctx.lineTo(x, this.height)\n    }\n    for (let y = 0; y < this.width; y += this.width / this.columnNum) {\n      ctx.moveTo(0, y)\n      ctx.lineTo(this.width, y)\n    }\n    ctx.stroke();\n    let gameboard = document.getElementById('play-area')\n    gameboard.appendChild(canvas);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Grid);\n\n//# sourceURL=webpack://MINI-XCOM/./src/grid.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _grid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid.js */ \"./src/grid.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () =>{\n  console.log(\"working :)\")\n\n  const grid = new _grid_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\n  grid.drawGrid();\n\n  // grid.drawGrid(100, 200)\n\n  // const gameGrid = document.getElementById(\"game-grid\")\n  // let ctx =sd gameGrid.getContext('2d');\n  // window.ctx = ctx;\n  // ctx.fillStyle = \"peachpuff\";\n  // ctx.fillRect(50,50,100,100);\n})\n\n//# sourceURL=webpack://MINI-XCOM/./src/index.js?");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;