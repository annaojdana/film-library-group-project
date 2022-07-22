import './myAccount.scss';
import './../../scss/_backdrop.scss';
import {
  disableScrolling,
  enableScrolling,
} from '../scrollToggle/scrollToggle';

const generalIcon = document.querySelector('.general'),
  passwordIcon = document.querySelector('.password'),
  avatarIcon = document.querySelector('.avatar'),
  deleteIcon = document.querySelector('.delete-account');

const closeModalBtn = document.querySelector('[data-account-close]');
const modalAccount = document.querySelector('[data-account]');
const backdrop = document.querySelector('body');

const links = [...document.querySelectorAll('.account__link')];
const cards = [...document.querySelectorAll('.account__card')];

const checkActiveIcon = el => {
  const accountLinks = [...el.parentElement.children];
  let currentIcon = el.children[0];
  accountLinks.forEach(sib => sib.children[0].classList.remove('checked'));
  currentIcon.classList.add('checked');
};
const setCard = el => {
  const cardId = el.href.split('#')[1];
  cards.forEach(sib => {
    sib.id !== cardId
      ? sib.classList.remove('active-card')
      : sib.classList.add('active-card');
  });
};

const accountSupport = el => {
  checkActiveIcon(el);
  setCard(el);
};

links.forEach(el =>
  el.addEventListener('click', e => {
    return accountSupport(el);
  })
);

const closeModal = () => {
  console.log('object');
  modalAccount.classList.add('is-hidden');
  backdrop.removeEventListener('keydown', closeEscKey);
  enableScrolling();
};

const openModal = () => {
  modalAccount.classList.remove('is-hidden');
  backdrop.addEventListener('keydown', closeEscKey);
  disableScrolling();
};
const closeEscKey = e => {
  let keyCode = e.keyCode;
  if (keyCode === 27) {
    //keycode is an Integer, not a String
    closeModal();
  }
};

closeModalBtn.addEventListener('click', closeModal);
// modalAccount.addEventListener('click', closeByClick);
// accountLink.addEventListener('click', openModal);
