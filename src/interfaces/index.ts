import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export type Project = {
  name: string;
  description: string;
  link: string;
  image: StaticImageData;
  techs: Tech[];
};

export type Tech = {
  name: string;
  image: IconType;
};
