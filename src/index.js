// Style podstawowe + container
import './main.scss';

// Nagłówek
import './components/header/header';
import './components/loadMoviesList/loadMoviesList';
import './components/footer/footer';
import './components/teamModal/teamModal';

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
