import { Button } from "@/components/buttons/Button";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.page} data-theme="light">
      <div className="wrap">
        <p className="meta">404</p>
        <h1 className={`display ${styles.title}`}>This page isn’t here.</h1>
        <p className={styles.lede}>It may have moved, or it never existed. The work is still on the other side.</p>
        <Button href="/">Back home</Button>
      </div>
    </div>
  );
}
