import fetchTrendyMovies from '../fetchTrendyMovies/fetchTrendyMovies';

export default (function memorizeTrendyMovies(name) {
  fetchTrendyMovies()
    .then(obj => {
      localStorage.setItem(name, JSON.stringify(obj));
    })
    .catch(error => {
      console.log(`${error.name}: ${error.message}`);
    });
})('trendy');
