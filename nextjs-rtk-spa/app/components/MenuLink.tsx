import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import * as React from "react";

interface MenuLinkProp  {
    url:string;
    label:string;
}
export default function MenuLink({url,label}: MenuLinkProp) {
    return <MenuItem>
        <Link
            href={url}
        >
            <Typography sx={{textAlign: "center"}}>
                {label}
            </Typography>
        </Link>
    </MenuItem>;
}