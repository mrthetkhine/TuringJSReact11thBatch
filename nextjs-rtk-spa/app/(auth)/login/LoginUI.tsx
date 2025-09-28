'use client';

import {useForm} from "react-hook-form";
import {LoginFormData, LoginFormSchema, MovieFormSchema} from "@/lib/schema/schema";
import {zodResolver} from "@hookform/resolvers/zod";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Box} from "@mui/material";
import * as React from "react";

export default function LoginUI(){
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<LoginFormSchema>({
        resolver: zodResolver(LoginFormData),
    });
    const onSubmit = (data: LoginFormSchema) => {
        console.log('login form submit ',data);
    }

    return (<div>
        <Box sx={{width: 500 }}>
            <form onSubmit={handleSubmit(onSubmit)} id="subscription-form">
                <TextField
                    label="Username"
                    {...register('username')}
                    error={!!errors.username}
                    helperText={errors.username?.message}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Year"
                    {...register('password')}
                    type="password"
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    fullWidth
                    margin="normal"
                />

                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </Box>
    </div>);
}