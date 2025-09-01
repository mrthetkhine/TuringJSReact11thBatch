'use client';

import {useId} from "react";

export default function UniqueId() {
    const idOne = useId();
    const idTwo = useId();
    return(<div>
        <input id={idOne}/>
        <p id={idTwo}> Another element</p>
    </div>);
}