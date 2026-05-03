import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import type { Locale } from "@/app/data/portfolio";

function isLocale(value: string | undefined): value is Locale {
  return value === "pt" || value === "en";
}

export default async function RootPage() {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get("NEXT_LOCALE")?.value;

  if (isLocale(cookieLocale)) {
    redirect(`/${cookieLocale}`);
  }

  const headerStore = await headers();
  const acceptedLanguages = headerStore.get("accept-language")?.toLowerCase();

  redirect(acceptedLanguages?.includes("pt") ? "/pt" : "/en");
}
