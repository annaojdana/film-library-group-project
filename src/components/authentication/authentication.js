// Firebase imports
import { initializeApp } from 'firebase/app';
import { 
  getAuth,
  connectAuthEmulator,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from 'firebase/auth';
import { hideLoginError, showFilmLibraryPage, showLoginError, showLoginForm, showLoginState } from '../authSupport/authSupport';



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

// Connecting with Firebase Emulator Suite package (personal instance for testing - working locally)
connectAuthEmulator(auth, "http://localhost:9099");

// Logging into account
const loginWithEmailAndPassword = async () => {
  const loginEmail = emailField.value;          // (emailField) Here we need use name of constant for email input obtained by querySelector
  const loginPassword = passwordField.value;    // (passwordField) Here we need use name of constant for password input obtained by querySelector

  try {
    const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    console.log(userCredential.user);
  } catch (error) {
    console.log(error);
    showLoginError();
  }
};

btnLogin.addEventListener('click', loginWithEmailAndPassword); // (btnLogin) Here we need use name of constant for button "Sign In" obtained by querySelector

// Sign In and logging into account after sign in
const createAccount = async () => {
  const loginEmail = emailField.value;          // (emailField) Here we need use name of constant for email input obtained by querySelector
  const loginPassword = passwordField.value;    // (passwordField) Here we need use name of constant for password input obtained by querySelector

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
    console.log(userCredential.user);
  } catch (error) {
    console.log(error);
    showLoginError();
  }
}

btnSignUp.addEventListener('click', createAccount);

// Registration of closure when login status changes
const checkAuthState = async () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log(user);
      showFilmLibraryPage();
      showLoginState(user);

      hideLoginError();
    } else {
      showLoginForm();
      labelForAuthState.innerHTML = "You are not logged in.";   // (labelForAuthState) - Here we need use name of constant obtained by querySelector for state message
    }
  });
}

checkAuthState();

const logout = async () => {
  await signOut(auth);
}

btnLogout.addEventListener('click', logout);  // (btnLogout) Here we need use name of constant for button "Logout" obtained by querySelector