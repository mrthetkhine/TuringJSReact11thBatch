import { createStore, StateCreator } from 'zustand/vanilla'
import {MyState} from "@/lib/store/useBoundStore";

export interface TodoModel
{
    id :number,
    title:string,
}
export interface TodoState
{
    todos:TodoModel[];
}
export interface TodoActions
{
    addTodo:(todo:TodoModel)=>void;
    updateTodo:(todo:TodoModel)=>void;
    deleteTodo:(todo:TodoModel)=>void;
}
export type TodoSlice = TodoState & TodoActions;

export const defaultInitState:TodoState = {
    todos : [
        {
            id:1,
            title : "Todo 1"
        },
        {
            id:2,
            title:"Todo 2"
        }
    ]
}
export const createTodoSlice:StateCreator<
    MyState,
    [],
    [],
    TodoSlice
> = (set)=>({
        ...defaultInitState,
        addTodo:(todo:TodoModel)=>set( (state: TodoState) => {
            state.todos.push(todo);
            return state;
        }),
        updateTodo:(todo:TodoModel)=>set( (state: TodoState) => {
            state.todos = state.todos.map(td=>td.id==todo.id?todo:td);
            return state;
        }),
        deleteTodo:(todo:TodoModel)=>set( (state: TodoState) => {
            state.todos = state.todos.filter(td=>td.id!=todo.id);
            return state;
        }),
    }
);