import './popularMovies.scss';
import '../../scss/moviesList.scss';

// Import funkcji dla markupu danych
import moviesListMarkup from '../moviesListMarkup/moviesListMarkup.js';

// Wywołanie funkcji - markup danych dla 'trending
moviesListMarkup();

import { toggleModal, initializeModal } from '../movieModal/movieModal';

// Funkcja dla inicjalizacji modala dla listy filmów,
// funkcja dodajelistener dla każdej wyświetlonej karty.
// Ze względu, iż fetch jest asynchroniczny,
// obecność kart w HTMLu jest sprawdzana co 10ms

// function initializeModal() {
//   const timer = setInterval(function checkForMarkup() {
//     cards = document.querySelectorAll('[data-modal-open]');

//     if (cards.length !== 0) {
//       for (const card of cards) {
//         card.addEventListener('click', toggleModal());
//         clearInterval(timer);
//       }
//     } else {
//       console.log('nope man, again');
//     }
//   }, 10);
// }

initializeModal();
