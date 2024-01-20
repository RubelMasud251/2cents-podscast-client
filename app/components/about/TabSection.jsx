import React from "react";
import Image from "next/image";
import BiographyImg from "@/public/Biography.webp";

const TabSection = () => {
  return (
    <div className="">
      <h2 className="Title text-center">Know more about me</h2>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-center text-center mx-auto items-center py-12">
        <button className="Tab-btn">Biography</button>
        <button className="Tab-btn">Education</button>
        <button className="Tab-btn">Childhood</button>
        <button className="Tab-btn">Career</button>
      </div>
      {/* Biography section */}
      <div id="biography" className="">
        <h2 className=" text-2xl font-semibold pb-4"> Biography</h2>
        <div className="grid md:grid-cols-2  justify-between items-center ">
          <div className="info">
            <p className="text-lg leading-8 text-gray-100">
              I come from a family of doctors. But I knew I didn’t want to be a
              doctor so engineering was my next best option. I got into an
              engineering college. I had gotten into fitness by then. I was a
              buff guy, for which I was looked down upon by all the teachers. I
              was going through a breakup at that stage and had developed the
              habit of partying every day. After the results came out I told my
              mom I had failed in one subject. She was not that mad at me but I
              had realized I needed to turn my life around. After that, I worked
              hard. Got my grades up eventually. I did a few internships along
              the way. During internships only I realized I wanted to do
              something of my own. So after engineering, I planned to start with
              a fitness app.
            </p>
          </div>
          <div className="">
            <Image src={BiographyImg} alt="about-img" />
          </div>
        </div>
      </div>
      {/* education section */}
      <div id="education" className="py-12">
        education section comming
      </div>

      {/* Childhood section */}
      <div id="childhood" className="py-12">
        <h2 className=" text-2xl font-semibold pb-4"> Childhood</h2>
        <p className="text-lg leading-8 text-gray-100">
          As a kid, I was super notorious and a confident child. I used to take
          part in various competitions. But during my teenage, I was bullied a
          lot and ended up losing that confidence. I was overweight. When you
          enter your teenage years you face a lot of insecurities. But as you
          start growing up you start leaving those insecurities behind. You make
          peace with who you are. And my mum was the source of my confidence.
          She encouraged me every time. It was because of her that I got into
          judo during my school day. Practising Judo really helped me ground
          myself. I went forwards to winning a few competitions as well. Since
          schooling, I had a knack for editing but I never thought it would turn
          out to be my career moving forward.
        </p>
      </div>

      {/* Career section */}
      <div id="career" className="py-12">
        <div className=" grid md:grid-cols-2 grid-cols-1 items-start justify-between gap-6">
          <div className="">
            <Image src={BiographyImg} alt="img" />
          </div>
          <div className="flex flex-col ">
            <h4 className="text-xl font-semibold">Career</h4>
            <h5 className="py-6 text-lg">Start Of BeerBiceps</h5>
            <p className="text-lg leading-8 text-gray-100">
              To promote that I was suggested to start promoting it, wherein
              YouTube happened. BeerBiceps channel started with fitness and
              cooking. After that, we got into self-development, and styling as
              well. After working for a year or two I re-connected with Viraj
              who was my junior in college and currently my co-founder at Monk
              Entertainment.
            </p>
          </div>
        </div>
        <div className="">
          <p className="text-lg leading-8 text-gray-100">Monk- Entertainment</p>
          <br /> <br />
          <p className="text-lg leading-8 text-gray-100">
            Viraj started managing me and soon we realized the gap between the
            budding influencers and the brands. So to build this gap we started
            a talent-managing company called Monk- Entertainment. We started our
            journey in the basement of my building. We got some amazing brands
            and creators on board. A team of 3-4 young engineers started growing
            and now the team of Monk-Entertainment is of around 200+team
            members.
          </p>
        </div>
        <br />
        <br />
        <div className="">
          <p className="text-lg leading-8 text-gray-100">Start of Podcasting</p>
          <br /> <br />
          <p className="text-lg leading-8 text-gray-100">
            Viraj started managing me and soon we realized the gap between the
            budding influencers and the brands. So to build this gap we started
            a talent-managing company called Monk- Entertainment. We started our
            journey in the basement of my building. We got some amazing brands
            and creators on board. A team of 3-4 young engineers started growing
            and now the team of Monk-Entertainment is of around 200+team
            members.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TabSection;

//
