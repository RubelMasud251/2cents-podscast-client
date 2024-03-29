import React from "react";
import Image from "next/image";
import logo from "@/public/Logo.png";

const Contact = () => {
  return (
    <div className="">
      <div className="grid md:grid-cols-2 gap-4 items-center md:w-7/12 py-10 md:bg-slate-50 border-r md:p-12 p-4">
        <div className="md:w-64 w-40 mx-auto rounded-full">
          <Image src={logo} alt="logo" className="rounded-full" />
        </div>
        <div className="">
          <h3 className="Title leading-10 mb-8 md:text-left text-center">
            For A Weekly Update From TEAM BEERBICEPS
          </h3>
          <form>
            <input
              type="text"
              name=""
              id=""
              placeholder="Email Address"
              className="outline-none border-b border-yellow-400 block mb-4 w-full"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="First Name"
              className="outline-none border-b border-yellow-400 block mb-4 w-full"
            />
            <input
              type="submit"
              value="Subscribe"
              className="w-full py-2 rounded-full bg-black primary_color secondary_bg"
            />
            <small className="text-center mt-8">
              We respect your privacy. Unsubscribe at anytime.
            </small>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
