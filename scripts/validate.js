const optionsForValidation = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_visible'
}

function validityInput(input, redText) {
  if (input.validity.valid) {
    redText.textContent = ''
  } else {
    redText.textContent = input.validationMessage
  }
}

function enableValidation(options) {
  const forms = Array.from(document.querySelectorAll(options.formSelector))
  forms.forEach(form => {
    form.addEventListener('submit', (e) => e.preventDefault())
    const inputs = Array.from(form.querySelectorAll(options.inputSelector))
    inputs.forEach(input => {
      const errorText = document.getElementById(`${input.getAttribute('name')}-error`)
      input.addEventListener('input', (event) => {
        validityInput(input, errorText)
      })
    })



  })
}

enableValidation(optionsForValidation)
