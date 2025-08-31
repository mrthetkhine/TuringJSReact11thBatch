'use client';


import CustomButton from "@/app/components/CustomButton";

export default function CustomButtonDemo() {
    const onClickHandler =()=>{
      console.log("clicked");
    };
    return (<div>
        <CustomButton onClick={onClickHandler} label={"Click me"}/>
    </div>);
}