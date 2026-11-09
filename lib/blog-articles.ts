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
  blocks: ArticleBlock[];
  readMinutes: number;
}

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
      current = {
        number,
        title,
        slug: slugify(title),
        category,
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
