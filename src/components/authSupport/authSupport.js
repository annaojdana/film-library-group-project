import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';

const signModal = document.querySelector('[data-signIn]');
const signInLink = document.querySelector('.nav__signIn');
const accountBtn = document.querySelector('.nav__account');
const photoOutput = document.querySelector('.info__photo');
const usernameOutput = document.querySelector('.info__name');
const emailOutput = document.querySelector('.info__email');
const phoneOutput = document.querySelector('.info__phone');

export const showLoginForm = () => {
  signModal.classList.remove('is-hidden');
}

export const hideLoginForm = () => {
  signModal.classList.add('is-hidden');
}

export const showLoginError = (error) => {
  if (error.code === 'auth/wrong-password') {
    Notiflix.Notify.failure('Wrong password! Try again.');
  } else if (error.code === 'auth/invalid-email') {
    Notiflix.Notify.failure('Invalid email! Try again.');
  } else if (error.code === 'auth/user-not-found') {
    Notiflix.Notify.failure('User not found! Try again or sign up');
  } else {
    Notiflix.Notify.failure(`Error: ${error.message}`);
  }
}

export const hideSignIn = () => {
  signInLink.style.display = 'none';
  accountBtn.style.display = 'list-item';
}

export const showSignIn = () => {
  accountBtn.style.display = 'none';
  signInLink.style.display = 'list-item';
}

export const startHiding = () => {
  signInLink.style.display = 'none';
  accountBtn.style.display = 'none';
}

export const showLoginState = ({displayName}) => {
  Notiflix.Notify.success(`You are logged in as ${displayName}`);
}

export const setUserInfo = ({photoURL, displayName, email, phoneNumber}) => {
  (photoURL)
    ? photoOutput.src = photoURL
    : photoOutput.src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";

  (displayName)
    ? usernameOutput.innerHTML = displayName
    : usernameOutput.innerHTML = "-";

  (email)
    ? emailOutput.innerHTML = email
    : emailOutput.innerHTML = "-";

  (phoneNumber)
    ? phoneOutput.innerHTML = phoneNumber
    : phoneOutput.innerHTML = "-";
}