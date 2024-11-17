const formData = {
  email: '',
  message: '',
};

const listElements = {
  form: document.querySelector('.login-form'),
  label: document.querySelectorAll('label'),
  input: document.querySelectorAll('input'),
  textarea: document.querySelectorAll('textarea'),
  button: document.querySelector('button'),
};

listElements.label.forEach(function (label) {
  label.classList.add('label-form');
});

listElements.input.forEach(function (input) {
  input.classList.add('input-form');
});

listElements.textarea.forEach(function (textarea) {
  textarea.classList.add('message-form');
});

listElements.button.classList.add('button-form');

document.querySelector('.feedback-form').addEventListener('input', event => {
  const input = event.target.closest('input, textarea');
  if (input) {
    const { name, value } = input;
    formData[name] = value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }
});

const savedData = localStorage.getItem('feedback-form-state');
if (savedData && savedData !== 'null') {
  const parsedData = JSON.parse(savedData);
  Object.keys(parsedData).forEach(key => {
    formData[key] = parsedData[key];
    document.querySelector(`[name="${key}"]`).value = parsedData[key];
  });
}

document.querySelector('.feedback-form').addEventListener('submit', event => {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    document.querySelector('.feedback-form').reset();
    Object.keys(formData).forEach(key => {
      formData[key] = '';
    });
  }
});