'use client';
import {Movie} from "@/lib/model/model";
import MovieUI from "@/app/movies/components/MovieUI";
import Button from "@mui/material/Button";
import * as React from "react";
import {useRouter} from "next/navigation";

interface MovieListProp
{
    movies :Movie[];
}
export default function MovieListUi({movies}:MovieListProp)
{
    const router = useRouter();
    const btnDetailHandler = (movie:Movie)=>{
        console.log('Movie details handler');
        router.push(`/movies/${movie._id}`);
    }
    return(<div>
        {
            movies.map((movie)=><MovieUI
                key={movie._id}
                movie={movie}
                renderAction={(movie:Movie)=>(<>
                    <Button size="small">Delete</Button>
                    <Button size="small" onClick={()=>btnDetailHandler(movie)}>Details</Button>
                </>)}
            />)
        }
    </div>);
}