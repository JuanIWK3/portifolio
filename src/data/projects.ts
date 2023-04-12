import { images } from "~/assets";

export type Project = {
  name: string;
  description: string;
  link: string;
  image: string;
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
