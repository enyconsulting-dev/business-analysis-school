import { createPageMetadata } from "@/lib/site-config";

export const metadata = createPageMetadata(
  "Corporate Training",
  "Explore business analysis, AI, data analytics, and agile training inquiries for organizations.",
  "/corporate-training",
);

export default function CorporateTrainingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
