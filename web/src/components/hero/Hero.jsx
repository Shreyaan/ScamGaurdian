import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <main className="flex md:flex-row flex-col-reverse justify-center items-center md:pt-10">
      <div className="textContainer flex-1 p-7 py-10 md:py-[4.7rem] bg-gradient-to-r from-[#2b5f99] to-[#1258AA] text-white">
        <h1 className="md:text-5xl text-3xl font-bold mb-4">
          Become Smarter So You Can Shop Safe
        </h1>
        <p className="text-base max-w-2xl md:p-0 p-3 ">
          The #1 method of protecting yourself from scams is by knowing what to
          look out for. Our <span className="font-bold">Chrome extension</span>{" "}
          proactively helps you learn what the risks are and what to do to
          protect yourself.
        </p>

        <div className="btn mt-6 hidden md:flex md:gap-4">
          <Link
            href="https://github.com/Shreyaan/ScamGaurdian#installation"
            className="bg-black text-white py-2 px-4 rounded-lg"
          >
            Download Extension
          </Link>
          <a
            href="#"
            className="border border-slate-200 text-white py-2 px-4 rounded-lg"
          >
            Watch Demo
          </a>
        </div>
        <div className="info md:hidden bg-[#b4b4b4] rounded-xl mt-5">
          <p className="font-bold p-3 text-black">
            Open this page on your laptop or desktop computer to access
            Extension
          </p>
        </div>
      </div>
      <div className="imgContainer flex-1">
        <img
          src={"/assets/headerImg.png"}
          alt="img"
          className="w-full h-auto max-h-[400px] object-fill"
        />
      </div>
    </main>
  );
};

export default Hero;
