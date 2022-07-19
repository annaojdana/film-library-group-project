// Style podstawowe + container
import './main.scss';
import './components/loadMoviesList/loadMoviesList.scss';
import { startHiding } from './components/authSupport/authSupport';
startHiding();

// Nagłówek
import './components/header/header';
import './components/loadMoviesList/loadMoviesList';

// Obsługa spinnera

import './components/loader/loader';
spinner();

// Rendering popularnych filmów na stronę główną i wywołanie funkcji dla 'trending'
import moviesListMarkup from './components/moviesListMarkup/moviesListMarkup';
moviesListMarkup();

// Szukajka
import './components/searchByKeyword/searchByKeyword';

// Obsługa spinnera
// import './components/loader/loader'

// Paginacja
import createPagination from './components/pagination/pagination';
import './components/changePage/changePage';

import paginationSizeChange from './components/pagination/pagination-mediaQuery';

import './components/signInUp/signInUp'

import './components/authentication/authentication';
import { Loading } from 'notiflix';
import spinner from './components/loader/loader';

//popup
import './components/popup/popup';