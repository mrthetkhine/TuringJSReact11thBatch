import {useState} from "react";

export default function useCustomReducer(reducer,initialState) {
    let [state,setState] = useState(initialState);

    function dispatch(action) {
        let newState = reducer(state, action);
        setState(newState);
    }
    return [state,dispatch];
}