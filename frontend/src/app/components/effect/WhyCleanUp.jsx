'use client';

import {useEffect, useRef, useState} from "react";

function CurrentTime()
{
    let [now,setNow] = useState(new Date());
    //const timer = useRef(null);
    useEffect(()=>{
        console.log('Current Time initialized');
    },[]);
    useEffect(() => {
        console.log('set timer');
       let timer = setInterval(()=>{
            console.log('tik');
            setNow(new Date());
        },1000);

       return function() {
           console.log('Timer Clean up');
           clearInterval(timer);
       }
    },[]);
    return(<div>
        {now.toLocaleTimeString()}
    </div>);
}
export default function WhyCleanUp()
{
    let [show,setShow]=useState(false);

    return(<div>
        Show
        <input type={"checkbox"}
               value={show}
               onChange={(e)=>setShow(e.target.checked)}/>
        {
            show && <CurrentTime/>
        }

    </div>);
}