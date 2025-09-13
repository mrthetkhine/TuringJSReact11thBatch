import {useAppDispatch, useAppSelector} from "@/lib/hooks";

import {selectTodo} from "@/lib/features/todos/todoSlice";
import TodoListWithRedux from "@/app/components/todo/TodoListWithRedux";
import TodoEntryWithRedux from "@/app/components/todo/TodoEntryWithRedux";

export default function TodoListWithReduxDemo()
{

    const todos = useAppSelector(selectTodo);
    return (<div>
        <TodoEntryWithRedux/>
        <TodoListWithRedux todos={todos}/>
    </div>);
}