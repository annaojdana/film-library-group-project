import './headerLibrary.scss';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

import { initializeModal } from '../movieModal/movieModal';

// Rendering popularnych filmów na stronę główną i wywołanie funkcji dla 'trending'
import moviesListMarkup from '../moviesListMarkup/moviesListMarkup';
import spinnerStop from '../loader/loaderStop';
moviesListMarkup('queue');


// Selektory przycisków "watched" i "queue"
const selectorButtons = document.querySelectorAll('[data-display-selector]');

function switchActiveButton(event) {
  function checkForActiveClass() {
    if (!event.target.classList.contains('btn--active')) {
      selectorButtons[0].classList.toggle('btn--active');
      selectorButtons[1].classList.toggle('btn--active');
    }
  }

  switch (event.target.dataset.displaySelector) {
    case 'watched':
      checkForActiveClass();
      break;

    case 'queue':
      checkForActiveClass();
      break;

    default:
      break;
  }
}

function myLibraryDisplaySelectorHandler(event) {
  switch (event.target.dataset.displaySelector) {
    case 'watched':
      spinnerStop();
      switchActiveButton(event);
      moviesListMarkup('watched');
      initializeModal();
      break;

    case 'queue':
      spinnerStop();
      switchActiveButton(event);
      moviesListMarkup('queue');
      initializeModal();
      break;

    default:
      break;
  }
}

for (const button of selectorButtons) {
  button.addEventListener('click', myLibraryDisplaySelectorHandler);
}
