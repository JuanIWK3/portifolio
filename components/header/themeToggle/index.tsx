"use client";
import React, { useEffect, useState } from "react";
import styles from "./toggle.module.scss";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [toggle, setToggle] = useState("dark");

  const toggleTheme = () => {
    console.log("toggle");
    console.log({ theme });
    console.log({ isDark: toggle });

    switch (toggle) {
      case "dark":
        setToggle("question");
        break;
      case "light":
        setToggle("dark");
        setTheme("dark");
        break;
    }
  };

  useEffect(() => {
    if (!theme) {
      console.log("df");
    }

    if (toggle === "question") return;

    if (theme === "dark") {
      setToggle("dark");
    } else if (theme === "light") {
      setToggle("light");
    }
  });

  return (
    <div className={styles.toggleContainer}>
      {toggle == "question" && (
        <div>
          <span>Do you love your eyes? </span>
          <span className={styles.yes} onClick={() => setToggle("dark")}>
            yes
          </span>
          <span> {" / "}</span>
          <span
            className={styles.no}
            onClick={() => {
              setToggle("light");
              setTheme("light");
            }}
          >
            no
          </span>
        </div>
      )}
      <div className={styles.toggle} onClick={() => toggleTheme()}>
        <div className={styles.background}>
          <div
            className={`${styles.handle} ${
              toggle == "dark"
                ? styles.active
                : toggle == "question" && styles.question
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};
