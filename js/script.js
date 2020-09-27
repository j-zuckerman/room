let slideIndex = 1;
const slides = document.getElementsByClassName('slide');
showSlides(slideIndex);

function nextSlide(n) {
  showSlides((slideIndex += n));
}

function showSlides(index) {
  console.log(index);
  if (index < 1) slideIndex = slides.length;
  else if (index > slides.length) slideIndex = 1;
  else slideIndex = index;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex - 1].style.display = 'flex';
}

let mainNav = document.getElementById('main-nav');
let navBarToggle = document.getElementById('navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});
