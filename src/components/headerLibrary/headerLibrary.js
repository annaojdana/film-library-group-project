import './headerLibrary.scss';
import { initializeModal } from '../movieModal/movieModal';

// Rendering popularnych filmów na stronę główną i wywołanie funkcji dla 'trending'
import moviesListMarkup from '../moviesListMarkup/moviesListMarkup';
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
      console.log('invalid target');
      break;
  }
}

function myLibraryDisplaySelectorHandler(event) {
  switch (event.target.dataset.displaySelector) {
    case 'watched':
      console.log('Displaying watched...');
      switchActiveButton(event);
      moviesListMarkup('watched');
      initializeModal();
      break;

    case 'queue':
      console.log('Displaying queue...');
      switchActiveButton(event);
      moviesListMarkup('queue');
      initializeModal();
      break;

    default:
      console.log('invalid target');
      break;
  }
}

for (const button of selectorButtons) {
  button.addEventListener('click', myLibraryDisplaySelectorHandler);
}
