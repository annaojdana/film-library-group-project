import './popularMovies.scss';
import '../../scss/moviesList.scss';
import moviesListMarkup from '../moviesListMarkup/moviesListMarkup';
import openModal from '../openModal/openModal';

// Wywołanie funkcji - markup danych dla 'trending'

moviesListMarkup();

const moviesWrapper = document.querySelector('[data-markup-output]');

moviesWrapper.addEventListener("click", openModal);