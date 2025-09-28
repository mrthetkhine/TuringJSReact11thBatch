'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';
import {useForm} from "react-hook-form";
import {Movie} from "@/lib/model/model";
import {MovieFormData, MovieFormSchema} from "@/lib/schema/schema";
import {zodResolver} from "@hookform/resolvers/zod";

interface MovieEntryProps {
    open: boolean;
    handleOpen: () => void;
    handleClose: () => void;
    movieToEdit?: Movie;
}

export default function MovieEntry({
    open,
    handleOpen,
    handleClose,
    movieToEdit,
                                   }:MovieEntryProps)
{
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<MovieFormSchema>({
        resolver: zodResolver(MovieFormData),
    })


    const onSubmit = (data: MovieFormSchema) => console.log(data);

    return(<div >
        <Button size="large" variant={"contained"} onClick={handleOpen}>New</Button>
        <Dialog open={open} onClose={handleClose}

                maxWidth={'lg'}>
            <DialogTitle>New Movie</DialogTitle>
            <DialogContent>
                <Box sx={{width: 500 }}>
                <form onSubmit={handleSubmit(onSubmit)} id="subscription-form">
                    <TextField
                        label="Title"
                        {...register('title')}
                        error={!!errors.title}
                        helperText={errors.title?.message}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Year"
                        {...register('year')}
                        type="number"
                        error={!!errors.year}
                        helperText={errors.year?.message}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Direct Name"
                        {...register('director.name')}
                        error={!!errors.director?.name}
                        helperText={errors.director?.name?.message}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Phone No"
                        {...register('director.phoneNo')}
                        error={!!errors.director?.phoneNo}
                        helperText={errors.director?.phoneNo?.message}
                        fullWidth
                        margin="normal"
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </form>
                </Box>
            </DialogContent>

        </Dialog>
    </div>);
}