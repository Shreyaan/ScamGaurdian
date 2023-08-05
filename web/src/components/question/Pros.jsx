import React from "react";
import { data } from "./data";

const Pros = () => {
  console.log("ProsData", data);
  return (
    <div>
      <h1 className="text-center font-bold text-4xl underline underline-offset-1">
        Why Scam Guardian ?
      </h1>

      <div className="flex justify-center gap-4 mt-8">
        {data.map((data, key) => {
          return (
            <div
              className="card bg-[#0F69D2] bg-opacity-10 border-[1px] border-blue-600 flex flex-col justify-center p-5 max-w-md rounded-lg"
              key={data.id}
            >
              <h3 className="text-center text-xl font-semibold">
                {data.title}
              </h3>
              <p className="text-justify mt-2">{data.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pros;
