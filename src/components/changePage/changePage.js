import moviesListMarkup from '../moviesListMarkup/moviesListMarkup';
import loadMoviesList from '../loadMoviesList/loadMoviesList';
import { initializeModal } from '../movieModal/movieModal';
import { renderCollection } from '../renderSearchMovie/renderSearchMovie';
import { searchQuery } from '../searchByKeyword/searchByKeyword';

const markupOutput = document.querySelector('[data-markup-output]');
const element = document.querySelector('.pagination ul');
element.addEventListener('click', supportForChangePage);

const header = document.querySelector('header');

function supportForChangePage(evt) {
  pageNum = evt.target.dataset.page;
  console.log(pageNum);
  if (evt.target.dataset.page === 'dots') {
    console.log('Selected dots, doing nothing...');
    return;
  }
  header.scrollIntoView({ behavior: 'smooth' });

  const switchValue = markupOutput.dataset.outputType;
  console.log(switchValue);

  switch (switchValue) {
    case 'trending':
      moviesListMarkup('trending', pageNum);
      break;

    case 'search':
      renderCollection(searchQuery, pageNum);
      break;

    case 'watched':
      moviesListMarkup('watched', pageNum);
      break;

    case 'queue':
      moviesListMarkup('queue', pageNum);
      break;

    default:
      console.log('Invalid switch value!');
      break;
  }
  initializeModal();
}
