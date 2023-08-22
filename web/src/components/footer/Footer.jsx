import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-2 md:p-5 flex flex-col md:flex-row justify-between items-center px-2 text-xs md:text-base mt-4">
      <h3 className="font-bold md:mr-10 mb-2 md:mb-0 text-lg text-center">
        Scam Guardian Ⓒ 2023
      </h3>
      <div className="flex flex-col md:flex-row gap-2 md:gap-10 text-lg text-center">
        <span className="cursor-pointer">Terms and Conditions</span>
        <span className="cursor-pointer">Privacy Policy</span>
      </div>
    </footer>
  );
};

export default Footer;
