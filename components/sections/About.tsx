import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/buttons/Button";
import styles from "./About.module.css";

export function About({ compact = false }: { compact?: boolean }) {
  return (
    <section className={styles.section} data-theme="light" id="about">
      <div className={`wrap ${styles.inner}`}>
        <p className="meta">07 — About</p>
        <Reveal>
          <h2 className={`display ${styles.title}`}>It started with curiosity.</h2>
        </Reveal>
        <div className={styles.copy}>
          <p>
            I found web design around nine, watching my older brother build sites. At twelve I made my first one: a fan site for celebrity crushes, after TeenIdols4U. The obsession was already there — why a page felt like a place.
          </p>
          <p>
            In 2009 that curiosity went to work. The first real client was my uncle’s audio business. I still look after the site. What began as making pages became understanding businesses, audiences, and the friction in between.
          </p>
          <p className={styles.statement}>
            Long before AI could build websites, I was obsessing over why they worked.
          </p>
          {!compact ? (
            <>
              <p>
                I am detail-oriented to a fault, research-heavy before a line is drawn, and more interested in unusual digital experiences than fashionable ones. I look at sites the way a customer does: if it feels stressful, confused, overloaded, or badly positioned, that is the brief.
              </p>
              <p>
                Messaging should usually be clearer. Mobile should feel designed, not shrunk. Beauty without purpose is unfinished work.
              </p>
            </>
          ) : (
            <Button href="/about">The longer story</Button>
          )}
        </div>
        <aside className={styles.aside}>
          <p className="meta">Practice</p>
          <p>15+ years</p>
          <p>2009 → 2026</p>
          <p>Design · Development</p>
          <p>Freelance · Agency partnerships</p>
          <p>WordPress · Digital experiences</p>
        </aside>
      </div>
    </section>
  );
}
