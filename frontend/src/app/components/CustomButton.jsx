'use client';
export default function CustomButton({onClick,label}) {
    return (<button type={"button"} onClick={onClick} >
        {label}
    </button>);
}