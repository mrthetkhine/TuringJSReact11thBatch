
import { Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import MovieListUI from './MovieListUI';
import { getAllMovies } from '@/app/api/movieApi';

const MoviesPage = async () => {
    console.log('Movie Page ');

    let movies = await getAllMovies();
    //console.log('movies ',movies);
  return (
    <PageContainer title="Movie List Page" description="this is movie list page">
      <MovieListUI movies={movies} />
    </PageContainer>
  );
};

export default MoviesPage;

