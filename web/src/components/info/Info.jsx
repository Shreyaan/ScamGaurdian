import React from "react";

const Info = () => {
  return (
    <div className="mt-14 md:mt-28 flex flex-col md:flex-row relative mb-10">
      <div className="img flex-1">
        <img
          src={"assets/section.png"}
          alt="img"
          className="aspect-video  w-full"
        />
      </div>
      <div className="textContainer flex-1 flex flex-col justify-center md:h-[23rem] md:z-10 bg-[#DFDFDF] p-4 md:p-10 md:-translate-x-40  md:-mr-40 md:translate-y-10 ">
        <div className="text md:px-0 px-8">
          <h1 className="text-2xl md:text-4xl font-bold text-center md:text-right mb-2">
            Billions of dollars a year are stolen by scammers from people like
            you.
          </h1>
          <p className="text-center md:text-right text-base md:text-xl">
            Scammers' tactics evolve and it becomes more difficult to know what
            is and is not a scam.{" "}
            <span className="text-[#1258AA] font-bold">
              Online shopping scams{" "}
            </span>
            are the most common form that affect everyone, young and old.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
