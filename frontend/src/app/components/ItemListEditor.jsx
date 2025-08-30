'use client';

import {useEffect, useState} from "react";

let id = 5;
function nextId()
{
    return id++;
}
let initTodos = [


]
function TodoList({todos,onDelete,onUpdate})
{
    return(<div>
        {todos.map((todo,index)=><div key={todo.id}>
            {todo.title}
            &nbsp; <button type={"button"} onClick={()=>onDelete(todo)}>Delete</button>
            &nbsp; <button type={"button"} onClick={()=>onUpdate(todo)}>Update</button>
        </div>)}
    </div>);
}

function TodoEntry(props) {
    return <>
        New Item
        <input
            value={props.value}
            onChange={props.onChange}
        />
        <button type={"button"} onClick={props.onClick}>Add</button>
    </>;
}

export default function ItemListEditor(){
    const [todos,setTodos] = useState(initTodos);
    const [todoText, setTodoText] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json));
    }, []);
    console.log('Render itemListEditor');
    let addTodoHandler = ()=>{

        let newTodo = {
            id: nextId(),
            title : todoText,
        }
        console.log("addTodoHandler ",newTodo);
        //todos.push(newTodo);
        setTodos([...todos,newTodo]);
        setTodoText('');
    };
    const deleteHandler = (todo)=>{
        console.log('delete ',todo);
        setTodos(todos.filter(td=>td.id != todo.id));
    }
    const updateHandler = (todo)=>{
        console.log('Update ',todo);
        todo.title = 'Update';
        setTodos(todos.map(td=>td.id==todo.id?todo:td));
    }
    const sortHandler = ()=>{
        console.log('reverse ');

        setTodos([...todos.reverse()]);
    }
    return (<div>
        <TodoEntry value={todoText}
                   onChange={e => setTodoText(e.target.value)}
                   onClick={addTodoHandler}
                    />
        <button type={"button"} onClick={sortHandler}>Sort</button>
        <TodoList todos={todos} onDelete={deleteHandler} onUpdate={updateHandler}/>
    </div>);
}