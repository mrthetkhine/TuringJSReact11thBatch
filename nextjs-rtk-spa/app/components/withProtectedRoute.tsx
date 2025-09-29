'use client';
import useAuth from "@/lib/hooks/useAuth";
import React from "react";
import {useRouter} from "next/navigation";

export default function withProtectedRoute(Component:React.ComponentType<any>) {
    function WithProtectedRouteComponent(props:any)
    {
        const isAuth = useAuth();
        const router = useRouter();
        
        if(!isAuth){
            router.push("/login");
            return null;
        }
        else
        {
            return (<Component {...props}></Component>);
        }
    }
    return WithProtectedRouteComponent;
}