import { projects } from "@/data/projects";
import Image from "next/image";

export const Projects = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl">Projects</h1>
      {projects.map((project) => (
        <div className="card card-bordered" key={project.name}>
          <div className="card-body">
            <figure className="flex items-center justify-center">
              <Image className="rounded-md" src={project.image} alt="project" />
            </figure>
            <div className="flex justify-between">
              <h3 className="font-bold">{project.name}</h3>
              <a target="_blank" href={project.link}>
                <button className="btn btn-link">Git repo</button>
              </a>
            </div>
            <p>{project.description}</p>
            <div className="flex">
              {project.techs.map((tech) => (
                <span key={tech.name}>
                  <tech.image size={24} />
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
