const savedGenres = localStorage.getItem('allGenres');
const arrayOfAllGenres = JSON.parse(savedGenres);

export function changeGenresIdsToNames(movieGenresIds) {
  for (let i = 0; i < movieGenresIds.length; i++) {
    arrayOfAllGenres.forEach(objectGenre => {
      if (Number(movieGenresIds[i]) === objectGenre.id) {
        movieGenresIds[i] = objectGenre.name;
      }
    });
  }
}