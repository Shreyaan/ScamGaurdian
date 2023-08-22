import React from "react";
import { reportData } from "./data";

const ReportsScam = () => {
  return (
    <div className="mt-4 p-3">
      <h1 className="text-center uppercase font-bold text-4xl underline underline-offset-1">
        need to report a scam ?
      </h1>

      <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
        {reportData.map((data, key) => {
          return (
            <div
              key={data.id}
              className="card bg-[#fff] bg-opacity-10 border-[1px] border-black flex flex-col justify-center p-5 w-full md:max-w-md rounded-lg mb-4 md:mb-0"
            >
              <h3 className="text-center text-xl font-semibold">
                {data.country}
              </h3>
              <p className="text-center cursor-auto underline underline-offset-1 mt-2">
                {data.authority[0]}
              </p>
              <p className="text-center cursor-auto underline underline-offset-1 mt-2">
                {data.authority[1]}
              </p>
              <p className="text-center cursor-auto underline underline-offset-1 mt-2">
                {data.authority[2]}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReportsScam;
