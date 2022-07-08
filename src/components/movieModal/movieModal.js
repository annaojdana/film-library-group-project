import './movieModal.scss';

const closeModalBtn = document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-modal]');
console.log(modal);
let i = 1;
console.log(closeModalBtn);

closeModalBtn.addEventListener('click', toggleModal);

// Funkcja jest lokalna, ponieważ nie jest potrzebna poza tym plikiem
function toggleModal() {
  modal.classList.toggle('is-hidden');
}

// Funkcja dla inicjalizacji modala dla listy filmów,
// funkcja dodajelistener dla każdej wyświetlonej karty.
// Ze względu, iż fetch jest asynchroniczny,
// obecność kart w HTMLu jest sprawdzana co 10ms
export function initializeModal() {
  const timer = setInterval(function checkForMarkup() {
    const cards = document.querySelectorAll('[data-modal-open]');

    if (cards.length !== 0) {
      for (const card of cards) {
        console.log('listener dla karty nr:', i);
        i++;
        card.addEventListener('click', toggleModal);
      }
      clearInterval(timer);
    }
  }, 10);
}
