import type { Metadata } from "next";
import Link from "next/link";
import { getAlternateLanguages } from "@/app/seo";

const localeRedirectScript = `
(() => {
  const localeMatch = document.cookie.match(/(?:^|; )NEXT_LOCALE=(pt|en)(?:;|$)/);
  const locale = localeMatch?.[1] ?? (navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en");

  window.location.replace("/" + locale);
})();
`;

export const metadata: Metadata = {
  title: "Erika Lira",
  description:
    "Software engineering portfolio focused on fullstack, backend, cloud, DevOps, and applied AI.",
  alternates: {
    canonical: "/",
    languages: getAlternateLanguages(),
  },
};

export default function RootPage() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: localeRedirectScript }} />
      <noscript>
        <main className="flex min-h-screen items-center justify-center gap-4 bg-app-canvas p-6 text-foreground">
          <Link className="font-semibold text-accent-strong" href="/pt">
            Português
          </Link>
          <Link className="font-semibold text-accent-strong" href="/en">
            English
          </Link>
        </main>
      </noscript>
    </>
  );
}
