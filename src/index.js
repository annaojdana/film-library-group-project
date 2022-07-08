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