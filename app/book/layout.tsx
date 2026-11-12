import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata.book;

export default function BookLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
