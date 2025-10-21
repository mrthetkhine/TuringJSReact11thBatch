import { Movie,Director } from "@/lib/types/movies";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import {MovieFormData, MovieFormSchema} from "@/lib/schema/schema";
import {zodResolver} from "@hookform/resolvers/zod";
import {useMutationSaveMovie, useMutationUpdateMovie} from "@/lib/hooks/movieHook";
interface MovieDialogProps{
    open:boolean,
    handleClose:()=>void,
    movieToEdit?:Movie,
}
export default function MovieDialog({open,handleClose,movieToEdit}:MovieDialogProps)
{
    const {mutate:saveMovie} = useMutationSaveMovie();
    const {mutate:updateMovie} = useMutationUpdateMovie();
    const defaultDirector:Director  ={
        _id:'',
        name:'',
        phoneNo:'',
    }
    const defaultValues : Movie = {
        _id:movieToEdit?._id??'',
        title:movieToEdit?.title??'',
        year:movieToEdit?.year??0,
        director:movieToEdit?.director??defaultDirector,
    };

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<MovieFormSchema>({
        resolver: zodResolver(MovieFormData),
        defaultValues :{
            _id:movieToEdit?movieToEdit._id:'',
            title: movieToEdit?movieToEdit.title:'',
            year: movieToEdit?movieToEdit.year:0,
            director :{
                name: movieToEdit?movieToEdit?.director?.name:'',
                phoneNo: movieToEdit?movieToEdit?.director?.phoneNo:'',

            }
        }
    })
    const onSubmit = (data:Movie) => {
        console.log(data);
        const movie:Movie = data;

        if(!movieToEdit)
        {

            console.log('Savemovie ',movie);
            saveMovie(movie,{
                onSuccess:()=> handleClose(),
                onError:(error:any)=>{
                    console.log('Error ',error);
                }
            });
        }
        else {
            console.log('update movie');
            updateMovie(movie,{
                onSuccess:()=> handleClose(),
                onError:(error:any)=>{
                    console.log('Error ',error);
                }
            });
        }


    }
    return(<Dialog
        fullWidth
        open={open}
        onClose={handleClose}

    >
        <form onSubmit={handleSubmit(onSubmit)}>
            <DialogTitle>
                {movieToEdit?'Edit Movie':'New Movie'}
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid size={12}>
                        <input type={"hidden"}
                            {...register("_id")}

                            />
                    </Grid>
                    <Grid size={12}>
                        <TextField
                            {...register("title")}
                            label="Title"
                            variant="standard"
                            fullWidth
                            error={!!errors.title}
                            helperText={errors.title?.message}/>
                    </Grid>
                    <Grid size={12}>
                        <TextField
                            {...register("year")}
                            label="Year"
                            variant="standard"
                            fullWidth
                            error={!!errors.year}
                            helperText={errors.year?.message}/>
                    </Grid>
                    <Grid size={12}>
                        <TextField
                            {...register("director.name")}
                            label="Director Name"
                            variant="standard"
                            fullWidth
                            error={!!errors.director?.name}
                            helperText={errors.director?.name?.message}/>
                    </Grid>
                    <Grid size={12}>
                        <TextField
                            {...register("director.phoneNo")}
                            label="Director PhoneNo"
                            variant="standard"
                            fullWidth
                            error={!!errors.director?.phoneNo}
                            helperText={errors.director?.phoneNo?.message}/>
                    </Grid>

                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">Save</Button>
            </DialogActions>
        </form>
    </Dialog>)
}