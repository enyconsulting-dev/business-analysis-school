import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata.careerConsultation;

export default function CareerConsultationLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
