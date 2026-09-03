import { Reveal } from "@/components/motion/Reveal";
import { smartFlow } from "@/lib/site";
import styles from "./SmartWebsites.module.css";

const points = [
  "Capture leads",
  "Accept bookings",
  "Qualify inquiries",
  "Send notifications",
  "Automate follow-ups",
  "Connect business systems",
  "Integrate AI",
  "Convert visitors into customers",
];

export function SmartWebsites() {
  return (
    <section className={`dark ${styles.section}`} data-theme="dark" id="smart">
      <div className={`wrap ${styles.inner}`}>
        <div>
          <p className="meta">05 — Smart websites</p>
          <Reveal>
            <h2 className={`display ${styles.title}`}>What if your website did more?</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className={styles.lede}>
              A website shouldn’t sit online waiting. It can take the next step — for the visitor, and for the business.
            </p>
          </Reveal>
          <ul className={styles.points}>
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        <ol className={styles.flow} aria-label="How a smart website works">
          {smartFlow.map((item, index) => (
            <li key={item}>
              <span className="meta">0{index + 1}</span>
              <strong>{item}</strong>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
