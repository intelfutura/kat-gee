import { mkdir, appendFile } from "node:fs/promises";
import path from "node:path";
import type { InquiryPayload } from "./types";

/**
 * Persistence is intentionally swappable.
 * Locally, v1 writes JSON lines.
 * On Vercel the filesystem is ephemeral, so the console logger is always on
 * and a webhook (Formspree, Make, Zapier, Resend) is the durable path.
 */
export interface InquiryStore {
  save(inquiry: InquiryPayload): Promise<void>;
}

export class ConsoleInquiryStore implements InquiryStore {
  async save(inquiry: InquiryPayload) {
    console.info("[inquiry]", JSON.stringify(inquiry));
  }
}

export class FileInquiryStore implements InquiryStore {
  constructor(private readonly directory = path.join(process.cwd(), "data", "inquiries")) {}

  async save(inquiry: InquiryPayload) {
    await mkdir(this.directory, { recursive: true });
    const file = path.join(this.directory, "inquiries.jsonl");
    await appendFile(file, `${JSON.stringify(inquiry)}\n`, "utf8");
  }
}

export class CompositeInquiryStore implements InquiryStore {
  constructor(private readonly stores: InquiryStore[]) {}

  async save(inquiry: InquiryPayload) {
    await Promise.all(this.stores.map((store) => store.save(inquiry)));
  }
}

/** Reserved: POST the payload to a CRM or automation webhook. */
export class WebhookInquiryStore implements InquiryStore {
  constructor(private readonly url: string) {}

  async save(inquiry: InquiryPayload) {
    const response = await fetch(this.url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inquiry),
    });
    if (!response.ok) {
      throw new Error(`Inquiry webhook failed: ${response.status}`);
    }
  }
}

const onVercel = Boolean(process.env.VERCEL);

export function createInquiryStore(): InquiryStore {
  const stores: InquiryStore[] = [new ConsoleInquiryStore()];

  if (!onVercel) {
    stores.push(new FileInquiryStore());
  }

  const webhook = process.env.INQUIRY_WEBHOOK_URL;
  if (webhook) {
    stores.push(new WebhookInquiryStore(webhook));
  }

  return new CompositeInquiryStore(stores);
}
