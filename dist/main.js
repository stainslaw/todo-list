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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"$container\": () => (/* binding */ $container),\n/* harmony export */   \"createHtmlElement\": () => (/* binding */ createHtmlElement)\n/* harmony export */ });\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./today */ \"./src/today.js\");\n/* harmony import */ var _tomorrow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tomorrow */ \"./src/tomorrow.js\");\n/* harmony import */ var _week__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./week */ \"./src/week.js\");\n\n\n\n\n\nconst $container = document.getElementById(\"container\");\n\nfunction createHtmlElement(type, id, arrayClasses, container) {\n    const element = document.createElement(type);\n    if (id) element.id = id;\n    if (arrayClasses)\n      arrayClasses.forEach((myClass) => element.classList.add(myClass));\n  \n    if (container) element.innerText = container;\n  \n    return element;\n  }\n\n  function today() {\n    $container.innerHTML = \"\";\n    (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.renderNav)();\n    (0,_today__WEBPACK_IMPORTED_MODULE_1__.renderToday)();\n  }\n\n  // function week() {\n  //   $container.innerHTML = \"\";\n  //   renderNav();\n  //   renderWeek();\n  // }\n\n  // function tomorrow() {\n  //   $container.innerHTML = \"\";\n  //   renderNav();\n  //   renderTomorrow();\n  // }\n\n\ntoday();\ndocument.addEventListener(\"click\", (e) => {\n  const target = e.target.innerText;\n\n  // if (target === \"Today\") today();\n  // if (target === \"Next Week\") week();\n  // if (target === \"Tomorrow\") tomorrow();\n  // if (target === \"Settings\") settings();\n});\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderNav\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nfunction render() {\n\n  const $h1 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\n    \"h1\", \n    null, \n    null, \n    [\"To-do List\"]\n);\n\n  const navItems = [\"today\", \"tomorrow\", \"next week\"];\n  const $ul = document.createElement(\"ul\");\n\n  const $ul2 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\n    \"li\", \n    null, \n    null, \n    [\"Settings\"]\n);\n\nconst $ul3 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\n  \"li\", \n  null, \n  null, \n  [\"Terms of Service\"]\n);\n\nconst $ul4 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\n  \"li\", \n  null, \n  null, \n  [\"Data Usage\"]\n);\n\n  const $p = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\n      \"h4\", \n      null, \n      null, \n      [\"stainslaw ©\" + \" \" + (new Date().getFullYear())]\n  );\n\n  navItems.forEach((item) =>\n    $ul.appendChild((0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"li\", null, null, item))\n\n  );\n\n  const $nav = document.createElement(\"nav\");\n  const $header = document.createElement(\"header\");\n  const $settings = document.createElement(\"settings\");\n  const $footer = document.createElement(\"footer\");\n  const $menubar = document.createElement(\"menubar\");\n\n  $header.appendChild($h1);\n  $menubar.appendChild($header);\n  $nav.appendChild($ul);\n  $settings.appendChild($ul2);\n  $settings.appendChild($ul3);\n  $settings.appendChild($ul4)\n  $nav.appendChild($settings);\n  $menubar.appendChild($nav);\n  $footer.appendChild($p);\n  $menubar.appendChild($footer);\n  _index__WEBPACK_IMPORTED_MODULE_0__.$container.appendChild($menubar);\n}\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/navbar.js?");

/***/ }),

