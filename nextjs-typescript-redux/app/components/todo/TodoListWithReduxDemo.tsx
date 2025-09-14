import {useAppDispatch, useAppSelector} from "@/lib/hooks";

import {loadAllTodo, selectTodo} from "@/lib/features/todos/todoSlice";
import TodoListWithRedux from "@/app/components/todo/TodoListWithRedux";
import TodoEntryWithRedux from "@/app/components/todo/TodoEntryWithRedux";
import {useEffect} from "react";

export default function TodoListWithReduxDemo()
{

    const todos = useAppSelector(selectTodo);
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(loadAllTodo());
    },[]);
    return (<div>
        <TodoEntryWithRedux/>
        <TodoListWithRedux todos={todos}/>
    </div>);
}