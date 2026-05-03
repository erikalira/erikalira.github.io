import { NextRequest, NextResponse } from "next/server";
import type { Locale } from "@/app/data/portfolio";

const locales: Locale[] = ["pt", "en"];
const localeCookieName = "NEXT_LOCALE";

function isLocale(value: string | undefined): value is Locale {
  return value === "pt" || value === "en";
}

function hasLocale(pathname: string) {
  return locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
}

function detectLocale(request: NextRequest): Locale {
  const cookieLocale = request.cookies.get(localeCookieName)?.value;

  if (isLocale(cookieLocale)) {
    return cookieLocale;
  }

  const acceptedLanguages = request.headers
    .get("accept-language")
    ?.toLowerCase();

  if (acceptedLanguages?.includes("pt")) {
    return "pt";
  }

  return "en";
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (hasLocale(pathname)) {
    return NextResponse.next();
  }

  const locale = detectLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
