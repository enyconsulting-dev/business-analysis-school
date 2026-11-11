import { readFileSync } from "node:fs";
import path from "node:path";

export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string; id: string }
  | { type: "list"; ordered: boolean; items: string[] };

export interface BlogArticle {
  number: number;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  image: {
    src: string;
    alt: string;
  };
  blocks: ArticleBlock[];
  readMinutes: number;
}

const ARTICLE_IMAGES: Record<number, BlogArticle["image"]> = {
  1: {
    src: "/blog-articles/AI-Business-Analysis-in-2027.jpg",
    alt: "Colorful charts and data analytics graphics on a dark background.",
  },
  2: {
    src: "/blog-articles/The-Future-of-AI-Business-Consulting.jpg",
    alt: "Business consultants reviewing information together around a table.",
  },
  3: {
    src: "/blog-articles/Will-AI%20Replace-Business-Analysts.png",
    alt: "A humanoid robot beside a programming board in a classroom.",
  },
  4: {
    src: "/blog-articles/AI-Business-Strategy-in-2027.jpg",
    alt: "A presenter leading a business workshop for a seated team.",
  },
  5: {
    src: "/blog-articles/7-Essential-Skills-Aspiring-Business-Analysts-Need-to-Develop-in-2027.jpg",
    alt: "A typewriter holding a page marked artificial intelligence.",
  },
  6: {
    src: "/blog-articles/How-to-Become-an-AI-Business-Consultant.jpg",
    alt: "A professional explaining a process diagram on a whiteboard.",
  },
  7: {
    src: "/blog-articles/AI-Literacy-vs-Technical-Expertise.jpg",
    alt: "An abstract network of connected points representing artificial intelligence.",
  },
  8: {
    src: "/blog-articles/From-Beginner-to-Business-Analyst.jpg",
    alt: "A sequence of AI assistants working at individual laptops.",
  },
  9: {
    src: "/blog-articles/Agentic_AI_Explained.jpg",
    alt: "AI assistant robots working at laptops in a coordinated sequence.",
  },
  10: {
    src: "/blog-articles/From_AI_Prompts_to_AI_Workflows.jpg",
    alt: "A laptop displaying a report on a desk with a notebook and phone.",
  },
  11: {
    src: "/blog-articles/Practical_Skills_and_AI.jpg",
    alt: "A person sketching connected workflow steps in a notebook.",
  },
  12: {
    src: "/blog-articles/Business_Consulting_and_Problem-Solving.jpg",
    alt: "A hand-drawn process diagram used to map a business workflow.",
  },
};

const sourcePath = path.join(
  process.cwd(),
  "BUSINESS ANALYSIS SCHOOL Website Article.md",
);

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function cleanMarkdown(value: string): string {
  return value.replace(/\\([.*])/g, "$1").trim();
}

function parseArticles(markdown: string): BlogArticle[] {
  const articles: BlogArticle[] = [];
  let category = "";
  let current: Omit<BlogArticle, "excerpt" | "readMinutes"> | undefined;
  let paragraphLines: string[] = [];
  let listItems: string[] = [];
  let listOrdered = false;
  let headingCounts = new Map<string, number>();

  const flushParagraph = () => {
    if (!current || paragraphLines.length === 0) return;
    const text = cleanMarkdown(paragraphLines.join(" "));
    if (text) current.blocks.push({ type: "paragraph", text });
    paragraphLines = [];
  };

  const flushList = () => {
    if (!current || listItems.length === 0) return;
    current.blocks.push({ type: "list", ordered: listOrdered, items: listItems });
    listItems = [];
  };

  const flushArticle = () => {
    if (!current) return;
    flushParagraph();
    flushList();

    const paragraphs = current.blocks.filter(
      (block): block is Extract<ArticleBlock, { type: "paragraph" }> =>
        block.type === "paragraph",
    );
    const excerpt = paragraphs[0]?.text ?? "";
    const wordCount = current.blocks
      .flatMap((block) =>
        block.type === "list" ? block.items : [block.text],
      )
      .join(" ")
      .split(/\s+/).length;

    articles.push({
      ...current,
      excerpt,
      readMinutes: Math.max(1, Math.ceil(wordCount / 220)),
    });
    current = undefined;
  };

  for (const rawLine of markdown.split(/\r?\n/)) {
    const categoryMatch = rawLine.match(
      /^#{1,2}\s+\*\*CATEGORY\s+\d+:\s*(.*?)\*\*$/,
    );
    if (categoryMatch) {
      flushArticle();
      category = cleanMarkdown(categoryMatch[1])
        .toLowerCase()
        .replace(/\b[a-z]/g, (letter) => letter.toUpperCase())
        .replace(/\bAnd\b/g, "and")
        .replace(/\bAi\b/g, "AI")
        .replace(/\bIiba\b/g, "IIBA");
      continue;
    }

    const articleMatch = rawLine.match(
      /^##\s+\*\*(\d+)\\?\.\s*(.*?)\*\*$/,
    );
    if (articleMatch) {
      flushArticle();
      const number = Number(articleMatch[1]);
      const title = cleanMarkdown(articleMatch[2]);
      const image = ARTICLE_IMAGES[number];
      if (!image) {
        throw new Error(`Missing image mapping for blog article ${number}: ${title}`);
      }
      current = {
        number,
        title,
        slug: slugify(title),
        category,
        image,
        blocks: [],
      };
      headingCounts = new Map();
      continue;
    }

    if (!current) continue;

    const line = rawLine.trim();
    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }

    const unorderedItem = line.match(/^\*\s+(.+)$/);
    const orderedItem = line.match(/^\d+[.)]\s+(.+)$/);
    if (unorderedItem || orderedItem) {
      flushParagraph();
      const ordered = Boolean(orderedItem);
      if (listItems.length > 0 && listOrdered !== ordered) flushList();
      listOrdered = ordered;
      listItems.push(cleanMarkdown((unorderedItem ?? orderedItem)![1]));
      continue;
    }

    flushList();
    const headingMatch = line.match(/^\*\*(.+)\*\*$/);
    if (headingMatch) {
      flushParagraph();
      const text = cleanMarkdown(headingMatch[1]);
      const baseId = slugify(text);
      const occurrence = (headingCounts.get(baseId) ?? 0) + 1;
      headingCounts.set(baseId, occurrence);
      current.blocks.push({
        type: "heading",
        text,
        id: occurrence === 1 ? baseId : `${baseId}-${occurrence}`,
      });
      continue;
    }

    paragraphLines.push(line);
  }

  flushArticle();

  const duplicateSlugs = new Set<string>();
  for (const article of articles) {
    if (!article.category || !article.excerpt || duplicateSlugs.has(article.slug)) {
      throw new Error(`Invalid or duplicate blog article: ${article.title}`);
    }
    duplicateSlugs.add(article.slug);
  }

  return articles;
}

const articles = parseArticles(readFileSync(sourcePath, "utf8"));

export function getBlogArticles(): BlogArticle[] {
  return articles;
}

export function getBlogArticle(slug: string): BlogArticle | undefined {
  return articles.find((article) => article.slug === slug);
}
