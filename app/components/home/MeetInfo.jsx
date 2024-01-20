import React from "react";
import Link from "next/link";
import Image from "next/image";
import parson from "@/public/parson.webp";
import { FaFacebook } from "react-icons/fa";

const MeetInfo = () => {
  return (
    <div className="secondary_bg text-white container-div grid md:grid-cols-2 gap-4 py-10">
      <div className="w-full h-full">
        <Image src={parson} alt="img" className="w-full" />
      </div>
      <div className="details flex flex-col gap-6">
        <h3 className="Title">
          <span className="primary_color">Meet</span> Ranveer
        </h3>
        <p className="text-xl">
          BeerBicpes a.k.a. Ranveer Allahbadia is an entrepreneur, YouTuber,
          Podcaster, and content creator. My life mantra is to explore the
          unexplored. But how did this journey start? From being an average
          engineering student to having around 12Million+ followers across 7
          YouTube channels and 3 successful start-ups. This is my journey.
        </p>
        <button className="secondary_btn w-fit">Know more</button>
        <h4 className="text-2xl">Follow me on</h4>
        <div className="flex gap-6 items-center">
          <FaFacebook size={32} />
          <FaFacebook size={32} />
          <FaFacebook size={32} />
          <FaFacebook size={32} />
          <FaFacebook size={32} />
          <FaFacebook size={32} />
        </div>
      </div>
    </div>
  );
};

export default MeetInfo;
