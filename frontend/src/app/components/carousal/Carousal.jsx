'use client';
import './carousal.css';
import {useState} from "react";

export default function Carousal({children})
{
    let [current,setCurrent] = useState(0);
    const btnLeftClick=()=>{
        if(current == 0){
            setCurrent(children.length-1);
        }
        else
        {
            setCurrent(current-1);
        }
        console.log('Left click');

    }
    const btnRightClick=()=>{
        setCurrent( (current+1) % children.length);
        console.log('Right click');
    }
    return (<div >
        Carousal Container
        <div className={"carousal-container"}>
            {
                children.map((child,index)=><div className={"carousal-content"}
                                                 key={index}
                                                 style={{
                        opacity: index === current ? 1 : 0,
                        display: index === current ? 'inline-block' : 'none' ,
                    }}>
                    {children[index]}
                </div>
                )
            }

        </div>
        <div>
            <button type={"button"} onClick={btnLeftClick}>
                <h3> {" << "} </h3>
            </button>
            &nbsp;
            <button type={"button"} onClick={btnRightClick}>
                <h3> {" >> "} </h3>
            </button>
        </div>
    </div>);
}