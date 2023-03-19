import Image from "next/image";
import Link from "next/link";
import { projects } from "../../data/projects";
import styles from "./projects.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.projectsContainer}>
          {projects.map((project, i) => (
            <div className={styles.project} key={i}>
              <div className={styles.image}>
                <Image
                  className={styles.image}
                  src={project.image}
                  alt="project"
                />
              </div>
              <div className={styles.description}>
                <div className={styles.header}>
                  <div className={styles.name}>{project.name}</div>
                  <div className={styles.link}>
                    <Link href={project.link} target="_blank">
                      Git Repo
                    </Link>
                  </div>
                </div>
                <div className={styles.description}>{project.description}</div>
                <div className={styles.footer}>
                  <div className={styles.techs}>
                    {project.techs.map((t) => (
                      <div key={t.name}>
                        <t.image size={24} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
