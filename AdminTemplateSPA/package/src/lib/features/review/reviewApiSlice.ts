import {movieApiSlice} from "@/lib/features/movie/movieApiSlice";
import {ApiResponse} from "@/lib/model/ApiResponse";
import {Movie, Review} from "@/lib/model/model";

export const reviewApiSlice = movieApiSlice.injectEndpoints({
    endpoints: (build) => ({
        getAllReviewByMovieId: build.query<ApiResponse<Review[]>, string>({
            query: (movieId:string) => `/api/reviews/movies/${movieId}`,

        }),
        saveReview:build.mutation<ApiResponse<Review>,Review>({
            query: (newReview:Review) => ({
                url: `/api/reviews`,
                method: 'POST',
                body: newReview,
            }),
            async onQueryStarted(review, { dispatch, queryFulfilled }) {
                try {
                    const { data: response } = await queryFulfilled
                    const patchResult = dispatch(
                        reviewApiSlice.util.updateQueryData('getAllReviewByMovieId', review.movie, (draft) => {
                            console.log('Draft ',draft);
                            console.log('Save Review ',response.data);
                            draft.data.push(response.data);

                        }),
                    )
                } catch {}
            },
        }),
        updateReview:build.mutation<ApiResponse<Review>,Review>({
            query: (updateReview:Review) => ({
                url: `/api/reviews/${updateReview._id}`,
                method: 'PUT',
                body: updateReview,
            }),
            async onQueryStarted(review, { dispatch, queryFulfilled }) {
                try {
                    const { data: response } = await queryFulfilled
                    const patchResult = dispatch(
                        reviewApiSlice.util.updateQueryData('getAllReviewByMovieId', review.movie, (draft) => {

                            console.log('updatedReview ',response.data);
                            const updatedReview = response.data;
                            draft.data =draft.data.map(r=>r._id==updatedReview._id?updatedReview:r);

                        }),
                    )
                } catch {}
            },
        }),
        deleteReview:build.mutation<ApiResponse<Review>,Review>({
            query: (review:Review) => ({
                url: `api/reviews/${review._id}`,
                method: 'DELETE',
            }),
            async onQueryStarted(review, { dispatch, queryFulfilled }) {
                console.log('onQueryStarted deleteReview ',review);
                const patchResult = dispatch(
                    reviewApiSlice.util.updateQueryData('getAllReviewByMovieId', review.movie, (draft) => {
                        console.log('Draft ',draft);
                        let data  = draft.data.filter((r:Review)=>r._id != review._id);
                        draft.data = data;
                    }),
                )
                try {
                    await queryFulfilled
                } catch {
                    patchResult.undo()

                }
            },
        }),
    }),
});
export const{
    useGetAllReviewByMovieIdQuery,
    useSaveReviewMutation,
    useUpdateReviewMutation,
    useDeleteReviewMutation,
}= reviewApiSlice;