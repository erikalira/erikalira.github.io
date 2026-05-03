import Link from "next/link";

export const metadata = {
  title: "CV | Erika Lira",
  description: "Erika Lira's web resume.",
};

export default function EnglishCvPage() {
  return (
    <main className="px-4 py-12 md:px-12 lg:px-24">
      <section className="mx-auto max-w-3xl space-y-5">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b88900] dark:text-[#ffc200]">
          Web resume
        </p>
        <h1 className="text-4xl font-bold text-gray-950 dark:text-white">
          English CV coming soon
        </h1>
        <p className="text-lg leading-8 text-gray-700 dark:text-gray-200">
          The Portuguese version is already available while the English version
          is being translated and reviewed.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/pt/cv"
            className="inline-flex items-center justify-center bg-[#ffc200] px-5 py-3 text-sm font-semibold text-gray-950 transition hover:bg-[#e0a900]"
          >
            View Portuguese CV
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-950 transition hover:border-[#ffc200] hover:text-[#b88900] dark:border-white dark:text-white dark:hover:border-[#ffc200] dark:hover:text-[#ffc200]"
          >
            Back to portfolio
          </Link>
        </div>
      </section>
    </main>
  );
}
