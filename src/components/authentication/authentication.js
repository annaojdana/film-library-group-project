// Firebase imports
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
  setPersistence,
  browserSessionPersistence,
  sendPasswordResetEmail
} from 'firebase/auth';
import { hideSignIn, showSignIn, hideLoginForm, showLoginError, showLoginState } from '../authSupport/authSupport';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';
import resetWindowClose from '../signInUp/signInUp';

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBuVZAFPTm7sItk6996NRNHvCOEK_6lP0A",
  authDomain: "filmoteka-92b11.firebaseapp.com",
  projectId: "filmoteka-92b11",
  storageBucket: "filmoteka-92b11.appspot.com",
  messagingSenderId: "34981551710",
  appId: "1:34981551710:web:dca8f16d865888f7eddecf",
  measurementId: "G-S48TSLB4FG"
};

// Firebase initialization
const firebaseApp = initializeApp(firebaseConfig);

// Firebase authentication initiaization (creating instance of auth)
const auth = getAuth(firebaseApp);
// Inputs for login form
const loginForm = document.querySelector(".login-form");
const [email, password, rememberMe] = loginForm.elements;
const loginBtn = document.querySelector(".login-btn");

// Inputs for sign up form
const signUpForm = document.querySelector(".sign-up-form");
const [newEmail, newPassword, confirmNewPassword, terms] = signUpForm.elements;
const signUpBtn = document.querySelector(".sign-up-btn");

// Inputs for reset form
const resetForm = document.querySelector(".reset-form");
const [emailForReset] = resetForm.elements;
const resetBtn = document.querySelector(".reset-btn");


const logoutBtn = document.querySelector(".logout-link");

// Logging into account
const loginWithEmailAndPassword = async (evt) => {
  evt.preventDefault();
  const loginEmail = email.value;
  const loginPassword = password.value;
  if (!loginEmail) {
    Notiflix.Notify.warning("Complete the email field!");
  } else if (!loginPassword) {
    Notiflix.Notify.warning("Complete the password field!");
  } else if (loginPassword.length < 6) {
    Notiflix.Notify.warning("Password should be at least 6 characters");
  } else {
    try {
      if (rememberMe.checked === false) {
       setPersistence(auth, browserSessionPersistence)
      .then(() => {
        // Existing and future Auth states are now persisted in the current
        // session only. Closing the window would clear any existing state even
        // if a user forgets to sign out.
        // ...
        // New sign-in will be persisted with session persistence.
        const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        return userCredential;
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
      });
      }
      const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      showLoginState(userCredential.user);
    } catch (error) {
      showLoginError(error);
    }
  }
};

loginBtn.addEventListener('click', loginWithEmailAndPassword);

// Sign Up and logging into account after sign up
const createAccount = async (evt) => {
  evt.preventDefault();
  const signUpEmail = newEmail.value;
  const signUpPassword = newPassword.value;
  const signUpPasswordConfirm = confirmNewPassword.value;

  if (!signUpEmail) {
    Notiflix.Notify.warning("Complete the email field!");
  } else if (!signUpPassword) {
    Notiflix.Notify.warning("Complete the password field!");
  } else if (signUpPassword.length < 6) {
    Notiflix.Notify.warning("Password should be at least 6 characters");
  } else if (!signUpPasswordConfirm) {
    Notiflix.Notify.warning("Confirm your password!");
  } else if (signUpPassword !== signUpPasswordConfirm) {
    Notiflix.Notify.warning("Password and confirmation password do not match.");
  } else if (terms.checked === false) {
    Notiflix.Notify.warning("The terms have not been accepted.");
  } else {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword);
      const user = userCredential.user;
      const email = user.email;
      const username = email.split("@").shift();
      await updateProfile(auth.currentUser, {displayName: username});
      showLoginState(userCredential.user);
    } catch (error) {
      console.log(error);
      showLoginError(error);
    }
  }
}

signUpBtn.addEventListener('click', createAccount);

// Reset password

const resetPassword = async (evt) => {
  evt.preventDefault();
  const emailValue = emailForReset.value;

  if (!emailValue) {
    Notiflix.Notify.warning("Complete the email field!");
  } else {
    sendPasswordResetEmail(auth, emailValue)
      .then(() => {
        Notiflix.Notify.success("Check your email.")
        resetWindowClose();
      })
      .catch((error) => {
        showLoginError(error);
      });
  }
}
resetBtn.addEventListener('click', resetPassword);

// Registration of closure when login status changes
export const checkAuthState = async () => {
  await onAuthStateChanged(auth, user => {
    if (user) {
      console.log(user);
      hideLoginForm();

      hideSignIn();
    } else {
      showSignIn();
    }
  });
}

checkAuthState();

const logout = async () => {
  await signOut(auth);
  Notiflix.Notify.info("You have been logged out.");
}

logoutBtn.addEventListener('click', logout);