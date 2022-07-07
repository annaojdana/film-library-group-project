import fetchGenresNames from "../fetchGenresNames/fetchGenresNames";

export default (function memorizeGenres(name) {
  fetchGenresNames()
    .then(obj => {
      localStorage.setItem(name, JSON.stringify(obj.genres));
    })
    .catch(error => {
      console.log(`${error.name}: ${error.message}`);
    });
})("genres");