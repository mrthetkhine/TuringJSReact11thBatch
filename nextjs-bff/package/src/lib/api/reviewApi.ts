import { ApiResponse, Review } from "@/types/movies";
import axiosInstance from "../../app/axiosInstance";

async function delay(ms:number)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}
export async function getAllReviewByMovieId(movieId:string):Promise<Review[]>
{
    await delay(5000);
    const moviesResponse = await axiosInstance.get<ApiResponse<Review[]>>(`/api/reviews/movies/${movieId}`);
    let movie= await moviesResponse.data.data;
    return movie;
}