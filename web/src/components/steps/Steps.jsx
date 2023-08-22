import React from "react";

const Steps = () => {
  return (
    <div className="hidden  bg-[#fff] shadow-xl mb-20 mt-20 text-black max-w-2xl md:flex flex-col items-center justify-center p-6 py-16 ">
      <div className="textContainer max-w-sm">
        <h3 className="text-3xl font-bold mb-1">How Extension Works ?</h3>
        <p className="my-3 before:content-['1:'] before:font-bold">
          {" "}
          Download Chrome extension
        </p>
        <p className="my-3 before:content-['2:'] before:font-bold">
          {" "}
          Enable permissions.
        </p>
        <p className="my-3 before:content-['3:'] before:font-bold">
          When you go to a shopping site, click our extension in the middle of
          the right side of your screen.
        </p>
      </div>
      <div className="video"></div>
    </div>
  );
};

export default Steps;
