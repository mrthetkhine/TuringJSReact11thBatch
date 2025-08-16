import Image from "next/image";
import styles from "./page.module.css";
import Profile,{Another} from "@/app/components/Profile";

export default function Home() {
    //console.log("Home page profile ",Profile());
  return (
    <div className={styles.page}>

        <h1>Hello World</h1>
        <Profile />
        <Another />
        <Profile />
    </div>
  );
}
