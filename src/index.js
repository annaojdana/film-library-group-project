// Importing modules
// import './components/katalog_komponentu/komponent.js';

// Style podstawowe + container
import './main.scss';

// Nagłówek
import './components/header/header';

// Zapisanie genres_name w local storage
import memorizeGenres from './components/memorizeGenres/memorizeGenres';

// Zapisywanie aktualnie fetchowanych popularnych filmów z backendu
import memorizeTrendyMovies from './components/memorizeTrendyMovies/memorizeTrendyMovies';

// Rendering popularnych filmów na stronę główną
import moviesListMarkup from './components/moviesListMarkup/moviesListMarkup';
import './components/popularMovies/popularMovies';

// Stopka
import './components/footer/footer';

// Obsługa modala
import './components/movieModal/movieModal';


// Obsługa dodawania filmów do "watched" lub "queue"
import './components/supportForMyLibrary/supportForMyLibrary';

import memorizeGenres from './components/memorizeGenres/memorizeGenres';
import memorizeTrendyMovies from './components/memorizeTrendyMovies/memorizeTrendyMovies';
import moviesListMarkup from './components/moviesListMarkup/moviesListMarkup';

import './components/footer/footer.js';
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

// Obsługa spinnera
import './components/loader/loader'