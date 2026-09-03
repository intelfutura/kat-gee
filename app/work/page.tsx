import type { Metadata } from "next";
import { ProjectList } from "@/components/work/ProjectList";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected concept work by Kat Gee — luxury fashion, hospitality, beauty, and smart business websites.",
};

export default function WorkPage() {
  return (
    <div className={styles.page} data-theme="light">
      <div className="wrap">
        <p className="meta">Selected work</p>
        <h1 className={`display ${styles.title}`}>Work made to attract the right work.</h1>
        <p className={styles.lede}>
          These projects are concepts. They show the kind of businesses I want to build for now — not a museum of old clients.
        </p>
        <ProjectList />
      </div>
    </div>
  );
}
