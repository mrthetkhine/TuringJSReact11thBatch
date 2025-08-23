'use client';

import {useState} from "react";

export default function StateProblem1()
{
    const [number, setNumber] = useState(0);
    console.log('Render number',number);
    return (
        <>
            <h1>{number}</h1>
            <button onClick={() => {
               /* setNumber(number + 5);*/
                setNumber(n => n + 1);
                setNumber(n => n + 1);
                setNumber(n => n + 1);
               /* setTimeout(() => {
                    console.log('timeout ',number);
                }, 3000);*/
            }}>+3</button>
        </>
    )
}