'use client';
import type { Metadata } from "next";
import { Counter } from "./components/counter/Counter";
import Greeting from "@/app/components/Greeting";
import SimpleCounter from "@/app/components/SimpleCounter";
import CounterWithReducer from "@/app/components/CounterWithReducer";
import ContextDemo from "@/app/components/contextdemo/ContextDemo";
import TodoWithReducer from "@/app/components/reducer/TodoWithReducer";

export default function IndexPage() {
  return (<div>
    {/*<Counter />*/}
   {/* <Greeting message={"Hello World"} />*/}
    {/*<SimpleCounter/>*/}
    {/*<CounterWithReducer/>*/}
   {/* <ContextDemo/>*/}
    <TodoWithReducer/>
  </div>)
}

