// Style SCSS dla wyświetlania kart
import './loadMoviesList.scss';

// Obsługa modala
import '../movieModal/movieModal';

// Obsługa dodawania filmów do "watched" lub "queue"
import '../supportForMyLibrary/supportForMyLibrary';

// Zapisywanie  "genres_name" do localStorage
import memorizeGenres from '../memorizeGenres/memorizeGenres';

// Paginacja
// import createPagination from '../pagination/pagination';
// import '../changePage/changePage';

// Inicjalizacia modala
import '../movieModal/movieModal';
import { initializeModal } from '../movieModal/movieModal';
initializeModal();
