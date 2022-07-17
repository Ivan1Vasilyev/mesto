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
  popupAddCard = document.querySelector('.popup_type_add-image'), //попап добавления карточек
  formPopupAddCard = popupAddCard.querySelector('.form'),
  inputPlacePopupAddCard = popupAddCard.querySelector('.form__input[name="place"]'),
  inputLinkPopupAddCard = popupAddCard.querySelector('.form__input[name="link"]'),
  popupFullImage = document.querySelector('.popup_type_full-image'), //попап увеличенной картинки
  fullImage = popupFullImage.querySelector('.full-image__image'),
  captureFullImage = popupFullImage.querySelector('.full-image__caption'),
  popups = document.querySelectorAll('.popup'),
  cardTemplate = document.querySelector('#card-template').content.querySelector('.card');

function addDefaultCards(collection) {
  collection.forEach(addCard);
}

function updateInputsPopupEditProfile() {
  inputNamePopupEditProfile.value = profileName.textContent;
  inputInfoPopupEditProfile.value = profileInfo.textContent;
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function showFullImage(image, capture) {
  fullImage.src = image.src;
  fullImage.alt = capture;
  captureFullImage.textContent = capture;
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
  newImage.addEventListener('click', () => showFullImage(newImage, newCapture.textContent));
  return newCard;
}

function renderCard(card, place = cards) {
  place.prepend(card);
}

function addCard(card) {
  const cardForRendering = createCard(card);
  renderCard(cardForRendering);
}

function submitFormAddCard(event) {
  event.preventDefault();
  const usersCard = {
    name: inputPlacePopupAddCard.value.trim(),
    link: inputLinkPopupAddCard.value.trim(),
  };
  addCard(usersCard);
  closePopup(popupAddCard);
}

function submitFormEditProfile(event) {
  event.preventDefault();
  profileName.textContent = inputNamePopupEditProfile.value.trim();
  profileInfo.textContent = inputInfoPopupEditProfile.value.trim();
  closePopup(popupEditProfile);
}

buttonEditProfile.addEventListener('click', () => {
  updateInputsPopupEditProfile();
  openPopup(popupEditProfile);
});
buttonAddCard.addEventListener('click', () => {
  formPopupAddCard.reset();
  openPopup(popupAddCard);
});
//для кнопок закрытия попапов.
popups.forEach((item) =>
  item.addEventListener('click', (event) => {
    if (event.target.classList.contains('popup__close-icon')) closePopup(item);
  })
);

formPopupEditProfile.addEventListener('submit', submitFormEditProfile);
formPopupAddCard.addEventListener('submit', submitFormAddCard);

addDefaultCards(initialCards); //выводим первые 6 карточек
