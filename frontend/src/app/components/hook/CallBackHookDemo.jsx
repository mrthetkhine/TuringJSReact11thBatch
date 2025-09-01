'use client';

import {memo, useCallback, useState} from "react";

function factorial(n)
{
    console.log('Compute Fact ',n);
    let result = 1;
    for(let i=1;i<=n;i++)
    {
        result *= i;
    }
    return result;

}
let savedHandler;
function Child({handler})
{
    console.log('Child render');
    if(!savedHandler)
    {
        savedHandler = handler;
    }
    console.log('is same' ,savedHandler ==handler );
    savedHandler = handler;
    return(<div>
        <button className={"btn btn-primary"} onClick={handler}>Child Click</button>
    </div>);
}
Child = memo(Child);
export default function CallBackHookDemo()
{
    console.log('Render CallBackHookDemo');
    let [count,setCount] = useState(0);
    const callBack = ()=>{
        console.log('Parent callback');
    }
    const handler = useCallback(()=>{
        console.log('Callback');
    },[]);
    return (<div>
        Count {count} &nbsp;
        <Child handler={handler}/>
        <button onClick={() => setCount(count+1)}>Inc</button>
    </div>);
}