/***/ "./src/today.js":
/*!**********************!*\
  !*** ./src/today.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderToday\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n// import { $container } from \"./index\";\n\n// function render() {\n\n//     const $display = document.createElement(\"display\");\n//     const $header = document.createElement(\"today-header\");\n//     const $todayarea = document.createElement(\"today-area\");\n//     const $listarea = document.createElement(\"list-area\");\n\n//     const $form = document.querySelector('#new-task-form');\n//     const $formcontain = document.querySelector(\"#contain\");\n\n\n//     window.addEventListener('load', () => {\n//         // const form = document.querySelector('#new-task-form');\n//         const input = document.querySelector('#new-task-input');\n    \n//         $form.addEventListener('submit', (e) => {\n//             e.preventDefault();\n    \n//             const task = input.value;\n    \n//             if (!task) {\n//                 alert(\"You haven't filled anything in!\");\n//                 return;\n//             }\n\n//          $listarea.classList.add(\"todo-list\");\n    \n//             const task_content_el = document.createElement(\"div\");\n//             task_content_el.classList.add(\"todo-list\");\n    \n//             $listarea.appendChild(task_content_el);\n\n//             const task_input_el = document.createElement(\"input\");\n//             task_input_el.classList.add(\"text\");\n//             task_input_el.type = \"text\";\n//             task_input_el.value = task;\n//             task_input_el.size = \"24\";\n//             task_input_el.setAttribute(\"readonly\", \"readonly\");\n            \n//             task_content_el.appendChild(task_input_el);\n\n//             const task_actions_el = document.createElement(\"div\");\n//             task_actions_el.classList.add(\"button\");\n            \n//             const task_edit_el = document.createElement(\"edit\");\n//             task_edit_el.innerHTML = \"Edit\";\n    \n//             const task_delete_el = document.createElement(\"delete\");\n//             task_delete_el.innerHTML = \"Delete\";\n\n//             task_content_el.appendChild(task_edit_el);\n//             task_content_el.appendChild(task_delete_el);\n\n//             $formcontain.appendChild(task_actions_el);\n\n//             $listarea.appendChild($formcontain);\n\n//             input.value = \"\";\n\n//             task_edit_el.addEventListener('click', () => {\n//                 if (task_edit_el.innerText.toLowerCase() == \"edit\") {\n//                     task_input_el.removeAttribute(\"readonly\");\n//                     task_input_el.focus();\n//                     task_edit_el.innerText = \"Save\";\n//                 } else {\n//                     task_input_el.setAttribute(\"readonly\", \"readonly\");\n//                     task_edit_el.innerText = \"Edit\";\n//                 }\n//             });\n\n//             task_delete_el.addEventListener('click', () => {\n//                 $listarea.removeChild(task_content_el);\n//             });\n//         });\n//     });\n\n//     $display.appendChild($header);\n//     $display.appendChild($listarea);\n//     $display.appendChild($todayarea);\n//     $container.appendChild($display);\n// }\n\n// export { render as renderToday };\n\n\n\n\n\nfunction render() {\n\n    const $display = document.createElement(\"display\");\n    const $header = document.createElement(\"today-header\");\n    const $todayarea = document.createElement(\"today-area\");\n    const $listarea = document.createElement(\"list-area\");\n\n    const $form = document.querySelector(\"#form\");\n    const $formcontain = document.querySelector(\"#contain\");\n\n    window.addEventListener('load', () => {\n        // const form = document.querySelector('#new-task-form');\n        const input = document.querySelector('#new-task-input');\n    \n        $form.addEventListener('submit', (e) => {\n            e.preventDefault();\n    \n            const task = input.value;\n    \n            if (!task) {\n                alert(\"You haven't filled anything in!\");\n                return;\n            }\n\n         $listarea.classList.add(\"todo-list\");\n    \n            const task_content_el = document.createElement(\"div\");\n            task_content_el.classList.add(\"todo-list\");\n    \n            $listarea.appendChild(task_content_el);\n\n            const task_input_el = document.createElement(\"input\");\n            task_input_el.classList.add(\"text\");\n            task_input_el.type = \"text\";\n            task_input_el.value = task;\n            task_input_el.size = \"24\";\n            task_input_el.setAttribute(\"readonly\", \"readonly\");\n            \n            task_content_el.appendChild(task_input_el);\n\n            const task_actions_el = document.createElement(\"div\");\n            task_actions_el.classList.add(\"button\");\n            \n            const task_edit_el = document.createElement(\"edit\");\n            task_edit_el.innerHTML = \"Edit\";\n    \n            const task_delete_el = document.createElement(\"delete\");\n            task_delete_el.innerHTML = \"Delete\";\n\n            task_content_el.appendChild(task_edit_el);\n            task_content_el.appendChild(task_delete_el);\n\n            $formcontain.appendChild(task_actions_el);\n\n            $listarea.appendChild($formcontain);\n\n            input.value = \"\";\n\n            task_edit_el.addEventListener('click', () => {\n                if (task_edit_el.innerText.toLowerCase() == \"edit\") {\n                    task_input_el.removeAttribute(\"readonly\");\n                    task_input_el.focus();\n                    task_edit_el.innerText = \"Save\";\n                } else {\n                    task_input_el.setAttribute(\"readonly\", \"readonly\");\n                    task_edit_el.innerText = \"Edit\";\n                }\n            });\n\n            task_delete_el.addEventListener('click', () => {\n                $listarea.removeChild(task_content_el);\n            });\n        });\n    });\n\n  \n    $header.appendChild($form)\n    $display.appendChild($header);\n    $display.appendChild($listarea);\n    $display.appendChild($todayarea);\n    _index__WEBPACK_IMPORTED_MODULE_0__.$container.appendChild($display);\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/today.js?");

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