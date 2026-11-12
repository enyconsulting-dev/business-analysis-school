import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata.corporateTraining;

export default function CorporateTrainingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
