'use client';

import {useBoundStore} from "@/lib/store/useBoundStore";
import {Button, TextField} from "@mui/material";
import {TodoModel} from "@/lib/store/todo/todo-store";
import {useState}   from "react";

let id = 3;

export default function TodoUI()
{
    const {todos,addTodo,deleteTodo} = useBoundStore();
    const [newTodo,setNewTodo]=useState('');

    const btnAddHandler=()=>{
        let todo:TodoModel = {
            id :id++,
            title:newTodo,
        }
        addTodo(todo);
    };
    const btnDeleteHandler=(todo:TodoModel)=>{
        deleteTodo(todo);
    }
    return (<div>
            <TextField
                value={newTodo}
                onChange={(e)=>setNewTodo(e.target.value)}
            />
            <Button variant={"contained"}
                    type={"button"}
                    onClick={btnAddHandler}
            >
                Add
            </Button>
            {
                todos.map(todo=><div key={todo.id}>
                    {
                        todo.title
                    }
                    <Button variant={"contained"}
                            type={"button"}
                            onClick={()=>btnDeleteHandler(todo)}
                    >
                        Delete
                    </Button>
                </div>)
            }
        </div>

    );
}