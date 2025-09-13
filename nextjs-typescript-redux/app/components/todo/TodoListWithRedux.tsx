import {TodoModel} from "@/app/components/reducer/TodoModel";
import {Dispatch} from "react";
import {TodoActions} from "@/app/components/reducer/TodoWithReducer";
import TodoUI from "@/app/components/reducer/TodoUI";
import TodoUIWithRedux from "@/app/components/todo/TodoUIWithRedux";

interface TodoListPros {
    todos: TodoModel[],
}
export default function TodoListWithRedux({todos}:TodoListPros)
{
    return(<div>
        {
            todos.map((todo)=><TodoUIWithRedux key={todo.id}
                                      todo={todo}
                                        />)
        }
    </div>);
}