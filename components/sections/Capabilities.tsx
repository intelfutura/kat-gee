import { capabilities } from "@/lib/site";
import styles from "./Capabilities.module.css";

export function Capabilities() {
  return (
    <section className={styles.section} data-theme="light" id="services">
      <div className="wrap">
        <p className="meta">06 — Capabilities</p>
        <h2 className={`display ${styles.title}`}>What I take on.</h2>
        <ul className={styles.list}>
          {capabilities.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
