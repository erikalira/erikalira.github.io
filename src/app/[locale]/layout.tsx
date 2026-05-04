import type { ReactNode } from "react";
import Menu from "@/app/components/Menu";
import { getLocale, localeConfig, locales, sharedMetadata } from "@/app/seo";
import "../globals.css";

const themeScript = `
(() => {
  try {
    const storedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle(
      "dark",
      storedTheme ? storedTheme === "dark" : systemPrefersDark
    );
  } catch {
    document.documentElement.classList.remove("dark");
  }
})();
`;

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export const metadata = sharedMetadata;

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale: routeLocale } = await params;
  const locale = getLocale(routeLocale);

  return (
    <html lang={localeConfig[locale].htmlLang} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <main className="min-h-screen bg-app-canvas pt-20 text-foreground transition-colors duration-300">
          <div className="w-full">
            <Menu />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
