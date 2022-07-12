// Importing API handler - trending movies list
import fetchTrendyMovies from '../fetchTrendyMovies/fetchTrendyMovies';
import fetchMovieById from '../fetchMovieById/fetchMovieById';
import getGenresNames from '../getGenresNames/getGenresNames';
import getFromLocalStorage from '../getFromLocalStorage/getFromLocalStorage.js';

// Selecting output tag
const markupOutput = document.querySelector('[data-markup-output]');

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

// Function fot displaying cards from localStorage's id array
function displayFromIdArray(source) {
  const displayedIdArray = getFromLocalStorage(source);
  console.log(displayedIdArray);

  if (displayedIdArray === null || displayedIdArray.length === 0) {
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
            console.log('OK! Displaying queue list');
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

            return (markupOutput.innerHTML = htmlMarkup(fetchedDataArray));
          } else {
            console.log('Waiting to fetch enough data');
          }
        })
        .catch(error => console.error(error));
    }
  }
}

// Main function for HTML markup output
export function moviesListMarkup(whatToOutput = 'trending') {
  switch (whatToOutput) {
    case 'trending':
      fetchTrendyMovies()
        .then(response => {
          console.log(`output markupu dla 'trending'`);
          return (markupOutput.innerHTML = htmlMarkup(response.results));
        })
        .catch(error => console.error(error));
      break;

    case 'watched':
      displayFromIdArray('watched');
      break;

    case 'queue':
      displayFromIdArray('queue');
      break;

    default:
      fetchTrendyMovies()
        .then(response => {
          console.log(`output markupu dla 'trending'`);
          return (markupOutput.innerHTML = htmlMarkup(response.results));
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
