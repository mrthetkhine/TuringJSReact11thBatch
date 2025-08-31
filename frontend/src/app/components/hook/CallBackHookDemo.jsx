'use client';

import {useState} from "react";

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
export default function CallBackHookDemo()
{
    return (<div>
        Demo
    </div>);
}