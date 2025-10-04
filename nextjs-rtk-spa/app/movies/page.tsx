'use client'
import {Movie} from "@/lib/model/model";
import MovieListUi from "@/app/movies/components/MovieListUi";
import MovieEntry from "@/app/movies/components/MovieEntry";
import * as React from "react";
import useModal from "@/lib/hooks/useModal";
import Button from "@mui/material/Button";
import useAuth from "@/lib/hooks/useAuth";
import {useRouter} from "next/navigation";
import withProtectedRoute from "@/app/components/withProtectedRoute";
import {useGetAllMoviesQuery} from "@/lib/features/movie/movieApiSlice";


function MoviePage()
{
    const { data:response, isError, isLoading, isSuccess,refetch } = useGetAllMoviesQuery(undefined,{});
    const {open,handleOpen,handleClose} = useModal();

    return (<div>
        <Button size="large" variant={"contained"} onClick={handleOpen}>New</Button>
        <MovieEntry open={open} handleOpen={handleOpen} handleClose={handleClose}/>
        {
            response?.data && <MovieListUi movies={response?.data}/>
        }
    </div>);

}
const ProtectedMoviePage = withProtectedRoute(MoviePage);
export default ProtectedMoviePage;