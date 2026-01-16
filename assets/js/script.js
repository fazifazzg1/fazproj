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

  // Form submission handler
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      if (!name || !email || !message) {
        alert('Пожалуйста, заполните все поля формы.');
        return;
      }
      // Construct mailto link
      const subject = encodeURIComponent('Заявка с сайта');
      const body = encodeURIComponent(`Имя: ${name}%0AEmail: ${email}%0AСообщение: ${message}`);
      const mailtoLink = `mailto:fazifazzg@yandex.ru?subject=${subject}&body=${body}`;
      // Open the default mail client
      window.location.href = mailtoLink;
      // Also show confirmation message
      setTimeout(() => {
        alert('Спасибо! Ваше сообщение подготовлено для отправки.');
      }, 500);
      contactForm.reset();
    });
  }
});