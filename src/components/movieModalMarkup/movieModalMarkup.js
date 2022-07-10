// Import

import getFromLocalStorage from "../getFromLocalStorage/getFromLocalStorage";
// import getGenresNames from '../getGenresNames/getGenresNames';
import fetchMoviesById from '../fetchMovieById/fetchMovieById';

// Internal function for creating HTML markup


const htmlMarkup = ({ backdrop_path, title, vote_average, vote_count, popularity, genres, overview, id }) => `
<div class="movie__card--wrapper">
    
     <img class="movie__image" src = "https://image.tmdb.org/t/p/w300${backdrop_path}" alt = " Poster of: ${title}" >
             
     <div class="movie__info">
            <h2 class="movie__title"> ${title}</h2>
    <ul class="movie__details">
      <li class="details__item"><span class=" details__label">Vote / Votes</span><span class="details__value"><span class="details__rating">${Number(vote_average).toFixed(1)}</span> / ${vote_count}</span></li>
      <li class="details__item"><span class=" details__label">Popularity</span><span class="details__value">${Number(popularity).toFixed(0)}</span></li>
      <li class="details__item"><span class=" details__label">Original Title</span><span class="details__value details__title">${title}</span></li>
      <li class="details__item"><span class=" details__label">Genre</span><span class="details__value">${(genres).map(g => g.name).join(", ")}</span></li>
    </ul>
   <h3 class="movie__label">About</h3>
   <p class="movie__about">${overview}</p>
   <div class="modal__btns--wrapper">
      <button class="modal__btns modal__btns--watch" data-id=${id} data-watched>Add to Watched</button>
      <button class="modal__btns modal__btns--queue" data-id=${id} data-queue>Add to queue</button>
    </div>
  </div>
  </div>
  `;	
            
export default function movieModalMarkup(id) {
    // Variable for selecting output tag
    const htmlOutput = document.querySelector(".modal--wrapper");

   

                   fetchMoviesById(id)
                   .then(response => {
                       console.log(`output markupu dla 'modal'`);
                       return htmlOutput.insertAdjacentHTML(
                           'beforeend',
                           htmlMarkup(response)
                       );
                   })
                   .catch(error => console.error(error));
            
}



// Użycie:
// ! ! ! WAŻNE ! ! !
// Najpierw do tagu, gdzie ma renderować się markup. nalezy dodać atrybut 'data-markup-output'

// moviesListMarkup() - domyślne zachowanie - wyświetla filmy z API - trending;
// moviesListMarkup('trending') - j.w.
// moviesListMarkup('queue') - wyświetla filmy umieszczone w zbiorze 'queue'
// moviesListMarkup('watched') - wyświetla filmy umieszczone w zbiorze 'watched'

