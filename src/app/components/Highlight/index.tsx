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
    <div className="lg:flex m-4">
      <div className="w-full md:content-center m-4">
        <div className="md:flex text-4xl">
          <div className="mr-4">Hello, I&apos;m </div>
          <div
            className={`text-yellow-400 transition-opacity duration-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {texts[currentTextIndex]}
          </div>
        </div>
        <div className="bg-white rounded-full p-2 flex justify-center md:max-w-[250px] text-gray-500 my-4">
          Download Resume
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
