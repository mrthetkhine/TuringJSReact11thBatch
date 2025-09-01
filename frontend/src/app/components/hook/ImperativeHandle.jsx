import {useImperativeHandle, useRef} from "react";

export default function ImperativeHandle({ref}) {

    const inputRef = useRef(null);

    useImperativeHandle(ref, () => {
        return {
            focus() {
                console.log('Child ref focus');
                inputRef.current.focus();
            },
            scrollIntoView() {
                inputRef.current.scrollIntoView();
            },
        };
    }, []);

    return (<div>
        <input type={"text"} ref={inputRef}/>
    </div>);
}