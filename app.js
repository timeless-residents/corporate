// app.js
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

function toggleNav() {
  document.body.classList.toggle('nav-active');
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
  document.body.classList.remove('nav-active');
  nav.classList.remove('nav-active');
  navLinks.forEach((link) => {
    link.style.animation = '';
  });
  burger.classList.remove('toggle');
}

burger.addEventListener('click', toggleNav);

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = targetSection.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    
    closeNav();
  });
});

document.addEventListener('click', (event) => {
  if (!nav.contains(event.target) && !burger.contains(event.target)) {
    closeNav();
  }
});