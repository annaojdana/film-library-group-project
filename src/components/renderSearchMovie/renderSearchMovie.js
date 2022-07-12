import { changeGenresIdsToNames } from '../changeGenresIds/changeGenresIds';
import getGenresNames from '../getGenresNames/getGenresNames';



const filmList = document.querySelector('.item');

export function renderCollection(movies) {
  const markup = movies.map(movie => createMarkupColl(movie)).join('');
  return (filmList.innerHTML = markup);
}

export function createMarkupColl({
  poster_path,
  title,
  genre_ids,
  release_date,
  vote_average,
  id,
}) {
  changeGenresIdsToNames(genre_ids);

  return `  <div class="item" data-id="${id}" data-modal-open>
  <img class="item__image" src="https://image.tmdb.org/t/p/w300${poster_path}" alt=" Poster of: ${title}" />
  <div class="item__info">
    <h3 class="item__title">${title}</h3>
    <p class="item__genres" data-genres>${getGenresNames(genre_ids)}</p>
    <span class)="item__separator">|</span>
    <p class="item__year">${new Date(release_date).getFullYear()}</p>
    <p class="item__rating">${Number(vote_average).toFixed(1)}</p>
  </div>
</div>`;
}