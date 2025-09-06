import Image from "next/image";
import styles from "./page.module.css";
import CallBackHookDemo from "@/app/components/hook/CallBackHookDemo";
import Profile,{Another} from "@/app/components/Profile";
import JsxDemo from "@/app/components/JsxDemo";
import Greeting from "@/app/components/Greeting";
import Border from "@/app/components/Border";
import NestedComponent from "@/app/components/NestedComponent";
import Container from "@/app/components/Container";
import UserAccount from "@/app/components/conditional_render/UserAccount";
import Conditional from "@/app/components/conditional_render/Conditional";
import ItemList from "@/app/components/list/ItemList";
import TodoListDemo from "@/app/components/list/TodoListDemo";
import CustomButtonDemo from "@/app/components/CustomButtonDemo";
import PropagationDemo from "@/app/components/PropagationDemo";
import Counter from "@/app/components/Counter";
import TabDemo from "@/app/components/tab/TabDemo";
import StateProblem1 from "@/app/components/state/StateProblem1";
import UpdateObject from "@/app/components/state/UpdateObject";
import ItemListEditor from "@/app/components/ItemListEditor";
import ItemCart from "@/app/components/ItemCart";
import ReconcilationOne from "@/app/components/reconcilaton/ReconcilationOne";
import SamePosition from "@/app/components/reconcilaton/SamePosition";
import DifferentElement from "@/app/components/reconcilaton/DifferentElement";
import SamePositionReset from "@/app/components/reconcilaton/SamePositionReset";
import DifferentKey from "@/app/components/reconcilaton/DifferentKey";
import CounterWithReducer from "@/app/components/reducer/CounterWithReducer";
import TodoListWithReducer from "@/app/components/reducer/TodoListWithReducer";
import WhyContext from "@/app/components/context/WhyContext";
import ContextDemo from "@/app/components/context/ContextDemo";
import TodoReducerWithContext from "@/app/components/context/TodoReducerWithContext";
import FilterableProductTable from "@/app/components/product/FilterableProductTable";
import WhyRef from "@/app/components/ref/WhyRef";
import RefDemo from "@/app/components/ref/RefDemo";
import FocusInput from "@/app/components/ref/FocusInput";
import DatePicker from "@/app/components/ref/DatePicker";
import ReactProblem from "@/app/components/ref/ReactProblem";
import WhyEffect from "@/app/components/effect/WhyEffect";
import EffectDemo from "@/app/components/effect/EffectDemo";
import WhyCleanUp from "@/app/components/effect/WhyCleanUp";
import FetchTodo from "@/app/components/hook/FetchTodo";
import FetchUser from "@/app/components/hook/FetchUser";
import HookRule from "@/app/components/hook/HookRule";
import SideEffectOutsideRender from "@/app/components/hook/SideEffectOutsideRender";
import WaitPromise from "@/app/components/hook/WaitPromise";
import SearchResultDemo from "@/app/components/hook/SearchResultDemo";
import UniqueId from "@/app/components/hook/UniqueId";
import ImperativeHandleDemo from "@/app/components/hook/ImperativeHandleDemo";
import TableDemo from "@/app/components/TableDemo";
import Modal from "@/app/components/modal/Modal";
import {createPortal} from "react-dom";
import ModalDemo from "@/app/components/modal/ModalDemo";
import ErorrBoundaryDemo from "@/app/components/error_boundary/ErorrBoundaryDemo";
import Carousal from "@/app/components/carousal/Carousal";
import WhyHOC from "@/app/components/design_pattern/hoc/WhyHOC";
import AuthHocDemo from "@/app/components/design_pattern/hoc/AuthHocDemo";
import WhyRenderProperty from "@/app/components/design_pattern/render_property/WhyRenderProperty";
import RenderPropertyDemo from "@/app/components/design_pattern/render_property/RenderPropertyDemo";



