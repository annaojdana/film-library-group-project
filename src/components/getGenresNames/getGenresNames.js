import getFromLocalStorage from "../getFromLocalStorage/getFromLocalStorage";

const allGenres = getFromLocalStorage("genres");

export default function getGenresNames(genreIdsOfMovie) {
  typeof genreIdsOfMovie !== "object"
  ? console.log(`No argument to 'getGenresNames' function was given, or it is not an array!`)
  : allGenres
    .filter(genre => genreIdsOfMovie.includes(genre.id))
    .map(genre => genre.name)
    .join(", ");
};