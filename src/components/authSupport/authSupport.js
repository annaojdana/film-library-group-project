import { AuthErrorCodes } from 'firebase/auth';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';

const signModal = document.querySelector('[data-signIn]');
const signInLink = document.querySelector('.nav__signIn');
const accountBtn = document.querySelector('.nav__account');

export function showLoginForm() {
  signModal.classList.remove('is-hidden');
}

export function hideLoginForm() {
  signModal.classList.add('is-hidden');
}

export function showLoginError(error) {
  console.log(error);
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

export function hideSignIn() {
  signInLink.style.display = 'none';
  accountBtn.style.display = 'list-item';
}

export function showSignIn() {
  accountBtn.style.display = 'none';
  signInLink.style.display = 'list-item';
}

export function startHiding() {
  signInLink.style.display = 'none';
  accountBtn.style.display = 'none';
}

export function showLoginState(user) {
  Notiflix.Notify.success(`You are logged in as ${user.displayName}`);
}