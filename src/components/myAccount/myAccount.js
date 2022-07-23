import './myAccount.scss';
import {
  disableScrolling,
  enableScrolling,
} from '../scrollToggle/scrollToggle';

const openAccountBtn = document.querySelector('[data-account-open]');
const closeAccountBtn = document.querySelector('[data-account-close]');
const modalAccount = document.querySelector('[data-account]');
const backdrop = document.querySelector('body');
const avatarUplaoder = document.querySelector('.account__uploader');
const avatarImage = document.querySelector('.account__img');
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

const closeModal = () => {
  modalAccount.classList.add('is-hidden-account');
  backdrop.removeEventListener('keydown', closeEscKey);
  enableScrolling();
};

const openModal = () => {
  modalAccount.classList.remove('is-hidden-account');
  backdrop.addEventListener('keydown', closeEscKey);
  disableScrolling();
};

const closeEscKey = e => {
  let keyCode = e.keyCode;
  if (keyCode === 27) {
    closeModal();
  }
};

const closeByClick = e => {
  if (e.target === modalAccount) {
    closeModal();
  }
};

const setAvatar = input => {
  let file = input.target.files[0];
  let reader = new FileReader();

  reader.onload = () => {
    let dataUrl = reader.result;
    avatarImage.style.backgroundImage = `url('${dataUrl}')`;
  };
  reader.readAsDataURL(file);
};

openAccountBtn.addEventListener('click', openModal);
closeAccountBtn.addEventListener('click', closeModal);
modalAccount.addEventListener('click', closeByClick);
avatarUplaoder.addEventListener('change', setAvatar);
links.forEach(el =>
  el.addEventListener('click', e => {
    return accountSupport(el);
  })
);
