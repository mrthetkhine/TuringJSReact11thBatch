'use client';
import {useParams, useRouter} from "next/navigation";
import {Movie, Review} from "@/lib/model/model";
import MovieUI from "@/app/movies/components/MovieUI";
import Button from "@mui/material/Button";
import * as React from "react";
import Typography from "@mui/material/Typography";
import MovieDetailsUI from "@/app/movies/components/MovieDetailsUI";
import ReviewList from "../components/ReviewList";
import ReviewEntry from "@/app/movies/components/ReviewEntry";
import {ReviewFormSchema} from "@/lib/schema/schema";
import useModal from "@/lib/hooks/useModal";

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

    const reviews:Review[]=[
        {
            "_id": "6890b89f4e66fd7c445ef4d9",
            "movie": "688f468ad5f7e98a92cc5843",
            "rating": 3,
            "review": "first review for avatar 1",

        },
        {
            "_id": "6890b8a54e66fd7c445ef4db",
            "movie": "688f468ad5f7e98a92cc5843",
            "rating": 3,
            "review": "second review for avatar 1",

        },
    ];

    const {open,handleOpen,handleClose} = useModal();
    const onSubmit = (data: ReviewFormSchema) => console.log(data);

    const newButtonHandler = ()=>{

        handleOpen();
        console.log('Open new Review Entry ',open);
    }
    return(<div>
        <h1>Movie Details</h1>
        <Button size="medium" onClick={()=>router.push('/movies')}>Back</Button>
        <MovieDetailsUI movie={movie}/>
        <div style={{padding:'10px'}}>
            <Button size="large" variant={"contained"} onClick={newButtonHandler}>New</Button>
            <ReviewEntry modalOpen={open} handleOpen={handleOpen} handleClose={handleClose}/>
        </div>
        <div >

            <ReviewList reviews={reviews}/>
        </div>

    </div>)
}