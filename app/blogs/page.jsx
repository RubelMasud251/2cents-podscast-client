"use client";

import Link from "next/link";
import Image from "next/image";
import Contact from "../components/home/Contact";
import CategoryDropdown from "../components/podscasts/CategoryDropdown";
import blogImg from "@/public/blog.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

const Blogs = () => {
  return (
    <div className="">
      <div className="container-div secondary_bg text-white">
        <h2 className="text-6xl py-4 font-semibold pb-4 text-center">
          All Blogs
        </h2>
        <CategoryDropdown />
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
              <div className="">
                <Link href="">
                  <Image
                    src={blogImg}
                    alt="blogImg"
                    className="h-72 rounded-2xl"
                  />
                  <div className="">
                    <h3 className="text-center text-lg font-semibold">
                      BEWARE – Cyber Crimes, Artificial Intelligence Attacks &
                      More Tech Secrets{" "}
                    </h3>
                  </div>
                </Link>
                <div className="text-center ">
                  <small>January 13, 2024</small>{" "}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <Link href="">
                  <Image
                    src={blogImg}
                    alt="blogImg"
                    className="h-72 rounded-2xl"
                  />
                  <div className="">
                    <h3 className="text-center text-lg font-semibold">
                      BEWARE – Cyber Crimes, Artificial Intelligence Attacks &
                      More Tech Secrets{" "}
                    </h3>
                  </div>
                </Link>
                <div className="text-center ">
                  <small>January 13, 2024</small>{" "}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <Link href="">
                  <Image
                    src={blogImg}
                    alt="blogImg"
                    className="h-72 rounded-2xl"
                  />
                  <div className="">
                    <h3 className="text-center text-lg font-semibold">
                      BEWARE – Cyber Crimes, Artificial Intelligence Attacks &
                      More Tech Secrets{" "}
                    </h3>
                  </div>
                </Link>
                <div className="text-center ">
                  <small>January 13, 2024</small>{" "}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <Link href="">
                  <Image
                    src={blogImg}
                    alt="blogImg"
                    className="h-72 rounded-2xl"
                  />
                  <div className="">
                    <h3 className="text-center text-lg font-semibold">
                      BEWARE – Cyber Crimes, Artificial Intelligence Attacks &
                      More Tech Secrets{" "}
                    </h3>
                  </div>
                </Link>
                <div className="text-center ">
                  <small>January 13, 2024</small>{" "}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <Link href="">
                  <Image
                    src={blogImg}
                    alt="blogImg"
                    className="h-72 rounded-2xl"
                  />
                  <div className="">
                    <h3 className="text-center text-lg font-semibold">
                      BEWARE – Cyber Crimes, Artificial Intelligence Attacks &
                      More Tech Secrets{" "}
                    </h3>
                  </div>
                </Link>
                <div className="text-center ">
                  <small>January 13, 2024</small>{" "}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <Link href="">
                  <Image
                    src={blogImg}
                    alt="blogImg"
                    className="h-72 rounded-2xl"
                  />
                  <div className="">
                    <h3 className="text-center text-lg font-semibold">
                      BEWARE – Cyber Crimes, Artificial Intelligence Attacks &
                      More Tech Secrets{" "}
                    </h3>
                  </div>
                </Link>
                <div className="text-center ">
                  <small>January 13, 2024</small>{" "}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <Link href="">
                  <Image
                    src={blogImg}
                    alt="blogImg"
                    className="h-72 rounded-2xl"
                  />
                  <div className="">
                    <h3 className="text-center text-lg font-semibold">
                      BEWARE – Cyber Crimes, Artificial Intelligence Attacks &
                      More Tech Secrets{" "}
                    </h3>
                  </div>
                </Link>
                <div className="text-center ">
                  <small>January 13, 2024</small>{" "}
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Blogs;
