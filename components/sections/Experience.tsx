import { experience } from "@/lib/experience";
import styles from "./Experience.module.css";

export function Experience() {
  return (
    <section className={styles.section} data-theme="light" id="experience">
      <div className="wrap">
        <p className="meta">08 — Experience</p>
        <h2 className={`display ${styles.title}`}>The work before this work.</h2>
        <ol className={styles.list}>
          {experience.map((item) => (
            <li key={`${item.year}-${item.title}`}>
              <span className={styles.year}>{item.year}</span>
              <div>
                <h3>
                  {item.title}
                  {item.place ? <span className={styles.place}>{item.place}</span> : null}
                </h3>
                <p>{item.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
