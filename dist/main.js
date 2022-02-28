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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_grid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/grid.js */ \"./src/scripts/grid.js\");\n/* harmony import */ var _scripts_unit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/unit.js */ \"./src/scripts/unit.js\");\n/* harmony import */ var _scripts_grid_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/grid_view.js */ \"./src/scripts/grid_view.js\");\n/* harmony import */ var _scripts_cover_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/cover.js */ \"./src/scripts/cover.js\");\n\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () =>{\n  console.log(\"working :)\")\n  window.Grid = _scripts_grid_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  window.Unit = _scripts_unit_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  window.GridView = _scripts_grid_view_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n  window.Cover = _scripts_cover_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n  const grid = new _scripts_grid_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\n  const gridView = new _scripts_grid_view_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](grid);\n  gridView.start();\n  gridView.bindfirstClick();\n  grid.loadLevelOneUnits();\n  grid.draw();\n  \n})\n\n//# sourceURL=webpack://MINI-XCOM/./src/index.js?");

/***/ }),

/***/ "./src/scripts/cover.js":
/*!******************************!*\
  !*** ./src/scripts/cover.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _unit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unit.js */ \"./src/scripts/unit.js\");\n\n\nclass Cover extends _unit_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\n  constructor(pos){\n    super({\n      name: \"Indomitable Cover\",\n      health: 9001,\n      movementRange: 0,\n      shootingRange: 0,\n      pos: pos,\n      enemy: true\n    });\n  }\n\n  draw(){\n    const canvas = (document.getElementsByClassName('game-board'))[0];\n    const ctx = canvas.getContext('2d');\n    ctx.fillStyle = \"black\";\n    ctx.beginPath();\n    let top_x = this.pos[0] * 80;\n    let top_y = this.pos[1] * 80 + 20\n    ctx.fillRect(top_x, top_y, 80, 40)\n    ctx.stroke();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cover);\n\n//# sourceURL=webpack://MINI-XCOM/./src/scripts/cover.js?");

/***/ }),

