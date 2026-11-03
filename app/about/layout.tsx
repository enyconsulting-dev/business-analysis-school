import { createPageMetadata } from "@/lib/site-config";

export const metadata = createPageMetadata(
  "About",
  "Learn about Business Analysis School and its business analysis education programs.",
  "/about",
);

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
