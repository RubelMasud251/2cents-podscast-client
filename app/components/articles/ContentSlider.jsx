"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";

const ContentSlider = () => {
  return (
    <div>
      <h2 className="Title text-center  md:w-9/12 mx-auto md:px-12 px-2">
        {" "}
        Few awards and recognitions Beerbiceps has gained in few years
      </h2>
      <div className="py-10">
        <Swiper
          slidesPerView={4}
          spaceBetween={3}
          autoplay={{
            delay: 500,
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
            <h4 className="text-center text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
              ullam aliquid minus quidem
            </h4>
            <p className="text-center text-sm pt-4">Bassness world</p>
          </SwiperSlide>
          <SwiperSlide>
            <h4 className="text-center text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
              ullam aliquid minus quidem
            </h4>
            <p className="text-center text-sm pt-4">Bassness world</p>
          </SwiperSlide>
          <SwiperSlide>
            <h4 className="text-center text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
              ullam aliquid minus quidem
            </h4>
            <p className="text-center text-sm pt-4">Bassness world</p>
          </SwiperSlide>
          <SwiperSlide>
            <h4 className="text-center text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
              ullam aliquid minus quidem
            </h4>
            <p className="text-center text-sm pt-4">Bassness world</p>
          </SwiperSlide>
          <SwiperSlide>
            <h4 className="text-center text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
              ullam aliquid minus quidem
            </h4>
            <p className="text-center text-sm pt-4">Bassness world</p>
          </SwiperSlide>
          <SwiperSlide>
            <h4 className="text-center text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
              ullam aliquid minus quidem
            </h4>
            <p className="text-center text-sm pt-4">Bassness world</p>
          </SwiperSlide>
          <SwiperSlide>
            <h4 className="text-center text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
              ullam aliquid minus quidem
            </h4>
            <p className="text-center text-sm pt-4">Bassness world</p>
          </SwiperSlide>
          <SwiperSlide>
            <h4 className="text-center text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
              ullam aliquid minus quidem
            </h4>
            <p className="text-center text-sm pt-4">Bassness world</p>
          </SwiperSlide>
          <SwiperSlide>
            <h4 className="text-center text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
              ullam aliquid minus quidem
            </h4>
            <p className="text-center text-sm pt-4">Bassness world</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ContentSlider;
