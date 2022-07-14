// Importing API handler - trending movies list
import fetchTrendyMovies from '../fetchTrendyMovies/fetchTrendyMovies';
import fetchMovieById from '../fetchMovieById/fetchMovieById';
import getGenresNames from '../getGenresNames/getGenresNames';
import getFromLocalStorage from '../getFromLocalStorage/getFromLocalStorage.js';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import createPagination from '../pagination/pagination';

// Selecting output tag
const markupOutput = document.querySelector('[data-markup-output]');

// Internal function for creating HTML markup
const htmlMarkup = data =>
  data
    .map(
      ({ poster_path, title, genre_ids, release_date, vote_average, id }) => {
        if (poster_path === null) {
        return `
        <div class="item" data-id="${id}" data-modal-open>
        <img class="item__image" src="./img/no_image.png" alt="Placeholder no image" />
        <div class="item__info">
          <h3 class="item__title">${title}</h3>
          <p class="item__genres" data-genres>${getGenresNames(genre_ids)}</p>
          <span class)="item__separator">|</span>
          <p class="item__year">${new Date(release_date).getFullYear()}</p>
          <p class="item__rating">${Number(vote_average).toFixed(1)}</p>
        </div>
      </div>
      `
        }
       return `
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
      }
    )
    .join('');

// Function fot displaying cards from localStorage's id array
function displayFromIdArray(source) {
  const displayedIdArray = getFromLocalStorage(source);

  if (displayedIdArray === null || displayedIdArray.length === 0) {
    displayEmptyListInfo();
    return console.log('Queue is empty!');
  } else {
    const fetchedDataArray = [];
    const counter = displayedIdArray.length;
    let idArray = [];

    for (const id of displayedIdArray) {
      fetchMovieById(id)
        .then(response => {
          fetchedDataArray.push(response);

          if (fetchedDataArray.length === counter) {
            for (let i = 0; i < fetchedDataArray.length; i++) {
              const genres = fetchedDataArray[i].genres;

              for (const genre of genres) {
                const id = genre.id;
                idArray.push(id);

                if (genres.length === idArray.length) {
                  fetchedDataArray[i].genre_ids = idArray;
                  idArray = [];
                }
              }
            }
            markupOutput.dataSet.outputType = source;
            return (markupOutput.innerHTML = htmlMarkup(fetchedDataArray));
          } else {
          }
        })
        .catch(error => console.error(error));
    }
  }
}

// Main function for HTML markup output
export default function moviesListMarkup(
  whatToOutput = 'trending',
  pageNumber = 1
) {
  // Variable for selecting output tag
  // const markupOutput = document.querySelector('[data-markup-output]');
  switch (whatToOutput) {
    case 'trending':
      fetchTrendyMovies(pageNumber)
        .then(response => {
          Loading.remove();
          page = response.page;
          totalPages = response.total_pages;

          markupOutput.innerHTML = '';

          markupOutput.insertAdjacentHTML(
            'beforeend',
            htmlMarkup(response.results)
          );

          const element = document.querySelector('.pagination ul');
          element.innerHTML = createPagination(totalPages, page);
          markupOutput.dataset.outputType = 'trending';
          console.log(markupOutput.dataset);
        })
        .catch(error => console.error(error));
      break;

    case 'watched':
      if (getFromLocalStorage('watched') !== []) {
        Loading.remove();

        return displayFromIdArray('watched');
      } else {
        displayEmptyListInfo();
      }
      break;

    case 'queue':
      Loading.remove();

      if (getFromLocalStorage('queue') !== []) {
        return displayFromIdArray('queue');
      } else {
        displayEmptyListInfo();
      }
      break;

    default:
      fetchTrendyMovies()
        .then(response => {
          Loading.remove();

          console.log(`output markupu dla 'trending'`);
          return (markupOutput.innerHTML = htmlMarkup(response.results));
        })
        .catch(error => console.error(error));
      break;
  }
}

// Internal function for displaying info,
// for empty "watched" and "queue" localStorage
function displayEmptyListInfo() {
  markupOutput.innerHTML = `<h2 class="movies__empty-info">Sorry! Collection is empty!</h2>`;
}

// Użycie:
// ! ! ! WAŻNE ! ! !
// Najpierw do tagu, gdzie ma renderować się markup. nalezy dodać atrybut 'data-markup-output'

// moviesListMarkup() - domyślne zachowanie - wyświetla filmy z API - trending;
// moviesListMarkup('trending') - j.w.
// moviesListMarkup('queue') - wyświetla filmy umieszczone w zbiorze 'queue'
// moviesListMarkup('watched') - wyświetla filmy umieszczone w zbiorze 'watched'
