import type { Metadata } from "next";
import HomePage from "@/app/components/HomePage";
import { getHomeMetadata, getLocale } from "@/app/seo";

type LocalePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;

  return getHomeMetadata(getLocale(locale));
}

export default async function LocaleHomePage({ params }: LocalePageProps) {
  const { locale } = await params;

  return <HomePage locale={getLocale(locale)} />;
}
