import axios from 'axios';

const button_search = document.querySelector('.header-btn__form');

export async function fetchMovie(value) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=2f202abcab3fe0934220a17698275697&language=en-US&query=${value}&page=1&include_adult=false`,
    );

   
    return response.data;
  } catch (error) {
    console.error(error);
  }
}