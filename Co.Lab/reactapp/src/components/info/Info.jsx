import React from "react";
import img from "../../assets/section.png";

const Info = () => {
  return (
    <div className="container mt-36 flex relative mb-10">
      <div className="img flex-1">
        <img src={img} alt="img" className="aspect-video w-full" />
      </div>
      <div className="textContainer flex-1 flex flex-col justify-center h-[23rem] z-10 bg-[#DFDFDF] p-10 -translate-x-40 -mr-40 translate-y-10">
        <div className="text">
          <h1 className="text-4xl font-bold text-right">
            Billions of dollars a year are stolen by scammers from people like
            you.
          </h1>
          <p className="text-right text-xl">
            Scammers's tactics evolve and it becomes more difficult to know what
            is and is not a scam. Online shopping scams are the most common form
            that affect everyone, young and old.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
