'use client';
/*
{
    count:0
}
* */
import {useReducer} from "react";

function counterReducer(state, action)
{
    console.log('Reducer ', state,' action', action);
    switch(action.type){
        case "INC":
            return {
                count:state.count + 1,
            };
        case "DEC":
            return {
                count:state.count - 1,
            }
        default:
        return {
            ...state,
        }
    }
}
const initState = {
    count: 0,
}
export default function CounterWithReducer()
{
    console.log('Render');
    const [state, dispatch] = useReducer(counterReducer, initState);
    const incHandler = ()=>{
        dispatch({
            type: "INC",
        });
    };
    const decHandler=()=>{
        dispatch({
            type: "DEC",
        });
    };
    return(<div>
        Counter
        <button type={'button'} onClick={incHandler}>
            +
        </button>
        &nbsp;
        {
            state.count
        }
        &nbsp;
        <button type={'button'} onClick={decHandler}>
            -
        </button>
    </div>);
}