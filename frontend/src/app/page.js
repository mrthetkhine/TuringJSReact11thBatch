import Image from "next/image";
import styles from "./page.module.css";
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

export default function Home() {
    //console.log("Home page profile ",Profile());
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
        <TodoListDemo/>
    </div>
  );
}
