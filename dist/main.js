/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
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
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _populatePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./populatePage */ \"./src/populatePage.js\");\n/* harmony import */ var _showMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showMenu */ \"./src/showMenu.js\");\n/* harmony import */ var _showContact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showContact */ \"./src/showContact.js\");\n\n\n\n\nwindow.onLoad = (0,_populatePage__WEBPACK_IMPORTED_MODULE_0__.default)();\n\nlet toggleMenu = document.getElementById(\"menu\");\nlet toggleContact = document.getElementById(\"contact\");\nlet infoDiv = document.getElementById(\"infodiv\");\n\ntoggleMenu.addEventListener(\"click\", function () {\n\tinfoDiv.removeChild(infoDiv.childNodes[1]);\n\t(0,_showMenu__WEBPACK_IMPORTED_MODULE_1__.default)();\n});\n\ntoggleContact.addEventListener(\"click\", function () {\n\tinfoDiv.removeChild(infoDiv.childNodes[1]);\n\t(0,_showContact__WEBPACK_IMPORTED_MODULE_2__.default)();\n});\n\n/*\nwindow.onLoad = populatePage();\n\nlet toggleMenu = document.getElementById(\"menu\");\nlet toggleContact = document.getElementById(\"contact\");\nlet infoDiv = document.getElementById(\"infodiv\");\n\ntoggleMenu.addEventListener(\"click\", function () {\n\tinfoDiv.removeChild(infoDiv.childNodes[1]);\n\tshowMenu();\n});\n\ntoggleContact.addEventListener(\"click\", function () {\n\tinfoDiv.removeChild(infoDiv.childNodes[1]);\n\tshowContact();\n});\n*/\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/populatePage.js":
/*!*****************************!*\
  !*** ./src/populatePage.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst populatePage = () => {\n\tdocument.body.style.margin = \"0\";\n\tdocument.body.style.padding = \"0\";\n\tdocument.body.style.height = \"100vh\";\n\tdocument.body.style.fontSize = \"16px\";\n\tdocument.body.style.boxSizing = \"border-box\";\n\n\tdocument.body.style.backgroundImage =\n\t\t\"url('https://images.pexels.com/photos/2615407/pexels-photo-2615407.jpeg')\";\n\tdocument.body.style.backgroundSize = \"100% auto\";\n\tdocument.body.style.backgroundRepeat = \"no-repeat\";\n\tdocument.body.style.backgroundPosition = \"center bottom 30%\";\n\n\tconst contentDiv = document.getElementById(\"content\");\n\tconst infoDiv = document.createElement(\"div\");\n\tconst header = document.createElement(\"header\");\n\tconst blurb = document.createElement(\"article\");\n\tcontentDiv.appendChild(infoDiv);\n\tinfoDiv.appendChild(header);\n\tinfoDiv.appendChild(blurb);\n\n\tcontentDiv.id = \"contentdiv\";\n\tinfoDiv.id = \"infodiv\";\n\theader.id = \"header\";\n\tblurb.id = \"blurb\";\n\n\tcontentDiv.style.clear = \"both\";\n\n\tcontentDiv.style.position = \"relative\";\n\tcontentDiv.style.zIndex = \"10\";\n\tcontentDiv.style.height = \"calc(100% - 2.3rem)\";\n\tcontentDiv.style.marginBottom = \"2rem\";\n\tinfoDiv.style.backgroundColor = \"hsla(0, 0%, 0%, 0.5)\";\n\tinfoDiv.style.paddingTop = \"2.5rem\";\n\tinfoDiv.style.paddingBottom = \"1rem\";\n\tinfoDiv.style.width = \"100%\";\n\n\theader.style.fontFamily = \"Staatliches\";\n\theader.style.position = \"relative\";\n\theader.style.color = \"white\";\n\theader.style.fontSize = \"5rem\";\n\theader.style.textAlign = \"center\";\n\theader.style.overflow = \"hidden\";\n\theader.style.height = \"auto\";\n\n\tblurb.style.fontFamily = \"Raleway\";\n\tblurb.style.fontWeight = \"500\";\n\tblurb.style.color = \"white\";\n\tblurb.style.fontSize = \"1.2rem\";\n\tblurb.style.textAlign = \"center\";\n\n\theader.textContent = \"leaf garden cafe\";\n\tblurb.innerHTML =\n\t\t\"ultra healthy power salads overflowing<br>with interesting ingredients sourced from local farms\";\n\n\tconst tabDiv = document.createElement(\"div\");\n\tconst menuTab = document.createElement(\"button\");\n\tconst menuTabText = document.createTextNode(\"menu\");\n\tconst contactTab = document.createElement(\"button\");\n\tconst contactTabText = document.createTextNode(\"contact\");\n\tdocument.body.appendChild(tabDiv);\n\tmenuTab.appendChild(menuTabText);\n\ttabDiv.appendChild(menuTab);\n\tcontactTab.appendChild(contactTabText);\n\ttabDiv.appendChild(contactTab);\n\n\ttabDiv.style.display = \"inline-block\";\n\ttabDiv.style.backgroundColor = \"hsla(0, 0%, 0%, 0.5)\";\n\ttabDiv.style.zIndex = \"20\";\n\ttabDiv.style.position = \"fixed\";\n\ttabDiv.style.bottom = \"0\";\n\ttabDiv.style.width = \"100%\";\n\ttabDiv.style.textAlign = \"center\";\n\ttabDiv.id = \"tabdiv\";\n\n\tmenuTab.style.border = \"none\";\n\tmenuTab.style.background = \"none\";\n\tmenuTab.style.fontFamily = \"Staatliches\";\n\tmenuTab.style.fontSize = \"1.5rem\";\n\tmenuTab.style.color = \"white\";\n\tmenuTab.style.padding = \"0.45rem 1rem 0 1rem\";\n\tmenuTab.style.cursor = \"pointer\";\n\tmenuTab.id = \"menu\";\n\n\tcontactTab.style.border = \"none\";\n\tcontactTab.style.background = \"none\";\n\tcontactTab.style.fontFamily = \"Staatliches\";\n\tcontactTab.style.fontSize = \"1.5rem\";\n\tcontactTab.style.color = \"white\";\n\tcontactTab.style.padding = \"0.45rem 1rem 0 1rem\";\n\tcontactTab.style.cursor = \"pointer\";\n\tcontactTab.id = \"contact\";\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (populatePage);\n\n\n//# sourceURL=webpack://restaurant-page/./src/populatePage.js?");

/***/ }),

