import moviesListMarkup from '../moviesListMarkup/moviesListMarkup';
import loadMoviesList from '../loadMoviesList/loadMoviesList';
import { initializeModal } from '../movieModal/movieModal';

const element = document.querySelector('.pagination ul');
element.addEventListener('click', supportForChangePage);

const header = document.querySelector('header');

function supportForChangePage(evt) {
  pageNum = evt.target.dataset.page;
  if (evt.target.dataset.page === 'dots') {
    console.log('Selected dots, doing nothing...');
    return;
  }

  header.scrollIntoView({ behavior: 'smooth' });
  moviesListMarkup('trending', pageNum);
  initializeModal();
}
