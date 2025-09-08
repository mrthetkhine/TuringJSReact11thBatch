'use client';

import {useReducer} from "react";

interface CounterState{
    count:number
}
type CounterAction = {
    "type":"INCREMENT"
}
|{
    "type":"DECREMENT"
}
function counterReducer(state:CounterState,action:CounterAction):CounterState{
    switch (action.type) {
        case "INCREMENT":
            return {
                count:state.count+1,
            }
        case "DECREMENT":
            return {
                count:state.count-1,
            }
        default:
            return {...state};
    }
}
const initState:CounterState = {count:0,}

export default function CounterWithReducer()
{
    const [state,dispatch] = useReducer(counterReducer,initState);

    const incrementHandler = () => {
        dispatch({type:"INCREMENT"});
    }
    const decrementHandler = () => {
        dispatch({
            type:"DECREMENT"
        })
    }
    return (<div>
        Counter with reducer
        <button onClick={incrementHandler} >+1</button>
        &nbsp; {state.count} &nbsp;
        <button onClick={decrementHandler}>-1</button>
    </div>);
}