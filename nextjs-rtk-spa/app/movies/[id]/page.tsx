'use client';
import {useParams, useRouter} from "next/navigation";
import {Movie} from "@/lib/model/model";
import MovieUI from "@/app/movies/components/MovieUI";
import Button from "@mui/material/Button";
import * as React from "react";
import Typography from "@mui/material/Typography";
import MovieDetailsUI from "@/app/movies/components/MovieDetailsUI";

const movie:Movie ={
        "_id": "688f46fedf30293259412334",
        "title": "Inspection",
        "director": {
            "name": "Christopher Nolan",
            "phoneNo": "09993",
            "_id": "688f46fedf30293259412335"
        },
        "year": 2010,

}


export default function MovieDetailsPage()
{
    const {id} = useParams();
    const router = useRouter();
    console.log('Params ',id);
    return(<div>
        <h1>Movie Details</h1>
        <Button size="medium" onClick={()=>router.push('/movies')}>Back</Button>
        <MovieDetailsUI movie={movie}/>
    </div>)
}