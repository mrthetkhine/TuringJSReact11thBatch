import {Movie} from "@/lib/types/movies";
import axiosInstance from "@/app/axiosInstance";
import {ApiResponse} from "@/lib/types/types";
import Review from "@/lib/types/review";

export async function apiLoadAllReviewByMovieId(movieId:string):Promise<Review[]>
{
    console.log("apiLoadAllReviewByMovieId");
    const response =  await axiosInstance.get<ApiResponse<Review[]>>(`/api/reviews/movies/${movieId}`);
    console.log('Return ');
    return response.data.data;
}
export async function apiSaveReview(newReview:Review):Promise<Review>
{
    console.log("apiSaveReview");
    const response =  await axiosInstance.post<ApiResponse<Review>>(`/api/reviews`,newReview);
    return response.data.data;
}
export async function apiDeleteReview(review:Review):Promise<Review>
{
    console.log("apiDeleteReview");
    const response =  await axiosInstance.delete<ApiResponse<Review>>(`/api/reviews/${review._id}`);
    return response.data.data;
}