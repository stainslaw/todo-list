/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"$container\": () => (/* binding */ $container),\n/* harmony export */   \"createHtmlElement\": () => (/* binding */ createHtmlElement)\n/* harmony export */ });\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./today */ \"./src/today.js\");\n/* harmony import */ var _tomorrow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tomorrow */ \"./src/tomorrow.js\");\n/* harmony import */ var _week__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./week */ \"./src/week.js\");\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings */ \"./src/settings.js\");\n\n\n\n\n\n\nconst $container = document.getElementById(\"container\");\n\nfunction createHtmlElement(type, id, arrayClasses, container) {\n    const element = document.createElement(type);\n    if (id) element.id = id;\n    if (arrayClasses)\n      arrayClasses.forEach((myClass) => element.classList.add(myClass));\n  \n    if (container) element.innerText = container;\n  \n    return element;\n  }\n\n  function today() {\n    $container.innerHTML = \"\";\n    (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.renderNav)();\n    (0,_today__WEBPACK_IMPORTED_MODULE_1__.renderToday)();\n  }\n\n  function week() {\n    $container.innerHTML = \"\";\n    (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.renderNav)();\n    (0,_week__WEBPACK_IMPORTED_MODULE_3__.renderWeek)();\n  }\n\n  function tomorrow() {\n    $container.innerHTML = \"\";\n    (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.renderNav)();\n    (0,_tomorrow__WEBPACK_IMPORTED_MODULE_2__.renderTomorrow)();\n  }\n\n  function settings() {\n    $container.innerHTML = \"\";\n    (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.renderNav)();\n    (0,_settings__WEBPACK_IMPORTED_MODULE_4__.renderSettings)();\n  }\n\n\ntoday();\ndocument.addEventListener(\"click\", (e) => {\n  const target = e.target.innerText;\n\n  if (target === \"Today\") today();\n  if (target === \"Next Week\") week();\n  if (target === \"Tomorrow\") tomorrow();\n  if (target === \"Settings\") settings();\n});\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderNav\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nfunction render() {\n\n  const $h1 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\n    \"h1\", \n    null, \n    null, \n    [\"To-do List\"]\n);\n\n  const navItems = [\"today\", \"tomorrow\", \"next week\"];\n  const $ul = document.createElement(\"ul\");\n\n  const $ul2 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\n    \"li\", \n    null, \n    null, \n    [\"Settings\"]\n);\n\n  const $p = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\n      \"h4\", \n      null, \n      null, \n      [\"stainslaw ©\" + \" \" + (new Date().getFullYear())]\n  );\n\n  navItems.forEach((item) =>\n    $ul.appendChild((0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"li\", null, null, item))\n\n  );\n\n  const $nav = document.createElement(\"nav\");\n  const $header = document.createElement(\"header\");\n  const $settings = document.createElement(\"settings\");\n  const $footer = document.createElement(\"footer\");\n  const $menubar = document.createElement(\"menubar\");\n\n  $header.appendChild($h1);\n  $menubar.appendChild($header);\n  $nav.appendChild($ul);\n  $settings.appendChild($ul2);\n  $nav.appendChild($settings);\n  $menubar.appendChild($nav);\n  $footer.appendChild($p);\n  $menubar.appendChild($footer);\n  _index__WEBPACK_IMPORTED_MODULE_0__.$container.appendChild($menubar);\n}\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/navbar.js?");

/***/ }),

/***/ "./src/settings.js":
/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderSettings\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nfunction render() {\n\n    const $h1 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\n        \"h1\", \n        null, \n        null, \n        [\"Settings\"]\n    );\n\n    const $display = document.createElement(\"display\");\n    const $header = document.createElement(\"settings-header\");\n    const $settingsarea = document.createElement(\"settings-area\");\n\n    $header.appendChild($h1);\n    $display.appendChild($header);\n    $display.appendChild($settingsarea);\n    _index__WEBPACK_IMPORTED_MODULE_0__.$container.appendChild($display);\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/settings.js?");

/***/ }),

/***/ "./src/today.js":
/*!**********************!*\
  !*** ./src/today.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderToday\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nfunction render() {\n\n    const $h1 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\n        \"h1\", \n        null, \n        null, \n        [\"+ Add To Today's Agenda:\"]\n    );\n\n    const $display = document.createElement(\"display\");\n    const $header = document.createElement(\"today-header\");\n    const $listarea = document.createElement(\"today-area\");\n\n    $header.appendChild($h1);\n    $display.appendChild($header);\n    $display.appendChild($listarea);\n    _index__WEBPACK_IMPORTED_MODULE_0__.$container.appendChild($display);\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/today.js?");

/***/ }),

/***/ "./src/tomorrow.js":
/*!*************************!*\
  !*** ./src/tomorrow.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderTomorrow\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nfunction render() {\n\n    const $h1 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\n        \"h1\", \n        null, \n        null, \n        [\"+ Add To Tomorrow's Agenda:\"]\n    );\n\n    const $display = document.createElement(\"display\");\n    const $header = document.createElement(\"tomorrow-header\");\n    const $tomorrowarea = document.createElement(\"tomorrow-area\");\n\n    $header.appendChild($h1);\n    $display.appendChild($header);\n    $display.appendChild($tomorrowarea);\n    _index__WEBPACK_IMPORTED_MODULE_0__.$container.appendChild($display);\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/tomorrow.js?");

/***/ }),

/***/ "./src/week.js":
/*!*********************!*\
  !*** ./src/week.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderWeek\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\nfunction render() {\n\n    const $h1 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\n        \"h1\", \n        null, \n        null, \n        [\"+ Add To Next Week's Agenda:\"]\n    );\n\n    const $display = document.createElement(\"display\");\n    const $header = document.createElement(\"week-header\");\n    const $listarea = document.createElement(\"week-area\");\n\n    $header.appendChild($h1);\n    $display.appendChild($header);\n    $display.appendChild($listarea);\n    _index__WEBPACK_IMPORTED_MODULE_0__.$container.appendChild($display);\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/week.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;