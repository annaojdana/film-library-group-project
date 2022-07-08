import './movieModal.scss';
// import moviePosterModalMarkup from '../movieModalMarkup/movieModalMarkup';
import movieModalMarkup from '../movieModalMarkup/movieModalMarkup';

// moviePosterModalMarkup();
movieModalMarkup();
const closeModalBtn = document.querySelector('[data-modal-close]');
closeModalBtn.addEventListener("click", closeModal);



export function closeModal() {
  const modal = document.querySelector('[data-modal]');
  modal.classList.add('is-hidden');
    }

