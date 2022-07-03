const closeIcon = document.querySelector('.popup__close-icon');
const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__user-name');
const profileInfo = document.querySelector('.profile__user-info');
const formTitle = popup.querySelector('.form__title');
const formElement = popup.querySelector('.form');
const nameInput = popup.querySelector('.form__input[name="name"]');
const infoInput = popup.querySelector('.form__input[name="info"]');
const submitButton = popup.querySelector('.form__submit-button');
const cards = document.querySelector('.elements__container');
const addImageButton = document.querySelector('.profile__button');

function closePopup() {
  popup.classList.remove('popup_opened');
  nameInput.value = '';
  infoInput.value = '';
  formElement.removeEventListener('submit', formSubmitAddImage);
  formElement.removeEventListener('submit', formSubmitAddProfile);
}

function openPopup() {
  popup.classList.add('popup_opened');
}

function addCard(card) {
  const cardTemplate = document.querySelector('#card-template').content;
  const newCard = cardTemplate.querySelector('.card').cloneNode(true);
  const newImage = newCard.querySelector('.card__image');
  newImage.src = card.link;
  newImage.alt = card.name;
  newCard.querySelector('.card__caption').textContent = card.name;
  cards.prepend(newCard);
}

function formSubmitAddImage(event) {
  event.preventDefault();
  if (nameInput.value && infoInput.value) {
    let card = {
      name: nameInput.value,
      link: infoInput.value
    }
    addCard(card);
  }
  closePopup();
}

function formSubmitAddProfile(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileInfo.textContent = infoInput.value;
  closePopup();
}

editButton.addEventListener('click', function() {
  formTitle.textContent = 'Редактировать профиль';
  nameInput.value = profileName.textContent;
  infoInput.value = profileInfo.textContent;
  submitButton.textContent = 'Сохранить';
  openPopup();
  formElement.addEventListener('submit', formSubmitAddProfile);
});

addImageButton.addEventListener('click', function() {
  formTitle.textContent = 'Новое место';
  nameInput.placeholder="Название";
  infoInput.placeholder="Ссылка на картинку";
  submitButton.textContent = 'Создать';
  openPopup();
  formElement.addEventListener('submit', formSubmitAddImage);
})

function removeCard(event) {
  if (!event.target.classList.contains('card__delete')) return;
  const target = event.target.closest('.card');
  target.remove();
}

function toggleLikes(event) {
  if (!event.target.classList.contains('card__like')) return;
  event.target.classList.toggle('card__like_active');
}

cards.addEventListener('click', removeCard);
cards.addEventListener('click', toggleLikes);

closeIcon.addEventListener('click', closePopup);

const initialCards = [
  {
    name: 'Карачаевск',
    link: './images/karachaev.jpg',
  },
  {
    name: 'Гора Эльбрус',
    link: './images/elbrus.jpg',
  },
  {
    name: 'Домбай',
    link: './images/dombay.jpg',
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
