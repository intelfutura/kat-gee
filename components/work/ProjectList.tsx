"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projects, type Project } from "@/lib/projects";
import styles from "./ProjectList.module.css";

export function ProjectList({ items = projects }: { items?: Project[] }) {
  const [active, setActive] = useState(items[0]?.slug ?? "");
  const current = items.find((item) => item.slug === active) ?? items[0];

  return (
    <div className={styles.wrap}>
      <ul className={styles.list}>
        {items.map((project, index) => (
          <li key={project.slug}>
            <Link
              href={`/work/${project.slug}`}
              className={`${styles.row} ${active === project.slug ? styles.active : ""}`}
              onMouseEnter={() => setActive(project.slug)}
              onFocus={() => setActive(project.slug)}
            >
              <span className="meta">0{index + 1}</span>
              <span className={`display ${styles.name}`}>{project.name}</span>
              <span className={styles.meta}>
                {project.category}
                {project.concept ? " · Concept" : ""}
              </span>
              <span className={styles.year}>{project.year}</span>
            </Link>
          </li>
        ))}
      </ul>
      {current ? (
        <div className={styles.preview} aria-hidden="true">
          <Image src={current.cover} alt="" fill sizes="40vw" />
        </div>
      ) : null}
    </div>
  );
}
