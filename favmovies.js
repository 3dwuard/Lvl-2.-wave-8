const moviesTitle = document.getElementById("moviesTitle");
const moviesInfo = document.getElementById("moviesInfo");
let moviesList = document.getElementById("moviesList");

moviesTitle.textContent = "Movie List";

const movieCount = moviesList.querySelectorAll("moviesList");

moviesInfo.textContent = (`You currently have ${movieCount} favorite movies in your List`);
// Step 7: create a new li element for another movie using docuemnt.createElement("li")
// set its textContent to a new movie name.
// Add the class "movie-istem" to it.
// Append it to moviesList.

const newMovie = document.createElement(`li`);
newMovie.textContent = "DUNNE";
newMovie.className = "movie-item";
moviesList.appendChild(newMovie);

// Step 8: Select one of the existing movies items (for example, the first one) and remove it using.remove().

const firstMovie = moviesList.querySelector(`.movie-item`);
if (firstMovie) {
    firstMovie.remove();
}

// step 9 After adding/removing, update moviesInfo again to show the ne total number f movies 
const updateCount = moviesList.children.length;
moviesInfo.textContent = (`You currently have ${movieCount} favorite movies in your List`);