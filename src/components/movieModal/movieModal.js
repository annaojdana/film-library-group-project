import './movieModal.scss';

import movieModalMarkup from '../movieModalMarkup/movieModalMarkup';
import getFromLocalStorage from '../getFromLocalStorage/getFromLocalStorage';
import supportForMyLibrary from '../supportForMyLibrary/supportForMyLibrary';
import moviesListMarkup from '../moviesListMarkup/moviesListMarkup';


const closeModalBtn = document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-modal]');
const backdrop = document.querySelector('body');
const htmlOutput = document.querySelector('.modal--wrapper');
const queueBnt = document.querySelector('[data-display-selector="queue"]');
const watchedBnt = document.querySelector('[data-display-selector="watched"]');

closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', closeModalByClick);

export function closeModal() {
  modal.classList.add('is-hidden');
  backdrop.removeEventListener('keydown', closeModalEscKey);
}

// Funkcja jest lokalna, ponieważ nie jest potrzebna poza tym plikiem
export function openModal(evt) {
  htmlOutput.innerHTML = ``;

  modal.classList.remove('is-hidden');
  backdrop.addEventListener('keydown', closeModalEscKey); //musi być body, jeżeli damy tylko kontenr modala to aby zamknąć modal Esc trzeba najpierw nacisnąć Tab
  if (evt.currentTarget.classList.contains('item')) {
    const movieId = evt.currentTarget.dataset.id;
    movieModalMarkup(movieId);
  }
}
export function closeModalEscKey(e) {
  let keyCode = e.keyCode;

  if (keyCode === 27) {
    //keycode is an Integer, not a String
    closeModal();
  }
}

export default function closeModalByClick(e) {
  if (e.target === modal) {
    closeModal();
  }
  else if (
    e.target.classList[0] == 'modal__btns' &&
    queueBnt.classList.contains('btn--active') &&
    window.location.pathname.includes(
      '/film-library-group-project/myLibrary.html'
    )
  ) {
    moviesListMarkup('queue');
    initializeModal();
  }
  if (
    e.target.classList[0] == 'modal__btns' &&
    watchedBnt.classList.contains('btn--active') &&
    window.location.pathname.includes(
      '/film-library-group-project/myLibrary.html'
    )
  ) {
    moviesListMarkup('watched');
    initializeModal();
  }
  
}
/*  Funkcja dla inicjalizacji modala dla listy filmów,
    funkcja dodajelistener dla każdej wyświetlonej karty.
    Ze względu, iż fetch jest asynchroniczny,
    obecność kart w HTMLu jest sprawdzana co 10ms
*/
export function initializeModal() {
  const timer = setInterval(function checkForMarkup() {
    const cards = document.querySelectorAll('[data-modal-open]');

    if (cards.length !== 0) {
      for (const card of cards) {
        card.addEventListener('click', openModal);
      }
      clearInterval(timer);
    }
  }, 500);
}
