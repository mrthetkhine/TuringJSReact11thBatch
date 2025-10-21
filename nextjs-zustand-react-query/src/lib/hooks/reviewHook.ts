import {useMutation, useQuery} from "@tanstack/react-query";
import {apiDeleteReview, apiLoadAllReviewByMovieId, apiSaveReview} from "@/lib/hooks/api/reviewApi";
import Review from "../types/review";
import { queryClient } from "./queryClient";

export const useReviewsByMovieId =(movieId:string)=>{
    console.log("useMovies");
    return useQuery({
        queryKey:['reviews',movieId],
        queryFn:()=>apiLoadAllReviewByMovieId(movieId),
        /* refetchOnWindowFocus: false*/
    })
}
//Pessimistic update
export const useMutationSaveReview=()=>{
    console.log("useMutationSaveReview");
    return useMutation({
        mutationFn:(review:Review)=>{

            return apiSaveReview(review);
        },
        onSuccess: (data) => {
            // Invalidate a specific query to refetch
            //queryClient.invalidateQueries({ queryKey: ['movies'] })
            queryClient.setQueryData(["reviews",data.movie],(oldState:Review[]) => [...oldState,data]);
        }
    })
}
export const useMutationDeleteReview=()=>{
    console.log("useMutationDeleteReview");
    return useMutation({
        mutationFn:(review:Review)=>{

            return apiDeleteReview(review);
        },
        onSuccess: (data) => {
            // Invalidate a specific query to refetch
            //queryClient.invalidateQueries({ queryKey: ['movies'] })
            queryClient.setQueryData(["reviews",data.movie],(oldState:Review[]) => oldState.filter(rv=>rv._id!==data._id));
        }
    })
}