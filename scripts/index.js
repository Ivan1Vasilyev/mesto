const closeIcon = document.querySelector('.popup__close-icon');
const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__user-name');
const profileInfo = document.querySelector('.profile__user-info');
const formElement = document.querySelector('.form');
const nameInput = document.querySelector('.form__input[name="name"]');
const infoInput = document.querySelector('.form__input[name="info"]');
const cards = document.querySelector('.elements__container');

function toggleLikes(event) {
  if (!event.target.classList.contains('card__like')) return;
  event.target.classList.toggle('card__like_active');
}

cards.addEventListener('click', toggleLikes);

function closePopup() {
  popup.classList.remove('popup_opened');
}

function openPopup() {
  popup.classList.add('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileInfo.textContent = infoInput.value;
  closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);

editButton.addEventListener('click', function () {
  openPopup();
  nameInput.value = profileName.textContent;
  infoInput.value = profileInfo.textContent;
});

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

function addCards(card) {
  const cardTemplate = document.querySelector('#card-template').content;
  const newCard = cardTemplate.querySelector('.card').cloneNode(true);
  const newImage = newCard.querySelector('.card__image');
  newImage.src = card.link;
  newImage.alt = card.name;
  newCard.querySelector('.card__caption').textContent = card.name;
  cards.append(newCard);
}

function addDefaultCards(cards) {
  for (let i = 0; i < cards.length; i++) {
    addCards(cards[i]);
  }
}

addDefaultCards(initialCards);
