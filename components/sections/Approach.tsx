import { Reveal } from "@/components/motion/Reveal";
import { approach } from "@/lib/site";
import styles from "./Approach.module.css";

export function Approach() {
  return (
    <section className={styles.section} data-theme="light" id="approach">
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.sticky}>
          <p className="meta">03 — Approach</p>
          <h2 className={`display ${styles.heading}`}>How the work begins.</h2>
        </div>
        <ol className={styles.list}>
          {approach.map((step, index) => (
            <Reveal as="li" key={step.number} delay={index * 60} className={styles.item}>
              <span className={`display ${styles.number}`}>{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
