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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadContact() {\n  const contentLeft = document.querySelector('#content-left');\n  let contact = document.createElement('div');\n  contact.setAttribute('id', 'contact');\n\n  let ids = ['location', 'details', 'hours', 'links'];\n  let cards = new Array;\n  for (let i = 0; i < ids.length; i++) {\n    const card = document.createElement('div');\n    card.classList.add('contact-section');\n    card.setAttribute('id', ids[i]);\n    contact.appendChild(card);\n    cards.push(card);\n  }\n  insertContent(cards);\n\n  contentLeft.appendChild(contact);\n}\n\nfunction insertContent(sections) {\n  for (let i = 0; i < sections.length; i++) {\n    let header = document.createElement('h1');\n    header.classList.add('contact-header');\n    let childElements = new Array;\n\n      switch (sections[i].id) {\n        case 'location':\n          const p = document.createElement('p');\n          header.textContent = 'Location';\n          p.textContent = '8th Floor, If Building, Else Street, Hong Kong';\n          childElements.push(header, p);\n          break;\n        case 'details':\n          header.textContent = 'Contact';\n          childElements.push(header);\n          const content = ['reservations@emailservice.com', '+852 8888 8888'];\n          for (let i = 0; i < content.length; i++) {\n            const p = document.createElement('p');\n            p.textContent = content[i];\n            childElements.push(p);\n          }\n          break;\n        case 'hours':\n          header.textContent = 'Hours';\n          childElements.push(header);\n          childElements = childElements.concat(insertOpeningHours());\n          break;\n        case 'links':\n          insertLinks(sections[i]);\n          break;\n      }\n      childElements.forEach(element => sections[i].appendChild(element));\n  }\n}\n\nfunction insertOpeningHours() {\n  const text = ['Lunch:', '12 - 3pm', 'Dinner:', '6 - 11pm'];\n  let childElements = new Array;\n  for (let i = 0; i < text.length; i++) {\n    const p = document.createElement('p');\n    p.textContent = text[i];\n    if ([i] % 2 === 0) {\n      p.classList.add('contact-subheader');\n    }\n    childElements.push(p);\n  }\n  \n  return childElements;\n}\n\nfunction insertLinks(section) {\n  const sectionRows = ['email', 'icons'];\n  const icons = ['instagram', 'facebook', 'github'];\n  sectionRows.forEach(row => {\n    let div = document.createElement('div');\n    div.classList.add('section-row');\n    div.setAttribute('id', row);\n\n    if (row === 'email') {\n      let emailInput = document.createElement('input');\n      emailInput.setAttribute('type', 'email');\n      emailInput.setAttribute('placeholder', 'Email Address');\n      let button = document.createElement('button');\n      button.textContent = 'Sign Up';\n      div.append(emailInput, button);\n    } else {\n      for (let i = 0; i < icons.length; i++) {\n        let iconContainer = document.createElement('a');\n        iconContainer.classList.add('contact-icon');\n        iconContainer.dataset.icon = icons[i];\n\n        if (icons[i] === 'github') {\n          iconContainer.setAttribute('href', 'https://github.com/rchrd-0');\n          iconContainer.setAttribute('target', '_blank');\n        }\n\n        div.appendChild(iconContainer);\n      }\n    }\n    \n    section.appendChild(div);\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/hero.js":
/*!*********************!*\
  !*** ./src/hero.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadHero() {\n  const contentLeft = document.querySelector('#content-left');\n  const hero = document.createElement('div');\n  hero.setAttribute('id', 'hero');\n\n  const heroSplash = document.createElement('div');\n  heroSplash.setAttribute('id', 'hero-splash');\n  heroSplash.append(loadHeaders());\n  const text = document.createElement('p');\n  text.setAttribute('id', 'hero-desc');\n  text.textContent = `If; else is an entirely made up restaurant. Inspired by\n    street food, cozy interiors, ES6 modules, penguins, DOM and the need to pad this message out.`\n  hero.appendChild(heroSplash);\n  hero.appendChild(text);\n\n  contentLeft.appendChild(hero);\n}\n\nconst loadHeaders = () => {\n  const container = document.createElement('div');\n  container.classList.add('header-container');\n  const lines = ['Hypothetical restaurant;', 'nonsense menu;', 'good vibes all round;'];\n  for (let i = 0; i < lines.length; i++) {\n    const title = document.createElement('h1');\n    title.classList.add('hero-header');\n    if (i === 0) {\n      title.classList.add('text-primary-1');\n    } else if (i === 1) {\n      title.classList.add('text-primary-2');\n    }\n    title.textContent = lines[i];\n    container.append(title);\n  }\n\n  return container;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHero);\n\n//# sourceURL=webpack://restaurant-page/./src/hero.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ \"./src/page-load.js\");\n/* harmony import */ var _nav_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-bar */ \"./src/nav-bar.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hero */ \"./src/hero.js\");\n\n\n\n\n\n\nfunction initialize() {\n  (0,_page_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  (0,_hero__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n  const navBar = document.querySelector('#nav-bar')\n  const navLinks = navBar.querySelectorAll('a');\n  navLinks.forEach(link => {\n    link.addEventListener('click', (() => loadTab(link.dataset.page)));\n  })\n}\n\nfunction loadTab(tab) {\n  const contentLeft = document.querySelector('#content-left');\n  while(contentLeft.childElementCount > 1) {\n    contentLeft.removeChild(contentLeft.lastChild);\n  }\n  (0,_nav_bar__WEBPACK_IMPORTED_MODULE_1__.toggleNavClass)(tab);\n  switch (tab) {\n    default: \n    case 'home':\n      (0,_hero__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n      break;\n    case 'menu':\n      (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n      break;\n    case 'contact':\n      (0,_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n      break;\n  }\n}\n\n// Event listeners\nwindow.addEventListener('load', initialize);\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadMenu() {\n  const contentLeft = document.querySelector('#content-left');\n  const menu = document.createElement('div');\n  menu.setAttribute('id', 'menu');\n  const heading = document.createElement('h1');\n  heading.textContent = 'Menu';\n  menu.appendChild(heading);\n  \n  const menuSections = ['meat', 'seafood', 'salad', 'sides'];\n  for (let i = 0; i < menuSections.length; i++) {\n    const container = document.createElement('div');\n    container.classList.add('menu-section');\n    container.dataset.menu = menuSections[i];\n    const sectionHeader = document.createElement('h2');\n    let textColor = (i % 2 === 0) ? 'text-primary-1' : 'text-primary-2';\n    sectionHeader.classList.add(textColor);\n    sectionHeader.textContent = menuSections[i].toUpperCase();\n    container.appendChild(sectionHeader);\n    let content = getContent(container);\n    content.forEach(item => container.appendChild(item));\n    menu.appendChild(container);\n\n  }\n  contentLeft.appendChild(menu);\n}\n\nfunction getContent(div) {\n  const allContent = {\n    meat: [\n      'Hong Kong-style sand ginger chicken, house-made scallion sauce',\n      'Lamb shank, laccha onion',\n      'Roast duck, hoisin sauce, steamed pancakes',\n      'Australian Wagyu sirloin, rice noodles, seaweed butter, salty lime'\n    ],\n    seafood: [\n      'Tiger prawn noodles, miso butter sauce, dried shrimp roe',\n      'Eel on crispy sushi rice & pickles',\n      'Cobia, sapphire chutney, lime caviar',\n      'Grilled lobster, green mango, pineapple & lime vinaigrette'\n    ],\n    salad: [\n      'Shredded Mushrooms, cold noodles, cucumber, chilli oil, sesame dressing',\n      'Shredded chicken salad, cabbage, rau ram, prawn chips, pickles',\n      'Pork belly, pickles, sichuan peppercorn oil'\n    ],\n    sides: [\n      'Chicken wings, lemongrass, red chilli, salt, pepper',\n      'Crispy eggplant, mixed herbs, ginger glaze',\n      'Shrimp tacos, lime garlic cabbage, mango salsa, cilantro, onions'\n    ]\n  }\n  const keys = Object.keys(allContent);\n  let section = keys.filter(key => key === div.dataset.menu).pop();\n\n  let pArray = new Array;\n  allContent[section].forEach(item => {\n    const p = document.createElement('p');\n    p.textContent = item;\n    pArray.push(p);\n  })\n  \n  return pArray;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/nav-bar.js":
/*!************************!*\
  !*** ./src/nav-bar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadNavBar\": () => (/* binding */ loadNavBar),\n/* harmony export */   \"toggleNavClass\": () => (/* binding */ toggleNavClass)\n/* harmony export */ });\nfunction loadNavBar() {\n  const contentLeft = document.querySelector('#content-left');\n  const navBarContainer = document.createElement('div');\n  const childElements = new Array;\n  navBarContainer.setAttribute('id', 'nav-bar');\n\n  const goHome = document.createElement('a');\n  goHome.setAttribute('href', '#');\n  goHome.dataset.page = 'home';\n  const logo = document.createElement('div');\n  logo.setAttribute('id', 'logo');\n  goHome.appendChild(logo);\n\n  \n  const list = document.createElement('ul');\n  const links = ['Menu', 'Contact'];\n  for (let i = 0; i < links.length; i++) {\n    let item = document.createElement('li');\n    let anchor = document.createElement('a');\n    anchor.textContent = links[i];\n    anchor.dataset.page = links[i].toLowerCase();\n    anchor.setAttribute('href', '#');\n    anchor.classList.add('sans-serif');\n    item.appendChild(anchor);\n    list.appendChild(item);\n  }\n  childElements.push(goHome, list);\n  childElements.forEach(element => navBarContainer.appendChild(element));\n\n  contentLeft.appendChild(navBarContainer);\n}\n\nfunction toggleNavClass(page) {\n  const navBar = document.querySelector('ul');\n  const links = navBar.querySelectorAll('a');\n\n  links.forEach(link => {\n    if (link.dataset.page === page) {\n      link.classList.add('nav-bar-active');\n    } else {\n      link.classList.remove('nav-bar-active');\n    }\n  })\n\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/nav-bar.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _nav_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-bar */ \"./src/nav-bar.js\");\n\n\nfunction pageLoad() {\n  const main = document.querySelector('#content');\n  const content = new Array;\n\n  const contentLeft = document.createElement('div');\n  contentLeft.setAttribute('id', 'content-left');\n  content.push(contentLeft);\n\n  const contentRight = document.createElement('div');\n  contentRight.setAttribute('id', 'content-right');\n  content.push(contentRight);\n\n  content.forEach(element => main.appendChild(element));\n  (0,_nav_bar__WEBPACK_IMPORTED_MODULE_0__.loadNavBar)();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\n\n\n//# sourceURL=webpack://restaurant-page/./src/page-load.js?");

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