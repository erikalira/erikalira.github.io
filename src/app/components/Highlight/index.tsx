"use client";

import Image from "next/image";
import Link from "next/link";
import Emoji from "../../../../public/emoji.webp";
import { useEffect, useState } from "react";

export default function Highlight() {
  const texts = ["Erika Lira", "Web Dev", "Data Science Student"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsVisible(true);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div
      id="about"
      className="flex flex-col lg:flex-row m-4 pt-16 lg:px-48 justify-between"
    >
      <div className="m-4 flex-1">
        <div className="flex h-full flex-col justify-center gap-6">
          <div className="md:flex text-4xl items-center">
            <div className="mr-4 flex items-center min-w-[200px]">
              Hello, I&apos;m
            </div>
            <div
              className={`text-[#ffc200] flex items-center min-h-[120px] min-w-[200px] transition-opacity duration-500 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              {texts[currentTextIndex]}
            </div>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            Software Engineer focused on fullstack development, backend,
            cloud, DevOps, APIs, CI/CD, and production-ready web applications.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/#projects"
              className="inline-flex items-center justify-center bg-[#ffc200] px-5 py-3 text-sm font-semibold text-gray-950 transition hover:bg-[#e0a900]"
            >
              View projects
            </Link>
            <Link
              href="/pt/cv"
              className="inline-flex items-center justify-center border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-950 transition hover:border-[#ffc200] hover:text-[#b88900] dark:border-white dark:text-white dark:hover:border-[#ffc200] dark:hover:text-[#ffc200]"
            >
              View CV
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-shrink-0">
        <Image
          src={Emoji}
          height={384}
          width={384}
          alt="Picture of the author"
          className="max-w-[512px] h-full"
          priority
        />
      </div>
    </div>
  );
}
