document.addEventListener('DOMContentLoaded', () => {

  const subscriptionForms = document.querySelectorAll('.submit-form');
  const hamburgerBtn = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.test-mobile-nav');

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  subscriptionForms.forEach((form) => {

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const emailInput = e.target.querySelector('.submit-form__input');
      const formID = parseInt(form.dataset.formId);
      const data = new FormData(form);
      const email = data.get('email').trim();

      if (!validateEmail(email)) {
        emailInput.classList.add('validation-error');
        emailInput.placeholder = 'Not valid info';
        return;
      } else {
        emailInput.classList.remove('validation-error');
        emailInput.placeholder = 'Your email address';
        alert(JSON.stringify({
          formID,
          email,
        }));

        emailInput.value = '';
      }
    });

  });

  hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('is-active');
    mobileNav.classList.toggle('menu-hidden');
  });

});

