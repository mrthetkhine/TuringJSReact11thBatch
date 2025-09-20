'use client';

import {TodoModel} from "@/app/components/reducer/TodoModel";
import {Button, Card, CardActions, CardContent} from "@mui/material";

import {useAppDispatch} from "@/lib/hooks";

import {Todo, useDeleteTodoMutation, useUpdateTodoMutation} from "@/lib/features/todoApi/todoApiSlice";
import {useRouter} from "next/navigation";


interface TodoUiPros
{
    todo:Todo;

}
export default function TodoUiTwo({todo}:TodoUiPros) {

    const [deleteTodo, deletedResult] = useDeleteTodoMutation();
    const [updateTodo, updateTodoResult] = useUpdateTodoMutation();
    const router = useRouter();
    const onEditHandler= ()=>{
        console.log("onEditHandler");
        const editedTodo = {
            ...todo,
            title: "Update "+todo.title
        }
        updateTodo(editedTodo);

    }
    const onDeleteHandler= ()=>{
        console.log("onDeleteHandler");
        deleteTodo(todo)
            .unwrap()
            .then((data)=>{
                console.log("onDeleteHandlerSuccess ",data);
            },(error)=>{
                console.log("onDeleteHandler Error ",error);
            });

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
                <Button variant="contained" onClick={()=>onDetailsHandler(todo._id!)}>Details</Button>
            </CardContent>

        </Card>
    </div>);
}