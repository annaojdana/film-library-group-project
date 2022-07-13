import axios from "axios";

export default async function fetchGenresNames() {
  const params = new URLSearchParams({
    api_key: "2f202abcab3fe0934220a17698275697",
  });

  try {
    const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?${params}`);
    return response.data;
  } catch (error) {
    console.log(`${error.name}: ${error.message}`)
  };
};