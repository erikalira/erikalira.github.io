"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

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
            <Image
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              loading="lazy"
              alt="descricao"
              width={800}
              height={800}
            />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://swiperjs.com/demos/images/nature-2.jpg"
              loading="lazy"
              alt="descricao"
              width={800}
              height={800}
            />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://swiperjs.com/demos/images/nature-3.jpg"
              loading="lazy"
              alt="descricao"
              width={800}
              height={800}
            />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://swiperjs.com/demos/images/nature-4.jpg"
              loading="lazy"
              alt="descricao"
              width={800}
              height={800}
            />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://swiperjs.com/demos/images/nature-5.jpg"
              loading="lazy"
              alt="descricao"
              width={800}
              height={800}
            />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://swiperjs.com/demos/images/nature-6.jpg"
              loading="lazy"
              alt="descricao"
              width={800}
              height={800}
            />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://swiperjs.com/demos/images/nature-7.jpg"
              loading="lazy"
              alt="descricao"
              width={800}
              height={800}
            />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://swiperjs.com/demos/images/nature-8.jpg"
              loading="lazy"
              alt="descricao"
              width={800}
              height={800}
            />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
