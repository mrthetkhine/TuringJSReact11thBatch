
import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip, Button
} from '@mui/material';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import { Movie } from '@/types/movies';
import Link from "next/link";
import React from "react";
import MovieDeleteActionBtn from "@/app/(DashboardLayout)/movies/components/MovieDeleteActionBtn";


interface MovieUIProps  {
    movies:Movie[]
}
const MovieListUI = ({movies}:MovieUIProps) => {
    return (

        <DashboardCard title="Movie List">
            <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                <Table
                    aria-label="simple table"
                    sx={{
                        whiteSpace: "nowrap",
                        mt: 2
                    }}
                >
                    <TableHead>
                        <TableRow>

                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Title
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Year
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Director
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Action
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {movies.map((movie) => (
                            <TableRow key={movie._id}>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {movie.title}
                                    </Typography>
                                </TableCell>

                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {movie.year}
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant="h6">{movie?.director?.name}</Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        component={Link}
                                        href={"/movies/edit/"+movie._id}
                                        type="button"
                                    >
                                        Edit
                                    </Button>
                                    &nbsp;
                                    <MovieDeleteActionBtn id={movie._id}/>
                                    &nbsp;
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        component={Link}
                                        href={"/movies/"+movie._id}
                                        type="button"
                                    >
                                        Details
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </DashboardCard>
    );
};

export default MovieListUI;
