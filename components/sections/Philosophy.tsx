import { Reveal } from "@/components/motion/Reveal";
import styles from "./Philosophy.module.css";

export function Philosophy() {
  return (
    <section className={`dark ${styles.section}`} data-theme="dark" id="philosophy">
      <div className={`wrap ${styles.inner}`}>
        <p className={`meta ${styles.index}`}>02 — Philosophy</p>
        <Reveal>
          <h2 className={`display ${styles.title}`}>
            Beautiful
            <br />
            isn’t
            <br />
            enough.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className={styles.support}>
            A digital experience should feel effortless to the person using it — and purposeful to the business behind it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
