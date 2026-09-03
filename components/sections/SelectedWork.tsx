import { Button } from "@/components/buttons/Button";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/work/ProjectCard";
import { featuredProjects } from "@/lib/projects";
import styles from "./SelectedWork.module.css";

export function SelectedWork() {
  const [first, ...rest] = featuredProjects;

  return (
    <section className={styles.section} data-theme="light" id="work">
      <div className="wrap">
        <div className={styles.head}>
          <p className="meta">04 — Selected work</p>
          <div>
            <h2 className={`display ${styles.title}`}>Recent direction.</h2>
            <p className={`muted ${styles.note}`}>
              New work, made to attract the kind of businesses worth building for. Historical clients live in experience.
            </p>
          </div>
        </div>
      </div>

      <Reveal>
        <div className={`wrap ${styles.full}`}>
          <ProjectCard project={first} priority layout="full" />
        </div>
      </Reveal>

      <div className={`wrap ${styles.rest}`}>
        {rest.map((project, index) => (
          <Reveal key={project.slug} delay={index * 80}>
            <ProjectCard project={project} layout={index % 2 === 0 ? "split-left" : "split-right"} />
          </Reveal>
        ))}
      </div>

      <div className={`wrap ${styles.more}`}>
        <Button href="/work">All selected work</Button>
      </div>
    </section>
  );
}
