"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./header.module.scss";
import { ThemeToggle } from "./themeToggle";

export const Nav10k = () => {
  const path = usePathname();

  return (
    <div className={styles.navContainer}>
      <div className={styles.p10k}>
        <span className={styles.path}>
          <Link className={styles.home} href={"/"}>
            ~/src
          </Link>
          {path}
        </span>
        <span>on</span>
        <span className={styles.branch}>main</span>
      </div>
      <ThemeToggle />
    </div>
  );
};
