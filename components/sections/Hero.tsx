"use client";

import Image from "next/image";
import { useRef } from "react";
import { Button } from "@/components/buttons/Button";
import styles from "./Hero.module.css";

export function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className={styles.hero}
      data-theme="light"
      onMouseMove={(event) => {
        const node = imageRef.current;
        if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const rect = node.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * 8;
        node.style.transform = `translate3d(${x}px, ${y}px, 0) scale(1.04)`;
      }}
      onMouseLeave={() => {
        if (imageRef.current) imageRef.current.style.transform = "translate3d(0,0,0) scale(1.04)";
      }}
    >
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={`meta ${styles.meta}`}>Digital director · 15+ years</p>
          <h1 className={`display ${styles.title}`}>
            <span>I build</span>
            <span>experiences</span>
            <span>that move.</span>
          </h1>
        </div>

        <div className={styles.visual}>
          <div className={styles.frame}>
            <div ref={imageRef} className={styles.image}>
              <Image
                src="/images/hero.jpg"
                alt="Quiet architectural interior with long light and precise material."
                fill
                priority
                sizes="(max-width: 860px) 100vw, 38vw"
              />
            </div>
          </div>
          <p className={styles.caption}>The work should feel inevitable.</p>
        </div>

        <div className={styles.bottom}>
          <p className={styles.support}>
            Strategy, design and technology for businesses that want more from their digital presence.
          </p>
          <div className={styles.actions}>
            <Button href="/work">View work</Button>
            <Button href="/start" variant="ghost">
              Start a project
            </Button>
          </div>
          <p className={`meta ${styles.years}`}>2009 — 2026</p>
        </div>
      </div>
    </section>
  );
}
