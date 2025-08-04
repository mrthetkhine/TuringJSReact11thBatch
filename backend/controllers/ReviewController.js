const reviewService = require("../services/ReviewService");

async function getAllReviews(req,res,next){
    let reviews = await reviewService.getAllReviews();
    res.json({
        message:"Success",
        data:reviews,
    });
}
async function getReviewsByMovieId(req,res,next){
    let movieId = req.params.movieId;
    let reviews = await reviewService.getReviewsByMovieId(movieId);
    res.json({
        message:"Success",
        data:reviews,
    });

}
async function saveReview(req, res, next){
    let review = req.body;
    try
    {
        let savedReview = await reviewService.saveReview(review);
        res.status(201).json({
            message:"Success",
            data:savedReview,
        })
    }
    catch(err){
        res.status(400).send({
            message: err.message,
        })
    }
}
async function updateReview(req, res, next){
    let reviewId = req.params.reviewId;
    let review = req.body;
    try
    {
        let updatedReview = await reviewService.updateReview(reviewId, review);
        res.status(200).json({
            message:"Success",
            data:updatedReview,
        })
    }
    catch(err){
        res.status(400).send({
            message: err.message,
        })
    }
}
async function deleteReview(req, res, next){
    let reviewId = req.params.reviewId;
    try
    {
        let deletedReview = await reviewService.deleteReview(reviewId);
        res.status(200).json({
            message:"Success",
            data:deletedReview,
        })
    }
    catch(err){
        res.status(400).send({
            message: err.message,
        })
    }
}
module.exports ={
    getAllReviews,
    getReviewsByMovieId,
    saveReview,
    updateReview,
    deleteReview,
}