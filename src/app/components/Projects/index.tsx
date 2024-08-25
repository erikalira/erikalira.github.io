"use client";

import Image from "next/image";
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
import Link from "next/link";

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
        >
          <SwiperSlide>
            <Link
              href="https://erikalira.github.io/drum-machine/"
              target="_blank"
            >
              <Image
                src={drum}
                loading="lazy"
                alt="drum machine"
                width={800}
                height={800}
              />
            </Link>
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="https://erikalira.github.io/quote-machine/"
              target="_blank"
            >
              <Image
                src={quote}
                loading="lazy"
                alt="quote machine"
                width={800}
                height={800}
              />
            </Link>
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="https://lilmario.netlify.app/" target="_blank">
              <Image
                src={mario}
                loading="lazy"
                alt="mario game"
                width={800}
                height={800}
              />
            </Link>
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="https://erikalira.github.io/CRUDFullStack"
              target="_blank"
            >
              <Image
                src={crud}
                loading="lazy"
                alt="products crud fullstack"
                width={800}
                height={800}
              />
            </Link>
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="https://paltier.netlify.app/" target="_blank">
              <Image
                src={paltier}
                loading="lazy"
                alt="palworld tier list"
                width={800}
                height={800}
              />
            </Link>
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="https://amzriddle.netlify.app/" target="_blank">
              <Image
                src={riddle}
                loading="lazy"
                alt="riddle game"
                width={800}
                height={800}
              />
            </Link>
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
