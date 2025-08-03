const Movie = require("../models/Movie");

async function getAllMovies(){
    return Movie.find();
}
async function saveMovie(movie)
{
    let newMovie = new Movie(movie);
    return newMovie.save();
}
module.exports = {
    getAllMovies,
    saveMovie,
};