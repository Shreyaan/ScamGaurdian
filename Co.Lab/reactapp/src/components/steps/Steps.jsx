import React from "react";

const Steps = () => {
  return (
    <div className="bg-[#0F69D2] mb-4 text-white max-w-2xl flex flex-col p-6 py-16">
      <div className="textContainer max-w-sm">
        <h3 className="text-3xl font-bold mb-1">How Extension Works ?</h3>
        <p className="my-3 before:content-['Step-1:-'] before:font-bold before:underline before:underline-offset-1">
          {" "}
          Download Chrome extension
        </p>
        <p className="my-3 before:content-['Step-2:-'] before:font-bold before:underline before:underline-offset-1">
          {" "}
          Enable permissions.
        </p>
        <p className="my-3 before:content-['Step-3:-'] before:font-bold before:underline before:underline-offset-1">
          When you go to a shopping site, click our extension in the middle of
          the right side of your screen.
        </p>
      </div>
      <div className="video"></div>
    </div>
  );
};

export default Steps;
