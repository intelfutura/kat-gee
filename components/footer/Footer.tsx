import Link from "next/link";
import { nav } from "@/lib/site";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer} data-theme="light">
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.top}>
          <p className={styles.word}>Kat Gee</p>
          <nav className={styles.nav} aria-label="Footer">
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className={styles.bottom}>
          <p>Designer and developer. 2009 — 2026.</p>
          <p>Beautiful isn’t enough.</p>
        </div>
      </div>
    </footer>
  );
}
