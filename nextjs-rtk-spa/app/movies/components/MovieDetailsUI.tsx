import {Movie, Review} from "@/lib/model/model";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import * as React from "react";
import MovieUI from "@/app/movies/components/MovieUI";
import useModal from "@/lib/hooks/useModal";
import MovieEntry from "@/app/movies/components/MovieEntry";

function renderAction(movie:Movie)
{
    const {open,handleOpen,handleClose} = useModal();
    return (<>
        <MovieEntry
            open={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
            movieToEdit={movie}/>
        <Button size="small" onClick={handleOpen}>Edit</Button>
    </>);
}
function renderDirector(movie:Movie)
{
    return(<>
        <Typography gutterBottom component="div">
            Directed by {movie.director.name}

        </Typography>
        <Typography gutterBottom  component="div">
            Phone {movie.director.phoneNo}

        </Typography>
    </>);
}
interface MovieDetailsUIProps {
    movie:Movie;

}
export default function MovieDetailsUI({movie}:MovieDetailsUIProps) {
    return(<MovieUI movie={movie}
                    renderContent={renderDirector}
                    renderAction={renderAction}/>);
}