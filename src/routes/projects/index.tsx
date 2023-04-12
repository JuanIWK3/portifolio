import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { projects } from "../../data/projects";
import styles from "./styles.scss?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="container">
      <main class="main">
        <div class="projectsContainer">
          {projects.map((project, i) => (
            <div class="project" key={i}>
              <div class="image">
                <img class="image" src={project.image} alt="project" />
              </div>
              <div class="description">
                <div class="header">
                  <div class="name">{project.name}</div>
                  <div class="link">
                    <a href={project.link} target="_blank">
                      Git Repo
                    </a>
                  </div>
                </div>
                <div class="description">{project.description}</div>
                <div class="footer">
                  <div class="techs">
                    {/* {project.techs.map((t) => (
                      <div key={t.name}>
                        <t.image size={24} />
                      </div>
                    ))} */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
});
