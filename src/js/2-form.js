const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
form.addEventListener('input', saveData);

function saveData(event) {
  const input = event.target;
  if (input.name === 'email') {
    formData['email'] = input.value.trim();
  } else if (input.name === 'message') {
    formData['message'] = input.value.trim();
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

form.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  form.reset();
}

if (localStorage.getItem('feedback-form-state')) {
  const input = form.elements.email;
  const textArea = form.elements.message;
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  formData.email = savedData.email;
  formData.message = savedData.message;
  input.value = savedData.email;
  textArea.value = savedData.message;
}
