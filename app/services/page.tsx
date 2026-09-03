import type { Metadata } from "next";
import { Approach } from "@/components/sections/Approach";
import { Capabilities } from "@/components/sections/Capabilities";
import { FinalCta } from "@/components/sections/FinalCta";
import { SmartWebsites } from "@/components/sections/SmartWebsites";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website design, WordPress and Elementor, custom development, Framer, smart websites, and conversion-focused UX by Kat Gee.",
};

export default function ServicesPage() {
  return (
    <div data-theme="light">
      <header className={styles.header}>
        <div className="wrap">
          <p className="meta">Services</p>
          <h1 className={`display ${styles.title}`}>The site should work as hard as it looks.</h1>
          <p className={styles.lede}>
            I design and build distinctive digital experiences — strategy, UX, visual design, and the systems that make a website useful to a business.
          </p>
        </div>
      </header>
      <SmartWebsites />
      <Capabilities />
      <Approach />
      <FinalCta />
    </div>
  );
}
