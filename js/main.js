document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar .nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === current) { link.classList.add('active'); link.setAttribute('aria-current','page'); }
    else { link.classList.remove('active'); link.removeAttribute('aria-current'); }
  });
  document.querySelectorAll('form[data-demo-form]').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const alertBox = form.querySelector('.form-feedback');
      if (alertBox) { alertBox.classList.remove('d-none'); alertBox.textContent = 'Thank you for reaching out. This demo form is ready to be connected to an email service or backend.'; }
      form.reset();
    });
  });
});
