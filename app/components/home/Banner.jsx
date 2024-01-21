"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import BannerImg from "@/public/img.webp";

const Banner = () => {
  return (
    <div className="grid md:grid-cols-2 secondary_bg items-center justify-between pt-10  container-div">
      <div className="Banner-info text-white flex flex-col md:gap-8 gap-4 md:translate-x-20">
        <h4 className="text-xl font-semibold">Welcome to BeerBiceps</h4>
        <h4 className="text-xl font-semibold">Take your first step towards </h4>
        <TypeAnimation
          sequence={[
            "Fitness",
            "Self-Growth",
            "A Healthy Lifestyle",
            " Achieving Greatness",
            " Relationships Magnetic",
          ]}
          wrapper="div"
          repeat={Infinity}
          className="primary_color md:text-6xl text-4xl font-semibold "
        />
        <h2 className="md:text-6xl text-4xl font-semibold">with BeerBiceps</h2>
        <form>
          <div className="bg-yellow-500 p-1 md:w-fit w-full flex justify-center rounded-md">
            <input
              type="text"
              className="w-3/4 py-1 pl-4 outline-none"
              placeholder="enter your email"
            />
            <input
              className="text-black font-semibold pl-2 text-center"
              type="submit"
              value="Subscribe"
            />
          </div>
        </form>
      </div>
      <div className="w-[95%] mx-auto">
        <Image src={BannerImg} alt="Banner-img" className="w-full " />
      </div>
    </div>
  );
};

export default Banner;
