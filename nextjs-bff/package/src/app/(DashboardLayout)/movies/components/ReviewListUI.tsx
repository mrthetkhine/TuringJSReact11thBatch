import {getAllReviewByMovieId} from "@/lib/api/reviewApi";
import {Avatar, CardContent, Grid, Typography} from "@mui/material";
import BlankCard from "@/app/(DashboardLayout)/components/shared/BlankCard";
import Link from "next/link";
import {Stack} from "@mui/system";
import { Review } from "@/types/movies";

interface ReviewListUIProps {
    movieId:string
}
export default async function ReviewListUI({movieId}:ReviewListUIProps)
{
    const reviews = await getAllReviewByMovieId(movieId);
    return (<div>
        <Grid container spacing={3}>
            <Grid
                size={{
                    xs: 12,
                    md: 4,
                    lg: 3
                }}>
                <BlankCard>

                    {
                        reviews.map((review: Review) => (<CardContent sx={{ p: 3, pt: 2 }}>
                            <Typography variant="h6">{review.review}</Typography>
                            <Stack
                                direction="row"
                                alignItems="center"
                                justifyContent="space-between"
                                mt={1}
                            >
                                <Stack direction="row" alignItems="center">
                                    <Typography variant="h6">{review.rating}</Typography>

                                </Stack>

                            </Stack>
                        </CardContent>))
                    }

                </BlankCard>
            </Grid>
        </Grid>
    </div>);
}