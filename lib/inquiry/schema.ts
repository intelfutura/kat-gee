import {
  budgetRanges,
  projectTypes,
  type InquiryFieldError,
  type InquiryInput,
  type InquiryPayload,
} from "./types";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function trim(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export function validateInquiry(raw: unknown): {
  ok: true;
  value: InquiryInput;
} | {
  ok: false;
  errors: InquiryFieldError;
} {
  const data = (raw ?? {}) as Record<string, unknown>;
  const input: InquiryInput = {
    projectType: trim(data.projectType),
    business: trim(data.business),
    goals: trim(data.goals),
    friction: trim(data.friction),
    budget: trim(data.budget),
    name: trim(data.name),
    email: trim(data.email),
    phone: trim(data.phone) || undefined,
  };

  const errors: InquiryFieldError = {};

  if (!projectTypes.includes(input.projectType as InquiryInput["projectType"] & typeof projectTypes[number])) {
    errors.projectType = "Choose what you are looking to build.";
  }
  if (input.business.length < 8) {
    errors.business = "Tell me a little more about the business.";
  }
  if (input.goals.length < 8) {
    errors.goals = "What should the website accomplish?";
  }
  if (input.friction.length < 4) {
    errors.friction = "What is not working today?";
  }
  if (!budgetRanges.includes(input.budget as typeof budgetRanges[number])) {
    errors.budget = "Choose an approximate budget.";
  }
  if (input.name.length < 2) {
    errors.name = "A name is required.";
  }
  if (!EMAIL.test(input.email)) {
    errors.email = "A valid email is required.";
  }
  if (input.phone && input.phone.length < 7) {
    errors.phone = "That phone number looks incomplete.";
  }

  if (Object.keys(errors).length) {
    return { ok: false, errors };
  }

  return { ok: true, value: input };
}

export function toInquiryPayload(
  input: InquiryInput,
  meta: InquiryPayload["meta"] = {},
): InquiryPayload {
  return {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    source: "portfolio",
    version: 1,
    projectType: input.projectType as InquiryPayload["projectType"],
    business: input.business,
    goals: input.goals,
    friction: input.friction,
    budget: input.budget as InquiryPayload["budget"],
    contact: {
      name: input.name,
      email: input.email,
      phone: input.phone,
    },
    meta,
  };
}
