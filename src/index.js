// Style podstawowe + container
import './main.scss';
import './components/loadMoviesList/loadMoviesList.scss';

import './components/authentication/authentication';

// Nagłówek
import './components/header/header';
import './components/loadMoviesList/loadMoviesList';

// Rendering popularnych filmów na stronę główną i wywołanie funkcji dla 'trending'
import moviesListMarkup from './components/moviesListMarkup/moviesListMarkup';
moviesListMarkup();

// Szukajka
import './components/searchByKeyword/searchByKeyword';


// Obsługa spinnera
import './components/loader/loader'

// Paginacja
import createPagination from './components/pagination/pagination';
import './components/changePage/changePage';

import paginationSizeChange from './components/pagination/pagination-mediaQuery';

import './components/signInUp/signInUp'

