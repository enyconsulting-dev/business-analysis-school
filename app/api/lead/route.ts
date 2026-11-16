import { NextResponse } from "next/server";

const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const MAX_REQUEST_BYTES = 16 * 1024;
const ALLOWED_EVENT_TYPES = new Set([
  "application_submission",
  "contact_inquiry",
  "corporate_rfp",
  "lead_optin",
  "newsletter_signup",
  "quiz_diagnostic",
]);

type JsonRecord = Record<string, unknown>;

function isRecord(value: unknown): value is JsonRecord {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function errorResponse(message: string, status: number) {
  return NextResponse.json({ error: message }, { status });
}

function getWebhookUrl(): URL | null {
  const configuredUrl = process.env.GHL_WEBHOOK_URL;
  if (!configuredUrl) {
    return null;
  }

  try {
    const url = new URL(configuredUrl);
    return url.protocol === "https:" &&
      url.hostname === "services.leadconnectorhq.com"
      ? url
      : null;
  } catch {
    return null;
  }
}

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return errorResponse("Content-Type must be application/json.", 415);
  }

  const origin = request.headers.get("origin");
  if (origin) {
    try {
      if (new URL(origin).host !== new URL(request.url).host) {
        return errorResponse("Cross-origin submission rejected.", 403);
      }
    } catch {
      return errorResponse("Invalid request origin.", 403);
    }
  }

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > MAX_REQUEST_BYTES) {
    return errorResponse("Submission is too large.", 413);
  }

  const rawBody = await request.text();
  if (new TextEncoder().encode(rawBody).byteLength > MAX_REQUEST_BYTES) {
    return errorResponse("Submission is too large.", 413);
  }

  let body: unknown;
  try {
    body = JSON.parse(rawBody);
  } catch {
    return errorResponse("Invalid submission.", 400);
  }

  if (!isRecord(body) || !isRecord(body.payload)) {
    return errorResponse("Invalid submission.", 400);
  }

  const { payload } = body;
  const eventType = payload.event_type;
  const email = payload.email ?? payload.work_email;
  const token = body.token;
  const honeypot = body.website;

  if (
    typeof eventType !== "string" ||
    !ALLOWED_EVENT_TYPES.has(eventType) ||
    typeof email !== "string" ||
    email.length > 320 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
  ) {
    return errorResponse("Invalid submission.", 400);
  }

  if (typeof honeypot !== "string" || honeypot.length > 0) {
    return errorResponse("Submission rejected.", 400);
  }

  if (typeof token !== "string" || token.length === 0 || token.length > 2048) {
    return errorResponse("Complete the verification before submitting.", 400);
  }

  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
  const webhookUrl = getWebhookUrl();
  if (!turnstileSecret || !webhookUrl) {
    console.error("Lead submission is not configured.");
    return errorResponse(
      "Secure form submission is temporarily unavailable. Please contact us directly.",
      503,
    );
  }

  let verificationResponse: Response;
  try {
    verificationResponse = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: turnstileSecret,
        response: token,
      }),
      signal: AbortSignal.timeout(8000),
      cache: "no-store",
    });
  } catch {
    console.error("Turnstile verification request failed.");
    return errorResponse(
      "Verification is temporarily unavailable. Please try again.",
      503,
    );
  }

  if (!verificationResponse.ok) {
    console.error(
      "Turnstile verification returned status:",
      verificationResponse.status,
    );
    return errorResponse(
      "Verification is temporarily unavailable. Please try again.",
      503,
    );
  }

  let verification: unknown;
  try {
    verification = await verificationResponse.json();
  } catch {
    return errorResponse(
      "Verification is temporarily unavailable. Please try again.",
      503,
    );
  }

  const expectedHostname = new URL(request.url).hostname;
  if (
    !isRecord(verification) ||
    verification.success !== true ||
    verification.action !== "lead_submission" ||
    verification.hostname !== expectedHostname
  ) {
    return errorResponse("Verification failed. Please try again.", 400);
  }

  const enhancedPayload = {
    ...payload,
    timestamp: new Date().toISOString(),
    source_url: request.headers.get("referer") || "",
    user_agent: request.headers.get("user-agent") || "",
  };

  try {
    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(enhancedPayload),
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });

    if (!webhookResponse.ok) {
      console.error("GHL webhook returned status:", webhookResponse.status);
      return errorResponse(
        "We couldn't send your request. Please try again.",
        502,
      );
    }
  } catch (error) {
    console.error(
      "GHL webhook request failed:",
      error instanceof Error ? error.name : "Unknown error",
    );
    return errorResponse(
      "We couldn't send your request. Please try again.",
      502,
    );
  }

  return NextResponse.json({ success: true });
}
