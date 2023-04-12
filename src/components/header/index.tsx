"use client";
import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./styles.scss?inline";
import { usePath } from "~/routes/layout";

export const Header = component$(() => {
  useStylesScoped$(styles);
  const path = usePath();

  return (
    <div class="navContainer">
      <div class="p10k">
        <span class="path">
          <a class="home" href={"/"}>
            ~/src
          </a>
          {path}
        </span>
        <span>on</span>
        <span class="branch">main</span>
      </div>
    </div>
  );
});
("");
