'use client';
import $ from 'jquery';
import datepickerFactory from 'jquery-datepicker';
import {useEffect, useRef} from "react";

datepickerFactory($);

export default function DatePicker(props){
    const datepicker = useRef(null);
    useEffect(()=>{
        console.log("Initialized ",datepicker.current);
        $(datepicker.current).datepicker();
        return ()=>{
            $(datepicker.current).datepicker('destroy');
        }
    },[]);
    return (<div>
        <input type={"text"} ref={datepicker}/>
    </div>);
}