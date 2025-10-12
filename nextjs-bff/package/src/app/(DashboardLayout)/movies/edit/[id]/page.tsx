
import {Box, Button, Grid, Typography} from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import { Movie } from '@/types/movies';
import MovieDetailsUI from "@/app/(DashboardLayout)/movies/components/MovieDetailsUI";
import {getMovieById} from "@/lib/api/movieApi";
import Link from "next/link";
import React from "react";
import {Stack} from "@mui/system";
import NewMovieForm from "@/app/(DashboardLayout)/movies/components/NewMovieForm";


interface MovieEditPageProps {
    params: Promise<{
        id: string; // The dynamic route parameter 'slug'
    }>;
}

const MovieEditPage = async ({params}:MovieEditPageProps) => {

    const {id} = await params;
    console.log('Movie Page ',id);

    const movie:Movie = await getMovieById(id);
    return (
        <PageContainer title="Movie Edit Page" description="Movie Edit Page">
            <Button
                color="primary"
                variant="contained"
                component={Link}
                href={"/movies"}
                type="button"
            >
                Back
            </Button>

           <div>
               <NewMovieForm movieToEdit={movie} />
           </div>
        </PageContainer>
    );
};

export default MovieEditPage;

