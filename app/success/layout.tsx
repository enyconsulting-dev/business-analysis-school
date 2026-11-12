import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo";

export const metadata = {
  ...pageMetadata.success,
  robots: {
    index: false,
    follow: true,
  },
};

export default function SuccessLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
