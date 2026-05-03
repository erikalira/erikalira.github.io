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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b88900] dark:text-[#ffc200]">
              {copy.heroEyebrow}
            </p>
            <h1 className="max-w-4xl text-4xl font-black leading-tight text-gray-950 dark:text-white md:text-6xl">
              {copy.heroTitle}
            </h1>
          </div>

          <p className="max-w-3xl text-lg font-normal leading-8 text-gray-700 dark:text-gray-200">
            {copy.heroBody}
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href={`/${locale}#projects`}
              className="inline-flex items-center justify-center bg-[#ffc200] px-5 py-3 text-sm font-semibold text-gray-950 transition hover:bg-[#e0a900]"
            >
              {copy.primaryCta}
            </Link>
            <Link
              href="https://github.com/erikalira"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-950 transition hover:border-[#ffc200] hover:text-[#b88900] dark:border-white dark:text-white dark:hover:border-[#ffc200] dark:hover:text-[#ffc200]"
            >
              <FaGithub aria-hidden="true" />
              {copy.githubCta}
            </Link>
            <Link
              href="https://www.linkedin.com/in/erikalira/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-950 transition hover:border-[#ffc200] hover:text-[#b88900] dark:border-white dark:text-white dark:hover:border-[#ffc200] dark:hover:text-[#ffc200]"
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
