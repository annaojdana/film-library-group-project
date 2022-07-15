// Modal z twórcami
import '../teamModal/teamModal';

// Style SCSS dla wyświetlania kart
import './loadMoviesList.scss';

// Bazowe składniki
// import '../loadMoviesList/loadMoviesList';
import '../footer/footer';

// Fetch i renderowanie kart
import moviesListMarkup from '../moviesListMarkup/moviesListMarkup';

// Zapisywanie  "genres_name" do localStorage
import memorizeGenres from '../memorizeGenres/memorizeGenres';

// Obsługa dodawania filmów do "watched" lub "queue"
import '../supportForMyLibrary/supportForMyLibrary';

// Paginacja;
// import createPagination from '../pagination/pagination';
import '../changePage/changePage';
import paginationSizeChange from '../pagination/pagination-mediaQuery';

// Inicjalizacia modala
import '../movieModal/movieModal';
import { initializeModal } from '../movieModal/movieModal';
initializeModal();

// // Obsługa spinnera
// import '../loader/loader';
