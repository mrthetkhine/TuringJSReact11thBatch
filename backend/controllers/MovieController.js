const movieService = require('../services/MovieService');
async function delay(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function getAllMovie(req,res,next)
{
    let movies= await movieService.getAllMovies();
    res.json({
        message:"Success",
        data:movies,
    });
}
async function getMovieById(req,res,next)
{
    let id = req.params.id;
    try {
        console.log('movie id ',id);
        let movie = await movieService.getMovieById(id);
        res.json({
            message:"Success",
            data:movie,

        });
    }
    catch(err)
    {
        res.status(404).send({
            message:"Not Found",
        })
    }
}
const findMoviesByTitle =async (req,res)=>{
    try
    {
        let title = req.params['title'];
        let movies = await movieService.searchMovieByTitle(title);
        res.status(200).json(movies);
    }
    catch (err) {
        res.status(404).json({
            message:"Error",
            error: err.toString()
        })
    }
}
const findMoviesByYear =async (req,res)=>{
    try
    {
        let year = req.params['year'];
        let movies = await movieService.searchMovieByYear(year);
        res.status(200).json(movies);
    }
    catch (err) {
        res.status(404).json({
            message:"Error",
            error: err.toString()
        })
    }
}
async function saveMovie(req,res,next)
{
    let body = req.body;
    try
    {
        let movie = await movieService.saveMovie(body);
        res.status(201).json({
            message:"Success",
            data:movie,
        })
    }
    catch (err)
    {
        res.json({
            message:"Error",
            error:err.message,
        })
    }
}
async function updateMovie(req,res,next)
{
    let id = req.params.id;
    let movie = req.body;
    try
    {
        let updatedMovie = await movieService.updateMovie(id,movie);
        res.status(200).json({
            message:"Success",
            data:updatedMovie,
        })
    }
    catch (err)
    {
        res.status(404).send({
            message:err.message,
        })
    }
}
async function deleteMovie(req,res,next)
{
    await delay(5000);
    let id = req.params.id;
    try
    {
        let deletedMovie = await movieService.deleteMovie(id);
        res.status(200).json({
            message:"Success",
            data:deletedMovie,
        })
    }
    catch(err)
    {
        res.status(404).send({
            message:err.message,
        })
    }
}

module.exports = {
    getAllMovie,
    getMovieById,
    findMoviesByTitle,
    findMoviesByYear,
    saveMovie,
    updateMovie,
    deleteMovie,
}