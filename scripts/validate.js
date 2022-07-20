const optionsForValidation = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_disabled',
  inputErrorClass: 'form__input_type_error',
};

function showInputError(input, errorText, inputErrorClass) {
  errorText.textContent = input.validationMessage;
  input.classList.add(inputErrorClass);
}

function hideInputError(input, errorText, inputErrorClass) {
  errorText.textContent = '';
  input.classList.remove(inputErrorClass);
}

function validateInput(input, errorText, inputErrorClass) {
  if (input.validity.valid) {
    hideInputError(input, errorText, inputErrorClass);
  } else {
    showInputError(input, errorText, inputErrorClass);
  }
}

function hasInvalidInput(inputList) {
  return inputList.every(input => input.validity.valid);
}

function toggleButtonState(inputList, button, disabled) {
  hasInvalidInput(inputList) ? button.classList.remove(disabled) : button.classList.add(disabled);
}

function setEventListeners(form, options) {
  const inputs = Array.from(form.querySelectorAll(options.inputSelector));
  const buttonSubmit = form.querySelector(options.submitButtonSelector);
  inputs.forEach(input => {
    const errorElement = document.getElementById(`${input.getAttribute('name')}-error`);
    input.addEventListener('input', () => {
      validateInput(input, errorElement, options.inputErrorClass);
      toggleButtonState(inputs, buttonSubmit, options.inactiveButtonClass);
    });
  });
}

function enableValidation(options) {
  const forms = Array.from(document.querySelectorAll(options.formSelector));
  forms.forEach(form => {
    setEventListeners(form, options);
  });
}

enableValidation(optionsForValidation);
