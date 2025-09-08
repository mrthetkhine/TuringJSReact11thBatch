'use client';

import TodoList from "@/app/components/reducer/TodoList";
import TodoEntry from "@/app/components/reducer/TodoEntry";
import {TodoModel} from "@/app/components/reducer/TodoModel";
import {useReducer} from "react";

interface TodoState {
    todos: TodoModel[]
}
export type TodoActions = {
    type:"ADD_TODO",
    payload:TodoModel
}
|{
    type:"DELETE_TODO",
    payload:TodoModel
}
| {
    type: "UPDATE_TODO",
    payload: TodoModel
}
function todoReducer(state: TodoState, action: TodoActions): TodoState {
    switch (action.type) {
        case "ADD_TODO":
            return {
                todos: [...state.todos, action.payload]
            }
        case "DELETE_TODO":
            return {
                todos: state.todos.filter(td=>td.id !== action.payload.id)
            }
        case "UPDATE_TODO":
            return {
                todos: state.todos.map(td=>td.id===action.payload.id?action.payload:td)
            }
        default:
            return state;
    }
}
const initList = [
    {
        id:'1',
        title: 'Task 1',
    },
    {
        id:'2',
        title: 'Task 2',
    }
];
const initState ={
    todos: initList
}
export default function TodoWithReducer()
{
    const [state,dispatch] = useReducer(todoReducer, initState);
    return(<div>
        <TodoEntry dispatch={dispatch}/>
        <TodoList todos={state.todos} dispatch={dispatch}/>
    </div>);
}