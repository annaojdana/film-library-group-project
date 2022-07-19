// Importing API handler - trending movies list
import fetchTrendyMovies from '../fetchTrendyMovies/fetchTrendyMovies';
import fetchMovieById from '../fetchMovieById/fetchMovieById';
import getGenresNames from '../getGenresNames/getGenresNames';
import getFromLocalStorage from '../getFromLocalStorage/getFromLocalStorage.js';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { createPagination, removePagination } from '../pagination/pagination';
import { CARDS_PER_PAGE } from '../pagination/pagination';
import spinnerStop from '../loader/loaderStop';

// Selecting output tag
const markupOutput = document.querySelector('[data-markup-output]');
// Pagination selector placement
const element = document.querySelector('.pagination ul');

// Internal function for creating HTML markup
const htmlMarkup = data =>
  data
    .map(
      ({ poster_path, title, genre_ids, release_date, vote_average, id }) => {
        let imgSrc = `https://image.tmdb.org/t/p/w300${poster_path}`;
        let movieYear = new Date(release_date).getFullYear();
        let imgAlt = `Poster of: ${title}`;
        let genresName = getGenresNames(genre_ids);

        if (title.length > 35) {
          title = title.substring(0, 34) + '...';
        }
        if (poster_path === null) {
          imgSrc = new URL(
            '../../images/no_image.png',
            import.meta.url
          );
          imgAlt = `There is no picture for this video. Placeholder no image`;
        };


        if (release_date === '') {
          movieYear = 'unknown';
        }

        if (genre_ids.length === 0) {
          genresName = 'no movie genre';
        }

        return `
      <div class="item" data-id="${id}" data-modal-open>
        <img class="item__image" src="${imgSrc}" alt="${imgAlt}" loading="lazy" />
        <div class="item__info">
          <h3 class="item__title">${title}</h3>
          <p class="item__genres" data-genres>${genresName}</p>
          <span class)="item__separator">|</span>
          <p class="item__year">${movieYear}</p>
          <p class="item__rating">${Number(vote_average).toFixed(1)}</p>
        </div>
      </div>
      `;
      }
    )
    .join('');

function getArrayForPage(whatToOutput, page) {
  // Zmienna dla tablicy renderowanych wyników na stronę
  let pageCardsArray = [];
  // Zmienna dla indeksu pierwszej ładowanej karty
  const loadFromIndex = page * CARDS_PER_PAGE - CARDS_PER_PAGE;
  // Zmienna dla indeksu ostatniej ładowanej karty
  const loadToIndex = page * CARDS_PER_PAGE;
  // Załadowanie tablicy z ID filmów
  const fetchedArray = getFromLocalStorage(whatToOutput);
  // Operator obliczeń ilości kart na stronę
  const totalCards = fetchedArray.length;
  let totalPages;
  if (totalCards < CARDS_PER_PAGE || totalCards === CARDS_PER_PAGE) {
    totalPages = 1;
  }
  if (totalCards > CARDS_PER_PAGE) {
    totalPages = Math.floor(totalCards / CARDS_PER_PAGE);
    if (totalCards % CARDS_PER_PAGE !== 0) {
    }
  }

  // Selekcja identyfikatorów filmów z tablicy
  pageCardsArray = fetchedArray.slice(loadFromIndex, loadToIndex);
  return pageCardsArray;
}

// Function for displaying cards from localStorage's id array
function displayFromIdArray(whatToOutput, page = 1) {
  const displayedIdArray = getArrayForPage(whatToOutput, page);

  if (displayedIdArray === null || displayedIdArray.length === 0) {
    displayEmptyListInfo();
    removePagination();
    Loading.remove();
    return;
  } else {
    const fetchedDataArray = [];
    const counter = displayedIdArray.length;
    let idArray = [];

    for (const id of displayedIdArray) {
      fetchMovieById(id)
        .then(response => {
          Loading.remove();
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
            markupOutput.dataset.outputType = whatToOutput;
            markupOutput.innerHTML = htmlMarkup(fetchedDataArray);
            element.innerHTML = createPagination('mylibrary', page);
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
          let page = response.page;
          let totalPages = response.total_pages;

          markupOutput.innerHTML = '';

          markupOutput.insertAdjacentHTML(
            'beforeend',
            htmlMarkup(response.results)
          );

          element.innerHTML = createPagination(totalPages, page);
          markupOutput.dataset.outputType = 'trending';
        })
        .catch(error => console.error(error));
      break;

    case 'watched':
      if (getFromLocalStorage('watched') !== []) {
        displayFromIdArray('watched', pageNumber);
        markupOutput.dataset.outputType = 'watched';
      } else {
        
        displayEmptyListInfo();
      }
      break;

    case 'queue':
      if (getFromLocalStorage('queue') !== []) {
        

        displayFromIdArray('queue', pageNumber);
        markupOutput.dataset.outputType = 'queue';
      } else {
        
        displayEmptyListInfo();
        
      }
      break;

    default:
      fetchTrendyMovies()
        .then(response => {

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
  Loading.remove();
}

// Użycie:
// ! ! ! WAŻNE ! ! !
// Najpierw do tagu, gdzie ma renderować się markup. nalezy dodać atrybut 'data-markup-output'

// moviesListMarkup() - domyślne zachowanie - wyświetla filmy z API - trending;
// moviesListMarkup('trending') - j.w.
// moviesListMarkup('queue') - wyświetla filmy umieszczone w zbiorze 'queue'
// moviesListMarkup('watched') - wyświetla filmy umieszczone w zbiorze 'watched'
