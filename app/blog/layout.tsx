import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata.blog;

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
