import { AuthErrorCodes } from "firebase/auth";
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';

const signModal = document.querySelector("[data-signIn]");
const signInLink = document.querySelector(".nav__signIn");
const logoutLink = document.querySelector(".nav__logout");

export function showLoginForm() {
  signModal.classList.remove("is-hidden");
}

export function hideLoginForm() {
  signModal.classList.add("is-hidden");
}

export function showLoginError() {
  console.log(error);
  if (error.message === AuthErrorCodes.INVALID_PASSWORD) {
    Notiflix.Notify.failure("Wrong password! Try again.");
  } else {
    Notiflix.Notify.failure(`Error: ${error.message}`);
  }
}

export function hideSignIn() {
  signInLink.style.display = "none";
  logoutLink.style.display = "list-item";
}

export function showSignIn() {
  logoutLink.style.display = "none";
  signInLink.style.display = "list-item";
}

export function showLoginState(user) {
  Notiflix.Notify.success(`You are logged in as ${user.displayName}`);
}