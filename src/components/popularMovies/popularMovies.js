import './popularMovies.scss';
import '../../scss/moviesList.scss';
import moviesListMarkup from '../moviesListMarkup/moviesListMarkup';
import { initializeModal } from '../movieModal/movieModal';

// Wywołanie funkcji - markup danych dla 'trending'
moviesListMarkup();

// Funkcja dla inicjalizacji modala dla listy filmów,
// funkcja dodajelistener dla każdej wyświetlonej karty.
// Ze względu, iż fetch jest asynchroniczny,
// obecność kart w HTMLu jest sprawdzana co 10ms
initializeModal();