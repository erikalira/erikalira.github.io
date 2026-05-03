import Link from "next/link";
import type { ReactNode } from "react";

type MarkdownBlock =
  | { type: "heading"; level: 1 | 2 | 3; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

function parseMarkdown(markdown: string) {
  const blocks: MarkdownBlock[] = [];
  const lines = markdown.split(/\r?\n/);
  let paragraph: string[] = [];
  let listItems: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length > 0) {
      blocks.push({ type: "paragraph", text: paragraph.join(" ") });
      paragraph = [];
    }
  };

  const flushList = () => {
    if (listItems.length > 0) {
      blocks.push({ type: "list", items: listItems });
      listItems = [];
    }
  };

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph();
      flushList();
      continue;
    }

    if (trimmed.startsWith("### ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "heading", level: 3, text: trimmed.slice(4) });
      continue;
    }

    if (trimmed.startsWith("## ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "heading", level: 2, text: trimmed.slice(3) });
      continue;
    }

    if (trimmed.startsWith("# ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "heading", level: 1, text: trimmed.slice(2) });
      continue;
    }

    if (trimmed.startsWith("- ")) {
      flushParagraph();
      listItems.push(trimmed.slice(2));
      continue;
    }

    flushList();
    paragraph.push(trimmed);
  }

  flushParagraph();
  flushList();

  return blocks;
}

function renderInline(text: string) {
  const nodes: ReactNode[] = [];
  const pattern = /(\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\)|\*([^*]+)\*)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    if (match[2]) {
      nodes.push(
        <strong key={`${match.index}-strong`} className="font-semibold">
          {match[2]}
        </strong>
      );
    }

    if (match[3] && match[4]) {
      const href = match[4];
      const isExternal = href.startsWith("http");

      nodes.push(
        <Link
          key={`${match.index}-link`}
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noreferrer" : undefined}
          className="text-[#b88900] underline decoration-[#ffc200]/50 underline-offset-4 hover:text-[#ffc200] dark:text-[#ffc200]"
        >
          {match[3]}
        </Link>
      );
    }

    if (match[5]) {
      nodes.push(
        <em key={`${match.index}-em`} className="italic">
          {match[5]}
        </em>
      );
    }

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

export default function CvMarkdown({ markdown }: { markdown: string }) {
  const blocks = parseMarkdown(markdown);

  return (
    <article className="space-y-5 text-base leading-7 text-gray-700 dark:text-gray-200">
      {blocks.map((block, index) => {
        if (block.type === "heading" && block.level === 1) {
          return (
            <h1
              key={index}
              className="text-4xl font-bold leading-tight text-gray-950 dark:text-white md:text-5xl"
            >
              {renderInline(block.text)}
            </h1>
          );
        }

        if (block.type === "heading" && block.level === 2) {
          return (
            <h2
              key={index}
              className="border-b border-gray-200 pb-2 pt-7 text-2xl font-bold text-gray-950 dark:border-gray-800 dark:text-white"
            >
              {renderInline(block.text)}
            </h2>
          );
        }

        if (block.type === "heading") {
          return (
            <h3
              key={index}
              className="pt-3 text-xl font-bold text-gray-950 dark:text-white"
            >
              {renderInline(block.text)}
            </h3>
          );
        }

        if (block.type === "list") {
          return (
            <ul key={index} className="space-y-2 pl-5">
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex} className="list-disc pl-1">
                  {renderInline(item)}
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p key={index} className="max-w-4xl">
            {renderInline(block.text)}
          </p>
        );
      })}
    </article>
  );
}
