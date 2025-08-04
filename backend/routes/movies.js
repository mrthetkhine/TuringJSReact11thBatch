var express = require('express');
var router = express.Router();
var movies = require("../controllers/MovieController");

router.get('/',movies.getAllMovie);
router.get('/:id',movies.getMovieById);
router.get('/title/:title',movies.findMoviesByTitle);
router.get('/year/:year',movies.findMoviesByYear);
router.post('/',movies.saveMovie);
router.put('/:id',movies.updateMovie)
router.delete('/:id',movies.deleteMovie);

module.exports = router;