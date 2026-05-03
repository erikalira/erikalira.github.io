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
        <div className="mb-8 flex flex-col gap-3 border-b border-gray-200 pb-6 dark:border-gray-800 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              href="/"
              className="text-sm text-gray-500 hover:text-[#ffc200] dark:text-gray-400"
            >
              Voltar ao portfólio
            </Link>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#b88900] dark:text-[#ffc200]">
              Currículo web
            </p>
          </div>

          {hasPdf ? (
            <Link
              href="/cv_erika_lira.pdf"
              target="_blank"
              className="inline-flex w-fit items-center justify-center border border-gray-900 px-4 py-2 text-sm font-semibold text-gray-950 transition hover:border-[#ffc200] hover:text-[#b88900] dark:border-white dark:text-white dark:hover:border-[#ffc200] dark:hover:text-[#ffc200]"
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
