import { createPageMetadata } from "@/lib/site-config";

export const metadata = createPageMetadata(
  "Submission Status",
  "View the status information for a request submitted to Business Analysis School.",
  "/success",
  true,
);

export default function SubmissionStatusLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
