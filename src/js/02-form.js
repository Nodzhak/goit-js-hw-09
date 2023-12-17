const feedbackForm = document.querySelector('.feedback-form');
const keyLocalStorage = 'feedback-form-state';
const email = document.querySelector('.feedback-input-email');
const message = document.querySelector('.message');
const inputEmail = form.elements.email;
const textArea = form.elements.message;

feedbackForm.addEventListener('input', debounce(getTextValue, 500));
feedbackForm.addEventListener('submit', submitedForm);

let dataForm = JSON.parse(localStorage.getItem(keyLocalStorage)) || {};

inputEmail.value = dataForm.email || '';
textArea.value = dataForm.message || '';

function getTextValue(event) {
  dataForm = {
    email: inputEmail.value,
    message: textArea.value,
  };
  localStorage.setItem(keyLocalStorage, JSON.stringify(dataForm));
  return dataForm;
}

function submitedForm(event) {
  event.preventDefault();
  const isFormValid = inputEmail.value.trim() !== '' && textArea.value.trim() !== '';

  if (isFormValid) {
    console.log(dataForm);
    localStorage.removeItem(keyLocalStorage);
    feedbackForm.reset();
  } else {
    console.log(alert('Це ще не все!'));
  }
}

function debounce(callee, timeoutMs) {
  let lastCall;
  let lastCallTimer;

  return function perform(...args) {
    if (lastCall && Date.now() - lastCall <= timeoutMs) {
      clearTimeout(lastCallTimer);
    }
    lastCall = Date.now();
    lastCallTimer = setTimeout(() => callee(...args), timeoutMs);
  };
}