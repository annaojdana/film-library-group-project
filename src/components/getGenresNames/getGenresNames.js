import getFromLocalStorage from "../getFromLocalStorage/getFromLocalStorage";

const allGenres = getFromLocalStorage("genres");

export default function getGenresNames(genreIdsOfMovie) {

  if (typeof genreIdsOfMovie !== "object") {
    console.log(`No argument to 'getGenresNames' function was given, or it is not an array!`)
  }
  
  const genres_name = allGenres
    .filter(genre => genreIdsOfMovie.includes(genre.id))
    .map(genre => genre.name);

  if (genreIdsOfMovie.length > 2) {
    genres_name.length = 2;
    genres_name.push("Other");
  }

  return genres_name.join(", ");
};