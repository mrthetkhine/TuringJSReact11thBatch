'use client';

import {TodoModel} from "@/app/components/reducer/TodoModel";
import TodoUI from "@/app/components/reducer/TodoUI";
import {Dispatch} from "react";
import {TodoActions} from "@/app/components/reducer/TodoWithReducer";

interface TodoListPros {
    todos: TodoModel[],
    dispatch:Dispatch<TodoActions>,
}
export default function TodoList({todos,dispatch}:TodoListPros)
{
    return(<div>
        {
            todos.map((todo)=><TodoUI key={todo.id}
                                      todo={todo}
                                      dispatch={dispatch}  />)
        }
    </div>);
}