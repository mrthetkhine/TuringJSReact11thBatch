import {movieApiSlice} from "@/lib/features/movie/movieApiSlice";
import {ApiResponse} from "@/lib/model/ApiResponse";
import {Movie, Review} from "@/lib/model/model";

export const reviewApiSlice = movieApiSlice.injectEndpoints({
    endpoints: (build) => ({
        getAllReviewByMovieId: build.query<ApiResponse<Review[]>, string>({
            query: (movieId:string) => `/api/reviews/movies/${movieId}`,

        }),
    }),
});
export const{useGetAllReviewByMovieIdQuery}= reviewApiSlice;