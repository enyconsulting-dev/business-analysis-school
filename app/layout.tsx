import type { Metadata } from "next";
import { Instrument_Serif, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import { siteUrl } from "@/lib/site-config";

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
  metadataBase: siteUrl,
  title: {
    default: "Business Analysis School",
    template: "%s | Business Analysis School",
  },
  description:
    "Career development programs and resources for business analysts.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "Business Analysis School",
    description:
      "Career development programs and resources for business analysts.",
    url: "/",
    siteName: "Business Analysis School",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Business Analysis School",
    description:
      "Career development programs and resources for business analysts.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": `${siteUrl.origin}/#organization`,
      name: "Business Analysis School",
      url: siteUrl.origin,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl.origin}/#website`,
      name: "Business Analysis School",
      url: siteUrl.origin,
      publisher: { "@id": `${siteUrl.origin}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />
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
