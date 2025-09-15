'use client';

import {TodoModel} from "@/app/components/reducer/TodoModel";
import {Button, Card, CardActions, CardContent} from "@mui/material";

import {useAppDispatch} from "@/lib/hooks";
import {updateTodo,deleteTodo} from "@/lib/features/todos/todoSlice";
import {Todo} from "@/lib/features/todoApi/todoApiSlice";
import {useRouter} from "next/navigation";


interface TodoUiPros
{
    todo:Todo;

}
export default function TodoUiTwo({todo}:TodoUiPros) {

    const router = useRouter();
    const onEditHandler= ()=>{
        console.log("onEditHandler");
        const editedTodo = {
            ...todo,
            title: "Update "+todo.title
        }

    }
    const onDeleteHandler= ()=>{
        console.log("onDeleteHandler");


    }
    const onDetailsHandler= (id:string)=>{
        router.push(`/newtodo/${id}`);
    }
    return(<div >
        <Card>
            <CardContent>
                {todo.title}
                &nbsp;
                <Button variant="contained" onClick={onEditHandler}>Edit</Button>
                &nbsp;
                <Button variant="contained" onClick={onDeleteHandler}>Delete</Button>
                &nbsp;
                <Button variant="contained" onClick={()=>onDetailsHandler(todo._id)}>Details</Button>
            </CardContent>

        </Card>
    </div>);
}