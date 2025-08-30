'use client';

import {useEffect, useState} from "react";

function normal()
{
    let [state,setState]=useState([]);
}
export default function HookRule(){
    useEffect(()=>{
       // let [state,setState] = useState();
    },[])
    normal();
    return (<div>
        Hook Rule
    </div>);
}