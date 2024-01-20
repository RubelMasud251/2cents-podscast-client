"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Logo from "@/public/parson.webp";

// import required modules
import { Autoplay } from "swiper/modules";

const FeaturePodsCast = () => {
  return (
    <div className="secondary_bg text-white container-div py-16">
      <h2 className="Title text-center primary_color">Feature PodsCast</h2>
      <div className="my-10">
        <Swiper
          slidesPerView={3}
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
          <SwiperSlide>
            <Link href="">
              <div className="podcast-card  bg-gray-100 rounded-md text-black ">
                <Image src={Logo} alt="img" className="rounded-lg-t h-60" />
                <div className="py-2 px-4">
                  <h3 className="text-md font-semibold text-gray-500 leading-10">
                    The Show
                  </h3>
                  <h3 className="text-2xl font-semibold text-gray-700 leading-9">
                    Md Rubel Masud
                  </h3>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="">
              <div className="podcast-card  bg-gray-100 rounded-md text-black ">
                <Image src={Logo} alt="img" className="rounded-lg-t h-60" />
                <div className="py-2 px-4">
                  <h3 className="text-md font-semibold text-gray-500 leading-10">
                    The Show
                  </h3>
                  <h3 className="text-2xl font-semibold text-gray-700 leading-9">
                    Md Rubel Masud
                  </h3>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="">
              <div className="podcast-card  bg-gray-100 rounded-md text-black ">
                <Image src={Logo} alt="img" className="rounded-lg-t h-60" />
                <div className="py-2 px-4">
                  <h3 className="text-md font-semibold text-gray-500 leading-10">
                    The Show
                  </h3>
                  <h3 className="text-2xl font-semibold text-gray-700 leading-9">
                    Md Rubel Masud
                  </h3>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="">
              <div className="podcast-card  bg-gray-100 rounded-md text-black ">
                <Image src={Logo} alt="img" className="rounded-lg-t h-60" />
                <div className="py-2 px-4">
                  <h3 className="text-md font-semibold text-gray-500 leading-10">
                    The Show
                  </h3>
                  <h3 className="text-2xl font-semibold text-gray-700 leading-9">
                    Md Rubel Masud
                  </h3>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="">
              <div className="podcast-card  bg-gray-100 rounded-md text-black ">
                <Image src={Logo} alt="img" className="rounded-lg-t h-60" />
                <div className="py-2 px-4">
                  <h3 className="text-md font-semibold text-gray-500 leading-10">
                    The Show
                  </h3>
                  <h3 className="text-2xl font-semibold text-gray-700 leading-9">
                    Md Rubel Masud
                  </h3>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="">
              <div className="podcast-card  bg-gray-100 rounded-md text-black ">
                <Image src={Logo} alt="img" className="rounded-lg-t h-60" />
                <div className="py-2 px-4">
                  <h3 className="text-md font-semibold text-gray-500 leading-10">
                    The Show
                  </h3>
                  <h3 className="text-2xl font-semibold text-gray-700 leading-9">
                    Md Rubel Masud
                  </h3>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="">
              <div className="podcast-card  bg-gray-100 rounded-md text-black ">
                <Image src={Logo} alt="img" className="rounded-lg-t h-60" />
                <div className="py-2 px-4">
                  <h3 className="text-md font-semibold text-gray-500 leading-10">
                    The Show
                  </h3>
                  <h3 className="text-2xl font-semibold text-gray-700 leading-9">
                    Md Rubel Masud
                  </h3>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="">
              <div className="podcast-card  bg-gray-100 rounded-md text-black ">
                <Image src={Logo} alt="img" className="rounded-lg-t h-60" />
                <div className="py-2 px-4">
                  <h3 className="text-md font-semibold text-gray-500 leading-10">
                    The Show
                  </h3>
                  <h3 className="text-2xl font-semibold text-gray-700 leading-9">
                    Md Rubel Masud
                  </h3>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-full flex justify-center">
        <button className="primary_btn ">Show All</button>
      </div>
    </div>
  );
};

export default FeaturePodsCast;
