// Style podstawowe + container
import './main.scss';
import './components/loadMoviesList/loadMoviesList.scss';
import { startHiding } from './components/authSupport/authSupport';
startHiding();

// Nagłówek
import './components/header/header';
import './components/loadMoviesList/loadMoviesList';
import './components/headerLibrary/headerLibrary';

// Rendering popularnych filmów na stronę główną i wywołanie funkcji dla 'trending'
import moviesListMarkup from './components/moviesListMarkup/moviesListMarkup';
moviesListMarkup();

// Szukajka
import './components/searchByKeyword/searchByKeyword';

// Paginacja
import createPagination from './components/pagination/pagination';
import './components/changePage/changePage';
import paginationSizeChange from './components/pagination/pagination-mediaQuery';

// logowanie
import './components/signInUp/signInUp';
import './components/authentication/authentication';
import './components/myAccount/myAccount';

//popup
import './components/popup/popup';

//day-night
import './components/day-night/day-night';
import './components/day-night/day-night-LS';