import Link from "next/link";
import {
    CardContent,
    Typography,
    Grid,
    Rating,
    Tooltip,
    Fab,
    Avatar
} from "@mui/material";
import { Movie } from "@/types/movies";
import BlankCard from "@/app/(DashboardLayout)/components/shared/BlankCard";
import {IconBasket} from "@tabler/icons-react";
import {Stack} from "@mui/system";

interface MovieDetailsUIProps {
    movie:Movie;
}
export default function MovieDetailsUI({movie}:MovieDetailsUIProps)
{
   return( <Grid container spacing={3}>
           <Grid
               size={{
                   xs: 12,
                   md: 4,
                   lg: 3
               }}>
               <BlankCard>
                   <Typography component={Link} href="/">
                       <Avatar
                           src={'https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg'} variant="square"
                           sx={{
                               height: 250,
                               width: '100%',
                           }}

                       />
                   </Typography>
                   {/*<Tooltip title="Add To Cart">
                       <Fab
                           size="small"
                           color="primary"
                           sx={{ bottom: "75px", right: "15px", position: "absolute" }}
                       >
                           <IconBasket size="16" />
                       </Fab>
                   </Tooltip>*/}
                   <CardContent sx={{ p: 3, pt: 2 }}>
                       <Typography variant="h6">{movie.title}</Typography>
                       <Stack
                           direction="row"
                           alignItems="center"
                           justifyContent="space-between"
                           mt={1}
                       >
                           <Stack direction="row" alignItems="center">
                               <Typography variant="h6">{movie.year}</Typography>

                           </Stack>
                           <Stack direction="row" alignItems="center">
                               <Typography variant="h6">{movie?.director?.name}</Typography>

                           </Stack>
                       </Stack>
                   </CardContent>
               </BlankCard>
           </Grid>
    </Grid>
   );
}