/***/ "./src/scripts/grid.js":
/*!*****************************!*\
  !*** ./src/scripts/grid.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _level_units_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level_units.js */ \"./src/scripts/level_units.js\");\n\n\nclass Grid{\n  constructor(height = 640, width = 640, column = 8, row = 8){\n    this.height = height;\n    this.width = width;\n    this.columnNum = column; \n    this.rowNum = row;\n    this.units = [];\n  }\n\n  //erases board for cycling between frames.\n  erase(){\n    const canvas = (document.getElementsByClassName('game-board'))[0];\n    const ctx = canvas.getContext('2d');\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n  }\n\n  // creates the inital board\n  createGrid(){\n    let canvas = document.createElement(\"CANVAS\");\n    canvas.classList.add(\"game-board\");\n    canvas.width = this.width;\n    canvas.height = this.height;\n    let ctx = canvas.getContext(\"2d\");\n    canvas.style.border = \"2px solid black\"\n    this.create_grid(canvas, ctx);\n    let gameboard = document.getElementById('play-area')\n    gameboard.prepend(canvas)\n  };\n\n  // extrenous code for Reference (Will eventually be deleted)\n  // createOptions(){\n  //   let unitOptions = document.createElement(\"UL\");\n  //   let gameboard = document.getElementById('play-area')\n  //   unitOptions.style.height = 50;\n  //   unitOptions.style.width = 50;\n  //   gameboard.appendChild(unitOptions);\n  // }\n\n  // creates every non-inital iteration of the board.\n  draw(){\n    let canvas = (document.getElementsByClassName(\"game-board\"))[0];\n    let ctx = canvas.getContext(\"2d\");\n    this.create_grid(canvas, ctx)\n    this.populate();\n  }\n  // creates the actual grid;\n  create_grid(canvas, ctx ){\n    ctx.fillStyle = \"grey\";\n    ctx.fillRect(0, 0, canvas.width, canvas.height);\n    ctx.beginPath();\n    ctx.lineWidth = 2;\n    ctx.lineStyle = \"black\";\n    for (let x = 0; x < canvas.height; x += canvas.height / this.rowNum) {\n      ctx.moveTo(x, 0)\n      ctx.lineTo(x, canvas.height)\n    }\n    for (let y = 0; y < canvas.width; y += canvas.width / this.columnNum) {\n      ctx.moveTo(0, y)\n      ctx.lineTo(canvas.width, y)\n    }\n    ctx.stroke();\n  }\n\n  // populate all unit elements\n  populate(){\n    this.units.forEach(unit =>{\n      unit.draw();\n    })\n  }\n\n  // add a unit to the units array as well as sets that unit's grid.\n  addNewUnit(unit){\n    unit.joinGrid(this);\n    this.units.push(unit);\n  }\n\n  // add level one units\n  loadLevelOneUnits(){\n    _level_units_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach(unit =>{\n\n      this.addNewUnit(unit);\n    })\n  }\n\n  // Get the unit at a current position. Only use after using grid.occupiedPos()\n  // to confirm that position is occupied.\n  getUnit(pos){\n    let unitAtPos = undefined;\n\n    this.units.forEach( unit => {\n      if (unit.pos[0] === pos[0] && unit.pos[1] === pos[1]){\n        unitAtPos = unit;\n      }\n    });\n\n    return unitAtPos\n  };\n\n  // Check if any units are dead and then destroy them if they are.\n  checkUnits(){\n    // let that = this;\n    this.units.forEach(unit =>{\n      if (unit.health <= 0){\n        this.destroy(unit);\n      }\n    })\n  };\n\n  // elminate a unit from the grids array of units. \n  destroy(unit) {\n    let deleteIndex = this.units.indexOf(unit);\n    let left = this.units.slice(0, deleteIndex);\n    let right = this.units.slice(deleteIndex + 1)\n    this.units = left.concat(right);\n  };\n\n  // takes a position checks if it occupied.\n  occupiedPos(pos){\n    let check = false;\n    this.units.forEach( unit => {\n      if (unit.pos[0] === pos[0] && unit.pos[1] === pos[1]){\n        check = true;\n      }\n    });\n    return check;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Grid);\n\n//# sourceURL=webpack://MINI-XCOM/./src/scripts/grid.js?");

/***/ }),

/***/ "./src/scripts/grid_view.js":
/*!**********************************!*\
  !*** ./src/scripts/grid_view.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _grid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid.js */ \"./src/scripts/grid.js\");\n/* harmony import */ var _unit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unit.js */ \"./src/scripts/unit.js\");\n\n\n\nclass GridView {\n  constructor(grid){\n    this.grid = grid;\n    this.boundFirstClick = this.handleFirstClick.bind(this);\n    this.boundMove = this.handleMove.bind(this)\n    this.selectedUnit = \"\";\n  };\n\n  // build intital board\n  start(){\n    this.grid.createGrid();\n  }\n\n  // Does an action whether it is shooting or moving\n  action(){\n    this.grid.empty();\n    this.grid.draw();\n  }\n\n  bindfirstClick(){\n    let canvas = (document.getElementsByClassName(\"game-board\")[0]);\n    canvas.addEventListener(\"click\", this.boundFirstClick);\n  }\n\n  // handles firstClick\n  handleFirstClick(e){\n    e.preventDefault();\n    e.stopPropagation();\n    let canvas = (document.getElementsByClassName(\"game-board\")[0]);\n    let cavansLeft = canvas.offsetLeft + canvas.clientLeft;\n    let canvasRight = canvas.offsetTop + canvas.clientTop;\n    let xClick = e.pageX - cavansLeft;\n    let yClick = e.pageY - canvasRight;\n    // Convert click into x, y positions\n    let x = Math.floor((xClick)/80);\n    let y = Math.floor((yClick)/80);\n    // Checks if there is a unit at the position clicked\n    if (this.grid.getUnit([x,y]) !== undefined){\n      let unit = this.grid.getUnit([x, y]);\n      // Determine if unit is a friendly. \n        if (!unit.enemy){\n          console.log(unit);\n          unit.gainAction(); // Extrenous Code used for testings\n          console.log(\"ALLY!\")\n          this.selectUnit(unit)\n          canvas.removeEventListener(\"click\", this.boundFirstClick);\n          canvas.addEventListener(\"click\",this.boundMove)\n        }\n        console.log(\"test\");\n    };\n  };\n\n  handleMove(e){\n    e.preventDefault();\n    e.stopPropagation();\n    let canvas = (document.getElementsByClassName(\"game-board\")[0]);\n    let cavansLeft = canvas.offsetLeft + canvas.clientLeft;\n    let canvasRight = canvas.offsetTop + canvas.clientTop;\n    let xClick = e.pageX - cavansLeft;\n    let yClick = e.pageY - canvasRight;\n    // Convert click into x, y positions\n    let x = Math.floor((xClick) / 80);\n    let y = Math.floor((yClick) / 80);\n    if(this.selectedUnit.move([x,y])){\n      console.log(\"BOBO!!!!\");\n      this.grid.draw();\n      canvas.removeEventListener(\"click\", this.boundMove);\n      canvas.addEventListener(\"click\", this.boundFirstClick);\n    }\n  }\n\n  // sets the selected unit so it can be tracked on different event's.\n  selectUnit(unit){\n    this.selectedUnit = unit;\n  }\n}\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GridView);\n\n//# sourceURL=webpack://MINI-XCOM/./src/scripts/grid_view.js?");

