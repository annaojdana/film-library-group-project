import getGenresNames from '../getGenresNames/getGenresNames';
import { fetchMovieByQuery } from '../fetchMoviesSearch/fetchMovieSearch';

function notificationRender()
{

}

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
      }) => `
      <div class="item" data-id="${id}" data-modal-open>
        <img class="item__image" src="https://image.tmdb.org/t/p/w300${
          poster_path !== null ? poster_path : backdrop_path
        }" alt=" Poster of: ${title}" />
        <div class="item__info">
          <h3 class="item__title">${title}</h3>
          <p class="item__genres" data-genres>${getGenresNames(genre_ids)}</p>
          <span class="item__separator">|</span>
          <p class="item__year">${new Date(release_date).getFullYear()}</p>
          <p class="item__rating">${Number(vote_average).toFixed(1)}</p>
        </div>
      </div>
      `
    )
    .join('');

export function renderCollection(searchQuery) {
  const filmList = document.querySelector('[data-markup-output]');
  fetchMovieByQuery(searchQuery).then(response => {
    console.log(response);

    if (response.total_results === 0) {
      document.querySelector('.not-found').classList.remove('is-hidden');
    }else{document.querySelector('.not-found').classList.add('is-hidden');}
    filmList.innerHTML = htmlMarkup(response.results);
  });
}

