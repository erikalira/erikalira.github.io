import Link from "next/link";

export const metadata = {
  title: "CV | Erika Lira",
  description: "Erika Lira's web resume.",
};

export default function EnglishCvPage() {
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
          The Portuguese version is already available while the English version
          is being translated and reviewed.
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
