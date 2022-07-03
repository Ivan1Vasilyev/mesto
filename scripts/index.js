const closeIcon = document.querySelector('.popup__close-icon');
const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__user-name');
const profileInfo = document.querySelector('.profile__user-info');
const formElement = document.querySelector('.form');
const nameInput = document.querySelector('.form__input[name="name"]');
const infoInput = document.querySelector('.form__input[name="info"]');
const cards = document.querySelector('.elements__container')

function toggleLikes(event) {
  if (!event.target.classList.contains('card__like')) return
  event.target.classList.toggle('card__like_active')
}

cards.addEventListener('click', toggleLikes)

function popupClose() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileInfo.textContent = infoInput.value;
    popupClose();
}

formElement.addEventListener('submit', formSubmitHandler);

editButton.addEventListener('click', function() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  infoInput.value = profileInfo.textContent;
});

closeIcon.addEventListener('click', popupClose);
