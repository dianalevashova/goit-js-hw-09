const formData = { email: '', message: '' };
const STORAGE_KEY = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
};
refs.form.addEventListener('input', onFormInput);
refs.form.addEventListener('submit', onFormSubmit);
restoreFormData();
function onFormInput(event) {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function onFormSubmit(event) {
  event.preventDefault();
  const { email, message } = refs.form.elements;

  const emailValue = email.value.trim();
  const messageValue = message.value.trim();

  if (!emailValue || !messageValue) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
  refs.form.reset();
}
function restoreFormData() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (!savedData) return;

  const parsedData = JSON.parse(savedData);
  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';

  refs.form.elements.email.value = formData.email;
  refs.form.elements.message.value = formData.message;
}
