'use client';

import {useContext, useReducer, useState} from "react";
import {TodoContext, TodoDispatchContext} from "@/app/components/context/TodoContext";



let initialTodos = [
    {
        "id": 1,
        "title":"Task 1",
    },
    {
        "id": 2,
        "title":"Task 2",
    }


]
let id= 3;
function uniqueId()
{
    return id++;
}
function TodoItem({todo}) {
    const dispatch = useContext(TodoDispatchContext);

    let [isEditing, setEditing] = useState(false);
    const [todoText,setTodoText] = useState(todo.title);
    const onEditHandler = ()=>{
        setEditing(!isEditing);
        if(isEditing)
        {
            console.log('Update ',todoText);
            const updateTodo = {
                ...todo,
                title: todoText
            }
            dispatch({
                type:'UPDATE_TODO',
                payload:updateTodo,
            });
        }
    }
    const onChangeHandler = (e)=>{
        setTodoText(e.target.value);
    }
    const onDeleteHandler = (todo)=>{
        dispatch({
            type:'DELETE_TODO',
            payload:todo,
        });
    }
    return <div>
        {
            isEditing ?
                <input type={"text"} value={todoText} onChange={onChangeHandler}/>
                : todoText
        }

        &nbsp;
        <button type={"button"} onClick={()=>onDeleteHandler(todo)}>Delete</button>

        &nbsp;
        <button type={"button"} onClick={onEditHandler}>
            {isEditing ?'Update':'Edit'}
        </button>
    </div>;
}

function TodoList()
{
    const todos = useContext(TodoContext);
    return (<div>
        {
            todos.map((todo)=><TodoItem key={todo.id}
                                        todo={todo}

            />)
        }
    </div>);
}
function TodoEntry() {
    const dispatch = useContext(TodoDispatchContext);
    let [todoText, setTodoText] = useState("");
    const onChange =(e)=>{
        setTodoText(e.target.value);
    }
    const addHandler = ()=>{
        let todo  = {
            id : uniqueId(),
            title: todoText,
        }
        dispatch({
            type:'ADD_TODO',
            payload:todo,
        });
        setTodoText("");
    }
    return <>
        New Item
        <input
            value={todoText}
            onChange={onChange}
        />
        <button type={"button"} onClick={()=>addHandler()}>Add</button>
    </>;
}
export default function TodoReducerWithContext()
{
    const [todos,dispatch] = useReducer(todoReducer,initialTodos);
    return (<div>
        <TodoContext.Provider value={todos}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoEntry/>
                <TodoList/>
            </TodoDispatchContext.Provider>
        </TodoContext.Provider>
    </div>);
}