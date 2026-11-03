import { createPageMetadata } from "@/lib/site-config";

export const metadata = createPageMetadata(
  "Contact",
  "Contact Business Analysis School about training, programs, and resources.",
  "/contact",
);

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
