import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_URL} from "@/lib/config";
import {Movie} from "@/lib/model/model";
import {ApiResponse} from "@/lib/model/ApiResponse";
import {RootState} from "@/lib/store";

export const movieApiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL ,
        prepareHeaders: (headers, { getState }) => {
            console.log('Prepare headers');
            const token = (getState() as RootState).auth.token; // Access your token from the Redux store
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }

            return headers;
        },
    }),

    reducerPath: "moviesApi",
    endpoints: (build) => ({
        getAllMovies: build.query<ApiResponse<Movie[]>, undefined>({
            query: () => `/api/movies`,

        }),
        saveMovie:build.mutation<ApiResponse<Movie>,Movie>({
            query: (newMovie:Movie) => ({
                url: `/api/movies`,
                method: 'POST',
                body: newMovie,
            }),
            async onQueryStarted(movie, { dispatch, queryFulfilled }) {
                try {
                    const { data: response } = await queryFulfilled
                    const patchResult = dispatch(
                        movieApiSlice.util.updateQueryData('getAllMovies', undefined, (draft) => {
                            console.log('Draft ',draft);
                            console.log('savedMovie ',response.data);
                            draft.data.push(response.data);

                        }),
                    )
                } catch {}
            },
        }),
        updateMovie:build.mutation<ApiResponse<Movie>,Movie>({
            query: (updateMovie:Movie) => ({
                url: `/api/movies/${updateMovie._id}`,
                method: 'PUT',
                body: updateMovie,
            }),
            async onQueryStarted(movie, { dispatch, queryFulfilled }) {
                try {
                    const { data: response } = await queryFulfilled
                    const patchResult = dispatch(
                        movieApiSlice.util.updateQueryData('getAllMovies', undefined, (draft) => {
                            console.log('Draft ',draft);
                            console.log('savedMovie ',response.data);
                            const updateMovie = response.data;
                            draft.data =draft.data.map(m=>m._id==updateMovie._id?updateMovie:m);

                        }),
                    )
                } catch {}
            },
        }),
        //Optimistics
        deleteMovie:build.mutation<ApiResponse<Movie>,Movie>({
            query: (movie:Movie) => ({
                url: `api/movies/${movie._id}`,
                method: 'DELETE',
            }),
            async onQueryStarted(movie, { dispatch, queryFulfilled }) {
                console.log('onQueryStarted deleteMovie ',movie);
                const patchResult = dispatch(
                    movieApiSlice.util.updateQueryData('getAllMovies', undefined, (draft) => {
                        console.log('Draft ',draft);
                        let data  = draft.data.filter((mv:Movie)=>mv._id != movie._id);
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
    useGetAllMoviesQuery,
    useSaveMovieMutation,
    useUpdateMovieMutation,
    useDeleteMovieMutation,
}= movieApiSlice;