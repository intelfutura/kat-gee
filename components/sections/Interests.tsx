import { interests } from "@/lib/site";
import styles from "./Interests.module.css";

export function Interests() {
  return (
    <section className={styles.section} data-theme="light" aria-label="Personal details">
      <div className="wrap">
        <p className="meta">Where the eye goes</p>
        <ul className={styles.list}>
          {interests.map((item) => (
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
