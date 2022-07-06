import './movieModal.scss';



const closeModalBtn = document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-modal]');

console.log(closeModalBtn);


 closeModalBtn.addEventListener("click", toggleModal);

export function toggleModal() {
  modal.classList.toggle('is-hidden');
    }

