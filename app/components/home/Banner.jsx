"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import BannerImg from "@/public/img.webp";

const homeBanner = () => {
  return (
    <div className="grid md:grid-cols-2 secondary_bg items-center justify-between pt-10  container-div">
      <div className="Banner-info text-white flex flex-col gap-8 md:translate-x-20">
        <h4 className="text-xl font-semibold">Welcome to BeerBiceps</h4>
        <h4 className="text-xl font-semibold">Take your first step towards </h4>
        <TypeAnimation
          sequence={[
            "Fitness",
            "Self-Growth",
            "A Healthy Lifestyle",
            " Achieving Greatness",
            "Better Relationships Magnetic",
          ]}
          wrapper="div"
          repeat={Infinity}
          className="primary_color text-6xl font-semibold"
        />
        <h2 className="text-6xl font-semibold ">with BeerBiceps</h2>
        <form>
          <div className="bg-yellow-500 p-1 w-fit flex justify-center rounded-md">
            <input
              type="text"
              className="w-2/4 py-1"
              placeholder="enter your email"
            />
            <input
              className="text-black font-semibold "
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

export default homeBanner;
