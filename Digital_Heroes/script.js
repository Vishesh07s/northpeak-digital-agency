// mobile nav toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // close menu on link click
  const allNavLinks = document.querySelectorAll('.nav-link');
  allNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

// contact form validation
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const formFeedback = document.getElementById('formFeedback');

// email regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // reset errors
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    formFeedback.className = 'form-feedback';
    formFeedback.style.display = 'none';

    nameInput.classList.remove('invalid');
    emailInput.classList.remove('invalid');
    messageInput.classList.remove('invalid');

    // validate name
    const nameValue = nameInput.value.trim();
    if (nameValue === '') {
      nameError.textContent = 'Please enter your full name.';
      nameInput.classList.add('invalid');
      isValid = false;
    } else if (nameValue.length < 2) {
      nameError.textContent = 'Name must be at least 2 characters long.';
      nameInput.classList.add('invalid');
      isValid = false;
    }

    // validate email
    const emailValue = emailInput.value.trim();
    if (emailValue === '') {
      emailError.textContent = 'Please enter your email address.';
      emailInput.classList.add('invalid');
      isValid = false;
    } else if (!emailRegex.test(emailValue)) {
      emailError.textContent = 'Please enter a valid email address.';
      emailInput.classList.add('invalid');
      isValid = false;
    }

    // validate message
    const messageValue = messageInput.value.trim();
    if (messageValue === '') {
      messageError.textContent = 'Please enter your project details.';
      messageInput.classList.add('invalid');
      isValid = false;
    } else if (messageValue.length < 10) {
      messageError.textContent = 'Message must be at least 10 characters long.';
      messageInput.classList.add('invalid');
      isValid = false;
    }

    // show result
    if (isValid) {
      formFeedback.textContent = '✓ Thank you! Your message has been sent successfully.';
      formFeedback.classList.add('success');
      formFeedback.style.display = 'block';
      contactForm.reset();
    } else {
      formFeedback.textContent = '✖ Please fix the errors above before submitting.';
      formFeedback.classList.add('error');
      formFeedback.style.display = 'block';
    }
  });
}
