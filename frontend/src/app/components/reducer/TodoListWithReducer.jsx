'use client'

import {useReducer, useState} from "react";


export function todoReducer(state, action){
    //console.log('State ',state, 'action ', action);
    switch(action.type){
        case "ADD_TODO":
            return [...state, action.payload];
        case "DELETE_TODO":
            return state.filter(todo=>todo.id !== action.payload.id);
        case "UPDATE_TODO":
            return state.map(todo=>todo.id == action.payload.id?action.payload:todo);
        default:
            return state;
    }
}
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
function TodoItem({todo,onDelete,onUpdate}) {

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
            onUpdate(updateTodo);
        }
    }
    const onChangeHandler = (e)=>{
        setTodoText(e.target.value);
    }

    return <div>
        {
            isEditing ?
                <input type={"text"} value={todoText} onChange={onChangeHandler}/>
                : todoText
        }

        &nbsp;
        <button type={"button"} onClick={()=>onDelete(todo)}>Delete</button>

        &nbsp;
        <button type={"button"} onClick={onEditHandler}>
            {isEditing ?'Update':'Edit'}
        </button>
    </div>;
}


function TodoEntry({onAdd}) {
    let [todoText, setTodoText] = useState("");
    const onChange =(e)=>{
        setTodoText(e.target.value);
    }
    const addHandler = ()=>{
        let todo  = {
            id : uniqueId(),
            title: todoText,
        }
        onAdd(todo);
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
function TodoList({todos,onTodoDelete,onTodoUpdate})
{
    return (<div>
        {
            todos.map((todo)=><TodoItem key={todo.id}
                                        todo={todo}
                                        onUpdate={onTodoUpdate}
                                        onDelete={onTodoDelete}
            />)
        }
    </div>);
}
function TodoCount({count})
{
    return(<div>
        <h3>Todo count {count}</h3>
    </div>);
}
export default function TodoListWithReducer()
{
    const [todos,dispatch] = useReducer(todoReducer,initialTodos);
    const onDeleteHandler = (todo)=>{
        console.log('onDelete ',todo);
        dispatch({
            type: "DELETE_TODO",
            payload:todo,
        })
    }
    const onAddHandler = (todo)=>{
        console.log('onAdd ',todo);
        dispatch({
            type: "ADD_TODO",
            payload:todo,
        })
    }
    const onUpdateHandler = (todo)=>{
        dispatch({
            type: "UPDATE_TODO",
            payload:todo
        })
    }
    return (<div>
        <TodoCount count={todos.length}/>
        <TodoEntry onAdd={onAddHandler}/>
        <TodoList todos={todos}
                  onTodoDelete={onDeleteHandler}
                  onTodoUpdate = {onUpdateHandler}
        />
    </div>);
}