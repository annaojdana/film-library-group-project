// Import

import getFromLocalStorage from "../getFromLocalStorage/getFromLocalStorage";
import getGenresNames from '../getGenresNames/getGenresNames';

// Internal function for creating HTML markup


const htmlMarkup = data =>
    data
        .map(
    ({ backdrop_path, title, vote_average, vote_count, popularity, genre_ids, overview, id }) => `
    <div class="img">
     < img src = "https://image.tmdb.org/t/p/w300${backdrop_path}" width = "240px" height = "357px" alt = " Poster of: ${title}" class="modal__image">
     </div>        
     <div class="info">
            <h2 class="modal__title"> ${title}</h2>
    <ul class="movie__details">
      <li class="details__item"><span class=" details__label">Vote / Votes</span><span class="details__value">${vote_average.toFixed(1)} / ${vote_count}</span></li>
      <li class="details__item"><span class=" details__label">Popularity</span><span class="details__value">${popularity.toFixed(0)}</span></li>
      <li class="details__item"><span class=" details__label">Original Title</span><span class="details__value">${title}</span></li>
      <li class="details__item"><span class=" details__label">Genre</span><span class="details__value">${getGenresNames(genre_ids)}</span></li>
    </ul>
   <h3 class="modal__header">About</h3>
   <p class="modal__about">${overview}</p>
   <div class="modal__btns--wrapper">
      <button class="modal__btns modal__btns--watch" data-id=${id} data-watched>Add to Watched</button>
      <button class="modal__btns modal__btns--queue" data-id=${id} data-queue>Add to queue</button>
    </div>
  </div>
  </div>
  `).join("");
            
export default function movieModalMarkup(whatToOutput = 'trending') {
    // Variable for selecting output tag
    const htmlOutput = document.querySelector(".movie__card--wrapper");

    switch (whatToOutput) {
        case 'trending':
            let movieData = getFromLocalStorage("trendy");
            let filmIndexInData = movieData.results.map(film => film.id).indexOf(Number(getFromLocalStorage("showMovieId")));
            console.log(`output markupu dla 'trending'`);
            // let film = movieData.results[filmIndexInData];
            return htmlOutput.insertAdjacentHTML('beforeend', htmlMarkup(movieData.results[filmIndexInData]));
            break;

        case 'watched':
            console.log(`output markupu dla 'watched'`);
            break;

        case 'queue':
            console.log(`output markupu dla 'queue'`);
            break;

        default:
            console.log(`choise library'`);
           
                ;
            break;
    }
}



// Użycie:
// ! ! ! WAŻNE ! ! !
// Najpierw do tagu, gdzie ma renderować się markup. nalezy dodać atrybut 'data-markup-output'

// moviesListMarkup() - domyślne zachowanie - wyświetla filmy z API - trending;
// moviesListMarkup('trending') - j.w.
// moviesListMarkup('queue') - wyświetla filmy umieszczone w zbiorze 'queue'
// moviesListMarkup('watched') - wyświetla filmy umieszczone w zbiorze 'watched'

