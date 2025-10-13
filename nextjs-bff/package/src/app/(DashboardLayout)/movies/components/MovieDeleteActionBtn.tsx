'use client';

import Link from "next/link";
import {Button} from "@mui/material";
import React from "react";
import {deleteMovieAction} from "@/lib/actions/movieActions";

interface MovieDeleteActionBtnProps {
    id: string|undefined;
}
export default function MovieDeleteActionBtn({id}:MovieDeleteActionBtnProps)
{
    const onClickHandler =()=>{
        console.log('Movie Delete Action ',id);
        deleteMovieAction(id!);
    };
    return (<Button
        color="primary"
        variant="contained"
        onClick={onClickHandler}
        type="button"
    >
        Delete
    </Button>)
}