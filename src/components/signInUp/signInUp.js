import movieModalMarkup from '../movieModalMarkup/movieModalMarkup';
import './signInUp.scss';

const signModal = document.querySelector('[data-signIn]');
const closeBtn = document.querySelectorAll('[data-sign-close]');
const closeResetBtn = document.querySelector('[data-reset-close]');
const openSignWindow = document.querySelector('.signIn-link');
const signWindow = document.querySelector('.sign__window');
const resetWindow = document.querySelector('.reset__window');
const signup = document.querySelector('.signup-link');
const login = document.querySelector('.login-link');
const resetPasswordLink = document.querySelector('.reset-link');

// Bugfix dla skakających okien
signModal.classList.remove('is-hidden-bugfix');

openSignWindow.addEventListener('click', () => {
  signModal.classList.remove('is-hidden');
});

closeBtn.forEach(item =>
  item.addEventListener('click', () => {
    signModal.classList.add('is-hidden');
    signWindow.classList.remove('active');
  })
);

signup.addEventListener('click', () => {
  signWindow.classList.add('active');
});

login.addEventListener('click', () => {
  signWindow.classList.remove('active');
});

resetPasswordLink.addEventListener('click', () => {
  resetWindow.classList.remove('is-hidden');
  signWindow.classList.add('is-hidden');
});

closeResetBtn.addEventListener('click', resetWindowClose);

export default function resetWindowClose() {
  resetWindow.classList.add('is-hidden');
  signWindow.classList.remove('is-hidden');
}
