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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_grid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/grid.js */ \"./src/scripts/grid.js\");\n/* harmony import */ var _scripts_unit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/unit.js */ \"./src/scripts/unit.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () =>{\n  console.log(\"working :)\")\n  window.Grid = _scripts_grid_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  window.Unit = _scripts_unit_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\n  const grid = new _scripts_grid_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\n  grid.draw();\n\n  /// Testing Code;\n  // let canvas_array = document.getElementsByClassName(\"game-board\");\n  // let canvas = canvas_array[0];\n  // let ctx = canvas.getContext(\"2d\");\n  // ctx.lineWidth = 2;\n  // ctx.strokeStyle = \"red\";\n  // ctx.beginPath();\n  // ctx.moveTo(200,200);\n  // ctx.lineTo(240,240);\n  // ctx.stroke();\n\n})\n\n//# sourceURL=webpack://MINI-XCOM/./src/index.js?");

/***/ }),

/***/ "./src/scripts/grid.js":
/*!*****************************!*\
  !*** ./src/scripts/grid.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n\nclass Grid{\n  constructor(height = 480, width = 480, column = 6, row = 6){\n    this.height = height;\n    this.width = width;\n    this.columnNum = column; \n    this.rowNum = row;\n  }\n\n  draw(){\n    let canvas = document.createElement(\"CANVAS\");\n    canvas.classList.add(\"game-board\");\n    canvas.width = this.width;\n    canvas.height = this.height;\n    let ctx = canvas.getContext(\"2d\");\n    canvas.style.border = \"2px solid black\"\n    ctx.fillStyle = \"grey\";\n    ctx.fillRect(0, 0, canvas.width, canvas.height);\n    ctx.beginPath();\n    ctx.lineWidth = 2;\n    ctx.lineStyle = \"black\";\n    for (let x = 0; x < canvas.height; x += canvas.height / this.rowNum) {\n      ctx.moveTo(x, 0)\n      ctx.lineTo(x, canvas.height)\n    }\n    for (let y = 0; y < canvas.width; y += canvas.width / this.columnNum) {\n      ctx.moveTo(0, y)\n      ctx.lineTo(canvas.width, y)\n    }\n    ctx.stroke();\n    let gameboard = document.getElementById('play-area')\n    gameboard.appendChild(canvas);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Grid);\n\n//# sourceURL=webpack://MINI-XCOM/./src/scripts/grid.js?");

/***/ }),

/***/ "./src/scripts/unit.js":
/*!*****************************!*\
  !*** ./src/scripts/unit.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Unit{\n  constructor(options){\n    // Position is in [0,0] - 2d array format, is converted mathmatically\n    // into the center of a square on the board.\n    this.pos = options.pos;\n    this.canvas = options.canvas;\n    this.health = options.health;\n    this.movementRange = options.movementRange;\n    this.shootingRange = options.shootingRange;\n    this.enemy = options.enemy;\n  }\n\n  draw(){\n    let ctx = this.canvas.getContext(\"2d\");\n    let color = \"yellow\";\n    if (this.enemy){color = \"green\"};\n    ctx.fillStyle = color;\n     // Get the center of the square of the units position\n    let center_x = this.pos[0] * 80 + 40;\n    let center_y = this.pos[1] * 80 + 40;\n    ctx.beginPath();\n    ctx.arc(center_x, center_y, 20, 0, 2 * Math.PI, false);\n    ctx.fill();\n  }\n\n  move([x,y]){\n    this.pos[0] = this.pos[0] + x;\n    this.pos[1] = this.pos[1] + y;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Unit);\n\n/// Example object for testing purposes\n\nnew Unit({\n  pos: [4,4],\n  canvas: (document.getElementsByClassName(\"game-board\"))[0],\n  health: 40,\n  movementRange: 2,\n  shootingRange: 2,\n  enemy: false\n})\n\n//# sourceURL=webpack://MINI-XCOM/./src/scripts/unit.js?");

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