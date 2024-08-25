"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import crud from "../../../../public/projects/crud-produtos.png";
import drum from "../../../../public/projects/drum-machine.png";
import mario from "../../../../public/projects/mario.png";
import quote from "../../../../public/projects/quote-machine.png";
import paltier from "../../../../public/projects/paltier.png";
import riddle from "../../../../public/projects/riddle-game.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

const slidesData = [
  {
    href: "https://erikalira.github.io/drum-machine/",
    src: drum,
    alt: "drum machine",
  },
  {
    href: "https://erikalira.github.io/quote-machine/",
    src: quote,
    alt: "quote machine",
  },
  {
    href: "https://lilmario.netlify.app/",
    src: mario,
    alt: "mario game",
  },
  {
    href: "https://erikalira.github.io/CRUDFullStack",
    src: crud,
    alt: "products crud fullstack",
  },
  {
    href: "https://paltier.netlify.app/",
    src: paltier,
    alt: "palworld tier list",
  },
  {
    href: "https://amzriddle.netlify.app/",
    src: riddle,
    alt: "riddle game",
  },
];

export default function Projects() {
  return (
    <div id="projects" className="pt-16">
      <div className="my-4 text-4xl px-4 py-8">
        <h2 className="text-center mb-4">Projects</h2>
        <Swiper
          id="projects"
          pagination={{
            clickable: true,
          }}
          navigation={true}
          slidesPerView={"auto"}
          centeredSlides={true}
          loop={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          style={{ height: "600px" }}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <Link href={slide.href} target="_blank">
                <Image
                  src={slide.src}
                  loading="lazy"
                  alt={slide.alt}
                  width={800}
                  height={800}
                />
              </Link>
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
