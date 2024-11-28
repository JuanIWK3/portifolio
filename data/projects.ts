export type Tech = {
  name: string;
};

export type Project = {
  name: string;
  description: string;
  link: string;
  techs: Tech[];
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
  },
  {
    name: "Blackjack Game",
    description: "A 2 player blackjack game",
    techs: [techs.typescript],
    link: "https://github.com/JuanIWK3/BlackJack",
  },
  {
    name: "CSGO wheel",
    description: "Show weapons from csgo",
    techs: [techs.next, techs.typescript],
    link: "https://github.com/JuanIWK3/csgo-guns-next",
  },
  {
    name: "ToDo",
    description: "A to-do with drag and drop",
    techs: [techs.angular, techs.typescript],
    link: "https://github.com/JuanIWK3/angular-todo",
  },
  {
    name: "Scheduler",
    description: "A animated process scheduler",
    techs: [techs.next, techs.typescript],
    link: "https://github.com/JuanIWK3/scheduler",
  },
  {
    name: "PAA Flow",
    description: "A graph visualizer using React Flow",
    techs: [techs.react, techs.typescript],
    link: "https://github.com/JuanIWK3/paa-flow",
  },
];
