
import { Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import { Movie } from '@/types/movies';
import MovieDetailsUI from "@/app/(DashboardLayout)/movies/[id]/MovieDetailsUI";
import {getMovieById} from "@/app/api/movieApi";


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
            <MovieDetailsUI movie={movie}/>
        </PageContainer>
    );
};

export default MovieDetailsPage;

