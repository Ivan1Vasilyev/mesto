const initialCards = [
  { name: "Карачаево-Черкессия", link: "./images/karachaev.jpg" },
  { name: "Москва", link: "./images/moscow.jpg" },
  { name: "Горный Алтай", link: "./images/altay.jpg" },
  { name: "Ибица", link: "./images/ibiza.jpg" },
  { name: "Париж", link: "./images/paris.jpg" },
  { name: "Венеция", link: "./images/venice.jpg" },
];
const buttonEditProfile = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__user-name");
const profileInfo = document.querySelector(".profile__user-info");
const buttonAddCard = document.querySelector(".profile__button");
const cards = document.querySelector(".elements__container");
const popupEditProfile = document.querySelector(".popup_type_profile"); //попап профиля
const buttonClosePopupEditProfile =
  popupEditProfile.querySelector(".popup__close-icon");
const formPopupEditProfile = popupEditProfile.querySelector(".form");
const inputNamePopupEditProfile = formPopupEditProfile.querySelector(
  '.form__input[name="name"]'
);
const inputInfoPopupEditProfile = formPopupEditProfile.querySelector(
  '.form__input[name="info"]'
);
const popupAddCard = document.querySelector(".popup_type_add-image"); //попап добавления карточек
const buttonClosePopupAddCard =
  popupAddCard.querySelector(".popup__close-icon");
const formPopupAddCard = popupAddCard.querySelector(".form");
const inputPlacePopupAddCard = popupAddCard.querySelector(
  '.form__input[name="place"]'
);
const inputLinkPopupAddCard = popupAddCard.querySelector(
  '.form__input[name="link"]'
);
const popupFullImage = document.querySelector(".popup_type_full-image"); //попап увеличенной картинки
const fullImage = popupFullImage.querySelector(".full-image__image");
const captureFullImage = popupFullImage.querySelector(".full-image__caption");
const buttonClosePopupFullImage =
  popupFullImage.querySelector(".popup__close-icon");
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

function addDefaultCards(collection) {
  collection.forEach(addCard);
}

function updateInputsPopupEditProfile() {
  inputNamePopupEditProfile.value = profileName.textContent;
  inputInfoPopupEditProfile.value = profileInfo.textContent;
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function removeCard(target) {
  target.closest(".card").remove();
}

function toggleLike(target) {
  target.classList.toggle("card__like_active");
}

function showFullImage(target) {
  const capture = target.nextElementSibling.textContent;
  fullImage.src = target.src;
  fullImage.alt = capture;
  captureFullImage.textContent = capture;
  openPopup(popupFullImage);
}

function createCard(card) {
  const newCard = cardTemplate.cloneNode(true);
  const newImage = newCard.querySelector(".card__image");
  const newCapture = newCard.querySelector(".card__caption");
  ({
    link: newImage.src,
    name: newImage.alt,
    name: newCapture.textContent,
  } = card);
  newCard.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("card__delete")) removeCard(target);
    if (target.classList.contains("card__like")) toggleLike(target);
    if (target.classList.contains("card__image")) showFullImage(target);
  });
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

buttonEditProfile.addEventListener("click", () => {
  updateInputsPopupEditProfile();
  openPopup(popupEditProfile);
});
buttonAddCard.addEventListener("click", () => {
  formPopupAddCard.reset();
  openPopup(popupAddCard);
});
buttonClosePopupEditProfile.addEventListener("click", () =>
  closePopup(popupEditProfile)
);
buttonClosePopupFullImage.addEventListener("click", () =>
  closePopup(popupFullImage)
);
buttonClosePopupAddCard.addEventListener("click", () =>
  closePopup(popupAddCard)
);
formPopupEditProfile.addEventListener("submit", submitFormEditProfile);
formPopupAddCard.addEventListener("submit", submitFormAddCard);

//выводим первые 6 карточек
addDefaultCards(initialCards);