/***/ }),

/***/ "./src/scripts/level_units.js":
/*!************************************!*\
  !*** ./src/scripts/level_units.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cover_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cover.js */ \"./src/scripts/cover.js\");\n/* harmony import */ var _unit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unit.js */ \"./src/scripts/unit.js\");\n\n\n\n\n\nconst levelUnits = [new _unit_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n  pos: [5, 4],\n  health: 100,\n  movementRange: 2,\n  shootingRange: 4,\n  shootingPower: 20,\n  enemy: false,\n  name: \"Ajax\"\n}),\n\n  new _unit_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n  pos: [1, 5],\n  health: 100,\n  movementRange: 2,\n  shootingRange: 4,\n  shootingPower: 20,\n  enemy: false,\n  name: \"Renektus\"\n}),\n\n  new _unit_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n  pos: [0, 1],\n  health: 50,\n  movementRange: 2,\n  shootingRange: 4,\n  shootingPower: 15,\n  enemy: true,\n  name: \"DemonaKilla\"\n}),\n\n  new _unit_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n  pos: [6, 0],\n  health: 50,\n  movementRange: 2,\n  shootingRange: 4,\n  shootingPower: 15,\n  enemy: true,\n  name: \"Tuska\"\n}),\n\nnew _cover_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([0,2]),\nnew _cover_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([2,4]),\nnew _cover_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([3,4]),\nnew _cover_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([7,5])\n]\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (levelUnits);\n\n//# sourceURL=webpack://MINI-XCOM/./src/scripts/level_units.js?");

/***/ }),

