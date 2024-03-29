import { images } from "@/assets/images";
import { StaticImageData } from "next/image";

export type Project = {
  name: string;
  description: string;
  link: string;
  image: StaticImageData;
  techs: Tech[];
};

export type Tech = {
  name: string;
};

export const techs: Record<string, Tech> = {
  typescript: {
    name: "typescript",
  },
  react: {
    name: "react",
  },
  next: {
    name: "next",
  },
  angular: {
    name: "angular",
  },
  rust: {
    name: "rust",
  },
};

export const projects: Project[] = [
  {
    name: "Maze Generator",
    description: "A maze using depth-first-search",
    techs: [techs.react, techs.typescript],
    link: "https://github.com/JuanIWK3/Maze-DFS",
    image: images.mazeImg,
  },
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
    image: images.weaponsImg,
  },
  {
    name: "ToDo",
    description: "A to-do with drag and drop",
    techs: [techs.angular, techs.typescript],
    link: "https://github.com/JuanIWK3/angular-todo",
    image: images.todoImg,
  },
  {
    name: "Scheduler",
    description: "A animated process scheduler",
    techs: [techs.next, techs.typescript],
    link: "https://github.com/JuanIWK3/scheduler",
    image: images.schedulerImg,
  },
  {
    name: "PAA Flow",
    description: "A graph visualizer using React Flow",
    techs: [techs.react, techs.typescript],
    link: "https://github.com/JuanIWK3/paa-flow",
    image: images.paaImg,
  },
];
