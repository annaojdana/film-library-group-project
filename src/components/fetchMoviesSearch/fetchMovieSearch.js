const API_KEY = '2f202abcab3fe0934220a17698275697';

export async function fetchMovieByQuery(searchQuery, pageNum = 1) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}&language=en-US&page=${pageNum}&include_adult=false`
    );

    const results = await response.json();
    return results;
  } catch (error) {
    console.log(error);
  }
}
