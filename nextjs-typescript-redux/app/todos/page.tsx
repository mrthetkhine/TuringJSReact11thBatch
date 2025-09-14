'use client';
import {useEffect,useState} from "react";

export default function TodoPage()
{
    console.log('Todopage render');
    const [todos, setTodos]= useState([]);
    useEffect(()=>{
        console.log('fetch todo');
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res=>res.json())
         .then(json=>setTodos(json));

    },[]);
    return (<div>
        Todo page
        {
            todos.map(todo=><div key={todo.id}>{todo.title}</div>)
        }
    </div>)
}