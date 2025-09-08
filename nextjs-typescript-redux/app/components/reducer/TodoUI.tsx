'use client';

import {TodoModel} from "@/app/components/reducer/TodoModel";
import {Button, Card, CardActions, CardContent} from "@mui/material";
import {Dispatch} from "react";
import {TodoActions} from "@/app/components/reducer/TodoWithReducer";


interface TodoUiPros
{
    todo:TodoModel;
    dispatch:Dispatch<TodoActions>,
}
export default function TodoUI({todo,dispatch}:TodoUiPros) {
    const onEditHandler= ()=>{
        console.log("onEditHandler");
    }
    const onDeleteHandler= ()=>{
        console.log("onDeleteHandler");
        dispatch({
            type:"DELETE_TODO",
            payload:todo
        })
    }
    return(<div >
        <Card>
            <CardContent>
                {todo.title}
                &nbsp;
                <Button variant="contained" onClick={onEditHandler}>Edit</Button>
                &nbsp;
                <Button variant="contained" onClick={onDeleteHandler}>Delete</Button>
            </CardContent>

        </Card>
    </div>);
}