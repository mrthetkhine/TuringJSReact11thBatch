'use client';
import { Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import MovieListUI from "@/app/(DashboardLayout)/movies/MovieListUI";
import {useGetAllMoviesQuery} from "@/lib/features/movie/movieApiSlice";


const SamplePage = () => {
    const { data:response, isError, isLoading, isSuccess,refetch } = useGetAllMoviesQuery(undefined,{});
    return (
    <PageContainer title="Movie Page" description="this is Sample page">
        {
            isSuccess&& response && <MovieListUI movies={response.data}/>
        }
    </PageContainer>
  );
};

export default SamplePage;

