import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata.about;

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
