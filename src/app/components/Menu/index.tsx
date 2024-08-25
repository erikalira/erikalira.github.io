"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { LuUser2 } from "react-icons/lu";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function Menu() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex p-4 top-0 left-0 right-0 justify-between fixed bg-white dark:bg-gray-950 shadow-md z-50 w-full lg:px-48 md:px-24">
      <div className="content-center text-2xl hover:text-[#ffc200]">
        <Link href="/" className="flex gap-2 items-center">
          <LuUser2 /> Erika
        </Link>
      </div>
      <div className="hidden sm:flex">
        <div className="m-2 text-gray-400 hover:text-[#ffc200]">
          <Link href="/#projects">Projects</Link>
        </div>
        <div className="m-2 text-gray-400 hover:text-[#ffc200]">
          <Link href="/#contact">Contact</Link>
        </div>
        <div className="m-2 text-gray-400 hover:text-[#ffc200]">
          <Link href="/doc">Documentation</Link>
        </div>
      </div>
      <div className="flex content-center">
        <button onClick={toggleDarkMode} aria-label="Color Mode">
          {isDarkMode ? (
            <div className="flex items-center gap-2">
              <MdOutlineLightMode />{" "}
              <div className="hidden md:flex">Light Mode</div>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <MdOutlineDarkMode />{" "}
              <div className="hidden md:flex">Dark Mode</div>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}
