"use client";

import { useMemo, useState, type FormEvent } from "react";
import { Button } from "@/components/buttons/Button";
import {
  budgetRanges,
  projectTypes,
  type InquiryFieldError,
  type InquiryInput,
} from "@/lib/inquiry/types";
import styles from "./InquiryForm.module.css";

const steps = [
  { id: "projectType", title: "What are you looking to build?" },
  { id: "business", title: "What does your business do?" },
  { id: "goals", title: "What would you like the website to accomplish?" },
  { id: "friction", title: "What’s currently not working?" },
  { id: "budget", title: "What’s your approximate budget?" },
  { id: "contact", title: "How can I contact you?" },
] as const;

const empty: InquiryInput = {
  projectType: "",
  business: "",
  goals: "",
  friction: "",
  budget: "",
  name: "",
  email: "",
  phone: "",
};

export function InquiryForm() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<InquiryInput>(empty);
  const [errors, setErrors] = useState<InquiryFieldError>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");

  const progress = useMemo(() => `${String(step + 1).padStart(2, "0")} / 06`, [step]);

  function update<K extends keyof InquiryInput>(key: K, value: InquiryInput[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined, form: undefined }));
  }

  function validateStep() {
    const next: InquiryFieldError = {};
    if (step === 0 && !projectTypes.includes(values.projectType as (typeof projectTypes)[number])) {
      next.projectType = "Choose one.";
    }
    if (step === 1 && values.business.trim().length < 8) {
      next.business = "A little more context helps.";
    }
    if (step === 2 && values.goals.trim().length < 8) {
      next.goals = "What should success look like?";
    }
    if (step === 3 && values.friction.trim().length < 4) {
      next.friction = "Even a short note is useful.";
    }
    if (step === 4 && !budgetRanges.includes(values.budget as (typeof budgetRanges)[number])) {
      next.budget = "Choose a range.";
    }
    if (step === 5) {
      if (values.name.trim().length < 2) next.name = "Your name.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "A working email.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!validateStep()) return;
    if (step < steps.length - 1) {
      setStep((value) => value + 1);
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { errors?: InquiryFieldError } | null;
        setErrors(payload?.errors ?? { form: "Something went wrong. Please try again." });
        setStatus("error");
        return;
      }
      setStatus("done");
    } catch {
      setErrors({ form: "The inquiry could not be sent. Please try again." });
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className={styles.done} role="status">
        <p className="meta">Received</p>
        <h2 className={`display ${styles.doneTitle}`}>I’ll read this properly.</h2>
        <p>Thank you. I’ll be in touch if the work looks like a fit.</p>
      </div>
    );
  }

  const current = steps[step];

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <div className={styles.progress}>
        <p className="meta">{progress}</p>
        <div className={styles.bar} aria-hidden="true">
          <span style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
        </div>
      </div>

      <fieldset className={styles.step}>
        <legend className={`display ${styles.question}`}>{current.title}</legend>

        {step === 0 ? (
          <div className={styles.options} role="list">
            {projectTypes.map((type) => (
              <button
                key={type}
                type="button"
                className={`${styles.option} ${values.projectType === type ? styles.optionOn : ""}`}
                onClick={() => update("projectType", type)}
                aria-pressed={values.projectType === type}
              >
                {type}
              </button>
            ))}
            {errors.projectType ? <p className={styles.error}>{errors.projectType}</p> : null}
          </div>
        ) : null}

        {step === 1 ? (
          <label className={styles.field}>
            <span className="sr-only">What does your business do?</span>
            <textarea
              value={values.business}
              onChange={(event) => update("business", event.target.value)}
              rows={5}
              placeholder="Industry, audience, what you sell or offer."
            />
            {errors.business ? <span className={styles.error}>{errors.business}</span> : null}
          </label>
        ) : null}

        {step === 2 ? (
          <label className={styles.field}>
            <span className="sr-only">What would you like the website to accomplish?</span>
            <textarea
              value={values.goals}
              onChange={(event) => update("goals", event.target.value)}
              rows={5}
              placeholder="Leads, bookings, a clearer offer, a redesign that finally feels like you."
            />
            {errors.goals ? <span className={styles.error}>{errors.goals}</span> : null}
          </label>
        ) : null}

        {step === 3 ? (
          <label className={styles.field}>
            <span className="sr-only">What’s currently not working?</span>
            <textarea
              value={values.friction}
              onChange={(event) => update("friction", event.target.value)}
              rows={5}
              placeholder="Confusion, no inquiries, a site that looks dated, a process that leaks."
            />
            {errors.friction ? <span className={styles.error}>{errors.friction}</span> : null}
          </label>
        ) : null}

        {step === 4 ? (
          <div className={styles.options}>
            {budgetRanges.map((range) => (
              <button
                key={range}
                type="button"
                className={`${styles.option} ${values.budget === range ? styles.optionOn : ""}`}
                onClick={() => update("budget", range)}
                aria-pressed={values.budget === range}
              >
                {range}
              </button>
            ))}
            {errors.budget ? <p className={styles.error}>{errors.budget}</p> : null}
          </div>
        ) : null}

        {step === 5 ? (
          <div className={styles.contact}>
            <label className={styles.field}>
              <span>Name</span>
              <input
                value={values.name}
                onChange={(event) => update("name", event.target.value)}
                autoComplete="name"
              />
              {errors.name ? <span className={styles.error}>{errors.name}</span> : null}
            </label>
            <label className={styles.field}>
              <span>Email</span>
              <input
                type="email"
                value={values.email}
                onChange={(event) => update("email", event.target.value)}
                autoComplete="email"
              />
              {errors.email ? <span className={styles.error}>{errors.email}</span> : null}
            </label>
            <label className={styles.field}>
              <span>Phone (optional)</span>
              <input
                type="tel"
                value={values.phone}
                onChange={(event) => update("phone", event.target.value)}
                autoComplete="tel"
              />
              {errors.phone ? <span className={styles.error}>{errors.phone}</span> : null}
            </label>
          </div>
        ) : null}
      </fieldset>

      {errors.form ? <p className={styles.error}>{errors.form}</p> : null}

      <div className={styles.actions}>
        {step > 0 ? (
          <Button type="button" variant="ghost" onClick={() => setStep((value) => value - 1)}>
            Back
          </Button>
        ) : (
          <span />
        )}
        <Button type="submit" disabled={status === "submitting"}>
          {step === steps.length - 1 ? (status === "submitting" ? "Sending" : "Send inquiry") : "Continue"}
        </Button>
      </div>
    </form>
  );
}
