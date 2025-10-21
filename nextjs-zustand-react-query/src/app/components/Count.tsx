'use client';

import { useBoundStore } from "@/lib/store/useBoundStore";
import { Button } from "@mui/material";

export default function Count()
{
    const {count,inc,dec} = useBoundStore();
    return (<div>

        <Button type={"button"}
                variant={"contained"}
                onClick={inc}>
            +
        </Button>
        Count {count}
        <Button type={"button"}
                variant={"contained"}
                onClick={dec}>
            -
        </Button>
    </div>);
}