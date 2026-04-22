/**
 * Centralized Webhook Utility
 * Used to send lead data, applications, and inquiries to a unified backend/GHL endpoint.
 */

// Placeholder for the actual webhook URL. 
// Replace this with your URL when ready.
const WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/Qum6zwDsfvHsbXiehFQR/webhook-trigger/9611dab4-09c1-4154-aa55-eeba6d14d269"; 

export async function submitToWebhook(payload: any) {
  const timestamp = new Date().toISOString();
  const enhancedPayload = {
    ...payload,
    timestamp,
    source_url: typeof window !== 'undefined' ? window.location.href : 'server-side',
    user_agent: typeof window !== 'undefined' ? navigator.userAgent : 'server-side'
  };

  if (!WEBHOOK_URL) {
    console.group("🚀 [Mock Webhook Submission]");
    console.log("Event Type:", payload.event_type || 'unspecified');
    console.log("Payload:", enhancedPayload);
    console.groupEnd();
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    return { success: true, mock: true };
  }

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(enhancedPayload)
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
