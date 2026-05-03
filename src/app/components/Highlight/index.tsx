import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Emoji from "../../../../public/emoji.webp";
import type { Locale } from "@/app/data/portfolio";
import { portfolioCopy } from "@/app/data/portfolio";

export default function Highlight({ locale }: { locale: Locale }) {
  const copy = portfolioCopy[locale];

  return (
    <section
      id="about"
      className="px-4 pb-14 pt-12 md:px-12 lg:px-24 lg:pb-20 lg:pt-16"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="space-y-7">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-strong">
              {copy.heroEyebrow}
            </p>
            <h1 className="max-w-4xl text-4xl font-black leading-tight text-foreground md:text-6xl">
              {copy.heroTitle}
            </h1>
          </div>

          <p className="max-w-3xl text-lg font-normal leading-8 text-muted">
            {copy.heroBody}
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href={`/${locale}#projects`}
              className="inline-flex items-center justify-center bg-accent px-5 py-3 text-sm font-semibold text-gray-950 shadow-card transition hover:bg-accent-strong"
            >
              {copy.primaryCta}
            </Link>
            <Link
              href="https://github.com/erikalira"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-border bg-panel/70 px-5 py-3 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent-strong"
            >
              <FaGithub aria-hidden="true" />
              {copy.githubCta}
            </Link>
            <Link
              href="https://www.linkedin.com/in/erikalira/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-border bg-panel/70 px-5 py-3 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent-strong"
            >
              <FaLinkedin aria-hidden="true" />
              {copy.linkedinCta}
            </Link>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <Image
            src={Emoji}
            height={360}
            width={360}
            alt="Erika Lira"
            className="h-auto w-full max-w-[280px] md:max-w-[360px]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
