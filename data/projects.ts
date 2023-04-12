import { Project, Tech } from "../interfaces";

import { images } from "assets/index";
import { SiTypescript } from "react-icons/si";
import { DiAngularSimple, DiReact } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";

export const techs: Record<string, Tech> = {
  typescript: {
    name: "typescript",
    image: SiTypescript,
  },
  react: {
    name: "react",
    image: DiReact,
  },
  next: {
    name: "next",
    image: TbBrandNextjs,
  },
  angular: {
    name: "angular",
    image: DiAngularSimple,
  },
  rust: {
    name: "rust",
    image: SiTypescript,
  },
};

export const projects: Project[] = [
  {
    name: "Blackjack Game",
    description: "A 2 player blackjack game",
    techs: [techs.typescript],
    link: "https://github.com/JuanIWK3/BlackJack",
    image: images.blackJackImg,
  },
  {
    name: "CSGO wheel",
    description: "Show weapons from csgo",
    techs: [techs.next, techs.typescript],
    link: "https://github.com/JuanIWK3/csgo-guns-next",
    image: images.csgoImg,
  },
  {
    name: "ToDo",
    description: "A todo with drag and drop",
    techs: [techs.angular, techs.typescript],
    link: "https://github.com/JuanIWK3/angular-todo",
    image: images.todoImg,
  },
  {
    name: "Maze Generator",
    description: "A maze using depth-first-search",
    techs: [techs.react, techs.typescript],
    link: "https://github.com/JuanIWK3/Maze-DFS",
    image: images.mazeImg,
  },
];
