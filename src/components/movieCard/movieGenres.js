// Function to storage list of movie genres
export async function fetchGenres() {
    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=2f202abcab3fe0934220a17698275697&language=en-US")
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .then(data => {

            const saveGenres = localStorage.setItem("genres", JSON.stringify(data));



        })
        .catch(error => {
            console.log(error)
        });
    genres = JSON.parse(localStorage.getItem("genres"));
};