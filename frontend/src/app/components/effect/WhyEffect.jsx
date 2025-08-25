'use client';
import {useRef,useState,useEffect} from "react";

function VideoPlayer({ src, isPlaying }) {
    const ref = useRef(null);
    console.log("ref", ref.current);
    console.log('Render Video player');
    useEffect(() => {
        console.log("useEffect", ref.current);
        if (isPlaying) {

            ref.current.play();
        } else {
            ref.current.pause();
        }
    }, [isPlaying]);

    return <video ref={ref} src={src} loop playsInline width={"250px"}/>;
}
export default function WhyEffect()
{
    const [isPlaying, setIsPlaying] = useState(false);

    const onClickHandler = ()=>{
        console.log("clicked ");
        setIsPlaying(!isPlaying);

    };
    return(<div>
        <button type={"button"} onClick={onClickHandler}>Play</button>
        <VideoPlayer
               width={"250px"}
               isPlaying={isPlaying}
               src={"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"} />
    </div>)
}