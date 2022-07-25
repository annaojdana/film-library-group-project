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
  sendPasswordResetEmail,
  updatePhoneNumber,
  updateEmail,
  deleteUser,
} from 'firebase/auth';
import { 
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from 'firebase/storage';

// Imports for auth support functions
import {
  hideSignIn,
  showSignIn,
  hideLoginForm,
  showLoginError,
  showLoginState,
  setUserInfo,
} from '../authSupport/authSupport';

// Components and libraries imports
import resetWindowClose from '../signInUp/signInUp';
import { closeModal } from '../myAccount/myAccount';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';

// Firebase config
const firebaseConfig = {
  apiKey: 'AIzaSyBuVZAFPTm7sItk6996NRNHvCOEK_6lP0A',
  authDomain: 'filmoteka-92b11.firebaseapp.com',
  projectId: 'filmoteka-92b11',
  storageBucket: 'filmoteka-92b11.appspot.com',
  messagingSenderId: '34981551710',
  appId: '1:34981551710:web:dca8f16d865888f7eddecf',
  measurementId: 'G-S48TSLB4FG',
};

// Firebase initialization
const firebaseApp = initializeApp(firebaseConfig);

// Firebase authentication initiaization (creating instance of auth)
const auth = getAuth(firebaseApp);

// Firebase storage initiaization
const storage = getStorage();

// Inputs for login form
const loginForm = document.querySelector('.login-form');
const [email, password, rememberMe] = loginForm.elements;
const loginBtn = document.querySelector('.login-btn');

// Inputs for sign up form
const signUpForm = document.querySelector('.sign-up-form');
const [newEmail, newPassword, confirmNewPassword, terms] = signUpForm.elements;
const signUpBtn = document.querySelector('.sign-up-btn');

// Inputs for reset form
const resetForm = document.querySelector('.reset-form');
const [emailForReset] = resetForm.elements;
const resetBtn = document.querySelector('.reset-btn');

const logoutBtn = document.querySelector('.account__logout');

// Inputs for account update
const userUpdateForm = document.querySelector('.general-form');
const avatarUpdateForm = document.querySelector('.avatar-form');

// Inputs for account deletion
const deletionForm = document.querySelector('.deletion-form');

// Logging into account
const loginWithEmailAndPassword = async (evt) => {
  evt.preventDefault();
  const loginEmail = email.value;
  const loginPassword = password.value;
  if (!loginEmail) {
    Notiflix.Notify.warning('Complete the email field!');
  } else if (!loginPassword) {
    Notiflix.Notify.warning('Complete the password field!');
  } else if (loginPassword.length < 6) {
    Notiflix.Notify.warning('Password should be at least 6 characters');
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
            const userCredential = signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            return userCredential;
          })
          .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
          });
      }
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      const user = userCredential.user;
      showLoginState(user);
      setUserInfo(user);
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
    Notiflix.Notify.warning('Complete the email field!');
  } else if (!signUpPassword) {
    Notiflix.Notify.warning('Complete the password field!');
  } else if (signUpPassword.length < 6) {
    Notiflix.Notify.warning('Password should be at least 6 characters');
  } else if (!signUpPasswordConfirm) {
    Notiflix.Notify.warning('Confirm your password!');
  } else if (signUpPassword !== signUpPasswordConfirm) {
    Notiflix.Notify.warning('Password and confirmation password do not match.');
  } else if (terms.checked === false) {
    Notiflix.Notify.warning('The terms have not been accepted.');
  } else {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        signUpEmail,
        signUpPassword
      );
      const user = userCredential.user;
      const email = user.email;
      const username = email.split('@').shift();
      await updateProfile(auth.currentUser, { displayName: username });
      showLoginState(user);
      setUserInfo(user);
    } catch (error) {
      console.log(error);
      showLoginError(error);
    }
  }
};

signUpBtn.addEventListener('click', createAccount);

