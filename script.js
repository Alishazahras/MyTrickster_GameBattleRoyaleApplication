let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-icon').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}


const slides = document.querySelectorAll('.video-slide');


const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function changeSlide(index) {

    slides.forEach(slide => {
        slide.classList.remove('active-slides');
    });
    dots.forEach(dot => {
        dot.classList.remove('active');
    });

    slides[index].classList.add('active-slides');
    dots[index].classList.add('active');

    currentIndex = index;

    
}

function autoSlide() {
    changeSlide((currentIndex + 1) % slides.length);
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        console.log(index)
        changeSlide(index);
        clearInterval(autoSlideTimer);
        autoSlideTimer = setInterval(autoSlide, 5000);
    });
});

let autoSlideTimer = setInterval(autoSlide, 5000);


// Check signup Error
document.getElementById('signup-form').addEventListener('submit', function(event) {
    let isValid = true;
  
    // Email Validation
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    if (!validateEmail(emailInput.value)) {
      emailError.textContent = 'Invalid email format';
      isValid = false;
    } else {
      emailError.textContent = '';
    }
  
    // Password Validation
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('password-error');
    if (passwordInput.value.length < 6) {
      passwordError.textContent = 'Password must be at least 6 characters';
      isValid = false;
    } else {
      passwordError.textContent = '';
    }
  
    // Confirm Password Validation
    const confirmPasswordInput = document.getElementById('confirm-password');
    const confirmPasswordError = document.getElementById('confirm-password-error');
    if (confirmPasswordInput.value !== passwordInput.value) {
      confirmPasswordError.textContent = 'Passwords do not match';
      isValid = false;
    } else {
      confirmPasswordError.textContent = '';
    }
  
    // Age Validation
    const ageInput = document.getElementById('age');
    const ageError = document.getElementById('age-error');
    if (isNaN(ageInput.value) || ageInput.value < 18) {
      ageError.textContent = 'Please enter a valid age (18 or older)';
      isValid = false;
    } else {
      ageError.textContent = '';
    }
  
    // Gender Validation
    const genderInput = document.getElementById('gender');
    const genderError = document.getElementById('gender-error');
    if (genderInput.value === '') {
      genderError.textContent = 'Please select a gender';
      isValid = false;
    } else {
      genderError.textContent = '';
    }
  
    // Terms and Conditions Validation
    const termsInput = document.getElementById('terms');
    const termsError = document.getElementById('terms-error');
    if (!termsInput.checked) {
      termsError.textContent = 'You must accept the terms and conditions';
      isValid = false;
    } else {
      termsError.textContent = '';
    }
  
    if (!isValid) {
      event.preventDefault(); // Prevent form submission if not valid
    }
  });
  
  function validateEmail(email) {
    // Basic email validation without using regular expression
    return email.includes('@') && email.includes('.');
  }
  