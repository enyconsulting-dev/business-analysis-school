import type { Metadata } from "next";

const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://businessanalysisschool.com";

export const siteUrl = new URL(configuredSiteUrl);

if (
  siteUrl.protocol !== "https:" &&
  !(siteUrl.protocol === "http:" && siteUrl.hostname === "localhost")
) {
  throw new Error("NEXT_PUBLIC_SITE_URL must use HTTPS.");
}

if (
  siteUrl.username ||
  siteUrl.password ||
  siteUrl.search ||
  siteUrl.hash ||
  siteUrl.pathname !== "/"
) {
  throw new Error(
    "NEXT_PUBLIC_SITE_URL must be an origin without a path, credentials, query, or hash.",
  );
}

export function createPageMetadata(
  title: string,
  description: string,
  path: string,
  noIndex = false,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      title,
      description,
      url: path,
      siteName: "Business Analysis School",
      locale: "en_US",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}