// Reset password
const resetPassword = async (evt) => {
  evt.preventDefault();
  const emailValue = emailForReset.value;

  if (!emailValue) {
    Notiflix.Notify.warning('Complete the email field!');
  } else {
    sendPasswordResetEmail(auth, emailValue)
      .then(() => {
        Notiflix.Notify.success('Check your email.');
        resetWindowClose();
      })
      .catch(error => {
        showLoginError(error);
      });
  }
};
resetBtn.addEventListener('click', resetPassword);

// Registration of closure when login status changes
export const checkAuthState = async () => {
  await onAuthStateChanged(auth, user => {
    if (user) {
      console.log(user);
      hideLoginForm();
      hideSignIn();
      setUserInfo(user);
    } else {
      showSignIn();
    }
  });
};

checkAuthState();

// Account logout
const logout = async () => {
  await signOut(auth);
  Notiflix.Notify.info('You have been logged out.');
};

logoutBtn.addEventListener('click', logout);

// Account update (username, phone number and email)
const userDataUpdate = async (evt) => {
  evt.preventDefault();
  const [username, phoneNumber, newEmail, currentEmail, confirmPassword] = evt.currentTarget.elements;

  if ((username.value || phoneNumber.value || newEmail.value) === "") {
    Notiflix.Notify.warning('Fill data you want to change.');
  } else if (currentEmail.value === "") {
    Notiflix.Notify.warning('Confirm with current email!');
  } else if (confirmPassword.value === "") {
    Notiflix.Notify.warning('Confirm with your password');
  } else {
    try {
      if (username.value !== "") {
        await updateProfile(auth.currentUser, {displayName: String(username.value)});
      }
  
      // if (phoneNumber.value !== "") {
      //   await updatePhoneNumber(user, String(phoneNumber.value));
      // }
  
      if (newEmail.value !== "") {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          currentEmail.value,
          confirmPassword.value,
        );
        const user = userCredential.user;
        await updateEmail(user, newEmail.value);
      }
      
      closeModal();
      checkAuthState();
      Notiflix.Notify.success('Data has been updated successfully.');
    } catch (error) {
      console.log(`${error.name}: ${error.message}`);
      Notiflix.Notify.failure('Update failed! Try again.');
    }
  }
}

userUpdateForm.addEventListener('submit', userDataUpdate);

// Account update (photoURL)
const upload = async (file, currentUser) => {
  const fileRef = ref(storage, `${currentUser.uid}.png`);

  await uploadBytes(fileRef, file);

  const photoURL = await getDownloadURL(fileRef);

  await updateProfile(auth.currentUser, {photoURL: photoURL});
}

const userAvatarUpdate = async (evt) => {
  evt.preventDefault();
  const [imageUpload] = evt.currentTarget.elements;
  const photo = imageUpload.files[0];

  if (!photo) {
    Notiflix.Notify.warning('The photo has not been selected.')
  } else {
    try {
      await upload(photo, auth.currentUser);
      closeModal();
      checkAuthState();
      Notiflix.Notify.success("The photo has been changed.");
    } catch (error) {
      console.log(`${error.name}: ${error.message}`);
      Notiflix.Notify.failure('Update failed! Try again.');
    }
  }
}

avatarUpdateForm.addEventListener('submit', userAvatarUpdate);

// Account deletion
const accountDeletion = async (evt) => {
  evt.preventDefault();
  const [password] = evt.currentTarget.elements;
  const email = auth.currentUser.email;

  if (password.value === "") {
    Notiflix.Notify.warning("Confirm with account password!");
  } else {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password.value,
      );
      const user = userCredential.user;
      await deleteUser(user);
      closeModal();
      checkAuthState();
      Notiflix.Notify.success('Your account has been deleted.');
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        Notiflix.Notify.failure('Wrong password! Try again.');
      } else {
        console.log(`${error.name}: ${error.message}`);
        Notiflix.Notify.failure('Account deletion failed! Try again.');
      }
    }
  }
}

deletionForm.addEventListener('submit', accountDeletion);