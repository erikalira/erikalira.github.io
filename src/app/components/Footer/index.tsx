import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import type { Locale } from "@/app/data/portfolio";
import { portfolioCopy } from "@/app/data/portfolio";

export default function Footer({ locale }: { locale: Locale }) {
  const copy = portfolioCopy[locale];

  return (
    <footer
      id="contact"
      className="border-t border-border px-4 py-12 md:px-12 lg:px-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-3xl font-bold text-foreground">
            {copy.contactTitle}
          </h2>
          <p className="text-base font-normal leading-7 text-muted">
            {copy.contactBody}
          </p>
        </div>

        <div className="flex gap-3 text-2xl">
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/erikalira/"
            aria-label="LinkedIn"
            className="text-muted transition hover:text-accent-strong"
          >
            <FaLinkedin />
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://github.com/erikalira"
            aria-label="GitHub"
            className="text-muted transition hover:text-accent-strong"
          >
            <FaGithub />
          </Link>
        </div>
      </div>
    </footer>
  );
}
