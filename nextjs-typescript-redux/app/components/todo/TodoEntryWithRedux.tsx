import {useState} from "react";
import {TodoModel} from "@/app/components/reducer/TodoModel";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";
import {useAppDispatch} from "@/lib/hooks";
import { addTodo } from "@/lib/features/todos/todoSlice";

let id=3;
function getUniqueId()
{
    return id++;
}
export default function TodoEntryWithRedux()
{
    const dispatch = useAppDispatch();
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
        const action = addTodo(newTodo);
        console.log('Action ',action);
        dispatch(action);
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