/***/ "./src/showContact.js":
/*!****************************!*\
  !*** ./src/showContact.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst showContact = () => {\n\tlet infoDiv = document.getElementById(\"infodiv\");\n\tlet menuTab = document.getElementById(\"menu\");\n\tlet tabDiv = document.getElementById(\"tabdiv\");\n\tlet contentDiv = document.getElementById(\"contentdiv\");\n\tconst contactDiv = document.createElement(\"div\");\n\tconst contactContent = document.createElement(\"div\");\n\tinfoDiv.appendChild(contactDiv);\n\tcontactDiv.appendChild(contactContent);\n\n\tcontactDiv.id = \"contactdiv\";\n\n\tcontentDiv.style.backgroundColor = \"hsla(0, 0%, 0%, 0.6)\";\n\tinfoDiv.style.backgroundColor = \"hsla(0, 0%, 0%, 0)\";\n\n\tcontentDiv.style.zIndex = \"10\";\n\tcontentDiv.style.position = \"relative\";\n\tinfoDiv.style.top = \"0\";\n\tinfoDiv.style.paddingTop = \"2.5rem\";\n\n\tcontactDiv.style.display = \"flex\";\n\tcontactDiv.style.width = \"100%\";\n\tcontactDiv.style.height = \"72%\";\n\tcontactDiv.style.position = \"fixed\";\n\tcontactDiv.style.bottom = \"2.3rem\";\n\tcontactDiv.style.justifyContent = \"center\";\n\tcontactDiv.style.alignItems = \"center\";\n\tcontactDiv.style.backgroundColor = \"transparent\";\n\n\tcontactContent.style.backgroundColor = \"white\";\n\tcontactContent.style.width = \"30%\";\n\tcontactContent.style.height = \"60%\";\n\tcontactContent.style.overflow = \"scroll\";\n\tcontactContent.style.fontFamily = \"Staatliches\";\n\tcontactContent.style.color = \"hsla(0, 0%, 20%, 1)\";\n\tcontactContent.style.fontSize = \"2rem\";\n\tcontactContent.style.textAlign = \"center\";\n\tcontactContent.style.padding = \"1rem 6rem 1rem 6rem\";\n\tcontactContent.innerHTML =\n\t\t\"location<br><p style=font-family:raleway;font-size:1.2rem>15 Shropshire Ln<br>Milbridge, ME 04658<br>(222) 214-3590</p><img src='media/map.jpg'>\";\n\tlet contactTab = document.getElementById(\"contact\");\n\ttabDiv.style.backgroundColor = \"hsla(0, 0%, 0%, 0)\";\n\tcontactTab.style.backgroundColor = \"hsla(0, 0%, 0%, 0.7)\";\n\tmenuTab.style.backgroundColor = \"hsla(0, 0%, 0%, 0)\";\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showContact);\n\n\n//# sourceURL=webpack://restaurant-page/./src/showContact.js?");

/***/ }),

