import movieModalMarkup from '../movieModalMarkup/movieModalMarkup';

export default function openModal(event) {
  if (event.target.className !== "item__image") {
    return;
  }
  const modal = document.querySelector('[data-modal]');

  console.log("event.target: ", event.target);
  modal.classList.remove('is-hidden');
  localStorage.setItem("showMovieId", JSON.stringify(event.target.parentElement.dataset.id));
  movieModalMarkup(event.target.parentElement.dataset.id);
}


