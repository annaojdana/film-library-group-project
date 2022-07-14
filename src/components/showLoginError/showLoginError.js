import { AuthErrorCodes } from "firebase/auth";

export default function showLoginError(error) {
  if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
    loginErrorMessage.innerHTML = "Wrong password! Try again.";   // (loginErrorMessage) - Here we need use name of constant for div output to show message obtained by querySelector
  } else {
    loginErrorMessage.innerHTML = `Error: ${error.message}`;      // (loginErrorMessage) - Here we need use name of constant for div output to show message obtained by querySelector
  }
}