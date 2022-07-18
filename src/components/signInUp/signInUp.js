import './signInUp.scss';


const signModal = document.querySelector("[data-signIn]");
const closeBtn = document.querySelectorAll("[data-sign-close]");
const openSignWindow = document.querySelector(".signIn-link");
const signWindow = document.querySelector(".sign__window");
const signup = document.querySelector(".signup-link");
const login = document.querySelector(".login-link");


openSignWindow.addEventListener("click",() => {
  signModal.classList.remove("is-hidden");
})
closeBtn.forEach(item => item.addEventListener("click", () => {
  signModal.classList.add("is-hidden");
}
));
signup.addEventListener("click", () => {
  signWindow.classList.add("active");
})

login.addEventListener("click", () => {
  signWindow.classList.remove("active");
})