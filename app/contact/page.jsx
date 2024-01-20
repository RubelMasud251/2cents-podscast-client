import React from "react";
import Contact from "../components/home/Contact";
import Image from "next/image";
import ContactUsImg from "@/public/contact-us.webp";
import { MdOutlineMailOutline } from "react-icons/md";

const ContactPage = () => {
  return (
    <div>
      <div className="flex ">
        <div className="w-[65%] justify-center  secondary_bg text-white py-16">
          <div className="w-3/4 mx-auto">
            <h2 className="text-6xl py-4 font-semibold pb-4 ">
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
                className="border bg-transparent  p-4 w-[55%] rounded-md block"
              />
              <input
                type="text"
                placeholder="Email"
                className="border bg-transparent  p-4 w-[55%] rounded-md block"
              />
              <input
                type="text"
                placeholder="Message"
                className="border bg-transparent  p-4 w-[55%] rounded-md block"
              />
              <input type="submit" value="Send" className="primary_btn w-fit" />
            </form>
            {/* email */}
            <div className="flex items-center gap-2 pt-8">
              <div className="flex items-center gap-4">
                <div className="">
                  <MdOutlineMailOutline size={60} />
                </div>
                <div className="">
                  <p>Career related enquiries </p>
                  <p className="primary_color">careers@beerbiceps.com </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="">
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
        <div className="w-[35%] primary_bg flex items-center">
          <Image
            src={ContactUsImg}
            alt="ContactUsImg"
            className="w-[80%] -translate-x-10"
          />
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default ContactPage;
