import { AuthErrorCodes } from "firebase/auth";

export function showLoginForm() {
  loginForm.style.display = "block";        // (loginForm) - Here we need use name of constant for login form obtained by querySelector
  filmLibraryPage.style.display = "none";   // (filmLibraryPage) - Here we need use name of constant for "Filmoteka" page form obtained by querySelector
}

export function showFilmLibraryPage() {
  loginForm.style.display = "none";         // (loginForm) - Here we need use name of constant for login form obtained by querySelector
  filmLibraryPage.style.display = "block";  // (filmLibraryPage) - Here we need use name of constant for "Filmoteka" page form obtained by querySelector
}

export function showLoginError(error) {
  loginErrMessWrapper.style.display = "block";                    // (loginErrMessContainer) - Here we need use name of constant for output wrapper to show message obtained by querySelector
  if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
    loginErrorMessage.innerHTML = "Wrong password! Try again.";   // (loginErrorMessage) - Here we need use name of constant for output to show message obtained by querySelector
  } else {
    loginErrorMessage.innerHTML = `Error: ${error.message}`;      // (loginErrorMessage) - Here we need use name of constant for output to show message obtained by querySelector
  }
}

export function hideLoginError() {
  loginErrMessWrapper.style.display = "none";       // (loginErrMessContainer) - Here we need use name of constant for output wrapper to show message obtained by querySelector
  loginErrorMessage.innerHTML = '';                 // (loginErrorMessage) - Here we need use name of constant for output to show message obtained by querySelector
}

export function showLoginState(user) {
  labelForAuthState.innerHTML = `You are logged in as ${user.displayName}`;   // (labelForAuthState) - Here we need use name of constant obtained by querySelector for state message
}