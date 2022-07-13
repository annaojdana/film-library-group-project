// Style podstawowe + container
import './main.scss';

// Nagłówek
import './components/headerLibrary/headerLibrary';
import './components/loadMoviesList/loadMoviesList';
import './components/footer/footer';

// Rendering popularnych filmów na stronę główną i wywołanie funkcji dla 'trending'
import moviesListMarkup from './components/moviesListMarkup/moviesListMarkup';
moviesListMarkup('queue');

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
