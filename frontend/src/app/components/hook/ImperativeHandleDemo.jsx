'use client';
import {useRef} from "react";
import ImperativeHandle from "@/app/components/hook/ImperativeHandle";

export default function ImperativeHandleDemo() {
    console.log('Render ImperativeHandleDemo');
    const ref = useRef(null);

    const onClick = ()=>{
        ref.current.focus();
        //ref.current.style.opacity = 0.5;
        console.log('Ref current ', ref.current.scrollIntoView);
        console.log('Ref current style ', ref.current.style);
    }
    return (<div>
        <ImperativeHandle ref={ref}/>
        <button onClick={onClick}>Focus</button>
    </div>);
}