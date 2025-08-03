const movieService = require('../services/MovieService');
async function getAllMovie(req,res,next)
{
    let movies= await movieService.getAllMovies();
    res.json({
        message:"Success",
        data:movies,
    });
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

module.exports = {
    getAllMovie,
    saveMovie,
}