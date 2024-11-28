"use client";

import { projects } from "@/data/projects";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center overflow-x-hidden">
      <motion.div
        id="hello"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="flex min-h-screen flex-col items-center justify-center"
      >
        <h1 className="text-xl">Olá,</h1>
        <h1 className="text-5xl font-bold">Eu sou Juan Israel</h1>
        <h1 className="text-3xl font-bold">Desenvolvo coisas pela web</h1>
        <br />
        <h2>
          Desenvolvedor Full Stack sempre em busca de resolver novos problemas.
        </h2>
        <h2>Eu ❤️ o que faço, valorizo boas práticas e código limpo.</h2>
        <br />
      </motion.div>

      {/* <motion.div
        id="projects"
        className="flex w-full flex-col items-center justify-center p-24"
      >
        <h1 className="text-3xl font-bold">Portifolio</h1>
        {projects.map((project, i) => (
          <motion.div key={i} className="flex flex-col space-y-4 p-24">
            <h2 className="text-3xl font-bold">{project.name}</h2>
            <p className="text-xl">{project.description}</p>
          </motion.div>
        ))}
      </motion.div> */}
    </main>
  );
}
