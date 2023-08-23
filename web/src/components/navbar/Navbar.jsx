import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-black text-white hidden md:flex justify-between p-3 z-50 fixed w-full">
      <h1 className="font-bold text-2xl font-sans ml-2">Scam Guardian</h1>

      <div className="links gap-x-16 items-center flex ">
        <Link
          href="/"
          className="text-white text-center text-lg font-semibold hover:border hover:border-slate-200 px-4 py-1 duration-150 hover:animate-pulse rounded-md"
        >
          Contact Us
        </Link>
        <Link
          href="https://github.com/Shreyaan/ScamGaurdian#installation"
          className="mr-2 bg-[#1258AA] bg-opacity-100 py-2 px-5 hover:scale-95 cursor-pointer duration-75 rounded-lg"
        >
          Download Extension
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
