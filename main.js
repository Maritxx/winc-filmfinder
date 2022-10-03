/*Requirements
1. All movies are displayed as posters. The link for this image is in the database.
    -LI elements needs to be created in Javascript based on the number of objects in the database.
2. You can filter through the movies by clicking the radio-button filters. It needs to show all movies that fit requirement (name or date of release).
    -Only one filter can be active at a time. If another filter is clicked, it needs to switch.
    -Need to use array methods for the filters.
    -Need one function to do all filters.
3. Clicking on the movie-poster will link to the IMDB page.
^ALL DONE

BONUS:
1. Text-field that will also filter on name.
    -Keep uppercase/lowercase in mind.*/




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
    
    Array.from(buttonElements).forEach((button) => {
        button.addEventListener("change", handleOnChangeEvent);
    });
};




//Function that filters movies based on the keyword. 
//ASK ELLIS ABOUT LOWERCASE/UPPERCASE FOR THE INCLUDES. 
const filterMovies = function(wordInMovie) {
    const filteredMovies = movies.filter((movie) => {
        return movie.title.includes(wordInMovie);
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
            filterMovies("Avengers");
            break;
        
        case "xmen-movies":
            filterMovies("X-Men");
            break;

        case "princess-movies":
            filterMovies("Princess");
            break;

        case "batman-movies": 
            filterMovies("Batman");
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

