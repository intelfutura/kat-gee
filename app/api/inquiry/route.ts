import { NextResponse } from "next/server";
import { toInquiryPayload, validateInquiry } from "@/lib/inquiry/schema";
import { createInquiryStore } from "@/lib/inquiry/store";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const result = validateInquiry(body);

  if (!result.ok) {
    return NextResponse.json({ ok: false, errors: result.errors }, { status: 400 });
  }

  const inquiry = toInquiryPayload(result.value, {
    userAgent: request.headers.get("user-agent") ?? undefined,
    referrer: request.headers.get("referer") ?? undefined,
    locale: request.headers.get("accept-language") ?? undefined,
    path: "/start",
  });

  try {
    await createInquiryStore().save(inquiry);
  } catch (error) {
    console.error("[inquiry] persist failed", error);
    if (process.env.INQUIRY_WEBHOOK_URL) {
      return NextResponse.json(
        { ok: false, errors: { form: "The inquiry could not be delivered. Please try again." } },
        { status: 502 },
      );
    }
  }

  return NextResponse.json({ ok: true, id: inquiry.id });
}
