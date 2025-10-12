'use client';

import Link from "next/link";
import {Button} from "@mui/material";
import React from "react";

interface MovieDeleteActionBtnProps {
    id: string|undefined;
}
export default function MovieDeleteActionBtn({id}:MovieDeleteActionBtnProps)
{
    const onClickHandler =()=>{
        console.log('Movie Delete Action ',id);
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