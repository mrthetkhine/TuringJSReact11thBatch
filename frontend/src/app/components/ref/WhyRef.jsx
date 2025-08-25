'use client';
import {useState} from "react";

export default function WhyRef()
{
    let [count,setCount]=useState(0);

    let value = 0;
    const onInc =()=>{
        setCount(count+1);
    };
    const incLocal = ()=>{
        value++;
        console.log('local value ',value);
    }
    console.log('Render WhyRef counter ',count, ' local ',value);
    return (<div>
        Counter {count}
        &nbsp;
        <button type={"button"} onClick={onInc}>Inc</button>
        &nbsp;
        <button type={"button"} onClick={incLocal}>Inc Local</button>
    </div>)
}