import { createPageMetadata } from "@/lib/site-config";

export const metadata = createPageMetadata(
  "Business Analysis Certification Preparation",
  "Explore business analysis certification preparation programs and contact the team for current schedules.",
  "/certifications",
);

export default function CertificationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
