import { NextRequest, NextResponse } from "next/server";
import { validatePayload } from "@/lib/lead-validation";

const LEGACY_GHL_WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/Qum6zwDsfvHsbXiehFQR/webhook-trigger/c82296b3-022a-41a1-84c1-d0c213bf7518";

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (!origin || origin !== request.nextUrl.origin) {
    return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
  }

  const body = await request.text();
  if (body.length > 16_384) {
    return NextResponse.json({ error: "Submission is too large." }, { status: 413 });
  }

  let payload: unknown;
  try {
    payload = JSON.parse(body);
  } catch {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }

  const validationError = validatePayload(payload);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  if (
    typeof payload !== "object" ||
    payload === null ||
    Array.isArray(payload) ||
    !("event_type" in payload) ||
    typeof payload.event_type !== "string"
  ) {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }
  const eventType = payload.event_type;

  const targetUrl =
    process.env.GHL_WEBHOOK_URL || LEGACY_GHL_WEBHOOK_URL;
  let url: URL;
  try {
    url = new URL(targetUrl);
  } catch {
    console.error("Lead submission rejected: invalid GHL webhook configuration.");
    return NextResponse.json(
      { error: "Lead submission is temporarily unavailable. Please try again." },
      { status: 503 },
    );
  }
  if (
    url.protocol !== "https:" ||
    url.hostname !== "services.leadconnectorhq.com"
  ) {
    console.error("Lead submission rejected: invalid GHL webhook configuration.");
    return NextResponse.json(
      { error: "Lead submission is temporarily unavailable. Please try again." },
      { status: 503 },
    );
  }

  let sourceUrl = "unknown";
  const referer = request.headers.get("referer");
  if (referer) {
    try {
      const parsedReferer = new URL(referer);
      sourceUrl = `${parsedReferer.origin}${parsedReferer.pathname}`;
    } catch {
      sourceUrl = "unknown";
    }
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...payload,
        timestamp: new Date().toISOString(),
        source_url: sourceUrl,
        user_agent: request.headers.get("user-agent") || "unknown",
      }),
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(
        `Lead submission failed for ${eventType}: GHL returned ${response.status}.`,
      );
      return NextResponse.json(
        { error: "We couldn't send your request. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(
      `Lead submission failed for ${eventType}:`,
      error instanceof Error ? error.message : "Unknown provider error.",
    );
    return NextResponse.json(
      { error: "We couldn't send your request. Please try again." },
      { status: 502 },
    );
  }
}
