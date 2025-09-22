'use client';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import {Movie} from "@/lib/model/model";
import styles from './MovieUI.module.css';
import {useRouter} from "next/navigation";
interface MovieUIProps{
    movie:Movie;
    renderContent?:(movie:Movie)=>React.ReactNode;
    renderAction: (movie: Movie) => React.ReactNode;
}

export default function MovieUI({movie,renderAction,renderContent}:MovieUIProps)
{

    return(<div className={styles['movie-container']}>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="https://www.cinematerial.com/media/box-office/20990442.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {movie.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {movie.year}
                </Typography>
                {
                    renderContent?.(movie)
                }
            </CardContent>
            <CardActions>
                {
                    renderAction(movie)
                }

            </CardActions>
        </Card>
    </div>);
}