import { createPageMetadata } from "@/lib/site-config";

export const metadata = createPageMetadata(
  "Business Analysis Resources",
  "Explore business analysis guides, templates, assessments, and training resources.",
  "/resources",
);

export default function ResourcesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
