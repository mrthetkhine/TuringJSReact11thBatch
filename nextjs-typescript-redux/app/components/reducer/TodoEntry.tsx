'use client';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";
import {Dispatch, useState} from "react";
import {TodoActions} from "@/app/components/reducer/TodoWithReducer";
import {TodoModel} from "@/app/components/reducer/TodoModel";
interface TodoEntryProps {
    dispatch:Dispatch<TodoActions>,
}
let id=3;
function getUniqueId()
{
    return id++;
}
export default function TodoEntry({dispatch}:TodoEntryProps)
{
    const [todoText, setTodoText] = useState('');
    const todoOnChange =(event: React.ChangeEvent<HTMLInputElement>)=>{
        setTodoText(event.target.value);
        //console.log('on change');
    }
    const btnAddHandler = ()=>{
        let newTodo:TodoModel = {
            id : getUniqueId()+"",
            title:todoText,
        }
        dispatch({
            type:"ADD_TODO",
            payload:newTodo,
        })
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