import React from "react";
import Contact from "../components/home/Contact";
import Image from "next/image";
import ContactUsImg from "@/public/contact-us.webp";
import { MdOutlineMailOutline } from "react-icons/md";

const ContactPage = () => {
  return (
    <div>
      <div className="md:flex ">
        <div className="md:w-[65%] justify-center  secondary_bg text-white py-16">
          <div className="md:w-3/4 px-4 mx-auto">
            <h2 className="md:text-6xl text-4xl py-4 font-semibold pb-4 ">
              Get in <span className="primary_color">touch</span>
            </h2>
            <p className="text-xl font-semibold pb-8">
              If you have any enquiries you can contact us on via the form
              below.{" "}
            </p>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name"
                className="border bg-transparent  p-4 md:w-[55%] rounded-md block"
              />
              <input
                type="text"
                placeholder="Email"
                className="border bg-transparent  p-4 md:w-[55%] rounded-md block"
              />
              <input
                type="text"
                placeholder="Message"
                className="border bg-transparent  p-4 md:w-[55%] rounded-md block"
              />
              <input type="submit" value="Send" className="primary_btn w-fit" />
            </form>
            {/* email */}
            <div className="md:flex justify-center text-center items-center gap-8 md:gap-2  pt-8">
              <div className="md:flex items-center gap-4">
                <div className="text-center  flex justify-center">
                  <MdOutlineMailOutline size={60} />
                </div>
                <div className="">
                  <p>Career related enquiries </p>
                  <p className="primary_color">careers@beerbiceps.com </p>
                </div>
              </div>
              <div className="md:flex items-center gap-4">
                <div className="text-center  flex justify-center">
                  <MdOutlineMailOutline size={60} />
                </div>
                <div className="">
                  <p>Business related enqui </p>
                  <p className="primary_color"> business@beerbiceps.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[35%] primary_bg flex items-center">
          <Image
            src={ContactUsImg}
            alt="ContactUsImg"
            className="w-[80%] md:ml-0  mx-auto md:-translate-x-10"
          />
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default ContactPage;
