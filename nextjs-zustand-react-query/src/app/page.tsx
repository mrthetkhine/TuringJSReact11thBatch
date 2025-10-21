import Image from "next/image";
import styles from "./page.module.css";
import Count from "@/app/components/Count";
import TodoUI from "@/app/components/TodoUI";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
          <h1>Hello World</h1>
          <Count/>
          <TodoUI/>
      </main>

    </div>
  );
}
