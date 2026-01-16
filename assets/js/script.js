// Script for responsive navigation and simple interactions
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navList = document.querySelector('.nav-list');
  const yearSpan = document.getElementById('year');

  // Toggle mobile navigation
  hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
    hamburger.classList.toggle('open');
  });

  // Update footer year
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Simple form submission handler
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Collect data
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      // Basic validation
      if (!name || !email || !message) {
        alert('Пожалуйста, заполните все поля формы.');
        return;
      }
      // Show simple feedback; real implementation would send data to server
      alert('Спасибо! Ваше сообщение отправлено.');
      contactForm.reset();
    });
  }
});