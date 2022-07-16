// Firebase imports
import { initializeApp } from 'firebase/app';
import { 
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut
} from 'firebase/auth';
import { hideSignIn, showSignIn, hideLoginForm, showLoginError, showLoginState } from '../authSupport/authSupport';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';

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

const logoutBtn = document.querySelector(".logout-link");

// Logging into account
const loginWithEmailAndPassword = async (evt) => {
  evt.preventDefault();
  const loginEmail = email.value;
  const loginPassword = password.value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
  } catch (error) {
    console.log(error);
    showLoginError();
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
      const user = auth.currentUser;
      const email = user.email;
      const username = email.split("@").shift();
      updateProfile(auth.currentUser, {displayName: username});
    } catch (error) {
      console.log(error);
      showLoginError(error);
    }
  }
}

signUpBtn.addEventListener('click', createAccount);

// Registration of closure when login status changes
const checkAuthState = async () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log(user);
      hideLoginForm();
      showLoginState(user);

      hideSignIn();
    } else {
      showSignIn();
      Notiflix.Notify.info("You are not logged in.");
    }
  });
}

checkAuthState();

const logout = async () => {
  await signOut(auth);
}

logoutBtn.addEventListener('click', logout);