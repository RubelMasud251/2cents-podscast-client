"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Logo from "@/public/Layer_2-1.webp";

// import required modules
import { Autoplay } from "swiper/modules";

const Awards = () => {
  return (
    <div className="secondary_bg text-white container-div py-16">
      <h2 className="Title text-center">Media & Awards</h2>
      <div className="my-10">
        <Swiper
          slidesPerView={6}
          spaceBetween={5}
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
          <SwiperSlide>
            <Image src={Logo} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Logo} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Logo} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Logo} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Logo} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Logo} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Logo} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Logo} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Logo} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Logo} alt="img" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-full flex justify-center">
        <button className="primary_btn ">Show All</button>
      </div>
    </div>
  );
};

export default Awards;
