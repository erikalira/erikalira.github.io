"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Menu() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Verifica a preferência do sistema
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
    <div className="flex p-4 top-0 left-0 right-0 justify-between fixed bg-white dark:bg-gray-950 shadow-md z-50 w-full">
      <div className="content-center text-2xl hover:text-yellow-400">
        <Link href="/">Erika</Link>
      </div>
      <div className="hidden lg:flex">
        <div className="m-2 text-gray-400 hover:text-yellow-400 decoration-non">
          <Link href="/#about">About</Link>
        </div>
        <div className="m-2 text-gray-400 hover:text-yellow-400">
          <Link href="/#projects">Projects</Link>
        </div>
        <div className="m-2 text-gray-400 hover:text-yellow-400">
          <Link href="/#contact">Contact</Link>
        </div>
        <div className="m-2 text-gray-400 hover:text-yellow-400">
          <Link href="/doc">Documentation</Link>
        </div>
      </div>
      <div className="content-center">
        <button onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
}
