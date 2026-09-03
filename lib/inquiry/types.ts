export const projectTypes = [
  "New website",
  "Website redesign",
  "Landing page",
  "E-commerce",
  "Smart website",
  "Booking system",
  "Automation",
  "Custom web application",
  "Other",
] as const;

export type ProjectType = (typeof projectTypes)[number];

export const budgetRanges = [
  "To be determined",
  "Under $5,000",
  "$5,000 – $12,000",
  "$12,000 – $25,000",
  "$25,000+",
] as const;

export type BudgetRange = (typeof budgetRanges)[number];

export type InquiryContact = {
  name: string;
  email: string;
  phone?: string;
};

export type InquiryPayload = {
  id: string;
  createdAt: string;
  source: "portfolio";
  version: 1;
  projectType: ProjectType;
  business: string;
  goals: string;
  friction: string;
  budget: BudgetRange;
  contact: InquiryContact;
  meta: {
    userAgent?: string;
    referrer?: string;
    locale?: string;
    path?: string;
  };
  /**
   * Reserved for later lead qualification, CRM sync,
   * proposal generation, and estimation — not used in v1.
   */
  future?: {
    qualificationScore?: number;
    crmId?: string;
    estimatedScope?: string;
  };
};

export type InquiryInput = {
  projectType: string;
  business: string;
  goals: string;
  friction: string;
  budget: string;
  name: string;
  email: string;
  phone?: string;
};

export type InquiryFieldError = Partial<
  Record<keyof InquiryInput | "form", string>
>;
