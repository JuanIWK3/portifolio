import { StaticImageData } from "next/image";

export type Project = {
  name: string;
  description: string;
  link: string;
  image: StaticImageData;
  techs: Tech[];
};

export type Tech =
  | "typescript"
  | "javascript"
  | "react"
  | "angular"
  | "vue"
  | "scss"
  | "css"
  | "bootstrap"
  | "vuex"
  | "redux"
  | "astro"
  | "preact"
  | "next"
  | "nest"
  | "pinia";
