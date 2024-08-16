"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Projects() {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper w-full"
    >
      <SwiperSlide>
        <Image
          src="https://swiperjs.com/demos/images/nature-1.jpg"
          loading="eager"
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
      <SwiperSlide>
        <Image
          src="https://swiperjs.com/demos/images/nature-9.jpg"
          loading="lazy"
          alt="descricao"
          width={800}
          height={800}
        />
        <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </SwiperSlide>
    </Swiper>
  );
}
