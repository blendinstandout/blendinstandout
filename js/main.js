/* =====================================================
   BLEND IN STAND OUT — Main JavaScript
   ===================================================== */

document.addEventListener('DOMContentLoaded', function () {

  // --- Mobile nav toggle ---
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileNav = document.querySelector('.nav__mobile');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
    });

    // Close on link click
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
      });
    });
  }

  // --- Active nav link ---
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a, .nav__mobile a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // --- Fade-in on scroll ---
  const fadeEls = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    fadeEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: just show everything
    fadeEls.forEach(function (el) { el.classList.add('visible'); });
  }

  // --- FAQ accordion ---
  document.querySelectorAll('.faq__item').forEach(function (item) {
    const question = item.querySelector('.faq__question');
    if (question) {
      question.addEventListener('click', function () {
        const isOpen = item.classList.contains('open');
        // Close all
        document.querySelectorAll('.faq__item').forEach(function (i) {
          i.classList.remove('open');
        });
        // Toggle this one
        if (!isOpen) item.classList.add('open');
      });
    }
  });

  // --- Smooth nav background on scroll ---
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 20) {
        nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
      } else {
        nav.style.boxShadow = 'none';
      }
    });
  }

});
