import type { Metadata } from "next";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { FinalCta } from "@/components/sections/FinalCta";
import { Interests } from "@/components/sections/Interests";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "Kat Gee is a designer and developer with 15+ years of experience. It started with curiosity — and became a practice in strategy, UX, and smart websites.",
};

export default function AboutPage() {
  return (
    <div data-theme="light">
      <div className={styles.intro}>
        <div className="wrap">
          <p className="meta">About</p>
        </div>
      </div>
      <About />
      <Experience />
      <Interests />
      <FinalCta />
    </div>
  );
}
