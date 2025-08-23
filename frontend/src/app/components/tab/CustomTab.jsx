'use client';
import './tab.css';
import {useState} from "react";

function TabHeader({onClick,header}) {
    console.log("TabHeader render");
    return <div
        onClick={onClick}
        className={"tab-header"}>
        {header}
    </div>;
}

export default function CustomTab({headers,children})
{
    console.log('CustomTab render ');
    let [activeTab, setActiveTab] = useState(0);
    return (<div>
        <div>
            {
                headers.map((header, i) =><TabHeader
                    key={i}
                    onClick={() => setActiveTab(i)}
                    header={header}/>)
            }
        </div>
        <div className={'tab-content'}>
            {children[activeTab]}
        </div>
    </div>);
}