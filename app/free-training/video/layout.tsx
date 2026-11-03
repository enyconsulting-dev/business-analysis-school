import { createPageMetadata } from "@/lib/site-config";

export const metadata = createPageMetadata(
  "Masterclass",
  "View the current availability of the Business Analysis School masterclass.",
  "/free-training/video",
  true,
);

export default function TrainingVideoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
