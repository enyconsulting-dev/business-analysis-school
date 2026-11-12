import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata.resources;

export default function ResourcesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
