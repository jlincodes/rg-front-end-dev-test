import Home from '../index.html';
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
