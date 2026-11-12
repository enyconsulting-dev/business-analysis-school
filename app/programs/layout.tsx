import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata.programs;

export default function ProgramsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
