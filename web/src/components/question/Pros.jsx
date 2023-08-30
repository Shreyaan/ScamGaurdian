import React from "react";
import { data } from "./data";

const Pros = () => {
  return (
    <div className="p-3">
      <h1 className="text-center font-bold text-4xl">Why Scam Guardian?</h1>

      <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
        {data.map((item) => (
          <div
            key={item.id}
            className="card bg-[#fff] bg-opacity-10 border border-black flex flex-col items-center p-4 max-w-md rounded-xl mb-4 md:mb-0"
          >
            <h3 className="text-center text-xl font-semibold">{item.title}</h3>
            <p className="md:text-center text-justify tracking-tight mt-2">
              {item.content}
            </p>
          </div>
        ))}
      </div>
      <div className="md:hidden info bg-[#B4B4B4] p-4 rounded-xl">
        <p className="font-bold text-black text-center text-lg">
          Open this page on your laptop or desktop computer to access Extension
        </p>
      </div>
    </div>
  );
};

export default Pros;
