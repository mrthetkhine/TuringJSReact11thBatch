import {Movie} from "@/lib/types/movies";
import MovieUI from "./MovieUI";
import { Grid,Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ConfirmationDialog from "@/app/components/ConfirmationDialog";
import {useMutationDeleteMovie} from "@/lib/hooks/movieHook";

interface MovieListUiProps
{
    movies:Movie[];
}
export default function  MovieListUI({movies}:MovieListUiProps)
{
    const router =useRouter();
    const {mutate:deleteMovie} = useMutationDeleteMovie();
    const [movieToDelete,setMovieToDelete] = useState<Movie|null>(null);
    const btnDetailHandler= (movie:Movie)=>{
        router.push(`/movies/${movie._id}`);
    }


    const [open, setOpen] = useState(false);

    const confirmHandler =()=>{
        console.log('Confirm delete ',movieToDelete?._id);
        deleteMovie(movieToDelete!,{
            onSuccess:(data:Movie)=>console.log('Movie deleted',data),
        });

    };
    const cancelHandler =()=>{
        console.log('Cancel');
    }
    const showConfirmDialog = (movie:Movie) => {
        setOpen(true);
        setMovieToDelete(movie);

    };

    const handleClose = (newValue?: string) => {
        setOpen(false);

    };

    return (<div>
        <ConfirmationDialog
            id="ringtone-menu"
            keepMounted
            title={"Delete movie"}
            message={"Are you sure you want to delete with title "+movieToDelete?.title}
            open={open}
            onClose={handleClose}
            okCallBack={confirmHandler}
            cancelCallBack={cancelHandler}
        />
        <Grid container spacing={2}
                  sx={{ flexGrow: 1 }}
                  size={{ xs: 6, md: 8 }}>
        {
            movies.map(movie=> <Grid size ={10} key={movie._id}>
                    <MovieUI
                        movie={movie}>

                    </MovieUI>
                    <Button type={"submit"}
                            variant={"contained"}
                            onClick={()=>showConfirmDialog(movie)} >Delete</Button>
                    &nbsp;
                    <Button type={"submit"}
                            variant={"contained"}
                            onClick={()=>btnDetailHandler(movie)} >Details</Button>
                </Grid>
            )
        }
    </Grid>
    </div>);
}