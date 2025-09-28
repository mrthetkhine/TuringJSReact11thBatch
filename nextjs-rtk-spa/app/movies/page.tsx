'use client'
import {Movie} from "@/lib/model/model";
import MovieListUi from "@/app/movies/components/MovieListUi";
import MovieEntry from "@/app/movies/components/MovieEntry";
import * as React from "react";

const movies:Movie[] = [
    {
        "_id": "688f468ad5f7e98a92cc5843",
        "title": "Avata",
        "director": {
            "name": "Jame Cameron",
            "phoneNo": "09993",
            "_id": "688f468ad5f7e98a92cc5844"
        },
        "year": 2010,

    },
    {
        "_id": "688f46b729a6302912d7c91b",
        "title": "Avata 2",
        "director": {
            "name": "Christopher Nolan",
            "phoneNo": "09993",
            "_id": "6890b2664bae71340936152d"
        },
        "year": 2500,

    },
    {
        "_id": "688f46fedf30293259412334",
        "title": "Inspection",
        "director": {
            "name": "Christopher Nolan",
            "phoneNo": "09993",
            "_id": "688f46fedf30293259412335"
        },
        "year": 2010,

    },
]
export default function MoviePage()
{
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (<div>
        <MovieEntry open={open} handleOpen={handleClickOpen} handleClose={handleClose}/>
        <MovieListUi movies={movies}/>
    </div>);
}