import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata.aiAccelerator;

export default function AIAcceleratorLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
