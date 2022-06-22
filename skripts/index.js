const likes = document.querySelector('.elements__wrap')
const popupClose = document.querySelector('.popup__close-icon')
const popup = document.querySelector('.popup')
const editButton = document.querySelector('.profile__edit-button')
const profileName = document.querySelector('.profile__user-name')
const profileInfo = document.querySelector('.profile__user-info')
const formElement = document.querySelector('.popup__container')
const nameInput = document.querySelector('.popup__input_type_name')
const infoInput = document.querySelector('.popup__input_type_info')

likes.addEventListener('click', function(evt) {
  if (!evt.target.classList.contains('elements__like')) return
  if (evt.target.classList.contains('liked')) {
    evt.target.classList.remove('liked')
    evt.target.src="./images/like.svg"
  } else {
    evt.target.src="./images/like_clicked.svg"
    evt.target.classList.add('liked')
  }
})

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value
    profileInfo.textContent = infoInput.value
    popup.classList.remove('popup_opened')
}

formElement.addEventListener('submit', formSubmitHandler);

editButton.addEventListener('click', function() {
  popup.classList.add('popup_opened')
  nameInput.value = profileName.textContent
  infoInput.value = profileInfo.textContent
})

popupClose.addEventListener('click', function() {
  popup.classList.remove('popup_opened')
})
