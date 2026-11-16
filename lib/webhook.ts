type WebhookPayload = Record<string, unknown> & {
  event_type: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export async function submitToWebhook(
  payload: WebhookPayload,
  token: string,
  form: HTMLFormElement,
): Promise<void> {
  const website = new FormData(form).get("website");
  let response: Response;

  try {
    response = await fetch("/api/lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        payload,
        token,
        website: typeof website === "string" ? website : "",
      }),
    });
  } catch (error) {
    console.error("Lead submission request failed:", error);
    throw new Error("Unable to reach the server. Please try again.");
  }

  let result: unknown;
  try {
    result = await response.json();
  } catch {
    result = null;
  }

  if (!response.ok) {
    const message =
      isRecord(result) && typeof result.error === "string"
        ? result.error
        : "We couldn't submit your request. Please try again.";
    throw new Error(message);
  }
}

export function getSubmissionErrorMessage(error: unknown): string {
  return error instanceof Error
    ? error.message
    : "We couldn't submit your request. Please try again.";
}
