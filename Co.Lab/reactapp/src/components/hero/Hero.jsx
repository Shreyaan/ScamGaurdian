import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../../assets/headerImg.png";

const Hero = () => {
  return (
    <main className="flex max-h-full h-80 relative mb-10">
      <div className="text flex flex-col justify-center bg-blue-600 bg-opacity-100 w-[64rem] h-[23rem] z-10 px-16 -ml-10 mt-8 translate-x-10">
        <div className="container max-w-2xl">
          <p className="text-white font-bold text-5xl break-words mb-4">
            Become Smarter So You Can Shop Safe
          </p>
          <span className=" text-white text-base">
            The #1 method of protecting yourself from scams is by knowing what
            to look out for. Our Chrome extension proactively helps you learn
            what the risks are and what to do to protect yourself.
          </span>
        </div>
        <div className="mt-5">
          <Link
            to="#"
            className="bg-black text-white p-2 font-semibold cursor-pointer"
          >
            Download Extension
          </Link>
        </div>
      </div>

      <div className="img w-[50rem] h-[43rem]">
        <img src={heroImg} alt="heroImg" className="aspect-[16/11] w-full" />
      </div>
    </main>
  );
};

export default Hero;
