import './movieModal.scss';

import movieModalMarkup from '../movieModalMarkup/movieModalMarkup';
import getFromLocalStorage from "../getFromLocalStorage/getFromLocalStorage";
import supportForMyLibrary from '../supportForMyLibrary/supportForMyLibrary';

const closeModalBtn = document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-modal]');
const page = document.querySelector("body");

closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', closeModalByClick);

export function closeModal() {
  modal.classList.add('is-hidden');
  const htmlOutput = document.querySelector(".modal--wrapper");
  htmlOutput.innerHTML = ``;
  page.removeEventListener('keydown', closeModalEscKey);
}

// Funkcja jest lokalna, ponieważ nie jest potrzebna poza tym plikiem
function openModal(evt) {
  modal.classList.remove('is-hidden');
  page.addEventListener('keydown', closeModalEscKey); //musi być body, jeżeli damy tylko kontenr modala to aby zamknąć modal Esc trzeba najpierw nacisnąć Tab
  if (evt.currentTarget.classList.contains("item")) {
    const movieId = evt.currentTarget.dataset.id;
    movieModalMarkup(movieId);
      }
}
function closeModalEscKey(e) {
  let keyCode = e.keyCode;

  if (keyCode === 27) {//keycode is an Integer, not a String
    closeModal();
    
    
  }
  
};

function closeModalByClick(e) {

  if (e.target === modal) {
    closeModal();
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
  }, 10);
}