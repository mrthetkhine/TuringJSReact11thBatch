'use client'
import {useState} from "react";

export default function UpdateObject()
{
    let [state,setState] = useState({
        name : "Someone",
        age : 31
    });
    const clickHandler = ()=>{
        console.log("clicked");

        setState({
            ...state,
            age : state.age + 1
        });
    };
    return (<div>
        Name {state.name}<br/>
        Age {state.age}<br/>

        <button type={"button"} onClick={clickHandler}>Update</button>
    </div>);
}