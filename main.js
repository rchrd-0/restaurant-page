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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadContact() {\n  let contact = document.createElement('div');\n  contact.setAttribute('id', 'contact');\n\n  let ids = ['location', 'details', 'hours', 'links'];\n  let cards = new Array;\n  for (let i = 0; i < ids.length; i++) {\n    const card = document.createElement('div');\n    card.classList.add('contact-section');\n    card.setAttribute('id', ids[i]);\n    contact.appendChild(card);\n    cards.push(card);\n  }\n  insertContent(cards);\n\n  return contact;\n}\n\nfunction insertContent(sections) {\n  for (let i = 0; i < sections.length; i++) {\n    let header = document.createElement('h1');\n    header.classList.add('contact-header');\n    let childElements = new Array;\n\n      switch (sections[i].id) {\n        case 'location':\n          const span = document.createElement('span');\n          header.textContent = 'Location';\n          span.textContent = '8th Floor, If Building, Else Street, Hong Kong';\n          childElements.push(header, span);\n          break;\n        case 'details':\n          header.textContent = 'Contact';\n          childElements.push(header);\n          const content = ['reservations@emailservice.com', '+852 8888 8888'];\n          for (let i = 0; i < content.length; i++) {\n            const span = document.createElement('span');\n            span.textContent = content[i];\n            childElements.push(span);\n          }\n          break;\n        case 'hours':\n          header.textContent = 'Hours';\n          childElements.push(header);\n          childElements = childElements.concat(insertOpeningHours());\n          break;\n        case 'links':\n          insertLinks(sections[i]);\n          break;\n      }\n      childElements.forEach(element => sections[i].appendChild(element));\n  }\n}\n\nfunction insertOpeningHours() {\n  const text = ['Lunch:', '12 - 3pm', 'Dinner:', '6 - 11pm'];\n  let childElements = new Array;\n  for (let i = 0; i < text.length; i++) {\n    const span = document.createElement('span');\n    span.textContent = text[i];\n    if ([i] % 2 === 0) {\n      span.classList.add('contact-subheader');\n    }\n    childElements.push(span);\n  }\n  \n  return childElements;\n}\n\nfunction insertLinks(section) {\n  const sectionRows = ['email', 'icons'];\n  const icons = ['instagram', 'facebook', 'github'];\n  sectionRows.forEach(row => {\n    let div = document.createElement('div');\n    div.classList.add('section-row');\n    div.setAttribute('id', row);\n\n    if (row === 'email') {\n      let emailInput = document.createElement('input');\n      emailInput.setAttribute('type', 'email');\n      emailInput.setAttribute('placeholder', 'Email Address');\n      let button = document.createElement('button');\n      button.textContent = 'Sign Up';\n      div.append(emailInput, button);\n    } else {\n      icons.forEach(icon => {\n        let iconContainer = document.createElement('div');\n        iconContainer.classList.add('contact-icon');\n        iconContainer.dataset.icon = icon;\n        div.appendChild(iconContainer);\n      })\n    }\n    section.appendChild(div);\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/hero.js":
/*!*********************!*\
  !*** ./src/hero.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadHero() {\n  const hero = document.createElement('div');\n  hero.setAttribute('id', 'hero');\n\n  const heroImage = document.createElement('img');\n  heroImage.setAttribute('id', 'hero-image-placeholder');\n  const title = document.createElement('h1');\n  const text = document.createElement('p');\n  title.textContent = 'Lorem ipsum dolor sit amet.';\n  text.textContent = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. \n    Corrupti, reiciendis magni inventore nesciunt unde tempora debitis adipisci \n    quasi dolorem deleniti amet numquam. Temporibus quod rem nulla repudiandae \n    blanditiis dolorem explicabo natus pariatur ullam, maxime aliquam modi \n    voluptas reprehenderit! Cumque, quas.`;\n  hero.appendChild(heroImage);\n  hero.appendChild(title);\n  hero.appendChild(text);\n\n  return hero;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHero);\n\n//# sourceURL=webpack://restaurant-page/./src/hero.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ \"./src/page-load.js\");\n\n(0,_page_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero */ \"./src/hero.js\");\n/* harmony import */ var _nav_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-bar */ \"./src/nav-bar.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nfunction pageLoad() {\n  const main = document.querySelector('#content');\n  const content = new Array;\n\n  const contentLeft = document.createElement('div');\n  contentLeft.setAttribute('id', 'content-left');\n  contentLeft.appendChild((0,_nav_bar__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n  contentLeft.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n  content.push(contentLeft);\n\n  const contentRight = document.createElement('div');\n  contentRight.setAttribute('id', 'content-right');\n  content.push(contentRight);\n\n  content.forEach(element => main.appendChild(element));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\n\n\n//# sourceURL=webpack://restaurant-page/./src/page-load.js?");

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