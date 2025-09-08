'use client'
import {useState} from "react";

export default function SimpleCounter()
{
    let [count,setCount] = useState<number>(0);
    const btnIncHandler = () => {
        setCount(count+1)
    }
    return (<div>
        <button onClick={btnIncHandler}>+1</button>
        &nbsp;
        {count}
        &nbsp;
        <button onClick={()=>setCount(count+1)}>-1</button>
    </div>)
}