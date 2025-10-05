'use client';
import {Movie} from "@/lib/model/model";
import MovieUI from "@/app/movies/components/MovieUI";
import Button from "@mui/material/Button";
import * as React from "react";
import {useRouter} from "next/navigation";
import {useDeleteMovieMutation} from "@/lib/features/movie/movieApiSlice";

interface MovieListProp
{
    movies :Movie[];
}
export default function MovieListUi({movies}:MovieListProp)
{
    const router = useRouter();
    const [deleteMovie,deleteMovieResult] = useDeleteMovieMutation();
    const btnDetailHandler = (movie:Movie)=>{
        console.log('Movie details handler');
        router.push(`/movies/${movie._id}`);
    }
    const btnDeleteHandler = (movie:Movie)=>{
        let result = window.confirm("Are you sure you want to delete this movie?");
        console.log('Confirm result ',result);
        deleteMovie(movie)
            .unwrap()
            .then(()=>{
                console.log('Movie delete success');
            },()=>{
                console.log('Movie delete error');
            })
    }
    return(<div>
        {
            movies.map((movie)=><MovieUI
                key={movie._id}
                movie={movie}
                renderAction={(movie:Movie)=>(<>
                    <Button size="small" onClick={()=>btnDeleteHandler(movie)}>Delete</Button>
                    <Button size="small" onClick={()=>btnDetailHandler(movie)}>Details</Button>
                </>)}
            />)
        }
    </div>);
}