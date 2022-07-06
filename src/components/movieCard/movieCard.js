import './movieCard.scss';

import { fetchGenres } from './movieGenres';

let movies;
let genres;





  
// Function to storage trending movie by a day
fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=2f202abcab3fe0934220a17698275697")
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    })
    .then(data => {

        const saveTrendingMovie = localStorage.setItem("trendingMovie", JSON.stringify(data.results));
        movies = JSON.parse(localStorage.getItem("trendingMovie"));
        

    })
    .catch(error => {
        console.log(error)
    });

// Adres do obrazków
// https://image.tmdb.org/t/p/w500