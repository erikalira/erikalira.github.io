"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuUser2 } from "react-icons/lu";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import type { Locale } from "@/app/data/portfolio";

const darkModeQuery = "(prefers-color-scheme: dark)";
const themeStorageKey = "theme";

const navCopy = {
  pt: {
    projects: "Projetos",
    contact: "Contato",
    colorMode: "Modo de cor",
    light: "Claro",
    dark: "Escuro",
  },
  en: {
    projects: "Projects",
    contact: "Contact",
    colorMode: "Color mode",
    light: "Light",
    dark: "Dark",
  },
};

function subscribeToDarkMode(callback: () => void) {
  const mediaQuery = window.matchMedia(darkModeQuery);

  mediaQuery.addEventListener("change", callback);

  return () => mediaQuery.removeEventListener("change", callback);
}

function getDarkModeSnapshot() {
  return window.matchMedia(darkModeQuery).matches;
}

function getServerDarkModeSnapshot() {
  return false;
}

function getLocaleFromPath(pathname: string): Locale {
  return pathname.startsWith("/pt") ? "pt" : "en";
}

function getLocalizedPath(pathname: string, nextLocale: Locale) {
  if (pathname === "/pt" || pathname === "/en") {
    return `/${nextLocale}`;
  }

  if (pathname.startsWith("/pt/") || pathname.startsWith("/en/")) {
    return `/${nextLocale}${pathname.slice(3)}`;
  }

  return `/${nextLocale}`;
}

function rememberLocale(locale: Locale) {
  document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; samesite=lax`;
}

function getStoredThemeOverride() {
  if (typeof window === "undefined") {
    return null;
  }

  const storedTheme = window.localStorage.getItem(themeStorageKey);

  return storedTheme === "dark" || storedTheme === "light"
    ? storedTheme === "dark"
    : null;
}

export default function Menu() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const otherLocale: Locale = locale === "pt" ? "en" : "pt";
  const copy = navCopy[locale];
  const prefersDarkMode = useSyncExternalStore(
    subscribeToDarkMode,
    getDarkModeSnapshot,
    getServerDarkModeSnapshot
  );
  const [darkModeOverride, setDarkModeOverride] = useState<boolean | null>(
    getStoredThemeOverride
  );
  const isDarkMode = darkModeOverride ?? prefersDarkMode;

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
  }, [locale]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    const nextIsDarkMode = !isDarkMode;

    window.localStorage.setItem(
      themeStorageKey,
      nextIsDarkMode ? "dark" : "light"
    );
    setDarkModeOverride(nextIsDarkMode);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-panel/88 shadow-sm backdrop-blur-xl transition-colors duration-300">
      <nav className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4 px-4 py-4 md:px-12 lg:px-24">
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2 text-xl font-bold text-foreground transition hover:text-accent-strong"
        >
          <LuUser2 aria-hidden="true" />
          Erika
        </Link>

        <div className="hidden items-center gap-5 text-sm font-semibold text-muted sm:flex">
          <Link
            href={`/${locale}#projects`}
            className="transition hover:text-accent-strong"
          >
            {copy.projects}
          </Link>
          <Link
            href={`/${locale}#contact`}
            className="transition hover:text-accent-strong"
          >
            {copy.contact}
          </Link>
          <Link
            href="https://github.com/erikalira"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-lg transition hover:text-accent-strong"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/erikalira/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-lg transition hover:text-accent-strong"
          >
            <FaLinkedin />
          </Link>
        </div>

        <div className="flex items-center gap-3 text-sm font-semibold">
          <Link
            href={getLocalizedPath(pathname, otherLocale)}
            hrefLang={otherLocale}
            onClick={() => rememberLocale(otherLocale)}
            className="border border-border bg-panel-raised/70 px-2.5 py-1.5 uppercase text-muted transition hover:border-accent hover:text-accent-strong"
          >
            {otherLocale}
          </Link>

          <button
            onClick={toggleDarkMode}
            aria-label={copy.colorMode}
            className="inline-flex items-center gap-2 text-muted transition hover:text-accent-strong"
          >
            {isDarkMode ? (
              <>
                <MdOutlineLightMode aria-hidden="true" />
                <span className="hidden md:inline">{copy.light}</span>
              </>
            ) : (
              <>
                <MdOutlineDarkMode aria-hidden="true" />
                <span className="hidden md:inline">{copy.dark}</span>
              </>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
