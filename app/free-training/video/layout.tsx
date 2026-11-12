import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata.freeTrainingVideo;

export default function FreeTrainingVideoLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
