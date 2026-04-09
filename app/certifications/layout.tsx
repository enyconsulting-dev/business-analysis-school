import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Analysis Certifications | ECBA, CCBA, CBAP Prep | Business Analysis School",
  description: "Get globally recognized certifications. ECBA, CCBA, and CBAP preparation courses with a 98% first-time pass rate.",
};

export default function CertificationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
