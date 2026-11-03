import { createPageMetadata } from "@/lib/site-config";

export const metadata = createPageMetadata(
  "AI Business Accelerator",
  "Explore the AI Business Accelerator program and its available learning options.",
  "/ai-accelerator",
);

export default function AIAcceleratorLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
