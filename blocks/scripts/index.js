const profileButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__user-name');
const profileInfo = document.querySelector('.profile__user-info');
const addImageButton = document.querySelector('.profile__button');
const cards = document.querySelector('.elements__container');
const popupProfile = document.querySelector('.popup_type_profile');
const closeProfileButton = popupProfile.querySelector('.popup__close-icon');
const formElementProfile = popupProfile.querySelector('.form');
const nameInputProfile = formElementProfile.querySelector('.form__input[name="name"]');
const infoInputProfile = formElementProfile.querySelector('.form__input[name="info"]');
const popupAddImage = document.querySelector('.popup_type_add-image');
const closeAddImageButton = popupAddImage.querySelector('.popup__close-icon');
const formElementAddImage = popupAddImage.querySelector('.form');
const placeInputAddImage = popupAddImage.querySelector('.form__input[name="place"]');
const linkInputAddImage = popupAddImage.querySelector('.form__input[name="link"]');
const popupFullImage = document.querySelector('.popup_type_full-image');
const closeFullImageButton = popupFullImage.querySelector('.popup__close-icon');

function updateProfileInputs() {
  nameInputProfile.value = profileName.textContent;
  infoInputProfile.value = profileInfo.textContent;
}

function clearAddImageInputs() {
  placeInputAddImage.value = linkInputAddImage.value = '';
}

function openProfile() {
  updateProfileInputs();
  popupProfile.classList.add('popup_opened');
}

function openAddImage() {
  clearAddImageInputs();
  popupAddImage.classList.add('popup_opened');
}

function openFullImage() {
  popupFullImage.classList.add('popup_opened');
}

function closePopup(event) {
  event.target.closest('.popup').classList.remove('popup_opened');
}

function addCard(card) {
  const cardTemplate = document.querySelector('.card-template').content;
  const newCard = cardTemplate.querySelector('.card').cloneNode(true);
  const newImage = newCard.querySelector('.card__image');
  newImage.src = card.link;
  newImage.alt = card.name;
  newCard.querySelector('.card__caption').textContent = card.name;
  cards.prepend(newCard);
}

function formSubmitProfile(event) {
  event.preventDefault();
  const nameInputText = nameInputProfile.value.trim();
  const infoInputText = infoInputProfile.value.trim();
  profileName.textContent = nameInputText ? nameInputText : 'без имени';
  profileInfo.textContent = infoInputText ? infoInputText : 'без занятий';
  closePopup(event);
}

function formSubmitAddImage(event) {
  event.preventDefault();
  const card = {};
  card.name = placeInputAddImage.value.trim();
  if (!card.name) card.name = 'Неизвестно';
  card.link = linkInputAddImage.value.trim();
  if (card.link) addCard(card);
  closePopup(event);
}

function removeCard(event) {
  if (!event.target.classList.contains('card__delete')) return;
  event.target.closest('.card').remove();
}

function toggleLike(event) {
  if (!event.target.classList.contains('card__like')) return;
  event.target.classList.toggle('card__like_active');
}

function showFullImage(event) {
  if (!event.target.classList.contains('card__image')) return;
  const fullImage = popupFullImage.querySelector('.full-image__image');
  const capture = event.target.nextElementSibling.textContent;
  fullImage.src = event.target.src;
  fullImage.alt = capture;
  popupFullImage.querySelector('.full-image__caption').textContent = capture;
  openFullImage();
}

cards.addEventListener('click', removeCard);
cards.addEventListener('click', toggleLike);
cards.addEventListener('click', showFullImage);
closeFullImageButton.addEventListener('click', closePopup);
profileButton.addEventListener('click', openProfile);
closeProfileButton.addEventListener('click', closePopup);
addImageButton.addEventListener('click', openAddImage);
closeAddImageButton.addEventListener('click', closePopup);
formElementProfile.addEventListener('submit', formSubmitProfile);
formElementAddImage.addEventListener('submit', formSubmitAddImage);

const initialCards = [
  {
    name: 'Карачаево-Черкессия',
    link: './images/karachaev.jpg',
  },
  {
    name: 'Москва',
    link: './images/moscow.jpg',
  },
  {
    name: 'Горный Алтай',
    link: './images/altay.jpg',
  },
  {
    name: 'Ибица',
    link: './images/ibiza.jpg',
  },
  {
    name: 'Париж',
    link: './images/paris.jpg',
  },
  {
    name: 'Венеция',
    link: './images/venice.jpg',
  },
];

function addDefaultCards(cards) {
  for (let i = 0; i < cards.length; i++) {
    addCard(cards[i]);
  }
}

addDefaultCards(initialCards);
