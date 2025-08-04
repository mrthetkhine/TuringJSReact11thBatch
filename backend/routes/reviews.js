var express = require('express');
var reviews = require('../controllers/ReviewController');
var router = express.Router();

router.get('/',reviews.getAllReviews);
router.get('/movies/:movieId',reviews.getReviewsByMovieId);
router.post('/',reviews.saveReview);
router.put('/:reviewId',reviews.updateReview);
router.delete('/:reviewId',reviews.deleteReview);

module.exports = router;