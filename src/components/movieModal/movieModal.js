import './movieModal.scss';

const closeModalBtn = document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-modal]');
console.log(modal);

console.log(closeModalBtn);

closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  modal.classList.toggle('is-hidden');
}

export function initializeModal() {
  const timer = setInterval(function checkForMarkup() {
    cards = document.querySelectorAll('[data-modal-open]');

    if (cards.length !== 0) {
      for (const card of cards) {
        card.addEventListener('click', toggleModal);
      }
      clearInterval(timer);
    }
  }, 10);
}
