'use client';
import {useEffect,useState} from "react";
import {TodoModel} from "@/app/components/reducer/TodoModel";

export default function TodoPage()
{
    console.log('Todopage render');
    const [todos, setTodos]= useState<TodoModel[]>([]);
    useEffect(()=>{
        console.log('fetch todo');
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res=>res.json())
         .then((json:TodoModel[])=>setTodos(json));

    },[]);
    return (<div>
        Todo page
        {
            todos.map(todo=><div key={todo.id}>{todo.title}</div>)
        }
    </div>)
}