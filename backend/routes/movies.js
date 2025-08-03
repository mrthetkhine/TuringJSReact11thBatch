var express = require('express');
var router = express.Router();
var movies = require("../controllers/MovieController");
router.get('/',movies.getAllMovie);
router.post('/',movies.saveMovie);
module.exports = router;