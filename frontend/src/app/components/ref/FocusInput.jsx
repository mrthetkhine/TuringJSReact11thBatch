'use client';
import {useEffect, useRef} from "react";
import useCustomRef from "@/app/components/hook/useCustomRef";

export default function FocusInput()
{
    const inputRef = useCustomRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const btnHandler=()=>{
        console.log('focus ',inputRef.current);
        inputRef.current.focus();
    };
    console.log('Ref ',inputRef);
    return(<div>
        <input type={"text"} ref={inputRef}/>
        <button type={"button"} onClick={btnHandler}> Focus Input </button>
    </div>);
}