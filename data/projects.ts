import { Project } from "../interfaces";

import { images } from "assets/index";

export const projects: Project[] = [
  {
    name: "Blackjack Game",
    description: "2 player blackjack",
    techs: ["typescript"],
    link: "https://github.com/JuanIWK3/BlackJack",
    image: images.blackJackImg,
  },
  // {
  //   name: "Web Chat",
  //   description: "2 player blackjack",
  //   techs: ["react", "typescript"],
  //   link: "https://github.com/JuanIWK3/webchat",
  //   image: images.webchatImg,
  // },
  {
    name: "CSGO wheel",
    description: "2 player blackjack",
    techs: ["typescript"],
    link: "https://github.com/JuanIWK3/csgo-guns-next",
    image: images.csgoImg,
  },
  {
    name: "ToDo",
    description: "2 player blackjack",
    techs: ["typescript", "angular"],
    link: "https://github.com/JuanIWK3/angular-todo",
    image: images.todoImg,
  },
  {
    name: "Maze Generator",
    description: "A maze using depth-first-search",
    techs: ["typescript", "react"],
    link: "https://github.com/JuanIWK3/Maze-DFS",
    image: images.mazeImg,
  },
];
