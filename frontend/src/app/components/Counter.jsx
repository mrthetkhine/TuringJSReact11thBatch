'use client';
import {useState} from "react";

export default function Counter()
{
    console.log('Counter render');
    let [count,setCount] = useState(0);
    let [another,setAnother] = useState(2);
    const clickHandler = ()=>{

        setCount(count + 1);
        setAnother(another + 2);
        console.log('inc ',count);
    }
    const clickHandler2 = ()=>{

        setAnother(another + 2);
        console.log('set Another ');
    }
    return (<div>
        <h3>{count}</h3>
        <h3>Another is {another}</h3>
        <button onClick={clickHandler}>
            &nbsp; Inc + &nbsp;
        </button>
        <button onClick={clickHandler2}>
            &nbsp; Inc Another + &nbsp;
        </button>
    </div>);
}