import Home from '../index.html';
import Styles from '../styles/main.css';

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


const contactBtn = document.getElementById('contact-button');
const modal = document.getElementById('modal');

contactBtn.addEventListener('click', function() {
  console.log('open modal');
  modal.style.display = 'block';
});

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
