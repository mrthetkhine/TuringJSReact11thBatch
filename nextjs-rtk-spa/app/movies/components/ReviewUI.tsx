'use client';

import {Review} from "@/lib/model/model";
import { Card, Rating, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";
import styles from './ReviewUI.module.css';
import Button from "@mui/material/Button";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ReviewEntry from "@/app/movies/components/ReviewEntry";
import {useDeleteReviewMutation} from "@/lib/features/review/reviewApiSlice";
interface ReviewUIProps {
    review: Review;
}
export default function ReviewUI({review}:ReviewUIProps) {
    const [open, setOpen] = React.useState(false);
    const [deleteReview,deleteReviewResult] = useDeleteReviewMutation();
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const onEditHandler =()=>{
        console.log('On Edit ');
        handleClickOpen();
    };
    const onDeleteHandler =()=>{
        let result = window.confirm("Are you sure you want to delete this review?");
        if (result) {
            console.log('Delete review ',review);
            deleteReview(review)
                .unwrap()
                .then(data=>{
                    console.log('delete review success');
                },error=>{
                    console.log('delete review error');
                });
        }
    }
    return(<div >
        <ReviewEntry
            movieId={review.movie}
            modalOpen={open} handleOpen={handleClickOpen} handleClose={handleClose} reviewToEdit={review}/>
        <Card sx={{ maxWidth: 345 }} className={styles.review}>
            <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={review.rating}
                        readOnly />
            </Stack>
           {/* <Typography gutterBottom sx={{ color: 'text.secondary' }}>
                {review.rating}
            </Typography>*/}
            <Typography gutterBottom sx={{ color: 'text.secondary' }}>
                {review.review}
            </Typography>
            <Button type="button"
                    variant="contained"
                    color="primary"
                    onClick={onEditHandler}>
                <EditIcon/>
            </Button>
            &nbsp;
            <Button type="button" variant="contained" color="primary" onClick={onDeleteHandler}>
                <DeleteIcon/>
            </Button>
        </Card>
    </div>);
}