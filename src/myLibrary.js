// Style podstawowe + container
import './main.scss';

// Nagłówek
import './components/headerLibrary/headerLibrary';
import './components/loadMoviesList/loadMoviesList';
import './components/footer/footer';

// Rendering popularnych filmów na stronę główną i wywołanie funkcji dla 'trending'
import { moviesListMarkup } from './components/moviesListMarkup/moviesListMarkup';
moviesListMarkup('queue');

// // Ładowanie zasad SCSS
// import './main.scss';
// import './scss/moviesList.scss';
// import './components/footer/footer.js';
// import './components/movieModal/movieModal';

// // Ładowanie nagłówka
// import './components/headerLibrary/headerLibrary';
// // import './components/header/header';
// // Ładowanie kontenera dla "My library"
// import './components/libraryMovies/libraryMovies';

// // Ładowanie stopki
// import './components/footer/footer';

// // Zapisanie genres_name w local storage
// import memorizeGenres from './components/memorizeGenres/memorizeGenres';

// // Zapisywanie aktualnie fetchowanych popularnych filmów z backendu
// import memorizeTrendyMovies from './components/memorizeTrendyMovies/memorizeTrendyMovies';

// // Rendering popularnych filmów na stronę główną
// import moviesListMarkup from './components/moviesListMarkup/moviesListMarkup';
// import './components/popularMovies/popularMovies';

// // Obsługa modala
// import './components/movieModal/movieModal';

// import { initializeModal } from './components/movieModal/movieModal';

// - - - - - TEST GROUND - - - - -

// Selektory przycisków "watched" i "queue"
const selectorButtons = document.querySelectorAll('[data-display-selector]');
console.log(selectorButtons);

function myLibraryDisplaySelectorHandler(event) {
  switch (event.target.dataset.displaySelector) {
    case 'watched':
      console.log('Displaying watched...');
      moviesListMarkup('watched');
      break;

    case 'queue':
      console.log('Displaying queue...');
      moviesListMarkup('queue');

      break;

    default:
      console.log('invalid target');
      break;
  }
}

for (const button of selectorButtons) {
  button.addEventListener('click', myLibraryDisplaySelectorHandler);
}
