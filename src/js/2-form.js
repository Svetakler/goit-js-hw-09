const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

function saveFormData() {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function loadFormData() {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    emailInput.value = parsedData.email || '';
    messageInput.value = parsedData.message || '';
  }
}

function handleInputChange(event) {
  saveFormData();
}

function handleFormSubmit(event) {
  event.preventDefault();

  if (!emailInput.value || !messageInput.value) {
    alert('Fill please all fields');
    return;
  }

  console.log({
    email: emailInput.value,
    message: messageInput.value,
  });

  form.reset();
  localStorage.removeItem('feedback-form-state');
}

form.addEventListener('input', handleInputChange);
form.addEventListener('submit', handleFormSubmit);

loadFormData();
