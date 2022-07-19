const optionsForValidation = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_visible',
};

function validateInput(input, redText) {
  if (input.validity.valid) {
    redText.textContent = '';
    input.classList.remove('form__input_type_error');
  } else {
    redText.textContent = input.validationMessage;
    input.classList.add('form__input_type_error');
  }
}

function hasInvalidInput(inputList) {
  return inputList.every(input => input.validity.valid);
}

function toggleButtonState(inputList, button) {
  hasInvalidInput(inputList) ? button.classList.remove('form__submit-button_disabled') : button.classList.add('form__submit-button_disabled');
}

function enableValidation(options) {
  const forms = Array.from(document.querySelectorAll(options.formSelector));
  forms.forEach(form => {
    form.addEventListener('submit', e => e.preventDefault());
    const inputs = Array.from(form.querySelectorAll(options.inputSelector));
    const buttonSubmit = form.querySelector(options.submitButtonSelector);
    inputs.forEach(input => {
      const errorText = document.getElementById(`${input.getAttribute('name')}-error`);
      input.addEventListener('input', () => {
        validateInput(input, errorText);
        toggleButtonState(inputs, buttonSubmit);
      });
    });
  });
}

enableValidation(optionsForValidation);
