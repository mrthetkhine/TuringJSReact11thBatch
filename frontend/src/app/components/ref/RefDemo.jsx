'use client';
import {useRef, useState} from "react";
import useCustomRef from "@/app/components/hook/useCustomRef";

export default function RefDemo()
{
    let [count,setCount]=useState(0);

    let ref = useCustomRef(0);
    const onInc =()=>{
        setCount(count+1);
    };
    const incLocal = ()=>{
        ref.current = ref.current+1;
        console.log('local value ',ref.current);
    }
    console.log('Render WhyRef counter ',count, ' local ',ref.current);
    return (<div>
        Counter {count}
        &nbsp;
        <button type={"button"} onClick={onInc}>Inc</button>
        &nbsp;
        <button type={"button"} onClick={incLocal}>Inc Local</button>
    </div>)
}