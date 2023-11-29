/*!
 * Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
 */
//
// Scripts
//
const headings = document.querySelectorAll('h1, h2, h3, h5');
const subHeading = document.querySelectorAll('.subheading');
const btnToggle = document.querySelector('.btn-toggle');
let theme;

//Save to Night-mode preference to localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme == 'dark') {
  darkTheme(headings, subHeading);
}

//Change theme event
btnToggle.addEventListener('click', () => {
  if (!document.body.className.includes('dark-mode')) {
    darkTheme(headings, subHeading);
    theme = 'dark';
  } else {
    lightTheme(headings, subHeading);
    theme = 'light';
  }

  localStorage.setItem('theme', theme);
});

//Dark theme
function darkTheme(headings, subHeading) {
  document.body.classList.toggle('dark-mode');

  headings.forEach((heading) => {
    heading.style.color = 'white';
  });

  subHeading.forEach((heading) => {
    heading.classList.add('subheadingColor');
  });
}

//Light theme
function lightTheme(headings, subHeading) {
  document.body.classList.remove('dark-mode');

  headings.forEach((heading) => {
    heading.style.color = '#343a40';
  });

  subHeading.forEach((heading) => {
    heading.classList.remove('subheadingColor');
  });
}

window.addEventListener('DOMContentLoaded', (event) => {
  // Activate Bootstrap scrollspy on the main nav element
  const sideNav = document.body.querySelector('#sideNav');
  if (sideNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#sideNav',
      rootMargin: '0px 0px -40%',
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });
});
