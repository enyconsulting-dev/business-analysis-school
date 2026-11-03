const allowedEvents = new Set([
  "contact_inquiry",
  "lead_optin",
  "quiz_diagnostic",
  "corporate_rfp",
  "application_submission",
  "newsletter_signup",
]);

const allowedFields = new Set([
  "source",
  "tag",
  "type",
  "event_type",
  "program",
  "full_name",
  "email",
  "phone",
  "current_role",
  "income_level",
  "primary_goal",
  "tags",
  "first_name",
  "last_name",
  "answers",
  "resource_title",
  "resource_type",
  "contact_name",
  "work_email",
  "company_name",
  "team_size",
  "job_title",
  "training_objectives",
  "interest",
  "message",
]);

const requiredFields: Record<string, string[]> = {
  contact_inquiry: ["full_name", "email", "message"],
  lead_optin: ["full_name", "email", "resource_title", "resource_type"],
  quiz_diagnostic: ["first_name", "last_name", "email", "answers"],
  corporate_rfp: [
    "contact_name",
    "work_email",
    "company_name",
    "team_size",
    "job_title",
    "training_objectives",
  ],
  application_submission: [
    "full_name",
    "email",
    "phone",
    "current_role",
    "income_level",
    "primary_goal",
  ],
  newsletter_signup: ["email"],
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isValidAnswers(value: unknown): boolean {
  if (!isRecord(value)) return false;
  const allowedAnswers = new Set(["background", "goal", "commitment"]);

  return (
    Object.keys(value).length === allowedAnswers.size &&
    Object.entries(value).every(
      ([key, answer]) =>
        allowedAnswers.has(key) &&
        typeof answer === "string" &&
        answer.length <= 100,
    )
  );
}

export function validatePayload(value: unknown): string | null {
  if (!isRecord(value)) return "Invalid submission.";

  const eventType = value.event_type;
  if (typeof eventType !== "string" || !allowedEvents.has(eventType)) {
    return "Invalid submission.";
  }

  if (Object.keys(value).some((field) => !allowedFields.has(field))) {
    return "Invalid submission.";
  }

  for (const [field, fieldValue] of Object.entries(value)) {
    if (field === "answers") {
      if (!isValidAnswers(fieldValue)) return "Invalid submission.";
      continue;
    }

    if (typeof fieldValue !== "string" || fieldValue.length > 5000) {
      return "Invalid submission.";
    }
  }

  const missingField = requiredFields[eventType].some((field) => {
    const fieldValue = value[field];
    if (field === "answers") return !isValidAnswers(fieldValue);
    return typeof fieldValue !== "string" || fieldValue.trim().length === 0;
  });
  if (missingField) return "Please complete all required fields.";

  const email =
    typeof value.work_email === "string" ? value.work_email : value.email;
  if (
    typeof email !== "string" ||
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return "Enter a valid email address.";
  }

  return null;
}
