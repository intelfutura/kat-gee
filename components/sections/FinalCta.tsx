import { Button } from "@/components/buttons/Button";
import { Reveal } from "@/components/motion/Reveal";
import styles from "./FinalCta.module.css";

export function FinalCta() {
  return (
    <section className={`dark ${styles.section}`} data-theme="dark" id="start">
      <div className={`wrap ${styles.inner}`}>
        <p className="meta">09 — Next</p>
        <Reveal>
          <h2 className={`display ${styles.title}`}>Let’s build something worth remembering.</h2>
        </Reveal>
        <p className={styles.support}>
          Have a business, idea or digital experience that needs to become real? Let’s talk.
        </p>
        <Button href="/start" variant="invert">
          Start a project
        </Button>
      </div>
    </section>
  );
}
