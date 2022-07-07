import './popularMovies.scss'

import { toggleModal } from '../movieModal/movieModal';

const openModalBtn = document.querySelector('[data-modal-open]');

openModalBtn.addEventListener("click", toggleModal);