export default function Home() {
    //console.log("Home page Container ",Container());
    let profile1 = {
        name : 'Jhon',
        image:"https://randomuser.me/api/portraits/men/34.jpg"
    }
    let profile2 = {
        name : 'Another',
        image:"https://randomuser.me/api/portraits/men/8.jpg"
    }
  return (
    <div className={styles.page}>

        <h1>Hello World</h1>
       {/* <Profile profile = {profile1}
          />*/}

       {/*
        <Another />
        <Profile />*/}
      {/*  <JsxDemo/>*/}
      {/*  <Greeting name={"Aung Aung"}/>*/}
       {/* <Greeting name ="Jhon Wick"/>*/}
       {/* <Border>
            <Profile profile = {profile2} size={50}/>
        </Border>
        <Border>
            <h1>Hello World</h1>
            Hi
        </Border>*/}
        {/*<NestedComponent
            style={{
                backgroundColor: "blue",
                color: "black",
            }}
            label = "Some message"
            size = {100}
        />*/}
        {/*<Container style={{
            backgroundColor: "blue",
            color: "black",
        }}>
            Customize container
        </Container>*/}
       {/* <UserAccount role={"admin"}/>*/}
      {/*  <Conditional role={"admin"}/>*/}
       {/* <ItemList items={['Apple','Orange',"Banna"]}/>*/}
       {/* <TodoListDemo/>*/}
      {/*  <CustomButtonDemo/>*/}
       {/* <PropagationDemo/>*/}
        {/*<Counter/>
        <Counter/>*/}
       {/* <TabDemo/>*/}
      {/*  <StateProblem1/>*/}
      {/*  <Counter/>
        <Counter/>*/}
       {/* <UpdateObject/>*/}

       {/* <ItemCart/>*/}
      {/*  <ReconcilationOne/>*/}
      {/*  <SamePosition/>*/}
       {/* <DifferentElement/>*/}
     {/*   <SamePositionReset/>*/}
      {/*  <DifferentKey/>*/}
      {/*  <CounterWithReducer/>*/}
      {/*  <TodoListWithReducer/>*/}
       {/* <WhyContext/>*/}
       {/* <ContextDemo/>*/}
        {/*<TodoReducerWithContext/>*/}
      {/*  <FilterableProductTable/>*/}
       {/* <WhyRef/>*/}
       {/* <RefDemo/>*/}
       {/* <FocusInput/>*/}
       {/* <DatePicker/>*/}
       {/* <ReactProblem/>*/}
       {/* <WhyEffect/>*/}
       {/* <EffectDemo/>*/}
      {/* <ItemListEditor/>*/}
      {/*  <WhyCleanUp/>*/}
      {/*  <FetchTodo/>*/}
      {/*  <FetchUser/>*/}
       {/* <TodoListWithReducer/>*/}
      {/*  <FocusInput/>
        <RefDemo/>*/}
      {/*  <HookRule/>*/}
     {/*   <SideEffectOutsideRender/>*/}
     {/*   <CallBackHookDemo/>*/}
      {/*  <WaitPromise/>*/}
       {/* <SearchResultDemo/>*/}
       {/* <UniqueId/>*/}
       {/* <ImperativeHandleDemo />*/}
       {/* <TableDemo/>*/}
      {/*  <ModalDemo/>*/}
       {/* <ErorrBoundaryDemo>

        </ErorrBoundaryDemo>
*/}
        {/*<Carousal>
            <div>
                <img src="https://splidejs.com/images/slides/image-slider/01.jpg" width={"100%"} height={200}  />
            </div>
            <div>
                Page 2
            </div>
            <div>
                Page 3
            </div>
            <div>
                <h3>Page 4</h3>
            </div>
        </Carousal>*/}
       {/* <WhyHOC/>*/}
       {/* <AuthHocDemo/>*/}
       {/* <WhyRenderProperty/>*/}
        <RenderPropertyDemo/>
    </div>
  );
}
