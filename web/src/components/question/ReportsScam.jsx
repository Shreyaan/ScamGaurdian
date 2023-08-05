import React from "react";
import { reportData } from "./data";

const ReportsScam = () => {
  return (
    <div className="mt-4">
      <h1 className="text-center uppercase font-bold text-4xl underline underline-offset-1">
        need to report a scam ?
      </h1>

      <div className="flex justify-center gap-4 mt-8">
        {reportData.map((data, key) => {
          return (
            <div
              className="card bg-[#0F69D2] bg-opacity-10 border-[1px] border-blue-600 flex flex-col justify-center p-5 max-w-md rounded-lg"
              key={data.id}
            >
              <h3 className="text-center text-xl font-semibold">
                {data.country}
              </h3>
              <p className="text-justify m-auto mt-2">{data.authority}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReportsScam;
