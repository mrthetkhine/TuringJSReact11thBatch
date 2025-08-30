'use client'
import {useEffect, useState} from "react";
import useFetch from "@/app/components/hook/useFetch";

export default function FetchTodo()
{
   /* const [loading,setLoading] = useState(true);
    const [todos,setTodos] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                setTodos(json)
                setLoading(false);
            });
    }, []);*/
    const [loading, todos] = useFetch('https://jsonplaceholder.typicode.com/todos');
    return (<div>
        {loading ? <div>Loading...</div> : null}
        {
            todos.map(todo=><div key={todo.id}>{todo.title}</div>)
        }
    </div>)
}