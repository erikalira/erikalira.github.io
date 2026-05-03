import { existsSync, readFileSync } from "fs";
import Link from "next/link";
import { join } from "path";
import CvMarkdown from "@/app/components/CvMarkdown";
import { latexToMarkdown } from "@/app/components/CvMarkdown/latexToMarkdown";

const cvPath = join(process.cwd(), "public", "cv_erika_lira.tex");
const pdfPath = join(process.cwd(), "public", "cv_erika_lira.pdf");

export const metadata = {
  title: "CV | Erika Lira",
  description: "Currículo web de Erika Lira.",
};

export default function CvPage() {
  const latex = readFileSync(cvPath, "utf8");
  const markdown = latexToMarkdown(latex);
  const hasPdf = existsSync(pdfPath);

  return (
    <main className="px-4 py-12 md:px-12 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-col gap-3 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              href="/pt"
              className="text-sm text-muted transition hover:text-accent-strong"
            >
              Voltar ao portfólio
            </Link>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent-strong">
              Currículo web
            </p>
          </div>

          {hasPdf ? (
            <Link
              href="/cv_erika_lira.pdf"
              target="_blank"
              className="inline-flex w-fit items-center justify-center border border-border bg-panel-raised/70 px-4 py-2 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent-strong"
            >
              Baixar PDF
            </Link>
          ) : null}
        </div>

        <CvMarkdown markdown={markdown} />
      </div>
    </main>
  );
}
