import Image from "next/image";
import { Button } from "@/components/buttons/Button";
import type { Project } from "@/lib/projects";
import { projects } from "@/lib/projects";
import styles from "./CaseStudy.module.css";

export function CaseStudy({ project }: { project: Project }) {
  const next = projects[(projects.findIndex((item) => item.slug === project.slug) + 1) % projects.length];

  return (
    <article className={styles.study}>
      <header className={`wrap ${styles.header}`}>
        <p className="meta">
          {project.category}
          {project.concept ? " · Concept" : ""}
        </p>
        <h1 className={`display ${styles.title}`}>{project.name}</h1>
        <p className={styles.summary}>{project.summary}</p>
        <dl className={styles.facts}>
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Year</dt>
            <dd>{project.year}</dd>
          </div>
          <div>
            <dt>Type</dt>
            <dd>{project.concept ? "Concept" : "Commission"}</dd>
          </div>
        </dl>
      </header>

      <div className={styles.hero}>
        <Image src={project.images[0]} alt="" fill priority sizes="100vw" />
      </div>

      <div className={`wrap ${styles.body}`}>
        {project.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </section>
        ))}
      </div>

      <div className={`wrap ${styles.gallery}`}>
        {project.images.slice(1).map((src) => (
          <figure key={src}>
            <Image src={src} alt="" width={1600} height={1100} sizes="(max-width: 800px) 100vw, 46vw" />
          </figure>
        ))}
      </div>

      <div className={`wrap ${styles.next}`}>
        <p className="meta">Next</p>
        <p className={`display ${styles.nextName}`}>{next.name}</p>
        <Button href={`/work/${next.slug}`}>View project</Button>
      </div>
    </article>
  );
}
