import type { Metadata } from "next";
import { Instrument_Serif, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Business Analysis Training",
    template: "%s | Business Analysis School",
  },
  description:
    "Build business analysis, certification, and AI skills with practical training and career support from Business Analysis School.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Business Analysis School",
    locale: "en_US",
    url: "/",
    title: "Business Analysis Training | Business Analysis School",
    description:
      "Build business analysis, certification, and AI skills with practical training and career support.",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Business Analysis School — business analysis and AI career training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Analysis Training | Business Analysis School",
    description:
      "Build business analysis, certification, and AI skills with practical training and career support.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="font-sans bg-white text-gray-800 antialiased overflow-x-hidden pt-[68px]"
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCTA />
        <ExitIntentPopup />
      </body>
    </html>
  );
}
