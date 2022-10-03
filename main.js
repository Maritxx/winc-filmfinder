//Function that adds a new LI + A + IMG for every movie in the Database.
//ASK ELLIS HOW TO MAKE THIS SHORTER BECAUSE THIS DOES NOT SEEM CORRECT.
const movieList = document.getElementById("movieList");

const addMoviesToDom = function(array) {
    movieList.innerHTML = "";

    array.forEach((movie) => {
        const movieListItem = document.createElement("li");
        const movieAnchorLink = document.createElement("a");
        const moviePoster = document.createElement("img");

        moviePoster.src = movie.poster;
        movieAnchorLink.href = "https://www.imdb.com/title/" + movie.imdbID + "/";

        movieList.appendChild(movieListItem);
        movieListItem.appendChild(movieAnchorLink);
        movieAnchorLink.appendChild(moviePoster);
    });
};




//Function that adds Event listeners to all buttons and runs the handleOnChangeEvent function when a radio-button is changed.
const addEventListeners = function() {
    const buttonElements = document.querySelectorAll("input[name='movie-filter']"); 
    const customInput = document.querySelector("#custom-movies");
    
    Array.from(buttonElements).forEach((button) => {
        button.addEventListener("change", handleOnChangeEvent);
    });

    customInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            filterMovies(e.target.value.toLowerCase());
        };
    });
};




//Function that filters movies based on the keyword. 
const filterMovies = function(wordInMovie) {
    const filteredMovies = movies.filter((movie) => {
        return movie.title.toLowerCase().includes(wordInMovie);
    });

    addMoviesToDom(filteredMovies);
};


//Function that filters movies based on the release date.
const filterLatestMovies = function() {
    const filteredMovies = movies.filter((movie) => {
        return movie.year <= 2014;
    });

    addMoviesToDom(filteredMovies);
};




//Function that calls the filter function based on the radio-button clicked.
//ASK ELLIS ABOUT THE DEFAULT CASE IN THE SWITCH STATEMENT.
const handleOnChangeEvent = function(e) {
    switch (e.target.value) {
        case "latest-movies":
            filterLatestMovies();
            break;
        
        case "avenger-movies": 
            filterMovies("avengers");
            break;
        
        case "xmen-movies":
            filterMovies("x-men");
            break;

        case "princess-movies":
            filterMovies("princess");
            break;

        case "batman-movies": 
            filterMovies("batman");
            break;

        case "custom-filter":
            console.log("This works");
            break;

        default:
            console.log("There are no movies that fit this filter");
    };
};




//Loads movies + adds event listeners to buttons as soon as DOM is done loading.
window.addEventListener("load", function() {
    addMoviesToDom(movies);
    addEventListeners();
}); 