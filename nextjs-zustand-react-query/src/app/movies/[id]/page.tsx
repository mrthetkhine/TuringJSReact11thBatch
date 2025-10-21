'use client';
import { useParams, useRouter} from "next/navigation";
import React, {useState} from "react";
import {Movie} from "@/lib/types/movies";
import {Button,  Grid} from "@mui/material";
import MovieUI from "@/app/movies/components/MovieUI";

import MovieDialog from "@/app/movies/components/MovieDialog";
import { useMovieById } from "@/lib/hooks/movieHook";
import {useReviewsByMovieId} from "@/lib/hooks/reviewHook";
import ReviewList from "@/app/movies/components/ReviewList";
import ReviewEntry from "../components/ReviewEntry";



function MovieDetailsPage({
                              params,
                          }: {
    params: Promise<{ id: string }>
})
{
    const {id} = useParams<{ id: string }>();
    const router =useRouter();
    /*const movie:Movie =  {
        "_id": "688f468ad5f7e98a92cc5843",
        "title": "Avata",
        "director": {
            "name": "Jame Cameron",
            "phoneNo": "09993",
            "_id": "688f468ad5f7e98a92cc5844"
        },
        "year": 2010,
    }*/
    const {movie} = useMovieById(id);

    const { data:reviews,isSuccess } =  useReviewsByMovieId(id);
    console.log('Movie returned from useMovieById ',movie);
    const btnEditHandler=()=>{
        console.log('Edit movie ');
        handleClickOpen();
    }
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const btnBackHandler =()=>{
        router.push('/movies');
    };

    return (<div>
        <Grid sx={{ pt:5,mt:2,mb:3,p:2 }}>
            <MovieDialog handleClose={handleClose} open={open} movieToEdit={movie??{}as Movie}/>
            <Button  variant="contained" onClick={btnEditHandler} sx={{padding:1}}>Edit</Button>
            <Grid>

                <MovieUI
                    movie={movie??{}as Movie}
                />
            </Grid>
            <Grid>
                <ReviewEntry movieId={movie?._id??''}/>
            </Grid>

            <Grid>
                {
                    isSuccess && reviews && <ReviewList reviews={reviews}/>
                }
            </Grid>
            <Button  variant="contained" onClick={btnBackHandler} >Back</Button>

        </Grid>

    </div>);
}
//export default IsAuth(MovieDetailsPage);
export default MovieDetailsPage