import {Todo} from "@/lib/features/todoApi/todoApiSlice";
import TodoUiTwo from "@/app/newtodo/TodoUiTwo";

interface TodoListUIProps {
    todos : Todo[]
}
export default function TodoListUI({todos}: TodoListUIProps)
{
    return(<div>
        {
            todos.map(todo=><TodoUiTwo key={todo._id}
                                       todo={todo}/>
            )
        }
    </div>);
}