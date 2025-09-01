'use client';

import {Suspense, use} from "react";

async function getData(){
    await new Promise(resolve => {
        setTimeout(resolve, 5000);
    });
    console.log('getData return');
    return "Hello World from getData";
}
function Child1()
{
    let data  = use(getData());
    console.log('Render Child 1');
    return <div>
        {data}
    </div>
}
function Child2()
{
    console.log('Render Child 2');
    return (<div>
        Child 2
    </div>)
}
export default function WaitPromise()
{
    return(<div>
        Parent
        <Child2/>
        <Suspense fallback={<h2>Loading...</h2>}>
            <Child1/>
        </Suspense>
    </div>);
}