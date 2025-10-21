
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Rating, TextField} from "@mui/material";
import {useForm} from "react-hook-form";

import {useState} from "react";
import Review from "@/lib/types/review";
import { ReviewFormData, ReviewFormSchema} from "@/lib/schema/schema";
import {zodResolver} from "@hookform/resolvers/zod";
import {useMutationSaveReview} from "@/lib/hooks/reviewHook";

interface ReviewDialogProps{
    open:boolean,
    handleClose:()=>void,
    movieId:string,
}
export default function ReviewDialog({open,handleClose,movieId}:ReviewDialogProps)
{
    const [rating, setRating] = useState<number|null>(0);
    const {mutate:saveReview} = useMutationSaveReview();
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        reset,
        formState: { errors },
    } = useForm<ReviewFormSchema>({
        resolver: zodResolver(ReviewFormData),
        defaultValues :{
            _id:'',
            rating:0,
            review:'',
            movie:movieId,
        }
    });
    //watch((value)=>console.log('Form change ',value));
    const onError = (errors:any, e:any) => console.log(errors, e);
    const onSubmit = (data:any) => {
        console.log('onSubmit ',data);

        const review:Review = data;
        review.movie = movieId;


        saveReview(review,{
            onSuccess:()=>handleClose(),
        });

        //handleClose();

    }

    return(<Dialog
        fullWidth
        open={open}
        onClose={handleClose}

    >
        <form onSubmit={handleSubmit(onSubmit,onError)}>
            <DialogTitle>
                New Review
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid size={12}>
                        <input type={"hidden"}
                               {...register("_id")}

                        />
                        <input type={"hidden"}
                               {...register("movie")}

                        />
                    </Grid>
                    <Grid>
                        <Rating
                            name="hover-feedback"
                            value={rating}
                            precision={0.5}
                            onChange={(event, newValue) => {
                                setRating(newValue);
                                setValue('rating',newValue!);
                            }}

                        />
                    </Grid>
                    <Grid size={12}>
                        <TextField
                            {...register("review")}
                            label="Review"
                            variant="standard"
                            fullWidth
                            error={!!errors.review}
                            helperText={errors.review?.message}/>
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