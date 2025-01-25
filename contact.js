var sideNav = document.querySelector(".side-nav");
var menuToggle = document.querySelector(".menu-toggle");
var close = document.querySelector(".close");

menuToggle.addEventListener("click", function () {
  sideNav.classList.toggle("side-nav-visible");
  menuToggle.classList.toggle("menu-toggle-hidden");
  close.classList.toggle("close-visible");
});

close.addEventListener("click", function () {
  sideNav.classList.toggle("side-nav-visible");
  menuToggle.classList.toggle("menu-toggle-hidden");
  close.classList.toggle("close-visible");
});

const nameInput = document.getElementById("NameInput");
const emailInput = document.getElementById("EmailInput");
const phoneInput = document.getElementById("NumberInput");
const AgeInput = document.getElementById("AgeInput");
const passwordInput = document.getElementById("PasswordInput");
const RepasswordInput = document.getElementById("RepasswordInput");
const submitButton = document.getElementById("btn");
const ErrorDiv = document.querySelectorAll('.error');

// Regular expressions
const nameRegex = /^[A-Za-z ]+$/;
const emailRegex = /^[\w-_\.]+@[\w-]+\.[a-z]{2,4}$/;
const phoneRegex = /^01[0125][0-9]{8}$/gm;
const ageRegex = /^\d{1,3}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const RepasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

// Variables to track validation status
let IsValidName = false;
let IsValidEmail = false;
let IsValidPhone = false;
let IsValidAge = false;
let IsValidPassword = false;
let IsValidRepassword = false;

// Event listeners for input validation
nameInput.addEventListener("input", function() {
  IsValidName = nameRegex.test(nameInput.value);
  ErrorDiv[0].style.display = IsValidName ? "none" : "block";
  validateSubmitButton();
});

emailInput.addEventListener("input", function() {
  IsValidEmail = emailRegex.test(emailInput.value);
  ErrorDiv[1].style.display = IsValidEmail ? "none" : "block";
  validateSubmitButton();
});

phoneInput.addEventListener("input", function() {
  IsValidPhone = phoneRegex.test(phoneInput.value);
  ErrorDiv[2].style.display = IsValidPhone ? "none" : "block";
  validateSubmitButton();
});

AgeInput.addEventListener("input", function() {
  IsValidAge = ageRegex.test(AgeInput.value);
  ErrorDiv[3].style.display = IsValidAge ? "none" : "block";
  validateSubmitButton();
});

passwordInput.addEventListener("input", function() {
  IsValidPassword = passwordRegex.test(passwordInput.value);
  ErrorDiv[4].style.display = IsValidPassword ? "none" : "block";
  validateSubmitButton();
});

RepasswordInput.addEventListener("input", function() {
  IsValidRepassword = RepasswordRegex.test(RepasswordInput.value)&&(RepasswordInput.value==passwordInput.value);
  ErrorDiv[5].style.display = IsValidRepassword ? "none" : "block";
  validateSubmitButton();
});

// Function to enable/disable the submit button
function validateSubmitButton() {
  if (IsValidName && IsValidEmail && IsValidPhone && IsValidAge && IsValidPassword && IsValidRepassword) {
    submitButton.disabled = false;
    submitButton.classList.remove("disabled");
    submitButton.classList.add('able');
  } else {
    submitButton.disabled = true;
    submitButton.classList.add('disabled');
    submitButton.classList.remove('able');
  }
}


