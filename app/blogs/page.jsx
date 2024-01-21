"use client";

import Link from "next/link";
import Image from "next/image";
import Contact from "../components/home/Contact";
import CategoryDropdown from "../components/podscasts/CategoryDropdown";
import blogImg from "@/public/blog.webp";

const Blogs = () => {
  return (
    <div className="">
      <div className="container-div secondary_bg text-white">
        <h2 className="text-6xl py-4 font-semibold pb-4 text-center">
          All Blogs
        </h2>
        <CategoryDropdown />
        <div className="py-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20">
          <div className="">
            <Link href="">
              <Image src={blogImg} alt="blogImg" className="h-72 rounded-2xl" />
              <div className="">
                <h3 className="text-center text-lg font-semibold">
                  BEWARE – Cyber Crimes, Artificial Intelligence Attacks & More
                  Tech Secrets{" "}
                </h3>
              </div>
            </Link>
            <div className="text-center ">
              <small>January 13, 2024</small>{" "}
            </div>
          </div>
          <div className="">
            <Link href="">
              <Image src={blogImg} alt="blogImg" className="h-72 rounded-2xl" />
              <div className="">
                <h3 className="text-center text-lg font-semibold">
                  BEWARE – Cyber Crimes, Artificial Intelligence Attacks & More
                  Tech Secrets{" "}
                </h3>
              </div>
            </Link>
            <div className="text-center ">
              <small>January 13, 2024</small>{" "}
            </div>
          </div>
          <div className="">
            <Link href="">
              <Image src={blogImg} alt="blogImg" className="h-72 rounded-2xl" />
              <div className="">
                <h3 className="text-center text-lg font-semibold">
                  BEWARE – Cyber Crimes, Artificial Intelligence Attacks & More
                  Tech Secrets{" "}
                </h3>
              </div>
            </Link>
            <div className="text-center ">
              <small>January 13, 2024</small>{" "}
            </div>
          </div>
          <div className="">
            <Link href="">
              <Image src={blogImg} alt="blogImg" className="h-72 rounded-2xl" />
              <div className="">
                <h3 className="text-center text-lg font-semibold">
                  BEWARE – Cyber Crimes, Artificial Intelligence Attacks & More
                  Tech Secrets{" "}
                </h3>
              </div>
            </Link>
            <div className="text-center ">
              <small>January 13, 2024</small>{" "}
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Blogs;
