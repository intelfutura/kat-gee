import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { toInquiryPayload, validateInquiry } from "./schema";

const valid = {
  projectType: "Smart website",
  business: "A private practice in wellness.",
  goals: "Qualify inquiries and book consultations.",
  friction: "The current site is a brochure.",
  budget: "$12,000 – $25,000",
  name: "Jordan Lee",
  email: "jordan@example.com",
};

describe("validateInquiry", () => {
  it("accepts a complete inquiry", () => {
    const result = validateInquiry(valid);
    assert.equal(result.ok, true);
  });

  it("rejects an empty payload", () => {
    const result = validateInquiry({});
    assert.equal(result.ok, false);
    if (!result.ok) {
      assert.ok(result.errors.projectType);
      assert.ok(result.errors.email);
    }
  });

  it("rejects an invalid email", () => {
    const result = validateInquiry({ ...valid, email: "not-an-email" });
    assert.equal(result.ok, false);
  });
});

describe("toInquiryPayload", () => {
  it("shapes a versioned payload for later automation", () => {
    const payload = toInquiryPayload(valid);
    assert.equal(payload.source, "portfolio");
    assert.equal(payload.version, 1);
    assert.equal(payload.contact.email, valid.email);
    assert.ok(payload.id);
    assert.ok(payload.createdAt);
  });
});
