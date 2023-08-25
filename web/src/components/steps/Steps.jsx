import React from "react";

const Steps = () => {
  return (
    <div className="hidden md:flex bg-white rounded-lg p-8 mb-20 mt-20 gap-5 text-black items-center">
      <div className="textContainer p-6 px-28">
        <h3 className="text-4xl font-bold mb-4">How Extension Works ?</h3>
        <ul className="list-decimal pl-6 space-y-3 text-xl">
          <li>Download the Chrome extension.</li>
          <li>Enable necessary permissions.</li>
          <li>
            When visiting a shopping site, click our extension on the right side
            of your screen.
          </li>
        </ul>
      </div>
      <div className="video w-full">
        <iframe
          width="749"
          height="499"
          src="https://www.youtube.com/embed/4TGtFWk7xoA"
          title="Demo Video for Scam Guardian"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Steps;
