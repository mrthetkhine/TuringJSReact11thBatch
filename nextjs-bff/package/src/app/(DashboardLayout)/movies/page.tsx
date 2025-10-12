
import {Button, Typography} from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import MovieListUI from './components/MovieListUI';
import { getAllMovies } from '@/lib/api/movieApi';
import Link from "next/link";
import React from "react";

const MoviesPage = async () => {
    console.log('Movie Page ');

    let movies = await getAllMovies();
    //console.log('movies ',movies);
  return (
    <PageContainer title="Movie List Page" description="this is movie list page">
        <Button
            color="primary"
            variant="contained"
            component={Link}
            href={"/movies/new"}
            type="button"
        >
            New Movie
        </Button>
      <MovieListUI movies={movies} />
    </PageContainer>
  );
};

export default MoviesPage;

