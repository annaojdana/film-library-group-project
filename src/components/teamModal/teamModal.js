import '../movieModal/movieModal.scss';
import {
  disableScrolling,
  enableScrolling,
} from '../scrollToggle/scrollToggle';
import './teamModal.scss';

const teamLink = document.querySelector('[data-team]');
const closeModalBtn = document.querySelector('[data-team-modal-close]');
const modalTeam = document.querySelector('[data-team-modal]');
const backdrop = document.querySelector('body');
const closeModal = () => {
  modalTeam.classList.add('is-hidden');
  backdrop.removeEventListener('keydown', closeEscKey);
  enableScrolling();
}

const openModal = () => {
  modalTeam.classList.remove('is-hidden');
  backdrop.addEventListener('keydown', closeEscKey);
  disableScrolling();
}
const closeEscKey = (e) => {
  let keyCode = e.keyCode;
  if (keyCode === 27) {
    //keycode is an Integer, not a String
    closeModal();
  }
}

const closeByClick = () => {
  if (e.target === modalTeam) {
    closeModal();
  }
}
closeModalBtn.addEventListener('click', closeModal);
modalTeam.addEventListener('click', closeByClick);
teamLink.addEventListener('click', openModal);

modalTeam.classList.remove('is-hidden-bugfix'); //Bugfix

