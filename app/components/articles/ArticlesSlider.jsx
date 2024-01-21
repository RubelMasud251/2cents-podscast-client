"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ArticleImg from "@/public/parson.webp";

import { Autoplay } from "swiper/modules";

const ArticlesSlider = () => {
  return (
    <div className="py-10">
      <Swiper
        slidesPerView={4}
        spaceBetween={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="">
          <Link href="">
            <div className="bg-slate-100 p-4 rounded mx-12">
              <Image src={ArticleImg} alt="Img" className="h-60" />
              <h4 className="text-black/80 text-md font-semibold text-center pt-2">
                Award form Governor of Maharashtra
              </h4>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="">
          <Link href="">
            <div className="bg-slate-100 p-4 rounded mx-12">
              <Image src={ArticleImg} alt="Img" className="h-60" />
              <h4 className="text-black/80 text-md font-semibold text-center pt-2">
                Award form Governor of Maharashtra
              </h4>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="">
          <Link href="">
            <div className="bg-slate-100 p-4 rounded mx-12">
              <Image src={ArticleImg} alt="Img" className="h-60" />
              <h4 className="text-black/80 text-md font-semibold text-center pt-2">
                Award form Governor of Maharashtra
              </h4>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="">
          <Link href="">
            <div className="bg-slate-100 p-4 rounded mx-12">
              <Image src={ArticleImg} alt="Img" className="h-60" />
              <h4 className="text-black/80 text-md font-semibold text-center pt-2">
                Award form Governor of Maharashtra
              </h4>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ArticlesSlider;
