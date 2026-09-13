/* ==========================================================================
   Joe's Motiv Painting Service - Main JavaScript
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function() {
  
  // 1. STICKY NAVBAR SCROLL
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // 2. MOBILE NAV DRAWER TOGGLE
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileOverlay = document.querySelector('.mobile-overlay');

  function openMobileNav() {
    if (mobileNav && mobileOverlay) {
      mobileNav.classList.add('active');
      mobileOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileNav() {
    if (mobileNav && mobileOverlay) {
      mobileNav.classList.remove('active');
      mobileOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (hamburger) {
    hamburger.addEventListener('click', openMobileNav);
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMobileNav);
  }

  // Close mobile nav when clicking a link inside it
  const mobileLinks = document.querySelectorAll('.mobile-nav a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  // 3. FAQ ACCORDION TOGGLES
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const faqItem = this.parentElement;
      const isActive = faqItem.classList.contains('active');

      // Close all other active FAQ items
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
        const answer = item.querySelector('.faq-answer');
        if (answer) answer.style.maxHeight = null;
      });

      // Toggle clicked item
      if (!isActive) {
        faqItem.classList.add('active');
        const answer = faqItem.querySelector('.faq-answer');
        if (answer) answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // 4. CONTACT FORM ESTIMATE SUBMISSION
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('contact-name')?.value || 'Customer';
      const phone = document.getElementById('contact-phone')?.value || '';
      const service = document.getElementById('contact-service')?.value || 'Painting Service';
      
      alert(`Thank you ${name}! Your free quote request for ${service} has been received. Joe's Motiv Painting will contact you shortly at ${phone}.`);
      
      contactForm.reset();
    });
  }

});
