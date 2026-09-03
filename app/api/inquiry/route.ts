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

  await createInquiryStore().save(inquiry);

  return NextResponse.json({ ok: true, id: inquiry.id });
}
