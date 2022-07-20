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

closeModalBtn.addEventListener('click', closeModal);
modalTeam.addEventListener('click', closeByClick);
teamLink.addEventListener('click', openModal);

modalTeam.classList.remove('is-hidden-bugfix'); //Bugfix

function closeModal() {
  modalTeam.classList.add('is-hidden');
  backdrop.removeEventListener('keydown', closeEscKey);
  enableScrolling();
}

function openModal() {
  modalTeam.classList.remove('is-hidden');
  console.log(modalTeam);
  backdrop.addEventListener('keydown', closeEscKey);
  disableScrolling();
}
function closeEscKey(e) {
  let keyCode = e.keyCode;
  if (keyCode === 27) {
    //keycode is an Integer, not a String
    closeModal();
  }
}

function closeByClick(e) {
  if (e.target === modalTeam) {
    closeModal();
  }
}