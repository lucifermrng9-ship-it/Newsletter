const form = document.getElementById('newsletter-form');
const label = document.getElementById('email');
const emaildisplay = document.getElementById('email-display');
const emailInput = document.getElementById('email-input');
const errorElement = document.getElementById('error');
const messageElement = document.getElementById('message');
const myBtn = document.getElementById('mybtn');

myBtn.addEventListener('click', function(e) {
  e.preventDefault();
  const emailValue = emailInput.value.trim();

  if (!emailValue) {
    errorElement.textContent = 'Email is required';
    label.style.color = 'hsl(4, 100%, 57%)';
  } 
  else if (!isValidEmail(emailValue)) {
    errorElement.textContent = 'Please provide a valid email address';
    label.style.color = 'hsl(4, 100%, 57%)';
  } 
  else {
    errorElement.textContent = '';
    label.style.color = '';
    emaildisplay.textContent = emailValue;
    messageElement.style.display = 'block';
    form.style.display = 'none';
  }
});




const dismissBtn = document.getElementById('dismiss-btn');

dismissBtn.addEventListener('click', function() {
  messageElement.style.display = 'none';
  form.style.display = 'block';
  form.reset();

});

function isValidEmail(emailValue) {
  const emailPattern = /^\S+@\S+\.\S+$/;

  return emailPattern.test(emailValue);
}
