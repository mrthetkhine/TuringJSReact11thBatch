import { useMutation, useQuery} from "@tanstack/react-query";
import {apiDeleteMovie, apiLoadAllMovies, apiSaveMovie, apiUpdateMovie} from "@/lib/hooks/api/movieApi";
import {Movie} from "@/lib/types/movies";
import {queryClient} from "@/lib/hooks/queryClient";


export const useMovies =()=>{
    console.log("useMovies");
    return useQuery({
        queryKey:['movies'],
        queryFn:apiLoadAllMovies,
       /* refetchOnWindowFocus: false*/
    })
}
export const useMovieById   =(movieId:string)=>{
    console.log('Use Movie by Id ',movieId);
    const data = queryClient.getQueryData<Movie[]>(['movies'])??[];
    return {
        movie:data?.filter((movie:Movie)=>movie._id===movieId)[0]
    }
}
//Pessimistic update
export const useMutationSaveMovie =()=>{
    console.log("useSaveMovie");
    return useMutation({
        mutationFn:(movie:Movie)=>{
            delete movie._id;
            return apiSaveMovie(movie);
        },
        onSuccess: (data) => {
            // Invalidate a specific query to refetch
            //queryClient.invalidateQueries({ queryKey: ['movies'] })
            queryClient.setQueryData(["movies"],(oldState:Movie[]) => [...oldState,data]);
        }
    })
}
//Pessimistic update
export const useMutationUpdateMovie =()=>{
    console.log("updateMovie");
    return useMutation({
        mutationFn:(movie:Movie)=>{
            return apiUpdateMovie(movie);
        },
        onSuccess: (data) => {
            // Invalidate a specific query to refetch
            //queryClient.invalidateQueries({ queryKey: ['movies'] })
            queryClient.setQueryData(["movies"],(oldState:Movie[]) => oldState.map(mv=>mv._id==data._id?data:mv));
        }
    })
}
//Optimistic update
export const useMutationDeleteMovie =()=>{
    console.log("deleteMovie");
    return useMutation({
        mutationFn:(movie:Movie)=>{
            //delete movie._id;
            return apiDeleteMovie(movie);
        },
        onMutate:(movie:Movie)=>{
            console.log('On Mutate ',movie._id);
            const oldState:Movie[] = queryClient.getQueryData(['movies'])??[];

            queryClient.setQueryData(['movies'], (oldState:Movie[]) => oldState.filter(m=>m._id!=movie._id))

            return {oldState};//context
        },
        onSuccess: async (deletedMovie:Movie) => {
            console.log("I'm onSuccess! ",deletedMovie);

            //queryClient.invalidateQueries({ queryKey: ['movies'] })
            //queryClient.setQueryData(['movies'], (oldState:Movie[]) => oldState.filter(m=>m._id!=deletedMovie._id))
        },
        onSettled: async () => {
            console.log("I'm onSettled!")
        },
        onError: (err, movie:Movie, context?:{oldState:Movie[]}) => {
            queryClient.setQueryData(['movies'], context?.oldState);
        },
    })
}