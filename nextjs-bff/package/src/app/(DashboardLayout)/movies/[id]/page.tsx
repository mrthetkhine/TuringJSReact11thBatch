
import {Box, Button, Grid, Typography} from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import { Movie } from '@/types/movies';
import MovieDetailsUI from "@/app/(DashboardLayout)/movies/[id]/MovieDetailsUI";
import {getMovieById} from "@/lib/api/movieApi";
import Link from "next/link";
import React from "react";
import {Stack} from "@mui/system";


interface MovieDetailsPageProps {
    params: Promise<{
        id: string; // The dynamic route parameter 'slug'
    }>;
}

const MovieDetailsPage = async ({params}:MovieDetailsPageProps) => {

    const {id} = await params;
    console.log('Movie Page ',id);

    const movie:Movie = await getMovieById(id);
    return (
        <PageContainer title="Movie Details Page" description="Movie Details Page">
            <Button
                color="primary"
                variant="contained"
                component={Link}
                href={"/movies"}
                type="button"
            >
                Back
            </Button>

            <MovieDetailsUI movie={movie}/>
        </PageContainer>
    );
};

export default MovieDetailsPage;

