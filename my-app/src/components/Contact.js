import React from "react";
import { contacts } from "../Data";

const Contact = () => {
  return (
    <div className="container mx-auto mb-7 px-6" id="contact">
      <div className="mb-8">
        <h2 className="text-[1.5rem] font-bold">Contact</h2>
        <div className="w-14 h-[3px] rounded-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      </div>

      <div className="text-center">
        <div className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] font-bold mb-2">
          Wanna Work with me?
        </div>
      </div>
    </div>
  );
};

export default Contact;
