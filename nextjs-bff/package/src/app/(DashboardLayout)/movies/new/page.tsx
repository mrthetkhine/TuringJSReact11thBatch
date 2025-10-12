
import {Button, Typography} from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import NewMovieForm from "@/app/(DashboardLayout)/movies/components/NewMovieForm";
import Link from "next/link";
import React from "react";

const NewMoviePage = () => {
    console.log('New Movies Page ');


    return (
        <PageContainer title="New Movie" description="New Movie">
            <Button
                color="primary"
                variant="contained"
                component={Link}
                href={"/movies/"}
                type="button"
            >
                Back
            </Button>
           <NewMovieForm/>
        </PageContainer>
    );
};

export default NewMoviePage;

