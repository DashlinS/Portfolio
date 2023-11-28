/*!
 * Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
 */
//
// Scripts
//

//Night Mode
document.querySelector('.btn-toggle').addEventListener('click', () => {
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  if (!document.body.className.includes('dark-mode')) {
    document.body.classList.toggle('dark-mode');
    headings.forEach((heading) => {
      heading.style.color = 'white';
    });
  } else {
    document.body.classList.remove('dark-mode');
    headings.forEach((heading) => {
      heading.style.color = '#343a40';
    });
  }
});

//Save to Nightmode preference to localStorage

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
