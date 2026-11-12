import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata.freeTraining;

export default function FreeTrainingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
