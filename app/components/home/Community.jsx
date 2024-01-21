import React from "react";
import { FaFacebook } from "react-icons/fa";

const Community = () => {
  return (
    <div className="secondary_bg text-white container-div pb-10">
      <div className="md:w-5/6 px-auto grid md:grid-cols-2 md:text-left text-center justify-between gap-10 items-center mx-auto">
        <div className="">
          <h3 className="Title mb-4">Join the community</h3>
          <p>
            Partake in Ranveer’s vision through live content across Social Media
            platforms. Join the Beerbiceps community and help us take the
            conversation forward.
          </p>
        </div>
        <div className="flex justify-center text-4xl md:text-7xl gap-2">
          <FaFacebook />
          <FaFacebook />
          <FaFacebook />
          <FaFacebook />
          <FaFacebook />
        </div>
      </div>
    </div>
  );
};

export default Community;
