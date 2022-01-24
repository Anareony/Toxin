/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/footer/footer.scss":
/*!*******************************************!*\
  !*** ./src/components/footer/footer.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://toxin/./src/components/footer/footer.scss?");

/***/ }),

/***/ "./src/components/header/header.scss":
/*!*******************************************!*\
  !*** ./src/components/header/header.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://toxin/./src/components/header/header.scss?");

/***/ }),

/***/ "./src/components/sign-up/sign-up.scss":
/*!*********************************************!*\
  !*** ./src/components/sign-up/sign-up.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://toxin/./src/components/sign-up/sign-up.scss?");

/***/ }),

/***/ "./src/pages/registration/registration.scss":
/*!**************************************************!*\
  !*** ./src/pages/registration/registration.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://toxin/./src/pages/registration/registration.scss?");

/***/ }),

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/***/ (() => {

eval("const burger = document.querySelector('.js-header__burger')\r\n\r\nfunction openBurger() {\r\n    const burger = document.querySelector('.js-header__burger')\r\n    const nav = document.querySelector('.header__nav');\r\n\r\n    burger.classList.toggle(\".js-header__burger_opened\")\r\n    \r\n    if(burger.classList.contains(\".js-header__burger_opened\")) {\r\n        burger.innerHTML = \"close\";\r\n    } else {\r\n        burger.innerHTML = \"menu\";\r\n    }\r\n    \r\n    nav.style.display = \"flex\";\r\n\r\n    if(!burger.classList.contains(\".js-header__burger_opened\")) {\r\n        nav.style.display = \"\";\r\n    }\r\n}\r\n\r\nburger.addEventListener('click', openBurger)\n\n//# sourceURL=webpack://toxin/./src/components/header/header.js?");

/***/ }),

/***/ "./src/pages/registration/registration.js":
/*!************************************************!*\
  !*** ./src/pages/registration/registration.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _registration_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registration.scss */ \"./src/pages/registration/registration.scss\");\n/* harmony import */ var _components_header_header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/header/header.scss */ \"./src/components/header/header.scss\");\n/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/header/header */ \"./src/components/header/header.js\");\n/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_header_header__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_footer_footer_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/footer/footer.scss */ \"./src/components/footer/footer.scss\");\n/* harmony import */ var _components_sign_up_sign_up_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/sign-up/sign-up.scss */ \"./src/components/sign-up/sign-up.scss\");\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://toxin/./src/pages/registration/registration.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/registration/registration.js");
/******/ 	
/******/ })()
;