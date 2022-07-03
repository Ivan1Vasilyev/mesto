const closeIcon = document.querySelector('.popup__close-icon');
const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__user-name');
const profileInfo = document.querySelector('.profile__user-info');
const formTitle = popup.querySelector('.form__title');
const formElement = popup.querySelector('.form');
const nameInput = popup.querySelector('.form__input[name="name"]');
const infoInput = popup.querySelector('.form__input[name="info"]');
const cards = document.querySelector('.elements__container');
const addImageButton = document.querySelector('.profile__button');
const popupSettings = {
  addProfile: false,
  addImage: false
}

function toggleLikes(event) {
  if (!event.target.classList.contains('card__like')) return;
  event.target.classList.toggle('card__like_active');
}

function closePopup() {
  popup.classList.remove('popup_opened');
  nameInput.value = '';
  infoInput.value = '';
  popupSettings.addProfile = popupSettings.addImage = false;
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

function formSubmitHandler(evt) {
  evt.preventDefault();
  if (popupSettings.addProfile) {
    profileName.textContent = nameInput.value;
    profileInfo.textContent = infoInput.value;
  }
  if (popupSettings.addImage && nameInput.value && infoInput.value) {
    let card = {
      name: nameInput.value,
      link: infoInput.value
    }
    addCard(card);
  }
  closePopup();
}

editButton.addEventListener('click', function() {
  formTitle.textContent = 'Редактировать профиль'
  popupSettings.addProfile = true;
  nameInput.value = profileName.textContent;
  infoInput.value = profileInfo.textContent;
  openPopup();
});

addImageButton.addEventListener('click', function() {
  formTitle.textContent = 'Новое место';
  popupSettings.addImage = true;
  nameInput.placeholder="Название";
  infoInput.placeholder="Ссылка на картинку";
  openPopup();
})

cards.addEventListener('click', toggleLikes);

formElement.addEventListener('submit', formSubmitHandler);

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
