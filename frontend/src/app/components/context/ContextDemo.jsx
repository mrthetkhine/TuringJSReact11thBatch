'use client';
import {useContext, useState} from 'react';
import {ThemeContext} from "@/app/components/context/ThemeContext";
function Level1UI()
{
    return(<div>
        Level 1 UI
        <Level2UI/>
    </div>);
}
function Level2UI()
{
    return(<div>
        Level 2 UI
        <Level3UI/>
    </div>)
}
function Level3UI()
{
    const theme = useContext(ThemeContext);
    return (<div style={{
        color:theme.color,
    }}>
        Level 3 UI
    </div>)
}
export default function ContextDemo()
{
    let [color,setColor] = useState('green');

    const themeChangeHandler = ()=>{
        setColor('blue');
    }
    let theme = {
        color,
    }
    return (<div>
        <button type={"button"} onClick={themeChangeHandler}>Change</button>
        <ThemeContext.Provider value={theme}>
            <Level1UI/>
        </ThemeContext.Provider>
    </div>)
}