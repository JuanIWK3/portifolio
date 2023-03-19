import React from "react";
import styles from "./footer.module.scss";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <Link href={"https://github.com/juaniwk3"} target={"_blank"}>
        <AiFillGithub size={36} />
      </Link>
      <Link href={"https://www.linkedin.com/in/juan-israel/"} target={"_blank"}>
        <AiFillLinkedin size={36} />
      </Link>
    </div>
  );
};
