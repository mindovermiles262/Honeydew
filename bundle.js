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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst showNewListItem = (task, pos) => {\n  const div = document.createElement('div')\n  div.innerHTML = `\n    <h2>\n      <input type='checkbox' class='taskCheckBox' id=${pos} />\n      ${task}\n    </h2>\n  `\n  return div\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (showNewListItem);\n\n\n//# sourceURL=webpack:///./src/display.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \"./src/logic.js\");\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ \"./src/display.js\");\n\n\n\nconst anchor = document.querySelector('#todoList');\nlet todoList = Object(_logic__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconst startListeners = () => {\n  // Toggle Completeness\n  const checkBoxes = document.querySelectorAll('.taskCheckBox')\n  checkBoxes.forEach( (checkBox) => {\n    checkBox.addEventListener('click', (click) => {\n      let editPosition = click.target.id - 1;\n      toggleComplete(todoList, editPosition);\n      renderList(todoList);\n    })\n  })\n\n}\n\n// Render Todo List\nconst renderList = (list) => {\n  anchor.innerHTML = \"\";\n  todoList.forEach( (element) => {\n    let newTask = Object(_display__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(element['task'], element['pos']);\n    if (element.completed == true) {\n      newTask.classList.add('strikethrough') \n    }\n    anchor.appendChild(newTask); \n  })\n  startListeners();\n}\n\nrenderList(todoList);\n\nconst addNewTaskToList = (list, task) => {\n  let newTaskObject = {\n    pos: list.length + 1,\n    task: task\n  }\n  list.push(newTaskObject);\n}\n\nconst toggleComplete = (list, position) => {\n  let status = list[position].completed\n  list[position].completed = !status\n}\n\nsubmitButton.addEventListener('click', (event) => {\n  event.preventDefault()\n  let newTitle = document.querySelector('#taskString').value\n  addNewTaskToList(todoList, newTitle)\n  renderList(todoList)\n  console.log(todoList)\n})\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst list = () => {\n  return [\n    {pos: 1, task: 'Read POODR', completed: false },\n    {pos: 2, task: 'Install Linux', completed: false },\n    {pos: 3, task: 'Pay Attention to Klaira', completed: true }\n  ]\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (list);\n\n\n//# sourceURL=webpack:///./src/logic.js?");

/***/ })

/******/ });