import { ApiResponse, Review } from "@/types/movies";
import axiosInstance from "../../app/axiosInstance";

export async function getAllReviewByMovieId(movieId:string):Promise<Review[]>
{
    const moviesResponse = await axiosInstance.get<ApiResponse<Review[]>>(`/api/reviews/movies/${movieId}`);
    let movie= await moviesResponse.data.data;
    return movie;
}