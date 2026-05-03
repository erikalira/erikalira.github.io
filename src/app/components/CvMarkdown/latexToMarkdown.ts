function stripDocumentShell(latex: string) {
  const documentMatch = latex.match(/\\begin\{document\}([\s\S]*?)\\end\{document\}/);

  return documentMatch?.[1] ?? latex;
}

function convertTabularBlocks(content: string) {
  return content.replace(
    /\\begin\{tabularx\}\{\\textwidth\}\{@\{\}l X@\{\}\}([\s\S]*?)\\end\{tabularx\}/g,
    (_, tableContent: string) => {
      return tableContent
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter(Boolean)
        .map((line) => {
          const row = line.replace(/\\\\$/, "").trim();
          const match = row.match(/\\textbf\{([^}]+)\}\s*&\s*(.+)/);

          if (!match) {
            return row;
          }

          return `- **${match[1]}:** ${match[2].trim()}`;
        })
        .join("\n");
    }
  );
}

function convertInlineLatex(content: string) {
  return content
    .replace(/\\href\{([^}]+)\}\{([^}]+)\}/g, "[$2]($1)")
    .replace(/\\textbf\{([^}]+)\}/g, "**$1**")
    .replace(/\\textit\{([^}]+)\}/g, "$1")
    .replace(/\\&/g, "&")
    .replace(/\\textbar/g, "|")
    .replace(/\\;/g, " ")
    .replace(/--/g, "-")
    .replace(/\\hfill/g, " | ")
    .replace(/\\\\/g, "\n")
    .replace(/[ \t]+/g, " ")
    .trim();
}

export function latexToMarkdown(latex: string) {
  let content = stripDocumentShell(latex)
    .split(/\r?\n/)
    .filter((line) => !line.trim().startsWith("%"))
    .join("\n");

  content = convertTabularBlocks(content);

  content = content
    .replace(/\{\\LARGE\s+\\textbf\{([^}]+)\}\}/g, "# $1")
    .replace(/\\section\*\{([^}]+)\}/g, "\n## $1\n")
    .replace(
      /\\role\{([^}]+)\}\{([^}]+)\}\{([^}]+)\}\{([^}]+)\}/g,
      "\n### $1\n\n**$3** | $4 | $2\n"
    )
    .replace(/\\begin\{itemize\}/g, "")
    .replace(/\\end\{itemize\}/g, "")
    .replace(/\\item\s+/g, "- ")
    .replace(/\\vspace\{[^}]+\}/g, "")
    .replace(
      /^\\textbf\{([^}]+)\}\s*\\hfill\s*(.+)$/gm,
      "\n### $1\n\n$2"
    );

  content = convertInlineLatex(content);

  return content
    .split(/\r?\n/)
    .map((line) => line.trim())
    .join("\n")
    .replace(/\n{3,}/g, "\n\n");
}
