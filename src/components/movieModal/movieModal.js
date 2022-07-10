import './movieModal.scss';

import movieModalMarkup from '../movieModalMarkup/movieModalMarkup';
import getFromLocalStorage from "../getFromLocalStorage/getFromLocalStorage";

const closeModalBtn = document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-modal]');

closeModalBtn.addEventListener('click', toggleModal);

export function closeModal() {
  modal.classList.add('is-hidden');
  const htmlOutput = document.querySelector(".modal--wrapper");
  htmlOutput.innerHTML = "";
}

// Funkcja jest lokalna, ponieważ nie jest potrzebna poza tym plikiem
function toggleModal() {
  modal.classList.toggle('is-hidden');
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
        card.addEventListener('click', toggleModal);
        movieModalMarkup()
      }
      clearInterval(timer);
    }
  }, 10);
}