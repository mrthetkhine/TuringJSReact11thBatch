
import {Box, Button, CircularProgress, Grid, Typography} from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import { Movie } from '@/types/movies';
import MovieDetailsUI from "@/app/(DashboardLayout)/movies/components/MovieDetailsUI";
import {getMovieById} from "@/lib/api/movieApi";
import Link from "next/link";
import React, { Suspense } from "react";
import {Stack} from "@mui/system";
import ReviewListUI from "@/app/(DashboardLayout)/movies/components/ReviewListUI";


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
            <Suspense fallback={<CircularProgress/>}>
                <MovieDetailsUI movie={movie}/>
            </Suspense>
            <Suspense fallback={<CircularProgress/>}>
                <ReviewListUI movieId={id}/>
            </Suspense>
        </PageContainer>
    );
};

export default MovieDetailsPage;

