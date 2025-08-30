'use client';

import {useEffect, useState} from "react";

export default function EffectDemo(){

    const [value, setValue] = useState(0);
    const [another,setAnother] = useState(0);
    console.log('Render');
    useEffect(()=>{
        console.log("Effect 1 fired");
    },[]);
    useEffect(()=>{
        console.log("Effect 2 fired");
    },[value]);

    const btnHandler=()=>{
        setValue(value+1);
    }
    return(<div>
        Effect Demo
        &nbsp;{value}&nbsp;
        <button onClick={btnHandler}>Click me!</button>
        &nbsp;

        <button onClick={()=>setAnother(another+1)}>Change Another</button>
    </div>);
}