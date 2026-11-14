/**
 * Centralized Webhook Utility
 * Used to send lead data, applications, and inquiries to a unified backend/GHL endpoint.
 * Standardized inputs now include a "tags" string for better CRM segmentation.
 */

const DEFAULT_WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/Qum6zwDsfvHsbXiehFQR/webhook-trigger/c82296b3-022a-41a1-84c1-d0c213bf7518";

type WebhookPayload = Record<string, unknown> & {
  event_type?: string;
};

export async function submitToWebhook(payload: WebhookPayload, customUrl?: string) {
  const targetUrl = customUrl || DEFAULT_WEBHOOK_URL;
  const timestamp = new Date().toISOString();

  const enhancedPayload = {
    ...payload,
    timestamp,
    source_url: typeof window !== "undefined" ? window.location.href : "server-side",
    user_agent: typeof window !== "undefined" ? navigator.userAgent : "server-side",
  };

  if (!targetUrl) {
    console.group("🚀 [Mock Webhook Submission]");
    console.log("Event Type:", payload.event_type || "unspecified");
    console.log("Payload:", enhancedPayload);
    console.groupEnd();

    await new Promise((resolve) => setTimeout(resolve, 800));
    return { success: true, mock: true };
  }

  try {
    const response = await fetch(targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(enhancedPayload),
    });

    if (!response.ok) {
      throw new Error(`Webhook failed with status: ${response.status}`);
    }

    return { success: true };
  } catch (error) {
    console.error("❌ Webhook Submission Error:", error);
    return { success: false, error };
  }
}

