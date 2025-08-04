const Reviews = require('../models/Review');
const mongoose = require("mongoose");
async function getAllReviews(){
    return  Reviews.find();
}
async function getReviewsByMovieId(movieId){
    return Reviews.find({
        movie:movieId,
    })
    //.populate('movie');
}
const saveReview = async(review)=>{
    const newReview = new Reviews({
        movie: new mongoose.Types.ObjectId(review.movie),
        rating: review.rating,
        review: review.review,
    });
    return await newReview.save();
    //return newReview.populate('movie');
}
const updateReview = async(reviewId,review)=>{
    review.movie = new mongoose.Types.ObjectId(review.movie);
    //console.log('Review Id ',reviewId, ' Review ',review);
    const updatedReview = await Reviews.findByIdAndUpdate(reviewId, review,{new: true});
    return updatedReview;

}
const deleteReview = async(reviewId)=>{
    let existingReview = await Reviews.findById(reviewId);
    if(existingReview){
        return Reviews.findByIdAndDelete(reviewId);
    }
    else
    {
        throw new Error(`Review with id ${reviewId} not found!`);
    }
}
module.exports ={
    getAllReviews,
    getReviewsByMovieId,
    saveReview,
    updateReview,
    deleteReview,
}