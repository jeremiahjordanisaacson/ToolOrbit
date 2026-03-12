"use client";

import { useState, useMemo } from "react";

function parseMarkdown(md: string): string {
  let html = md;

  // Code blocks (fenced)
  html = html.replace(
    /```(\w*)\n([\s\S]*?)```/g,
    (_, lang, code) =>
      `<pre class="rounded-lg bg-gray-900 p-4 overflow-x-auto text-sm leading-relaxed"><code class="text-gray-100${lang ? ` language-${lang}` : ""}">${escapeHtml(code.trimEnd())}</code></pre>`
  );

  // Blockquotes (process before other line-level elements)
  html = html.replace(
    /^(>\s?.+(?:\n>\s?.+)*)/gm,
    (block) => {
      const inner = block.replace(/^>\s?/gm, "");
      return `<blockquote class="border-l-4 border-primary-300 pl-4 italic text-gray-600 my-2">${inner}</blockquote>`;
    }
  );

  // Headings
  html = html.replace(
    /^######\s+(.+)$/gm,
    '<h6 class="text-sm font-semibold text-gray-900 mt-5 mb-2">$1</h6>'
  );
  html = html.replace(
    /^#####\s+(.+)$/gm,
    '<h5 class="text-sm font-bold text-gray-900 mt-5 mb-2">$1</h5>'
  );
  html = html.replace(
    /^####\s+(.+)$/gm,
    '<h4 class="text-base font-bold text-gray-900 mt-5 mb-2">$1</h4>'
  );
  html = html.replace(
    /^###\s+(.+)$/gm,
    '<h3 class="text-lg font-bold text-gray-900 mt-6 mb-2">$1</h3>'
  );
  html = html.replace(
    /^##\s+(.+)$/gm,
    '<h2 class="text-xl font-bold text-gray-900 mt-6 mb-3">$1</h2>'
  );
  html = html.replace(
    /^#\s+(.+)$/gm,
    '<h1 class="text-2xl font-bold text-gray-900 mt-6 mb-3">$1</h1>'
  );

  // Horizontal rules
  html = html.replace(
    /^(?:---|\*\*\*|___)\s*$/gm,
    '<hr class="my-6 border-gray-300" />'
  );

  // Unordered lists
  html = html.replace(
    /^(?:[*\-+]\s+.+\n?)+/gm,
    (block) => {
      const items = block
        .trim()
        .split("\n")
        .map((line) => `<li class="ml-5 list-disc text-gray-700">${line.replace(/^[*\-+]\s+/, "")}</li>`)
        .join("");
      return `<ul class="my-2 space-y-1">${items}</ul>`;
    }
  );

  // Ordered lists
  html = html.replace(
    /^(?:\d+\.\s+.+\n?)+/gm,
    (block) => {
      const items = block
        .trim()
        .split("\n")
        .map((line) => `<li class="ml-5 list-decimal text-gray-700">${line.replace(/^\d+\.\s+/, "")}</li>`)
        .join("");
      return `<ol class="my-2 space-y-1">${items}</ol>`;
    }
  );

  // Images (before links)
  html = html.replace(
    /!\[([^\]]*)\]\(([^)]+)\)/g,
    '<img src="$2" alt="$1" class="max-w-full rounded my-2" />'
  );

  // Links
  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" class="text-primary-700 underline hover:text-primary-600" target="_blank" rel="noopener noreferrer">$1</a>'
  );

  // Bold + Italic
  html = html.replace(
    /\*\*\*(.+?)\*\*\*/g,
    '<strong><em>$1</em></strong>'
  );
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(
    /(?<![*\w])\*([^*\n]+?)\*(?![*\w])/g,
    "<em>$1</em>"
  );

  // Inline code (after code blocks)
  html = html.replace(
    /`([^`]+)`/g,
    '<code class="rounded bg-gray-100 px-1.5 py-0.5 text-sm font-mono text-pink-600">$1</code>'
  );

  // Paragraphs — wrap remaining loose lines
  html = html
    .split("\n\n")
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      if (/^<(?:h[1-6]|ul|ol|pre|blockquote|hr|div|table|img)/.test(trimmed))
        return trimmed;
      return `<p class="my-2 leading-relaxed text-gray-700">${trimmed.replace(/\n/g, "<br />")}</p>`;
    })
    .join("\n");

  return html;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const DEFAULT_MD = `# Markdown Preview

This is a **live preview** of your *Markdown* content.

## Features

- Headings (h1-h6)
- **Bold** and *italic* text
- [Links](https://example.com)
- Inline \`code\` and code blocks
- Lists (ordered & unordered)
- Blockquotes
- Horizontal rules

> This is a blockquote. It can span multiple lines.

### Code Block

\`\`\`js
function hello() {
  console.log("Hello, world!");
}
\`\`\`

---

1. First item
2. Second item
3. Third item
`;

export default function MarkdownPreview() {
  const [markdown, setMarkdown] = useState(DEFAULT_MD);

  const html = useMemo(() => parseMarkdown(markdown), [markdown]);

  return (
    <div className="mx-auto max-w-6xl space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Editor */}
        <div className="flex flex-col">
          <label
            htmlFor="md-input"
            className="mb-2 text-sm font-semibold text-gray-700"
          >
            Markdown
          </label>
          <textarea
            id="md-input"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            className="min-h-[500px] flex-1 rounded-xl border border-gray-300 bg-white px-4 py-3 font-mono text-sm leading-relaxed shadow-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
            spellCheck={false}
          />
        </div>

        {/* Preview */}
        <div className="flex flex-col">
          <span className="mb-2 text-sm font-semibold text-gray-700">
            Preview
          </span>
          <div
            className="min-h-[500px] flex-1 overflow-y-auto rounded-xl border border-gray-200 bg-white px-6 py-4 shadow-sm"
            dangerouslySetInnerHTML={{ __html: html }}
            aria-live="polite"
            aria-label="Markdown preview"
          />
        </div>
      </div>
    </div>
  );
}
