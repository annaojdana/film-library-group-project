import './popularMovies.scss';
import '../../scss/moviesList.scss';

// Import funkcji dla markupu danych
import moviesListMarkup from '../moviesListMarkup/moviesListMarkup.js';

// Wywołanie funkcji - markup danych dla 'trending
moviesListMarkup();

import { toggleModal } from '../movieModal/movieModal';

const openModalBtn = document.querySelector('[data-modal-open]');

openModalBtn.addEventListener("click", toggleModal);