import { createPageMetadata } from "@/lib/site-config";

export const metadata = createPageMetadata(
  "Success Stories",
  "Read business analysis career stories shared by Business Analysis School.",
  "/success-stories",
);

export default function SuccessStoriesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
