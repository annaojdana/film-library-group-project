import './movieModal.scss';
import movieModalMarkup from '../movieModalMarkup/movieModalMarkup';
import getFromLocalStorage from "../getFromLocalStorage/getFromLocalStorage";


const closeModalBtn = document.querySelector('[data-modal-close]');
closeModalBtn.addEventListener("click", closeModal);



export function closeModal() {
  const modal = document.querySelector('[data-modal]');
  modal.classList.add('is-hidden');
  localStorage.removeItem("showMovieId");
  localStorage.removeItem("movieData");
  const htmlOutput = document.querySelector(".modal--wrapper");
  htmlOutput.innerHTML = "";
    }

