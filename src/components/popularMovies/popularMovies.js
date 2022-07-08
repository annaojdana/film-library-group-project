import './popularMovies.scss';
import '../../scss/moviesList.scss';
import moviesListMarkup from '../moviesListMarkup/moviesListMarkup';


// Wywołanie funkcji - markup danych dla 'trending
moviesListMarkup();

import { initializeModal } from '../movieModal/movieModal';
import setToLocalStorage from '../setToLocalStorage/setToLocalStorage';
import getFromLocalStorage from '../getFromLocalStorage/getFromLocalStorage';

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

