// Imports
// import getGenresNames from '../getGenresNames/getGenresNames';
import fetchMoviesById from '../fetchMovieById/fetchMovieById';
import getFromLocalStorage from '../getFromLocalStorage/getFromLocalStorage';
import { removeModalLoader } from '../loader/loader';

// Internal function for creating HTML markup
const htmlMarkup = ({
  poster_path,
  title,
  vote_average,
  vote_count,
  popularity,
  genres,
  overview,
  id,
}) => {
  // Checking if a given movie exists in localStorage and adapting the appropriate name
  const btnNames = ['watched', 'queue'];
  const btnLabel = btnNames.map(name => {
    if (!getFromLocalStorage(name)) {
      return (name = `Add to ${name}`);
    } else if (getFromLocalStorage(name).length === 0) {
      return (name = `Add to ${name}`);
    } else if (getFromLocalStorage(name).includes(id)) {
      return (name = `Remove from ${name}`);
    } else {
      return (name = `Add to ${name}`);
    }
  });

  const watchedlabel = btnLabel[0];
  const queuelabel = btnLabel[1];

  let imgSrc = `https://image.tmdb.org/t/p/w300${poster_path}`;
  let imgAlt = `Poster of: ${title}`;
  let genresNames = `${genres.map(g => g.name).join(', ')}`;

  if (poster_path === null) {
    imgSrc = new URL('../../images/no_image.png', import.meta.url);
    imgAlt = `There is no picture for this video. Placeholder no image.`;
  }
  if (genres.length === 0) {
    genresNames = 'no movie genre';
  }

  // Render of a modal for the selected movie
  return `
  <div class="movie__card--wrapper">
    <img class="movie__image" src="${imgSrc}" alt="Poster of: ${imgAlt}" loading="lazy">
    <div class="movie__info">
      <h2 class="movie__title">${title}</h2>
      <ul class="movie__details">
        <li class="details__item"><span class=" details__label">Vote / Votes</span><span class="details__value"><span class="details__rating">${Number(
          vote_average
        ).toFixed(1)}</span> /
        ${vote_count}</span></li>
        <li class="details__item"><span class=" details__label">Popularity</span><span class="details__value">${Number(
          popularity
        ).toFixed(0)}</span></li>
        <li class="details__item"><span class=" details__label">Original Title</span><span class="details__value details__title">${title}</span>
        </li>
        <li class="details__item"><span class=" details__label">Genre</span><span class="details__value">${genresNames}</span></li>
      </ul>
      <h3 class="movie__label">About</h3>
      <p class="movie__about">${overview}</p>

      <div class="modal__btns--wrapper">
        <button type="button" class="modal__btns modal__btns--watch" data-name="watched" data-id=${id}>${watchedlabel}</button>
        <button type="button" class="modal__btns modal__btns--queue" data-name="queue" data-id=${id}>${queuelabel}</button>
      </div>
    </div>
  </div>
  `;
};

export default function movieModalMarkup(id) {
  // Variable for selecting output tag
  const htmlOutput = document.querySelector('.modal--wrapper');

  fetchMoviesById(id)
    .then(response => {
      htmlOutput.insertAdjacentHTML('beforeend', htmlMarkup(response));
      removeModalLoader();
      return;
    })
    .catch(error => console.error(error));
}

// Użycie:
// ! ! ! WAŻNE ! ! !
// Najpierw do tagu, gdzie ma renderować się markup. nalezy dodać atrybut 'data-markup-output'

// moviesListMarkup() - domyślne zachowanie - wyświetla filmy z API - trending;
// moviesListMarkup('trending') - j.w.
// moviesListMarkup('queue') - wyświetla filmy umieszczone w zbiorze 'queue'
// moviesListMarkup('watched') - wyświetla filmy umieszczone w zbiorze 'watched'
