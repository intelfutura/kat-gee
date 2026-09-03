import type { Metadata } from "next";
import { InquiryForm } from "@/components/inquiry/InquiryForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Start a project",
  description:
    "Start a project with Kat Gee. A short consultation — what you need, what isn’t working, and how to begin.",
};

export default function StartPage() {
  return (
    <div className={styles.page} data-theme="light">
      <div className="wrap">
        <p className="meta">Start a project</p>
        <h1 className={`display ${styles.title}`}>Tell me about the work.</h1>
        <p className={styles.lede}>
          This is a consultation, not a contact form. The clearer the brief, the faster I can tell if I can help.
        </p>
        <InquiryForm />
      </div>
    </div>
  );
}
