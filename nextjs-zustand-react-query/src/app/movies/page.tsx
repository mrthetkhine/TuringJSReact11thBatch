'use client';

import {Movie} from "@/lib/types/movies";
import MovieListUI from "@/app/movies/components/MovieListUI";
import MovieEntry from "@/app/movies/components/MovieEntry";
import {useMovies} from "@/lib/hooks/movieHook";
import AuthenticatedRoute from "@/app/components/AuthenticatedRoute";
/*const movies:Movie[] =[
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
    {
        "_id": "6890afb56e4164e1a6d5b0b3",
        "title": "Matrix",
        "director": {
            "name": "Christopher Nolan",
            "phoneNo": "09993",
            "_id": "6890afb56e4164e1a6d5b0b4"
        },
        "year": 2010,

    },
];*/
function MoviePage() {
    const { data:movies, isPending, isFetching,isSuccess } =  useMovies();
    return (<div>
        <MovieEntry/>
        {
            isSuccess && movies &&  <MovieListUI movies={ movies}/>
        }

    </div>);
}
export default AuthenticatedRoute(MoviePage);