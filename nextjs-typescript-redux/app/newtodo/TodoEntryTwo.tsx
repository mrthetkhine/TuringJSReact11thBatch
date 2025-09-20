'use client';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";
import {Dispatch, useState} from "react";
import {Todo, useSaveTodoMutation} from "@/lib/features/todoApi/todoApiSlice";

export default function TodoEntryTwo()
{
    const [saveTodo, result] = useSaveTodoMutation();
    const [todoText, setTodoText] = useState('');
    const todoOnChange =(event: React.ChangeEvent<HTMLInputElement>)=>{
        setTodoText(event.target.value);
        //console.log('on change');
    }
    const btnAddHandler = ()=>{

        const newTodo:Todo= {
            title: todoText,
            completed:true,
        }
        console.log('new todo ',newTodo);
        saveTodo(newTodo)
            .unwrap()
            .then((data)=>console.log('Save todo success ',data),
                (error)=>console.log('Save to do error',error));

        setTodoText('');
    }
    return(<div>
        <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
        >

            <TextField id="standard-basic"
                       label="Task"
                       variant="standard"
                    value={todoText}
                    onChange={todoOnChange}/>
            <Button variant="contained" onClick={btnAddHandler}>Add</Button>
        </Box>
    </div>);
}