const Movie = require("../models/Movie");
const Todo = require("../models/Todo");

async function getAllMovies(){
    return Movie.find();
}
async function getMovieById(id)
{
    let movie = await Movie.findById(id);
    if(!movie)
    {
        throw new Error(`Movie with id ${id} not found`);
    }
    else
    {
        return movie;
    }

}
const searchMovieByTitle = async(movieTitle)=>
{
    const movies = await Movie.find({
        title: {
            $regex:movieTitle
        }
    });
    return  movies;
}
const searchMovieByYear = async(year)=>
{
    const movies = await Movie.find({
        year:year,
    });
    return  movies;
}
async function saveMovie(movie)
{
    let newMovie = new Movie(movie);
    return newMovie.save();
}
async function updateMovie(id,movie)
{
    let existingMovie = await Movie.findById(id);
    if(!existingMovie)
    {
        throw new Error(`Movie with id ${id} not found`);
    }
    else
    {
        return Movie.findByIdAndUpdate(id,movie,{new :true})
    }
}
async function deleteMovie(id)
{
    let existingMovie = await Movie.findById(id);
    if(!existingMovie)
    {
        throw new Error(`Movie with id ${id} not found`);
    }
    else
    {
        return Movie.findByIdAndDelete(id);
    }
}

module.exports = {
    getAllMovies,
    searchMovieByTitle,
    searchMovieByYear,
    saveMovie,
    getMovieById,
    updateMovie,
    deleteMovie,
};