/***/ "./src/scripts/unit.js":
/*!*****************************!*\
  !*** ./src/scripts/unit.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/scripts/utils.js\");\n\n\nclass Unit{\n  constructor(options){\n    // Position is in [0,0] - 2d array format, is converted mathmatically\n    // into the center of a square on the board.\n    this.pos = options.pos;\n    this.health = options.health;\n    this.movementRange = options.movementRange;\n    this.shootingRange = options.shootingRange;\n    this.shootingPower = options.shootingPower;\n    this.enemy = options.enemy;\n    this.name = options.name;\n    this.actionLeft = false;\n    this.grid = \"grid\";\n  }\n  draw(){\n    const canvas = (document.getElementsByClassName('game-board'))[0];\n    const ctx = canvas.getContext('2d');\n    // Yellow for friendly units and green for enemy forces.\n    let color = \"yellow\";\n    if (this.enemy){color = \"green\"};\n    ctx.fillStyle = color;\n     // Get the center of the square of the units position\n    let center_x = this.pos[0] * 80 + 40;\n    let center_y = this.pos[1] * 80 + 40;\n    ctx.beginPath();\n    ctx.arc(center_x, center_y, 20, 0, 2 * Math.PI, false);\n    ctx.fill();\n  }\n  move(pos){\n    // Check if move is valid]\n    if( this.actionLeft === false){\n      alert(\"Unit has already acted!\")\n      return false;\n    }\n    let posMoves = this.posssibleMoves();\n    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].inArray(pos, posMoves)){\n      this.takeAction();\n      this.pos[0] = pos[0];\n      this.pos[1] = pos[1];\n      return true;\n    }\n    else{\n      alert(\"Invalid Move\");\n      return false;\n    }\n  }\n\n  // Returns an array of possible moves/shoots for the unit; Important for the AI\n  // Determine which one by passing in type of action as parameter\n  posssibleMoves(action = \"move\"){\n    let range = this.movementRange;\n    if (action === \"shoot\"){range = this.shootingRange};\n    let posMoves = [];\n    directions.forEach(dir => {\n      let orgX = this.pos[0];\n      let orgY = this.pos[1];\n      for (let i = 0; i < range; i++){\n        orgX = orgX + dir[0];\n        orgY = orgY + dir[1];\n        if (this.isValidMove([orgX, orgY]) && !this.grid.occupiedPos([orgX, orgY])){\n          if (action === \"move\") { posMoves.push([orgX, orgY]) };\n        }\n        else if (this.isValidMove([orgX, orgY]) && this.grid.occupiedPos([orgX, orgY])){\n        // adds occupied position if action is shot since this is a valid shooting location.\n          if (action === \"shoot\"){posMoves.push([orgX, orgY])};\n          break\n        }\n        else {\n          break;\n        }\n      };\n    })\n    return posMoves;\n  };\n\n  // Checks to see if move is within the boundries of the gird.\n  isValidMove(pos){\n    let posX = pos[0];\n    let posY = pos[1];\n    // Check if it is in valid bounds.\n    if (posX > 7 || posX < 0 || posY > 7 || posY < 0) {\n      return false;\n    }\n    return true;\n  }\n\n  // Causes the unit to take damage\n  takeDamage(amount) {\n    this.health -= amount;\n  }\n\n  // sets this.grid equal to a specific grid\n  joinGrid(newGrid){\n    this.grid = newGrid;\n  }\n\n  // Allows for an action to take place.\n  gainAction(){\n    this.actionLeft = true;\n  }\n\n  // the unit takes an action so its actionLeft is set to false.\n  takeAction() {\n    this.actionLeft = false;\n  }\n\n  // The unit shoots at target location\n  shoot(pos){\n    // Check if a unit can act.\n    if(this.actionLeft === false){\n      alert(\"Unit has already acted!\")\n      return;\n    }\n    let posMoves = this.posssibleMoves(\"shoot\")\n    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].inArray(pos, posMoves)){\n      this.takeAction();\n      let target = this.grid.getUnit(pos);\n      target.takeDamage(this.shootingPower);\n    }\n    else{\n      alert(\"Invalid Shot location\")\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Unit);\n\n// Possible directions that an action can be taken in.\nconst directions = [\n  [0,1],\n  [0,-1],\n  [1,0],\n  [-1,0],\n  [1,1],\n  [-1,-1],\n  [1,-1],\n  [-1,1]\n]\n\n//# sourceURL=webpack://MINI-XCOM/./src/scripts/unit.js?");

/***/ }),

/***/ "./src/scripts/utils.js":
/*!******************************!*\
  !*** ./src/scripts/utils.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n\n\nconst Util = {\n  // checks if a position is an array of positions\n  inArray(pos, array){\n    let check = false;\n    array.forEach( move =>{\n      if(move[0] === pos[0] && move[1] === pos[1])\n      check = true\n    })\n\n    return check\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Util);\n\n//# sourceURL=webpack://MINI-XCOM/./src/scripts/utils.js?");

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