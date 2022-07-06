// Importing API handler - trending movies list
import fetchTrendyMovies from '../fetchTrendyMovies/fetchTrendyMovies';

// Internal function for creating HTML markup
const htmlMarkup = data =>
  data
    .map(
      ({ backdrop_path, title, genre_ids, release_date, vote_average }) => `
     <div class="popular-movies_item item" id="">
         <img src="${backdrop_path}" alt="" class="item__image" />
         <div class="item__info">
            <h3 class="item__title">${title}</h3>
            <p class="item__genres" data-genres>${genre_ids}</p>
            <span class="item__separator">|</span>
            <p class="item__year">${release_date}</p>s
            <p class="item__rating">${vote_average}</p>
        </div>
    </div>
    `
    )
    .join('');
// Main function for HTML markup output
export default function moviesListMarkup(whatToOutput = 'trending') {
  switch (whatToOutput) {
    case 'trending':
      fetchTrendyMovies()
        .then(response => {
          console.log(`output markupu dla 'trending'`);
          return htmlMarkup(response.results);
        })
        .catch(error => console.error(error));
      break;

    case 'watched':
      console.log(`output markupu dla 'watched'`);
      break;

    case 'queue':
      console.log(`output markupu dla 'queue'`);
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
// moviesListMarkup() - domyślne zachowanie - wyświetla filmy z API - trending;
// moviesListMarkup('trending') - j.w.
// moviesListMarkup('queue') - wyświetla filmy umieszczone w zbiorze 'queue'
// moviesListMarkup('watched') - wyświetla filmy umieszczone w zbiorze 'watched'
