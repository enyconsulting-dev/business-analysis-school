import type { ArticleBlock } from "@/lib/blog-articles";

interface ArticleContentProps {
  blocks: ArticleBlock[];
}

function renderInline(text: string) {
  return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }
    return part;
  });
}

export default function ArticleContent({ blocks }: ArticleContentProps) {
  return (
    <div className="article-content">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          return (
            <h2 id={block.id} key={`${block.text}-${index}`}>
              {renderInline(block.text)}
            </h2>
          );
        }

        if (block.type === "list") {
          const List = block.ordered ? "ol" : "ul";
          return (
            <List key={index}>
              {block.items.map((item, itemIndex) => (
                <li key={`${itemIndex}-${item}`}>{renderInline(item)}</li>
              ))}
            </List>
          );
        }

        return <p key={index}>{renderInline(block.text)}</p>;
      })}
    </div>
  );
}
