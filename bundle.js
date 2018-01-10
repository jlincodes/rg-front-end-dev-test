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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_html__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_html__);

// import Styles from '../styles/main.css';

// image slider
function showSlide(n) {
  let i;
  const slides = document.getElementsByClassName('slide');
  const dots = document.getElementsByClassName('dot');

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }

  slides[slideIndex-1].style.display = 'block';
  dots[slideIndex-1].className += ' active';
}

let slideIndex = 1;

showSlide(slideIndex);

function nextSlide() {
  showSlide(slideIndex += 1);
}

function prevSlide() {
  showSlide(slideIndex -= 1);
}

function currentSlide(n) {
  showSlide(slideIndex = n);
}

document.getElementById('next').addEventListener('click', nextSlide);
document.getElementById('prev').addEventListener('click', prevSlide);

const dots = document.getElementsByClassName('dot');

for (let j = 0; j < dots.length; j++) {
  dots[j].addEventListener('click', function() {
    currentSlide(j + 1);
  });
}

// Modal

const contactBtn = document.getElementById('contact-button');
const modal = document.getElementById('modal');

contactBtn.addEventListener('click', function() {
  // console.log('open modal');
  modal.style.display = 'block';
});

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Image slide in effect

function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = window, args = arguments;
        console.log('context', context);
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
  sliderImages.forEach(sliderImage => {
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', function() {
    debounce(checkSlide(event));
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\">\n    <title>Rooster Grin Front End Dev Test</title>\n    <link href=\"https://fonts.googleapis.com/css?family=Roboto\" rel=\"stylesheet\">\n    <link rel=\"stylesheet\" href=\"styles/main.css\">\n  </head>\n  <body>\n\n    <!-- Logo banner -->\n    <div class='banner'>\n      <img src=\"docs/assets/igniter-logo-white.png\" alt=\"logo\">\n    </div>\n\n    <button class=\"contact-button\" id=\"contact-button\" type=\"button\" name=\"button\">\n      <img src=\"docs/assets/envelope-icon.svg\" alt=\"envelope-icon\">\n    </button>\n\n    <!-- Image slider -->\n\n    <div>\n      <div class=\"slider\">\n        <div class=\"hero-img-text-container\">\n          <h1 class='hero-img-text'>Lorem Ipsum Lorem Ipsum</h1>\n        </div>\n        <div class=\"hero-btn-container\">\n          <button class=\"hero-btn\" type=\"button\" name=\"button\">Button</button>\n        </div>\n        <div class=\"slide\">\n          <img src=\"docs/assets/hero-img.jpg\" alt=\"hero-img1\">\n        </div>\n        <div class=\"slide\">\n          <img src=\"docs/assets/hero-img-flipped.jpeg\" alt=\"hero-img-flipped\">\n        </div>\n        <div class=\"slide\">\n          <img src=\"docs/assets/hero-img-flipped-2.jpg\" alt=\"hero-img-flipped-2\">\n        </div>\n        <a id=\"prev\">&#10094;</a>\n        <a id=\"next\">&#10095;</a>\n      </div>\n\n      <div class=\"dots-container\">\n        <span class=\"dot\"></span>\n        <span class=\"dot\"></span>\n        <span class=\"dot\"></span>\n      </div>\n    </div>\n\n    <!-- pages -->\n\n    <section class=\"pages-container change-display\">\n        <div class=\"page pg-one\">\n          <img src=\"docs/assets/page-icon.svg\" alt=\"page\">\n          <p>Lorem ipsum dolor sit amet, ac dis arcu libero, pulvinar vitae lectus cursus.</p>\n        </div>\n        <div class=\"page pg-two\">\n          <img src=\"docs/assets/page-icon.svg\" alt=\"page\">\n          <p>Lorem ipsum dolor sit amet, ac dis arcu libero, pulvinar vitae lectus cursus.</p>\n        </div>\n        <div class=\"page pg-three\">\n          <img src=\"docs/assets/page-icon.svg\" alt=\"page\">\n          <p>Lorem ipsum dolor sit amet, ac dis arcu libero, pulvinar vitae lectus cursus.</p>\n        </div>\n        <div class=\"page pg-four\">\n          <img src=\"docs/assets/page-icon.svg\" alt=\"page\">\n          <p>Lorem ipsum dolor sit amet, ac dis arcu libero, pulvinar vitae lectus cursus.</p>\n        </div>\n    </section>\n\n    <!-- background block -->\n\n    <section class=\"background-block\">\n      <img src=\"docs/assets/slanted-gradient-background.svg\" alt=\"slanted-gradient-background\">\n      <h2>Lorem ipsum dolo sit amet, ac dis arcu libero, pulvinar vitae lectus cursus. Purus libero amet, at dui, tincidunt nunc vestibulum in justo, a faucibus ipsum hendrerit semper ipsum ac.</h2>\n    </section>\n\n\n    <div class=\"section-header-container\">\n      <h1 class=\"section-header-bold\">Lorem</h1>&nbsp;\n      <h1 class=\"section-header\">ipsum</h1>\n    </div>\n\n    <div class=\"desc-container change-display\">\n        <p class=\"desc\">\n          Loren ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitiation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n        </p>\n      <div class=\"desc-button\">\n        <button type=\"button\" name=\"button\">Button</button>\n      </div>\n    </div>\n\n    <!-- Stats section -->\n\n    <div class=\"stats change-display\">\n\n        <div class=\"stat stat-1\">\n          <!-- <div class=\"stat\"> -->\n            <h1 class=\"percentages\">240&#37;</h1>\n            <h4>Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum dolor</h4>\n          <!-- </div> -->\n        </div>\n        <div class=\"stat stat-2\">\n          <!-- <div class=\"stat\"> -->\n            <h1 class=\"percentages\">105&#37;</h1>\n            <h4 class=\"stat-desc\">Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum dolor</h4>\n          <!-- </div> -->\n        </div>\n        <div class=\"stat stat-3\">\n          <!-- <div class=\"stat\"> -->\n            <h1 class=\"percentages\">159&#37;</h1>\n            <h4 class=\"stat-desc\">Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum dolor</h4>\n          <!-- </div> -->\n        </div>\n\n    </div>\n\n    <!-- Examples -->\n\n    <div class=\"section-header-container\">\n      <h1 class=\"section-header-bold\">Lorem</h1>&nbsp;\n      <h1 class=\"section-header\">ipsum</h1>\n    </div>\n\n    <div class=\"checkerboard-grid change-display\">\n\n      <div class=\"text-1\">\n        <h2>Lorem ipsum dolor sit amet</h2>\n        <h3>Lorem ipsum dolor sit amet lorem</h3>\n        <p>\n          Lorem ipsum dolor sit amet, ac dis arcu libero, pulvinar vitae lectus cursus. Purus libero amet, at dui, tincidunt nunc vestibulum in justo, a faucibus ipsum hendrerit semper ipsum. Lorem ipsum dolor sit amet, ac dis arcu libero, pulvinar vitae lectus cursus. Purus libero amet, at dui, tincidunt nunc vestibulum in justo, a faucibus ipsum hendrerit semper ipsum ac.\n        </p>\n      </div>\n\n      <div class=\"img-1\">\n        <img class=\"align-right slide-in\" src=\"docs/assets/img1.jpg\" alt=\"img1\">\n      </div>\n\n      <div class=\"img-2\">\n        <img class=\"align-left slide-in\" src=\"docs/assets/img2.jpg\" alt=\"img2\">\n      </div>\n\n      <div class=\"text-2\">\n        <h2>Lorem ipsum dolor sit amet</h2>\n        <h3>Lorem ipsum dolor sit amet lorem</h3>\n        <p>\n          Lorem ipsum dolor sit amet, ac dis arcu libero, pulvinar vitae lectus cursus. Purus libero amet, at dui, tincidunt nunc vestibulum in justo, a faucibus ipsum hendrerit semper ipsum. Lorem ipsum dolor sit amet, ac dis arcu libero, pulvinar vitae lectus cursus. Purus libero amet, at dui, tincidunt nunc vestibulum in justo, a faucibus ipsum hendrerit semper ipsum ac.\n        </p>\n      </div>\n\n    </div>\n\n    <!-- Modal form -->\n\n    <div id=\"modal\" class=\"modal\">\n      <div class=\"form-container\">\n        <form class=\"form\" action=\"index.html\" method=\"post\">\n          <h3>lorem ipsum</h3>\n\n          <div class=\"input-row\">\n            <label>Your Name\n            </label>\n            <input type=\"text\">\n          </div>\n\n          <div class=\"input-row form-row\">\n              <label>Your Email\n                <input class=\"email-input\" type=\"text\">\n              </label>\n              <label>Phone Number\n                <input class=\"phone-input\" type=\"text\">\n              </label>\n          </div>\n\n          <div class=\"input-row\">\n            <label>Message\n              <textarea name=\"message\" rows=\"4\" cols=\"50\"></textarea>\n            </label>\n          </div>\n\n\n          <div class=\"input-row form-button-container\">\n            <button type=\"button\" name=\"button\">Button</button>\n          </div>\n\n        </form>\n      </div>\n    </div>\n\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n    <script type=\"text/javascript\" src=\"bundle.js\"></script>\n  </body>\n</html>\n"

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map