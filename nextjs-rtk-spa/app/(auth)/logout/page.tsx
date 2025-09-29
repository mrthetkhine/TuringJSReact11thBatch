'use client';
import Button from "@mui/material/Button";
import * as React from "react";
import useLogout from "@/lib/hooks/useLogout";

export default function LogoutPage()
{

    const logoutAction = useLogout();
    const btnLogoutHandler= ()=>{
        console.log('Logout');
        logoutAction();
    }
    return(<div>
        <Button type="button" variant="contained" color="primary"
                onClick={btnLogoutHandler}>
            Logout
        </Button>
    </div>);
}