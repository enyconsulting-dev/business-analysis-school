import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata.certifications;

export default function CertificationsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
