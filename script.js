const form = document.getElementById('user-form');
const submitButton = document.getElementById('submit-btn');
const termsCheckbox = document.getElementById('terms');

// Enable submit button when the checkbox is checked
termsCheckbox.addEventListener('change', () => {
  submitButton.disabled = !termsCheckbox.checked;
});

// Form validation
form.addEventListener('submit', (event) => {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();

  // Validate fields
  if (!name || !email) {
    alert('Please fill in all required fields.');
    event.preventDefault(); // Prevent form submission
    return;
  }

  // No need to call `event.preventDefault()` if all validations pass
});
