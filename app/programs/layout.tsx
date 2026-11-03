import { createPageMetadata } from "@/lib/site-config";

export const metadata = createPageMetadata(
  "Programs",
  "Explore business analysis certification preparation, on-demand courses, and corporate training.",
  "/programs",
);

export default function ProgramsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
