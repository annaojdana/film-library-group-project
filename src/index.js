// Style podstawowe + container
import './main.scss';

// Nagłówek
import './components/header/header';
import './components/loadMoviesList/loadMoviesList';
import './components/footer/footer';

// Rendering popularnych filmów na stronę główną i wywołanie funkcji dla 'trending'
import { moviesListMarkup } from './components/moviesListMarkup/moviesListMarkup';
moviesListMarkup();


// Zapisanie genres_name w local storage
import memorizeGenres from './components/memorizeGenres/memorizeGenres';

// Zapisywanie aktualnie fetchowanych popularnych filmów z backendu
import memorizeTrendyMovies from './components/memorizeTrendyMovies/memorizeTrendyMovies';

// Rendering popularnych filmów na stronę główną
import popularMovies from './components/popularMovies/popularMovies';
popularMovies();

// Stopka
import './components/footer/footer';

import './components/changePage/changePage';
// Obsługa modala
import './components/movieModal/movieModal';



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//  TEST GROUND
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// import getFromLocalStorage from './components/getFromLocalStorage/getFromLocalStorage.js';
// import setToLocalStorage from './components/setToLocalStorage/setToLocalStorage.js';

// const list = getFromLocalStorage('trendy').results;
// console.log(list);
// console.log(list[0]);

// const array = [{ ...list[0] }];
// console.log(array);
// console.log(JSON.parse(localStorage.getItem('watched')));
