'use client';
import Button from "@mui/material/Button";
import * as React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import {Box, Rating, Stack} from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import {useForm} from "react-hook-form";
import {MovieFormSchema, ReviewFormData, ReviewFormSchema} from "@/lib/schema/schema";
import {zodResolver} from "@hookform/resolvers/zod";
import {useEffect} from "react";
import {Review} from "@/lib/model/model";
import {useSaveReviewMutation, useUpdateReviewMutation} from "@/lib/features/review/reviewApiSlice";

interface ReviewEntryProps{
    movieId:string;
    modalOpen : boolean,
    handleClose: ()=> void,
    handleOpen: ()=> void,
    reviewToEdit?:Review;
}
export default function ReviewEntry({movieId, modalOpen,handleOpen,handleClose,reviewToEdit}:ReviewEntryProps)
{
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        reset,
        formState: { errors },
    } = useForm<ReviewFormSchema>({
        resolver: zodResolver(ReviewFormData),
        defaultValues:{
            rating: reviewToEdit? reviewToEdit.rating:0,
            review: reviewToEdit?reviewToEdit.review:''
        }
    });

    //console.log('Modal open ',modalOpen);
    const [saveReview,saveReviewResult] = useSaveReviewMutation();
    const [updateReview,updateReviewResult] = useUpdateReviewMutation();
    const onSubmit = (data: ReviewFormSchema) =>{
        if(reviewToEdit)
        {
            console.log('Review update ',data);
            let reviewToUpdate:Review = {
                ...data,
                _id: reviewToEdit._id,
                movie : movieId,
            };
            updateReview(reviewToUpdate)
                .unwrap()
                .then((data)=>{
                    console.log('Update Review Success');
                    handleClose();
                },(error)=>{
                    console.log('Update Review Error');
                    handleClose();
                })

        }
        else
        {
            console.log('Review to edit ',reviewToEdit);
            let newReview: Review = {
                ... data,
                movie : movieId
            };
            saveReview(newReview)
                .unwrap()
                .then((data)=>{
                    console.log('Save Review Success');
                    handleClose();
                },(error)=>{
                    console.log('Save Review Error');
                    handleClose();
                })

        }
    };
    const ratingOnChange = (rating:number)=>{
        console.log('Rating on change ',rating);
        setValue('rating',rating);
    };
    const newButtonHandler = ()=>{
        reset();
        handleOpen();
    }
    //console.log('Review entry dialog open ',open);
    return (<div>

        <Dialog open={modalOpen} onClose={handleClose}

                maxWidth={'lg'}>
            <DialogTitle>
                {reviewToEdit?'Edit Review':'New Review'}
            </DialogTitle>
            <DialogContent>
                <Box sx={{width: 500 }}>
                    <form onSubmit={handleSubmit(onSubmit)} id="subscription-form">
                        <Stack>
                            <Rating name="half-rating" defaultValue={reviewToEdit?reviewToEdit.rating:0}
                                    onChange={(event, newValue) => {
                                        ratingOnChange(newValue!);
                                    }}/>
                        </Stack>


                        <TextField
                            label="Review"
                            {...register('review')}
                            error={!!errors.review}
                            helperText={errors.review?.message}
                            fullWidth
                            margin="normal"
                        />

                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                        &nbsp;
                        <Button type="button" variant="contained" color="primary" onClick={handleClose}>
                            Cancel
                        </Button>
                    </form>
                </Box>
            </DialogContent>

        </Dialog>
    </div>);
}