/***/ "./src/showMenu.js":
/*!*************************!*\
  !*** ./src/showMenu.js ***!
  \*************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst showMenu = () => {\n\tlet infoDiv = document.getElementById(\"infodiv\");\n\tlet contactTab = document.getElementById(\"contact\");\n\tlet tabDiv = document.getElementById(\"tabdiv\");\n\tlet contentDiv = document.getElementById(\"contentdiv\");\n\tconst menuDiv = document.createElement(\"div\");\n\tconst menuContent = document.createElement(\"div\");\n\tinfoDiv.appendChild(menuDiv);\n\tmenuDiv.appendChild(menuContent);\n\n\tmenuDiv.id = \"menudiv\";\n\n\tcontentDiv.style.backgroundColor = \"hsla(0, 0%, 0%, 0.6)\";\n\tinfoDiv.style.backgroundColor = \"hsla(0, 0%, 0%, 0)\";\n\n\tcontentDiv.style.zIndex = \"10\";\n\tcontentDiv.style.position = \"relative\";\n\tinfoDiv.style.top = \"0\";\n\tinfoDiv.style.paddingTop = \"2.5rem\";\n\n\tmenuDiv.style.display = \"flex\";\n\tmenuDiv.style.width = \"100%\";\n\tmenuDiv.style.height = \"72%\";\n\tmenuDiv.style.position = \"fixed\";\n\tmenuDiv.style.bottom = \"2.3rem\";\n\tmenuDiv.style.justifyContent = \"center\";\n\tmenuDiv.style.alignItems = \"center\";\n\tmenuDiv.style.backgroundColor = \"transparent\";\n\n\tmenuContent.style.backgroundColor = \"white\";\n\tmenuContent.style.width = \"30%\";\n\tmenuContent.style.height = \"60%\";\n\tmenuContent.style.overflow = \"scroll\";\n\tmenuContent.style.fontFamily = \"Staatliches\";\n\tmenuContent.style.color = \"hsla(0, 0%, 20%, 1)\";\n\tmenuContent.style.fontSize = \"2rem\";\n\tmenuContent.style.textAlign = \"center\";\n\tmenuContent.style.padding = \"1rem 6rem 1rem 6rem\";\n\tmenuContent.innerHTML =\n\t\t\"dinner salads<br><br><p style='font-size:1.2rem'>the standard</p><p style='font-family:raleway;font-size:0.8rem'>garbanzo beans, adzuki beans, alfalfa sprouts, sunflower seeds & heirloom tomatoes on a bed of leafy romaine & tossed in a lemon herb vinaigrette</p><br><p style='font-size:1.2rem'>the chef</p><p style='font-family:raleway;font-size:0.8rem'>hard-boiled egg, heirloom tomato, hemp hearts, artichoke hearts & avocado on a bed of spring mix & tossed in a creamy poppyseed dressing</p><br><p style='font-size:1.2rem'>the taco</p><p style='font-family:raleway;font-size:0.8rem'>black beans, kidney beans, white corn, flax seeds & gaucamole on a bed of romaine hearts & tossed in a zesty southwest vinaigrette</p>\";\n\n\tlet menuTab = document.getElementById(\"menu\");\n\ttabDiv.style.backgroundColor = \"hsla(0, 0%, 0%, 0)\";\n\tmenuTab.style.backgroundColor = \"hsla(0, 0%, 0%, 0.7)\";\n\tcontactTab.style.backgroundColor = \"hsla(0, 0%, 0%, 0)\";\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showMenu);\n\n\n//# sourceURL=webpack://restaurant-page/./src/showMenu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;