import { Nav10k } from "components/header";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi, I'm <a href="">Juan!</a>
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>Do you have BRIO?</code>
        </p>

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
            <p>Who am I.</p>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
