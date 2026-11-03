export type LeadPayload = Record<
  string,
  string | Record<string, string | undefined>
>;

export async function submitToWebhook(payload: LeadPayload): Promise<void> {
  let response: Response;

  try {
    response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new Error("We couldn't send your request. Please try again.");
  }

  if (response.ok) return;

  let errorMessage: string | undefined;
  try {
    const result: unknown = await response.json();
    if (
      typeof result === "object" &&
      result !== null &&
      "error" in result &&
      typeof result.error === "string"
    ) {
      errorMessage = result.error;
    }
  } catch {
    errorMessage = undefined;
  }

  throw new Error(
    errorMessage || "We couldn't send your request. Please try again.",
  );
}
