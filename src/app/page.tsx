"use client";

import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden w-full">
      <motion.div
        id="hello"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="flex flex-col min-h-screen justify-center items-center"
      >
        <h1 className="text-xl">Olá,</h1>
        <h1 className="text-5xl font-bold">Eu sou Juan Israel</h1>
        <h1 className="text-3xl font-bold">Desenvolvo coisas pela web</h1>
        <br />
        <h2>
          Desenvolvedor Full Stack sempre em busca de resolver novos problemas.
        </h2>
        <h2>Eu ❤️ o que faço, valoriso boas práticas e código limpo.</h2>
        <br />
        <Button variant={"secondary"}>Entre em contato</Button>
      </motion.div>

      <motion.div
        id="about"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="flex flex-col justify-center p-24 space-y-4 bg-neutral-300 dark:bg-neutral-800 w-full"
      >
        <h1 className="text-3xl font-bold">Sobre</h1>
        <p className="text-xl">
          Sou um desenvolvedor apaixonado por codificação, plataforma web e
          opensource.
        </p>
        <p className="text-xl">
          Formando em Sistemas de Informação (Graduação) pelo Instituto Federal
          de Minas Gerais. Tenho mais de 3 anos de experiência na área.
        </p>
        <p className="text-xl">
          Auto-didata e um eterno estudante. Adoro criar e contribuir em
          projetos, pois, isto me ajuda a evoluir e me desenvolver
          profissionalmente.
        </p>
        <p className="text-xl">
          Sou dedicado e focado na qualidade, amante de novos desafios.
        </p>
        <p className="text-xl">
          Adoro ajudar pessoas que estão começando na área e tenho muita
          facilidade com trabalho em equipe.
        </p>
        <p className="text-xl">
          Vejo estar no caminho certo pois dou meu melhor todos os dias. Alem
          disso vejo os resultados que as horas dedicadas trazem.
        </p>
      </motion.div>

      <motion.div
        id="projects"
        className="flex flex-col justify-center p-24 w-full items-center"
      >
        <h1 className="text-3xl font-bold">Portifolio</h1>
        {projects.map((project, i) => (
          <motion.div
            id={project.name}
            initial={{ opacity: 0.5, x: i % 2 == 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            key={i}
            className="flex flex-col space-y-4 p-24"
          >
            <h2 className="text-3xl font-bold">{project.name}</h2>
            <p className="text-xl">{project.description}</p>
            <Image
              className="rounded-lg"
              src={project.image}
              alt={project.name}
            />
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
