import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-5 flex justify-between px-2 text-base mt-4">
      <h3 className="font-bold">Scam Guardian Ⓒ 2023</h3>
      <div className=" flex gap-10">
        <span className="underline underline-offset-1 cursor-pointer">
          Terms and Condition
        </span>
        <span className="underline underline-offset-1 cursor-pointer">
          Privacy Policy
        </span>
      </div>
    </footer>
  );
};

export default Footer;
