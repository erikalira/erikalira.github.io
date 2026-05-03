import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub, FaLock } from "react-icons/fa";
import type { Locale, Project } from "@/app/data/portfolio";
import { portfolioCopy, projectSections } from "@/app/data/portfolio";

const toneClasses: Record<Project["visualTone"], string> = {
  amber:
    "border-[#ffc200]/50 bg-[#ffc200]/15 text-[#5f4700] dark:text-[#ffe08a]",
  emerald:
    "border-emerald-400/50 bg-emerald-500/15 text-emerald-900 dark:text-emerald-200",
  cyan: "border-cyan-400/50 bg-cyan-500/15 text-cyan-900 dark:text-cyan-200",
  rose: "border-rose-400/50 bg-rose-500/15 text-rose-900 dark:text-rose-200",
  slate:
    "border-slate-400/50 bg-slate-500/15 text-slate-900 dark:text-slate-200",
  violet:
    "border-violet-400/50 bg-violet-500/15 text-violet-900 dark:text-violet-200",
};

function ProjectVisual({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-900">
        <Image
          src={project.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative aspect-[16/10] overflow-hidden border ${toneClasses[project.visualTone]}`}
    >
      <div className="absolute inset-0 grid grid-cols-6 gap-px opacity-25">
        {Array.from({ length: 24 }).map((_, index) => (
          <span key={index} className="border border-current" />
        ))}
      </div>
      <div className="relative flex h-full flex-col justify-between p-5">
        <div className="text-xs font-semibold uppercase tracking-[0.18em]">
          {project.status}
        </div>
        <div>
          <div className="text-3xl font-black leading-none md:text-4xl">
            {project.title.slice(0, 2).toUpperCase()}
          </div>
          <div className="mt-3 h-1 w-16 bg-current" />
        </div>
      </div>
    </div>
  );
}

function ProjectLinks({
  project,
  locale,
}: {
  project: Project;
  locale: Locale;
}) {
  const labels = portfolioCopy[locale].cardLinks;

  return (
    <div className="flex flex-wrap gap-3 pt-2">
      {project.githubLink ? (
        <Link
          href={project.githubLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 border border-gray-900 px-3 py-2 text-sm font-semibold text-gray-950 transition hover:border-[#ffc200] hover:text-[#b88900] dark:border-white dark:text-white dark:hover:border-[#ffc200] dark:hover:text-[#ffc200]"
        >
          <FaGithub aria-hidden="true" />
          {labels.github}
        </Link>
      ) : null}

      {project.publicLink ? (
        <Link
          href={project.publicLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-[#ffc200] px-3 py-2 text-sm font-semibold text-gray-950 transition hover:bg-[#e0a900]"
        >
          <FaExternalLinkAlt aria-hidden="true" />
          {labels.public}
        </Link>
      ) : null}

      {project.privateCase ? (
        <span className="inline-flex items-center gap-2 border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-500 dark:border-gray-700 dark:text-gray-300">
          <FaLock aria-hidden="true" />
          {labels.private}
        </span>
      ) : null}
    </div>
  );
}

function ProjectCard({
  project,
  locale,
}: {
  project: Project;
  locale: Locale;
}) {
  return (
    <article
      className={`grid gap-5 border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950 ${
        project.featured ? "lg:grid-cols-[1.1fr_1fr] lg:p-6" : ""
      }`}
    >
      <ProjectVisual project={project} />
      <div className="flex min-w-0 flex-col justify-between gap-5">
        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b88900] dark:text-[#ffc200]">
              {project.status}
            </p>
            <h3 className="mt-2 text-2xl font-bold leading-tight text-gray-950 dark:text-white">
              {project.title}
            </h3>
          </div>
          <p className="text-base font-normal leading-7 text-gray-700 dark:text-gray-200">
            {project.description}
          </p>
          <p className="text-sm font-normal leading-6 text-gray-600 dark:text-gray-300">
            {project.impact}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="border border-gray-200 px-2.5 py-1 text-xs font-semibold text-gray-600 dark:border-gray-800 dark:text-gray-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <ProjectLinks project={project} locale={locale} />
      </div>
    </article>
  );
}

export default function Projects({ locale }: { locale: Locale }) {
  const sections = projectSections[locale];

  return (
    <section id="projects" className="px-4 py-16 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl space-y-16">
        {sections.map((section) => (
          <div key={section.id} className="space-y-6">
            <div className="max-w-3xl space-y-3">
              <h2 className="text-3xl font-bold leading-tight text-gray-950 dark:text-white md:text-4xl">
                {section.title}
              </h2>
              <p className="text-base font-normal leading-7 text-gray-600 dark:text-gray-300">
                {section.intro}
              </p>
            </div>

            <div
              className={
                section.id === "featured"
                  ? "grid gap-5"
                  : "grid gap-5 md:grid-cols-2 xl:grid-cols-3"
              }
            >
              {section.projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  locale={locale}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
