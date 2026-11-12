import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata.successStories;

export default function SuccessStoriesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
