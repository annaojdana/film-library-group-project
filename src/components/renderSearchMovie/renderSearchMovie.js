import getGenresNames from '../getGenresNames/getGenresNames';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { fetchMovieByQuery } from '../fetchMoviesSearch/fetchMovieSearch';
import { createPagination, removePagination } from '../pagination/pagination';
import { initializeModal } from '../movieModal/movieModal';
import { paginationSupport } from '../changePage/changePage';
function notificationRender() { };


const markupOutput = document.querySelector('[data-markup-output]');

const htmlMarkup = data =>
  data
    .map(
      ({
        backdrop_path,
        poster_path,
        title,
        genre_ids,
        release_date,
        vote_average,
        id,
      }) => {

        let imgSrc = `https://image.tmdb.org/t/p/w300${poster_path}`;
        let movieYear = new Date(release_date).getFullYear();
        let imgAlt = `Poster of: ${title}`;
        let genresName = getGenresNames(genre_ids);

        if (poster_path === null) {
          imgSrc = `https://iv.pl/images/78021b6c9c10ba13606ac3151fc220b3.png`;
          imgAlt = `There is no picture for this video. Placeholder no image`
        };

        if (release_date === "") {
          movieYear = "unknown";
        };

        if (genre_ids.length === 0) {
          genresName = "no movie genre"
        }

        return `
      <div class="item" data-id="${id}" data-modal-open>
        <img class="item__image" src="${imgSrc}" alt="${imgAlt}" loading="lazy" />
        <div class="item__info">
          <h3 class="item__title">${title}</h3>
          <p class="item__genres" data-genres>${genresName}</p>
          <span class)="item__separator">|</span>
          <p class="item__year">${movieYear}</p>
          <p class="item__rating">${Number(vote_average).toFixed(1)}</p>
        </div>
      </div>
        `
      }
    )
    .join('');

export function renderCollection(searchQuery, pageNum) {
  const filmList = document.querySelector('[data-markup-output]');
  fetchMovieByQuery(searchQuery, pageNum).then(response => {
    Loading.remove();
    if (response.total_results === 0) {
      document.querySelector('.not-found').classList.remove('is-hidden');
      filmList.innerHTML = '';
      removePagination();
      return;
    } else {
      document.querySelector('.not-found').classList.add('is-hidden');
    }

    filmList.innerHTML = htmlMarkup(response.results);
    page = response.page;
    totalPages = response.total_pages;
    const element = document.querySelector('.pagination ul');
    element.innerHTML = createPagination(totalPages, page);
    markupOutput.dataset.outputType = 'search';
    initializeModal();
  });
}
