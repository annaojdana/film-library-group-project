// Style podstawowe + container
import './main.scss';
import './components/loadMoviesList/loadMoviesList.scss';

// Nagłówek
import './components/header/header';
import './components/loadMoviesList/loadMoviesList';

// Rendering popularnych filmów na stronę główną i wywołanie funkcji dla 'trending'
import moviesListMarkup from './components/moviesListMarkup/moviesListMarkup';
moviesListMarkup();

// Szukajka
import './components/searchByKeyword/searchByKeyword';
