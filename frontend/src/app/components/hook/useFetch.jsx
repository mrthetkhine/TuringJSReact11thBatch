import {useEffect, useState} from "react";

export default function useFetch(url)
{
    const [loading,setLoading] = useState(true);
    const [data,setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => {
                setData(json)
                setLoading(false);
            });
    },[])
    return [loading,data];
}