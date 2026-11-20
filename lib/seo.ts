import type { Metadata } from "next";

export const SITE_URL = "https://businessanalysisschool.com";
export const DEFAULT_OG_IMAGE = "/og-image.png";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}

export function createPageMetadata({
  title,
  description,
  path,
  type = "website",
}: PageMetadataOptions): Metadata {
  const image = {
    url: DEFAULT_OG_IMAGE,
    width: 1200,
    height: 630,
    alt: "Business Analysis School — business analysis and AI career training",
  };

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type,
      siteName: "Business Analysis School",
      locale: "en_US",
      url: path,
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export const pageMetadata = {
  about: createPageMetadata({
    title: "About Business Analysis School",
    description:
      "Meet Business Analysis School and learn how practical, career-focused business analysis education helps professionals move forward.",
    path: "/about",
  }),
  aiAccelerator: createPageMetadata({
    title: "AI Business Analyst Accelerator",
    description:
      "Build practical AI, business analysis, and consulting skills through guided training, certification support, and career coaching.",
    path: "/ai-accelerator",
  }),
  blog: createPageMetadata({
    title: "Business Analysis, AI & Career Articles",
    description:
      "Explore practical articles on business analysis, AI, consulting, certifications, and career development.",
    path: "/blog",
  }),
  blogRead: createPageMetadata({
    title: "The Future of Business Analysis: AI, Data & Strategy",
    description:
      "Learn how AI, data, and strategic thinking are changing business analysis and the skills professionals need to stay relevant.",
    path: "/blog/read",
    type: "article",
  }),
  book: createPageMetadata({
    title: "The Six-Figure Business Analyst Book",
    description:
      "Discover 12 practical steps to start a business analysis career without a technology degree or prior experience in The Six-Figure Business Analyst by Eno Eka.",
    path: "/book",
  }),
  careerConsultation: createPageMetadata({
    title: "Business Analyst Career Consultation",
    description:
      "Get one-to-one guidance, identify career gaps, and plan your next steps toward a business analysis role.",
    path: "/career-consultation",
  }),
  certifications: createPageMetadata({
    title: "Business Analysis Certification Training",
    description:
      "Prepare for IIBA ECBA, CCBA, and CBAP certifications with business analysis training and exam-focused support.",
    path: "/certifications",
  }),
  contact: createPageMetadata({
    title: "Contact Business Analysis School",
    description:
      "Contact Business Analysis School about training, certifications, career programs, or corporate learning.",
    path: "/contact",
  }),
  corporateTraining: createPageMetadata({
    title: "Corporate Business Analysis Training",
    description:
      "Upskill teams with practical business analysis and AI training tailored to your organization's goals.",
    path: "/corporate-training",
  }),
  freeTraining: createPageMetadata({
    title: "Free Business Analysis Training",
    description:
      "Start learning about business analysis and AI career paths with a free training session from Business Analysis School.",
    path: "/free-training",
  }),
  freeTrainingVideo: createPageMetadata({
    title: "AI Business Analyst Career Roadmap Masterclass",
    description:
      "Learn the career roadmap, foundational skills, and practical next steps for becoming an AI-focused business analyst.",
    path: "/free-training/video",
  }),
  program: createPageMetadata({
    title: "IIBA Certification Training",
    description:
      "Build business analysis skills and prepare for IIBA certification, from ECBA foundations through CBAP-level practice.",
    path: "/program",
  }),
  programs: createPageMetadata({
    title: "Business Analysis & AI Career Programs",
    description:
      "Compare business analysis, AI, certification, and career development programs to find the right learning path.",
    path: "/programs",
  }),
  resources: createPageMetadata({
    title: "Free Business Analyst Career Resources",
    description:
      "Find free career guides, interview preparation, resume resources, and business analysis learning materials.",
    path: "/resources",
  }),
  success: createPageMetadata({
    title: "Thank You",
    description: "Your request has been received by Business Analysis School.",
    path: "/success",
  }),
  successStories: createPageMetadata({
    title: "Business Analyst Career Success Stories",
    description:
      "Hear how Business Analysis School learners developed their skills and pursued new career opportunities.",
    path: "/success-stories",
  }),
};
