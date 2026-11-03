import { createPageMetadata } from "@/lib/site-config";

export const metadata = createPageMetadata(
  "Career Consultation",
  "Review career consultation options and request details from the Business Analysis School team.",
  "/career-consultation",
);

export default function CareerConsultationLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
