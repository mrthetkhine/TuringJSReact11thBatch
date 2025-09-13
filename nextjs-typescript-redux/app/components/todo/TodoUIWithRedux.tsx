'use client';

import {TodoModel} from "@/app/components/reducer/TodoModel";
import {Button, Card, CardActions, CardContent} from "@mui/material";

import {useAppDispatch} from "@/lib/hooks";
import {updateTodo,deleteTodo} from "@/lib/features/todos/todoSlice";


interface TodoUiPros
{
    todo:TodoModel;

}
export default function TodoUIWithRedux({todo}:TodoUiPros) {
    const dispatch = useAppDispatch();
    const onEditHandler= ()=>{
        console.log("onEditHandler");
        const editedTodo = {
            ...todo,
            title: "Update "+todo.title
        }
        dispatch(updateTodo(editedTodo))
    }
    const onDeleteHandler= ()=>{
        console.log("onDeleteHandler");
        dispatch(deleteTodo(todo));

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