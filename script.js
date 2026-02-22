// ===== Mobile Nav Toggle =====
const navbar   = document.getElementById('navbar');
const toggle   = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

if (toggle) {
  toggle.addEventListener('click', () => {
    navbar.classList.toggle('navbar--open');
    toggle.setAttribute('aria-expanded', navbar.classList.contains('navbar--open'));
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('navbar--open');
    });
  });

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
      navbar.classList.remove('navbar--open');
    }
  });
}

// ===== Contact Form =====
const form    = document.getElementById('contact-form');
const success = document.getElementById('form-success');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Basic required-field validation
    const required = form.querySelectorAll('[required]');
    let valid = true;
    required.forEach(field => {
      if (!field.value.trim()) {
        field.style.borderColor = '#c0392b';
        valid = false;
      } else {
        field.style.borderColor = '';
      }
    });

    if (!valid) return;

    // Simulate submission (replace with real backend/API call)
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sending…';
    btn.disabled = true;

    setTimeout(() => {
      form.reset();
      btn.textContent = 'Send My Request';
      btn.disabled = false;
      if (success) success.style.display = 'block';
    }, 1200);
  });

  // Reset field error highlight on input
  form.querySelectorAll('[required]').forEach(field => {
    field.addEventListener('input', () => {
      field.style.borderColor = '';
    });
  });
}
