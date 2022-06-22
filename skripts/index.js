const likes = document.querySelector('.elements__wrap')

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





