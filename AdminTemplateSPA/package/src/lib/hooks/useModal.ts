'use client';

import * as React from "react";

export default function useModal()
{
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return {
        open, handleOpen,handleClose
    };
}