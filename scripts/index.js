const buttonEditProfile = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__user-name');
const profileInfo = document.querySelector('.profile__user-info');
const buttonAddCard = document.querySelector('.profile__button');
const cards = document.querySelector('.elements__container');
const popupEditProfile = document.querySelector('.popup_type_profile');
const buttonClosePopupProfile = popupEditProfile.querySelector('.popup__close-icon');
const formPopupEditProfile = popupEditProfile.querySelector('.form');
const nameInputPopupProfile = formPopupEditProfile.querySelector('.form__input[name="name"]');
const infoInputPopupProfile = formPopupEditProfile.querySelector('.form__input[name="info"]');
const popupAddCard = document.querySelector('.popup_type_add-image');
const buttonClosePopupAddCard = popupAddCard.querySelector('.popup__close-icon');
const formPopupAddCard = popupAddCard.querySelector('.form');
const placeInputPopupAddCard = popupAddCard.querySelector('.form__input[name="place"]');
const linkInputPopupAddCard = popupAddCard.querySelector('.form__input[name="link"]');
const popupFullImage = document.querySelector('.popup_type_full-image');
const buttonClosePopupFullImage = popupFullImage.querySelector('.popup__close-icon');

function updatePopupEditProfileInputs() {
  nameInputPopupProfile.value = profileName.textContent;
  infoInputPopupProfile.value = profileInfo.textContent;
}

function clearPopupAddCardInputs() {
  placeInputPopupAddCard.value = linkInputPopupAddCard.value = '';
}

function openPopupEditProfile() {
  updatePopupEditProfileInputs();
  popupEditProfile.classList.add('popup_opened');
}

function openPopupAddCard() {
  clearPopupAddCardInputs();
  popupAddCard.classList.add('popup_opened');
}

function openPopupFullImage() {
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

function submitFormEditProfile(event) {
  event.preventDefault();
  const nameInputText = nameInputPopupProfile.value.trim();
  const infoInputText = infoInputPopupProfile.value.trim();
  profileName.textContent = nameInputText ? nameInputText : 'без имени';
  profileInfo.textContent = infoInputText ? infoInputText : 'без занятий';
  closePopup(event);
}

function submitFormAddCard(event) {
  event.preventDefault();
  const card = {};
  card.name = placeInputPopupAddCard.value.trim();
  if (!card.name) card.name = 'Неизвестно';
  card.link = linkInputPopupAddCard.value.trim();
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
  openPopupFullImage();
}

cards.addEventListener('click', removeCard);
cards.addEventListener('click', toggleLike);
cards.addEventListener('click', showFullImage);
buttonClosePopupFullImage.addEventListener('click', closePopup);
buttonEditProfile.addEventListener('click', openPopupEditProfile);
buttonClosePopupProfile.addEventListener('click', closePopup);
buttonAddCard.addEventListener('click', openPopupAddCard);
buttonClosePopupAddCard.addEventListener('click', closePopup);
formPopupEditProfile.addEventListener('submit', submitFormEditProfile);
formPopupAddCard.addEventListener('submit', submitFormAddCard);

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
