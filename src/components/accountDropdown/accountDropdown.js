function accountDropdown() {
 const accountList = document.querySelector(".account__list");
 accountList.classList.toggle("account__list--show");
}

const accountBtn = document.querySelector(".account-btn");
accountBtn.addEventListener("click", accountDropdown);

function closeAccountDropdown(evt) {
  if (!evt.target.classList.contains("account-btn")) {
    const accountList = document.querySelector(".account__list");
    if (accountList.classList.contains("account__list--show")) {
      accountList.classList.remove("account__list--show");
    }
  }
}

window.addEventListener("click", closeAccountDropdown);