import {Movie} from "@/lib/model/model";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import * as React from "react";
import MovieUI from "@/app/movies/components/MovieUI";

function renderAction(movie:Movie)
{
    return (<>
        <Button size="small">Edit</Button>
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