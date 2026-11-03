import { createPageMetadata } from "@/lib/site-config";

export const metadata = createPageMetadata(
  "Free Training",
  "Explore free business analysis training and request information about available content.",
  "/free-training",
);

export default function FreeTrainingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
