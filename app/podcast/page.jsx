import React from "react";
import Contact from "../components/home/Contact";
import Link from "next/link";
import Image from "next/image";
import Img from "@/public/parson.webp";
import CategoryDropdown from "../components/podscasts/CategoryDropdown";

const PodsCasts = () => {
  return (
    <div>
      <div className="container-div secondary_bg text-white py-12">
        <h2 className="Title text-center pb-12">Podcasts</h2>
        <CategoryDropdown />
        {/* card */}
        <Link href="">
          <div className="podcast-card py-2 px-4 bg-gray-100 rounded-md text-black w-3/12 ">
            <h3 className="text-md font-semibold text-gray-500 leading-10">
              The Show
            </h3>
            <h3 className="text-2xl font-semibold text-gray-700 leading-9">
              Md Rubel Masud
            </h3>
            <Image src={Img} alt="img" className="rounded-lg h-48" />
          </div>
        </Link>
      </div>
      <Contact />
    </div>
  );
};

export default PodsCasts;
