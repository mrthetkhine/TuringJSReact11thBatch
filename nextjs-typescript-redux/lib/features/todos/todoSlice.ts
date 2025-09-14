import {TodoModel} from "@/app/components/reducer/TodoModel";
import {createAppSlice} from "@/lib/createAppSlice";
import type {PayloadAction} from "@reduxjs/toolkit";
import {counterSlice} from "@/lib/features/counter/counterSlice";
import {fetchCount} from "@/lib/features/counter/counterAPI";

export interface TodoSliceState{
    todos: TodoModel[];
}
const initialState: TodoSliceState = {
    todos: [
       /* {
            id:'1',
            title: 'Todo 1',
        },
        {
            id:'2',
            title: 'Todo 2',
        }*/
    ],
}

export const todoSlice = createAppSlice({
    name: "todo",
    initialState,
    reducers: (create)=>({
        loadAllTodo: create.asyncThunk(
            async () => {
                console.log('Fetch todo ');
                const response = await fetch('https://jsonplaceholder.typicode.com/todos');
                const json:TodoModel[] = await response.json();
                // The value we return becomes the `fulfilled` action payload
                return json;
            },
            {
                pending: (state) => {
                    console.log('Fetch todo pending');
                },
                fulfilled: (state, action) => {
                    console.log('Fetch todo fulllied');
                    state.todos = action.payload;
                },
                rejected: (state) => {
                    console.log('Fetch todo rejected ');
                },
            },
        ),
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
        selectTodoCount: (state) => state.todos.length,
    },
});
export const { addTodo,deleteTodo,updateTodo,loadAllTodo } = todoSlice.actions;
export const { selectTodo,selectTodoCount } = todoSlice.selectors;