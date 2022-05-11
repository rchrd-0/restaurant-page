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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ \"./src/page-load.js\");\n\n(0,_page_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadMenu() {\n  const menu = document.createElement('div');\n  menu.setAttribute('id', 'menu');\n  const heading = document.createElement('h1');\n  heading.textContent = 'Menu';\n  menu.appendChild(heading);\n  \n  const menuSections = ['meat', 'seafood', 'salad', 'sides'];\n  menuSections.forEach(section => {\n    const container = document.createElement('div');\n    container.classList.add('menu-section');\n    container.dataset.menu = section;\n    const sectionHeader = document.createElement('h2');\n    sectionHeader.textContent = section.toUpperCase();\n    container.appendChild(sectionHeader);\n\n    let content = getContent(container);\n    content.forEach(item => container.appendChild(item));\n    \n    menu.appendChild(container);\n  })\n\n  return menu;\n}\n\nfunction getContent(div) {\n  const allContent = {\n    meat: [\n      'Hong Kong-style sand ginger chicken, house-made scallion sauce',\n      'Lamb chops, laccha onion',\n      'Roast duck, hoisin sauce, steamed pancakes',\n      'Australian Wagyu skirt steak, thick-cut rice noodles, seaweed butter, preserved lemon'\n    ],\n    seafood: [\n      'Tiger prawn noodles, soy butter sauce, prawn oil, dried shrimp roe',\n      'Eel on crispy sushi rice & pickles',\n      'Cobia, sapphire chutney, lime caviar',\n      'Grilled lobster, green mango, pineapple & lime vinaigrette'\n    ],\n    salad: [\n      'Shredded Mushrooms, cold noodles, cucumber, chilli oil, sesame dressing',\n      'Shredded chicken salad, cabbage, rau ram, prawn chips, pickles',\n      'Pork belly, pickles, sichuan peppercorn oil'\n    ],\n    sides: [\n      'Chicken wings, lemongrass, red chilli, salt, pepper',\n      'Crispy eggplant, mixed herbs, ginger glaze',\n      'Shrimp tacos, lime garlic cabbage, mango salsa, cilantro, onions'\n    ]\n  }\n  const keys = Object.keys(allContent);\n  let section = keys.filter(key => key === div.dataset.menu).pop();\n\n  let pArray = new Array;\n  allContent[section].forEach(item => {\n    const p = document.createElement('p');\n    p.textContent = item;\n    pArray.push(p);\n  })\n  \n  return pArray;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/nav-bar.js":
/*!************************!*\
  !*** ./src/nav-bar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadNavBar() {\n  const navBar = document.createElement('div');\n  const childElements = new Array;\n  navBar.classList.add('nav-bar');\n\n  const logo = document.createElement('div');\n  logo.setAttribute('id', 'logo-placeholder');\n\n  const list = document.createElement('ul');\n  const links = ['Menu', 'Contact'];\n  for (let i = 0; i < links.length; i++) {\n    let item = document.createElement('li');\n    let anchor = document.createElement('a');\n    anchor.textContent = links[i];\n    anchor.setAttribute('href', '#');\n    item.appendChild(anchor);\n    list.appendChild(item);\n  }\n  childElements.push(logo, list);\n  childElements.forEach(element => navBar.appendChild(element));\n\n  return navBar;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadNavBar);\n\n//# sourceURL=webpack://restaurant-page/./src/nav-bar.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _nav_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-bar */ \"./src/nav-bar.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n// import loadHero from \"./hero\";\n\n// import loadContact from \"./contact\";\n\n\nfunction pageLoad() {\n  const main = document.querySelector('#content');\n  const content = new Array;\n\n  const contentLeft = document.createElement('div');\n  contentLeft.setAttribute('id', 'content-left');\n  contentLeft.appendChild((0,_nav_bar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n  contentLeft.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n  content.push(contentLeft);\n\n  const contentRight = document.createElement('div');\n  contentRight.setAttribute('id', 'content-right');\n  content.push(contentRight);\n\n  content.forEach(element => main.appendChild(element));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\n\n\n//# sourceURL=webpack://restaurant-page/./src/page-load.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;