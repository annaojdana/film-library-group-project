import axios from 'axios';
const language = 'pl-PL'

export default async function fetchTrendyMovies(
  pageNumber = 1,
  period = 'week'
) {
  const endPoints = {
    media_type: 'movie',
    time_window: period,
  };

  const params = new URLSearchParams({
    api_key: '2f202abcab3fe0934220a17698275697',
    page: pageNumber,

  });

  try {
    const { media_type, time_window } = endPoints;
    const response = await axios.get(`
    https://api.themoviedb.org/3/trending/${media_type}/${time_window}?${params}`);
    return response.data;
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
}

/* Wywoływanie funkcji:
fetchTrendyMovies(); - wywołanie domyślne tj. page = 1 i wyszukiwanie popularnych z tygodnia
fetchTrendyMovies(5); - wywołanie strony 5 i wyszukiwanie popularnych z tygodnia
fetchTrendyMovies(3, "day"); - wywołanie strony 3 i wyszukiwanie popularnych z dnia
fetchTrendyMovies(undefined, "day"); - wywołanie strony domyślnej tj. page = 1 i wyszukiwanie popularnych z dnia
*/
