import React from "react";
import { FaFacebook } from "react-icons/fa";

const Community = () => {
  return (
    <div className="secondary_bg text-white container-div py-10">
      <div className="md:w-4/6 px-auto grid md:grid-cols-2 justify-between gap-10 items-center mx-auto">
        <div className="">
          <h3 className="Title mb-4">Join the community</h3>
          <p>
            Partake in Ranveer’s vision through live content across Social Media
            platforms. Join the Beerbiceps community and help us take the
            conversation forward.
          </p>
        </div>
        <div className="grid grid-cols-5 text-center justify-center gap-12 items-center">
          <div className="">
            <FaFacebook size={80} />
          </div>
          <div className="">
            <FaFacebook size={80} />
          </div>
          <div className="">
            <FaFacebook size={80} />
          </div>
          <div className="">
            <FaFacebook size={80} />
          </div>
          <div className="">
            <FaFacebook size={80} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
