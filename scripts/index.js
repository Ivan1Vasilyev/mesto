//константы
const initialCards = [
    { name: 'Карачаево-Черкессия', link: './images/karachaev.jpg' },
    { name: 'Москва', link: './images/moscow.jpg' },
    { name: 'Горный Алтай', link: './images/altay.jpg' },
    { name: 'Ибица', link: './images/ibiza.jpg' },
    { name: 'Париж', link: './images/paris.jpg' },
    { name: 'Венеция', link: './images/venice.jpg' },
  ],
  buttonEditProfile = document.querySelector('.profile__edit-button'),
  profileName = document.querySelector('.profile__user-name'),
  profileInfo = document.querySelector('.profile__user-info'),
  buttonAddCard = document.querySelector('.profile__button'),
  cards = document.querySelector('.elements__container'),
  popupEditProfile = document.querySelector('.popup_type_profile'), //попап профиля
  formPopupEditProfile = popupEditProfile.querySelector('.form'),
  inputNamePopupEditProfile = formPopupEditProfile.querySelector('.form__input[name="name"]'),
  inputInfoPopupEditProfile = formPopupEditProfile.querySelector('.form__input[name="info"]'),
  buttonSubmitEditProfile = popupEditProfile.querySelector('.form__submit-button'),
  popupAddCard = document.querySelector('.popup_type_add-image'), //попап добавления карточек
  formPopupAddCard = popupAddCard.querySelector('.form'),
  inputPlacePopupAddCard = popupAddCard.querySelector('.form__input[name="place"]'),
  inputLinkPopupAddCard = popupAddCard.querySelector('.form__input[name="link"]'),
  buttonSubmitAddCard = popupAddCard.querySelector('.form__submit-button'),
  popupFullImage = document.querySelector('.popup_type_full-image'), //попап увеличенной картинки
  fullImage = popupFullImage.querySelector('.full-image__image'),
  captureFullImage = popupFullImage.querySelector('.full-image__caption'),
  cardTemplate = document.querySelector('#card-template').content.querySelector('.card'),
  popups = Array.from(document.querySelectorAll('.popup')),
  errorElements = Array.from(document.querySelectorAll('.form__input-error')),
  inputs = Array.from(document.querySelectorAll('.form__input'));

//функции
function addDefaultCards(collection) {
  collection.forEach(addCard);
}

function updateInputsPopupEditProfile() {
  inputNamePopupEditProfile.value = profileName.textContent;
  inputInfoPopupEditProfile.value = profileInfo.textContent;
}

function addClosePopupListener() {
  document.addEventListener('keydown', closePopupFromKey);
}

function removeClosePopupListener() {
  document.removeEventListener('keydown', closePopupFromKey);
}

function closePopupFromKey(event) {
  if (event.key === 'Escape') {
    closePopup();
  }
}

function clearErrors() {
  inputs.forEach(item => item.classList.remove('form__input_type_error'));
  errorElements.forEach(item => (item.textContent = ''));
}

function openPopup(popup) {
  addClosePopupListener();
  popup.classList.add('popup_opened');
}

function closePopup() {
  removeClosePopupListener();
  clearErrors();
  document.querySelector('.popup_opened')?.classList.remove('popup_opened');
}

function showFullImage(card) {
  ({ link: fullImage.src, name: fullImage.alt, name: captureFullImage.textContent } = card);
  openPopup(popupFullImage);
}

function createCard(card) {
  const newCard = cardTemplate.cloneNode(true);
  const newImage = newCard.querySelector('.card__image');
  const newCapture = newCard.querySelector('.card__caption');
  const like = newCard.querySelector('.card__like');
  ({ link: newImage.src, name: newImage.alt, name: newCapture.textContent } = card);
  newCard.querySelector('.card__delete').addEventListener('click', () => newCard.remove());
  like.addEventListener('click', () => like.classList.toggle('card__like_active'));
  newImage.addEventListener('click', () => showFullImage(card));
  return newCard;
}

function renderCard(card, place = cards) {
  place.prepend(card);
}

function addCard(card) {
  const cardForRendering = createCard(card);
  renderCard(cardForRendering);
}

function setButton(target) {
  const button = target.querySelector('.form__submit-button');
  return button.classList.contains('form__submit-button_disabled');
}

function submitFormEditProfile(event) {
  event.preventDefault();
  if (setButton(event.target)) return;
  profileName.textContent = inputNamePopupEditProfile.value.trim();
  profileInfo.textContent = inputInfoPopupEditProfile.value.trim();
  closePopup();
}

function submitFormAddCard(event) {
  event.preventDefault();
  if (setButton(event.target)) return;
  const usersCard = {
    name: inputPlacePopupAddCard.value.trim(),
    link: inputLinkPopupAddCard.value.trim(),
  };
  addCard(usersCard);
  closePopup();
}

//слушатели событий
buttonEditProfile.addEventListener('click', () => {
  updateInputsPopupEditProfile();
  buttonSubmitEditProfile.classList.remove('form__submit-button_disabled');
  openPopup(popupEditProfile);
});

buttonAddCard.addEventListener('click', () => {
  formPopupAddCard.reset();
  buttonSubmitAddCard.classList.add('form__submit-button_disabled');
  openPopup(popupAddCard);
});

popups.forEach(item =>
  item.addEventListener('mousedown', event => {
    if (event.target.classList.contains('popup__close-icon') || event.target.classList.contains('popup')) {
      closePopup();
    }
  })
);

formPopupEditProfile.addEventListener('submit', submitFormEditProfile);
formPopupAddCard.addEventListener('submit', submitFormAddCard);

//выводим первые 6 карточек
addDefaultCards(initialCards);


Array.from(document.forms).forEach(form => {
  const inputs = Array.from(form.querySelectorAll('.form__input'))
  const firstInput = inputs[0];
  const lastInput= inputs[inputs.length - 1];

  firstInput.addEventListener('keydown', (event) => {
    if (event.key == 'Tab' && event.shiftKey) {
      event.preventDefault();
      lastInput.focus();
    }
  });

  lastInput.addEventListener('keydown', (event) => {
    if (event.key == 'Tab' && !event.shiftKey) {
      event.preventDefault();
      firstInput.focus();
    }
  })
})

