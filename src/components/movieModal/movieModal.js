import './movieModal.scss';

import movieModalMarkup from '../movieModalMarkup/movieModalMarkup';
import getFromLocalStorage from '../getFromLocalStorage/getFromLocalStorage';
import supportForMyLibrary from '../supportForMyLibrary/supportForMyLibrary';
import moviesListMarkup from '../moviesListMarkup/moviesListMarkup';
import { displayModalLoader, removeModalLoader } from '../loader/loader';
import {
  disableScrolling,
  enableScrolling,
} from '../scrollToggle/scrollToggle';

const closeModalBtn = document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-modal]');
const backdrop = document.querySelector('body');
const htmlOutput = document.querySelector('.modal--wrapper');
const queueBnt = document.querySelector('[data-display-selector="queue"]');
const watchedBnt = document.querySelector('[data-display-selector="watched"]');

closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', closeModalByClick);

modal.classList.remove('is-hidden-bugfix');

let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener(
  'resize',
  (dynamicModalResizing = () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  })
);

export function closeModal() {
  modal.classList.add('is-hidden');
  backdrop.removeEventListener('keydown', closeModalEscKey);
  enableScrolling();
}

// Funkcja jest lokalna, ponieważ nie jest potrzebna poza tym plikiem
export function openModal(evt) {
  htmlOutput.innerHTML = ``;
  displayModalLoader();

  modal;
  modal.classList.remove('is-hidden');
  backdrop.addEventListener('keydown', closeModalEscKey); //musi być body, jeżeli damy tylko kontenr modala to aby zamknąć modal Esc trzeba najpierw nacisnąć Tab
  if (evt.currentTarget.classList.contains('item')) {
    const movieId = evt.currentTarget.dataset.id;
    movieModalMarkup(movieId);
    disableScrolling();
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
  } else if (
    window.location.pathname.includes(
      '/film-library-group-project/myLibrary.html'
    ) &&
    e.target.classList[0] == 'modal__btns' &&
    queueBnt.classList.contains('btn--active')
  ) {
    moviesListMarkup('queue');
    initializeModal();
  }
  if (
    window.location.pathname.includes(
      '/film-library-group-project/myLibrary.html'
    ) &&
    e.target.classList[0] == 'modal__btns' &&
    watchedBnt.classList.contains('btn--active')
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
