// Importing API handler - trending movies list
import fetchTrendyMovies from '../fetchTrendyMovies/fetchTrendyMovies';
import getGenresNames from '../getGenresNames/getGenresNames';
import getFromLocalStorage from '../getFromLocalStorage/getFromLocalStorage.js';
import createPagination from '../pagination/pagination';
// Internal function for creating HTML markup
const htmlMarkup = data =>
  data
    .map(
      ({ poster_path, title, genre_ids, release_date, vote_average, id }) => `
      <div class="item" data-id="${id}" data-modal-open>
        <img class="item__image" src="https://image.tmdb.org/t/p/w300${poster_path}" alt=" Poster of: ${title}" />
        <div class="item__info">
          <h3 class="item__title">${title}</h3>
          <p class="item__genres" data-genres>${getGenresNames(genre_ids)}</p>
          <span class)="item__separator">|</span>
          <p class="item__year">${new Date(release_date).getFullYear()}</p>
          <p class="item__rating">${Number(vote_average).toFixed(1)}</p>
        </div>
      </div>
      `
    )
    .join('');
// Main function for HTML markup output
export default function moviesListMarkup(pageNumber = 1, whatToOutput = 'trending') {
  // Variable for selecting output tag
  const markupOutput = document.querySelector('[data-markup-output]');

  switch (whatToOutput) {
    case 'trending':
      fetchTrendyMovies(pageNumber)
        .then(response => {
          page = response.page;
          totalPages = response.total_pages;

          markupOutput.innerHTML = "";

          markupOutput.insertAdjacentHTML(
            'beforeend',
            htmlMarkup(response.results)
          );

          const element = document.querySelector(".pagination ul");
          element.innerHTML = createPagination(totalPages, page);
        })
        .catch(error => console.error(error));
      break;

    case 'watched':
      if (getFromLocalStorage('watched') !== []) {
        return markupOutput.insertAdjacentHTML(
          'beforeend',
          htmlMarkup(getFromLocalStorage('watched'))
        );
      } else {
        console.log('localStorage queue empty');
      }
      break;

    case 'queue':
      if (getFromLocalStorage('queue') !== []) {
        return markupOutput.insertAdjacentHTML(
          'beforeend',
          htmlMarkup(getFromLocalStorage('queue'))
        );
      } else {
        console.log('localStorage queue empty');
      }
      break;

    default:
      fetchTrendyMovies()
        .then(response => {
          return htmlMarkup(response.results);
        })
        .catch(error => console.error(error));
      break;
  }
}

// Użycie:
// ! ! ! WAŻNE ! ! !
// Najpierw do tagu, gdzie ma renderować się markup. nalezy dodać atrybut 'data-markup-output'

// moviesListMarkup() - domyślne zachowanie - wyświetla filmy z API - trending;
// moviesListMarkup('trending') - j.w.
// moviesListMarkup('queue') - wyświetla filmy umieszczone w zbiorze 'queue'
// moviesListMarkup('watched') - wyświetla filmy umieszczone w zbiorze 'watched'
