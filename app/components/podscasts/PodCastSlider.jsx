"use client";
import Link from "next/link";
import Image from "next/image";
import Img from "@/public/parson.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

const PodCastSlider = ({ allPodsCast }) => {
  return (
    <Swiper
      slidesPerView={3}
      autoplay={{
        delay: 1500,
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
          slidesPerView: 2,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      {allPodsCast.map((podcast) => (
        <SwiperSlide key={podcast._id}>
          <Link href="">
            <div className="podcast-card py-2 px-4 bg-gray-100 rounded-md text-black  ">
              <h3 className="text-md font-semibold text-gray-500 leading-10">
                The Show
              </h3>
              <h3 className="text-2xl font-semibold text-gray-700 leading-9">
                Md Rubel Masud
              </h3>
              <Image src={Img} alt="img" className="rounded-lg h-48" />
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PodCastSlider;
