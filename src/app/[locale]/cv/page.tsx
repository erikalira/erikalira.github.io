import { existsSync, readFileSync } from "fs";
import Link from "next/link";
import type { Metadata } from "next";
import { join } from "path";
import CvMarkdown from "@/app/components/CvMarkdown";
import { latexToMarkdown } from "@/app/components/CvMarkdown/latexToMarkdown";
import { getCvMetadata, getLocale } from "@/app/seo";

const cvPath = join(process.cwd(), "public", "cv_erika_lira.tex");
const pdfPath = join(process.cwd(), "public", "cv_erika_lira.pdf");

type CvPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: CvPageProps): Promise<Metadata> {
  const { locale } = await params;

  return getCvMetadata(getLocale(locale));
}

export default async function CvPage({ params }: CvPageProps) {
  const { locale: routeLocale } = await params;
  const locale = getLocale(routeLocale);

  if (locale === "en") {
    return (
      <main className="px-4 py-12 md:px-12 lg:px-24">
        <section className="mx-auto max-w-3xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-strong">
            Web resume
          </p>
          <h1 className="text-4xl font-bold text-foreground">
            English CV coming soon
          </h1>
          <p className="text-lg leading-8 text-muted">
            The Portuguese version is already available while the English
            version is being translated and reviewed.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/pt/cv"
              className="inline-flex items-center justify-center bg-accent px-5 py-3 text-sm font-semibold text-gray-950 transition hover:bg-accent-strong"
            >
              View Portuguese CV
            </Link>
            <Link
              href="/en"
              className="inline-flex items-center justify-center border border-border bg-panel-raised/70 px-5 py-3 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent-strong"
            >
              Back to portfolio
            </Link>
          </div>
        </section>
      </main>
    );
  }

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
