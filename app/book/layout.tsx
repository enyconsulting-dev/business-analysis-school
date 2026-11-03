import { createPageMetadata } from "@/lib/site-config";

export const metadata = createPageMetadata(
  "The Six-Figure Business Analyst",
  "A career guide by Eno Eka for starting or advancing a business analysis career.",
  "/book",
);

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
