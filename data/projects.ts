import { Project } from "../interfaces";

import { Images } from "assets/index";

export const projects: Project[] = [
  {
    name: "Blackjack Game",
    description: "2 player blackjack",
    techs: ["typescript", "css"],
    link: "https://github.com/JuanIWK3/BlackJack",
    image: Images.blackJackImg,
  },
  {
    name: "Web Chat",
    description: "2 player blackjack",
    techs: ["typescript", "scss"],
    link: "https://github.com/JuanIWK3/BlackJack",
    image: Images.webchatImg,
  },
  {
    name: "CSGO wheel",
    description: "2 player blackjack",
    techs: ["typescript", "scss"],
    link: "https://github.com/JuanIWK3/csgo-guns-next",
    image: Images.csgoImg,
  },
  {
    name: "ToDo",
    description: "2 player blackjack",
    techs: ["typescript", "scss"],
    link: "https://github.com/JuanIWK3/angular-todo",
    image: Images.todoImg,
  },
  {
    name: "Maze Generator",
    description: "A maze using depth-first-search",
    techs: ["typescript", "scss", "react"],
    link: "https://github.com/JuanIWK3/Maze-DFS",
    image: Images.mazeImg,
  },
];
