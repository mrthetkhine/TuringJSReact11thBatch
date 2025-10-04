'use client';
import useAuth from "@/lib/hooks/useAuth";
import React, {useEffect} from "react";
import {usePathname, useRouter} from "next/navigation";

export default function withProtectedRoute(Component:React.ComponentType<any>) {
    function WithProtectedRouteComponent(props:any)
    {
        const pathname = usePathname();
        const isAuth = useAuth();
        const router = useRouter();

        console.log('Path ', pathname);
        useEffect(() => {
            if(!isAuth)
            {
                router.push("/login?redirectUrl="+pathname);
            }

        }, []);
        if(!isAuth){

            return <h3>Loading...</h3>;
        }
        else
        {
            return (<Component {...props}></Component>);
        }
    }
    return WithProtectedRouteComponent;
}