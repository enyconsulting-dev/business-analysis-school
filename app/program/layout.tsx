import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata.program;

export default function ProgramLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
