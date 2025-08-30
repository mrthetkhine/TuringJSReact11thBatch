'use client';
import {useEffect, useState} from "react";
import useFetch from "@/app/components/hook/useFetch";

export default function FetchUser(props) {
    /*const [loading,setLoading] = useState(true);
    const [users,setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                setUsers(json)
                setLoading(false);
            });
    }, []);*/
    const [loading, users] = useFetch('https://jsonplaceholder.typicode.com/users');
    return (<div>
        {loading ? <div>Loading...</div> : null}
        {
            users.map(user=><div key={user.id}>{user.name}</div>)
        }
    </div>)
}