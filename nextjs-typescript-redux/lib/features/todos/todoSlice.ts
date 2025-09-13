import {TodoModel} from "@/app/components/reducer/TodoModel";
import {createAppSlice} from "@/lib/createAppSlice";
import type {PayloadAction} from "@reduxjs/toolkit";
import {counterSlice} from "@/lib/features/counter/counterSlice";

export interface TodoSliceState{
    todos: TodoModel[];
}
const initialState: TodoSliceState = {
    todos: [
        {
            id:'1',
            title: 'Todo 1',
        },
        {
            id:'2',
            title: 'Todo 2',
        }
    ],
}

export const todoSlice = createAppSlice({
    name: "todo",
    initialState,
    reducers: (create)=>({
        addTodo: create.reducer((state,action: PayloadAction<TodoModel>) => {
            state.todos.push(action.payload);
        }),
        deleteTodo: create.reducer((state,action: PayloadAction<TodoModel>) => {
            state.todos = state.todos.filter(td=>td.id!==action.payload.id);
        }),
        updateTodo: create.reducer((state,action: PayloadAction<TodoModel>) => {
            state.todos = state.todos.map(td=>td.id===action.payload.id?action.payload:td);
        }),
    }),
    selectors: {
        selectTodo: (state) => state.todos,

    },
});
export const { addTodo,deleteTodo,updateTodo } = todoSlice.actions;
export const { selectTodo } = todoSlice.selectors;