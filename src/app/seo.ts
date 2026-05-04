import type { Metadata } from "next";
import type { Locale } from "@/app/data/portfolio";

export const locales = ["pt", "en"] as const satisfies readonly Locale[];

export const siteUrl = new URL("https://erikalira.github.io");

export const defaultLocale: Locale = "en";

export const localeConfig = {
  pt: {
    htmlLang: "pt-BR",
    ogLocale: "pt_BR",
    alternateLocale: "en_US",
    homeTitle: "Engenharia de Software",
    homeOgTitle: "Erika Lira | Engenharia de Software",
    homeDescription:
      "Portfólio de Erika Lira, Software Engineer com foco em fullstack, backend, cloud, DevOps e IA aplicada.",
    cvDescription: "Currículo web de Erika Lira.",
  },
  en: {
    htmlLang: "en",
    ogLocale: "en_US",
    alternateLocale: "pt_BR",
    homeTitle: "Software Engineering",
    homeOgTitle: "Erika Lira | Software Engineering",
    homeDescription:
      "Erika Lira's portfolio, Software Engineer focused on fullstack, backend, cloud, DevOps, and applied AI.",
    cvDescription: "Erika Lira's web resume.",
  },
} as const;

export const previewImage = {
  url: "/emoji.webp",
  width: 512,
  height: 512,
  alt: "Erika Lira",
};

export function isLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getLocale(locale: string): Locale {
  return isLocale(locale) ? locale : defaultLocale;
}

export function getAlternateLanguages(path = "") {
  return {
    en: `/en${path}`,
    "pt-BR": `/pt${path}`,
    "x-default": `/en${path}`,
  };
}

export const sharedMetadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Erika Lira",
    template: "%s | Erika Lira",
  },
  applicationName: "Erika Lira Portfolio",
  authors: [{ name: "Erika Lira", url: siteUrl }],
  creator: "Erika Lira",
  publisher: "Erika Lira",
  icons: {
    icon: [{ url: "/emoji.webp", type: "image/webp" }],
    shortcut: [{ url: "/emoji.webp", type: "image/webp" }],
    apple: [{ url: "/emoji.webp", type: "image/webp" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export function getHomeMetadata(locale: Locale): Metadata {
  const config = localeConfig[locale];

  return {
    ...sharedMetadata,
    title: {
      absolute: config.homeOgTitle,
    },
    description: config.homeDescription,
    alternates: {
      canonical: `/${locale}`,
      languages: getAlternateLanguages(),
    },
    openGraph: {
      type: "website",
      url: `/${locale}`,
      siteName: "Erika Lira",
      locale: config.ogLocale,
      alternateLocale: [config.alternateLocale],
      title: config.homeOgTitle,
      description: config.homeDescription,
    },
    twitter: {
      card: "summary",
      title: config.homeOgTitle,
      description: config.homeDescription,
    },
  };
}

export function getCvMetadata(locale: Locale): Metadata {
  const config = localeConfig[locale];

  return {
    ...sharedMetadata,
    title: "CV",
    description: config.cvDescription,
    alternates: {
      canonical: `/${locale}/cv`,
      languages: getAlternateLanguages("/cv"),
    },
    openGraph: {
      type: "website",
      url: `/${locale}/cv`,
      siteName: "Erika Lira",
      locale: config.ogLocale,
      alternateLocale: [config.alternateLocale],
      title: "CV | Erika Lira",
      description: config.cvDescription,
    },
    twitter: {
      card: "summary",
      title: "CV | Erika Lira",
      description: config.cvDescription,
    },
  };
}
