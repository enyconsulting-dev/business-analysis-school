import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata.blogRead;

export default function BlogReadLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
