"use client";

import Image from "next/image";
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
    <div id="about" className="lg:flex m-4 pt-16">
      <div className="w-full md:content-center m-4">
        <div className="md:flex text-4xl h-full">
          <div className="mr-4 w-[50%] h-full place-content-center">
            Hello, I&apos;m
          </div>
          <div
            className={`text-yellow-400 place-content-center w-[50%] transition-opacity duration-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {texts[currentTextIndex]}
          </div>
        </div>
      </div>
      <Image
        src={Emoji}
        height={384}
        width={384}
        alt="Picture of the author"
        className="m-6"
        priority
      ></Image>
    </div>
  );
}
