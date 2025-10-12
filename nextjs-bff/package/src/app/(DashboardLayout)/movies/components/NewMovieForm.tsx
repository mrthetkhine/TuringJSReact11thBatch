'use client';
import {Box, Button, Stack, Typography} from "@mui/material";
import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";
import React, {useActionState} from "react";
import {useForm} from "react-hook-form";
import {LoginFormValue, loginSchema} from "@/lib/schema/loginShema";
import {zodResolver} from "@hookform/resolvers/zod";
import {MovieFormValue, movieSchema} from "@/lib/schema/movieSchema";
import {saveOrUpdateMovie} from "@/lib/actions/movieActions";
import Link from "next/link";
import { Movie } from '@/types/movies';
const initialState = {
    success: "",
    errors: {
        title:'',
        year:0,
        director:'',
        phoneNo:'',
    }
};
interface NewMovieFormProps{
    movieToEdit?:Movie
}
export default function NewMovieForm({movieToEdit}: NewMovieFormProps)
{
    console.log('Movie to edit ',movieToEdit);
    const { register, handleSubmit, control } = useForm<MovieFormValue>({
        resolver: zodResolver(movieSchema), // Integrate Zod for schema-based validation
        defaultValues: {
            title:movieToEdit?.title??'',
            year:movieToEdit?.year??0,
            director:movieToEdit?.director?.name??'',
            phoneNo:movieToEdit?.director?.phoneNo??'',
        },
    });
    const [state, saveOrUpdateMovieAction, pending] = useActionState(saveOrUpdateMovie, initialState);
    return(


            <form action={saveOrUpdateMovieAction}>

                <Stack>
                    <Box>
                        <CustomTextField
                            name="_id"
                            type="hidden"
                            variant="outlined"
                            value={movieToEdit?._id || ''}
                        />
                        <Typography
                            variant="subtitle1"
                            fontWeight={600}
                            component="label"
                            htmlFor="title"
                            mb="5px"
                        >
                            Title
                        </Typography>
                        <CustomTextField

                            variant="outlined"
                            fullWidth
                            {...register("title")}
                            error={!!state?.errors?.title}
                            helperText={state?.errors?.title}/>
                    </Box>
                    <Box mt="25px">
                        <Typography
                            variant="subtitle1"
                            fontWeight={600}
                            component="label"
                            htmlFor="year"
                            mb="5px"
                        >
                            Year
                        </Typography>
                        <CustomTextField

                            type="text"
                            variant="outlined"
                            fullWidth
                            {...register("year")}
                            error={!!state?.errors?.year}
                            helperText={state?.errors?.year==0?'':state?.errors?.year}
                        />
                    </Box>
                    <Box mt="25px">
                        <Typography
                            variant="subtitle1"
                            fontWeight={600}
                            component="label"
                            htmlFor="director"
                            mb="5px"
                        >
                            Director
                        </Typography>
                        <CustomTextField

                            type="text"
                            variant="outlined"
                            fullWidth
                            {...register("director")}
                            error={!!state?.errors?.director}
                            helperText={state?.errors?.director}/>
                    </Box>
                    <Box mt="25px">
                        <Typography
                            variant="subtitle1"
                            fontWeight={600}
                            component="label"
                            htmlFor="director"
                            mb="5px"
                        >
                            Phone No
                        </Typography>
                        <CustomTextField

                            type="text"
                            variant="outlined"
                            fullWidth
                            {...register("phoneNo")}
                            error={!!state?.errors?.phoneNo}
                            helperText={state?.errors?.phoneNo}/>
                    </Box>
                    <Stack
                        justifyContent="space-between"
                        direction="row"
                        alignItems="center"
                        my={2}
                    >


                    </Stack>
                    <Box>
                        <Button
                            color="primary"
                            variant="contained"
                            type="submit"
                            disabled={pending}
                        >
                            {movieToEdit?'Update Movie':'Save Movie'}
                        </Button>
                    </Box>
                </Stack>
            </form>
        );
}