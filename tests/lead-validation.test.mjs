import assert from "node:assert/strict";
import test from "node:test";
import { validatePayload } from "../lib/lead-validation.mts";

test("accepts a valid newsletter submission", () => {
  assert.equal(
    validatePayload({
      event_type: "newsletter_signup",
      email: "reader@example.com",
    }),
    null,
  );
});

test("accepts supported event payloads with required data", () => {
  const submissions = [
    {
      event_type: "contact_inquiry",
      full_name: "Test User",
      email: "test@example.com",
      message: "I would like more information.",
    },
    {
      event_type: "lead_optin",
      full_name: "Test User",
      email: "test@example.com",
      resource_title: "Career guide",
      resource_type: "ebook",
    },
    {
      event_type: "quiz_diagnostic",
      first_name: "Test",
      last_name: "User",
      email: "test@example.com",
      answers: { background: "business", goal: "salary", commitment: "high" },
    },
    {
      event_type: "corporate_rfp",
      contact_name: "Test User",
      work_email: "test@example.com",
      company_name: "Example Inc",
      team_size: "10-50",
      job_title: "Director",
      training_objectives: "Upskill the team",
    },
    {
      event_type: "application_submission",
      full_name: "Test User",
      email: "test@example.com",
      phone: "+15555550123",
      current_role: "Analyst",
      income_level: "60-240",
      primary_goal: "upskill",
    },
  ];

  for (const submission of submissions) {
    assert.equal(validatePayload(submission), null, submission.event_type);
  }
});

test("rejects unknown event types and fields", () => {
  assert.equal(
    validatePayload({ event_type: "unknown", email: "test@example.com" }),
    "Invalid submission.",
  );
  assert.equal(
    validatePayload({
      event_type: "newsletter_signup",
      email: "test@example.com",
      unexpected: "value",
    }),
    "Invalid submission.",
  );
});

test("rejects incomplete or invalid email submissions", () => {
  assert.equal(
    validatePayload({ event_type: "contact_inquiry", email: "test@example.com" }),
    "Please complete all required fields.",
  );
  assert.equal(
    validatePayload({ event_type: "newsletter_signup", email: "not-an-email" }),
    "Enter a valid email address.",
  );
});

test("rejects malformed or oversized field values", () => {
  assert.equal(
    validatePayload({
      event_type: "quiz_diagnostic",
      first_name: "Test",
      last_name: "User",
      email: "test@example.com",
      answers: { background: "business", goal: "salary" },
    }),
    "Invalid submission.",
  );
  assert.equal(
    validatePayload({
      event_type: "newsletter_signup",
      email: "test@example.com",
      tags: "x".repeat(5001),
    }),
    "Invalid submission.",
  );
});

test("rejects non-object payloads", () => {
  assert.equal(validatePayload(null), "Invalid submission.");
  assert.equal(validatePayload([]), "Invalid submission.");
});
