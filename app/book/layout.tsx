import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Six-Figure Business Analyst | Bestselling Career Guide | Business Analysis School",
  description: "12 Simple Steps to Kickstart Your Career Without a Tech Degree or Experience. The definitive guide by Eno Eka.",
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
