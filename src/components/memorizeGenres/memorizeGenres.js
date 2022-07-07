import fetchGenresNames from "../fetchGenresNames/fetchGenresNames";

export default (function memorizeGenres(name) {
  fetchGenresNames()
    .then(({genres}) => {
      localStorage.setItem(name, JSON.stringify(genres));
    })
    .catch(error => {
      console.log(`${error.name}: ${error.message}`);
    });
})("genres");