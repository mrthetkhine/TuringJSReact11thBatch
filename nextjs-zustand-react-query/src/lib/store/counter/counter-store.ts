import { createStore, StateCreator } from 'zustand/vanilla'
import {MyState} from "@/lib/store/useBoundStore";

export interface CounterState
{
    count:number;
}
export interface CounterActions
{
    inc:()=>void;
    dec:()=>void;
}
export type CounterSlice = CounterState & CounterActions;
export const defaultInitState:CounterState = {
    count : 10
}
export const createCounterSlice:StateCreator<
    MyState,
    [],
    [],
    CounterSlice
> = (set)=>({
        ...defaultInitState,
        dec:()=>set( (state: CounterState) => {
            --state.count;
            return state;
        }),
        inc: () => set((state:CounterState) => {
            ++state.count
            return state;
        }),
    }
);