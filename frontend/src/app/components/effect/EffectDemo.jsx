'use client';

import {useEffect, useState} from "react";

export default function EffectDemo(){

    const [value, setValue] = useState(0);
    console.log('Render');
    useEffect(()=>{
        console.log("Effect fired 1");
    });
    useEffect(()=>{
        console.log("Effect fired 2");
    })

    const btnHandler=()=>{
        setValue(value+1);
    }
    return(<div>
        Effect Demo
        &nbsp;{value}&nbsp;
        <button onClick={btnHandler}>Click me!</button>
    </div>);
}