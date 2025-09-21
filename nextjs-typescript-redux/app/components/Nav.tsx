"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "../styles/layout.module.css";

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link
        className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/verify" ? styles.active : ""
        }`}
        href="/verify"
      >
        Verify
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/quotes" ? styles.active : ""
        }`}
        href="/quotes"
      >
        Quotes
      </Link>
        <Link
            className={`${styles.link} ${
                pathname === "/users" ? styles.active : ""
            }`}
            href="/users"
        >
            Users
        </Link>
        <Link
            className={`${styles.link} ${
                pathname === "/blog" ? styles.active : ""
            }`}
            href="/blog"
        >
            Blogs
        </Link>
        <Link
            className={`${styles.link} ${
                pathname === "/shopping/compute" ? styles.active : ""
            }`}
            href="/shopping/computer"
        >
            Computer
        </Link>
        <Link
            className={`${styles.link} ${
                pathname === "/todos" ? styles.active : ""
            }`}
            href="/todos"
        >
            Todo
        </Link>
        <Link
            className={`${styles.link} ${
                pathname === "/todos" ? styles.active : ""
            }`}
            href="/newtodo"
        >
            RTK Todo
        </Link>
    </nav>
  );
};
