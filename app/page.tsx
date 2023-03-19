"use client";
import { Nav10k } from "components/header";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi, I'm <span className={styles.name}>Juan</span>!
        </h1>

        <div className={styles.grid}>
          <Link className={styles.card} href={"/projects"}>
            <h2>
              <code>$ cd projects</code> &rarr;
            </h2>
            <p>Some projects I like</p>
          </Link>

          <Link className={styles.card} href={"/about"}>
            <h2>
              <code>$ cd about</code> &rarr;
            </h2>
            <p>Who am I</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
