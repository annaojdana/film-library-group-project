// Style podstawowe + container
import './main.scss';

// Obsługa spinnera
import spinner from './components/loader/loader';
spinner();

import { startHiding } from './components/authSupport/authSupport';
startHiding();
import './components/signInUp/signInUp'
import './components/authentication/authentication';

import './components/headerLibrary/headerLibrary';
import './components/loadMoviesList/loadMoviesList';