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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = "import Home from '../index.html';\nimport Styles from '../styles/main.css';\n\nfunction showSlide(n) {\n  let i;\n  const slides = document.getElementsByClassName('slide');\n  const dots = document.getElementsByClassName('dot');\n\n  if (n > slides.length) slideIndex = 1;\n  if (n < 1) slideIndex = slides.length;\n\n  for (i = 0; i < slides.length; i++) {\n    slides[i].style.display = 'none';\n  }\n\n  for (i = 0; i < dots.length; i++) {\n    dots[i].className = dots[i].className.replace(' active', '');\n  }\n\n  slides[slideIndex-1].style.display = 'block';\n  dots[slideIndex-1].className += ' active';\n}\n\nlet slideIndex = 1;\n\nshowSlide(slideIndex);\n\nfunction nextSlide() {\n  showSlide(slideIndex += 1);\n}\n\nfunction prevSlide() {\n  showSlide(slideIndex -= 1);\n}\n\nfunction currentSlide(n) {\n  showSlide(slideIndex = n);\n}\n\ndocument.getElementById('next').addEventListener('click', nextSlide);\ndocument.getElementById('prev').addEventListener('click', prevSlide);\nconst dots = document.getElementsByClassName('dot');\n\nfor (let j = 0; j < dots.length; j++) {\n  dots[j].addEventListener('click', function() {\n    currentSlide(j + 1);\n  });\n}\n"

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map