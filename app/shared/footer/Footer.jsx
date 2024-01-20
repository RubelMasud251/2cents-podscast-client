import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/Logo.png";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-200 pt-20 pb-4 container-div w-full grid lg:grid-cols-4 md:grid-cols-3  sm:grid-cols-2  grid-cols-1 gap-y-10">
      <div>
        <div className="lg:text-start text-center lg:w-[50%] lg:ml-auto">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            YouTube Channel
          </h3>
          <ul className="flex flex-col gap-3">
            <Link href="">
              <li>BeerBiceps</li>
            </Link>
            <Link href="">
              <li>Ranveer Allahbadia</li>
            </Link>
          </ul>
        </div>
      </div>
      <div>
        <div className="lg:text-start text-center lg:w-[50%] lg:ml-auto">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Our Brand
          </h3>
          <ul className="flex flex-col gap-3">
            <Link href="">
              <li>BeerBiceps</li>
            </Link>
            <Link href="">
              <li>Ranveer Allahbadia</li>
            </Link>
          </ul>
        </div>
      </div>

      <div className="text-center ">
        <ul className="flex flex-col gap-3 font-semibold">
          <Link href="">
            <li>Podcast</li>
          </Link>
          <Link href="">
            <li>Blogs</li>
          </Link>
          <Link href="">
            <li>About me</li>
          </Link>
          <Link href="">
            <li>BeerBiceps</li>
          </Link>
        </ul>
      </div>
      <div className="text-center px-4">
        <h3 className="text-xl text-left font-semibold text-gray-800 mb-4">
          For a weekly update from team BeerBiceps, Subscribe to our Newsletter
        </h3>
        <form>
          <div className="bg-yellow-500 p-1 flex justify-center w-fit rounded-md">
            <input
              type="text"
              className="w-2/4 px-4 py-1"
              placeholder="enter your email"
            />
            <input
              className="text-black font-semibold px-6"
              type="submit"
              value="Subscribe"
            />
          </div>
        </form>
        <div className="w-20 h-20 mx-auto rounded-full my-4">
          <Image src={logo} alt="logo" className="rounded-full" />
        </div>
        <div className="flex gap-6 justify-center items-center">
          <FaFacebook size={22} className="text-gray-500" />
          <FaFacebook size={22} className="text-gray-500" />
          <FaFacebook size={22} className="text-gray-500" />
          <FaFacebook size={22} className="text-gray-500" />
          <FaFacebook size={22} className="text-gray-500" />
          <FaFacebook size={22} className="text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
