import {create} from 'zustand'
import {CounterSlice, createCounterSlice} from "./counter/counter-store";
//import {createTodoSlice, TodoSlice} from "./todos/todo-slice";
import {devtools} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";
import {createTodoSlice, TodoSlice} from "@/lib/store/todo/todo-store";
import {AuthSlice, createAuthSlice} from "@/lib/store/auth/auth-slice";



export type MyState = CounterSlice & TodoSlice & AuthSlice;
export const useBoundStore = create<MyState>()(devtools(immer((...a) => ({
    ...createCounterSlice(...a),
    ...createTodoSlice(...a),
    ...createAuthSlice(...a),
}))))