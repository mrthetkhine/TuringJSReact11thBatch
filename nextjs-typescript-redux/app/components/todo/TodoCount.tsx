import {useAppSelector} from "@/lib/hooks";
import {selectTodo, selectTodoCount} from "@/lib/features/todos/todoSlice";

export default function TodoCount()
{
    const count = useAppSelector(selectTodoCount);
    return(<div>
        <h1>Count {count}</h1>
    </div>)
}