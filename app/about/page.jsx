import React from "react";
import Image from "next/image";
import Contact from "../components/home/Contact";
import TabSection from "../components/about/TabSection";
import AboutImg from "@/public/about.webp";

const About = () => {
  return (
    <div className="">
      <div className="container-div secondary_bg text-white">
        {/* heading section */}
        <div className="grid md:grid-cols-2  justify-between items-center py-12">
          <div className="info">
            <h2 className="text-6xl md:w-2/4 font-semibold pb-4">
              {" "}
              Ranveer Allahbadia
            </h2>
            <p className="text-xl leading-8 text-gray-100">
              BeerBicpes a.k.a. Ranveer Allahbadia is an entrepreneur, YouTuber,
              Podcaster, and content creator. My life mantra is to explore the
              unexplored. But how did this journey start? From being an average
              engineering student to having around 12Million+ followers across 7
              YouTube channels and 3 successful start-ups. This is my journey.
            </p>
          </div>
          <div className="md:m-20">
            <Image src={AboutImg} alt="about-img" />
          </div>
        </div>
        <TabSection />
      </div>
      <Contact />
    </div>
  );
};

export default About;
