// app.js
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

function toggleNav() {
  nav.classList.toggle('nav-active');

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    }
  });

  burger.classList.toggle('toggle');
}

function closeNav() {
  nav.classList.remove('nav-active');

  navLinks.forEach((link) => {
    link.style.animation = '';
  });

  burger.classList.remove('toggle');
}

burger.addEventListener('click', toggleNav);

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    closeNav();
  });
});

document.addEventListener('click', (event) => {
  if (!nav.contains(event.target) && !burger.contains(event.target)) {
    closeNav();
  }
});