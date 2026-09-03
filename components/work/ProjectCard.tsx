import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
  layout?: "full" | "split-left" | "split-right";
};

export function ProjectCard({ project, priority, layout = "full" }: ProjectCardProps) {
  return (
    <article className={`${styles.card} ${styles[layout === "full" ? "full" : "split"]} ${layout === "split-right" ? styles.flip : ""}`}>
      <Link href={`/work/${project.slug}`} className={styles.link}>
        <div className={styles.media}>
          <Image
            src={project.cover}
            alt=""
            fill
            priority={priority}
            sizes={layout === "full" ? "100vw" : "(max-width: 800px) 100vw, 58vw"}
          />
        </div>
        <div className={styles.meta}>
          <h3 className={`display ${styles.name}`}>{project.name}</h3>
          <p className="meta">
            {project.category}
            <span aria-hidden="true"> · </span>
            {project.role}
            <span aria-hidden="true"> · </span>
            {project.year}
            {project.concept ? (
              <>
                <span aria-hidden="true"> · </span>
                Concept
              </>
            ) : null}
          </p>
        </div>
      </Link>
    </article>
  );
}
