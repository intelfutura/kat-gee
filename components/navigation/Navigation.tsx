"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";
import styles from "./Navigation.module.css";

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [onDark, setOnDark] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-theme]"));
    if (!sections.length) {
      setOnDark(false);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target instanceof HTMLElement) {
          setOnDark(visible.target.dataset.theme === "dark");
        }
      },
      { rootMargin: "-8% 0px -78% 0px", threshold: [0, 0.2, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header className={`${styles.bar} ${compact ? styles.compact : ""} ${onDark && !open ? styles.onDark : ""}`}>
      <Link href="/" className={styles.wordmark} aria-label="Kat Gee, home">
        Kat Gee
      </Link>

      <nav className={styles.desktop} aria-label="Primary">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`${styles.link} ${pathname === item.href || pathname.startsWith(`${item.href}/`) ? styles.active : ""}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <button
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <span className={`${styles.line} ${open ? styles.lineOpen : ""}`} />
        <span className={`${styles.line} ${open ? styles.lineOpen : ""}`} />
      </button>

      <div id="mobile-nav" className={`${styles.panel} ${open ? styles.panelOpen : ""}`} hidden={!open}>
        <nav className={styles.mobile} aria-label="Mobile">
          {nav.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.mobileLink}
              style={{ transitionDelay: open ? `${120 + index * 70}ms` : "0ms" }}
              onClick={() => setOpen(false)}
            >
              <span className={styles.mobileIndex}>0{index + 1}</span>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
