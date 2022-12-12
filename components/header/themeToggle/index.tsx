"use client";
import React, { useEffect, useState } from "react";
import styles from "./toggle.module.scss";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState("dark");

  const toggleTheme = () => {
    console.log("toggle");
    console.log({ theme });
    console.log({ isDark });

    switch (isDark) {
      case "dark":
        setIsDark("question");
        break;
      case "light":
        setIsDark("dark");
        setTheme("dark");
        break;
    }
  };

  useEffect(() => {
    if (!theme) {
      console.log("df");
    }
  });

  return (
    <div className={styles.toggleContainer}>
      {isDark == "question" && (
        <div>
          <span>Do you love your eyes? </span>
          <span className={styles.yes} onClick={() => setIsDark("dark")}>
            yes
          </span>
          <span> {" / "}</span>
          <span
            className={styles.no}
            onClick={() => {
              setIsDark("light");
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
              isDark == "dark"
                ? styles.active
                : isDark == "question" && styles.question
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};
